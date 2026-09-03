# live-agent-web-interaction

An end-to-end reference implementation demonstrating real-time, multimodal voice AI interaction in an e-commerce web application. 

The project pairs a realistic mock smartphone storefront (**PhoneVerse**) with Google's **Gemini Live Multimodal API / Vertex AI**, allowing visitors to talk directly with an AI specialist in real time. Through bidirectional WebSocket audio streaming and structured tool calls, the AI agent can autonomously navigate, search, filter products, and highlight recommendations right inside the user's active browser window.

---

## ⚡ Quick Deployment on Google Cloud (Cloud Shell)

Deploy the entire solution—including IAM roles, Cloud Storage bucket, catalog assets, and both Cloud Run microservices—in just a few minutes using **Google Cloud Shell**.

### 1. Open Google Cloud Shell 

### 2. Enable Required GCP APIs
Enable the necessary services before running the deployment script:
```bash
gcloud services enable \
 run.googleapis.com \
 artifactregistry.googleapis.com \
 cloudbuild.googleapis.com \
 aiplatform.googleapis.com \
 storage.googleapis.com
```
### 3. Download and Run `deploy.sh`
You can either clone the repo or download `deploy.sh` directly and execute it:

```bash
git clone https://github.com/AmirMK/live-agent-web-interaction.git
cd live-agent-web-interaction
chmod +x deploy.sh
./deploy.sh
```
Once deployment finishes, the terminal output will display the public HTTPS URLs for both the **Live Phone Agent Proxy** and the **Mock Phone Store**. Open the store URL in any modern browser (Chrome recommended) to start interacting with the live agent!

to start you may click on live chat bar on the let side and then click on setting gears to enter the url for **Live Phone Agent Proxy** as wel as your Gemini API Key.

Then you can click on connect and start talking with the agent!


To learn more about how each component works under the hood, how the project is structured, and how the services interact, explore the detailed breakdown of each folder below.


### `mock_phone_store` — Mock Phone E-Commerce Website & Embedded Live Agent

The `mock_phone_store` folder contains a complete mock e-commerce web application for a smartphone retailer (**PhoneVerse**). It provides realistic mock smartphone catalog data and multiple browseable pages where users can explore devices, filter by specifications, and interact in real time with an embedded multimodal voice AI agent.

---

#### Key Capabilities:
* **Multi-Page Browsing:** Includes a landing/home page with guided search wizards and a dynamic search page with multi-faceted filtering (5G toggles, brands, price sliders, storage, camera specs, and sorting).
* **Embedded Live Voice AI Agent:** Pre-integrated with the floating live agent widget (`agent-widget.js`), enabling visitors to talk naturally with an AI smartphone specialist that can directly control the website's filters and highlight recommended products.
* **Decoupled DOM Controller (`dom-controller.js`):** Standalone, unbundled DOM automation module handling screen scraping, form filling, and spotlight highlighting—allowing developers to customize UI interactions without rebuilding the React widget.
* **Realistic Catalog Dataset:** Pre-populated with rich smartphone mock data (models, processors, display sizes, cameras, ratings, and pricing).

---

#### Folder Structure Overview:

