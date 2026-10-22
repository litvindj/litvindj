// Single source of truth for the 8 services: URLs, photos, related links.
// To swap a photo, change its `src` (any file in /public/images) and the alt texts.
// Card titles and short descriptions live in utils/translations.js (events.items).

export const SITE = 'https://litvindj.com';
export const LANGS = ['pl', 'en', 'ru'];

// Section path segment per locale: /pl/uslugi, /en/services, /ru/services
export const SERVICES_SEGMENT = { pl: 'uslugi', en: 'services', ru: 'services' };

export const SERVICES = [
  {
    id: '01',
    key: 'corporate',
    slugs: { pl: 'dj-na-event-firmowy', en: 'corporate-event-dj', ru: 'dj-na-korporativ' },
    related: ['brand', 'networking', 'fashion'],
    blog: ['what-to-expect-when-you-book-a-dj-for-a-corporate-event', 'what-i-wish-id-known-before-my-first-corporate-event'],
    photos: [
      { src: '/images/IMG_4315.JPG', alt: { pl: 'DJ Litvin za konsoletą na scenie eventu firmowego', en: 'DJ Litvin on stage at a corporate event', ru: 'DJ Litvin на сцене корпоративного мероприятия' } },
      { src: '/images/alexfeyer.340.JPG', alt: { pl: 'DJ Litvin gra na tarasie podczas wieczornego eventu', en: 'DJ Litvin playing a rooftop evening event', ru: 'DJ Litvin играет на вечернем мероприятии на террасе' } },
      { src: '/images/IMG_5752.JPG', alt: { pl: 'DJ Litvin przy konsolecie w przeszklonej sali konferencyjnej', en: 'DJ Litvin at the decks in a glass-walled venue', ru: 'DJ Litvin за пультом в зале с панорамными окнами' } },
      { src: '/images/100129763105.jpg', alt: { pl: 'DJ Litvin miksuje muzykę na evencie', en: 'DJ Litvin mixing at an event', ru: 'DJ Litvin сводит музыку на мероприятии' } },
      { src: '/images/100217403762.jpg', alt: { pl: 'Goście tańczą na zakończenie eventu firmowego', en: 'Guests dancing at the end of a company party', ru: 'Гости танцуют в финале корпоратива' } },
    ],
  },
  {
    id: '02',
    key: 'wedding',
    slugs: { pl: 'dj-na-wesele', en: 'wedding-dj', ru: 'dj-na-svadbu' },
    related: ['private', 'restaurant', 'corporate'],
    blog: ['what-a-destination-wedding-in-spain-actually-requires-from-a-dj', 'why-some-tracks-sound-huge-in-a-club-and-small-at-a-wedding'],
    photos: [
      { src: '/images/IMG_3604.JPG', alt: { pl: 'DJ Litvin gra na weselu w ogrodzie', en: 'DJ Litvin playing an outdoor garden wedding', ru: 'DJ Litvin играет на свадьбе в саду' } },
      { src: '/images/IMG_3603.JPG', alt: { pl: 'DJ Litvin rozkręca parkiet weselny', en: 'DJ Litvin lifting the wedding dancefloor', ru: 'DJ Litvin зажигает свадебный танцпол' } },
      { src: '/images/rider.jpg', alt: { pl: 'Konsoleta DJ-a na tarasie przyjęcia weselnego', en: 'DJ setup on a wedding reception terrace', ru: 'Диджейский пульт на террасе свадебного банкета' } },
      { src: '/images/NJ0A0027.jpg', alt: { pl: 'Goście weselni bawią się na parkiecie', en: 'Wedding guests celebrating on the dancefloor', ru: 'Гости свадьбы танцуют' } },
      { src: '/images/alexfeyer.34.JPG', alt: { pl: 'DJ Litvin gra na wydarzeniu plenerowym za granicą', en: 'DJ Litvin playing an open-air event abroad', ru: 'DJ Litvin на выездном мероприятии под открытым небом' } },
    ],
  },
  {
    id: '03',
    key: 'brand',
    slugs: { pl: 'dj-na-event-brandowy', en: 'product-launch-dj', ru: 'dj-na-prezentatsiyu-brenda' },
    related: ['corporate', 'fashion', 'networking'],
    blog: ['what-makes-a-great-dj-set-at-a-brand-launch', 'how-a-product-unboxing-event-differs-from-a-full-brand-launch'],
    photos: [
      { src: '/images/100210379934.jpg', alt: { pl: 'Tłum gości na premierze produktu z DJ-em Litvinem', en: 'Crowd at a product launch with DJ Litvin', ru: 'Гости на презентации продукта с DJ Litvin' } },
      { src: '/images/100129763105.jpg', alt: { pl: 'DJ Litvin gra na evencie promocyjnym marki', en: 'DJ Litvin playing a brand promotion event', ru: 'DJ Litvin играет на промо-мероприятии бренда' } },
      { src: '/images/100213357031.jpg', alt: { pl: 'DJ Litvin przy konsolecie podczas otwarcia', en: 'DJ Litvin at the decks during a store opening', ru: 'DJ Litvin за пультом на открытии' } },
      { src: '/images/NJ0A9974.jpg', alt: { pl: 'Goście bawią się przy konsolecie na evencie brandowym', en: 'Guests around the DJ booth at a brand event', ru: 'Гости у диджейского пульта на мероприятии бренда' } },
      { src: '/images/100047381147.jpg', alt: { pl: 'DJ Litvin w czerwonym świetle podczas launchu', en: 'DJ Litvin under red stage light at a launch', ru: 'DJ Litvin в красном свете на запуске продукта' } },
    ],
  },
  {
    id: '04',
    key: 'fashion',
    slugs: { pl: 'dj-na-pokaz-mody', en: 'fashion-show-dj', ru: 'dj-na-pokaz-mod' },
    related: ['brand', 'corporate', 'private'],
    blog: ['what-makes-a-fashion-show-set-different', 'the-hidden-role-of-music-in-brand-perception'],
    photos: [
      { src: '/images/about.JPG', alt: { pl: 'Portret DJ-a Litvina w czarnym garniturze', en: 'Portrait of DJ Litvin in a black suit', ru: 'Портрет DJ Litvin в чёрном костюме' } },
      { src: '/images/IMG_3419.JPG', alt: { pl: 'DJ Litvin przy konsolecie w ciemnym wnętrzu', en: 'DJ Litvin at the decks in a dark venue', ru: 'DJ Litvin за пультом в тёмном зале' } },
      { src: '/images/alexfeyer.340.JPG', alt: { pl: 'DJ Litvin gra na wieczornym evencie modowym', en: 'DJ Litvin playing an evening fashion event', ru: 'DJ Litvin играет на вечернем модном событии' } },
      { src: '/images/IMG_8331.JPG', alt: { pl: 'DJ Litvin miksuje set na pokazie', en: 'DJ Litvin mixing a set at a show', ru: 'DJ Litvin сводит сет на показе' } },
    ],
  },
  {
    id: '05',
    key: 'networking',
    slugs: { pl: 'dj-na-networking', en: 'networking-event-dj', ru: 'dj-na-networking' },
    related: ['corporate', 'restaurant', 'brand'],
    blog: ['what-city-pop-is-doing-at-corporate-events-in-2026', 'what-a-dj-learns-from-watching-the-bar-not-the-dancefloor'],
    photos: [
      { src: '/images/IMG_5752.JPG', alt: { pl: 'DJ Litvin gra muzykę w tle na spotkaniu biznesowym', en: 'DJ Litvin playing background music at a business event', ru: 'DJ Litvin играет фоновую музыку на деловом мероприятии' } },
      { src: '/images/IMG_3604.JPG', alt: { pl: 'Stanowisko DJ-a na przyjęciu w plenerze', en: 'DJ booth at an outdoor reception', ru: 'Диджейский пульт на приёме под открытым небом' } },
      { src: '/images/rider.jpg', alt: { pl: 'Konsoleta DJ-a podczas eventu networkingowego na tarasie', en: 'DJ setup at a terrace networking event', ru: 'Пульт DJ на нетворкинге на террасе' } },
      { src: '/images/alexfeyer.34.JPG', alt: { pl: 'DJ Litvin gra podczas wieczornego przyjęcia', en: 'DJ Litvin playing an evening reception', ru: 'DJ Litvin играет на вечернем приёме' } },
    ],
  },
  {
    id: '06',
    key: 'private',
    slugs: { pl: 'dj-na-impreze-prywatna', en: 'private-party-dj', ru: 'dj-na-chastnuyu-vecherinku' },
    related: ['wedding', 'club', 'restaurant'],
    blog: ['why-festival-sets-and-private-event-sets-are-opposite-skills', 'why-guest-song-requests-are-the-enemy-of-a-good-evening'],
    photos: [
      { src: '/images/NJ0A0287.jpg', alt: { pl: 'Goście tańczą na prywatnej imprezie', en: 'Guests dancing at a private party', ru: 'Гости танцуют на частной вечеринке' } },
      { src: '/images/NJ0A0027.jpg', alt: { pl: 'Impreza urodzinowa z DJ-em Litvinem', en: 'Birthday party with DJ Litvin', ru: 'День рождения с DJ Litvin' } },
      { src: '/images/IMG_3603.JPG', alt: { pl: 'DJ Litvin z uniesionymi rękami za konsoletą', en: 'DJ Litvin with raised hands behind the decks', ru: 'DJ Litvin с поднятыми руками за пультом' } },
      { src: '/images/100233624988.jpg', alt: { pl: 'Nocna impreza prywatna w Warszawie', en: 'Late-night private party in Warsaw', ru: 'Ночная частная вечеринка в Варшаве' } },
      { src: '/images/IMG_8332.JPG', alt: { pl: 'Taniec na zamkniętej imprezie', en: 'Dancing at an invitation-only party', ru: 'Танцы на закрытой вечеринке' } },
    ],
  },
  {
    id: '07',
    key: 'restaurant',
    slugs: { pl: 'dj-do-restauracji', en: 'restaurant-lounge-dj', ru: 'dj-v-restoran' },
    related: ['club', 'private', 'networking'],
    blog: ['why-dj-residencies-are-making-a-comeback-at-restaurants-and-hotels', 'what-the-warsaw-restaurant-scene-is-doing-with-background-music-right-now'],
    photos: [
      { src: '/images/rider.jpg', alt: { pl: 'Konsoleta DJ-a w restauracji z tarasem', en: 'DJ setup in a restaurant with a terrace', ru: 'Диджейский пульт в ресторане с террасой' } },
      { src: '/images/IMG_8330.JPG', alt: { pl: 'DJ Litvin gra wieczorem w lokalu w Warszawie', en: 'DJ Litvin playing an evening set at a Warsaw venue', ru: 'DJ Litvin играет вечерний сет в заведении Варшавы' } },
      { src: '/images/IMG_8331.JPG', alt: { pl: 'DJ Litvin podczas rezydentury w lounge', en: 'DJ Litvin during a lounge residency', ru: 'DJ Litvin на резидентстве в лаунже' } },
      { src: '/images/100047381147.jpg', alt: { pl: 'DJ Litvin w klimatycznym świetle restauracji', en: 'DJ Litvin under warm restaurant lighting', ru: 'DJ Litvin в атмосферном свете ресторана' } },
      { src: '/images/IMG_8332.JPG', alt: { pl: 'Goście bawią się późnym wieczorem w restauracji', en: 'Guests dancing late in the evening at a restaurant', ru: 'Гости танцуют поздним вечером в ресторане' } },
    ],
  },
  {
    id: '08',
    key: 'club',
    slugs: { pl: 'dj-klub-impreza', en: 'club-party-dj', ru: 'dj-klub-vecherinka' },
    related: ['private', 'restaurant', 'brand'],
    blog: ['the-moment-a-crowd-becomes-a-dancefloor', 'what-playing-in-ibiza-teaches-you-about-crowd-psychology'],
    photos: [
      { src: '/images/IMG_8332.JPG', alt: { pl: 'Pełny parkiet w warszawskim klubie', en: 'Packed dancefloor at a Warsaw club', ru: 'Полный танцпол в варшавском клубе' } },
      { src: '/images/100233624988.jpg', alt: { pl: 'Tłum w klubie podczas nocnego seta', en: 'Club crowd during a late-night set', ru: 'Публика клуба во время ночного сета' } },
      { src: '/images/NJ0A0287.jpg', alt: { pl: 'Taniec na imprezie klubowej', en: 'Dancing at a club night', ru: 'Танцы на клубной вечеринке' } },
      { src: '/images/IMG_8330.JPG', alt: { pl: 'DJ Litvin gra set w klubie', en: 'DJ Litvin playing a club set', ru: 'DJ Litvin играет клубный сет' } },
      { src: '/images/100217403762.jpg', alt: { pl: 'Publiczność bawi się przy konsolecie DJ-a', en: 'Crowd celebrating at the DJ booth', ru: 'Публика у диджейского пульта' } },
      { src: '/images/NJ0A9974.jpg', alt: { pl: 'DJ Litvin w otoczeniu tańczących gości', en: 'DJ Litvin surrounded by dancing guests', ru: 'DJ Litvin в окружении танцующих гостей' } },
    ],
  },
];

