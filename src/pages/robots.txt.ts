import type { APIContext } from 'astro';
import { SITE } from '../lib/seo';

// robots.txt 由靜態 public/robots.txt 改為動態產生,Sitemap 位址跟著 site 設定走
//(未來換自訂網域不必手改)。
//
// AI 爬蟲政策:全部放行。含訓練型(GPTBot、Google-Extended、ClaudeBot)與
// 檢索型(OAI-SearchBot、PerplexityBot、Claude-SearchBot)。目的是最大化
// 被 AI 檢索引擎引用的機會。若日後要改為只放行檢索型,把訓練型改成 Disallow: / 即可。
const AI_AGENTS = [
  'GPTBot', // OpenAI 訓練
  'OAI-SearchBot', // ChatGPT Search 檢索
  'ChatGPT-User', // ChatGPT 使用者即時抓取
  'ClaudeBot', // Anthropic
  'Claude-Web',
  'Claude-SearchBot',
  'anthropic-ai',
  'Google-Extended', // Gemini / AI Overviews 訓練
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'CCBot', // Common Crawl
  'cohere-ai',
  'DuckAssistBot',
  'YouBot',
];

export async function GET(context: APIContext) {
  const site = context.site ?? new URL(SITE.url);

  const body = `# 竹子日誌 — ${site.origin}
# 一般搜尋引擎
User-agent: *
Allow: /

# AI 爬蟲(訓練 + 檢索)一律放行
${AI_AGENTS.map((a) => `User-agent: ${a}\nAllow: /`).join('\n\n')}

# 給 LLM 的站台導覽
# ${new URL('/llms.txt', site).href}
# ${new URL('/llms-full.txt', site).href}

Sitemap: ${new URL('/sitemap-index.xml', site).href}
Sitemap: ${new URL('/sitemap.xml', site).href}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
