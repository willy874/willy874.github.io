---
title: "關於我與前端無關緊要的分享 Day 37"
description: "這年頭似乎比較流行使用 Primitive UI ，也有人稱之 Atomic UI ，也有人稱之 Headless UI，反正其實在講的都是同一件事，就是原子化元件設計。 原子化設計之後，誕生了諸如 Redix UI, Base UI, C"
publishDate: 2025-10-04T17:37:11+08:00
updatedDate: 2025-10-07T07:55:59+08:00
category: "日更系列"
tags:
  - "日更"
  - "前端"
  - "設計系統"
draft: false
lang: zh-Hant
---
這年頭似乎比較流行使用 Primitive UI ，也有人稱之 Atomic UI ，也有人稱之 Headless UI，反正其實在講的都是同一件事，就是原子化元件設計。

原子化設計之後，誕生了諸如 Redix UI, Base UI, Chakra UI, Headless UI 等等的 UI Library 。他們最大的優勢在，不用煩惱每個節點你要怎麼去翻改樣式，提供你最陽春簡單的樣式，針對指定的 HTML 節點來進行修改。

但這類的 UI Library 就是使用上門檻高了一點，要理解使用會是一件頗吃力的事情，所以現在還有 Shadcn UI 這樣的 UI Registry ，可以用指令把必要的實作層給安裝上專案。

這整套下來可以說是在社群大流行，然而卻也帶來過去不存在一些問題。比方說版本管理、依賴共用、功能覆蓋、權重管理等等，這些過去問題被封裝在元件中，被妥善管理。隨著曝露出來，管理這些東西開始成為一個問題。
