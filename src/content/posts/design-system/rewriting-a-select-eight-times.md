---
title: "不就一個下拉選單，是能有多難？"
description: "一顆下拉選單，我手刻了八個版本才勉強能用，後面還排著十一版沒動。這篇講每一版壞在哪——Portal、鍵盤、ARIA、輸入法、手機、螢幕閱讀器，以及為什麼一個人重構跟一群人重構，難的完全不是同一件事。"
publishDate: 2026-08-21T09:30:00+08:00
category: "設計與設計系統"
tags:
  - "設計系統"
  - "前端"
  - "SideProject"
  - "工程實務"
draft: false
lang: zh-Hant
---

「不就一顆下拉選單，是能有多難？」

這句話我真的說過。

然後我就把它重寫了八次。

而且到現在還沒做完。

——

## 起點不是想造輪子，是一個搬不動的案子

先講清楚，起點不是「我想造輪子」。

公司有一套自己的 UI Library，那套東西已經改不動了。所以我們就想說，那不然遷移到主流的那幾套吧，Element Plus、Naive UI、Ant Design，隨便挑一套都好。

結果一對照就卡住了。

卡在哪？卡在 API 落差太大。

這裡我要特別強調一件事：不是那些現成的 Library 做得爛。它們都做得很好。是我們需求的方向，跟那些 Library 想像的使用方式，差太多了。

那硬要接呢？

硬要接的結果，就是包一層 adapter，再包一層 adapter，最後你把兩邊的壞處全部扛回來——現成 Library 的限制你要吃，自己那層轉接的複雜度你也要養。

那條路走不通。剩下的選項只有一個：自己手刻。

於是真正的問題，就從[要用哪一套 UI 框架](/posts/design-system/choosing-a-ui-framework/)，變成——要挑哪一顆底層來墊底，才撐得住這些需求？

而要回答這個問題，你得先知道一顆 Select 到底難在哪。

——

## 我造這顆輪子，是為了什麼

在開始之前我想先把目的講清楚，因為後面每一版的取捨，全部都是靠這幾句話撐著的。

搞懂一顆 Select 到底難在哪。不是聽別人說，是自己知道。

把那些「別人早就幫我處理掉的事」，自己踩一遍。你用現成元件庫的時候，有一大堆東西是免費的，免費到你根本不知道它存在。

還有，逼自己從「會用」走到「敢設計 API」。這兩件事差很遠。

那反過來，它不是為了什麼？

它不是為了取代 Element Plus、Naive UI 或 Ant Design。真的不是，等一下你就會看到我離那個距離有多遠。

它也不是為了證明現成元件庫做得不好。恰恰相反——這趟走完，我對它們的敬意是變多的。

造輪子的產出，從來就不只是那顆輪子。是「看懂別人的輪子」這件事。

——

## 那叫 AI 生一顆 Select 不就好了？

2026年了，你講這些幹嘛？

可以啊，真的可以。你現在打一句「幫我做一顆 Select」，它真的生得出來，而且跑起來看起來還會動。

所以問題根本不是「做不做得出來」。

問題是你接不接得住。

你得看得出來它缺什麼。鍵盤能不能用、ARIA 有沒有補、被 overflow 切到會怎樣、資料上萬筆會不會爆。這裡少一樣，就是使用者那邊的一個 bug，而且是那種「回報上來你還看不懂他在講什麼」的 bug。

你得判斷這些有沒有必要。不是每個專案都需要虛擬列表。你多做的每一層，之後都是要養的。AI 很樂意幫你多做十層，反正它不用養。

你還得知道怎麼測試。這個最麻煩——當你沒有驗收標準的時候，「看起來會動」就變成唯一的標準了。

這三件事，都不是 prompt 給得出來的。是自己踩過一遍才長出來的。

所以下面這八版，我不貼程式碼。反正 AI 都寫得出來，我只講每一版壞在哪。

——

## v1 到 v4：我把原生 select 免費送的東西全丟了

v1 的目標只有一句話：用最少的程式碼，換最穩的行為。

所以我就包一層原生的 `select`，行為跟無障礙直接白嫖，一行都不用寫。我做的事情就只是把介面補一補——`v-model` 雙向綁定、用一個 options 陣列餵資料、單一選項可以 disabled、size 三種、placeholder 拿一個 disabled 又 hidden 的 option 撐出來。

就這樣。

這一版是我八版裡面程式碼最少、而且最不會出事的一版。Tab 聚焦、方向鍵移動、打字跳項、Enter 選走、Esc 關掉，全部都有。

我一行都沒寫。

請記住這件事，因為接下來七版，我都在還這一版免費送我的東西。

那為什麼要換掉？

因為 v1 那個原生面板，我一點都動不了。設計師給我一張稿，我只能跟他說「這個不行」。而且各家瀏覽器長得都不一樣，你連截圖驗收都有困難。

所以 v2 我把 trigger 改成一個 div，面板改成 `ul` 加 `li`，原生的 select 退場。下拉的長相完全我說了算，跨平台終於一致。

看起來完全沒有退步對吧？外觀還變好看了。

但這一版同時埋了兩顆地雷。一顆 v3 爆，一顆 v4 爆。

**第一顆是 overflow。** v2 的面板是 `position: absolute`，貼著父層定位。聽起來很合理，問題是只要祖先裡面有任何一個人掛了 `overflow: hidden`、auto 或 scroll，超出容器的那截面板就會被切掉。

而 overflow 這種東西，在真實專案裡多如牛毛。卡片、對話框、表格、側邊欄，隨便一個都有。