// Old landing pages merged into service pages (301 redirects live in netlify.toml)
export const LEGACY_PATHS = {
  'dj-na-wesele-warszawa': 'wedding',
  'dj-na-event-firmowy-warszawa': 'corporate',
};

export const getService = (key) => SERVICES.find((s) => s.key === key);
export const getServiceBySlug = (lang, slug) => SERVICES.find((s) => s.slugs[lang] === slug);

export const servicesHubPath = (lang) => `/${lang}/${SERVICES_SEGMENT[lang]}`;
export const servicePath = (lang, key) => `${servicesHubPath(lang)}/${getService(key).slugs[lang]}`;

// Map the current pathname to the same page in another locale (used by the language switcher)
export function localizedPath(pathname, target) {
  const parts = (pathname || '/').split('/').filter(Boolean);
  const from = parts[0];
  if (!LANGS.includes(from)) return null;
  const rest = parts.slice(1);
  if (rest.length === 0) return `/${target}`;
  if (rest[0] === SERVICES_SEGMENT[from]) {
    if (rest.length === 1) return servicesHubPath(target);
    const s = getServiceBySlug(from, rest[1]);
    return s ? servicePath(target, s.key) : servicesHubPath(target);
  }
  return `/${target}/${rest.join('/')}`;
}

// hreflang map for a path builder: (lang) => path
export function hreflang(build, xDefault = 'en') {
  const languages = {};
  for (const l of LANGS) languages[l] = `${SITE}${build(l)}`;
  languages['x-default'] = `${SITE}${build(xDefault)}`;
  return languages;
}
