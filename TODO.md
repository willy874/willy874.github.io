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

- [x] `Post.astro` 移除把 description 當導言渲染(description 只走 meta / JSON-LD)
- [x] 6 組重複標題處理:15 篇改成唯一且有描述性的標題,slug/網址不動,全站標題已唯一
- [x] `/posts/categories/`、`/posts/tags/` 索引頁(含 CollectionPage JSON-LD、進 sitemap,
      `/posts/` 與各分類/標籤頁互相接上)
- [x] 字型自架:`@fontsource-variable/noto-sans-tc` + `jetbrains-mono`,拿掉 Google Fonts
      的 preconnect 與外部樣式表;代價是主 CSS 由 ~20 KB gz 漲到 53 KB gz(字型 @font-face
      約佔 33 KB gz),換掉兩個 cross-origin 往返,且同源可全站快取
- [x] 11 個單篇 tag 合併:Canvas/Skill→工具、DDD→設計模式、團隊協作→團隊、工作流→工程實務、
      人物→故事、好文分享→短文分享、寫作→創作、心得感想→心得、社會→反思。
      標籤數 78→68,單篇 tag 歸零(每個單篇 tag 都會生一頁 thin content)
- [x] H2 結構補強:>800 字無 H2 的 82 篇全部補完,共補 360 個 H2。只插小標、不改動原文,
      TOC 不再空轉。順手撿到的匯入殘留一併修掉(見下)
- [x] 匯入殘留格式(原「內文殘留格式」項):
      - 3 篇整塊原始 frontmatter 留在正文、`tags: []`、description 吃到 YAML
        (`AI-選擇性閱讀`、`關於-AI-幫我做了什麼`、`關於環境變數`、`長頭髮`)
      - 裸行小標(掉了 markdown 標記)補回 `##`/`###`:微前端系列（六）（十三）、
        Tanstack-Query、商業模式、發電系統、關於 AI 幫我做了什麼
      - 井字後無空白的殘留(`#需求`、`#當然！`⋯⋯)、一個空 H1、遠端工作的現實被黏成一行的清單
      - `今天是我在聯禦科技最後一天⋯`整段內文被當成 title,改回正常標題
- [x] 兩個未歸類散檔已歸位:`工程實務/零信任.md`、`AI與工具/溝通的渠道.md`
- [ ] **description 重寫**:423/460 篇是內文前 120 字硬切、句子斷半且與首段重複,分批改寫
      (已不再顯示於頁面,但仍是 meta description / JSON-LD / RSS 摘要的內容)
- [ ] 近重複內容合併決策(需要你決定,我沒動):
      - `工程實務/依賴循環.md`(2024-04)vs `依賴循環-2.md`(2023-09),內文約 95% 相同
      - `議題討論/可以被複製的成功是假的.md`(2018-02)vs
        `［定期短文］可以被複製的成功是假的.md`(2018-07),約 90% 相同
      - `議題討論/工業化的演進.md`(2017-12)vs `［知識小補給］工業化的演進.md`(2018-02)
      - `議題討論/淺談網路行銷.md`(2018-03)vs `［議題討論］網路行銷.md`(2018-02)
      - `短文與心得/Tanstack-Query.md` 僅 18 字,是沒有內文的殘稿
      - `議題討論/［知識小補給］發電系統.md`(下)結尾斷在「再利用爆震的力量」,文章不完整
      需決定保留哪篇、另一篇轉 canonical 或撤下
- [ ] **slug 英文化**:460 篇改英文 kebab-case,舊中文路徑產 redirect stub(noindex、不進 sitemap)
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
