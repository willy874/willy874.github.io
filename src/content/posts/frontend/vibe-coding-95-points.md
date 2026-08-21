---
title: "Vibe Coding 做得出 95 分的產品，缺的 5 分全是最貴的"
description: "一個人用 Vibe Coding 做出金流、SEO、三個自製瀏覽器引擎都齊全的字幕產品，完成度高到不像 side project。但 1024px 的硬地板、寫死的多語系、沒清理的暫存檔，缺的剛好都是不好玩的那些。"
publishDate: 2026-08-21T09:10:00+08:00
category: "前端技術"
tags:
  - "前端"
  - "AI"
  - "工程實務"
series: "ai-era-craft"
draft: false
lang: zh-Hant
---

最近「壹加壹」做的字幕服務 What'Sub 燒得很兇。

一個瀏覽器端的 AI 字幕工具，聽打、斷句、對時間、上樣式、匯出全包，主打「影片留在你的電腦」。

老實說，我對評判他對還是錯完全沒興趣，甚至有點看笑話的心情在看整件事。我本來以為這種話題燒個兩天就差不多了，結果一波接一波，到現在還沒停。

想想，那我也來蹭一下好了。

但我不打算蹭立場，我打算蹭原始碼。因為這東西的核心引擎，寫得比我看過的很多「正規團隊產品」都還要兇猛。稱讚的、貶低的，各路人馬都想插一句，那我就用一個前端工程師的身分，把它整個掀開來看。

前端沒有秘密。你送到瀏覽器的東西，我全部看得到。

——

## 它不是 demo，是真的在賣東西

很多 Vibe Coding 出來的東西，都停在「你看我做得出來」。

這個不是。

它有串金流、有訂閱制、有月繳年繳、有加購包、有推薦碼、有電子發票、有統編查詢、有自動續訂、有錢包、有訂單、有重寄發票。金流那條線是完整跑通的，不是接個 Stripe demo 就自以為收工。它甚至有後台、有管理者中心，一整套算蠻完善的系統。

SEO 更誇張。八個行銷頁全部靜態預渲染，每一頁的 `title`、`description`、`canonical` 都是**手寫**的，不是模板套出來的。七個內容頁每頁三組 JSON-LD。長尾意圖頁的策略清楚到不行——`/fcpxml/` 打「SRT 轉 FCPXML」，`/compare/` 直接打競品比較。

還有 `llms.txt`。會在 2026 年主動放 `llms.txt` 的台灣 SaaS，我一隻手數得完。

這已經不是「工程師做了個 side project」，這是有人在認真經營一門生意。

這就是我一直在講的，[功能做出來只是一句話](/posts/ai-tools/shipping-features-is-one-sentence/)，難的從來是做出來之後的那些事。而這個人把「之後」也做了。

產品先落地再說，這就是 AI 時代該有的態度。

——

## UI/UX 的細節意識，高到不像一個人做的

`prefers-reduced-motion` 在 CSS 裡出現 26 個區塊。

26 個。

多語系文字用 `<bdi>` 包起來，避免雙向文字排版爆掉。實驗性 CSS 全部包在 `@supports` 裡，不支援的瀏覽器不會把內容留在 `opacity: 0` 變成一片空白。

圖片是教科書等級：`<picture>` 配 WebP／JPG 雙格式、四種 `aspect-ratio` 斷點、`srcset` 跟 `sizes` 都給好，裝飾圖 `alt=""`，`loading="lazy"` 跟 `fetchpriority="high"` 分工正確。

錯誤訊息全部是中文口語。不是「Error: decode failed」，是「抽出聲音太久沒有進度（檔案可能太大或格式太特殊）」。

還有這種：

> 這支瀏覽器沒辦法邊燒邊存進硬碟，用 Chrome 或 Edge 開同一個專案輸出，成品直接落地、不受大小限制

這句話寫得比很多產品的 PM 都好。它告訴你發生什麼事、為什麼、然後怎麼辦。三件事一句講完。

——

## 三個自製引擎，一個 byte 都沒解碼

這是我最熟悉，也覺得最瘋狂的地方。

它用 React 19。沒有 router、沒有 state manager、沒有 UI Library、沒有 CSS framework，幾乎你想得到的，都沒有。

Router 是 `popstate` 加 regex 手刻的。Store 是三個手寫的 external store 配 `useSyncExternalStore`。Tooltip、Toast、Modal 全部手刻。編輯器的文字覆蓋層甚至直接繞過 React，用 `replaceChildren()` 加 `getBoundingClientRect()` 手算絕對定位硬畫。

