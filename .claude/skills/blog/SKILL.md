---
name: blog
description: 在竹子日誌（Astro 5 + GitHub Pages）撰寫、改寫或校訂文章。當使用者說「寫一篇文章」「發一篇」「幫我把這個主題寫成文章」「改寫這篇貼文放到部落格」「幫我補 SEO」「這篇文章加個圖解」，或要求為 src/content/posts 產出／編修 md、mdx 內容時使用。內含檔案落點與網址規則、frontmatter 與 SEO 規範、正文結構、以及用 SVG／Canvas 做流程圖、連播圖、動畫的判斷與樣板。語氣一律交給 speaking-style skill 的 willy persona，本 skill 不定義語氣。不觸發：程式碼修改、commit message、規格文件、README。
---

# 竹子日誌寫作

這個 skill 管的是「一篇文章長什麼樣」——檔案放哪、frontmatter 怎麼填、結構怎麼排、SEO 怎麼顧、什麼時候該畫圖。

**語氣不歸我管。** 「一句話怎麼講出來」一律照 `.claude/skills/speaking-style/personas/willy.md`。兩邊衝突時，以 persona 檔案為準。

---

## 0. 動筆前一定要做的三件事

1. **完整讀過 `.claude/skills/speaking-style/personas/willy.md`**，不要只掃標題。程度副詞密度、問號密度、標點慣例就是差異所在。
2. **搜一下有沒有寫過**：`rg -il "關鍵字" src/content/posts/`。同一個主題已經有文章 → 改寫舊文並更新 `updatedDate`，不要開新篇跟自己打對台（重複內容會互相稀釋排名）。順便從搜到的結果裡挑 2～4 篇當內鏈。
3. **確認分類與 slug**（見 §1）。這兩個決定網址，發布後就不能改了。

沒有足夠素材時**直接問**使用者要講的實際案例、踩過的坑、當時的數字。竹子的文章是經驗驅動的，沒有親身經驗就會寫成空話——這比 SEO 沒做好嚴重得多。

---

## 1. 檔案落點與網址

```
src/content/posts/{分類資料夾}/{slug}.md      ← 預設用 .md
src/content/posts/{分類資料夾}/{slug}.mdx     ← 需要 React island（連播圖、Canvas）才用 .mdx
```

- **分類資料夾** = `src/lib/categories.ts` 裡 `CATEGORIES` 的 `slug`，全部是英文。12 個分類，只能選一個：
  `frontend`（前端技術）／`engineering`（工程實務）／`design-system`（設計與設計系統）／`ai-tools`（AI 與工具）／`career`（職涯與工作）／`business`（商業與創業）／`learning`（學習與成長）／`discussion`（議題討論）／`notes`（短文與心得）／`reflection`（個人反思）／`community`（活動與社群）／`daily`（日更系列）
- frontmatter 的 `category` 要填**中文 `name`**（例：資料夾 `ai-tools`，`category: "AI 與工具"`）。填錯不會 build fail，但麵包屑跟分類頁會抓不到。
- **網址 = `/posts/{分類資料夾}/{slug}/`**，兩段都是英文。例：`engineering/zero-trust-explained.md` → `/posts/engineering/zero-trust-explained/`。
- **slug 一律英文 kebab-case**，3～5 個字，去掉 the／a／of 這種虛字，含主要關鍵字。**不要用中文檔名**——中文網址在外部分享時會被 percent-encoding 炸成一長串（全站 460 篇已於 2026-08 統一改成英文）。
- 系列文用帶序號的形式保住排序與語意：`daily-51-cjs-esm-history`、`micro-frontend-9-communication`。
- **slug 與分類資料夾在發布後視為永久**。GitHub Pages 沒有 redirect 機制，改名 = 舊網址直接 404，既有的分享連結與排名一起消失。搬分類也一樣（網址含分類）。真的非改不可，就在 `public/` 放一頁 meta refresh 的舊網址頁。

圖片與附件：

