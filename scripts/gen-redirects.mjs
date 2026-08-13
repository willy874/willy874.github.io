// 產生舊網址的轉址頁 —— GitHub Pages 沒有 redirect 機制,只能用 meta refresh。
// 來源是 scripts/slug-redirects.json(slug 英文化時自動累積的新舊網址對照)。
// 產出寫進 public/,所以會被原封不動複製到 dist,不經過 Astro 的路由。
// 這些頁面一律 noindex,也不會進 sitemap(sitemap 是自建的,只列舉實際文章)。
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const map = JSON.parse(await readFile(join(ROOT, 'scripts/slug-redirects.json'), 'utf-8'));

// 分類索引頁的舊網址也一起轉:/posts/categories/{中文}/ → /posts/categories/{英文}/
const CATEGORY = {
  前端技術: 'frontend', 工程實務: 'engineering', 設計與設計系統: 'design-system',
  ai與工具: 'ai-tools', 職涯與工作: 'career', 商業與創業: 'business',
  學習與成長: 'learning', 議題討論: 'discussion', 短文與心得: 'notes',
  個人反思: 'reflection', 活動與社群: 'community', 日更系列: 'daily',
};
for (const [zh, en] of Object.entries(CATEGORY)) {
  map[`/posts/categories/${zh}/`] = `/posts/categories/${en}/`;
  map[`/posts/${zh}/`] = `/posts/${en}/`;
}

const page = (to) => `<!doctype html>
<html lang="zh-Hant-TW">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="https://willy874.github.io${to}">
<title>已搬家</title>
</head>
<body data-pagefind-ignore="all">
<p>這個網址已經換成 <a href="${to}">${to}</a>，正在把你帶過去⋯⋯</p>
<script>location.replace(${JSON.stringify(to)});</script>
</body>
</html>
`;

let n = 0;
for (const [from, to] of Object.entries(map)) {
  const out = join(ROOT, 'public', from, 'index.html');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, page(to), 'utf-8');
  n++;
}
console.log(`✓ 產出 ${n} 個轉址頁到 public/posts/`);
