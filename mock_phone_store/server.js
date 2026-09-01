const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { Storage } = require('@google-cloud/storage');

const app = express();
const PORT = process.env.PORT || 8080;
const GCS_BUCKET_NAME = process.env.GCS_BUCKET || 'agent_live_api_demo';

// Initialize Google Cloud Storage Client
let gcsBucket = null;
try {
  const storage = new Storage();
  gcsBucket = storage.bucket(GCS_BUCKET_NAME);
  console.log(`[GCS] Initialized Cloud Storage for bucket: gs://${GCS_BUCKET_NAME}`);
} catch (err) {
  console.warn(`[GCS] Cloud Storage client initialization deferred/fallback:`, err.message);
}

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    service: 'mock_phone_store', 
    gcs_bucket: GCS_BUCKET_NAME,
    timestamp: new Date().toISOString() 
  });
});

// Trending IDs endpoint (read locally from data/trends)
app.get('/api/trends', (req, res) => {
  const trendsFile = path.join(__dirname, 'data', 'trends');
  if (fs.existsSync(trendsFile)) {
    try {
      const content = fs.readFileSync(trendsFile, 'utf8');
      const lines = content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      const ids = lines.filter(l => l.toLowerCase() !== 'id');
      return res.json({ success: true, ids });
    } catch (err) {
      console.error('Error reading trends file:', err);
    }
  }
  // Fallback default trending IDs
  res.json({ success: true, ids: ['10', '12', '34'] });
});

// Serve product images: Stream on-demand from GCS bucket product_images/<id>.jpeg with local fallback
app.get('/api/image/:id', async (req, res) => {
  const rawId = req.params.id;
  const id = rawId.replace(/[^0-9a-zA-Z_-]/g, '');
  const placeholderPath = path.join(__dirname, 'public', 'assets', 'placeholder.svg');
  const extensions = ['.jpeg', '.jpg', '.png', '.webp'];

  // 1. Check local filesystem first (for local development or pre-cached images)
  for (const ext of extensions) {
    const localImgPath = path.join(__dirname, 'public', 'product_images', `${id}${ext}`);
    if (fs.existsSync(localImgPath) && fs.statSync(localImgPath).size > 0) {
      const mime = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : 'image/jpeg');
      res.setHeader('Content-Type', mime);
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.sendFile(localImgPath);
    }
  }

  // 2. Stream from GCS bucket product_images/<id>.jpeg
  if (gcsBucket) {
    for (const ext of extensions) {
      try {
        const gcsFile = gcsBucket.file(`product_images/${id}${ext}`);
        const [exists] = await gcsFile.exists();
        if (exists) {
          const mime = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : 'image/jpeg');
          res.setHeader('Content-Type', mime);
          res.setHeader('Cache-Control', 'public, max-age=86400');
          return gcsFile.createReadStream().on('error', (err) => {
            console.error(`[GCS Stream Error] ID ${id}:`, err);
            if (!res.headersSent) {
              res.setHeader('Content-Type', 'image/svg+xml');
              res.sendFile(placeholderPath);
            }
          }).pipe(res);
        }
      } catch (err) {
        // Continue to next extension or fallback
      }
    }
  }

  // 3. Fallback to SVG placeholder if not found
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(placeholderPath);
});

// Serve raw data directory locally (data.csv, trends)
app.use('/data', express.static(path.join(__dirname, 'data')));

// Serve public static assets (HTML, CSS, JS, logo.jpeg, promo_banner.png)
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`📱 PhoneVerse Mock Phone Store is running!`);
  console.log(`🌐 Server listening on: http://0.0.0.0:${PORT}`);
  console.log(`☁️  GCS Bucket: gs://${GCS_BUCKET_NAME}`);
  console.log(`📄 Page 1 (Home):   http://localhost:${PORT}/index.html`);
  console.log(`🔍 Page 2 (Search): http://localhost:${PORT}/search.html`);
  console.log(`====================================================`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const altPort = 8081;
    console.warn(`Port ${PORT} is in use, attempting port ${altPort}...`);
    app.listen(altPort, '0.0.0.0', () => {
      console.log(`📱 Server listening on: http://0.0.0.0:${altPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
