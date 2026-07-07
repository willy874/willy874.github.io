# 竹子日誌 — 待辦事項

> 依技術規劃書(`docs/技術規劃書.md`)Roadmap 與實作過程整理。
> 已完成:Astro 骨架、繁中排版/雙主題、Content Collections、457 篇文章匯入與 12 分類區塊、
> Pagefind CJK 搜尋、sitemap、GitHub Actions 部署上線。

## 內容整理

- [ ] 兩個未歸類散檔補上分類:`零信任.md`、`溝通的渠道.md`(位於 note `竹子日誌文章/` 根目錄,匯入時跳過)
- [ ] 匯入文章內文的殘留格式:目前只做標題層級輕清理,個別文章若有其他匯入殘留(斷行、符號)再逐篇整理
- [ ] `未分類/` 目錄(目前為空)日後若有內容,決定是否納入

## 評論(giscus,§7.2)

- [ ] 開啟 repo Settings → Discussions
- [ ] 安裝 giscus app:https://github.com/apps/giscus
- [ ] 到 https://giscus.app 產生設定,把 `repoId` / `categoryId` 填入 `src/components/post/Giscus.astro`
      (未填時文章頁顯示提示、不報錯)

## RSS / SEO / OG

- [ ] RSS 全文輸出(Phase 2):目前輸出摘要;改以 `experimental_AstroContainer.renderToString`
      產生 rendered HTML 填入 `content` 欄位(見 `src/pages/rss.xml.ts` 註解),需搭配 `sanitize-html`
- [ ] OG 預設圖:`Base.astro` 引用 `/images/og-default.png`,該檔尚未放置(分享預覽目前缺圖)
- [ ] OG image 動態產生(Phase 4):build-time 以 satori 系方案產生,需自備 Noto Sans TC subset 字型

## 工具與檔案庫(§4、Phase 3)

- [ ] 紫微命盤 `src/components/islands/ZiweiChart.tsx` 接入實際命盤演算法(目前為互動骨架)
- [ ] `/files/` 歸檔規約落地:PDF/附件按年份放 `public/files/{年份}/`

> 註:演講(talks)功能已於本次移除(頁面、content collection、導覽、首頁區塊)。

## 自動化與進階(Phase 4,選用)

- [ ] `new-post` scaffold skill:輸入標題與 tags 產生 MDX + frontmatter
- [ ] Telegram 部署通知:deploy 成功後推播文章連結
- [ ] 每月 link checker(lychee)排程檢查外部連結失效
- [ ] 流量分析:Umami Cloud 或 GoatCounter
- [ ] 自訂網域評估(加 `public/CNAME` 即可,base 設定不變)

## 技術債

- [ ] CI actions 的 Node 20 deprecation 警告:`actions/checkout`、`setup-node`、`upload-artifact`、
      `pnpm/action-setup` 目前被 runner 強制跑在 Node 24;待各 action 釋出新版後升版消除警告(非阻斷)
