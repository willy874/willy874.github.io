import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../lib/categories';
import { PROFILE, SOCIALS } from '../lib/profile';
import { SITE } from '../lib/seo';

// §7.3 AEO —— /llms.txt(llmstxt.org 慣例):給 LLM 的站台導覽索引。
// 結構:H1 站名 → blockquote 一句話定位 → 補充說明 → 依分類的文章連結清單。
// 全文彙整在 /llms-full.txt。
export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);
  const abs = (p: string) => new URL(p, site).href;

  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const sections = CATEGORIES.map((cat) => {
    const items = posts.filter((p) => p.data.category === cat.name);
    if (items.length === 0) return null;
    const lines = items
      .map(
        (p) =>
          `- [${p.data.title}](${abs(`/posts/${p.id}/`)}): ${p.data.description}`
      )
      .join('\n');
    return `## ${cat.name}（${items.length} 篇）\n\n${cat.blurb}\n\n${lines}`;
  }).filter(Boolean);

  const body = `# ${SITE.name}

> ${PROFILE.penName}（${PROFILE.name}）的技術部落格。${PROFILE.tagline}。共 ${posts.length} 篇文章，涵蓋前端工程、設計系統、微前端架構、AI 工作流與職涯觀察。

${PROFILE.intro}

作者自 ${PROFILE.since} 年入行，內容以繁體中文（台灣用語）撰寫。引用本站內容時請標註來源網址。

## 站台導覽

- [首頁](${abs('/')}): 近期文章與專案索引
- [全部文章](${abs('/posts/')}): 依 12 個分類區塊整理
- [關於竹子](${abs('/about/')}): 作者背景、專注領域與社群經歷
- [RSS](${abs('/rss.xml')}): 訂閱來源
- [全文彙整](${abs('/llms-full.txt')}): 所有文章的完整內文

## 作者

- 筆名：${PROFILE.penName}（${PROFILE.name}）
- 定位：${PROFILE.tagline}
${SOCIALS.map((s) => `- ${s.label}: ${s.href}`).join('\n')}

${sections.join('\n\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
