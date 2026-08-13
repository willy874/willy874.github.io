import type { APIContext } from 'astro';
import { SITE } from '../lib/seo';

// 維持 /sitemap-index.xml 這個既有位址(先前由 @astrojs/sitemap 產生,robots.txt 也指向它),
// 內容指向自建的 /sitemap.xml,避免搜尋引擎既有記錄變 404。
export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${new URL('/sitemap.xml', site).href}</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