結果就是：選項在那裡，但你點不到。

<figure>
  <svg viewBox="0 0 340 460" role="img" aria-labelledby="fig-select8-portal-title" xmlns="http://www.w3.org/2000/svg" style="max-width:420px;margin-inline:auto">
    <title id="fig-select8-portal-title">面板貼著父層定位會被 overflow hidden 切掉，Portal 到 body 之後就不會</title>
    <text x="170" y="18" font-size="13" fill="var(--color-text)" text-anchor="middle">v2：面板貼著父層</text>
    <rect x="30" y="30" width="280" height="110" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="42" y="48" font-size="11" fill="var(--color-muted)">卡片 overflow: hidden</text>
    <rect x="90" y="58" width="140" height="28" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="160" y="77" font-size="12" fill="var(--color-text)" text-anchor="middle">選擇縣市</text>
    <rect x="90" y="92" width="140" height="48" rx="6" fill="var(--color-bg)" stroke="var(--color-primary)" stroke-width="1.5" />
    <rect x="90" y="140" width="140" height="44" rx="6" fill="none" stroke="var(--color-muted)" stroke-width="1.5" stroke-dasharray="5 4" />
    <text x="170" y="206" font-size="12" fill="var(--color-accent)" text-anchor="middle">這一截被切掉，點不到</text>
    <text x="170" y="248" font-size="13" fill="var(--color-text)" text-anchor="middle">v3：Portal 到 body</text>
    <rect x="20" y="260" width="300" height="150" rx="10" fill="none" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="5 4" />
    <text x="32" y="278" font-size="11" fill="var(--color-muted)">body</text>
    <rect x="40" y="288" width="200" height="80" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="52" y="305" font-size="11" fill="var(--color-muted)">卡片</text>
    <rect x="70" y="312" width="140" height="28" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="140" y="331" font-size="12" fill="var(--color-text)" text-anchor="middle">選擇縣市</text>
    <rect x="70" y="346" width="140" height="58" rx="6" fill="var(--color-bg)" stroke="var(--color-primary)" stroke-width="2" />
    <text x="170" y="440" font-size="12" fill="var(--color-primary)" text-anchor="middle">浮在最上層，誰都切不到</text>
  </svg>
  <figcaption>使用者感受到的是「這個能用、那個不能用」，但真正的差別，只是那個面板的 DOM 節點掛在哪一層。</figcaption>
</figure>

怎麼爬出來？我做了一個 Portal 元件，其實就是 Teleport 薄薄包一層，預設送去 body。面板改由 Portal 送出去，定位改成 `position: fixed` 加上 trigger 的 viewport 座標。

但這裡就出現了那個很典型的東西——你解掉一個問題，就領到一個新的責任。面板既然浮在 body 上，你捲動頁面或改變視窗大小，它就會脫節。所以 v3 得監聽 scroll 跟 resize，即時把座標校正回來。

**第二顆雷比較痛，因為它是我自己弄丟的。**

回頭看一下 v1 免費送我什麼：Tab 聚焦、方向鍵移動、打字跳項、Enter 跟 Esc 開合，還有螢幕閱讀器讀得懂的語意。

然後 v2 我為了搶回外觀的主導權，把 select 換成 div，這些全丟了。

更糟的是，我當下根本沒發現。

因為我是用滑鼠測的。滑鼠測起來一切正常。

你有多久沒有拔掉滑鼠，用 Tab 走一次自己做的表單？我當時的答案是：從來沒有。

所以這筆債欠了兩版才還。v4 把鍵盤（方向鍵、Home、End、Enter、Esc、typeahead）、焦點（Tab 進得來、有 focus ring、關掉要收回來）、ARIA 語意（combobox 加 listbox 加 option）全部補回來。

真正的魔鬼細節在這兩行：鍵盤走的時候要自動跳過 disabled，不然你按方向鍵，高亮停在一個選不到的東西上面，那很怪；高亮跑出可視範圍的時候要自動 `scrollIntoView`，不然你按到第20項，畫面還停在第5項。

這兩件事，原生 select 都幫你做好了。你根本不會意識到它存在。

還有一個我沒想到的：高亮不能有兩套。v3 的高亮是 CSS 的 hover，v4 得改成一個 `activeIndex`，鍵盤跟滑鼠共用同一套。不然滑鼠停在 A、鍵盤走到 B，畫面上就兩個亮的，超級錯亂。

繞了一圈，我才把原生本來就有的可及性補回來。而且我補的一定沒有原生完整。

老實說，無障礙這件事最容易被跳過的原因不是「它很難」，是你自己用滑鼠測，永遠測不出來。

它壞掉的時候不會報錯，Console 一片乾淨。只有真的用鍵盤、用螢幕閱讀器的人會知道。

而那些人，通常不會出現在你的 bug 回報單裡。

——

## v5 到 v8：先拆開，後面三版才走得動

到 v4 為止，`Select.vue` 這一個檔案裡面塞了六件事：狀態機、定位、清單導覽、typeahead、選取、渲染。大概500行。

500行其實還好，真正的問題是我每次要改一件事，都得先在腦子裡把另外五件事排開。

所以 v5 我照兩條線下刀：一條是「大腦」跟「臉」，邏輯跟呈現分開；一條是「不會變的邏輯」跟「會變的內容」。邏輯搬進 composables，呈現搬進子元件，`Select.vue` 就只當那個協調的人，剩下大概100行。

判斷標準我是拆完之後才想清楚的：會各自變、能重用、自己帶著不簡單的狀態，中一個才拆。純呈現的葉節點，像那個小箭頭，就別拆了。

