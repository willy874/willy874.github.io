// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 方案 A:使用者站台 repo（willy874.github.io），base 保持乾淨的 '/'
// 未來若購買自訂網域，只需加 public/CNAME，此設定不變。
export default defineConfig({
  site: 'https://willy874.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',

  integrations: [
    react(),
    mdx(),
    sitemap({
      // /files/** 為純靜態檔案庫、/interview/** 為既有作品,皆不進 sitemap
      filter: (page) =>
        !page.includes('/files/') &&
        !page.includes('/interview/'),
    }),
  ],

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
  },
});