```
mock_phone_store/
├── data/                       # Catalog datasets & trending feeds
│   ├── data.csv                # Smartphone product dataset (specs, pricing, ratings)
│   └── trends                  # Trending phone IDs featured on the home page
│
├── public/                     # Static frontend web assets & pages
│   ├── index.html              # Home page with feature highlights & search wizard
│   ├── search.html             # Dynamic 3-column catalog grid & interactive filter sidebar
│   ├── js/                     # Client-side store logic & DOM automation
│   │   ├── dom-controller.js   # Agent DOM automation (screen scraping, form fills, card highlights)
│   │   ├── search.js           # Reactive filtering engine & dynamic URL query sync
│   │   ├── home.js             # Home page form handlers & trending deals loader
│   │   └── data.js             # CSV parser & in-memory catalog search engine
│   ├── css/                    # Store styling & responsive layout
│   │   └── style.css           # Primary application stylesheet
│   ├── assets/                 # Store imagery & fallback graphics
│   │   ├── logo.jpeg           # Brand header logo
│   │   ├── promo_banner.png    # Home promotional hero banner
│   │   └── placeholder.svg     # SVG fallback image for missing product photos
│   ├── agent-widget.js         # Embedded Voice AI Agent UI & WebSocket client
│   ├── agent-widget.css        # Styles for the embedded AI widget drawer & visualizer
│   └── pcm-processor.js        # AudioWorklet for real-time bidirectional PCM audio streaming
│
├── server.js                   # Node.js / Express web server to host store & GCS image proxy
├── Dockerfile                  # Container definition for Cloud Run / Docker deployment
├── .dockerignore               # Ignores local node_modules during Docker build
├── .gitignore                  # Excludes local dependencies and scratch files from Git
├── package.json                # Project dependencies & start scripts
└── package-lock.json           # Pinned dependency tree
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
### `Deploy.sh` script - Architecture & Deployment Overview
This script automates the end-to-end setup and deployment of a full-stack demo showcasing a mock e-commerce phone store powered by a real-time, interactive Vertex AI live agent.
**Automated Deployment Script for Live Agent Phone Store Demo**  

This script automates the end-to-end setup and deployment on Google Cloud Platform:
- **Live Agent Proxy (`Cloud Run`)**: Deploys a backend proxy configured with Vertex AI and Cloud Logging permissions to orchestrate communication with the live agent.
- **Product Assets (`Google Cloud Storage`)**: Creates a GCS bucket and uploads the phone store’s product catalog images.
- **Mock Phone Store (`Cloud Run`)**: Deploys a mock e-commerce web application featuring an embedded live agent interface that users can interact with in real time, routing agent requests through the backend proxy.

### Component Breakdown

#### 1. Repository Setup (`git clone`)
* **What it does:** Downloads the project source code from the GitHub repository (`live-agent-web-interaction`), which contains:
 * `/backend`: Source code for the backend proxy handling Vertex AI communication.
 * `/mock_phone_store`: Source code for the customer-facing web storefront with an embedded agent widget.
 * `/product_images`: Catalog imagery for phones and accessories.

---

#### 2. Live Agent Proxy (`Cloud Run`)
* **Service Account & IAM Roles:**
 * **`roles/logging.logWriter`**: Grants permission to ingest and stream runtime application logs and error diagnostics into Google Cloud Logging.
 * **`roles/aiplatform.user`**: Grants permission to authenticate and invoke Vertex AI APIs, foundation models (e.g., Gemini Live / Vertex AI Agent Builder), and prediction endpoints.
* **What it does:** 
 * Acts as a secure backend gateway between the client-side browser and Google Cloud's Vertex AI services.
 * Prevents exposing sensitive GCP credentials or API keys directly to the client browser by managing authentication via its attached Service Account.
 * Facilitates live bidirectional communication (such as audio/text streaming) with the agent model.

---

#### 3. Asset Storage (`Google Cloud Storage`)
* **What it does:**
 * Creates a globally unique Google Cloud Storage (GCS) bucket within your selected region (`us-central1`).
 * Uploads all local phone images from the `/product_images` directory into `gs://<BUCKET_NAME>/product_images/`.
 * Decouples heavy binary static assets (product photos) from the application container image, keeping container builds lightweight and fast.

---

#### 4. Mock Phone Store (`Cloud Run`)
* **Service Account & IAM Roles:**
 * **`roles/storage.objectViewer`**: Grants read-only access to download and serve the product images stored in the GCS bucket. Following the principle of least privilege, this service account cannot modify or delete bucket contents.
* **Environment Variable (`GCS_BUCKET`):**
 * Injects the created bucket name into the web server runtime environment so the storefront dynamically loads product photos from the correct storage location.
* **What it does:**
 * Serves the public-facing e-commerce web application where customers browse phones and plans.
 * Embeds an interactive live agent chat/voice interface directly onto the storefront pages.
 * Routes customer messages and interactions from the browser widget directly to the **Live Agent Proxy** Cloud Run service.

---

### End-to-End Workflow

```text
[ End User Browser ]
    │
    ├─► 1. Loads Web Storefront & Product Images
    │   └─► [ Mock Phone Store (Cloud Run) ] ──(reads)──► [ GCS Bucket ]
    │
    └─► 2. Interacts with Embedded Live Agent
       └─► [ Backend Proxy (Cloud Run) ] ──(invokes)──► [ Vertex AI / Gemini ]
```

1. **Browsing:** The user accesses the **Mock Phone Store** web URL. The application reads images directly from the **GCS Bucket** and displays the phone catalog.
2. **Interaction:** The user opens the embedded live agent on the store page and begins speaking or chatting.
3. **Orchestration:** The store routes the session requests to the **Live Agent Proxy**.
4. **Inference:** The proxy uses its IAM identity (`aiplatform.user`) to communicate with **Vertex AI**, streaming natural language responses and real-time product recommendations back to the user.