拆過頭跟不拆一樣痛，差別只在痛的地方不一樣。

v5 同時做了第二件事：面板會自己翻面。v3 跟 v4 一律往下開，所以只要你的 Select 靠近視窗底部，一展開就溢出去了。v5 會先量一下：下面還剩多少空間？不夠而且上面比較寬，那就往上翻，然後照剩下的空間把 `max-height` 夾住。

這兩件事其實是同一件事。

因為 flip 那段邏輯，就住在我剛剛拆出來的 `useFloatingPosition` 裡面。如果沒有先拆，這段定位算式就會變成 `Select.vue` 裡的第501到第560行。

然後 v6、v7、v8 都在領這次重構的紅利。

**v6 打字就過濾。** 長清單一定要能打字過濾，縣市、使用者、商品，只要超過二三十筆，你叫使用者用捲的，那就是折磨。中文情境還多一件事，得能打拼音才找得快——你要選「高雄」，很多人習慣先打 gx。

爽的地方在這裡：還記得 v5 我特地拆出一個 `SelectValue`，專門負責顯示值嗎？v6 我就是把那一塊換成搜尋 input。當時我只是覺得「這塊會變」，結果一版之後就真的變了。

而且我想講一個觀念：v5 打字是 typeahead 跳項，v6 打字是過濾清單。同一個動作，兩種語意。所以這不是「加功能」，是換了一種互動模型。這種時候用一個 `filterable` prop 切開，而不是硬要合成同一套行為，通常會活得比較久。

**v7 多選。** 原生的 `select multiple` 那個體驗，算了吧，要按住 Ctrl 才能複選，手滑一下全部選取消失。所以 `modelValue` 變成陣列，選取行為從「蓋掉」變成 toggle，而且面板不關——因為你要連續選，每選一個就關掉那很煩。

多選的差異幾乎只落在 `useSelect` 的選取邏輯裡。定位、清單導覽、過濾、typeahead，全部都不用動。

但我最想講的是這個小細節——多選加搜尋的時候，在空的搜尋框按 Backspace，會直接拔掉最後一個 chip。

這個行為沒有人會寫在需求裡。

但所有人都預期它要有，因為 Gmail 收件人就是這樣。

這種「沒人講但大家都預期」的東西，就是元件庫最花時間的部分。

**v8 遠端、無限滾動、虛擬列表。** v6 的搜尋只能過濾「已經在前端」的資料，但真實資料動不動就上千上萬筆，一萬個 `li` 光是掛上去就卡住了。所以虛擬列表開 `virtual`，5000筆只渲染大概15列；捲到底送一個 load-more 事件；開 `remote` 就不在本地過濾，把 query 直接送出一個 search 事件。

這裡有一個設計上的取捨我想特別講：這三塊我全部走事件，由外部控制。Select 自己不發請求、不管分頁、不知道你的 API 長什麼樣。

為什麼？

因為只要我在元件裡面決定「怎麼打 API」，我就等於決定了所有使用者的資料層長什麼樣。

而那件事，我沒有資格幫他們決定。

另外，加了遠端之後多出來的只有功能嗎？不只，是「狀態」。v7 只有「沒選項」跟「沒結果」兩種，v8 要再加上載入中、請先輸入、底部載入中。而狀態這種東西每多一種，你的 UI 就多一個要處理的分支。

——

## 八版之間唯一沒變的，是那一行 import

<figure>
  <svg viewBox="0 0 340 404" role="img" aria-labelledby="fig-select8-ver-title" xmlns="http://www.w3.org/2000/svg" style="max-width:420px;margin-inline:auto">
    <title id="fig-select8-ver-title">Select 八個版本各自解掉什麼問題，又順便欠下什麼債</title>
    <rect x="6" y="8" width="328" height="46" rx="6" fill="var(--color-surface)" />
    <rect x="6" y="106" width="328" height="46" rx="6" fill="var(--color-surface)" />
    <rect x="6" y="204" width="328" height="46" rx="6" fill="var(--color-surface)" />
    <rect x="6" y="302" width="328" height="46" rx="6" fill="var(--color-surface)" />
    <rect x="14" y="18" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="35" font-size="13" fill="var(--color-primary)" text-anchor="middle">v1</text>
    <rect x="14" y="67" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="84" font-size="13" fill="var(--color-primary)" text-anchor="middle">v2</text>
    <rect x="14" y="116" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="133" font-size="13" fill="var(--color-primary)" text-anchor="middle">v3</text>
    <rect x="14" y="165" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="182" font-size="13" fill="var(--color-primary)" text-anchor="middle">v4</text>
    <rect x="14" y="214" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="231" font-size="13" fill="var(--color-primary)" text-anchor="middle">v5</text>
    <rect x="14" y="263" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="280" font-size="13" fill="var(--color-primary)" text-anchor="middle">v6</text>
    <rect x="14" y="312" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="329" font-size="13" fill="var(--color-primary)" text-anchor="middle">v7</text>
    <rect x="14" y="361" width="40" height="24" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" stroke-width="1.5" />
    <text x="34" y="378" font-size="13" fill="var(--color-primary)" text-anchor="middle">v8</text>
    <text x="66" y="29" font-size="13" fill="var(--color-text)">包一層原生 select，行為全白嫖</text>
    <text x="66" y="78" font-size="13" fill="var(--color-text)">改成 div，長相終於我說了算</text>
    <text x="66" y="127" font-size="13" fill="var(--color-text)">Portal 到 body，不再被切掉</text>
    <text x="66" y="176" font-size="13" fill="var(--color-text)">鍵盤、焦點、ARIA 補回來</text>
    <text x="66" y="225" font-size="13" fill="var(--color-text)">拆成 composables，面板會翻面</text>
    <text x="66" y="274" font-size="13" fill="var(--color-text)">打字就過濾，支援拼音</text>
    <text x="66" y="323" font-size="13" fill="var(--color-text)">多選、chips、Backspace 拔標籤</text>
    <text x="66" y="372" font-size="13" fill="var(--color-text)">遠端搜尋、無限滾動、虛擬列表</text>
    <text x="66" y="47" font-size="12" fill="var(--color-muted)">↳ 外觀完全動不了</text>
    <text x="66" y="96" font-size="12" fill="var(--color-muted)">↳ 埋了 overflow 跟鍵盤兩顆雷</text>
    <text x="66" y="145" font-size="12" fill="var(--color-muted)">↳ 捲動與縮放要自己追座標</text>
    <text x="66" y="194" font-size="12" fill="var(--color-muted)">↳ 單一檔案膨脹到500行</text>
    <text x="66" y="243" font-size="12" fill="var(--color-muted)">↳ 這一版是在還債，沒欠新的</text>
    <text x="66" y="292" font-size="12" fill="var(--color-muted)">↳ 拼音字典 1MB，所有人一起揹</text>
    <text x="66" y="341" font-size="12" fill="var(--color-muted)">↳ 狀態組合開始變多</text>
    <text x="66" y="390" font-size="12" fill="var(--color-muted)">↳ 載入中／空／錯誤，分支爆增</text>
  </svg>
  <figcaption>上排是這一版解掉的問題，下排是它順手欠下的債。八個版本裡沒有一版是純粹「加功能」——每一版都在還前一版留下的帳。</figcaption>
