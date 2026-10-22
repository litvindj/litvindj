import { getAllPosts } from '../lib/blog';
import { SITE, LANGS, SERVICES, servicePath, servicesHubPath, hreflang } from '../lib/services';

const today = new Date().toISOString().split('T')[0];

// One entry per locale, each carrying hreflang alternates for the other locales
const localized = (build, opts) =>
  LANGS.map((lang) => ({
    url: `${SITE}${build(lang)}`,
    lastModified: today,
    alternates: { languages: hreflang(build) },
    ...opts,
  }));

export default function sitemap() {
  const blogIndexPages = localized((l) => `/${l}/blog`, { changeFrequency: 'weekly', priority: 0.7 });

  const blogArticles = LANGS.flatMap((lang) =>
    getAllPosts(lang).map((post) => ({
      url: `${SITE}/${lang}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  );

  const servicePages = [
    ...localized(servicesHubPath, { changeFrequency: 'monthly', priority: 0.9 }),
    ...SERVICES.flatMap((s) => localized((l) => servicePath(l, s.key), { changeFrequency: 'monthly', priority: 0.95 })),
  ];

  return [
    { url: SITE, lastModified: today, changeFrequency: 'monthly', priority: 1.0 },
    ...localized((l) => `/${l}`, { changeFrequency: 'monthly', priority: 0.9 }),
    ...servicePages,
    ...blogIndexPages,
    ...blogArticles,
    ...LANGS.map((l) => ({ url: `${SITE}/${l}/privacy-policy`, lastModified: '2026-05-16', changeFrequency: 'yearly', priority: 0.1 })),
  ];
}
