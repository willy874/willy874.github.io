import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// §5 Content Collections Schema
// Astro 5 採 Content Layer,以 glob loader 取代舊 type:'content' / 'data'。
// schema 意圖與規劃書一致。

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      // 匯入的既有文章標題長度不一,不設硬上限;新撰文章建議 ≤ 60 字
      title: z.string(),
      description: z.string().max(200), // 兼作 meta description
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      category: z.string().optional(), // 12 分類區塊之一,見 src/lib/categories.ts
      series: z.string().optional(), // 如 "zero-trust"
      cover: image().optional(), // 走 astro:assets 最佳化
      draft: z.boolean().default(false),
      lang: z.enum(['zh-Hant', 'en']).default('zh-Hant'),
    }),
});

export const collections = { posts };
