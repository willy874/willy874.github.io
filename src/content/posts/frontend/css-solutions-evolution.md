---
title: "都用 Tailwind 就好了，寫什麼 CSS？十年演進都在解同一題"
description: "從全域 CSS、預處理器、BEM 到 CSS Modules、CSS-in-JS、Atomic CSS 與 Zero Runtime，每一代方案都在解作用域、複用性、可維護性這三題。這篇講每一代解掉什麼、留下什麼代價，以及不同專案型態該怎麼選。"
publishDate: 2026-08-18T23:50:00+08:00
category: "前端技術"
tags:
  - "前端"
  - "CSS"
  - "工程實務"
draft: false
lang: zh-Hant
---
「現在誰還在寫 CSS 檔案啊？」

我真的聽過這句話。而且不只一次。

現在開新專案，起手式就是 `npm create vite` 一波，Tailwind 裝好，然後從此不再思考。

「大家都用啊」

「這是現在的標準吧」

「寫 CSS 都過時了」

但你問他為什麼用 Tailwind，得到的通常是「不知道」，不然就是一些似是而非的答案。

新的不等於好的，舊的也不等於爛的。每個方案都是在解決當下那個時代最痛的問題，你不知道它痛在哪，就不會知道你手上這個工具到底幫你擋掉了什麼、又幫你製造了什麼。

這件事我在[技術選型是要找合適的](/posts/engineering/choose-the-fitting-tech/)講過一次——技術選型是「優劣評估」，不是「高低比較」。

——

## 十幾年的演進，其實只有三件事

說白了，這十幾年來 CSS 方案的演進就三件事：

作用域、複用性、可維護性。

為什麼是這三件事？因為只有它們會隨著專案變大、人變多、時間拉長而越來越痛，其他的都是附加價值，我從來不把「方便」當成優先因素。

這條路走起來比較像是一直在搬家。每搬一次，舊房子的漏水補好了，新房子又冒出新的裂縫——然後下一代方案再來補這個裂縫。

<figure>
  <svg viewBox="0 0 360 196" role="img" aria-labelledby="fig-cse-title" xmlns="http://www.w3.org/2000/svg" style="max-width:460px;margin-inline:auto">
    <title id="fig-cse-title">作用域、複用性、可維護性三條線各自在哪一代被解掉</title>
    <defs>
      <marker id="fig-cse-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-border)" />
      </marker>
    </defs>
    <g stroke="var(--color-border)" stroke-width="1.5" fill="none" marker-end="url(#fig-cse-arrow)">
      <path d="M96 44 H350" />
      <path d="M96 108 H350" />
      <path d="M96 150 H350" stroke-dasharray="5 5" />
    </g>
    <g fill="var(--color-text)" font-size="13" text-anchor="end">
      <text x="84" y="48">作用域</text>
      <text x="84" y="112">複用性</text>
      <text x="84" y="154">可維護性</text>
    </g>
    <g fill="var(--color-muted)" font-size="12" text-anchor="middle">
      <text x="126" y="26">全域 CSS</text>
      <text x="216" y="26">BEM</text>
      <text x="150" y="90">預處理器</text>
      <text x="240" y="90">CSS-in-JS</text>
    </g>
    <g fill="var(--color-text)" font-size="12" text-anchor="middle">
      <text x="312" y="26">CSS Modules</text>
      <text x="316" y="90">Atomic CSS</text>
    </g>
    <g fill="var(--color-bg)" stroke="var(--color-muted)" stroke-width="2">
      <circle cx="126" cy="44" r="5" />
      <circle cx="216" cy="44" r="5" />
    </g>
    <g fill="var(--color-primary)">
      <circle cx="312" cy="44" r="5" />
      <circle cx="150" cy="108" r="5" />
      <circle cx="240" cy="108" r="5" />
      <circle cx="316" cy="108" r="5" />
    </g>
    <text x="223" y="176" font-size="12" fill="var(--color-muted)" text-anchor="middle">每一代換一種形式，沒有一次真的解完</text>
  </svg>
  <figcaption>實心是被工具真的解掉的，空心是只能靠紀律撐著。作用域一路到 CSS Modules 才交給編譯期，複用性從預處理器就開始補、到 Atomic CSS 補得最漂亮，而可維護性從來沒有哪一代一次解完——它只是每一代換一種形式重新出現。</figcaption>
</figure>

——

## 全域 CSS：簡單到不行，也髒到不行

最早期就是一支 `style.css`，寫到爆。

好處是簡單到不行，沒有 build，打開就能改，瀏覽器直接吃。到今天做小活動頁我還是這樣寫，快得很。

壞處也很直接：全域污染。你在 A 頁面改個 `.title`，B 頁面就炸了。權重打架就開始 `!important` 疊上去，最後變成沒人敢刪的一坨。

