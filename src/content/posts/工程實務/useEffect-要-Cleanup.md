---
title: "useEffect 要 Cleanup"
description: "分享一下前陣子工作上遇到的感觸 我們寫那麼久的 React，從 functional component 寫都知道 useEffect 要 cleanup，講的大家都知道。聽了任何事件要清除，改了外部狀態要恢復。 但 Promise 的 c"
publishDate: 2025-04-16T21:45:28+08:00
updatedDate: 2025-04-28T23:10:17+08:00
category: "工程實務"
tags:
  - "前端"
  - "React"
  - "工程實務"
draft: false
lang: zh-Hant
---
分享一下前陣子工作上遇到的感觸

我們寫那麼久的 React，從 functional component 寫都知道 useEffect 要 cleanup，講的大家都知道。聽了任何事件要清除，改了外部狀態要恢復。

但 Promise 的 callback 嚴格來說也是一個 event callback，那是不是也應該 cleanup？

不管你認不認同，我覺得只要在 react component 裡面去做了任何 Promise 行為，那就應該要用 useEffect 去更新狀態和清除事件。

官方寫了一個案例：

https://react.dev/learn/synchronizing-with-effects#fetching-data

雖然這麼說極端了點，但常態的 useEffect + fetch 要這麼寫應該沒毛病了吧？

不過最好的方法還是 tanstack query 治百病XD
