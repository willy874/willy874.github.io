---
title: "解決方案比畫圖寫 Code 還重要：AI 時代工程師的價值在哪"
description: "AI 時代 Code 寫得漂不漂亮、文件齊不齊，份量都變輕了。但在方便、安全、效率、便宜之間該取捨什麼，依賴的是預算、團隊、客戶這些不在 prompt 裡的真實變數，這才是 AI 觸及不到、工程師還站得住腳的地方。"
publishDate: 2026-07-16T00:45:00+08:00
category: "工程實務"
tags:
  - "架構"
  - "工程實務"
  - "反思"
series: "ai-era-craft"
draft: false
lang: zh-Hant
---
最近我一直在想一件事：在小公司待久了，會慢慢發現很多在大公司被奉為圭臬的東西，在這裡其實⋯⋯沒那麼重要。

不是說那些東西不好，而是環境不一樣，答案就不一樣。

——

## 環境不一樣，答案就不一樣

比如說，一人分飾多角的時候，跨職能的溝通工具就不重要了。你自己就是 PM、就是設計師、就是工程師，要溝通什麼？跟自己開會嗎XD

比如說，系統承載量很低的時候，複雜的系統架構就不需要了。沒有那個流量，就沒有那個煩惱。

又比如說，流程簡單到 AI 一鍵就能跑完的時候，花大把時間建自動化系統，好像也沒那麼划算。

看到這裡，也許有人會想：那小公司是不是什麼都可以隨便做？

欸！不是啦。

——

## 每一個「好」的背後，都有一張帳單

反過來看，好東西從來都不是免費的。

想要效能好的架構？那需要很多錢去買服務。想要極致的高效？那可能要在使用者端做出取捨。每一個「好」的背後，都有一張帳單，或是一個犧牲。

這也是為什麼，你沒辦法跟 AI 說一句「幫我設計一個使用者體驗良好的系統」，然後就憑空得到一個好用的東西。

AI 給出來的方案肯定很常見、很合理，但常見不等於適合你，合理也不等於真的好用。這件事我在[AI 能解決的問題深度](/posts/ai-tools/what-ai-cannot-replace/)裡也提過，它給的是平均解，不是你的解。

——

## 系統設計，是六個維度之間的取捨

設計一個系統，其實是在「方便」、「易用」、「安全」、「高效率」、「易於擴充」、「維持便宜」這麼多維度之間，不斷地取捨。

因為很多方案，本身就是相斥的。

<figure>
  <svg viewBox="0 0 720 230" role="img" aria-labelledby="fig-solutions-title" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-solutions-title">系統設計的六個維度，彼此相斥，只能在中間取捨</title>
    <style>
      .fig-solutions-chip { fill: var(--color-surface); stroke: var(--color-border); stroke-width: 1.5; }
      .fig-solutions-label { fill: var(--color-text); font-size: 17px; text-anchor: middle; font-family: var(--font-sans, sans-serif); }
      .fig-solutions-tension { stroke: var(--color-accent); stroke-width: 1.5; stroke-dasharray: 5 4; }
      .fig-solutions-tag { fill: var(--color-accent); font-size: 12px; text-anchor: middle; font-family: var(--font-sans, sans-serif); }
    </style>
    <rect class="fig-solutions-chip" x="15" y="36" width="150" height="52" rx="12" />
    <rect class="fig-solutions-chip" x="285" y="36" width="150" height="52" rx="12" />
    <rect class="fig-solutions-chip" x="555" y="36" width="150" height="52" rx="12" />
    <rect class="fig-solutions-chip" x="15" y="142" width="150" height="52" rx="12" />
    <rect class="fig-solutions-chip" x="285" y="142" width="150" height="52" rx="12" />
    <rect class="fig-solutions-chip" x="555" y="142" width="150" height="52" rx="12" />
    <text class="fig-solutions-label" x="90" y="69">方便</text>
    <text class="fig-solutions-label" x="360" y="69">安全</text>
    <text class="fig-solutions-label" x="630" y="69">易於擴充</text>
    <text class="fig-solutions-label" x="90" y="175">維持便宜</text>
    <text class="fig-solutions-label" x="360" y="175">高效率</text>
    <text class="fig-solutions-label" x="630" y="175">易用</text>
    <line class="fig-solutions-tension" x1="165" y1="62" x2="285" y2="62" />
    <text class="fig-solutions-tag" x="225" y="50">相斥</text>
    <line class="fig-solutions-tension" x1="165" y1="168" x2="285" y2="168" />
    <text class="fig-solutions-tag" x="225" y="156">相斥</text>
  </svg>
  <figcaption>要安全，可能就犧牲了方便；要便宜，可能就犧牲了效率。系統設計不是把每個維度都拉到滿，而是在相斥的維度之間，選一個剛剛好的位置。</figcaption>
</figure>

要安全，可能就犧牲了方便。要便宜，可能就犧牲了效率。魚與熊掌，本來就難以兼得。

你可能注意到了，我沒有提「好開發」、「好維護」、「好溝通」。

老實說，在 AI 時代，這幾件事的份量真的變輕了。Code 寫得漂不漂亮、文件齊不齊全，AI 都能幫你補上一大截。但「該取捨什麼」這件事，AI 幫不了你。

——

## 剛剛好的解決方案，AI 觸及不到

所以繞了一圈，我想說的是：

能在有限資源、有限時間、有限環境之下，找到那個「剛剛好」的解決方案——這件事的價值，遠遠超越畫圖，也超越寫 Code。

為什麼這件事 AI 難以達成？

因為它背後依賴的是「真實世界」的變數。你的預算、你的團隊、你的客戶、你的時程，這些都不在 prompt 裡，而在你每天面對的現實裡。

如果你想再往下追一層「架構到底要解決什麼」，我之前寫過[架構要解決什麼問題](/posts/engineering/what-architecture-solves/)，講的也是同一件事：先搞清楚問題，方案才有意義。而在這之前，[功能做出來只是一句話](/posts/ai-tools/shipping-features-is-one-sentence/)——真正難的，從來都不是把它做出來。

這是 AI 無法觸及的地方，也是我們還站得住腳的地方⋯⋯
