// 每篇文章的動態 OG 分享圖(1200×630)。
// 流程:蒐集全部標題用到的字 → 下載 Noto Sans TC 靜態字型 → subset 成只含
// 用到的字(數百 KB)→ satori 把標題排版成 SVG(文字轉 path)→ resvg 轉 PNG →
// 寫入 public/images/og/<id>.png。
//
// 字型明確內嵌、文字已向量化,故本步驟不依賴系統字型,macOS 與 GitHub Actions
// (Ubuntu,無中文字型)產出完全一致。產物與字型快取皆 gitignore,repo 不變肥。
//
// 由 pnpm build 自動觸發(見 package.json)。也可單獨重跑:node scripts/build-og.mjs
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import subsetFont from 'subset-font';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const POSTS_DIR = path.join(ROOT, 'src/content/posts');
const OUT_DIR = path.join(ROOT, 'public/images/og');
const CACHE_DIR = path.join(ROOT, 'node_modules/.cache/og');

// 合併版 Noto Sans TC 靜態 OTF(涵蓋完整繁體中文,~16MB)。subset 後只留用到的字。
const FONT_URL =
  'https://github.com/notofonts/noto-cjk/raw/main/Sans/OTF/TraditionalChinese/NotoSansCJKtc-Regular.otf';
const FONT_CACHE = path.join(CACHE_DIR, 'NotoSansCJKtc-Regular.otf');

const SITE_NAME = '竹子日誌';
const SITE_URL = 'willy874.github.io';
const SITE_TAGLINE = '前端工程 · 設計系統 · 微前端架構';

// ── 極簡 frontmatter 解析:只取 title / category / draft(顯示用,不需完整 YAML) ──
function readFrontmatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};
  const block = raw.slice(3, end);
  const out = {};
  for (const line of block.split('\n')) {
    const m = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let [, key, val] = m;
    val = val.trim();
    // 去掉成對引號
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1).replace(/\\"/g, '"');
    }
    out[key] = val;
  }
  return out;
}

async function walk(dir) {
  const out = [];
  for (const ent of await fsp.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...(await walk(full)));
    else if (/\.mdx?$/.test(ent.name)) out.push(full);
  }
  return out;
}

async function collectPosts() {
  const files = await walk(POSTS_DIR);
  const posts = [];
  for (const file of files) {
    const raw = await fsp.readFile(file, 'utf8');
    const fm = readFrontmatter(raw);
    if (!fm.title || fm.draft === 'true') continue;
    const id = path
      .relative(POSTS_DIR, file)
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '');
    posts.push({ id, file, title: fm.title, category: fm.category ?? '' });
  }
  return posts;
}

async function ensureFullFont() {
  if (fs.existsSync(FONT_CACHE) && fs.statSync(FONT_CACHE).size > 1_000_000) {
    return fsp.readFile(FONT_CACHE);
  }
  console.log('[og] 下載 Noto Sans TC 字型…');
  const res = await fetch(FONT_URL);
  if (!res.ok) throw new Error(`字型下載失敗 ${res.status}: ${FONT_URL}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fsp.mkdir(CACHE_DIR, { recursive: true });
  await fsp.writeFile(FONT_CACHE, buf);
  return buf;
}

// satori 用的極簡 vnode 建構子(避免引入 JSX / React)
const h = (type, style, children) => ({ type, props: { style, children } });

function truncate(s, max) {
  const chars = [...s];
  return chars.length > max ? chars.slice(0, max - 1).join('') + '…' : s;
}

function card({ title, category }) {
  const t = truncate(title, 46);
  const fontSize = t.length > 30 ? 52 : t.length > 20 ? 60 : 68;
  return h(
    'div',
    {
      height: 630,
      width: 1200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '76px 88px',
      backgroundColor: '#0f1f14',
      backgroundImage:
        'linear-gradient(135deg, #0f1f14 0%, #14301d 55%, #1c3a24 100%)',
      fontFamily: 'Noto Sans TC',
      color: '#f0fdf4',
    },
    [
      // 頁首:綠色竹節條 + 站名
      h('div', { display: 'flex', alignItems: 'center' }, [
        h('div', {
          width: 14,
          height: 46,
          borderRadius: 7,
          backgroundColor: '#4ade80',
          marginRight: 24,
        }),
        h('div', { fontSize: 32, color: '#86efac' }, SITE_NAME),
      ]),
      // 主體:標題
      h(
        'div',
        {
          display: 'flex',
          fontSize,
          fontWeight: 400,
          lineHeight: 1.32,
          letterSpacing: '-0.01em',
          maxWidth: 1024,
          color: '#f0fdf4',
        },
        t
      ),
      // 頁尾:網址 + 分類
      h(
        'div',
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        },
        [
          h(
            'div',
            { fontSize: 26, color: '#4ade80', opacity: 0.85 },
            SITE_URL
          ),
          category
            ? h(
                'div',
                {
                  fontSize: 26,
                  color: '#bbf7d0',
                  padding: '8px 22px',
                  border: '2px solid rgba(74,222,128,0.5)',
                  borderRadius: 999,
                },
                category
              )
            : h('div', { fontSize: 26, color: '#86efac' }, SITE_TAGLINE),
        ]
      ),
    ]
  );
}

async function renderPng(node, fontData) {
  const svg = await satori(node, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'Noto Sans TC', data: fontData, weight: 400, style: 'normal' }],
  });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
    .render()
    .asPng();
}

async function main() {
  const posts = await collectPosts();
  console.log(`[og] ${posts.length} 篇文章`);

  // 蒐集所有會被畫出的字元 → subset
  const charset = new Set();
  const add = (s) => {
    for (const ch of s ?? '') charset.add(ch);
  };
  add(SITE_NAME);
  add(SITE_URL);
  add(SITE_TAGLINE);
  for (let i = 32; i < 127; i++) charset.add(String.fromCharCode(i)); // ASCII
  add('…');
  for (const p of posts) {
    add(truncate(p.title, 46));
    add(p.category);
  }
  const text = [...charset].join('');

  const fullFont = await ensureFullFont();
  console.log(`[og] subset 字型(${charset.size} 個字元)…`);
  const subset = await subsetFont(fullFont, text, { targetFormat: 'sfnt' });
  console.log(`[og] subset 完成 ${(subset.length / 1024).toFixed(0)} KB`);

  await fsp.mkdir(OUT_DIR, { recursive: true });
  const scriptMtime = fs.statSync(fileURLToPath(import.meta.url)).mtimeMs;

  let written = 0;
  let skipped = 0;
  for (const p of posts) {
    const out = path.join(OUT_DIR, `${p.id}.png`);
    // 增量:PNG 比原文與腳本都新就跳過
    if (fs.existsSync(out)) {
      const o = fs.statSync(out).mtimeMs;
      if (o > fs.statSync(p.file).mtimeMs && o > scriptMtime) {
        skipped++;
        continue;
      }
    }
    const png = await renderPng(card(p), subset);
    await fsp.mkdir(path.dirname(out), { recursive: true });
    await fsp.writeFile(out, png);
    written++;
  }

  // 站台預設圖(供非文章頁 fallback)
  const def = await renderPng(card({ title: SITE_NAME, category: '' }), subset);
  await fsp.writeFile(path.join(ROOT, 'public/images/og-default.png'), def);

  console.log(`[og] 完成:寫入 ${written} 張,跳過 ${skipped} 張,預設圖已更新`);
}

main().catch((e) => {
  console.error('[og] 失敗:', e);
  process.exit(1);
});
