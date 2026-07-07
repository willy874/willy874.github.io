import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// §7.3 RSS。目前輸出摘要(description);全文輸出為 Phase 2 增強:
// 以 experimental_AstroContainer.renderToString(Content) 產生 rendered HTML
// 後填入 `content` 欄位(需搭配 sanitize-html)。此處先保持 build 穩定。
export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: '竹子日誌',
    description: '竹子的技術部落格 — Zero-Trust、前端工程、AI 工作流。',
    site: context.site ?? 'https://willy874.github.io',
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/posts/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>zh-Hant-TW</language>`,
  });
}
