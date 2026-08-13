import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../lib/categories';
import { SITE } from '../lib/seo';

// §7.3 sitemap —— 自建而非用 @astrojs/sitemap,理由:
// 1. 需要每篇文章的 lastmod(updatedDate ?? publishDate),整合版拿不到 content 資料
// 2. 需要依頁面型態給 priority / changefreq
// 3. 未來的轉址 stub 頁必須排除,自建才控得住
//
// /files/**、/interview/**、404 與 stub 頁本來就不在這裡列舉,自然不會進 sitemap。

interface Entry {
  path: string;
  lastmod?: Date;
  changefreq: string;
  priority: string;
}

const xmlEscape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);
  const posts = await getCollection('posts', (p) => !p.data.draft);

  const newest = posts.reduce<Date | undefined>((acc, p) => {
    const d = p.data.updatedDate ?? p.data.publishDate;
    return !acc || d > acc ? d : acc;
  }, undefined);

  const entries: Entry[] = [
    { path: '/', lastmod: newest, changefreq: 'daily', priority: '1.0' },
    { path: '/posts/', lastmod: newest, changefreq: 'daily', priority: '0.9' },
    {
      path: '/posts/categories/',
      lastmod: newest,
      changefreq: 'weekly',
      priority: '0.7',
    },
    {
      path: '/posts/tags/',
      lastmod: newest,
      changefreq: 'weekly',
      priority: '0.5',
    },
    { path: '/about/', changefreq: 'monthly', priority: '0.7' },
    { path: '/tools/ziwei/', changefreq: 'monthly', priority: '0.5' },
  ];

  for (const post of posts) {
    entries.push({
      path: `/posts/${post.id}/`,
      lastmod: post.data.updatedDate ?? post.data.publishDate,
      changefreq: 'yearly',
      priority: '0.8',
    });
  }

  // 分類頁的 lastmod 取該分類最新一篇
  for (const cat of CATEGORIES) {
    const inCat = posts.filter((p) => p.data.category === cat.name);
    if (inCat.length === 0) continue;
    entries.push({
      path: `/posts/categories/${cat.slug}/`,
      lastmod: latestOf(inCat),
      changefreq: 'weekly',
      priority: '0.6',
    });
  }

  const tags = [...new Set(posts.flatMap((p) => p.data.tags))].sort();
  for (const tag of tags) {
    const tagged = posts.filter((p) => p.data.tags.includes(tag));
    entries.push({
      path: `/posts/tags/${tag}/`,
      lastmod: latestOf(tagged),
      changefreq: 'weekly',
      priority: '0.4',
    });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => {
    const loc = xmlEscape(new URL(e.path, site).href);
    const lastmod = e.lastmod
      ? `\n    <lastmod>${e.lastmod.toISOString()}</lastmod>`
      : '';
    return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

function latestOf(items: { data: { publishDate: Date; updatedDate?: Date } }[]) {
  return items.reduce<Date | undefined>((acc, p) => {
    const d = p.data.updatedDate ?? p.data.publishDate;
    return !acc || d > acc ? d : acc;
  }, undefined);
}
