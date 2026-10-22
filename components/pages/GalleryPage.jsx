import PageShell from '../layout/PageShell';
import Breadcrumbs, { breadcrumbSchema } from '../layout/Breadcrumbs';
import PhotoGallery from '../gallery/PhotoGallery';
import { ALL_PHOTOS, GALLERY_TEXT } from '../../lib/gallery';
import { getServicesContent } from '../../lib/content';
import { SITE, pagePath, hreflang } from '../../lib/services';

const OG_LOCALE = { en: 'en_US', pl: 'pl_PL', ru: 'ru_RU' };

export function galleryMetadata(lang) {
  const g = GALLERY_TEXT[lang];
  const build = (l) => pagePath(l, 'gallery');
  const url = `${SITE}${build(lang)}`;
  return {
    title: { absolute: g.title },
    description: g.description,
    alternates: { canonical: url, languages: hreflang(build) },
    openGraph: { type: 'website', url, siteName: 'DJ Litvin', title: g.title, description: g.description, locale: OG_LOCALE[lang], images: [{ url: `${SITE}/og-image.jpg`, width: 1200, height: 630, alt: g.title }] },
    twitter: { card: 'summary_large_image', title: g.title, description: g.description, images: [`${SITE}/og-image.jpg`] },
  };
}

export default function GalleryPage({ lang }) {
  const g = GALLERY_TEXT[lang];
  const { ui } = getServicesContent(lang);
  const path = pagePath(lang, 'gallery');
  const crumbs = [{ name: ui.home, href: `/${lang}` }, { name: g.crumb, href: path }];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ImageGallery',
        url: `${SITE}${path}`,
        name: g.title,
        inLanguage: lang,
        about: { '@id': `${SITE}/#person` },
        image: ALL_PHOTOS.map((f) => `${SITE}/images/${f}`),
      },
      breadcrumbSchema(crumbs),
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={crumbs} />
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-12 md:pb-16">
        <h1 className="font-header uppercase leading-none text-5xl md:text-8xl">
          {g.h1[0]}{' '}
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{g.h1[1]}</span>
        </h1>
      </section>
      <PhotoGallery photos={ALL_PHOTOS} showMore={false} hideTitle />
    </PageShell>
  );
}
