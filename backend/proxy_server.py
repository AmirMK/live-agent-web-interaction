import asyncio
import json
import logging
import os
import ssl
from datetime import datetime
import websockets
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Load .env file automatically
env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
if os.path.exists(env_path):
    with open(env_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("live_agent_phone.proxy")

LOG_FILE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "live_agent_phone_llm_activity.log")

def write_to_llm_log(section_title: str, content: str):
    try:
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open(LOG_FILE_PATH, "a", encoding="utf-8") as f:
            f.write(f"\n================================================================================\n")
            f.write(f"TIMESTAMP: {timestamp}\n")
            f.write(f"SECTION: {section_title}\n")
            f.write(f"--------------------------------------------------------------------------------\n")
            f.write(f"{content}\n")
            f.write(f"================================================================================\n\n")
    except Exception as e:
        logger.error(f"Failed to write to LLM log file: {e}")

app = FastAPI(title="Live Agent - PhoneVerse Smartphone Specialist Proxy Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PHONE_STORE_TOOLS = [
    {
        "functionDeclarations": [
            {
                "name": "get_screen_content",
                "description": "Retrieve active filters, URL search params, catalog listings, trending phones, prices, specs, ratings, and page context from the PhoneVerse store page the user is currently viewing.",
                "parameters": {
                    "type": "OBJECT",
                    "properties": {}
                }
            },
            {
                "name": "enter_form_data",
                "description": "Enter data into a specific filter or form field on the PhoneVerse store page. Supports text inputs (Keyword, Min Price, Max Price), checkboxes & pills (Brand, Operating System/System, Network Type, 5G, Rating, Storage, Color, Resolution, Detailed Resolution, Camera, Screen Size), dropdowns (Sort By, Home Rating Select, System Radio), and buttons ('Search Phones', 'Reset Filters', 'Clear All', 'Clear Selection').",
                "parameters": {
                    "type": "OBJECT",
                    "properties": {
                        "field_name": {
                            "type": "STRING",
                            "description": "The name, label, or selector of the filter or control: Use 'Keyword' for model series, sub-brands, and terms like 'Galaxy', 'Pixel', 'iPhone', 'Ultra', 'Fold', 'Pro', 'Flip', or specific phone names. Use 'Brand' ONLY for manufacturer names like 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Motorola', 'Sony', 'Nothing'. Other fields: 'Operating System', 'System', 'Network', '5G', 'Min Price', 'Max Price', 'Rating', 'Storage', 'Color', 'Resolution', 'Detailed Resolution', 'Camera', 'Screen Size', 'Sort By', 'Search Phones', 'Reset Filters', 'Clear All', 'Clear Selection'."
                        },
                        "value": {
                            "type": "STRING",
                            "description": "The value to set or option to select. For checkboxes/toggles use 'check'/'uncheck' or 'true'/'false'. For buttons use 'click'."
                        }
                    },
                    "required": ["field_name", "value"]
                }
            },
            {
                "name": "highlight_elements",
                "description": "Spotlight-highlight and select smartphone cards on the catalog grid to focus the customer's attention. Pass an array of exact unique Phone IDs (e.g. ['0', '12', '34']) extracted from get_screen_content. You can pass one OR multiple Phone IDs at once to highlight all qualifying devices simultaneously.",
                "parameters": {
                    "type": "OBJECT",
                    "properties": {
                        "element_texts": {
                            "type": "ARRAY",
                            "items": {"type": "STRING"},
                            "description": "An array of one or more exact unique Phone IDs (e.g. ['0'], ['12', '34']) from get_screen_content. To highlight multiple phones (e.g. all phones with the largest screen or top picks), include all their IDs in this array."
                        }
                    },
                    "required": ["element_texts"]
                }
            },
            {
                "name": "manage_user_profile",
                "description": "Manage (add, update, or delete) facts and smartphone preferences in the user's profile context memory. Specify the action, fact description, and if updating, the original fact to replace.",
                "parameters": {
                    "type": "OBJECT",
                    "properties": {
                        "action": {
                            "type": "STRING",
                            "enum": ["add", "update", "delete"],
                            "description": "The action to perform: 'add' to insert a new fact, 'update' to modify an existing fact, 'delete' to remove a fact."
                        },
                        "fact": {
                            "type": "STRING",
                            "description": "The text of the fact to add/delete, or the new text if updating."
                        },
                        "old_fact": {
                            "type": "STRING",
                            "description": "The exact original text of the fact to be replaced (required ONLY when action is 'update')."
                        }
                    },
                    "required": ["action", "fact"]
                }
            }
        ]
    }
]

