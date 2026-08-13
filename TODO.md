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

## RSS / SEO / AEO(規劃見 `docs/SEO-AEO規劃.md`)

已完成(批次 1、2):

- [x] JSON-LD 結構化資料:`src/lib/seo.ts` + `src/components/seo/JsonLd.astro`
      (文章 BlogPosting + BreadcrumbList、首頁 WebSite/Blog/Person、關於頁 ProfilePage、
      分類與標籤頁 CollectionPage)
- [x] Base.astro 補齊 meta:author、robots、article:published/modified_time、
      og:image 尺寸與 alt、動態 html lang、canonical 尾斜線正規化
- [x] Post.astro cover 進 OG(原本是 `undefined : undefined` 死碼)
- [x] sitemap 自建(`src/pages/sitemap.xml.ts`),含 lastmod / changefreq / priority;
      `/sitemap-index.xml` 保留舊位址指向它;已移除 `@astrojs/sitemap`
- [x] robots.txt 改動態(`src/pages/robots.txt.ts`),明列 18 個 AI 爬蟲一律 Allow
- [x] `/llms.txt`(站台導覽索引)與 `/llms-full.txt`(全文彙整,1.0 MB)
- [x] RSS 全文輸出(`content:encoded`,AstroContainer + sanitize-html)
- [x] OG 預設圖 `public/images/og-default.png`(`node scripts/gen-og-default.mjs` 可重產)

待辦(批次 3、4):

- [ ] **description 重寫**:423/460 篇是內文前 120 字硬切、句子斷半且與首段重複,分批改寫
- [ ] `Post.astro` 移除把 description 當導言渲染(與內文首段一字不差)
- [ ] H2 結構補強:455/460 篇無任何 H2,TOC 空轉且 AI 無錨點可引用;優先處理 >800 字技術文
- [ ] 6 組重複標題處理;11 個單篇 tag 合併
- [ ] `/posts/tags/`、`/posts/categories/` 索引頁
- [ ] **slug 英文化**:460 篇改英文 kebab-case,舊中文路徑產 redirect stub(noindex、不進 sitemap)
- [ ] 字型自架(`@fontsource-variable/noto-sans-tc`)消除 Google Fonts render-blocking
- [ ] GSC / Bing 驗證與提交 sitemap
- [ ] OG image 每篇動態產生(Phase 4):build-time 以 satori 系方案產生,需 Noto Sans TC subset

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
