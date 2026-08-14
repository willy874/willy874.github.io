import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../lib/categories';
import { SITE } from '../lib/seo';

// §7.3 sitemap —— 自建而非用 @astrojs/sitemap,理由:
// 1. 需要每篇文章的 lastmod(updatedDate ?? publishDate),整合版拿不到 content 資料
// 2. 未來的轉址 stub 頁必須排除,自建才控得住
//
// changefreq / priority 已移除:Google 公開說明兩者一律忽略,留著只是雜訊。
// lastmod 是唯一仍被採用的 hint,輸出 W3C 日期格式(YYYY-MM-DD)。
//
// /files/**、/interview/**、404 與 stub 頁本來就不在這裡列舉,自然不會進 sitemap。

interface Entry {
  path: string;
  lastmod?: Date;
}

const xmlEscape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 取一組文章中最新的 lastmod(updatedDate 優先,否則 publishDate)
const latestOf = (items: { data: { publishDate: Date; updatedDate?: Date } }[]) =>
  items.reduce<Date | undefined>((acc, p) => {
    const d = p.data.updatedDate ?? p.data.publishDate;
    return !acc || d > acc ? d : acc;
  }, undefined);

// Date → YYYY-MM-DD(以 UTC 為準,和 toISOString 一致)
const toW3CDate = (d: Date) => d.toISOString().slice(0, 10);

export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);
  const posts = await getCollection('posts', (p) => !p.data.draft);
  const newest = latestOf(posts);

  // 靜態頁
  const entries: Entry[] = [
    { path: '/', lastmod: newest },
    { path: '/posts/', lastmod: newest },
    { path: '/posts/categories/', lastmod: newest },
    { path: '/posts/tags/', lastmod: newest },
    { path: '/about/' },
    { path: '/tools/ziwei/' },
  ];

  // 每篇文章
  for (const post of posts) {
    entries.push({
      path: `/posts/${post.id}/`,
      lastmod: post.data.updatedDate ?? post.data.publishDate,
    });
  }

  // 分類頁(lastmod 取該分類最新一篇),空分類跳過
  for (const cat of CATEGORIES) {
    const inCat = posts.filter((p) => p.data.category === cat.name);
    if (inCat.length === 0) continue;
    entries.push({
      path: `/posts/categories/${cat.slug}/`,
      lastmod: latestOf(inCat),
    });
  }

  // 標籤頁(lastmod 取該標籤最新一篇)
  const tags = [...new Set(posts.flatMap((p) => p.data.tags))].sort();
  for (const tag of tags) {
    const tagged = posts.filter((p) => p.data.tags.includes(tag));
    entries.push({
      path: `/posts/tags/${tag}/`,
      lastmod: latestOf(tagged),
    });
  }

  const urls = entries
    .map((e) => {
      const loc = xmlEscape(new URL(e.path, site).href);
      const lastmod = e.lastmod
        ? `\n    <lastmod>${toW3CDate(e.lastmod)}</lastmod>`
        : '';
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
