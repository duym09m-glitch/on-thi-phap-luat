// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = Number(process.env.PORT) || 3e3;
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
var publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.get(["/api/download-offline", "/download-offline"], (req, res) => {
  const offlineFilePath = path.join(publicPath, "TracNghiem_PhapLuatDaiCuong_500Cau.html");
  res.download(offlineFilePath, "TracNghiem_PhapLuatDaiCuong_500Cau.html");
});
var distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