- 文章封面 → `src/assets/covers/{slug}.png`（走 astro:assets 最佳化）
- 不需最佳化的截圖 → `public/images/{slug}/*.png`，網址即 `/images/{slug}/xxx.png`
- PDF、附件 → `public/files/{年份}/`（不進 sitemap）

---

## 2. Frontmatter

schema 在 `src/content.config.ts`，欄位不符會直接 build fail。

```yaml
---
title: "內網不等於安全：Zero Trust 到底在防什麼"
description: "把服務藏在內網不會讓它變安全，只是讓你看不到攻擊。這篇用飯店房卡的比喻講清楚 Zero Trust 的爆炸半徑控制，以及一般團隊實際做得到的第一步。"
publishDate: 2026-08-13T21:30:00+08:00
updatedDate: 2026-08-20T10:00:00+08:00   # 只有實質改寫才加，錯字不算
category: "工程實務"
tags:
  - "架構"
  - "資安"
  - "工程實務"
series: "zero-trust"                      # 沒有系列就整行刪掉
cover: "../../assets/covers/zerotrust-dark-services.png"   # 選填，路徑相對於本檔
draft: false
lang: zh-Hant
---
```

| 欄位 | 規則 |
| --- | --- |
| `title` | **中文 20～30 字**（SERP 大約在 30 個全形字後截斷）。主要關鍵字放前半段。**不要**自己加「｜竹子日誌」，`Base.astro` 會自動接。標題照 persona §4.8：口語、自嘲、不聳動，但要能一眼看出在講什麼——「碎碎念」當標題對搜尋是零分。 |
| `description` | **60～100 字，schema 硬上限 200**。這一欄是 `<meta name="description">`、OG／Twitter description、JSON-LD 與 RSS 摘要的來源，**不會顯示在文章頁上**（`Post.astro` 已移除，因為匯入文章的 description 常與首段一字不差）。要是完整句子、能離開文章單獨讀懂、含主要關鍵字一次、講「讀者能拿到什麼」。禁止「本文將介紹⋯⋯」「這篇文章會談到⋯⋯」。 |
| `publishDate` | ISO 8601 帶 `+08:00`。不要用純日期字串。 |
| `updatedDate` | 內容有實質更新才加。它是「這篇還活著」的訊號，但沒改內容卻亂動 = 沒有意義。 |
| `category` | 12 個 `name` 之一，**要跟所在資料夾對得起來**。 |
| `tags` | **2～4 個，從既有標籤池挑**。查現有標籤：`rg -h '^  - "' src/content/posts \| sort \| uniq -c \| sort -rn \| head -40`。主力池：反思／前端／議題討論／工程實務／職涯／日更／商業／架構／AI／短文／心情／工具／學習／設計系統／微前端／求職／故事／設計／行銷／團隊。每個 tag 都會生一頁 `/posts/tags/{tag}/`，發明一個只有一篇文章的新標籤 = 生一頁 thin content，別做。 |
| `series` | 同系列文章會在文末互相導覽，是免費的內鏈。有兩篇以上才設，值用英文 kebab-case。 |
| `cover` | 選填。1200×630 以上、比例 2:1。 |
| `draft` | 寫作中一律 `true`，確定要發才改 `false`。`true` 不會進 build、sitemap、RSS。 |
| `lang` | `zh-Hant`。 |

---

## 3. 正文結構

### 3.1 三條硬規則（違反會直接吃 SEO 虧）

1. **正文不要有 `# H1`。** `Post.astro` 已經用 `title` 渲染了 H1，再寫一個 = 一頁兩個 H1。正文最高層級是 `##`。
   （既有匯入文章有些帶 H1，那是匯入產物，別跟著學。）
2. **第一段不要逐字複製 `description`。** description 是寫給搜尋引擎與分享卡片看的，正文首段是寫給讀者看的，兩者重複等於浪費一次曝光。第一段要**另一個切角**的進場：一個現場、一個對話、一個數字。
3. **分節線用單獨一行的 `——`，不要用 markdown 的 `---`。** 在 md 裡 `---` 會被當成 `<hr>`，而且跟 frontmatter 分隔符打架。

