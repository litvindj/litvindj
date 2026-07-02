import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getAllSlugs } from '../../../../lib/blog';

export async function generateStaticParams() {
  const langs = ['en', 'ru', 'pl'];
  const params = [];
  for (const lang of langs) {
    const slugs = getAllSlugs(lang);
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  params = await params;
  const post = getPost(params.lang, params.slug);
  if (!post) return {};
  const base = 'https://litvindj.com';
  const url = `${base}/${params.lang}/blog/${params.slug}`;
  const locales = { en: 'en_US', ru: 'ru_RU', pl: 'pl_PL' };
  return {
    title: `${post.title} — DJ Litvin`,
    description: post.description,
    alternates: {
      canonical: url,
      languages: {
        'en': `${base}/en/blog/${params.slug}`,
        'ru': `${base}/ru/blog/${params.slug}`,
        'pl': `${base}/pl/blog/${params.slug}`,
        'x-default': `${base}/en/blog/${params.slug}`,
      },
    },
    openGraph: {
      title: `${post.title} — DJ Litvin`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url,
      siteName: 'DJ Litvin',
      locale: locales[params.lang] || 'en_US',
      images: [{ url: `${base}/og-image.jpg`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — DJ Litvin`,
      description: post.description,
      images: [`${base}/og-image.jpg`],
    },
  };
}

export default async function BlogPostPage({ params }) {
  params = await params;
  const lang = params.lang || 'en';
  const post = getPost(lang, params.slug);

  if (!post) notFound();

  const labels = {
    en: { back: '← Back to Blog', tag: 'Article', ctaTitle: 'Ready to discuss your event?', ctaBtn: 'Get in Touch', ctaDesc: 'Tell me about your event — dates, format, venue. I\'ll get back to you within 24 hours.' },
    ru: { back: '← Назад к блогу', tag: 'Статья', ctaTitle: 'Готовы обсудить ваше мероприятие?', ctaBtn: 'Написать мне', ctaDesc: 'Расскажите о вашем мероприятии — дата, формат, площадка. Отвечу в течение 24 часов.' },
    pl: { back: '← Wróć do bloga', tag: 'Artykuł', ctaTitle: 'Gotowy omówić swój event?', ctaBtn: 'Napisz do mnie', ctaDesc: 'Powiedz mi o swoim evencie — data, format, venue. Odezwę się w ciągu 24 godzin.' },
  };
  const t = labels[lang] || labels.en;

  const base = 'https://litvindj.com';
  const url = `${base}/${lang}/blog/${params.slug}`;
  const blogLabel = { en: 'Blog', ru: 'Блог', pl: 'Blog' }[lang] || 'Blog';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: lang,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        image: `${base}/og-image.jpg`,
        author: { '@id': `${base}/#person` },
        publisher: { '@id': `${base}/#business` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'DJ Litvin', item: `${base}/${lang}` },
          { '@type': 'ListItem', position: 2, name: blogLabel, item: `${base}/${lang}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="bg-dark text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="border-b border-white/5 py-6 px-6 md:px-12">
        <Link href={`/${lang}/blog`} className="font-header text-beige uppercase tracking-widest text-xs hover:text-white transition-colors duration-300">
          {t.back}
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="font-header text-beige uppercase tracking-[0.3em] text-xs mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-beige/50" />
          {t.tag}
          <span className="w-8 h-px bg-beige/50" />
        </div>

        <h1 className="font-header text-white uppercase text-3xl md:text-5xl leading-tight mb-4 block w-full">
          {post.title}
        </h1>

        <div className="w-16 h-px bg-beige/40 mb-4" />
        <p className="text-grey/50 text-xs mb-12">
          {new Date(post.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : lang === 'pl' ? 'pl-PL' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div
          className="prose-blog text-grey leading-relaxed text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Contact CTA */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <h2 className="font-header text-white uppercase text-2xl md:text-3xl leading-tight mb-4 w-full">
            {t.ctaTitle}
          </h2>
          <a href={`/${lang}/#footer-section`}
            className="group relative inline-flex items-center justify-center bg-beige text-dark font-header text-sm uppercase px-10 py-4 overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg tracking-wider">
            <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">{t.ctaBtn}</span>
          </a>
        </div>
      </article>
    </div>
  );
}
