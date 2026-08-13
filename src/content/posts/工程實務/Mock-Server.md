---
title: "Mock Server"
description: "後端還沒好、外部資源掛掉都會卡住前端開發，Mock Server 可以用 Node.js 或 Service Worker 模擬一個伺服器環境。但也有人認為這只是拉高成本。"
publishDate: 2024-07-04T08:28:00+08:00
updatedDate: 2024-07-04T08:38:20+08:00
category: "工程實務"
tags:
  - "前端"
  - "工程實務"
  - "工具"
draft: false
lang: zh-Hant
---
前端常常在開發時，未必能保障後端或是外部資源都能是良好運作，很怕任何開發環境資源掛掉導致無法開發，又或是根本還沒完成開發就要先動工。這時 Mock Server 就很好用，模擬一個伺服器環境，通常可以用 nodejs 或 service worker 起一個仿後端的環境，模擬所有預想的行為。

當然也有一派人不認同這種作法，明明後端要開發一次，前端又要開發一次，無非就是拉高開發與維護成本。

你前端開發會起 mock 環境嗎？

還是會等後端寫完才動呢？
