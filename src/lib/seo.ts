// §7.3 SEO / AEO 共用常數與 JSON-LD builder。
// 結構化資料同時服務傳統搜尋（rich result）與 AI 檢索（實體辨識、引用來源）。
import { PROFILE, SOCIALS } from './profile';

export const SITE = {
  url: 'https://willy874.github.io',
  name: '竹子日誌',
  description:
    '竹子日誌 — 以竹子為筆名經營的技術部落格,涵蓋 Zero-Trust、前端工程、AI 工作流。',
  lang: 'zh-Hant-TW',
  locale: 'zh_TW',
  ogImage: '/images/og-default.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

/** 站台語系代碼 → html lang / og:locale */
export const LANG_MAP = {
  'zh-Hant': { html: 'zh-Hant-TW', locale: 'zh_TW' },
  en: { html: 'en', locale: 'en_US' },
} as const;

/**
 * 相對路徑轉絕對網址。一律走 URL 建構子,讓中文路徑 percent-encode 成與
 * canonical / sitemap 完全一致的形式（JSON-LD 與 canonical 不一致會讓
 * 搜尋引擎當成兩個 URL）。
 */
export const absUrl = (path: string, site?: URL): string =>
  new URL(path, site ?? SITE.url).href;

export const postUrl = (id: string, site?: URL) => absUrl(`/posts/${id}/`, site);
export const categoryUrl = (slug: string, site?: URL) =>
  absUrl(`/posts/categories/${slug}/`, site);
export const tagUrl = (tag: string, site?: URL) =>
  absUrl(`/posts/tags/${tag}/`, site);

/** 站台作者實體 —— 供 Person / author 欄位共用,`@id` 讓各處引用同一個實體。 */
export const personId = `${SITE.url}/about/#person`;
export const websiteId = `${SITE.url}/#website`;
export const blogId = `${SITE.url}/#blog`;

export function buildPerson() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: PROFILE.penName,
    alternateName: PROFILE.name,
    description: PROFILE.tagline,
    url: `${SITE.url}/about/`,
    email: PROFILE.email,
    jobTitle: '前端工程師',
    knowsAbout: [
      '前端工程',
      'Design System',
      '微前端',
      'TypeScript',
      'Monorepo',
      'AI 工作流',
    ],
    sameAs: SOCIALS.map((s) => s.href),
  };
}

export function buildWebSite() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { '@id': personId },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/posts/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBlog() {
  return {
    '@type': 'Blog',
    '@id': blogId,
    url: `${SITE.url}/posts/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    author: { '@id': personId },
    publisher: { '@id': personId },
  };
}

export interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  image: string;
  publishDate: Date;
  updatedDate?: Date;
  tags?: string[];
  category?: string;
  lang?: string;
  /** 純文字字數,供 wordCount */
  wordCount?: number;
}

export function buildBlogPosting(p: BlogPostingInput) {
  return {
    '@type': 'BlogPosting',
    '@id': `${p.url}#article`,
    headline: p.title,
    description: p.description,
    url: p.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': p.url },
    image: [p.image],
    datePublished: p.publishDate.toISOString(),
    dateModified: (p.updatedDate ?? p.publishDate).toISOString(),
    inLanguage: p.lang ?? SITE.lang,
    author: { '@id': personId },
    publisher: { '@id': personId },
    isPartOf: { '@id': blogId },
    ...(p.tags?.length ? { keywords: p.tags.join(', ') } : {}),
    ...(p.category ? { articleSection: p.category } : {}),
    ...(p.wordCount ? { wordCount: p.wordCount } : {}),
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function buildBreadcrumb(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** 分類 / 標籤這類清單頁 */
export function buildCollectionPage(input: {
  name: string;
  description: string;
  url: string;
  items: { title: string; url: string }[];
}) {
  return {
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: SITE.lang,
    isPartOf: { '@id': websiteId },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: input.items.length,
      itemListElement: input.items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.title,
        url: it.url,
      })),
    },
  };
}

/** 把多個節點包成單一 @graph,避免每頁塞好幾個 script。 */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
