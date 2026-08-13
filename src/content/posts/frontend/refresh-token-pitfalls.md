---
title: "Refresh Token 到底有什麼難的？三個上線才會炸的地方"
description: "Refresh Token 難的不是流程，是流程跑起來之後的那些鬼故事：token 放哪會被 XSS 端走、跨分頁併發怎麼把使用者踢出去、長連線與登出的時序怎麼排，還有為什麼一用 SSR 就得全部重做一次。"
publishDate: 2026-08-13T09:30:00+08:00
category: "前端技術"
tags:
  - "前端"
  - "工程實務"
  - "安全"
series: "refresh-token"
draft: false
lang: zh-Hant
---

上一篇寫 [Refresh Token](/posts/engineering/refresh-token-is-hard/)，反應意外地熱烈。

而回應大概可以歸成三句話：

「有什麼難的？」

「用套件就好啦～」

「我怎麼都沒遇過？」

老實說，這三句我這幾年聽了不下十次。

而且我完全能理解為什麼有人會這樣講——因為在單人、單分頁、開發環境的世界裡，Refresh Token 真的沒什麼難的。

難的是它上線之後。

就算做了這麼多年前端，就算現在有 AI 幫忙寫，我還是覺得它難做。

——

## 難的從來不是流程，是流程跑起來之後

AccessToken 過期了，拿 RefreshToken 去換一組新的，換完繼續用。

就這樣啊，到底有什麼難的？

這句話沒有錯。它描述的是「流程」，而流程本來就簡單，一張圖三個箭頭就畫完了。

但流程從來不是難點。

難的是那些你在自己電腦上永遠測不出來、一上線就開始有人回報的鬼故事。

我把這些鬼故事濃縮成三塊：token 要放哪、各種時序問題怎麼收、還有——只要你用了 SSR，前面兩塊會全部重來一次。

——

## RefreshToken 到底該放哪？httpOnly cookie 也有前提

先講存放位置。

大部分人的直覺是 localStorage。存進去、要用的時候讀出來，簡單直接，誰不會。

但只要稍微碰過資安你就知道，localStorage 根本是 XSS 的提款機。頁面上隨便一段被注入的 JS，一行 `localStorage.getItem` 就把你的 token 整包端走。這件事的前提我在[資安漏洞遠比你想像的還要多](/posts/engineering/more-security-holes-than-you-think/)講過：前端沒有秘密，只要東西在前端，就有辦法被拿走。

於是進階一點的答案是：放 httpOnly cookie。

JS 讀不到，XSS 偷不走，聽起來很完美吧？

很多文章講到這裡就收工了，說這是「最佳方案」。

但事實上，這句話藏了一個很深的前提——cookie 送得到後端。

而 cookie 送不送得到，取決於一件你可能從來沒把它當成資安問題的事：你的 API 跟你的網站，是不是同一個網域。

如果是 `app.example.com` 配 `api.example.com`，那沒事，同一個家族，cookie 隨便送。

但如果是 `myapp.com` 配 `api.某某廠商.io`，這就變成跨域，你的 cookie 成了第三方 cookie。

Safari 直接封鎖。Firefox 預設封鎖。Chrome 也讓使用者可以自己關掉。

也就是說，就算你今天設定成功、測起來也正常，這仍然是一個「現在就有一部分使用者是壞的」的地基。

那個被講到爛的「最佳方案」，其實有一半的前提你根本控制不了。

——

## 併發不是一個點，是一整排堵不完的洞

再來是併發，以及它底下一整家親戚。

這是最經典、也最壞心的坑。

想像一個畫面。使用者打開儀表板，畫面同時發出五個請求。剛好這一刻 AccessToken 過期了，五個請求整整齊齊回你 401。

你的攔截器很盡責，五個各自去觸發一次 refresh。

如果後端有做輪替（每換一次就把舊的作廢），那第一個換成功了，剩下四個手上拿的全是已經失效的舊 token。

後端一看：同一張票被用第二次？這是攻擊。整組作廢，強制重新登入。

使用者：我只是重新整理一下，為什麼被登出了？

