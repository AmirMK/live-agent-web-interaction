# Base Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application source code, data (data.csv, trends), and public assets (logo.jpeg, promo_banner.png)
COPY . .

# Set default environment variables
ENV NODE_ENV=production
ENV PORT=8080
ENV GCS_BUCKET=agent_live_api_demo

# Expose HTTP port
EXPOSE 8080

# Run Express server
CMD ["node", "server.js"]
