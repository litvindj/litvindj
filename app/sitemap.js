export default function sitemap() {
  const lastModified = '2026-05-16';
  return [
    { url: 'https://litvindj.com',                      lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: 'https://litvindj.com/en',                   lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://litvindj.com/ru',                   lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://litvindj.com/pl',                   lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://litvindj.com/en/privacy-policy',    lastModified, changeFrequency: 'yearly',  priority: 0.2 },
    { url: 'https://litvindj.com/ru/privacy-policy',    lastModified, changeFrequency: 'yearly',  priority: 0.2 },
    { url: 'https://litvindj.com/pl/privacy-policy',    lastModified, changeFrequency: 'yearly',  priority: 0.2 },
  ];
}