### 3.2 骨架

```
（開場 1～3 段：直接進現場。「最近⋯⋯」「事情是這樣的。」「今天有個使用者⋯⋯」）

——

## 具體語意的 H2

（3～6 段短段落，中間視情況插圖解）

### 需要再切一層才用 H3

——

## 下一個 H2

（結尾：金句／反問／⋯⋯／伏筆，四選一）
```

- **H2／H3 才會進目錄**（`TOC.astro` 只取 depth 2、3），h4 以下等於在目錄裡消失。
- **H2 要有語意、含關鍵詞**，不要只寫「問題」「解法」「結論」。純單詞小標（`Position`、`Transform`）只在技術文列 API 時用。
- 標題階層不跳級：`##` → `###`，不要 `##` → `####`。
- 段落照 persona §3.1：短段為主、單句成段是常態、段間留白。
- 條列少用。竹子的文章是用換行段落推進的，不是投影片。真的要列（環境需求、步驟指令）才用。
- 程式碼區塊一定標語言（` ```ts `），Shiki 才會上色。

### 3.3 篇幅

跟著題材走，不要為了 SEO 灌水：

- 短文／心情／日更：300～800 字，不用硬塞小標，也不用硬塞圖。
- 一個主題講清楚：1200～2500 字，3～5 個 H2，1～2 張圖解。
- 深度技術文／故事長文：2500 字以上，要有完整敘事弧線，圖解基本上跑不掉。

---

## 4. SEO 檢查細節

**關鍵字**

- 每篇鎖**一組主要關鍵字**（讀者真的會打進搜尋框的講法，例如「Zero Trust 是什麼」而不是「零信任架構之實踐」）＋ 2～3 個長尾。
- 出現位置：`title`、`description`、**第一段**、**至少一個 H2**、結尾各一次。中間自然帶到就好。
- 不要堆。同一個詞連續出現三次以上就是在傷閱讀，而閱讀體驗本身就是排名訊號。

**連結**

- **內鏈 2～4 條**，指向站內既有文章，用絕對路徑 `/posts/{分類}/{slug}/`（保留結尾斜線）。
- 錨文字要是有意義的詞（「我之前寫過的微前端拆分成本」），不要「這裡」「詳見此篇」。
- 貼連結前先確認檔案真的存在：`ls src/content/posts/{分類}/{slug}.md`。死連結是最容易犯又最傷的錯。
- 外鏈給權威來源（MDN、RFC、官方文件），開發者讀者會查，AI 產的假來源會被抓包。

**圖與媒體**

- 每張圖都要 `alt`，寫「這張圖在說什麼」而不是「示意圖」。裝飾性圖片用 `alt=""`。
- raster 圖一定給 `width`／`height`（或用 `<Image>`），避免 CLS。
- **關鍵字不要只活在圖裡。** SVG 裡的 `<text>` 跟 Canvas 畫出來的字，搜尋引擎與站內的 Pagefind 索引都不保證吃得到。每張圖底下都要有 `<figcaption>`，把圖在講的結論用文字再講一次——這句同時是給讀者的、給爬蟲的、給讀者聽螢幕報讀的。

**其他**

- 站台已自動處理：canonical、OG／Twitter、sitemap（`draft: true` 與 `/files/`、`/interview/` 自動排除）、RSS、Pagefind 中日韓分詞索引。這些不用在文章裡手動寫。
- 一篇文章只講一件事。同一主題想從三個角度講 → 開系列（`series`），彼此靠系列導覽互鏈，而不是塞成一篇雜燴。

---

## 5. 圖解：SVG / Canvas / 連播圖

文字講三段還講不清楚的東西，就是該畫圖了。反過來說，一句話講得完的不要畫——沒有資訊量的裝飾圖只是讓頁面變肥。

### 5.1 什麼時候畫

**該畫：** 多角色來回的流程（使用者→前端→API→驗證）／時間序與狀態轉移／系統分層與邊界／前後對照（重構前 vs 重構後）／數量級比較／抽象比喻具象化（城堡與護城河、爆炸半徑）／踩坑故事裡「當時到底發生什麼」的重演。

**別畫：** 純觀點文與心情文／一句話講得完的概念／只是想讓版面好看／內容會過期的截圖式資訊。

### 5.2 選型：預設是靜態 SVG

**靜態 inline SVG 是預設值，其他三種都要先過閘。** 大部分的流程、架構、對照、時序，一張靜態圖就講完了——會動不等於講得更清楚，往往只是更吵。

| 情境 | 做法 | 檔案格式 |
| --- | --- | --- |
| **預設**：流程圖、架構圖、時序圖、對照圖、分層圖 | **inline SVG（靜態）** | `.md` |
| 通過 §5.2.1 動畫閘 | inline SVG **+ SVG 內 `<style>` 的 CSS 動畫** | `.md` |
| 通過 §5.2.2 故事閘 | **連播圖**：React island stepper | `.mdx` |
| SVG 撐不住（節點 >500 或需每幀重算） | **Canvas island** | `.mdx` |
| 真實畫面（Figma、DevTools、後台） | 截圖放 `public/images/{slug}/` | `.md` |

總判準：**能靜態就靜態，能 SVG 就不要 Canvas。** SVG 是 DOM，可縮放、可選取、可上 CSS 變數跟著深色模式走、對輔助技術友善；Canvas 是一張畫布，什麼都要自己來，而且對搜尋引擎完全不透明。

#### 5.2.1 動畫閘：**「動」本身要有表現價值**才用

動畫要傳達的是**靜態圖畫不出來的那個維度**——時間、順序、速度差、累積、擴散。動畫不是用來吸睛的。

先問一句：**把這張圖凍在任一幀，讀者會漏掉什麼？**

- 答「什麼都不會漏」→ **做成靜態圖**。想表達順序就標 ①②③、想表達方向就畫箭頭，這些靜態圖都做得到，而且讀者可以自己控制閱讀速度。
- 答「會漏掉某個東西怎麼變過去的」→ 才動。

**可以動的：** 請求依序流過管線、爆炸半徑一圈圈擴散、兩種做法的耗時差（同時跑給你看誰先到）、資料在元件樹上往上冒、記憶體隨迴圈累積。共同點是：**變化的過程本身就是結論**。

**不要動的：** 純裝飾的呼吸／脈動／漸層跑馬燈、logo 轉圈、只是想讓靜態圖「活一點」、閃爍、無限循環又不傳達任何量的東西。

**動了就要守住：** 一張圖只動一到兩個元素；週期 2～5 秒；不閃爍；動畫講的結論一定要在 figcaption 或內文用文字再講一次（開了 reduced motion 的人只會看到靜止的第一幀，那一幀必須自己就讀得懂）。

#### 5.2.2 故事閘：**內容真的有故事性**才用連播圖

連播圖是有成本的：要開 `.mdx`、要載 React island、讀者要動手點、沒點的人跟爬蟲只拿得到第一步。所以它只服務一種內容——**有先後、有因果、每一步都推翻或補足上一步的敘事**。

**適合：** 踩坑故事的重演（一開始以為是 A → 查下去發現是 B → 真正的元兇是 C）／攻擊路徑一步步展開／重構過程的階段演進／一個決策在三種情境下各自長成什麼樣。共同點是：**每一步都在改變讀者對前一步的理解**。

**不適合（改用別的）：**

- 只是「三個並列的重點」→ 一張靜態圖並排放，讀者一眼掃完，比點三次快。
- 只是「同一張圖的三個區域特寫」→ 一張圖加標註就好。
- 只是「步驟 1、2、3 的操作說明」→ 用文字段落配一張總圖，讀者要對照時不用來回點。
- 步驟超過 5 步 → 這已經不是一張圖的事了，拆成小節，每節配自己的靜態圖。

**用了就要守住：** 每一步的 caption 都要能單獨讀懂；結論**不能只藏在最後一步**，內文要把整條線再敘述一次。

### 5.3 通用規範（所有圖都要遵守）

1. **跟著主題色走。** 不要寫死 `#fff`／`#000`，用站台 token：`var(--color-bg)`／`--color-surface`／`--color-border`／`--color-text`／`--color-muted`／`--color-primary`（竹綠）／`--color-accent`（竹節褐）。CSS 變數會繼承進 inline SVG，深色模式自動跟著換。
2. **響應式。** 一定給 `viewBox`，尺寸交給 `style="width:100%;height:auto"`，不要寫死 `width="720"`。手機寬度下文字最小 12px（`font-size="12"` 以上）。
3. **無障礙 ＋ 可索引。** `role="img"` ＋ `aria-labelledby` 指到 `<title>`（必要時加 `<desc>`），外面包 `<figure>`＋`<figcaption>`。
4. **尊重 `prefers-reduced-motion`。** `global.css` 已有全域規則把 **CSS 動畫**壓成 0.01ms——所以動畫**用 CSS `@keyframes`，不要用 SMIL `<animate>`**（SMIL 不吃那條 CSS 規則，得自己處理）。
5. **class 名稱要有前綴。** inline SVG 裡的 `<style>` 是全域生效的，一律用 `.fig-{slug}-*` 命名，避免兩篇文章互相汙染。
6. **體積控制。** 單張 inline SVG 15KB 以內，不要在 SVG 裡塞 base64 圖。超過就改成外部檔案放 `public/images/`。
7. 圖裡的文字用中文、簡短，一個框最多 8～10 個字；複雜的說明放 figcaption。