</figure>

回頭看一次，然後是那一行小字：

每一版對前一版都相容。import 從 `@vN` 改成 `@vN+1`，就這樣而已。

八版裡面，我把底層從原生 select 換成 div、把面板搬去 body、把單一檔案拆成九個。內部幾乎沒有一塊是原封不動的。

但對使用者來說，八版之間換版本，就是改一行 import。

這件事不是自然發生的，是我每一版都刻意守住的規矩。

難在哪？難在每次想抄近路的時候忍住——反正只有我在用，改一下 prop 名稱又不會怎樣。

會怎樣。那就是破壞性變更，只是暫時沒人來跟你收帳而已。

內部怎麼長，是我的自由；外部看到什麼，是我的承諾。

——

## 「能用」跟「能給別人用」，中間隔著出口設計

v8 跑得起來，是因為它跑在我自己的 dev server 裡。我手上有原始碼，還有我的建置環境。

使用者只拿得到產物。

所以差別在哪？

不是「多打一個 build 指令」，是整包責任移到我這邊來了。編譯原本是他家的事，現在變成我的事。樣式沒有模組邊界，它就是會跟他的專案攪在一起。我裝的每一個東西，最後都變成他的負擔。

依賴這一刀要最先砍，判斷標準我後來想出一句話：**這東西有沒有「身分」。**

只要同時存在兩份就會出事的，一律交給宿主提供。框架本身、狀態容器、任何有全域註冊表的東西，都算這一類。Vue 是最典型的，provide 跟 inject 靠的是模組層級的識別、響應式代理不互通、元件實例對不上。

這不是體積問題，是正確性問題。兩份 Vue 不會報錯給你看，它只會行為很詭異——inject 拿不到、watch 不觸發、明明你看程式碼就是對的，但它就是不動。

而且超難查。

純工具是另一種性質，它可以跟著走，但代價要自己算。這顆 Select 為了中文搜尋用了 pinyin-pro，它揹著一份拼音字典，安裝體積大概1MB，而且字典這種資料，tree-shaking 幾乎搖不掉。

所以現在的狀況是：一個「打拼音也能搜」的方便功能，讓所有人一起付這個成本。包含那個只想要一顆單選下拉、根本沒開 `filterable` 的人。

那做成可選依賴不就好了？可以啊，路其實有好幾條——開放讓使用者自己注入比對函式，或者拆成獨立入口都行。但真正要決定的問題是：預設要不要幫使用者做主。

然後是出口設計，這個我覺得是整段最重要的觀念。

出口設計不是「讓人 import 得到」，是「決定哪些東西以後不能亂改」。

沒開的路徑，使用者進不去。這條限制聽起來像是在限制別人，但其實它是在保護我，保護我以後還敢重構。

反過來也一樣，而且這句更重要：只要有人深入 import 到你的內部檔案，而且真的能用，那條路徑就變成事實上的公開 API。你以後改它，就是破壞性變更。就算你從來沒承諾過。

這顆 Select 實際上的切法是，v8 對外只開一個 Select 元件跟四個型別，六個 composables 全部關在裡面。

沒有標準答案。但要在發佈前決定。

不是等別人用了才決定——那時候就不是你決定了。

至於樣式，那是元件庫最難交出去的一塊，原因很簡單：JS 有模組邊界，CSS 沒有。這顆 Select 八個子元件全部 scoped，樣式不外洩，很好，但這也代表使用者的覆寫進不來，他只能靠權重硬壓。

scoped 是「防止外洩」，不是「提供客製化」。這兩件事很容易被混為一談，但使用者最後一定會想改樣式。一定會。

