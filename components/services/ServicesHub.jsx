import Link from 'next/link';
import PageShell from '../layout/PageShell';
import Breadcrumbs, { breadcrumbSchema } from '../layout/Breadcrumbs';
import { SITE, SERVICES, servicePath, servicesHubPath } from '../../lib/services';
import { getServicesContent } from '../../lib/content';
import { translations } from '../../utils/translations';

export default function ServicesHub({ lang }) {
  const { ui, hub } = getServicesContent(lang);
  const cards = translations[lang].events.items;
  const crumbs = [
    { name: ui.home, href: `/${lang}` },
    { name: ui.hub, href: servicesHubPath(lang) },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: hub.title,
        itemListElement: SERVICES.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cards.find((c) => c.id === s.id).title,
          url: `${SITE}${servicePath(lang, s.key)}`,
        })),
      },
      breadcrumbSchema(crumbs),
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-12">
        <h1 className="font-header uppercase leading-none mb-8 text-5xl md:text-8xl">
          {hub.h1[0]}{' '}
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{hub.h1[1]}</span>
        </h1>
        <p className="text-grey text-base md:text-lg leading-relaxed max-w-2xl">{hub.intro}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <ul className="flex flex-col border-t border-white/10">
          {SERVICES.map((s) => {
            const card = cards.find((c) => c.id === s.id);
            return (
              <li key={s.key} className="border-b border-white/10">
                <Link href={servicePath(lang, s.key)} className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-10 transition-all duration-500 lg:hover:pl-4">
                  <span className="md:col-span-1 font-header text-beige/50 text-xl md:text-2xl group-hover:text-beige transition-colors duration-300">{s.id}</span>
                  <div className="md:col-span-10">
                    <h2 className="font-header uppercase text-white text-3xl md:text-5xl tracking-wide group-hover:text-beige transition-colors duration-300 mb-3">{card.title}</h2>
                    <p className="text-grey text-sm md:text-base leading-relaxed max-w-2xl">{card.description}</p>
                  </div>
                  <span className="hidden md:flex md:col-span-1 justify-end text-beige opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

    </PageShell>
  );
}