`figure`／`figcaption` 的樣式如果 `src/styles/global.css` 還沒有，加一次就好（之後所有文章共用，不要每篇 inline style）：

```css
.prose-zh figure {
  margin-block: 2rem;
}
.prose-zh figure svg,
.prose-zh figure canvas {
  display: block;
  width: 100%;
  height: auto;
}
.prose-zh figcaption {
  margin-top: 0.75rem;
  font-size: 0.9em;
  line-height: 1.7;
  text-align: center;
  color: var(--color-muted);
}
```

### 5.4 樣板 A：靜態流程圖（`.md` 可直接貼）

markdown 裡的 raw HTML 前後要空一行。

```html
<figure>
  <svg viewBox="0 0 720 200" role="img" aria-labelledby="fig-zt-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-zt-title">邊界防禦與零信任的請求路徑對照</title>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="8" y="60" width="150" height="72" rx="10" />
      <rect x="208" y="60" width="150" height="72" rx="10" />
      <rect x="408" y="60" width="150" height="72" rx="10" />
    </g>
    <g fill="var(--color-text)" font-size="15" text-anchor="middle" font-family="var(--font-sans)">
      <text x="83" y="103">使用者</text>
      <text x="283" y="103">閘道驗證</text>
      <text x="483" y="103">內部服務</text>
    </g>
    <g stroke="var(--color-primary)" stroke-width="2" marker-end="url(#fig-zt-arrow)" fill="none">
      <path d="M162 96 H204" />
      <path d="M362 96 H404" />
    </g>
    <defs>
      <marker id="fig-zt-arrow" viewBox="0 0 10 10" refX="9" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
    </defs>
    <text x="283" y="150" font-size="12" fill="var(--color-muted)" text-anchor="middle">每一次請求都驗</text>
  </svg>
  <figcaption>零信任不是多加一道門，而是把「驗證」從入口搬到每一次請求上。</figcaption>
</figure>
```