React 在這裡只是一個渲染層。真正的重量壓在瀏覽器原生能力上。

然後是三個自製引擎。這三個我拆開講，也順便把可以自己去查的原始文件附上——因為這些東西根本不是什麼黑魔法，只是很少人願意去讀規格書而已。

### 抽離音訊：手刻 MP4 Parser，只讀那幾段 byte

先講一般人會怎麼做：整支影片丟進 ffmpeg.wasm，解碼、抽音軌、重新編碼，然後等它跑完。10 GB 就是 10 GB 全部讀進來。

它不是這樣做的。

你可以把 MP4 想成一個櫃子。櫃子裡有很多抽屜（規格書叫 box 或 atom），每個抽屜有名字、有大小。`ftyp` 抽屜寫著「我是什麼格式」，`mdat` 抽屜裝著真正的影音資料，而 `moov` 抽屜裝的是一份**目錄**——哪一段聲音、哪一格畫面，分別放在檔案的第幾個 byte、長度多少，全部寫在裡面。

想知道這個櫃子長什麼樣，[MDN 的 Media container formats](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Containers) 是最好讀的入門；要看正式定義，就翻 [W3C 的 ISO BMFF Byte Stream Format](https://www.w3.org/TR/mse-byte-stream-format-isobmff/)。

所以它做的事情是這樣：

先用 `File.slice()` 只切出檔案開頭那一小段，手刻 parser 走 `moov > trak > mdia > minf > stbl`，把目錄讀出來。有了目錄，它就知道每一個 AAC packet 躺在第幾個 byte。接著它量測這台機器的 I/O latency 跟 throughput，用一個成本模型算「跳著讀划不划算」——因為硬碟每跳一次都有成本，兩段離很近的資料，一次讀完反而比跳兩次快。算完之後只讀那幾段 byte range，最後手工組一個合法的 `.m4a` 出來。

`File.slice()` 這件事本身一點都不神祕，[MDN 上就一頁](https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice)，而且它是 lazy 的——你切了不代表你讀了，真的要讀還得去 `arrayBuffer()`。神祕的是有人願意為了它去讀 MP4 規格書。

<figure>
  <svg viewBox="0 0 720 262" role="img" aria-labelledby="fig-vc95-mp4-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-vc95-mp4-title">先讀 moov 取得樣本索引，再依索引只讀取 mdat 裡的少數幾段位元組</title>
    <text x="16" y="34" font-size="13" fill="var(--color-muted)">一支 10 GB 的 MP4 檔案</text>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="16" y="44" width="50" height="46" />
      <rect x="66" y="44" width="110" height="46" />
      <rect x="176" y="44" width="528" height="46" />
    </g>
    <g fill="var(--color-primary)">
      <rect x="300" y="45" width="18" height="44" />
      <rect x="384" y="45" width="15" height="44" />
      <rect x="468" y="45" width="20" height="44" />
      <rect x="556" y="45" width="16" height="44" />
      <rect x="646" y="45" width="18" height="44" />
    </g>
    <g fill="var(--color-text)" font-size="13" text-anchor="middle">
      <text x="41" y="72" font-size="11">ftyp</text>
      <text x="121" y="72">moov</text>
      <text x="233" y="72">mdat</text>
    </g>
    <g stroke="var(--color-accent)" stroke-width="2" fill="none" marker-end="url(#fig-vc95-arrow2)">
      <path d="M121 92 V128" />
      <path d="M500 92 V128" />
    </g>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="16" y="136" width="230" height="62" rx="8" />
      <rect x="300" y="136" width="404" height="62" rx="8" />
    </g>
    <g fill="var(--color-text)" font-size="13">
      <text x="32" y="162">① 只讀開頭，拿到樣本索引</text>
      <text x="316" y="162">② 依索引跳著讀那幾段 byte</text>
    </g>
    <g fill="var(--color-muted)" font-size="12">
      <text x="32" y="184">每個 packet 在第幾個 byte、多長</text>
      <text x="316" y="184">再手工組成一個合法的 .m4a，實際讀不到 100 MB</text>
    </g>
    <text x="360" y="234" font-size="13" fill="var(--color-accent)" text-anchor="middle">全程沒有解碼任何一個 byte</text>
    <defs>
      <marker id="fig-vc95-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-accent)" />
      </marker>
    </defs>
  </svg>
  <figcaption>綠色那五小段就是實際被讀進來的資料。先讀 moov 拿到「東西放在哪」的目錄，剩下的就只是精準取件——10 GB 的影片，讀不到 100 MB 就生得出音檔。</figcaption>
</figure>

一支 10 GB 的影片，可能只讀了 80 MB 就生出音檔。

然後是 PCM 分支，這個更狠。

AAC 這個格式有一個很討厭的特性：編碼器會在開頭偷偷塞幾幀靜音進去，這叫 encoder delay，也叫 priming。所以你把一段聲音編碼再解碼回來，它會比原本晚一點點。晚多少？看編碼器的實作，每台機器可能都不一樣。

它的解法是：用 LCG 產生 0.3 秒的確定性白噪音（確定性的意思是同一個種子每次都長一模一樣，才能拿來當比對基準），丟去 AAC 編碼再解碼，然後對這兩段訊號做互相關，掃描 lag 0 到 4600，看往後推幾格會最像。推幾格最像，就代表這台電腦的編碼器 priming 了幾幀。

量出來之後，把這個值寫進 MP4 的 edit list，播放的時候就會自動把前面那段多出來的靜音切掉。

<figure>
  <svg viewBox="0 0 720 210" role="img" aria-labelledby="fig-vc95-priming-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-vc95-priming-title">AAC 編碼在開頭多出一段靜音，量出 lag 後用 edit list 對齊回原位</title>
    <style>
      .fig-vc95-shift { animation: fig-vc95-align 4.5s ease-in-out infinite; }
      @keyframes fig-vc95-align {
        0%, 35% { transform: translateX(0); }
        60%, 100% { transform: translateX(-64px); }
      }
    </style>
    <line x1="150" y1="26" x2="150" y2="176" stroke="var(--color-muted)" stroke-width="1.5" stroke-dasharray="5 4" />
    <text x="150" y="18" font-size="12" fill="var(--color-muted)" text-anchor="middle">時間 0</text>
    <g fill="var(--color-text)" font-size="13">
      <text x="16" y="60">原始訊號</text>
      <text x="16" y="130">編碼再解碼</text>
    </g>
    <rect x="150" y="38" width="500" height="34" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5" />
    <rect x="150" y="38" width="430" height="34" rx="6" fill="var(--color-primary)" />
    <rect x="150" y="108" width="500" height="34" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5" />
    <rect x="150" y="108" width="64" height="34" fill="var(--color-border)" />
    <text x="182" y="130" font-size="11" fill="var(--color-muted)" text-anchor="middle">靜音</text>
    <rect class="fig-vc95-shift" x="214" y="108" width="430" height="34" rx="6" fill="var(--color-accent)" opacity="0.85" />
    <g stroke="var(--color-accent)" stroke-width="1.5">
      <line x1="150" y1="92" x2="214" y2="92" />
    </g>
    <text x="240" y="96" font-size="12" fill="var(--color-accent)">← priming 幾幀，就是 lag 幾幀</text>
    <text x="16" y="196" font-size="12" fill="var(--color-muted)">互相關掃描 lag 0～4600，量出偏移量後寫進 edit list，播放時自動切掉前面那段靜音</text>
  </svg>
  <figcaption>編碼器在開頭塞了一段誰也沒要求的靜音，聲音就整條往後挪。互相關的工作就是量出「挪了多少」，edit list 再把它挪回來——字幕跟聲音對不對得上，差別就在這幾十毫秒。</figcaption>
</figure>

priming 這件事不是它發明的。Apple 的 [QuickTime File Format 文件](https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFAppenG/QTFFAppenG.html)裡有一整個附錄在講 AAC audio priming 跟 edit list 怎麼配合，這份文件躺在那裡很多年了。

差別在於：大部分人選擇假裝沒這回事，然後字幕跟聲音差個幾十毫秒。

### 分鏡偵測：把 32 格畫成一張拼圖，只讀一次

白話版：要偵測分鏡，就是把畫面一格一格拿出來比，看哪一格跟前一格差很多。

問題在「拿出來」這個動作。

它用 [`VideoDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder) 硬解，這是 WebCodecs 的 API，等於直接把瀏覽器底層的解碼器開給你用，[規格在 W3C](https://www.w3.org/TR/webcodecs/)。而且它是從關鍵幀 seek，不是每一格都解——關鍵幀就是 [`EncodedVideoChunk` 的 `type` 為 `key`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk/type) 的那些，它們不依賴前後幀，可以獨立解出來。

解出來的畫面在 GPU 上。但你要比對像素，就得把它搬回 CPU，這個動作叫 [`getImageData`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)。

這一搬就是一次 readback stall——GPU 手上正在跑的東西要先停下來，等資料交接完才能繼續。搬一次不貴，搬 32 次就很貴。

所以它每格縮成 64×36，畫進一張 8×4 的拼圖，湊滿 32 格才呼叫一次 `getImageData`。

32 次停頓，變成 1 次。

<figure>
  <svg viewBox="0 0 720 268" role="img" aria-labelledby="fig-vc95-tile-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-vc95-tile-title">每幀各讀一次會造成 32 次 GPU 停頓，先畫進 8×4 拼圖則只需讀一次</title>
    <text x="16" y="40" font-size="14" fill="var(--color-text)">每一幀各讀一次</text>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="150" y="24" width="20" height="26" /><rect x="176" y="24" width="20" height="26" />
      <rect x="202" y="24" width="20" height="26" /><rect x="228" y="24" width="20" height="26" />
      <rect x="254" y="24" width="20" height="26" /><rect x="280" y="24" width="20" height="26" />
      <rect x="306" y="24" width="20" height="26" /><rect x="332" y="24" width="20" height="26" />
    </g>
    <g stroke="var(--color-accent)" stroke-width="2">
      <line x1="160" y1="54" x2="160" y2="68" /><line x1="186" y1="54" x2="186" y2="68" />
      <line x1="212" y1="54" x2="212" y2="68" /><line x1="238" y1="54" x2="238" y2="68" />
      <line x1="264" y1="54" x2="264" y2="68" /><line x1="290" y1="54" x2="290" y2="68" />
      <line x1="316" y1="54" x2="316" y2="68" /><line x1="342" y1="54" x2="342" y2="68" />
    </g>
    <text x="366" y="44" font-size="13" fill="var(--color-muted)">⋯⋯</text>
    <text x="410" y="44" font-size="13" fill="var(--color-accent)">32 次 GPU→CPU 停頓</text>
    <text x="150" y="90" font-size="12" fill="var(--color-muted)">每讀一次，GPU 就要停下來等資料交接</text>
    <line x1="16" y1="116" x2="704" y2="116" stroke="var(--color-border)" stroke-width="1" />
    <text x="16" y="150" font-size="14" fill="var(--color-text)">先畫進 8×4 拼圖</text>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="150" y="140" width="176" height="88" />
    </g>
    <g stroke="var(--color-border)" stroke-width="1">
      <line x1="172" y1="140" x2="172" y2="228" /><line x1="194" y1="140" x2="194" y2="228" />
      <line x1="216" y1="140" x2="216" y2="228" /><line x1="238" y1="140" x2="238" y2="228" />
      <line x1="260" y1="140" x2="260" y2="228" /><line x1="282" y1="140" x2="282" y2="228" />
      <line x1="304" y1="140" x2="304" y2="228" />
      <line x1="150" y1="162" x2="326" y2="162" /><line x1="150" y1="184" x2="326" y2="184" />
      <line x1="150" y1="206" x2="326" y2="206" />
    </g>
    <path d="M336 184 H392" stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#fig-vc95-arrow3)" />
    <rect x="400" y="162" width="200" height="44" rx="8" fill="var(--color-surface)" stroke="var(--color-primary)" stroke-width="1.5" />
    <text x="500" y="189" font-size="13" fill="var(--color-text)" text-anchor="middle">getImageData × 1</text>
    <text x="150" y="252" font-size="12" fill="var(--color-muted)">32 幀縮成一張圖，只停 1 次</text>
    <defs>
      <marker id="fig-vc95-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
    </defs>
  </svg>
  <figcaption>上面那排短豎線每一根都是一次 GPU 停頓。把 32 格縮小拼成一張圖再一次讀回來，停頓次數從 32 降到 1——同樣的資料量，成本差在「來回幾趟」。</figcaption>
</figure>

還有一個細節我很喜歡。

這種一直在跑的迴圈會把主執行緒佔滿，畫面就會卡。一般人會用 `setTimeout(0)` 讓出控制權，但 `setTimeout` 有最小 4 毫秒的 clamping，讓一次就白白浪費 4 毫秒。它改用 [`MessageChannel`](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel) 當 macrotask yield，`postMessage` 一發一收就換到下一個 task，沒有那 4 毫秒。

這是老前端的偏方，但現在有更正規的做法了。web.dev 的 [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) 把各種讓出控制權的手法整理得很清楚，包含新的 `scheduler.yield()`。

### 音訊切割：把工作丟到音訊執行緒

第三個引擎最短，但概念最值得初階工程師學起來。

瀏覽器的 JS 預設全部擠在主執行緒上。你的 React 在跑、使用者在捲動、順便還要切音檔——主執行緒一卡，畫面掉幀，聲音也會爆音。

[AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet) 就是為了這件事存在的。它讓你把一小段處理程式碼丟到**音訊執行緒**上跑，那條執行緒每 128 個 frame 就準時呼叫你一次，完全不管主執行緒在忙什麼。

它自己寫了一個 AudioWorklet processor，然後用 Blob URL 動態 [`addModule()`](https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule) 注入——不用另外開一支實體檔案，字串直接變成模組。

<figure>
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="fig-vc95-worklet-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-vc95-worklet-title">主執行緒被長任務卡住，音訊執行緒上的 AudioWorklet 仍然準時執行</title>
    <text x="16" y="32" font-size="14" fill="var(--color-text)">主執行緒（UI／React）</text>
    <rect x="16" y="40" width="688" height="56" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5" />
    <g fill="var(--color-primary)" opacity="0.75">
      <rect x="28" y="52" width="110" height="32" rx="4" />
      <rect x="402" y="52" width="80" height="32" rx="4" />
      <rect x="494" y="52" width="60" height="32" rx="4" />
      <rect x="566" y="52" width="126" height="32" rx="4" />
    </g>
    <rect x="150" y="52" width="240" height="32" rx="4" fill="var(--color-accent)" opacity="0.85" />
    <text x="114" y="114" font-size="12" fill="var(--color-muted)">中間那塊長任務一卡住，UI 就掉幀</text>
    <text x="16" y="148" font-size="14" fill="var(--color-text)">音訊執行緒（AudioWorklet）</text>
    <rect x="16" y="156" width="688" height="56" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5" />
    <g fill="var(--color-primary)">
      <rect x="28" y="168" width="36" height="32" rx="4" /><rect x="76" y="168" width="36" height="32" rx="4" />
      <rect x="124" y="168" width="36" height="32" rx="4" /><rect x="172" y="168" width="36" height="32" rx="4" />
      <rect x="220" y="168" width="36" height="32" rx="4" /><rect x="268" y="168" width="36" height="32" rx="4" />
      <rect x="316" y="168" width="36" height="32" rx="4" /><rect x="364" y="168" width="36" height="32" rx="4" />
      <rect x="412" y="168" width="36" height="32" rx="4" /><rect x="460" y="168" width="36" height="32" rx="4" />
      <rect x="508" y="168" width="36" height="32" rx="4" /><rect x="556" y="168" width="36" height="32" rx="4" />
      <rect x="604" y="168" width="36" height="32" rx="4" /><rect x="652" y="168" width="36" height="32" rx="4" />
    </g>
    <text x="28" y="234" font-size="12" fill="var(--color-muted)">每 128 個 frame 準時被呼叫一次，主執行緒再忙也影響不到它</text>
  </svg>
  <figcaption>上面那條時而擁擠時而空白的是主執行緒，下面那排整齊的方塊是音訊執行緒。同一份工作放錯執行緒，結果差的不是效能數字，是使用者聽不聽得到爆音。</figcaption>
</figure>

Chrome 團隊的 [Audio Worklet is now available by default](https://developer.chrome.com/blog/audio-worklet) 那篇是我看過講得最白話的，想入門就從那篇開始。

到處都是成本模型、能力探測、斷言檢查、多層 fallback。裝置還會分級——用 `hardwareConcurrency` 跟 `deviceMemory` 分成 strong／ok／weak，ETA 係數各給 0.8／1.5／3。

說白了，這種東西不是「叫 AI 弄一弄」弄得出來的。這是有人很清楚自己要什麼，然後用 AI 把它敲出來。這叫 Domain Knowledge，作者對這個領域熟到不行。

順帶一提，前端沒有任何一個自己寫的 `dangerouslySetInnerHTML` 或 `innerHTML=`，掃到的 12 個全部是 React 內部的，沒有可利用的 XSS sink。這點意外做得蠻結實。

後端能看到的有限，但也很有趣。24 個 `/api/*` 端點，每支一個 handler，內部用 `?op=` 分流，不帶 op 就回 `404 unknown op`。授權邊界一致：匿名打過去全部 `401 請先登入`，拿合法但非管理員的 token 打 `/api/admin` 是 `403 沒有管理權限`。權限分級是真的落在後端，不是靠前端不顯示按鈕。

錯誤訊息克制到不行，沒有 stack trace、沒有框架版本、沒有 DB 錯誤、沒有內部路徑。外部 host 只有 6 個：Google 登入、藍新金流、gtag、Google Fonts、YouTube。沒有 Sentry、沒有 LogRocket、沒有一堆第三方追蹤。

蠻乾淨的⋯⋯？

——

## 但這個站沒有架構，這是暴力

好，說好用前端工程師的立場看，我當然要講講另一半。

整個站是「手刻靜態 HTML」硬接上「一顆 1.1 MB 的 React SPA」。就是這麼簡單。

行銷頁零框架、inline CSS、inline JS，全部寫死在 HTML 裡。`/studio` 則是一個 SPA 大禮包。兩邊為了共用一張價格表，寫了一個 Web Component，然後同一份 code 打包兩次，一份給靜態頁，一份內嵌進去給 SPA。

<figure>
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="fig-vc95-arch-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-vc95-arch-title">手刻靜態行銷頁與 1.1 MB SPA 兩套世界，中間只共用一個價格表元件</title>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="16" y="40" width="252" height="150" rx="10" />
      <rect x="452" y="25" width="252" height="180" rx="10" />
      <rect x="300" y="95" width="120" height="56" rx="8" />
    </g>
    <g fill="var(--color-text)" font-size="15" text-anchor="middle">
      <text x="142" y="72">8 個手刻靜態行銷頁</text>
      <text x="578" y="57">/studio：1.1 MB SPA</text>
    </g>
    <g fill="var(--color-muted)" font-size="13" text-anchor="middle">
      <text x="142" y="102">零框架</text>
      <text x="142" y="130">inline CSS + inline JS</text>
      <text x="142" y="158">meta 與 JSON-LD 手寫</text>
      <text x="578" y="87">手刻 Router</text>
      <text x="578" y="112">3 個手寫 Store</text>
      <text x="578" y="137">3 個自製引擎</text>
      <text x="578" y="162">全手刻 UI 元件</text>
      <text x="578" y="190">全部塞在同一顆檔案</text>
    </g>
    <g fill="var(--color-accent)" font-size="13" text-anchor="middle">
      <text x="360" y="120">價格表</text>
      <text x="360" y="140">Web Component</text>
    </g>
    <g stroke="var(--color-accent)" stroke-width="2" fill="none" marker-end="url(#fig-vc95-arrow)">
      <path d="M296 123 H276" />
      <path d="M424 123 H448" />
    </g>
    <defs>
      <marker id="fig-vc95-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-accent)" />
      </marker>
    </defs>
    <text x="360" y="228" font-size="13" fill="var(--color-muted)" text-anchor="middle">同一份 code，打包兩次</text>
  </svg>
  <figcaption>左右是兩個世界，中間唯一的共用只有一張價格表——而且是同一份 code 打包兩次。這不是模組化，是把重複做得比較整齊。</figcaption>
</figure>

聰明嗎？聰明。

但這是「解決方案」還是「繞過問題」？

沒有 Router Library，所以自己刻。沒有 State Manager，所以自己刻。沒有 UI Library，所以眼睛看到的 UI 全部自己刻。

每一個都刻得很好。

但刻的是輪子，而且是特大號的輪子。Edge Case 其實覆蓋不全，認真去抓一定抓得到問題。UI 元件的成熟度是時間淬煉出來的，不是 AI 小抄一下就能補足。

一顆 1.1 MB 的大禮包，三個自製引擎、一個手刻 Router、三個手刻 Store，全部塞在同一顆檔案裡。沒有模組化、沒有分層、沒有切分的規劃。

它能動。它動得很好。但它真的就是一整塊。

——

## `body { min-width: 1024px }`，手機直接放棄

這一點我原本以為是我誤會。

直到我在 `app.css` 裡看到這一行：

```css
body {
  min-width: 1024px;
}
```

`<meta name="viewport" content="width=device-width">` 是有寫的。

然後 body 給了一個 1024px 的硬地板。

意思是任何小於 1024px 的視窗，整頁橫向捲，直接放棄手機。

再多拉扯一下還可以找到噴掉的版面，原因也很單純：Layout 規劃跟元件設計本身有問題，最基本的 Flex 那些要處理的小東西未必有處理好。當然我也沒什麼資格說，這些東西連人類前端也常常沒好好處理就是了，[RWD 從來就不是靠腦補](/posts/frontend/rwd-is-not-mind-reading/)。

——

## 全押新潮 API，但你的終端不一定買單

`VideoDecoder`、`VideoEncoder`、`AudioEncoder`、`AudioWorklet`、`OffscreenCanvas`、OPFS、`showOpenFilePicker`、`Intl.Segmenter`、Web Components、CSS Houdini 的 `CSS.registerProperty`、`animation-timeline: view()`⋯⋯

每一個我都很喜歡。

但你把整個產品壓在上面，就要面對現實。

程式碼自己就承認了：

```js
if (/^((?!chrome|crios|android).)*safari/i.test(ua)) useOpfs = false;
```

Safari 直接 UA sniffing 踢掉，不給用 OPFS。

旁邊明明就有一整套 `isConfigSupported()` 的能力偵測機制，這裡卻用了最原始的 User Agent 判斷。意思是哪天 Safari 修好了，這個站也不會自動受惠，因為它根本沒在問。

`showOpenFilePicker` 是 Chromium 限定，Firefox 跟 Safari 都沒有。所以才會有那句「用 Chrome 或 Edge 開同一個專案輸出」。說白了就是不考慮 polyfill，我就是 Chromium Only，我就是放棄那些不用 Chromium 的所有客戶。

還有一顆 31 MB 的 ffmpeg.wasm。在能跑的機器上，它是神。在不能跑的機器上，它下載 31 MB 然後慢慢磨。

它的能力檢查其實做得很完整（WebAssembly、Worker、AudioContext、`fetch` + ReadableStream 都是必要，codec 探測還加 6 秒 race timeout），這點很專業。

但最後的結果，往往就是「你這台電腦我跑不動喔～」。

更別提那瘋狂的字體加載，光是滑過去就狂向 Google 抓字體，流量直接爆炸。

——

## 桌子擺好、椅子排好，然後沒有菜

它主打支援很多語言的字幕辨識，這是真的。但那是辨識模型的能力，跟前端一點關係都沒有。

多語系是一個天坑，我[接過 28 種語系的專案](/posts/engineering/twenty-eight-locales/)，非常多細節可以講。

沒有語系檔、沒有翻譯層、沒有 key、沒有 fallback locale。全部寫死。1,534 條硬寫字串散在各處。

最有趣的是 CSS 裡有這個：

```css
:root:lang(en), :root:lang(de), :root:lang(fr),
:root:lang(es), :root:lang(pt), :root:lang(id) {
  --fs-scale: .94;
  --lh-scale: .9;
}
```

它連英文、德文、法文、西文、葡文、印尼文的字級跟行高縮放都調好了，排版準備好了。

但沒有任何一個字會變成那些語言。

這就很像⋯⋯桌子擺好、椅子排好、餐具都上了，然後沒有菜。

一個支援 87 種語言辨識、能匯出 FCPXML 的產品，只打算做台灣市場，死釘釘的。

——

## 前面省 80 MB，後面全部吐回記憶體

它主打「影片留在你的電腦」。留是真的留了，但檔案的生命週期呢？

OPFS 裡有 `subtitle-extract.m4a`、`scenecut/`。IndexedDB 開了四個：`whatsub-fs-v2`、`whatsub-fonts-v1`、`audiocache`、`draftstore`。

然後我去找清除機制。

`deleteDatabase` 0 次。`evict` 0 次。`cleanup` 0 次。`removeEntry` 5 次，零星的，不是策略。

沒有 TTL、沒有 LRU、沒有容量上限驅逐，登出也不清。

意思是共用電腦的話，下一個人打開 DevTools，就能看到前一個人的草稿跟音檔。

這直接打到「影片留在你的電腦」這個賣點的臉上。「留在我的電腦」，然後「永遠留著」——這是隱私還是負債？

大檔更直接。它的錯誤訊息自己列出了天花板：超過 2 GB 的聲音檔不行，超過 8 小時不行，成品太大「超過瀏覽器記憶體能組裝的上限」，畫面太大「超出這台電腦能處理的範圍」。

最後兩句才是重點。輸出的成品，要在瀏覽器記憶體裡組裝。

<figure>
  <svg viewBox="0 0 720 200" role="img" aria-labelledby="fig-vc95-mem-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-vc95-mem-title">抽音只讀取影片的一小段位元組，輸出卻要把整包成品放進記憶體</title>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="110" y="40" width="540" height="32" rx="6" />
      <rect x="110" y="110" width="540" height="32" rx="6" />
    </g>
    <rect x="110" y="40" width="46" height="32" rx="6" fill="var(--color-primary)" />
    <rect x="110" y="110" width="540" height="32" rx="6" fill="var(--color-accent)" opacity="0.85" />
    <g fill="var(--color-text)" font-size="15">
      <text x="16" y="62">抽音</text>
      <text x="16" y="132">輸出</text>
    </g>
    <g fill="var(--color-muted)" font-size="13">
      <text x="110" y="94">10 GB 影片，實際只讀約 80 MB</text>
      <text x="110" y="164">成品整包在記憶體裡組裝，直接撞上天花板</text>
    </g>
    <line x1="600" y1="24" x2="600" y2="152" stroke="var(--color-muted)" stroke-width="1.5" stroke-dasharray="5 4" />
    <text x="600" y="16" font-size="12" fill="var(--color-muted)" text-anchor="middle">記憶體天花板</text>
  </svg>
  <figcaption>抽音那端聰明到只讀 80 MB，輸出那端卻要把整包成品塞進記憶體——前面省下來的，後面全部吐回去。</figcaption>
</figure>

一個做影片工具的產品，處理不了大的影片檔。影音工作者的毛片隨隨便便都是好幾個 G，完全沒辦法處理。

這不是效能問題，這是天花板。

——

## 沒有架構規劃，未來只能繼續靠 AI

前面幾點其實都指向這一件事。

沒有模組邊界、沒有分層、沒有語系層、沒有響應式策略、沒有清理策略。它的擴充方式就是「再繼續刻下去」，新功能繼續往裡面塞，反正 AI 現場讀現場改。

現在能運作，是因為「寫的人記得所有事情」。因為這是一個一人專案。

那如果哪天要找工程師維護？

他要接手的是：一顆超級 SPA、1,534 條散在各處的硬寫字串、三個沒有文件的自製 parser、一個手刻 Router、三個手寫 store，還有一個放棄手機的 1024px 無 RWD 架構。

這種東西，人接不了。

只有 AI 接得動——因為 AI 可以一次讀完整份程式碼，不會累，也不會問「這段為什麼要這樣寫」。問題是，你就再也離不開 AI 了。也很難快速增長，更不可能協作配合。

UI Library 手刻，就不要講 Design System 了，它甚至無法規範自己的視覺標準。做到哪、刻到哪，沒有治理跟統一。更別提哪天要上 Dark Mode 的成本，UI 設計師大概只會說「你可以請 AI 調整就好」。

後端也不用說。宣傳影片當下已經 20 萬瀏覽量，轉化率算 1% 就好，2000 人跑去註冊然後上傳？這種程度的流量可以直接搞垮沒有擴張設計的網站。不用故意攻擊，光粉絲進去逛街都堪稱大型 DDoS。

——

## Vibe Coding 缺的那 5 分，剛好全是不好玩的東西

我不是要酸這個站。

相反，我覺得它很了不起。一個人（或極小團隊）用 Vibe Coding 做到這個程度，我看到的是可能性，不是笑話。從商業面到領域知識，從使用者體驗到打磨，說是一個人能做的 95 分不誇張。

但缺的那 5 分，剛好全部是「不好玩但重要」的東西。

工程化、文件化、資訊安全、效能優化⋯⋯

AI 很擅長幫你做爽的那些，但這些看不到商業價值的無聊東西，很理所當然被拋棄。

因為你會去要。你會說「幫我做一個能偵測分鏡的東西」，然後它就給你一個好用、舒服又漂亮的東西。

但你不會半夜三點跳起來說「幫我規劃一下未來三年的模組邊界」，也不會說「幫我檢查這網站資訊安全有沒有遺漏」。

那些事情，要有人「記得要做」才會發生。這也是我一直說[解決方案比寫 code 重要](/posts/engineering/solutions-matter-more-than-code/)的原因——AI 讓「做出來」變得非常便宜，但「做得扎實」還是一樣昂貴。

如果你是個人小創作者，我誠摯推薦你去訂閱使用。它懂你的痛、懂你需要什麼，讓你輕鬆享受剪片最快樂的部分，解決最痛苦的上字幕。

但你說要長期訂閱半年一年？甚至給專業創作者用？我覺得還是要多評估一下，不要一頭熱就訂一年下去。

抱歉，褒貶我各敲五十大板，了解的都知道我講話就是這麼直。
