import { LanguageProvider } from '../../context/LanguageContext';

const SEO = {
  en: {
    title: 'DJ Litvin — Professional DJ for Corporate Events & Weddings | Warsaw',
    description: 'DJ Litvin — professional DJ for corporate events, weddings, brand launches and private parties. 6+ years, 500+ events. Warsaw, available worldwide. Trusted by Disney, Coca-Cola, Volkswagen.',
    og_title: 'DJ Litvin — Sound Architect | Warsaw',
    og_desc: 'Professional DJ for corporate events, weddings & private parties. Warsaw-based, available worldwide. Trusted by Disney, Coca-Cola, Volkswagen and more.',
    locale: 'en_US',
  },
  ru: {
    title: 'DJ Litvin — Профессиональный диджей для корпоративов и свадеб | Варшава',
    description: 'DJ Litvin — профессиональный диджей для корпоративных мероприятий, свадеб и частных вечеринок. 6+ лет, 500+ событий. Варшава, работаю по всему миру. Доверяют Disney, Coca-Cola, Volkswagen.',
    og_title: 'DJ Litvin — Архитектор Звука | Варшава',
    og_desc: 'Профессиональный диджей для корпоративов, свадеб и частных ивентов. Варшава. Доверяют Disney, Coca-Cola, Volkswagen и другие.',
    locale: 'ru_RU',
  },
  pl: {
    title: 'DJ Litvin — Profesjonalny DJ na wesela i eventy korporacyjne | Warszawa',
    description: 'DJ Litvin — profesjonalny DJ na eventy korporacyjne, wesela, launche marek i imprezy prywatne. 6+ lat, 500+ eventów. Warszawa, dostępny na całym świecie. Zaufały mu Disney, Coca-Cola, Volkswagen.',
    og_title: 'DJ Litvin — Architekt Dźwięku | Warszawa',
    og_desc: 'Profesjonalny DJ na eventy korporacyjne, wesela i imprezy prywatne. Warszawa. Zaufały mu Disney, Coca-Cola, Volkswagen i inne.',
    locale: 'pl_PL',
  },
};

export async function generateMetadata({ params }) {
  params = await params;
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';
  const seo = SEO[lang];
  const base = 'https://litvindj.com';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${base}/${lang}`,
      languages: { 'en': `${base}/en`, 'ru': `${base}/ru`, 'pl': `${base}/pl`, 'x-default': `${base}` },
    },
    openGraph: {
      type: 'website',
      url: `${base}/${lang}`,
      siteName: 'DJ Litvin',
      title: seo.og_title,
      description: seo.og_desc,
      locale: seo.locale,
      images: [{ url: `${base}/og-image.jpg`, width: 1200, height: 630, alt: seo.og_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.og_title,
      description: seo.og_desc,
      images: [`${base}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    icons: { icon: '/favicon.svg' },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

const SOCIAL_LINKS = [
  'https://www.instagram.com/litvin.dj',
  'https://t.me/litdj',
  'https://www.youtube.com/@litvindj',
  'https://open.spotify.com/playlist/2yhvcmtTMF4D86l7XIkDoR',
];

const BUSINESS_DESCRIPTIONS = {
  en: 'Professional DJ for corporate events, weddings, brand launches and private parties. 6+ years of experience, 500+ events performed. Warsaw-based, available across Europe.',
  ru: 'Профессиональный диджей для корпоративных мероприятий, свадеб, запусков брендов и частных вечеринок. Опыт 6+ лет, 500+ мероприятий. Варшава, выезды по всей Европе.',
  pl: 'Profesjonalny DJ na eventy korporacyjne, wesela, launche marek i imprezy prywatne. 6+ lat doświadczenia, 500+ eventów. Warszawa i cała Europa.',
};

const OFFER_CATALOGS = {
  en: {
    name: 'DJ Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding DJ Warsaw', description: 'Professional DJ for weddings in Warsaw and across Poland' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Events DJ Warsaw', description: 'DJ for corporate events, galas, and conferences' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Launch DJ', description: 'DJ for brand launches, store openings, and promotional events' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fashion Show DJ', description: 'DJ for fashion shows and presentations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Party DJ Warsaw', description: 'DJ for private and VIP parties' } },
    ],
  },
  ru: {
    name: 'Услуги диджея',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на свадьбу Варшава', description: 'Профессиональный диджей на свадьбу в Варшаве и по всей Польше' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на корпоратив Варшава', description: 'Диджей на корпоративные мероприятия, гала-ужины и конференции' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на запуск бренда', description: 'Диджей на запуски брендов, открытия и промо-ивенты' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на показ мод', description: 'Диджей для показов мод и фэшн-презентаций' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на частную вечеринку Варшава', description: 'Диджей на частные и VIP-вечеринки' } },
    ],
  },
  pl: {
    name: 'Usługi DJ-a',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na wesele Warszawa', description: 'Profesjonalny DJ na wesele w Warszawie i całej Polsce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na event korporacyjny Warszawa', description: 'DJ na eventy korporacyjne, gale i konferencje' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na launch marki', description: 'DJ na launche marek, otwarcia sklepów i eventy promocyjne' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na pokaz mody', description: 'DJ na pokazy mody i prezentacje fashion' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na imprezę prywatną Warszawa', description: 'DJ na imprezy prywatne i VIP' } },
    ],
  },
};

function buildSchema(lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://litvindj.com/#person',
        name: 'DJ Litvin',
        givenName: 'Gennady',
        familyName: 'Litvin',
        url: 'https://litvindj.com',
        image: 'https://litvindj.com/og-image.jpg',
        jobTitle: 'Professional DJ',
        description: 'Professional DJ specializing in corporate events, weddings, and private parties. Based in Warsaw, available worldwide.',
        knowsAbout: ['Corporate Events', 'Weddings', 'Brand Events', 'Private Parties', 'DJ Performance', 'DJ na wesele', 'DJ Warszawa'],
        knowsLanguage: ['English', 'Polish', 'Russian'],
        address: { '@type': 'PostalAddress', addressLocality: 'Warsaw', addressCountry: 'PL' },
        telephone: '+48884325413',
        email: 'booking@litvindj.com',
        sameAs: SOCIAL_LINKS,
      },
      {
        '@type': 'EntertainmentBusiness',
        '@id': 'https://litvindj.com/#business',
        name: 'DJ Litvin',
        description: BUSINESS_DESCRIPTIONS[lang],
        url: 'https://litvindj.com',
        image: 'https://litvindj.com/og-image.jpg',
        telephone: '+48884325413',
        email: 'booking@litvindj.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Warsaw', addressRegion: 'Masovian Voivodeship', addressCountry: 'PL' },
        founder: { '@id': 'https://litvindj.com/#person' },
        sameAs: SOCIAL_LINKS,
        areaServed: [
          { '@type': 'City', name: 'Warsaw' },
          { '@type': 'AdministrativeArea', name: 'Mazowieckie' },
          { '@type': 'Country', name: 'Poland' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'AdministrativeArea', name: 'Europe' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          ...OFFER_CATALOGS[lang],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://litvindj.com/#website',
        url: 'https://litvindj.com',
        name: 'DJ Litvin',
        inLanguage: ['en', 'ru', 'pl'],
      },
    ],
  };
}

export default async function LangLayout({ children, params }) {
  params = await params;
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(lang)) }} />
      <LanguageProvider initialLang={lang}>
        {children}
      </LanguageProvider>
    </>
  );
}