而且更麻煩的是，哪些東西一被覆寫，就變成 API。class 命名，只要有人拿去覆寫，它就跟 props 一樣是公開介面。DOM 巢狀結構也一樣，人家的選擇器就是照著它寫的，你把一層 div 拿掉，他的樣式就爛了。

也許有人會說，那把可以調的收斂成 CSS 變數不就好了？對，那確實是比較可控的做法——把它當成一個明確、有限、而且可以承諾的樣式介面。但這件事也得在發佈前決定，[設計一套 UI 元件庫](/posts/design-system/designing-a-ui-component-library/)裡講的那些取捨，最後全部會回到同一個問題：你到底承諾了什麼。

老實說，誠實版是這樣的：這顆 Select 對外入口只開到 v1，Vue 還掛在一般依賴、應該宣告成 peer，pinyin-pro 無條件跟著走，樣式沒有對外的 CSS 變數介面，沒有測試也沒有 CI。

而且，根本還沒真的發佈過。

把還沒做的講出來，比假裝做完有用得多。

——

## 所以路還有多長？我排完自己嚇一跳

八版只是把「一顆能用的下拉選單」做出來而已。

我後來把還沒做的東西排了一次，一樣照原本的規矩，一版只解一件當時最痛的事。

排完是從 v9 到 v19。

後面這一排，比前面八版加起來還多。

下面這些我一版都還沒動，所以請當成路線圖看，不是成果。

<figure>
  <svg viewBox="0 0 340 484" role="img" aria-labelledby="fig-select8-road-title" xmlns="http://www.w3.org/2000/svg" style="max-width:420px;margin-inline:auto">
    <title id="fig-select8-road-title">v9 到 v19 的路線圖，依主題分成四組，全部都還沒開始動</title>
    <text x="14" y="20" font-size="12" fill="var(--color-accent)">把「能用」補成「好用」</text>
    <rect x="6" y="30" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="49" font-size="12" fill="var(--color-muted)">v9</text>
    <text x="62" y="49" font-size="12" fill="var(--color-text)">選項開 slots、要能分組</text>
    <rect x="6" y="62" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="81" font-size="12" fill="var(--color-muted)">v10</text>
    <text x="62" y="81" font-size="12" fill="var(--color-text)">清空、全選、上限、拖曳排序</text>
    <rect x="6" y="94" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="113" font-size="12" fill="var(--color-muted)">v11</text>
    <text x="62" y="113" font-size="12" fill="var(--color-text)">重試、請求打架、id 回填</text>
    <rect x="6" y="126" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="145" font-size="12" fill="var(--color-muted)">v12</text>
    <text x="62" y="145" font-size="12" fill="var(--color-text)">name、FormData、required</text>
    <text x="14" y="180" font-size="12" fill="var(--color-accent)">我預設的那個使用者不存在</text>
    <rect x="6" y="190" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="209" font-size="12" fill="var(--color-muted)">v13</text>
    <text x="62" y="209" font-size="12" fill="var(--color-text)">輸入法組字中不能送出去查</text>
    <rect x="6" y="222" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="241" font-size="12" fill="var(--color-muted)">v14</text>
    <text x="62" y="241" font-size="12" fill="var(--color-text)">手機該換成 bottom sheet</text>
    <text x="14" y="276" font-size="12" fill="var(--color-accent)">同一份程式碼，長得不一樣</text>
    <rect x="6" y="286" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="305" font-size="12" fill="var(--color-muted)">v15</text>
    <text x="62" y="305" font-size="12" fill="var(--color-text)">Safari／Firefox 各有各的坑</text>
    <rect x="6" y="318" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="337" font-size="12" fill="var(--color-muted)">v16</text>
    <text x="62" y="337" font-size="12" fill="var(--color-text)">捲軸、字型、修飾鍵、報讀器</text>
    <rect x="6" y="350" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="369" font-size="12" fill="var(--color-muted)">v17</text>
    <text x="62" y="369" font-size="12" fill="var(--color-text)">深色、高對比、動效、RTL</text>
    <text x="14" y="404" font-size="12" fill="var(--color-accent)">交出去之前</text>
    <rect x="6" y="414" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="433" font-size="12" fill="var(--color-muted)">v18</text>
    <text x="62" y="433" font-size="12" fill="var(--color-text)">SSR：何時才能碰 DOM</text>
    <rect x="6" y="446" width="328" height="28" rx="6" fill="var(--color-surface)" />
    <text x="20" y="465" font-size="12" fill="var(--color-muted)">v19</text>
    <text x="62" y="465" font-size="12" fill="var(--color-text)">測試、CI，然後真的發佈</text>
  </svg>
  <figcaption>v9 到 v19 我一版都還沒動，所以這是路線圖，不是成果。中間那兩組——輸入法、手機、瀏覽器、作業系統、無障礙偏好——講的都是同一件事：我前面十二版預設的那個使用者，其實不存在。</figcaption>
</figure>

——

## v9 到 v12：把「能用」補成「好用」

**v9，選項長什麼樣不該由我決定。** v1 到 v8，一個 option 就是一行字。但真實需求要放 icon、頭像、次要說明、價格、標籤。

那全部開成 prop 不就好了？`iconField`、`avatarField`、`descField` 一個一個加，加到最後那個 API 會醜到我自己都不想看。

所以要開 slots，把選項的長相交出去，順便做分組。

這一版真正的難點不是 slots，是開了 slots 之後，`useVirtualList` 就不能再假設每一列等高。

