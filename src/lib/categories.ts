import { getCollection, type CollectionEntry } from 'astro:content';

// 竹子日誌 12 分類區塊(對應 note「竹子日誌文章」的資料夾分類,依優先序)。
// name 同時是文章 frontmatter 的 category 值與內容資料夾名(去空白)。
export interface Category {
  /** 顯示名稱,亦即 frontmatter category 值 */
  name: string;
  /** URL slug 與內容子資料夾名(name 去空白) */
  slug: string;
  /** 一句話說明 */
  blurb: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { name: '前端技術', slug: '前端技術', emoji: '🧩', blurb: 'HTML/CSS/JS、瀏覽器、框架與渲染效能' },
  { name: '工程實務', slug: '工程實務', emoji: '🛠️', blurb: '架構、微前端、模組化、測試、重構與設計模式' },
  { name: '設計與設計系統', slug: '設計與設計系統', emoji: '🎨', blurb: 'Design System、Design Token、Figma 與 UI' },
  { name: 'AI 與工具', slug: 'AI與工具', emoji: '🤖', blurb: 'LLM、Claude、提示工程與開發工具' },
  { name: '職涯與工作', slug: '職涯與工作', emoji: '💼', blurb: '求職、面試、薪資、團隊與職場觀察' },
  { name: '商業與創業', slug: '商業與創業', emoji: '📈', blurb: '創業、商業模式、行銷與 Side Project' },
  { name: '學習與成長', slug: '學習與成長', emoji: '🌱', blurb: '學習方法、讀書心得與知識補給' },
  { name: '議題討論', slug: '議題討論', emoji: '💬', blurb: '對社會與產業議題的觀察與討論' },
  { name: '短文與心得', slug: '短文與心得', emoji: '✍️', blurb: '短文、好文分享與心得感想' },
  { name: '個人反思', slug: '個人反思', emoji: '🪞', blurb: '自我檢視、心情、生活與寫作' },
  { name: '活動與社群', slug: '活動與社群', emoji: '🎪', blurb: '主辦活動、活動紀錄與研討會' },
  { name: '日更系列', slug: '日更系列', emoji: '📅', blurb: '「關於我與前端無關緊要的分享」連載' },
];

export const categoryBySlug = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
export const categoryByName = (name?: string) =>
  name ? CATEGORIES.find((c) => c.name === name) : undefined;

/** 取得所有已發布文章(過濾 draft),依發布日新到舊排序 */
export async function getPublishedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  return posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
}

/** 某分類的文章 */
export async function getPostsByCategory(name: string) {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.category === name);
}