### 5.5 樣板 B：CSS 動畫 SVG（**先過 §5.2.1 動畫閘**）

下面這張之所以能動，是因為它要講的就是「請求不是一次驗完，而是一路上被反覆驗」——凍住任一幀就看不出那個「一路」。如果你的圖凍住也不會漏掉東西，回頭用樣板 A。

```html
<figure>
  <svg viewBox="0 0 720 160" role="img" aria-labelledby="fig-pipe-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-pipe-title">一個請求依序通過驗證、授權、稽核三個階段</title>
    <style>
      .fig-pipe-dot { animation: fig-pipe-run 3.2s linear infinite; }
      @keyframes fig-pipe-run { from { transform: translateX(0); } to { transform: translateX(600px); } }
    </style>
    <line x1="60" y1="80" x2="660" y2="80" stroke="var(--color-border)" stroke-width="3" />
    <g fill="var(--color-muted)" font-size="13" text-anchor="middle">
      <text x="200" y="115">驗證</text>
      <text x="400" y="115">授權</text>
      <text x="600" y="115">稽核</text>
    </g>
    <circle class="fig-pipe-dot" cx="60" cy="80" r="9" fill="var(--color-primary)" />
  </svg>
  <figcaption>請求不是進門就通行，而是每一站都要重新回答「你是誰、你能做什麼」。</figcaption>
</figure>
```

