export default function sitemap() {
  return [
    { url: 'https://litvindj.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: 'https://litvindj.com/en', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://litvindj.com/ru', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://litvindj.com/pl', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