**v10，輸入的手感。** 一鍵清空、打什麼就建什麼、全選反選、選取上限、chips 拖曳排序。這些每一條聽起來都很簡單，但它們全部都會回頭去動 `useSelect` 的選取邏輯，而那是整顆元件最核心的那塊。

改核心的小功能，比加一個新功能危險得多。

**v11，狀態要撐得住。** v8 只證明了「遠端資料接得進來」，沒證明「遠端出事的時候會怎樣」。失敗要能重試。然後是請求打架——你打字很快的時候，前一個請求可能比後一個晚回來，畫面上顯示的就是舊的結果。這個 bug 超級難重現，因為它只在網路慢的時候發生，而你開發的時候網路很快。

怎麼解？每次查詢帶一個序號，回來的時候對不上就丟掉，或者直接 abort 掉前一個。

還有一個很實際的：表單編輯的時候後端只給你 id，你要顯示「王小明」，但手上只有 `1024`。這一條沒做，所有的編輯頁面都會顯示一串 id。

**v12，接回原生表單。** 這一版是我最容易忘記的，因為我從頭到尾都活在 Vue 的世界裡，`v-model` 綁一綁就結束了。但很多專案的表單就是一個 `<form>`，送出的時候靠瀏覽器自己收集。那我這顆 Select 會被收進去嗎？

不會。它是一堆 div，`FormData` 完全看不到它。

所以要補 `name` 屬性、隱藏的原生欄位、`required` 驗證。還有瀏覽器的自動填入——這個大概是補不回來的，因為 Chrome 的 autofill 只認得原生控制項。

這裡就出現一個很尷尬的事實：v1 那個「最慫」的版本，這一整排全部都是免費的。

——

## v13、v14：我預設的那個使用者，根本不存在

從這裡開始，是我最想加進路線圖的那幾版。

因為前面十二版，我都預設使用者是「打英文、用滑鼠、坐在桌機前面、瀏覽器是 Chrome」。

那個人不存在。

**v13 是輸入法。** v6 的過濾綁的是 `input` 事件，每按一個鍵就過濾一次。英文沒問題，中文就爛了。

為什麼？你打「高雄」，注音要按 ㄍ、ㄠ、聲調、選字。在你還沒選字之前，input 裡面已經有一串組字中的東西了，而我每一下都拿去查。畫面一直閃，遠端還多送了四五次請求。日文更慘，平假名轉漢字之前那一整段，全部是垃圾 query。

那單純 debounce 不行嗎？畫面閃可以壓下去，但下面那件更嚴重的擋不掉。

所以要接 `compositionstart` 跟 `compositionend`，組字中先把過濾停掉。但這裡有個坑——Safari 跟 Chrome 的 `compositionend` 跟 `input` 事件順序不一樣，Android 上有些輸入法根本不丟 composition 事件，所以你還是得加一層 debounce 兜底。

還有一件更嚴重的事：組字中不能吃掉 Enter 跟方向鍵。你在選字的時候按 Enter，那是「確認選字」，不是「選走這個選項」。你在候選字之間按方向鍵，那是「換一個候選字」，不是「移動高亮」。

這個沒處理，中文使用者每選一次字就誤選一個選項。

老實說這是整趟裡我覺得最能代表問題的一版——這個 bug，你用英文測一輩子都測不出來。

**v14 是手機。** 本來我以為就是 RWD，把寬度調一調。

不是。那差在哪？

沒有 hover。手機沒有滑鼠指標，但 `:hover` 在觸控之後會黏在那一項上，你點完一個選項，它就一直亮著。所以 hover 樣式要包在 `@media (hover: hover) and (pointer: fine)` 裡面。點擊區也太小，桌機一列32px 很合理，手指要40px 以上——這不是好看不好看，是點不點得到。

然後是虛擬鍵盤，這個最麻煩。搜尋框一 focus，鍵盤彈出來，可視範圍剩下一半。那面板會自己讓開嗎？不會——`window.innerHeight` 在 iOS 上不會變，所以我算出來的面板位置，正好在鍵盤底下。要改用 `visualViewport` 的高度跟位移重算。

還有 iOS 的自動放大，input 的字級小於16px，一 focus 整頁就會被 Safari 放大。捲動鎖定也是，`overflow: hidden` 在 iOS Safari 擋不住橡皮筋。

寫到這裡我得誠實講一句：手機上其實不該用同一顆浮層，應該整個換成從底部升上來的 bottom sheet。

那已經不是 RWD 了，是兩種互動模型。

——

## v15 到 v17：同一份程式碼，在不同的機器上長得不一樣

**v15，瀏覽器差異。** 這一版之前，我對「跨瀏覽器」的印象還停在「加個 prefix 就好」。

實際排下來不是這樣。Safari 有一批東西的時程跟別人不一樣，`:focus-visible`、`inert`、`popover`、anchor positioning，每一個支援的時間點都不同，所以你得 feature detect，而且兩條路都要維護。

Firefox 完全不吃 `::-webkit-scrollbar`，你在 Chrome 調好的細捲軸到 Firefox 是粗的，面板的內容寬度就差了一截，文字提早斷行。Firefox 還有一個 scroll anchoring，它會在你 append 新選項的時候「好心」幫你維持視覺位置，而我的無限滾動自己也在算捲動位置，兩邊打架，畫面就跳。怎麼擋？`overflow-anchor: none` 關掉。

Chrome 在 Windows 125% 縮放下，`getBoundingClientRect` 回傳的是小數，你直接拿去設 `left`，面板會抖1px。要不要四捨五入？round 了，在某些縮放比例下又會差1px 對不齊。

