// 竹子(Willy)個人資訊 —— 取自 GitHub Profile(github.com/willy874),
// 供首頁與關於頁共用,異動一處即可。

export const PROFILE = {
  penName: '竹子',
  name: 'Willy',
  /** 入行時間 */
  since: '2019',
  email: 'willy8742891@gmail.com',
  lineId: 'willy874',
  tagline: '前端工程師 · 讀書會主辦 · 新手教學',
  intro:
    '喜歡研究各種專案設計的實作,平時假日開線上線下讀書會與同領域朋友交流,平日晚間帶新手教學。這裡集中我的文字產出:技術寫作、學習筆記與主題分享。',
};

export interface Social {
  label: string;
  href: string;
  handle: string;
}

export const SOCIALS: Social[] = [
  { label: 'GitHub', href: 'https://github.com/willy874', handle: 'willy874' },
  { label: 'YouTube', href: 'https://www.youtube.com/@f2e-399/videos', handle: '@f2e-399' },
  { label: 'Medium', href: 'https://medium.com/@willy8742891', handle: '@willy8742891' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/willy-shiao-2b0a1617b/', handle: 'Willy Shiao' },
  { label: 'Facebook', href: 'https://www.facebook.com/f2eBamboo', handle: 'f2eBamboo' },
  { label: 'Threads', href: 'https://www.threads.net/@f2e_willy', handle: '@f2e_willy' },
];

export interface Project {
  name: string;
  href: string;
  desc: string;
  tags: string[];
}

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
