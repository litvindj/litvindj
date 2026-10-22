import Link from 'next/link';
import PageShell from '../layout/PageShell';
import Breadcrumbs, { breadcrumbSchema } from '../layout/Breadcrumbs';
import { SITE, getService, servicePath, servicesHubPath } from '../../lib/services';
import { getServicesContent } from '../../lib/content';
import { translations } from '../../utils/translations';
import { getPost } from '../../lib/blog';
import { Reveal, ParallaxImage, ScrollMarquee, ScrollText, HorizontalGallery } from './motion';

const Label = ({ children }) => (
  <div className="flex items-center gap-4 mb-10 md:mb-12">
    <span className="h-px w-8 bg-beige" />
    <h2 className="text-beige text-xs font-bold uppercase tracking-[0.3em]">{children}</h2>
  </div>
);

// Left column that sticks while the right column scrolls (same look as "What I offer" on the homepage)
const SideTitle = ({ t }) => (
  <div className="lg:col-span-4">
    <div className="lg:sticky lg:top-32">
      <h2 className={`font-header uppercase leading-none text-5xl md:text-7xl ${t.big[1] ? 'text-white' : 'text-beige'}`}>
        {t.big[0]}
        {t.big[1] && <><br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{t.big[1]}</span></>}
      </h2>
    </div>
  </div>
);

const cardFor = (lang, service) => translations[lang].events.items.find((i) => i.id === service.id);

export default function ServicePage({ lang, service }) {
  const all = getServicesContent(lang);
  const { ui } = all;
  const c = all.items[service.key];
  const path = servicePath(lang, service.key);

  const crumbs = [
    { name: ui.home, href: `/${lang}` },
    { name: ui.hub, href: servicesHubPath(lang) },
    { name: c.name, href: path },
  ];

  const related = service.related.map(getService);
  const posts = service.blog.map((slug) => getPost(lang, slug)).filter(Boolean);
  const steps = [ui.stepContact, ...c.steps];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE}${path}#service`,
        name: c.name,
        serviceType: c.name,
        description: c.description,
        url: `${SITE}${path}`,
        inLanguage: lang,
        provider: { '@id': `${SITE}/#business` },
        areaServed: [
          { '@type': 'City', name: 'Warsaw' },
          { '@type': 'Country', name: 'Poland' },
          { '@type': 'AdministrativeArea', name: 'Europe' },
        ],
        image: service.photos.map((p) => `${SITE}${p.src}`),
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
      breadcrumbSchema(crumbs),
    ],
  };

  const hero = service.photos[0];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={crumbs} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-4 lg:pb-16">
            <h1 className="font-header uppercase leading-none mb-8 text-5xl md:text-7xl">
              {c.h1[0]}<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{c.h1[1]}</span>
            </h1>
            {c.intro.map((p, i) => (
              <p key={i} className={`text-base md:text-lg leading-relaxed ${i === 0 ? 'text-white/90 mb-5' : 'text-grey mb-5'}`}>{p}</p>
            ))}
          </div>
          <ParallaxImage src={hero.src} alt={hero.alt[lang]} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-[420px] md:h-[600px]" />
        </div>
      </section>

      <div className="mt-16 md:mt-24"><ScrollMarquee text={c.name} /></div>

      {/* What's included: title column sticks while the list scrolls */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <SideTitle t={ui.sideTitles.included} />
        <ul className="lg:col-span-8 group/list flex flex-col">
          {c.included.map((b, i) => (
            <Reveal as="li" key={b.t} delay={i * 60}
              className="border-b border-white/10 py-8 md:py-10 transition-all duration-500 lg:hover:pl-4 hover:border-beige/30 group/item">
              <div className="flex items-baseline gap-4 md:gap-6 mb-3">
                <span className="font-header text-beige/50 text-xl md:text-2xl group-hover/item:text-beige transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-header uppercase tracking-wide text-white text-2xl md:text-4xl transition-colors duration-300 lg:group-hover/list:text-white/30 lg:group-hover/item:!text-beige">{b.t}</h3>
              </div>
              <p className="text-grey text-sm md:text-base leading-relaxed max-w-2xl md:pl-[3.5rem]">{b.d}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* How it works: cards pin and stack on top of each other */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <SideTitle t={ui.sideTitles.how} />
        <ol className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          {steps.map((s, i) => (
            <li key={i} className="sticky bg-charcoal border border-white/10 p-7 md:p-10 grid grid-cols-[auto_1fr] gap-6 md:gap-10 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]"
              style={{ top: `calc(7.5rem + ${i * 1.25}rem)` }}>
              <div><span className="font-header text-5xl md:text-7xl leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(216,195,165,0.6)' }}>{String(i + 1).padStart(2, '0')}</span></div>
              <div className="min-h-[7rem] md:min-h-[8rem]">
                <div className="mb-3"><h3 className="font-header uppercase text-white text-2xl md:text-3xl tracking-wide">{ui.stepTitles[i]}</h3></div>
                <p className="text-grey text-sm md:text-base leading-relaxed">{s}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Why me: the statement lights up word by word */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-28">
        <Label>{ui.whyTitle}</Label>
        <ScrollText text={c.whyNote} className="font-header uppercase text-3xl md:text-5xl leading-[1.1] tracking-wide max-w-5xl mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {ui.why.map((w, i) => (
            <Reveal key={w.t} delay={i * 80} className="border-t border-white/10 pt-6">
              <h3 className="font-header uppercase text-beige text-lg md:text-xl tracking-wide mb-2">{w.t}</h3>
              <p className="text-grey text-sm leading-relaxed">{w.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery: pinned, slides sideways with scroll */}
      <HorizontalGallery photos={service.photos} lang={lang} title={<Label>{ui.galleryTitle}</Label>} />

      {/* FAQ */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <SideTitle t={ui.sideTitles.faq} />
        <div className="lg:col-span-8 flex flex-col">
          {c.faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 50} className="border-b border-white/10 py-7 md:py-8">
              <h3 className="font-header uppercase text-white text-lg md:text-2xl tracking-wide mb-3">{item.q}</h3>
              <p className="text-grey text-sm md:text-base leading-relaxed">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related services + blog */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <Label>{ui.relatedTitle}</Label>
          <ul className="flex flex-col">
            {related.map((r) => {
              const card = cardFor(lang, r);
              return (
                <li key={r.key} className="border-b border-white/10">
                  <Link href={servicePath(lang, r.key)} className="group flex items-baseline gap-4 py-5">
                    <span className="font-header text-beige/50 text-lg">{r.id}</span>
                    <span className="font-header uppercase text-white text-2xl group-hover:text-beige transition-colors duration-300">{card.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {posts.length > 0 && (
          <div>
            <Label>{ui.blogTitle}</Label>
            <ul className="flex flex-col gap-8">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${lang}/blog/${p.slug}`} className="group block">
                    <h3 className="font-header uppercase text-white text-xl leading-snug group-hover:text-beige transition-colors duration-300 mb-2">{p.title}</h3>
                    <p className="text-grey text-sm leading-relaxed line-clamp-2">{p.description}</p>
                    <span className="inline-block mt-3 text-beige text-[11px] uppercase tracking-widest font-bold">{ui.more} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </PageShell>
  );
}
