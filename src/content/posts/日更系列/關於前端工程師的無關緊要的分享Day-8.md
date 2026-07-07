---
title: "關於前端工程師的無關緊要的分享Day 8"
description: "到底要不要使用 useMemo ？ 我們寫 React 久了都吃到優化要用 useMemo，但使用的方式卻很多派系。 我以前不懂時覺得包一個 useMemo 感覺特別好閱讀，但後來才知道這樣有無謂的效能開銷。再後來我改成用 IIFE 寫，只"
publishDate: 2025-09-05T16:07:36+08:00
updatedDate: 2025-09-08T08:33:26+08:00
category: "日更系列"
tags:
  - "日更"
  - "前端"
  - "React"
draft: false
lang: zh-Hant
---
到底要不要使用 useMemo ？

我們寫 React 久了都吃到優化要用 useMemo，但使用的方式卻很多派系。

我以前不懂時覺得包一個 useMemo 感覺特別好閱讀，但後來才知道這樣有無謂的效能開銷。再後來我改成用 IIFE 寫，只為了閱讀更容易。但我最近又被說「包一個 useMemo 更好讀」，甚至告訴我「多開幾個變數宣告處理就不用寫 IIFE」，我真的是覺得頭很痛。

其實也是萬年話題，在現在 react compiler 沒有很普及，依然逃不過要花心思去優化 memo。
