FROM python:3.11-slim

# Prevent Python from writing .pyc files and buffer stdout/stderr
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# Install system dependencies if required
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the proxy server code
COPY proxy_server.py .

# Expose default Cloud Run port
ENV PORT=8080
EXPOSE 8080

# Run uvicorn on 0.0.0.0 bound to the dynamic $PORT provided by Cloud Run
CMD ["sh", "-c", "uvicorn proxy_server:app --host 0.0.0.0 --port ${PORT:-8080}"]
