import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve public directory
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Direct download endpoint for offline single-file HTML (for sending via Zalo)
app.get(['/api/download-offline', '/download-offline'], (req, res) => {
  const offlineFilePath = path.join(publicPath, 'TracNghiem_PhapLuatDaiCuong_500Cau.html');
  res.download(offlineFilePath, 'TracNghiem_PhapLuatDaiCuong_500Cau.html');
});

// Serve static assets from dist
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// For SPA routing, redirect any non-asset requests to dist/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
