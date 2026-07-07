import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// §5 Content Collections Schema
// Astro 5 採 Content Layer,以 glob loader 取代舊 type:'content' / 'data'。
// schema 意圖與規劃書一致。

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160), // 兼作 meta description
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      series: z.string().optional(), // 如 "zero-trust"
      cover: image().optional(), // 走 astro:assets 最佳化
      draft: z.boolean().default(false),
      lang: z.enum(['zh-Hant', 'en']).default('zh-Hant'),
    }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(), // 場合,如 "JSDC 2026"
    date: z.coerce.date(),
    slideUrl: z.string(), // /talks/zerotrust-2026
    pdfUrl: z.string().optional(), // /files/2026/....pdf
    videoUrl: z.string().url().optional(),
    abstract: z.string(),
  }),
});

export const collections = { posts, talks };
