import { Anton, Oswald, Manrope } from 'next/font/google';
import '../globals.css';
import { LanguageProvider } from '../../context/LanguageContext';

const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: '--font-anton', display: 'swap' });
const oswald = Oswald({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '700'], variable: '--font-oswald', display: 'swap' });
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500', '600'], variable: '--font-manrope', display: 'swap' });

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
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';
  const seo = SEO[lang];
  const base = 'https://litvindj.com';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${base}/${lang}`,
      languages: {
        'en': `${base}/en`,
        'ru': `${base}/ru`,
        'pl': `${base}/pl`,
        'x-default': `${base}`,
      },
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

const schemaOrg = {
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
      sameAs: [
        'https://www.instagram.com/litvin.dj',
        'https://t.me/litdj',
        'https://www.youtube.com/@litvindj',
        'https://open.spotify.com/playlist/2yhvcmtTMF4D86l7XIkDoR',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://litvindj.com/#business',
      name: 'DJ Litvin',
      url: 'https://litvindj.com',
      image: 'https://litvindj.com/og-image.jpg',
      telephone: '+48884325413',
      email: 'booking@litvindj.com',
      priceRange: '$$',
      address: { '@type': 'PostalAddress', addressLocality: 'Warsaw', addressRegion: 'Masovian Voivodeship', addressCountry: 'PL' },
      areaServed: [
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'AdministrativeArea', name: 'Europe' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'DJ Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na wesele Warszawa', description: 'Profesjonalny DJ na wesele w Warszawie i całej Polsce' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ na event korporacyjny Warszawa', description: 'Profesjonalny DJ na eventy korporacyjne' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Events DJ Warsaw' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding DJ Warsaw' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Events DJ' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Party DJ Warsaw' } },
        ],
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

export default function LangLayout({ children, params }) {
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';
  const htmlLang = lang;

  return (
    <html lang={htmlLang} className={`${anton.variable} ${oswald.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','33819537680993763');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=33819537680993763&ev=PageView&noscript=1" /></noscript>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T3FLB32H');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J3CN7R2Z67" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J3CN7R2Z67');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body className="bg-dark text-white min-h-screen">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3FLB32H" height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
