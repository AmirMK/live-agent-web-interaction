# live-agent-web-interaction

git clone <YOUR_REPO_URL>
cd live_agent_phone/backend
gcloud auth login
gcloud config set project <YOUR_GCP_PROJECT_ID>

gcloud run deploy live-phone-agent-proxy \
  --source . \
  --region us-central1 \
  --allow-unauthenticated


  # 1. Clone repo
git clone <REPO_URL>
cd mock_phone_store

# 2. Set GCP project
gcloud config set project <YOUR_PROJECT_ID>

# 3. Deploy with Gemini API key & Python proxy server URL
gcloud run deploy mock-phone-store \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY="....",LIVE_AGENT_PROXY_URL="https://your-python-server.run.app"
