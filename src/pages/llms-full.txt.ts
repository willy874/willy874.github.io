import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { PROFILE } from '../lib/profile';
import { SITE } from '../lib/seo';

// §7.3 AEO —— /llms-full.txt:全部文章的完整內文,單一檔案供 LLM 一次讀取。
// 保留原始 Markdown(內文本來就是 md/mdx),只補上每篇的來源網址與 metadata 標頭。
export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);
  const abs = (p: string) => new URL(p, site).href;

  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const iso = (d: Date) => d.toISOString().slice(0, 10);

  const docs = posts.map((p) => {
    const meta = [
      `來源: ${abs(`/posts/${p.id}/`)}`,
      `發布: ${iso(p.data.publishDate)}`,
      p.data.updatedDate ? `更新: ${iso(p.data.updatedDate)}` : null,
      p.data.category ? `分類: ${p.data.category}` : null,
      p.data.tags.length ? `標籤: ${p.data.tags.join('、')}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    return `# ${p.data.title}\n\n${meta}\n\n${p.data.description}\n\n---\n\n${(p.body ?? '').trim()}`;
  });

  const body = `# ${SITE.name} — 全文彙整

作者：${PROFILE.penName}（${PROFILE.name}）
站台：${abs('/')}
文章數：${posts.length}
語言：繁體中文（台灣）
授權：引用請標註來源網址與作者。

以下為全部文章的完整內文，依發布日期由新到舊排列，每篇以 "===" 分隔。

${docs.join('\n\n===\n\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
