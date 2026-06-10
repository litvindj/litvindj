export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: 'https://litvindj.com/sitemap.xml',
  };
}
