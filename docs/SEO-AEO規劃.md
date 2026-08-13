# 竹子日誌 — SEO / AEO 規劃書

> 對象:傳統搜尋引擎（Google / Bing）與 AI 檢索引擎（ChatGPT Search、Claude、Perplexity、Google AI Overviews）。
> 現況基準:460 篇文章、554 個 sitemap URL、Astro 5 static、GitHub Pages。
> 稽核日期:2026-08-13。

---

## 1. 現況體檢

### 已具備

| 項目 | 位置 | 狀態 |
| --- | --- | --- |
| sitemap | `astro.config.mjs` `@astrojs/sitemap` | 輸出 554 URL,已濾除 `/files/`、`/interview/` |
| robots.txt | `public/robots.txt` | 靜態,含 Sitemap 宣告 |
| canonical | `src/layouts/Base.astro:42` | 每頁輸出 |
| OG / Twitter | `Base.astro:44-55` | 標籤齊全但圖檔缺失 |
| RSS | `src/pages/rss.xml.ts` | 僅輸出摘要 |
| 站內搜尋 | Pagefind（CJK） | 已建索引 |

### 缺口總表

| # | 等級 | 問題 | 影響 |
| --- | --- | --- | --- |
| 1 | P0 | `/images/og-default.png` 不存在,全站 OG 圖 404 | 所有分享無預覽圖 |
| 2 | P0 | 全站零 JSON-LD 結構化資料 | 無 rich result、AI 無法辨識作者/文章實體 |
| 3 | P0 | 423/460 篇 description 為內文前 120 字硬切,句子斷半 | SERP 摘要與 AI 摘要品質低落 |
| 4 | P0 | `Post.astro:43` `ogImage={data.cover ? undefined : undefined}` 死碼 | cover 永遠進不了 OG |
| 5 | P0 | 缺 `article:published_time` / `modified_time` / `author` | 文章新鮮度與作者權威訊號缺失 |
| 6 | P0 | sitemap 無 `lastmod`,`updatedDate` 未使用 | 爬蟲無法判斷更新 |
| 7 | P1 | 455/460 篇無任何 H2 | TOC 空轉、AI 無段落錨點可引用 |
| 8 | P1 | slug 全中文,URL percent-encoded；含全形冒號檔名 | 違反 CLAUDE.md 規範、網址不可讀 |
| 9 | P1 | 78 個 tag 中 11 個僅 1 篇；無 tag / category 索引頁 | 薄索引頁佔用爬蟲預算 |
| 10 | P1 | 6 組重複標題 | 重複 title tag |
| 11 | P1 | `html lang` 寫死,schema 的 `lang: 'en'` 未接 | 多語系訊號錯誤 |
| 12 | P2 | 無 `llms.txt` / `llms-full.txt` | AI 檢索缺少結構化入口 |
| 13 | P2 | robots.txt 未明列 AI 爬蟲政策 | 政策不明確 |
| 14 | P2 | RSS 僅摘要,無 `content:encoded` | AI 抓取器取不到全文 |
| 15 | P3 | Google Fonts 外部 render-blocking | CWV / LCP 扣分 |
| 16 | P3 | 無 GSC / Bing 驗證 | 無法監測與主動提交 |

### 內容體質數據

```
篇數            460
標題長度        中位 11 字（>40 字僅 1 篇）
description     中位 120 字；423 篇未以標點收尾（截斷）
內文字數        中位 481 字；<300 字 128 篇、<600 字 299 篇
無 H2           455 篇
有 cover        0 篇
內文圖片        0 張
tag             78 種（11 種僅 1 篇）
分類分佈        工程實務 96、議題討論 93、日更系列 57、職涯 44…
年份分佈        2018:96、2024:107、2025:126、2026:14
```

---

## 2. 已定案的策略決策

| 決策 | 選擇 | 說明 |
| --- | --- | --- |
| Slug | **全面英文化 + redirect** | 460 篇改英文 kebab-case,舊中文路徑產生 redirect stub 頁（meta refresh + canonical + JS）。GitHub Pages 無 301 能力,以 client-side 轉址 + canonical 傳遞權重。 |
| 薄內容 | **全部維持索引** | 不設 noindex,短文長尾字詞照收。 |
| AI 爬蟲 | **全部放行** | 明列 GPTBot / ClaudeBot / OAI-SearchBot / PerplexityBot / Google-Extended 等一律 Allow。 |
| description | **批次重寫全部** | 423 篇逐篇讀內文改寫成 70–120 字完整句,含關鍵字,且不與首段重複。 |

---

## 3. 執行批次

### 批次 1｜SEO 骨幹（程式,不動文章）