注意這張圖的**第一幀本身就讀得懂**（三站的名稱都在，管線也在），動的只是那顆點。開了 reduced motion 的讀者不會漏掉結論，這是動畫圖的及格線。其餘規範見 §5.2.1。

### 5.6 樣板 C：連播圖 island（**先過 §5.2.2 故事閘**，`.mdx`）

只有「每一步都在改變讀者對前一步的理解」的敘事才走這條。並列重點、區域特寫、操作步驟都不算——回頭用樣板 A。

先把 island 放 `src/components/islands/StepFigure.tsx`（第一次用才建，之後所有文章共用）：

```tsx
import { useState, type ReactNode } from 'react';

export interface Step {
  caption: string;
  figure: ReactNode;
}

export default function StepFigure({ steps, label }: { steps: Step[]; label: string }) {
  const [i, setI] = useState(0);
  const last = steps.length - 1;
  return (
    <figure aria-roledescription="分步圖解" aria-label={label}>
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 10, padding: '1rem' }}>
        {steps[i].figure}
      </div>
      <div
        role="group"
        aria-label="步驟切換"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.75rem', marginTop: '.75rem' }}
      >
        <button type="button" onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>← 上一步</button>
        <span aria-live="polite" style={{ color: 'var(--color-muted)', fontSize: '.9em' }}>
          {i + 1} / {steps.length}
        </span>
        <button type="button" onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last}>下一步 →</button>
      </div>
      <figcaption>{steps[i].caption}</figcaption>
    </figure>
  );
}
```

文章裡（`.mdx`，路徑從 `src/content/posts/{分類}/` 往上三層到 `src/`）：

```mdx
import StepFigure from '../../../components/islands/StepFigure.tsx';

<StepFigure
  client:visible
  label="Token 洩漏後的爆炸半徑"
  steps={[
    { caption: '第一步：攻擊者拿到一組還沒過期的 Token。', figure: <svg viewBox="0 0 640 200">{/* ... */}</svg> },
    { caption: '第二步：邊界防禦下，這組 Token 等於整座城的鑰匙。', figure: <svg viewBox="0 0 640 200">{/* ... */}</svg> },
    { caption: '第三步：換成零信任，它只開得了原本那一間房。', figure: <svg viewBox="0 0 640 200">{/* ... */}</svg> },
  ]}
/>
```

**連播圖的每一步 caption 都是正文的一部分**，要能單獨讀懂——沒點下一步的人、爬蟲、螢幕報讀都只會拿到第一步。所以結論不能只藏在最後一步，內文要把整條線再敘述一次。

### 5.7 樣板 D：Canvas island（`.mdx`，非必要不用）

只有在 SVG 撐不住時才走這條。必備四件事：

```tsx
import { useEffect, useRef } from 'react';

export default function ParticleFigure({ caption }: { caption: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    // 1) 尊重 reduced motion:只畫第一幀
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // 2) HiDPI:用 devicePixelRatio 放大 backing store
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const { width, height } = cv.getBoundingClientRect();
    cv.width = width * dpr;
    cv.height = height * dpr;
    ctx.scale(dpr, dpr);

    let raf = 0;
    const draw = (t: number) => {
      // ...繪製,顏色從 getComputedStyle(cv).getPropertyValue('--color-primary') 取,才會跟著主題
      if (!still) raf = requestAnimationFrame(draw);
    };
    // 3) 離開視窗就停,不要在背景燒 CPU
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !still) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    });
    io.observe(cv);
    draw(0);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  // 4) canvas 內容對爬蟲與報讀是黑的,一定要有 caption 與文字結論
  return (
    <figure>
      <canvas ref={ref} role="img" aria-label={caption} style={{ width: '100%', aspectRatio: '16 / 7' }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
```