<figure>
  <svg viewBox="0 0 740 235" role="img" aria-labelledby="fig-rtp-storm-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-rtp-storm-title">五個請求同時遇到 Token 過期，各自觸發 refresh，後端判定是重放攻擊而作廢整組憑證</title>
    <defs>
      <marker id="fig-rtp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
    </defs>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="10" y="66" width="148" height="84" rx="10" />
      <rect x="200" y="66" width="148" height="84" rx="10" />
      <rect x="390" y="66" width="148" height="84" rx="10" />
    </g>
    <rect x="580" y="66" width="148" height="84" rx="10" fill="var(--color-surface)" stroke="var(--color-accent)" stroke-width="2" />
    <g fill="var(--color-muted)" font-size="13" text-anchor="middle">
      <text x="84" y="52">①</text>
      <text x="274" y="52">②</text>
      <text x="464" y="52">③</text>
      <text x="654" y="52">④</text>
    </g>
    <g fill="var(--color-text)" font-size="14" text-anchor="middle">
      <text x="84" y="102">打開儀表板</text>
      <text x="84" y="126">五個請求一起飛</text>
      <text x="274" y="102">Token 剛好過期</text>
      <text x="274" y="126">五個都拿到 401</text>
      <text x="464" y="102">攔截器各自補救</text>
      <text x="464" y="126">同一秒換五次</text>
      <text x="654" y="102">舊票被用第二次</text>
      <text x="654" y="126">整組作廢</text>
    </g>
    <g stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#fig-rtp-arrow)">
      <path d="M158 108 H196" />
      <path d="M348 108 H386" />
      <path d="M538 108 H576" />
    </g>
    <text x="370" y="196" font-size="13" fill="var(--color-muted)" text-anchor="middle">使用者：我只是重新整理一下，為什麼被登出了？</text>
  </svg>
  <figcaption>併發不是理論上的邊界情況。只要頁面同時發多個請求，而 token 剛好在那一刻過期，五次 refresh 就會撞在一起——後端看到舊票被重用，判定是攻擊，直接作廢整組憑證。</figcaption>
</figure>

也許有人會說：那我在攔截器裡做一把鎖，同一時間只准一個 refresh 在飛，其他人共用同一個 Promise，不就好了？

對，這確實是標準解法，程式碼也不長：

```ts
let inflight: Promise<string> | null = null;

function refreshToken(): Promise<string> {
  if (!inflight) {
    inflight = doRefresh().finally(() => {
      inflight = null;
    });
  }
  return inflight;
}
```

但這把鎖只鎖得住「這一個頁面」。

——

## 一把鎖鎖不住五個分頁

使用者開了五個分頁。

每個分頁都是獨立的執行環境，你頁面裡那個 `inflight` 變數，隔壁分頁根本看不到，也管不到。

於是五個分頁同時 refresh，你剛剛解掉的併發，換個維度又整組回來了。

這題要往上一層解。想像五個人同時想講話，但現場只有一支麥克風——總得有人先搶到，搶到的那個負責講，其他人負責聽。

在瀏覽器裡，那支麥克風叫做 [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API)（`navigator.locks`），或者用 [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) 自己兜一套。所有分頁去搶同一把鎖，搶到的那個負責換，換完把新 token 廣播給其他人。

<figure>
  <svg viewBox="0 0 740 248" role="img" aria-labelledby="fig-rtp-lock-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-rtp-lock-title">多個分頁搶同一把瀏覽器層級的鎖，只有搶到的分頁去換 token，換完再廣播給其他分頁</title>
    <defs>
      <marker id="fig-rtp-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
      <marker id="fig-rtp-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-accent)" />
      </marker>
    </defs>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="14" y="24" width="126" height="48" rx="8" />
      <rect x="14" y="96" width="126" height="48" rx="8" />
      <rect x="14" y="168" width="126" height="48" rx="8" />
      <rect x="214" y="88" width="136" height="64" rx="10" />
      <rect x="394" y="88" width="136" height="64" rx="10" />
      <rect x="574" y="88" width="152" height="64" rx="10" />
    </g>
    <g fill="var(--color-text)" font-size="14" text-anchor="middle">
      <text x="77" y="54">分頁 A</text>
      <text x="77" y="126">分頁 B</text>
      <text x="77" y="198">分頁 C</text>
      <text x="282" y="114">搶同一把鎖</text>
      <text x="462" y="114">只有一個分頁</text>
      <text x="462" y="136">真的去換 token</text>
      <text x="650" y="114">換到的新 token</text>
      <text x="650" y="136">廣播給其他人</text>
    </g>
    <text x="282" y="136" font-size="12" fill="var(--color-muted)" text-anchor="middle">navigator.locks</text>
    <g stroke="var(--color-primary)" stroke-width="1.8" fill="none" marker-end="url(#fig-rtp-arrow2)">
      <path d="M140 48 L208 104" />
      <path d="M140 120 H208" />
      <path d="M140 192 L208 136" />
      <path d="M350 120 H390" />
      <path d="M530 120 H570" />
    </g>
    <path d="M650 152 V226 H77 V220" stroke="var(--color-accent)" stroke-width="1.8" stroke-dasharray="6 5" fill="none" marker-end="url(#fig-rtp-arrow3)" />
    <text x="380" y="216" font-size="12" fill="var(--color-muted)" text-anchor="middle">廣播回每個分頁，沒搶到的人直接用新的</text>
  </svg>
  <figcaption>頁面裡的鎖只管得到自己，跨分頁要往瀏覽器層級搬：所有分頁搶同一把鎖，只有搶到的那個真的去換，換完把新 token 廣播回去。</figcaption>
