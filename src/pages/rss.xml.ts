import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import type { APIContext } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import sanitizeHtml from 'sanitize-html';
import { SITE } from '../lib/seo';

// §7.3 RSS —— 全文輸出。
// AI 檢索器與 RSS 閱讀器都吃 <content:encoded>,只給摘要等於少一個被完整讀取的管道。
// 以 AstroContainer 把每篇 Content 元件渲染成 HTML,再 sanitize 後填入 content 欄位。
export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);
  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  // 文章全為純 Markdown、無 framework island,故不需載入 react renderer
  //(載入 astro:container 的 loadRenderers 會把 vite/rollup 的原生模組拉進 build)。
  const container = await AstroContainer.create();

  const items = [];
  for (const post of posts) {
    const { Content } = await render(post);
    const raw = await container.renderToString(Content);

    // 相對連結轉絕對(RSS 閱讀器不知道站台根在哪),再過濾危險標籤
    const html = sanitizeHtml(raw, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img',
        'figure',
        'figcaption',
        'h1',
        'h2',
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
        a: ['href', 'title', 'rel'],
        '*': ['id'],
      },
      transformTags: {
        a: (tagName, attribs) => ({
          tagName,
          attribs: {
            ...attribs,
            ...(attribs.href?.startsWith('/')
              ? { href: new URL(attribs.href, site).href }
              : {}),
          },
        }),
        img: (tagName, attribs) => ({
          tagName,
          attribs: {
            ...attribs,
            ...(attribs.src?.startsWith('/')
              ? { src: new URL(attribs.src, site).href }
              : {}),
          },
        }),
      },
    });

    items.push({
      title: post.data.title,
      description: post.data.description,
      content: html,
      pubDate: post.data.publishDate,
      link: `/posts/${post.id}/`,
      categories: post.data.tags,
      author: `${SITE.name}（竹子）`,
    });
  }

  return rss({
    title: SITE.name,
    description: SITE.description,
    site,
    // 與 canonical 一致(頁面實際位址帶尾斜線),避免 feed 連結被當成另一個 URL
    trailingSlash: true,
    items,
    customData: `<language>zh-Hant-TW</language>`,
  });
}
