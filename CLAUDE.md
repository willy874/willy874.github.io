# 竹子日誌

以「竹子」為筆名經營的技術部落格,Astro 5 + GitHub Pages。完整規劃見 `docs/技術規劃書.md`。

## 內容維運

- 文章位於 `src/content/posts/`,格式 MDX,frontmatter schema 見 `src/content.config.ts`
- 演講 metadata 放 `src/content/talks/*.yaml`;簡報 HTML 本體放 `src/pages/talks/*.html`(自帶 style/script,Astro 不注入任何東西)
- 純靜態檔案(PDF、附件)放 `public/files/{年份}/`,網址即 `/files/{年份}/...`,不進 sitemap
- 互動工具頁放 `src/pages/tools/*.astro`(Bare layout + React island,`client:visible`)

## 寫作規範

- 語言:繁體中文(台灣用語),筆名「竹子」,語氣輕鬆但技術精確
- 中英混排:中文與英文/數字間加半形空格
- slug 一律英文 kebab-case(如 `zerotrust-dark-services`)
- 圖片:文章封面放 `src/assets/covers/`(走 astro:assets 最佳化);不需最佳化的截圖放 `public/images/`

## 開發與部署

- 本地開發:`pnpm dev`(所見即所得,無需 preview 環境)
- 建置:`pnpm build`(= `astro build && pagefind --site dist`,含 CJK 搜尋索引)
- commit 前執行 `pnpm build` 確認 schema 驗證與型別通過
- 發文流程:寫 MDX → push `master` → GitHub Actions 約 1–2 分鐘後上線
- GitHub Pages 的 source 需在 repo Settings → Pages 選 "GitHub Actions"

## 既有資產(勿刪,只移動或修改)

- `public/interview/**`:歷年面試作品 demo(原 `interview/`,已移入 public 以維持 `/interview/*` 網址)
- `public/*.html`、`public/*.pdf`:履歷與作品集,網址為 `/resume.html`、`/portfolio.html` 等

## 待辦(見規劃書 Roadmap)

- giscus:開 Discussions、裝 app,把 repoId/categoryId 填入 `src/components/post/Giscus.astro`
- RSS 全文:目前輸出摘要,全文為 Phase 2(見 `src/pages/rss.xml.ts` 註解)
- OG image:Phase 4 以 satori build-time 產生(需 Noto Sans TC subset)
