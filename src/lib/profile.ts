// 竹子(Willy)個人資訊 —— 取自 GitHub Profile(github.com/willy874),
// 供首頁與關於頁共用,異動一處即可。

export const PROFILE = {
  penName: '竹子',
  name: 'Willy',
  /** 入行時間 */
  since: '2019',
  email: 'willy8742891@gmail.com',
  lineId: 'willy874',
  tagline: '前端工程師 · 設計系統 · 微前端架構',
  intro:
    '喜歡研究各種專案設計的實作,平時假日開線上線下讀書會與同領域朋友交流,平日晚間帶新手教學。這裡集中我的文字產出:技術寫作、學習筆記與主題分享。',
};

/** icon 對應 SocialLinks.astro 內的品牌 SVG key */
export type SocialIcon = 'github' | 'youtube' | 'medium' | 'linkedin' | 'facebook' | 'threads';

export interface Social {
  label: string;
  href: string;
  handle: string;
  icon: SocialIcon;
}

export const SOCIALS: Social[] = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/willy874', handle: 'willy874' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@f2e-399/videos', handle: '@f2e-399' },
  { icon: 'medium', label: 'Medium', href: 'https://medium.com/@willy8742891', handle: '@willy8742891' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/willy-shiao-2b0a1617b/', handle: 'Willy Shiao' },
  { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/f2eBamboo', handle: 'f2eBamboo' },
  { icon: 'threads', label: 'Threads', href: 'https://www.threads.net/@f2e_willy', handle: '@f2e_willy' },
];

export interface Project {
  name: string;
  href: string;
  desc: string;
  tags: string[];
}

export interface Focus {
  title: string;
  desc: string;
}

/** 專注領域 —— 取自歷年工作經歷的共通主線 */
export const FOCUS: Focus[] = [
  {
    title: '設計系統與 UI 元件庫',
    desc: '從 Design Token 到 Primitive Component,推動設計師與前端的協作與共用。',
  },
  {
    title: '微前端與系統架構',
    desc: '私有 Micro Frontend Framework、Monorepo、Module Federation 的設計與落地。',
  },
  {
    title: '工程實務',
    desc: '單元測試文化、型別系統(TypeScript / JSDoc)、打包工具鏈(Vite / Rollup / Webpack)。',
  },
];

export interface Community {
  text: string;
  href?: string;
}

/** 社群經歷 —— 演講、教學、開源與社群 Side Project */
export const COMMUNITY: Community[] = [
  { text: '獨立舉辦 30+ 人的技術交流活動' },
  {
    text: '20+ 場線上直播主題演講、60+ 場線上課程教學',
    href: 'https://www.youtube.com/@f2e-399',
  },
  {
    text: '帶領 20+ 位前端與 UI Designer 共同開發開源 Design System',
    href: 'https://github.com/willy874/bam-library',
  },
  {
    text: '2024 iThome 鐵人賽・微前端主題完賽',
    href: 'https://ithelp.ithome.com.tw/users/20132666/ironman/7130',
  },
  {
    text: '2024 COSCUP Side Project 議程軌講者',
    href: 'https://coscup.org/2024/zh-TW/session/LFMSQG',
  },
  {
    text: '2025 JSDC 小聚講者・SSR 的 Auth 機制踩坑分享',
    href: 'https://www.accupass.com/event/2505271335371036315866',
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'ui-library-architecture',
    href: 'https://github.com/willy874/ui-library-architecture',
    desc: '以 Zag.js 為基礎開發的 Primitive UI Library。',
    tags: ['TypeScript', '設計系統', 'UI'],
  },
  {
    name: 'cms-ddd-architecture',
    href: 'https://github.com/willy874/cms-ddd-architecture',
    desc: '以 Monorepo 建構專案結構,從底層實作各式功能的系統架構規劃。',
    tags: ['DDD', 'Monorepo', '架構'],
  },
  {
    name: 'poc-micro-frontend',
    href: 'https://github.com/willy874/poc-micro-frontend',
    desc: '微前端實作 POC,針對各種打包場景進行測試。',
    tags: ['微前端', 'POC'],
  },
  {
    name: 'BambooDiaryBlog',
    href: 'https://github.com/willy874/BambooDiaryBlog',
    desc: '集中所有文字產出:寫作、學習筆記與主題分享(本站內容來源)。',
    tags: ['寫作', '筆記'],
  },
];
