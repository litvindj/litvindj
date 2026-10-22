const LOGO = { '@type': 'ImageObject', url: 'https://litvindj.com/logo.png', width: 512, height: 512 };

const SOCIAL_LINKS = [
  'https://www.instagram.com/litvin.dj',
  'https://t.me/litdj',
  'https://www.youtube.com/@litvindj',
  'https://open.spotify.com/playlist/2yhvcmtTMF4D86l7XIkDoR',
];

const BUSINESS_DESCRIPTIONS = {
  en: 'Professional DJ for corporate events, weddings, brand launches and private parties. 6+ years of experience, 500+ events performed. Warsaw-based, available across Europe.',
  ru: 'Профессиональный диджей для корпоративных мероприятий, свадеб, запусков брендов и частных вечеринок. Опыт 6+ лет, 500+ мероприятий. Варшава, выезды по всей Европе.',
  pl: 'Profesjonalny DJ na eventy firmowe, wesela, launche marek i imprezy prywatne. 6+ lat doświadczenia, 500+ eventów. Warszawa i cała Europa.',
};

const OFFER_CATALOGS = {
  en: {
    name: 'DJ Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding DJ Warsaw', description: 'Professional DJ for weddings in Warsaw and across Poland' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Events DJ Warsaw', description: 'DJ for corporate events, galas, and conferences' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Launch DJ', description: 'DJ for brand launches, store openings, and promotional events' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fashion Show DJ', description: 'DJ for fashion shows and presentations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Party DJ Warsaw', description: 'DJ for private parties, birthdays and anniversaries' } },
    ],
  },
  ru: {
    name: 'Услуги диджея',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на свадьбу Варшава', description: 'Профессиональный диджей на свадьбу в Варшаве и по всей Польше' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на корпоратив Варшава', description: 'Диджей на корпоративные мероприятия, гала-ужины и конференции' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на запуск бренда', description: 'Диджей на запуски брендов, открытия и промо-ивенты' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на показ мод', description: 'Диджей для показов мод и фэшн-презентаций' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Диджей на частную вечеринку Варшава', description: 'Диджей на частные вечеринки, дни рождения и юбилеи' } },
    ],
  },
  pl: {
    name: 'Usługi DJ-a',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na wesele Warszawa', description: 'Profesjonalny DJ na wesele w Warszawie i całej Polsce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na event firmowy Warszawa', description: 'DJ na eventy firmowe, gale i konferencje' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na launch marki', description: 'DJ na launche marek, otwarcia sklepów i eventy promocyjne' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na pokaz mody', description: 'DJ na pokazy mody i prezentacje fashion' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na imprezę prywatną Warszawa', description: 'DJ na imprezy prywatne, urodziny i rocznice' } },
    ],
  },
};

export function buildSchema(lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://litvindj.com/#person',
        name: 'DJ Litvin',
        alternateName: 'Gennady Litvin',
        givenName: 'Gennady',
        familyName: 'Litvin',
        url: 'https://litvindj.com',
        image: 'https://litvindj.com/og-image.jpg',
        jobTitle: 'Professional DJ',
        description: 'Professional DJ specializing in corporate events, weddings, and private parties. Based in Warsaw, available worldwide.',
        knowsAbout: ['Corporate Events', 'Weddings', 'Brand Events', 'Private Parties', 'DJ Performance', 'DJ na wesele', 'DJ Warszawa'],
        knowsLanguage: ['English', 'Polish', 'Russian'],
        worksFor: { '@id': 'https://litvindj.com/#business' },
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
        logo: LOGO,
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
        publisher: { '@id': 'https://litvindj.com/#business' },
        about: { '@id': 'https://litvindj.com/#person' },
        image: LOGO,
      },
    ],
  };
}

