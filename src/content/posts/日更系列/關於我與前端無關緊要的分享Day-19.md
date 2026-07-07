---
title: "關於我與前端無關緊要的分享Day 19"
description: "每一次開新專案都沒有一次是一樣的，每一次都在思考如何拆分如何共用，這些架構規劃很有趣，處理起來也很繁瑣。 這次老樣子先開 monorepo，我把測試相關的應用程式放在 apps 資料夾，拆分包分在 packages資料夾。起手勢就是把 es"
publishDate: 2025-09-12T08:41:06+08:00
updatedDate: 2025-09-20T13:42:08+08:00
category: "日更系列"
tags:
  - "日更"
  - "前端"
  - "工程實務"
draft: false
lang: zh-Hant
---
每一次開新專案都沒有一次是一樣的，每一次都在思考如何拆分如何共用，這些架構規劃很有趣，處理起來也很繁瑣。

這次老樣子先開 monorepo，我把測試相關的應用程式放在 apps 資料夾，拆分包分在 packages資料夾。起手勢就是把 eslint, builder 相關的 config 抽出來做共用。

過往都是玩純 rollup 打包，但因為想要玩 oxc 套餐，所以乾脆都用 vite 處理核心 UI 打包。不知道改成都用 vite 會不會有問題，但總是要解決的。

[Build in Public]