</figure>

還有一個很多人完全想不到的觸發點：瀏覽器甦醒。

筆電闔上、分頁擺著沒動，或是手機切到背景，過了一陣子你回來——

那一瞬間，所有背景分頁同時被喚醒，同時發現 token 過期，同時打 refresh。

跟前面一模一樣的併發風暴，只是這次的觸發者是「使用者回來了」這個再正常不過的動作。

你會發現，併發根本不是一個點，而是一整排你堵不完的洞。

——

## 長連線不走攔截器，它就默默掛在那

還有一個平常不會想到、但一定會中的：長連線。

WebSocket、SSE 這種，連上去就是一條長長的水管，一開始拿當下有效的 token 握手，之後就一直開著。

但 token 是會過期的。

握手那一刻它有效，開著開著它就失效了。

HTTP 請求還好，下一個請求吃到 401，攔截器會接手去 refresh。

但長連線不走攔截器啊。

它就這樣默默掛在那，帶著一張早就過期的票。你以為還連著，其實伺服器那端可能已經不認你了——像你拿一張過期的識別證卡在門禁前面，機器不會吭聲，它只是不再幫你開門。

最靠北的地方是：頁面看起來一切正常，就是即時通知莫名其妙停了、資料不再更新。你 debug 半天，因為它根本沒報錯，沒有 401，什麼都沒有。

解法是 refresh 成功之後，要主動拿新 token 把長連線重新建立一次。

這件事很容易在實作時被整個漏掉，因為它跟 HTTP 那套完全是兩個世界。

——

## 登出的順序反了，你就會養出殭屍

再講一個更陰的時序問題：登出。

你可能覺得登出有什麼難的，清掉 token、導去登入頁，結束。

但登出從來不是一個瞬間，它是一串動作：取消請求、清記憶體、打後端撤銷、清快取、導頁。

問題來了。假設在你按下登出的同一刻，背景剛好有一個 refresh 正在飛。

你這邊已經清掉 token、跳到登入頁了——結果那個背景的 refresh 慢了半拍，成功回來了，然後很盡責地把新的 AccessToken 寫回記憶體。

恭喜，畫面上你登出了，憑證卻還活著。

一個活生生的殭屍登入狀態。

<figure>
  <svg viewBox="0 0 740 250" role="img" aria-labelledby="fig-rtp-logout-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-rtp-logout-title">登出流程的兩種順序對照：先清 token 會被慢一拍的 refresh 寫回憑證，先 abort 才不會</title>
    <text x="10" y="26" font-size="13" fill="var(--color-accent)">順序反了</text>
    <line x1="60" y1="70" x2="710" y2="70" stroke="var(--color-border)" stroke-width="2" />
    <g fill="var(--color-accent)">
      <circle cx="100" cy="70" r="6" />
      <circle cx="280" cy="70" r="6" />
      <circle cx="460" cy="70" r="6" />
      <circle cx="640" cy="70" r="6" />
    </g>
    <g fill="var(--color-text)" font-size="13" text-anchor="middle">
      <text x="100" y="52">按下登出</text>
      <text x="280" y="52">清掉 token</text>
      <text x="460" y="52">導到登入頁</text>
      <text x="640" y="52">refresh 回來了</text>
    </g>
    <text x="640" y="96" font-size="13" fill="var(--color-accent)" text-anchor="middle">憑證又活了</text>
    <text x="370" y="122" font-size="13" fill="var(--color-muted)" text-anchor="middle">畫面登出了，憑證還在——殭屍登入狀態</text>
    <text x="10" y="170" font-size="13" fill="var(--color-primary)">先斷後路</text>
    <line x1="60" y1="214" x2="710" y2="214" stroke="var(--color-border)" stroke-width="2" />
    <g fill="var(--color-primary)">
      <circle cx="100" cy="214" r="6" />
      <circle cx="280" cy="214" r="6" />
      <circle cx="460" cy="214" r="6" />
      <circle cx="640" cy="214" r="6" />
    </g>
    <g fill="var(--color-text)" font-size="13" text-anchor="middle">
      <text x="100" y="196">按下登出</text>
      <text x="280" y="196">abort 進行中的 refresh</text>
      <text x="460" y="196">清 token 與快取</text>
      <text x="640" y="196">撤銷後導頁</text>
    </g>
    <text x="640" y="240" font-size="13" fill="var(--color-primary)" text-anchor="middle">沒有東西再寫回來</text>
  </svg>
  <figcaption>登出的第一件事不是清 token，是先把還在飛的 refresh 中斷掉。順序反過來，慢半拍回來的 refresh 就會把新憑證寫回一個已經登出的畫面。</figcaption>
