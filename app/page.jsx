import HomePage from '../components/HomePage';
import { getAllPosts } from '../lib/blog';

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
      knowsAbout: ['Corporate Events', 'Weddings', 'Brand Events', 'Private Parties', 'DJ Performance'],
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

export default function RootPage() {
  const allLatestPosts = {
    en: getAllPosts('en').slice(0, 3),
    ru: getAllPosts('ru').slice(0, 3),
    pl: getAllPosts('pl').slice(0, 3),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <HomePage allLatestPosts={allLatestPosts} />
    </>
  );
}