| 檔案 | 動作 |
| --- | --- |
| `src/lib/seo.ts` | 新增。集中站台常數、URL 正規化、JSON-LD builder（`buildBlogPosting` / `buildBreadcrumb` / `buildWebSite` / `buildPerson` / `buildBlog`）。 |
| `src/components/seo/JsonLd.astro` | 新增。以 `set:html` 輸出 `<script type="application/ld+json">`。 |
| `src/layouts/Base.astro` | 擴充 props:`lang`、`noindex`、`publishedTime`、`modifiedTime`、`author`、`jsonLd`。補 `<meta name="author">`、`article:*`、`og:image:width/height`、`og:image:alt`、`robots`。`html lang` 改由 prop 驅動。 |
| `src/layouts/Post.astro` | 修死碼,cover 進 OG（`getImage` 取最佳化後 URL）。輸出 `BlogPosting` + `BreadcrumbList`。 |
| `src/pages/index.astro` | 輸出 `WebSite`（含 `SearchAction`）+ `Person`（`sameAs` 取 `SOCIALS`）+ `Blog`。 |
| `src/pages/about.astro` | 輸出 `ProfilePage` + `Person`。 |
| `astro.config.mjs` | sitemap 加 `serialize`:補 `lastmod`（`updatedDate ?? publishDate`）、`changefreq`、`priority`（文章 0.8 / 分類 0.6 / 標籤 0.4 / 首頁 1.0）。 |
| `public/images/og-default.png` | 產生 1200×630 預設分享圖。 |

### 批次 2｜AI 附屬檔案（AEO / GEO）

| 檔案 | 動作 |
| --- | --- |
| `src/pages/robots.txt.ts` | 由靜態改動態路由（刪 `public/robots.txt`）。明列 AI 爬蟲全放行,Sitemap 位址由 `context.site` 產生。 |
| `src/pages/llms.txt` | 新增動態路由。站台簡介 + 12 分類 + 各分類代表文章清單（Markdown 連結格式,符合 llms.txt 慣例）。 |
| `src/pages/llms-full.txt` | 新增。全部文章標題 + description + 正文彙整（純文字）。 |
| `src/pages/rss.xml.ts` | 升級全文輸出:`experimental_AstroContainer.renderToString` + `sanitize-html` 填 `content:encoded`。 |
| `src/pages/feed.json` | （選用）JSON Feed 1.1。 |

### 批次 3｜文章內容 SEO（460 篇,分批進行）

1. **description 重寫**（423 篇）— 依分類分批,每批約 40 篇。規則:70–120 字、完整句、含主要關鍵字、不重複首段。
2. **移除頁面重複** — `Post.astro:63` 把 description 當導言渲染,與內文首段一字不差。改為只在 `<head>` 使用,或改渲染獨立的 `excerpt`。
3. **H2 結構補強** — 優先處理 >800 字的技術文（約 90 篇),補小標讓 TOC 生效並產生 AI 可引用的錨點。
4. **重複標題處理** — 6 組,加副標或合併。
5. **tag 治理** — 11 個單篇 tag 合併至相近 tag；新增 `/posts/tags/` 與 `/posts/categories/` 索引頁。

### 批次 4｜URL 遷移與效能

1. **slug 英文化** — 產生 460 筆「中文路徑 → 英文 slug」對照表（`docs/slug-map.json`），frontmatter 加 `slug` 欄位或改檔名,`[...slug].astro` 依新 slug 產頁。
2. **redirect stub** — 新增 `src/pages/posts/[...oldSlug].astro` 類的產生器,為每個舊中文路徑輸出含 `<link rel="canonical">` + `<meta http-equiv="refresh">` 的頁面。**不進 sitemap、設 noindex**。
3. **字型自架** — 改用 `@fontsource-variable/noto-sans-tc` 消除外部 render-blocking。
4. **驗證與提交** — GSC / Bing 驗證檔,提交 sitemap,觀察索引覆蓋率。

---

## 4. 驗收標準

- [ ] 每個文章頁含 `BlogPosting` + `BreadcrumbList` JSON-LD,通過 Google Rich Results Test
- [ ] 首頁含 `WebSite` + `Person`,`sameAs` 涵蓋 6 個社群
- [ ] OG 圖回傳 200,分享預覽正常
- [ ] sitemap 每筆含 `lastmod`
- [ ] `/llms.txt`、`/llms-full.txt`、`/robots.txt` 皆可存取且內容正確
- [ ] RSS 含 `content:encoded` 全文
- [ ] 460 篇 description 皆為完整句且不等於首段
- [ ] 舊中文路徑皆可轉址到新英文路徑,且 stub 頁 noindex
- [ ] Lighthouse SEO 100、CWV 綠燈
