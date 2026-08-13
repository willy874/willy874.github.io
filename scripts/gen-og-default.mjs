// 產生站台預設分享圖 public/images/og-default.png（1200×630）。
// 需要時重跑：node scripts/gen-og-default.mjs
// 文字以 SVG 描邊繪製，依賴 sharp（astro 的相依）與系統中文字型。
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f1f14"/>
      <stop offset="100%" stop-color="#1c3a24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g stroke="#4ade80" stroke-opacity="0.18" stroke-width="10" stroke-linecap="round">
    <line x1="980" y1="-40" x2="1020" y2="300"/>
    <line x1="1080" y1="60" x2="1110" y2="420"/>
    <line x1="900" y1="200" x2="930" y2="680"/>
  </g>
  <rect x="80" y="252" width="8" height="128" rx="4" fill="#4ade80"/>
  <text x="128" y="320" font-family="PingFang TC, Noto Sans TC, Heiti TC, sans-serif" font-size="86" font-weight="700" fill="#f0fdf4">竹子日誌</text>
  <text x="128" y="380" font-family="PingFang TC, Noto Sans TC, Heiti TC, sans-serif" font-size="34" fill="#86efac">前端工程師 · 設計系統 · 微前端架構</text>
  <text x="128" y="522" font-family="Menlo, monospace" font-size="26" fill="#4ade80" fill-opacity="0.75">willy874.github.io</text>
</svg>`;

const out = path.join(process.cwd(), 'public/images/og-default.png');
fs.mkdirSync(path.dirname(out), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