我真的看過那種三千行、註解寫「不要動這段」的 CSS 檔。

你敢刪嗎？我不敢⋯⋯

——

## 預處理器：讓你寫得舒服，但沒讓你變安全

Sass、Less 進來，變數、巢狀、mixin 一次補齊，最早的 Design Token 就是在這個時候誕生的。

那時候真的覺得爽，終於可以寫 `$primary-color`，終於不用一直重複打選擇器。函式、迴圈、`@extend` 都有，複用問題算是解掉一半。

那作用域呢？

一樣沒解決。巢狀寫太深，編譯出來就是 `.a .b .c .d .e`，權重高到後面誰都蓋不掉。而且多了編譯步驟，改個變數要等重新編譯，開發體驗其實有變差的時候。

它讓你寫得更舒服，但沒讓你的 CSS 變得更安全。

這也是為什麼我在[關於 SASS/SCSS](/posts/frontend/sass-in-decline/) 裡會說它的使用率一路往下掉——它解的那一半，後面的工具解得更乾淨。

——

## 命名方法論：沒有工具強制的規範，都會被時間打敗

BEM、OOCSS、SMACSS，用「約定」來換秩序。

`.card__title--active` 這種寫法，一眼就知道誰是誰、層級在哪，不用工具、不用 build，純靠紀律就能做到弱作用域。

那為什麼一堆人說 BEM 難用？

我想說的是，很多人根本沒在寫 BEM。

我看過太多這種：

```scss
.card {
  &__list {
    &__item {
      &__sub {
        &__text { }
      }
    }
  }
}
```

編譯出來是 `.card__list__item__sub__text`。

Block、Element、Modifier，Element 只有一層，這是 BEM 最基本的規則。你把 Sass 的巢狀能力拿來當資料夾用，一路 `&__` 疊下去，疊出一個沒人看得懂的名字，然後回頭說「BEM 好難用喔」。

不是 BEM 難用，是你在用 Sass 的語法糖假裝自己在寫 BEM。

這就是方法論最尷尬的地方：它只是約定。新人進來不懂規則，同事趕上線隨手加個 `.title2`，一個月後就走鐘了。

沒有工具強制的規範，最後都會被時間打敗。

——

## CSS Modules：我覺得性價比最高的一步

編譯期把 class 名 hash 掉，`.title` 變成 `.title_x8f2k`。

作用域問題直接被工具解決，你還是在寫純 CSS，學習成本幾乎是零，也沒有 runtime 成本。

補充一個很多人沒意識到的事：Vue SFC 的 `<style scoped>` 其實就是同一套思路的延伸。

它不是 hash class 名，而是編譯期幫每個元素加上 `data-v-xxxxxx` 屬性，選擇器再自動補上對應的 attribute selector。做法不同，但目的一模一樣——編譯期產生唯一識別，讓樣式關在元件裡。

所以你如果是 Vue 的人，其實你早就在用 CSS Modules 的概念了，只是它幫你包得太順，順到你不覺得那是一個「方案」。

缺點也一樣。動態樣式很尷尬，要根據 props 換顏色？只能先定義好一堆 class 再用 JS 拼字串。跨元件共用、傳 class 進去覆蓋也很不直覺（Vue 這邊就得靠 `:deep()` 打洞）。

它解了作用域，但沒解「樣式跟狀態要連動」這件事。

——

## CSS-in-JS：樣式跟元件同生共死，代價是 runtime

styled-components、emotion 這時代，直接把樣式塞進 JS 裡。

真正的元件化，樣式跟元件同生共死，刪元件就等於刪樣式，不會有死 CSS 留下來。動態樣式更是它的主場，props 直接進 template，主題切換、條件樣式都超順。

那為什麼後來大家又跑掉了？

代價是 runtime。每次 render 都要算樣式、插 style tag，量一大就吃效能。SSR 要處理 hydration、要抽 critical CSS，設定一堆。加上 bundle size 也不是零。

那幾年大家嘴上說爽，實際 profiling 一開就知道痛在哪。

也許有人會說 styled-components 停更就代表這條路死了。我不這樣看，這件事我在 [CSS In JS](/posts/engineering/css-in-js-is-not-dead/) 講過——它只是退回它原本就該待的位置而已。

——

## Atomic CSS：你的 Tailwind 跟我的 Tailwind 不是同一個東西

從 windicss 開始，到現在 tailwind 幾乎壟斷市場了。

每個 class 一個屬性，樣式不會膨脹，掃描原始碼只產出你用到的，檔案小、複用高、零 runtime。設計系統的約束直接寫進 config，團隊內的一致性也好維持。

