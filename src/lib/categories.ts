import { getCollection, type CollectionEntry } from 'astro:content';

// 竹子日誌 12 分類區塊(對應 note「竹子日誌文章」的資料夾分類,依優先序)。
// name 是 frontmatter 的 category 值與顯示名稱;slug 是英文,同時也是內容子資料夾名,
// 所以文章網址是 /posts/{slug}/{文章 slug}/,分類頁是 /posts/categories/{slug}/。
export interface Category {
  /** 顯示名稱,亦即 frontmatter category 值 */
  name: string;
  /** 英文 URL slug,同時是 src/content/posts/ 下的子資料夾名 */
  slug: string;
  /** 一句話說明 */
  blurb: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { name: '前端技術', slug: 'frontend', emoji: '🧩', blurb: 'HTML/CSS/JS、瀏覽器、框架與渲染效能' },
  { name: '工程實務', slug: 'engineering', emoji: '🛠️', blurb: '架構、微前端、模組化、測試、重構與設計模式' },
  { name: '設計與設計系統', slug: 'design-system', emoji: '🎨', blurb: 'Design System、Design Token、Figma 與 UI' },
  { name: 'AI 與工具', slug: 'ai-tools', emoji: '🤖', blurb: 'LLM、Claude、提示工程與開發工具' },
  { name: '職涯與工作', slug: 'career', emoji: '💼', blurb: '求職、面試、薪資、團隊與職場觀察' },
  { name: '商業與創業', slug: 'business', emoji: '📈', blurb: '創業、商業模式、行銷與 Side Project' },
  { name: '學習與成長', slug: 'learning', emoji: '🌱', blurb: '學習方法、讀書心得與知識補給' },
  { name: '議題討論', slug: 'discussion', emoji: '💬', blurb: '對社會與產業議題的觀察與討論' },
  { name: '短文與心得', slug: 'notes', emoji: '✍️', blurb: '短文、好文分享與心得感想' },
  { name: '個人反思', slug: 'reflection', emoji: '🪞', blurb: '自我檢視、心情、生活與寫作' },
  { name: '活動與社群', slug: 'community', emoji: '🎪', blurb: '主辦活動、活動紀錄與研討會' },
  { name: '日更系列', slug: 'daily', emoji: '📅', blurb: '「關於我與前端無關緊要的分享」連載' },
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