---

## 6. 交付前檢查清單

**語感**（逐條對 persona §7，這裡只列最常漏的）

- [ ] 沒有「綜上所述」「值得一提的是」「首先／其次／最後」
- [ ] 每 200～300 字至少一個問號，且問完有自答
- [ ] 至少一句單獨成段的重點句
- [ ] 至少一個生活化比喻，而且比喻在術語**之前**
- [ ] 至少一處先幫讀者講反駁（「也許有人會說⋯⋯」）
- [ ] 有一處切進真心話的開關（老實說／說白了／但事實上）
- [ ] 結尾是金句／反問／`⋯⋯`／伏筆其中一種，不是「希望對你有幫助」
- [ ] 中英之間有半形空格，中文接數字**不**加空格
- [ ] 沒有簡體用語（組件／用戶／代碼／數據／性能／默認／緩存）
- [ ] 分節線是 `——`，不是 `---`

**結構與 SEO**

- [ ] 正文沒有 `# H1`，最高層級是 `##`
- [ ] 第一段沒有複製 `description`
- [ ] `title` 20～30 字、`description` 60～100 字且是完整句子
- [ ] `category` 與所在資料夾對得上，slug 是英文 kebab-case
- [ ] tags 2～4 個且都來自既有標籤池
- [ ] 內鏈 2～4 條，路徑實際存在
- [ ] 主要關鍵字出現在 title／description／首段／至少一個 H2

**圖**

- [ ] 顏色全用 CSS 變數，深色模式下自己開來看過
- [ ] 有 `viewBox`＋`role="img"`＋`<title>`，外面包 `<figure>`＋`<figcaption>`
- [ ] 圖傳達的結論在內文也用文字講過一次
- [ ] **會動的圖過得了動畫閘**：凍在任一幀會漏掉東西，而且第一幀自己就讀得懂；不是為了吸睛才動
- [ ] **連播圖過得了故事閘**：每一步都在改變讀者對前一步的理解，不是並列重點或操作步驟；步驟 ≤5；結論沒有只藏在最後一步
- [ ] 沒過閘的圖已經改回靜態 SVG（並列重點用並排、順序用 ①②③、方向用箭頭）
- [ ] 動畫是 CSS `@keyframes`（不是 SMIL），class 有 `.fig-{slug}-` 前綴

**最後**

- [ ] `pnpm build` 通過（會跑 content schema 驗證與 Pagefind 索引；要連型別一起檢查再跑 `pnpm check`）
- [ ] `pnpm dev` 開起來實際看過該篇：目錄有出來、圖沒破、深淺色都正常

---

## 7. 站台層已知缺口

這幾件事**不要在文章裡硬幹**，要修就是改 layout／設定，而且要先問過使用者：

- giscus 的 `repoId`／`categoryId` 還沒填（`src/components/post/Giscus.astro`），留言區目前是不會動的。
- 單篇 OG 圖已自動化：有設 `cover` 就走 astro:assets 產圖，沒設會由 `scripts/build-og.mjs`（`pnpm build` 時執行）自動產一張含標題的品牌卡片。文章端不用手動處理 OG 圖。
- 其餘待辦見專案根目錄的 `TODO.md`。

已經做好、不用再補的（別重複造）：JSON-LD（`src/lib/seo.ts` + `JsonLd.astro`）、canonical／OG／Twitter meta、
自建 sitemap、動態 robots.txt、`/llms.txt` 與 `/llms-full.txt`、RSS 全文輸出、字型自架、
`/posts/categories/` 與 `/posts/tags/` 索引頁。
