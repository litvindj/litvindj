import { SERVICES, SITE, LANGS, getService, getServiceBySlug, servicePath, servicesHubPath, hreflang } from '../../lib/services';
import { getServicesContent, normLang } from '../../lib/content';

const OG_LOCALE = { en: 'en_US', pl: 'pl_PL', ru: 'ru_RU' };

function meta({ title, description, lang, build }) {
  const url = `${SITE}${build(lang)}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages: hreflang(build) },
    openGraph: {
      type: 'website',
      url,
      siteName: 'DJ Litvin',
      title,
      description,
      locale: OG_LOCALE[lang],
      images: [{ url: `${SITE}/og-image.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${SITE}/og-image.jpg`] },
  };
}

export function serviceParams(langs) {
  return langs.flatMap((lang) => SERVICES.map((s) => ({ lang, slug: s.slugs[lang] })));
}

export function hubParams(langs) {
  return langs.map((lang) => ({ lang }));
}

export function resolveService(params, langs) {
  const lang = normLang(params.lang);
  if (!langs.includes(params.lang)) return null;
  const service = getServiceBySlug(lang, params.slug);
  return service ? { lang, service } : null;
}

export function serviceMetadata(lang, service) {
  const c = getServicesContent(lang).items[service.key];
  return meta({ title: { absolute: c.title }, description: c.description, lang, build: (l) => servicePath(l, service.key) });
}

export function hubMetadata(lang) {
  const h = getServicesContent(lang).hub;
  return meta({ title: { absolute: h.title }, description: h.description, lang, build: (l) => servicesHubPath(l) });
}

export { LANGS };
