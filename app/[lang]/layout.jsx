import { LanguageProvider } from '../../context/LanguageContext';
import { buildSchema } from '../../lib/schema';

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
    title: 'DJ Litvin — Profesjonalny DJ na wesela i eventy firmowe | Warszawa',
    description: 'DJ Litvin — profesjonalny DJ na eventy firmowe, wesela, launche marek i imprezy prywatne. 6+ lat, 500+ eventów. Warszawa, dostępny na całym świecie. Zaufały mu Disney, Coca-Cola, Volkswagen.',
    og_title: 'DJ Litvin — Architekt Dźwięku | Warszawa',
    og_desc: 'Profesjonalny DJ na eventy firmowe, wesela i imprezy prywatne. Warszawa. Zaufały mu Disney, Coca-Cola, Volkswagen i inne.',
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
