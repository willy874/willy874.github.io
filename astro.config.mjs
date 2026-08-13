// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// 方案 A:使用者站台 repo（willy874.github.io），base 保持乾淨的 '/'
// 未來若購買自訂網域，只需加 public/CNAME，此設定不變。
export default defineConfig({
  site: 'https://willy874.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',

  // sitemap 改由 src/pages/sitemap.xml.ts 自建(需要 lastmod / priority,
  // 且要能排除轉址 stub 頁),故不再掛 @astrojs/sitemap。
  integrations: [react(), mdx()],

  markdown: {
    shikiConfig: {
      // 雙主題:隨站台 dark mode 無縫切換(§6.3)
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        // rss.xml.ts 用到 astro:container(RSS 全文渲染),會連帶把 chokidar →
        // fsevents 的原生 .node 檔拉進 bundle,rollup 解析不了。標為 external 即可。
        external: ['fsevents'],
      },
    },
  },
});