這一整版沒有一個「聰明的解法」。就是一條一條列出來，一條一條測。

**v16，作業系統差異。** Windows 是佔位捲軸，Mac 預設是浮在上面的 overlay 捲軸，所以同一個面板，Windows 上的內容區就是窄一截。字型也是，同一份 label，Windows 上是微軟正黑，Mac 上是蘋方，寬度不一樣——你在 Mac 上量好的「最長選項寬度」，到 Windows 就爆行。

這件事設計師通常不會知道，因為他的 Figma 只有一種字型。

那面板寬度寫死不就好了？不行，只能跟 trigger 對齊，或者當場量。

修飾鍵也是。Mac 沒有獨立的 Home 跟 End，我 v4 只綁了 `Home` 跟 `End`，Mac 使用者根本按不到。而且 Mac 的原生 select 是 Option 加上下開合的，你要不要跟？跟了 Windows 使用者不懂，不跟 Mac 使用者覺得怪。

然後是螢幕閱讀器，這個最難。VoiceOver 配 Safari、NVDA 配 Firefox、JAWS 配 Chrome，是三組不同的組合，同一份 ARIA 三邊讀出來的東西不一樣。`aria-activedescendant` 的支援一直很微妙，所以有人乾脆改用 roving tabindex，真的把焦點移到 option 上——但那又跟 combobox 的 pattern 打架。

這一版我得先講清楚：它做不完。因為驗收條件不是 CI 綠燈，是三種螢幕閱讀器實際聽過一遍，而我手上只有一台 Mac。

**v17，使用者的偏好，不是你的偏好。** 深色模式要收在變數層，一次換完，不該讓每個子元件自己判斷。Windows 高對比模式我以前完全不知道——`forced-colors` 一開，你的背景色、陰影全部被系統蓋掉，所以「靠背景色表示選中」這種設計，在高對比模式下是完全看不出來的。`prefers-reduced-motion` 要能關掉展開動畫，這不是體貼，是有人看了會頭暈。RTL 的時候面板要靠右、箭頭要翻邊。

這四條有一個共同點：它們都不會出現在你的 bug 回報單裡。

因為需要它們的人，通常一開始就放棄用你的產品了。

——

## v18、v19：SSR、測試，然後真的發佈出去

SSR 這件事本身不難。面板走 Portal 送到 body，但 server 上根本沒有 body，所以 teleport 得等到 `onMounted` 之後，不然 hydration 直接對不起來。元件的 id 要穩定，不然 server 產一組、client 產一組，`aria-controls` 就指到空氣去了。所有的量測——座標、剩餘空間、字寬——全部只能在 client 做。

那難在哪？難在它逼你把「什麼時候可以碰 DOM」這條線，重新畫一次。

到 v19 才輪到測試。composables 各自寫單元測試，互動測試全程走鍵盤，視覺回歸靠 Storybook 截圖比對——而且要跨瀏覽器截，不然 v15 那一版白做。無障礙掛 axe 做自動檢測。然後 CI 擋住型別、lint、測試、產物大小，最後才是發佈。

但我想講的是——CI 全綠就代表沒問題了嗎？

只代表「我沒改壞」。

擋不住「我從來沒想到」。

v13 那個輸入法的坑，沒有任何一條 CI 規則會提醒你。它只會在某一天，被一個用注音的使用者回報成「搜尋很怪」。

——

## 走完這一趟，我才看懂別人為什麼那樣寫

以前我看到面板 teleport 到 body，心裡想「幹嘛這麼麻煩」。自己做過才知道，不然一定被 `overflow: hidden` 切掉。

以前我看到一整排 aria 屬性，心裡想「這有人在用嗎」。自己做過才知道，那是原生 select 免費送的，你自己做就得全補。

以前我看到定位算式又臭又長，心裡想「過度工程吧」。自己做過才知道，面板貼底要翻面，還要把高度夾住。

還有幾條，我連做都還沒做，光是把它排進待辦就懂了。

以前我看到一堆 `compositionstart`、`compositionend`，心裡想「這是在防什麼」。防的是中文使用者每選一次字，就誤選一個選項。

以前我看到 hover 樣式被包在 `@media (hover: hover)` 裡面，心裡想「有必要嗎」。有必要，不然手機上點完一個選項，它就一直亮在那裡。

以前我看到樣式檔裡有 `forced-colors` 那一段，心裡想「這誰在用」。用的是開高對比模式的人，而你「靠背景色表示選中」的設計，他完全看不出來。

所以每一版的複雜度，都不是設計者愛炫技。

是被真實情境逼出來的。

那些「看起來很囉嗦」的設計，其實每一行都在還債。

那 Element Plus 那些憑什麼敢說自己做完了？

這就是我對現成元件庫改觀最大的地方——它們不是多做了什麼炫技的東西，它們是把這一整排，全部做完了。而且不是因為它們比較聰明，是因為那些問題早就有人回報過了。

我以前寫過[元件真的別亂自己刻](/posts/design-system/dont-hand-roll-components/)，當時列的坑我以為自己夠清楚了。排完 v19 才知道，那篇還算客氣的。

也許有人會說，那你幹嘛不直接用 Headless UI、Radix Vue 或 Floating UI？如果是要出貨，我一定用。這趟的目的就是要自己踩，所以刻意不用。而且踩完之後我才真的看得懂 Floating UI 的 API 為什麼長那樣——middleware、flip、shift、size，每一個都對應到我 v5 那版在解的問題。

——

## 那八版的前提，你上班的時候一個都沒有

寫到這裡其實可以結束了。

但還沒。

