#!/usr/bin/env bash
set -euo pipefail

# ==============================================================================
# CONFIGURATION VARIABLES
# ==============================================================================
PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"

# Cloud Run Service Names (Variables)
PROXY_SERVICE_NAME="live-phone-agent-proxy-demo"
STORE_SERVICE_NAME="mock-phone-store-demo"

# Public GitHub repository
REPO_URL="https://github.com/AmirMK/live-agent-web-interaction.git"
REPO_DIR="live-agent-web-interaction"

# Service Account variable names
PROXY_SA_NAME="live-phone-agent-proxy-sa"
STORE_SA_NAME="mock-phone-store-sa"

# GCS Bucket name (GCS bucket names must be globally unique)
GCS_BUCKET_NAME="${PROJECT_ID}-mock-store-images"

# Derived Service Account emails
PROXY_SA_EMAIL="${PROXY_SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
STORE_SA_EMAIL="${STORE_SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

echo "Current GCP Project:     ${PROJECT_ID}"
echo "Current Region:          ${REGION}"
echo "Proxy Cloud Run Service: ${PROXY_SERVICE_NAME}"
echo "Store Cloud Run Service: ${STORE_SERVICE_NAME}"
echo "Bucket Name:             gs://${GCS_BUCKET_NAME}"

# ==============================================================================
# Step 1: Clone the public repository
# ==============================================================================
echo "==> Step 1: Cloning repository from ${REPO_URL}..."
if [ ! -d "${REPO_DIR}" ]; then
  git clone "${REPO_URL}" "${REPO_DIR}"
else
  echo "Directory ${REPO_DIR} already exists. Skipping clone."
fi
ROOT_DIR="$(pwd)/${REPO_DIR}"

# ==============================================================================
# Step 2: Create Service Account for Proxy & assign roles
# Roles: roles/logging.logWriter, roles/aiplatform.user
# ==============================================================================
echo "==> Step 2: Creating Service Account: ${PROXY_SA_NAME}..."
gcloud iam service-accounts create "${PROXY_SA_NAME}" \
  --display-name="Live Phone Agent Proxy SA" \
  --project="${PROJECT_ID}" || true

echo "==> Assigning roles/logging.logWriter and roles/aiplatform.user..."
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${PROXY_SA_EMAIL}" \
  --role="roles/logging.logWriter"

gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${PROXY_SA_EMAIL}" \
  --role="roles/aiplatform.user"

# ==============================================================================
# Step 3 & 4: Deploy backend proxy to Cloud Run
# ==============================================================================
echo "==> Step 3 & 4: Deploying backend proxy '${PROXY_SERVICE_NAME}' to Cloud Run..."
cd "${ROOT_DIR}/backend"

gcloud run deploy "${PROXY_SERVICE_NAME}" \
  --source . \
  --region "${REGION}" \
  --allow-unauthenticated \
  --service-account "${PROXY_SA_EMAIL}"

# ==============================================================================
# Step 5: Create GCS Bucket
# ==============================================================================
echo "==> Step 5: Creating GCS bucket: gs://${GCS_BUCKET_NAME}..."
gcloud storage buckets create "gs://${GCS_BUCKET_NAME}" \
  --project="${PROJECT_ID}" \
  --location="${REGION}" || true

# ==============================================================================
# Step 6: Copy product images to GCS bucket
# ==============================================================================
echo "==> Step 6: Copying files to gs://${GCS_BUCKET_NAME}/product_images/..."
gcloud storage cp -r "${ROOT_DIR}/product_images" "gs://${GCS_BUCKET_NAME}/"

# ==============================================================================
# Step 7: Create Service Account for Store & assign role
# Role: roles/storage.objectViewer
# ==============================================================================
echo "==> Step 7: Creating Service Account: ${STORE_SA_NAME}..."
gcloud iam service-accounts create "${STORE_SA_NAME}" \
  --display-name="Mock Phone Store SA" \
  --project="${PROJECT_ID}" || true

echo "==> Assigning roles/storage.objectViewer..."
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${STORE_SA_EMAIL}" \
  --role="roles/storage.objectViewer"

# ==============================================================================
# Step 8, 9 & 10: Deploy mock phone store to Cloud Run
# ==============================================================================
echo "==> Step 8, 9 & 10: Deploying mock phone store '${STORE_SERVICE_NAME}' to Cloud Run..."
cd "${ROOT_DIR}/mock_phone_store"

gcloud run deploy "${STORE_SERVICE_NAME}" \
  --source . \
  --region "${REGION}" \
  --allow-unauthenticated \
  --service-account "${STORE_SA_EMAIL}" \
  --set-env-vars GCS_BUCKET="${GCS_BUCKET_NAME}"

echo "==> All steps completed successfully!"
