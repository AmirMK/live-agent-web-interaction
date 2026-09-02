# live-agent-web-interaction

Here is a concise and structured description for the `mock_phone_store` folder:



### `mock_phone_store` — Mock Phone E-Commerce Website & Embedded Live Agent

The `mock_phone_store` folder contains a complete mock e-commerce web application for a smartphone retailer (**PhoneVerse**). It provides realistic mock smartphone catalog data and multiple browseable pages where users can explore devices, filter by specifications, and interact in real time with an embedded multimodal voice AI agent.

---

#### Key Capabilities:
* **Multi-Page Browsing:** Includes a landing/home page with guided search wizards and a dynamic search page with multi-faceted filtering (5G toggles, brands, price sliders, storage, camera specs, and sorting).
* **Embedded Live Voice AI Agent:** Pre-integrated with the floating live agent widget (`agent-widget.js`), enabling visitors to talk naturally with an AI smartphone specialist that can directly control the website's filters and highlight recommended products.
* **Realistic Catalog Dataset:** Pre-populated with rich smartphone mock data (models, processors, display sizes, cameras, ratings, and pricing).

---

#### Folder Structure Overview:

```
mock_phone_store/
├── public/                     # Static frontend web assets & pages
│   ├── index.html              # Home page with feature highlights & search wizard
│   ├── search.html             # Dynamic 3-column catalog grid & interactive filter sidebar
│   ├── js/                     # Client-side store logic & in-memory catalog data
│   │   ├── search.js           # Reactive filtering engine & dynamic URL query sync
│   │   ├── home.js             # Home page form handlers
│   │   └── data.js             # Mock smartphone database
│   ├── css/                    # Store styling & responsive layout
│   ├── agent-widget.js         # Embedded Voice AI Agent UI & WebSocket client
│   ├── agent-widget.css        # Styles for the embedded AI widget drawer & visualizer
│   └── pcm-processor.js        # AudioWorklet for real-time 16kHz PCM audio streaming
│
├── server.js                   # Node.js / Express web server to host the store
├── Dockerfile                  # Container definition for Cloud Run / Docker deployment
└── package.json                # Project dependencies & start scripts
```


### `backend` — FastAPI WebSocket Proxy & Gemini Live Bridge

The `backend` folder contains the lightweight Python server that acts as a secure, real-time bridge between browser clients (Chrome Extension or embedded website widget) and Google's **Gemini 2.0 Flash Live Multimodal API**. It handles low-latency bidirectional audio streaming, system prompt rules, context memory, and client-side tool execution routing.

---

#### Key Capabilities:
* **Real-Time Bidirectional Streaming:** Multiplexes uncompressed 16kHz PCM microphone audio from the user directly to Gemini Live and streams back natural voice responses with sub-second latency.
* **Client-Side Tool Call Router (RPC Bridge):** Receives structured function calls from Gemini (such as `enter_form_data`, `get_screen_content`, `highlight_elements`), forwards them over WebSockets to the active browser tab, and returns execution results back to the model.
* **Dynamic API Key Handling:** Accepts the Gemini API key dynamically from client connection parameters, eliminating the need to hardcode credentials or maintain server-side `.env` files.
* **Session Profile Memory:** Tracks customer preferences and shopping constraints (e.g., budget limits, preferred brands) across conversation turns and dynamically injects them into the model's context.

---

#### Folder Structure Overview:

```
backend/
├── proxy_server.py       # Main FastAPI application, WebSocket endpoints & Gemini Live bridge
├── requirements.txt      # Python dependencies (fastapi, uvicorn, websockets, python-dotenv)
└── Dockerfile            # Container definition for Google Cloud Run / Docker deployment
```