因為上面那八版，是重構最爽的狀況。而後面那十一版能不能排得那麼乾淨，也是同一個原因。

不是因為我做得好，是因為條件全部被我調到最寬鬆。

只有我一個人，不用溝通，也不用排隊等 review。沒有使用者，想改就改。沒有期限，不跟任何需求搶排程。範圍我自己畫，就一顆 Select。舊版可以留著，八份並存，誰也不礙著誰。

那真實專案裡的條件呢？

幾十個人同時在改同一份程式碼。有人正在線上用，壞掉那叫事故，不叫 bug。重構要跟功能需求搶同一批人。範圍不是你畫的，是耦合關係替你決定的。舊的不能留，留著就是兩套都要養。

所以難的從來不是「怎麼寫比較好」。

那部分我上面已經講完了。

——

## 重構的成本，從來不在程式碼

改動本身可能兩天就好。但那兩天根本不是瓶頸。

**認知成本**：沒有人握有全貌。寫的人早就走了，文件停在兩年前，真正的規格躲在某一段 `if` 裡面。所以你得先花好幾週搞懂「現在是什麼」，才有資格決定「應該變成什麼」。

**協調成本**：你動的每一個介面，後面都掛著別人的排程。改一個共用元件的 props，牽動的不是幾個檔案，是好幾個團隊這一季的計畫。而技術決策只要得跨組同意，速度就由最慢的那組決定。

**信任成本**：上一次重構做到一半就沒下文了，所以這次沒人相信你會做完。這一項最貴，而且是繼承來的——你什麼都還沒做錯，就已經先欠著。

不公平嗎？非常不公平。但那就是你要處理的現實。

還有一個我覺得是一個人重構跟一群人重構最本質的差別：你在打一個會動的靶。

你在搬舊架構的同時，另外二十個人正在繼續往舊架構加東西。於是你的分支越開越久，而 merge 的代價是隨著時間非線性成長的。到後來，你改 code 的時間，還比不上解衝突的時間。

那怎麼辦？為了閃衝突，你改成「新的寫旁邊」。

好，現在專案裡有兩套。

然後中途被更急的需求打斷，這兩套就此定居。下一個人來了，看不懂這兩套哪個是對的。

他開第三套。

所以重構最大的風險，不是做壞。

是做不完。

而且半套架構比原本更糟，因為現在你要同時懂兩套，還要知道哪個檔案屬於哪一套。

——

## 聽起來超對、但一定會失敗的四句話

這四句我自己都說過。

「先做一個新版，做好再切過去。」為什麼失敗？因為平行世界永遠追不上，舊的還在長新功能。

「以後大家都用新寫法就好。」口頭約定沒有強制力，新人只會照旁邊的檔案抄。

「等這波需求忙完就來重構。」那一波不會結束，它只會換一個名字。

「一次全部換掉，長痛不如短痛。」只有成功跟 rollback 兩種結局，中間沒有地方可以喘。

它們的共同點是什麼？

都假設「有一段完整的時間」可以用。

而大型專案不會給你那段時間。

——

## 換一種形狀：假設你隨時會被打斷

我要先講清楚，這不是叫你更努力。是換一種形狀，讓它被打斷了也還是有價值。

什麼叫被打斷也還是有價值？兩件事。

一邊是讓它可以隨時停。先立邊界，再搬東西——新的介面先立起來，舊實作留在後面，再一塊一塊換掉，每一步都能上線、能回滾，不要養長命分支。先補特徵測試把現況的行為鎖住，再改結構，注意，不是為了品質，是為了讓你敢動。還有，把重構掛在需求上，碰到哪裡就改哪裡，不要另外去要排程。

另一邊是讓它不會退回去。「不要再往舊的加」，這句話要變成機器規則，lint、codemod、CI 擋著，不能只是嘴上說說。新舊共存一定要寫下到期日跟刪除條件，不然「暫時」就是永久。決策要留字，因為做到一半人一定會換。

最後，進度要看得見。還剩幾個呼叫點沒搬，貼在牆上——這是唯一能對非工程師交代的東西，也是[怎麼把一次重構賣出去](/posts/engineering/how-to-sell-a-refactor/)的關鍵。

核心就一句：假設你隨時會被打斷，然後設計一個被打斷也不虧的走法。

——

所以回到最前面。

一顆下拉選單重寫八次，後面還排著十一版沒動，聽起來像是一個很閒的人在做的事。

但我真正想講的是這個：選型錯誤的代價，在一個人身上是一個週末，在大型團隊，是以年計算。

我的建議不是「別造輪子」，是換個順序造：先去讀別人的輪子，再自己做一次，而且不用做完，做到痛點冒出來就夠了。我做八版是因為我想講一場簡報，你做到 v4 大概就夠痛了。然後回頭再讀一次。

造輪子最大的收穫，從來不是那顆輪子。

是下次選型的時候，你問得出來的問題不一樣了。面板 Portal 出去了嗎、鍵盤跟 ARIA 補到什麼程度、幾千筆會不會爆、樣式要怎麼覆寫、它把哪些東西當成公開 API。

輸入法擋了嗎、手機上是浮層還是 bottom sheet、Windows 上捲軸會不會把面板擠窄、高對比模式下看不看得出哪一項被選中。

我覺得會問這幾個問題，比知道答案更有價值。

一個人的重構，難在技術。一群人的重構，難在讓所有人同時往同一個方向走一小步。

那你們家那個「等忙完就來重構」的東西，忙完了嗎？

（實驗性，本篇文章是 AI 產生）
