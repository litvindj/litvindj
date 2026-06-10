import { getAllPosts, getAllSlugs } from '../lib/blog';

export default function sitemap() {
  const langs = ['en', 'ru', 'pl'];

  const blogIndexPages = langs.map((lang) => ({
    url: `https://litvindj.com/${lang}/blog`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogArticles = langs.flatMap((lang) =>
    getAllPosts(lang).map((post) => ({
      url: `https://litvindj.com/${lang}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  );

  const today = new Date().toISOString().split('T')[0];

  const landingPages = langs.flatMap((lang) => [
    { url: `https://litvindj.com/${lang}/dj-na-wesele-warszawa`,    lastModified: today, changeFrequency: 'monthly', priority: 0.95 },
    { url: `https://litvindj.com/${lang}/dj-korporacyjny-warszawa`, lastModified: today, changeFrequency: 'monthly', priority: 0.95 },
  ]);

  return [
    { url: 'https://litvindj.com',                   lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 1.0 },
    { url: 'https://litvindj.com/en',                lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://litvindj.com/ru',                lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://litvindj.com/pl',                lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 0.9 },
    ...landingPages,
    { url: 'https://litvindj.com/en/privacy-policy', lastModified: '2026-05-16', changeFrequency: 'yearly',  priority: 0.1 },
    { url: 'https://litvindj.com/ru/privacy-policy', lastModified: '2026-05-16', changeFrequency: 'yearly',  priority: 0.1 },
    { url: 'https://litvindj.com/pl/privacy-policy', lastModified: '2026-05-16', changeFrequency: 'yearly',  priority: 0.1 },
    ...blogIndexPages,
    ...blogArticles,
  ];
}