class GeminiLiveBridge:
    def __init__(self, client_ws: WebSocket, api_key: str, model_name: str, system_instruction: str = None, user_facts: list = None):
        self.client_ws = client_ws
        self.api_key = api_key
        self.model_name = model_name if model_name.startswith("models/") else f"models/{model_name}"
        facts_str = "\n".join([f"- {f}" for f in (user_facts or [])])
        base_instruction = (
            "You are an expert real-time conversational AI smartphone tech specialist and shopping assistant for PhoneVerse (mock-phone-store-641879769713.us-central1.run.app).\n"
            "CRITICAL OPERATIONAL RULES:\n"
            "1. You MUST call `get_screen_content` FIRST at the start of every interaction to inspect the current page, active filters, all available options in `Available=[...]`, URL parameters, sort order, and visible phones.\n"
            "2. MODEL SERIES VS BRAND FILTERING:\n"
            "   - Specific model series, product lines, and sub-brands (e.g., 'Galaxy', 'Pixel', 'iPhone', 'Ultra', 'Pro', 'Fold', 'Flip', 'Edge') MUST ALWAYS be entered into the `Keyword` filter field: call `enter_form_data(field_name='Keyword', value='<Model Series>')`.\n"
            "   - Do NOT select or restrict the `Brand` filter for model terms (for example, if the user asks for 'Galaxy phones', set `Keyword: Galaxy` rather than checking Brand Samsung; if they ask for 'Pixel phones', set `Keyword: Pixel`).\n"
            "   - Use the `Brand` filter ONLY when the user explicitly names the manufacturer: 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Motorola', 'Sony', 'Nothing'.\n"
            "3. HOME PAGE 3-STEP CONFIRMATION PROTOCOL (`/index.html` or `/`):\n"
            "   - STEP 1 (APPLY FORM FIELDS IMMEDIATELY): When the user specifies search criteria on the Home page (e.g. 5G, Budget, Brand, Rating, Storage), IMMEDIATELY call `enter_form_data` for each requested filter so the user sees the form filled out on their screen in real-time.\n"
            "   - STEP 2 (ASK CONFIRMATION TO SEARCH): In your spoken response, tell the user what filters you configured on the form, and ask for their confirmation before submitting (e.g. 'I have configured your preferences on the form. Would you like me to run the search?').\n"
            "   - STEP 3 (EXECUTE SEARCH ONLY AFTER CONFIRMATION): ONLY call `enter_form_data(field_name='Search Phones', value='click')` AFTER the user explicitly confirms (e.g. 'yes', 'search', 'go ahead'). NEVER submit the search before user confirmation.\n"
            "4. DYNAMIC DISCOVERY OF FILTER NAMES & OPTIONS: All filter names, categories, and valid option values must be discovered dynamically from the `Available=[...]` lists and form controls returned by `get_screen_content`. When the user asks what options, storage sizes, colors, camera resolutions, brands, operating systems, or screen sizes are available, ALWAYS quote ONLY the exact available choices from the `Available=[...]` list in `get_screen_content`. Never invent or hallucinate theoretical numbers or values that are not in the list.\n"
            "5. DYNAMIC SEARCH PAGE (`/search.html`): Changing any filter immediately updates catalog results in real-time without page reloads.\n"
            "6. APPLYING & MODIFYING SEARCH FILTERS:\n"
            "   - To apply a filter: call `enter_form_data(field_name='<Field Name from Screen>', value='<Value from Available List>')`.\n"
            "   - To uncheck/remove a specific option: pass `value='uncheck <Value>'` or `value='none'`.\n"
            "   - To set budget ranges: call `enter_form_data(field_name='Min Price', value='<number>')` and `enter_form_data(field_name='Max Price', value='<number>')`.\n"
            "   - To set keyword search: call `enter_form_data(field_name='Keyword', value='<model or text>')` (or `value='clear'` to reset keyword).\n"
            "   - PRESERVE CONTEXT & DO NOT ACCIDENTALLY RESET: NEVER click 'Reset Filters' or 'Clear All' unless the user explicitly asks to clear everything or start over. Only modify the specific filters requested.\n"
            "7. SORTING RESULTS: When the user asks to sort (e.g., top rated, price low to high, price high to low, name A to Z, relevance), call `enter_form_data(field_name='Sort By', value='<sort_code>')` using the sort keys discovered in `get_screen_content`.\n"
            "8. SELECTING & HIGHLIGHTING PHONES (STRICT UNIQUE ID & MULTI-CARD SUPPORT):\n"
            "   - To highlight/select smartphones, ALWAYS pass the exact unique numeric Phone ID(s) found in `get_screen_content` (e.g. `highlight_elements(element_texts=['12'])` or `highlight_elements(element_texts=['5', '12'])`). Do NOT pass generic model title strings when IDs are available.\n"
            "   - MULTIPLE HIGHLIGHTS: You CAN and SHOULD pass multiple Phone IDs in the array (e.g. `element_texts=['0', '4', '12']`) whenever multiple phones meet the criteria (such as all phones with the largest screen, highest camera MP, or top recommendations). Calling this will highlight all of them simultaneously while clearing previous selections.\n"
            "   - Phone IDs (e.g., [ID: 12]) are strictly internal technical identifiers for tool arguments. NEVER speak, read aloud, or mention Phone ID numbers to the customer. Always refer to phones naturally by their model name.\n"
            "9. MULTI-STEP REQUESTS: If the user requests multiple filters, make individual `enter_form_data` tool calls for each filter.\n"
            "10. VERIFICATION: After applying actions, call `get_screen_content` to inspect the updated catalog and verify active URL parameters before delivering your response.\n"
            f"User Profile Facts:\n{facts_str}\n"
            "11. Be enthusiastic, clear, concise, and knowledgeable like a top-tier smartphone tech advisor."
        )

        self.system_instruction = system_instruction or base_instruction
        self.gemini_ws = None
        self.running = False

    async def run(self):
        self.running = True
        logger.info(f"Connecting to Gemini Live WS with model: {self.model_name}")

        url = f"wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key={self.api_key}"

        ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE

        try:
            async with websockets.connect(url, ssl=ssl_context, max_size=10_000_000, ping_interval=20, ping_timeout=20) as g_ws:
                self.gemini_ws = g_ws

                # Setup payload using exact CamelCase JSON schema
                setup_payload = {
                    "setup": {
                        "model": self.model_name,
                        "generationConfig": {
                            "responseModalities": ["AUDIO"],
                            "speechConfig": {
                                "voiceConfig": {
                                    "prebuiltVoiceConfig": {
                                        "voiceName": "Puck"
                                    }
                                }
                            }
                        },
                        "tools": PHONE_STORE_TOOLS,
                        "systemInstruction": {
                            "parts": [{"text": self.system_instruction}]
                        }
                    }
                }

                logger.info(f"Sending setup payload to Gemini...")
                await self.gemini_ws.send(json.dumps(setup_payload))

                init_resp = await asyncio.wait_for(self.gemini_ws.recv(), timeout=10.0)
                logger.info(f"Gemini init response received: {init_resp[:200]}")

                await self.client_ws.send_json({
                    "type": "status",
                    "status": "connected",
                    "message": f"Connected to Gemini Live ({self.model_name})"
                })

                receive_task = asyncio.create_task(self._receive_from_gemini())
                send_task = asyncio.create_task(self._receive_from_client())

                done, pending = await asyncio.wait(
                    [receive_task, send_task],
                    return_when=asyncio.FIRST_COMPLETED
                )

                for task in pending:
                    task.cancel()

        except Exception as e:
            logger.error(f"Error in GeminiLiveBridge: {e}", exc_info=True)
            try:
                await self.client_ws.send_json({
                    "type": "error",
                    "message": f"Gemini connection error: {str(e)}"
                })
            except Exception:
                pass
        finally:
            self.running = False
            logger.info("Gemini Live Bridge session closed.")

    async def _receive_from_client(self):
        while self.running:
            try:
                message = await self.client_ws.receive_text()
                data = json.loads(message)
                msg_type = data.get("type")

                if not self.gemini_ws:
                    continue

                if msg_type == "audio":
                    pcm_b64 = data.get("data")
                    if pcm_b64:
                        payload = {
                            "realtimeInput": {
                                "mediaChunks": [
                                    {
                                        "mimeType": "audio/pcm",
                                        "data": pcm_b64
                                    }
                                ]
                            }
                        }
                        await self.gemini_ws.send(json.dumps(payload))

                elif msg_type == "text":
                    text_content = data.get("text")
                    if text_content:
                        payload = {
                            "clientContent": {
                                "turns": [
                                    {
                                        "role": "user",
                                        "parts": [{"text": text_content}]
                                    }
                                ],
                                "turnComplete": True
                            }
                        }
                        write_to_llm_log("USER TEXT PROMPT SENT TO LLM", text_content)
                        logger.info(f"User text prompt sent to Gemini: {text_content}")
                        await self.gemini_ws.send(json.dumps(payload))

                elif msg_type == "tool_response":
                    function_responses = data.get("data", [])
                    if function_responses:
                        formatted_function_responses = []
                        log_lines = []

                        for fn_resp in function_responses:
                            fc = fn_resp.get("functionCall", {}) if isinstance(fn_resp, dict) and "functionCall" in fn_resp else fn_resp
                            
                            call_id = fc.get("id") or fn_resp.get("id", "")
                            call_name = fc.get("name") or fn_resp.get("name", "")
                            
                            raw_res = None
                            if "response" in fn_resp and isinstance(fn_resp["response"], dict):
                                raw_res = fn_resp["response"].get("result") or fn_resp["response"]
                            else:
                                raw_res = fc.get("result", "")

                            if isinstance(raw_res, str):
                                res_payload = {"result": raw_res}
                            elif isinstance(raw_res, dict):
                                res_payload = raw_res
                            else:
                                res_payload = {"result": str(raw_res)}

                            formatted_item = {
                                "id": call_id,
                                "name": call_name,
                                "response": res_payload
                            }
                            formatted_function_responses.append(formatted_item)

                            log_lines.append(f"FUNCTION: {call_name} (ID: {call_id})")
                            if call_name == "get_screen_content" and isinstance(raw_res, str):
                                log_lines.append(f"\n--- [EXACT FULL WEBSITE CONTENT SENT TO LLM ({len(raw_res)} CHARS)] ---")
                                log_lines.append(raw_res)
                                log_lines.append("--- [END OF WEBSITE CONTENT] ---\n")
                            else:
                                log_lines.append(f"RESULT:\n{json.dumps(res_payload, indent=2)}")

                        payload = {
                            "toolResponse": {
                                "functionResponses": formatted_function_responses
                            }
                        }

                        tool_content_str = "\n".join(log_lines)
                        write_to_llm_log("TOOL RESPONSE SENT TO LLM", tool_content_str)
                        logger.info(f"Tool response sent to Gemini:\n{tool_content_str}")
                        await self.gemini_ws.send(json.dumps(payload))

            except WebSocketDisconnect:
                logger.info("Client WebSocket disconnected.")
                break
            except Exception as e:
                logger.debug(f"Client loop error: {e}")
                break

    async def _receive_from_gemini(self):
        while self.running and self.gemini_ws:
            try:
                raw_msg = await self.gemini_ws.recv()
                msg = json.loads(raw_msg)

                # Check for tool call
                tool_call = msg.get("toolCall")
                if tool_call:
                    function_calls = tool_call.get("functionCalls", [])
                    write_to_llm_log("GEMINI REQUESTED TOOL CALL", json.dumps(function_calls, indent=2))
                    logger.info(f"Received tool call from Gemini: {function_calls}")
                    await self.client_ws.send_json({
                        "type": "tool_call",
                        "functionCalls": function_calls
                    })

                server_content = msg.get("serverContent")
                if server_content:
                    if server_content.get("interrupted"):
                        await self.client_ws.send_json({"type": "interrupted"})

                    input_trans = server_content.get("inputTranscription") or server_content.get("userTranscription")
                    if input_trans and input_trans.get("text"):
                        await self.client_ws.send_json({
                            "type": "user_transcript",
                            "text": input_trans.get("text")
                        })

                    model_turn = server_content.get("modelTurn")
                    if model_turn:
                        parts = model_turn.get("parts", [])
                        for part in parts:
                            inline_data = part.get("inlineData")
                            if inline_data:
                                b64_audio = inline_data.get("data")
                                mime_type = inline_data.get("mimeType", "audio/pcm;rate=24000")
                                await self.client_ws.send_json({
                                    "type": "audio",
                                    "data": b64_audio,
                                    "mimeType": mime_type
                                })

                            text_val = part.get("text")
                            if text_val:
                                await self.client_ws.send_json({
                                    "type": "transcript",
                                    "text": text_val
                                })

                    output_trans = server_content.get("outputTranscription")
                    if output_trans and output_trans.get("text"):
                        await self.client_ws.send_json({
                            "type": "transcript",
                            "text": output_trans.get("text")
                        })

            except websockets.exceptions.ConnectionClosed:
                logger.info("Gemini WebSocket connection closed.")
                break
            except Exception as e:
                logger.error(f"Error receiving from Gemini: {e}")
                break

@app.get("/")
async def root():
    return {
        "status": "ok",
        "service": "Live Agent - PhoneVerse Smartphone Specialist Gemini Live Bridge",
        "message": "Proxy server is running. Connect Chrome Extension via WebSocket at ws://localhost:8082/ws"
    }

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "live-agent-phone-proxy"}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    logger.info("\n[PROXY] Incoming client connection request...")
    await websocket.accept()
    logger.info("[PROXY] Client connection accepted.")

    api_key = websocket.query_params.get("key") or os.environ.get("GEMINI_API_KEY")
    model_name = "models/gemini-2.5-flash-native-audio-preview-12-2025"

    if not api_key:
        logger.error("[PROXY ERROR] Missing API key! Closing WebSocket.")
        await websocket.close(code=4000, reason="Gemini API Key missing")
        return

    bridge = GeminiLiveBridge(client_ws=websocket, api_key=api_key, model_name=model_name)
    await bridge.run()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8082))
    logger.info(f"Starting Live Agent Phone Proxy Server on port {port}...")
    try:
        uvicorn.run(app, host="0.0.0.0", port=port)
    except KeyboardInterrupt:
        logger.info("Proxy server stopped by user (KeyboardInterrupt).")