但 HTML 會變得非常之長，那種一行三十個 class 的畫面，第一次看都會皺眉。它也需要 build 才能掃描、動態拆分 CSS chunk 很難做、CSS 變數架構隱晦。

還有一個更根本的問題，大家好像都不太提——

因為 config 太自由，你的 Tailwind 跟我的 Tailwind，很可能根本不是同一個東西。

你的 `p-4` 是 16px，我的專案改過 spacing scale，`p-4` 可能是 20px。你的 `text-primary` 是藍的，我的是黑的。你習慣 `rem`，我全改 `px`。再加上一堆自訂的 plugin、任意值 `[13px]`、preset 疊 preset⋯⋯

大家都說「我會 Tailwind」，但走進一個新專案，你還是得先去翻 `tailwind.config`。所謂的通用語言，其實只通用了語法，沒通用語意。

做 UI Library 的時候特別有感——你的樣式要被別人的 Tailwind 掃到、別人的 config 又跟你完全不一樣，這件事本身就很彆扭，我在[關於我與前端無關緊要的分享 Day 49](/posts/daily/daily-49-tailwind-limits/) 抱怨過一次。

我不覺得它是唯一解，但它確實把「複用」這題解得最漂亮。

——

## Zero Runtime：不是新發明，是把老方案縫在一起

vanilla-extract、Panda CSS、StyleX 這幾個，想兩全其美。

用 TypeScript 寫樣式，有型別、有補全，編譯期就把 CSS 抽出來變成靜態檔案，runtime 成本歸零。你寫的時候感覺像 CSS-in-JS，跑起來卻是純 CSS。

但講白一點，它其實沒有發明什麼新東西。

Zero Runtime 不過就是靜態打包後的結果——CSS Modules 的「編譯期產生唯一 class」加上 Atomic CSS 的「屬性層級複用」，兩個老方案組起來的新包裝。

StyleX 特別明顯，Meta 拿它撐 Facebook 和 Instagram 那種量級，編譯出來就是一堆原子 class，再用一套明確的合併規則決定誰蓋誰——直接把 CSS 權重這件事從執行期挪到編譯期解掉。

所以與其說它是「下一代」，不如說它是把前面幾代的優點縫在一起。

代價是生態還小，踩到坑常常沒人回答。編譯設定也複雜，跟框架、跟 bundler 綁得緊，換一次就要重弄。真正的動態值還是有限制，該用 CSS 變數的地方一樣得用。

它很美，但還沒到隨便丟給團隊就能跑的成熟度。

——

## 原生 CSS：現在瀏覽器自己都有了

經過時空演化，CSS 真的越來越好用。

CSS 變數、`@layer`、原生巢狀、`@container`、`:has()`、`@scope`，這幾年一口氣全進來了。

當年我們拿 Sass 解變數、拿 BEM 解權重、拿 Modules 解作用域、拿 media query 硬幹 RWD——現在瀏覽器自己都有了。

所以我最近的想法反而是往回走一點。

那還需不需要工具？需要，但能用原生解的，就別再多疊一層。

剩下的問題是⋯⋯客戶的瀏覽器還沒支援。

——

## 那到底該用哪個？

我自己的判斷大概是這樣。

做行銷頁、活動頁、一次性的東西，原生 CSS 或是 Tailwind 就好。這種東西活不過三個月，你上一套完整的 Design Token 只是在自嗨。

做後台、內部工具、要快的專案，Tailwind 真的無敵。不用命名、不用開檔案、改完就看到，這種開發速度沒什麼能打。反正 UI 沒那麼多客製，一致性又剛好是你要的。

做產品的主要應用、要長期維護、五個人以上的團隊，我會選 CSS Modules 或 Vue 的 scoped style。作用域交給工具，寫的是純 CSS，新人第一天就能上手，五年後回來看也還讀得懂。

做 UI Library、Design System、要給別人共用的東西，Zero Runtime、原生 CSS 加變數、SCSS 配合 CSS Modules，都非常合適。你不能假設使用者的環境跟你一樣，也不能逼別人裝你那套 build，樣式必須要能被覆蓋、能被 tree-shake、盡量不帶 runtime。像 antd 反其道而行，依然做得不錯，但最糟糕的莫過於拿 Tailwind 來做，根本難以維護。

主題會頻繁切換、樣式高度跟狀態綁定、微前端這類動態模組載入，那 CSS-in-JS 的 runtime 成本可能就是值得付的，runtime 反而是最好的應用策略。

沒有哪個方案是最好的，只有適不適合。

你的專案型態、團隊有幾個人、專案要活幾年、將來誰接手——這些才是真正該問的問題，而不是「大家都用什麼」。

每一代方案都在解上一代的痛，然後製造新的痛。

那你現在痛的是哪一個？