</figure>

所以登出的第一件事，不是清 token，是先把進行中的那個 refresh 給中斷掉——[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) 這時候就是拿來幹這個的：

```ts
async function logout() {
  authAbort.abort(); // 先斷後路,讓還在飛的 refresh 直接死掉
  clearMemoryToken();
  await revokeOnServer().catch(() => {});
  redirectToLogin();
}
```

順序反了，你就會養出殭屍。

——

## 用了 SSR，前面那些要全部重來一次

如果你的專案是純 CSR，上面那些做好，大概就能收工。

但只要你用了 SSR——Next、Nuxt 那一票——整套邏輯要重寫，而且會直接撞到框架本身的限制。

我去年噴 Next，噴的就是這一段。

而這其實也是我在[你可能不需要 SSR](/posts/engineering/you-might-not-need-ssr/) 裡想講的同一件事：SSR 帶來的每一個好處，背後都有一張帳單。認證這張，開得特別大。

### 第一個限制：render 階段不能改 cookie

伺服器一旦開始把 HTML 吐給瀏覽器，header 就定型了。

你在 render 到一半的時候發現 token 過期、想順手 refresh、想把新 cookie 寫回去——抱歉，寫不回去。

於是 refresh 這件事被迫搬到 middleware 或 route handler，render 階段只能讀、不能寫。

光是這個切割，就讓整個資料流變得很扭曲。

### 第二個限制：你根本不一定拿得到判斷的依據

理想上，middleware 想知道 token 過期了沒，很簡單嘛，看一下到期時間就好。

但後端不一定會把到期時間吐給你。也不一定給你一支「驗證這個 token 還有沒有效」的 endpoint。

那 middleware 到底要怎麼判斷？

猜。

要嘛每次都賭它還有效、錯了再補救；要嘛每次都打一趟後端問，多一次往返。

無論哪一種，你在 server 端做的判斷，都不是「知道」，而是「猜測」。

一個要在每個請求都跑、卻只能用猜的守門員，你說可靠嗎？

### 第三個限制：你會被迫維護兩套

同一支 API，在 server 端呼叫和在 browser 端呼叫，拿 cookie 的方式、帶 header 的方式、能不能改 cookie，全都不一樣。

server 端要從進來的 request 裡把 cookie 撈出來，browser 端瀏覽器會自動幫你帶；server 端不能亂改 header，browser 端沒這個限制。

很多人想省事，寫一個 client 用 `typeof window` 判斷現在在哪一邊。

聽起來很聰明，但這種東西在 edge runtime 上特別容易出事，型別提示也整個糊掉。

最後你會發現，乖乖拆成兩個 client 反而最省事。

同一件事、兩套邏輯，這就是 SSR 的稅。

——

## 所以 Refresh Token 到底難在哪

難的從來不是「怎麼發一個 token」。

難的是它同時牽扯到瀏覽器怎麼存東西、分頁之間怎麼協調、長連線怎麼跟上、登出的時序怎麼排、跨網域政策怎麼擋你，還有 SSR 框架逼你維護兩套。

而最壞心的地方是：任何一環理解錯了，症狀都長一模一樣——

使用者偶爾莫名其妙被登出。

一個你抓破頭都重現不出來的問題。

說白了，這整件事的心態跟[零信任](/posts/engineering/zero-trust-explained/)是同一套：與其賭那些狀況不會同時發生，不如假設它們一定會發生，然後把爆炸半徑縮到最小。

所以下次再有人跟你說「Refresh Token 有什麼難的、用套件就好」——

那大概只代表一件事：他做出來的機制有 bug，只是他還沒踩到而已⋯⋯
