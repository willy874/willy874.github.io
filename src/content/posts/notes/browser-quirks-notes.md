---
title: "隨手開發小記"
description: "兩個實際踩到的瀏覽器差異：Firefox 裡 absolute + inset 對 input、img 這類無結尾標籤會失效；webkit 裡 flex-shrink 的壓縮效果也會失效。"
publishDate: 2025-08-04T13:48:24+08:00
updatedDate: 2025-08-04T13:54:44+08:00
category: "短文與心得"
tags:
  - "前端"
  - "CSS"
  - "短文"
draft: false
lang: zh-Hant
---
平常開發會用 position absolute + inset 填滿這種技法去拉撐 html。

但這技法在 Firefox 中，input, img, video... 等等無結尾標籤的 html 會失效，這時要搭配 width, height 100% 來填滿。

通常 flex 之下，flex-shrink 如果大於 1，如果內容過多，都會壓縮回 flex 大小。

但在 webkit 核心中(safari)，這種壓縮效果會失效。
