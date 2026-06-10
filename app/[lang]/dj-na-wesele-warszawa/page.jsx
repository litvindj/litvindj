import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

const CONTENT = {
  pl: {
    meta: {
      title: 'DJ na wesele Warszawa — DJ Litvin | Profesjonalny DJ na ślub',
      description: 'DJ na wesele w Warszawie i całej Polsce. Profesjonalny DJ na ślub — muzyka od ceremonii po ostatni taniec. 6+ lat, 500+ eventów. Zapytaj o termin.',
    },
    back: '← Strona główna',
    label: 'Usługa',
    h1a: 'DJ na wesele',
    h1b: 'Warszawa',
    intro: 'Wesele to jeden dzień w życiu — i jedyna szansa, żeby muzyka zagrała dokładnie tak, jak powinno zabrzmieć wspomnienie. Nie pracuję z gotową setlistą. Zanim zacznę grać, rozmawiamy o tym, kto przyjdzie, co jest dla was ważne i jak ma wyglądać każdy moment dnia.',
    benefitsLabel: 'Dlaczego warto',
    benefits: [
      { num: '01', title: 'Muzyka do każdego momentu', desc: 'Ceremonia, cocktail, kolacja, pierwsze tańce, parkiet dla wszystkich pokoleń — każda część wesela ma swój charakter muzyczny.' },
      { num: '02', title: 'Własny sprzęt klasy pro', desc: 'Pioneer DJ CDJ-3000, DJM-A9 — pełen setup. Nie potrzebujesz wynajmować nagłośnienia — przyjeżdżam z gotowym rozwiązaniem.' },
      { num: '03', title: 'Briefing przed weselem', desc: 'Rozmowa o waszych preferencjach, ulubionych gatunkach i listach "nie grać". Muzyka ma opowiadać waszą historię.' },
      { num: '04', title: 'Doświadczenie i elastyczność', desc: '500+ eventów — od kameralnych kolacji po imprezy na 300 osób. Czytam parkiet w czasie rzeczywistym i zmieniam kierunek, kiedy trzeba.' },
      { num: '05', title: 'Dostępny na całą Polskę i Europę', desc: 'Baza w Warszawie, ale gram po całej Polsce i wyjeżdżam za granicę. Logistyka i sprzęt — moja sprawa.' },
    ],
    faqLabel: 'Najczęstsze pytania',
    faq: [
      { q: 'Ile kosztuje DJ na wesele w Warszawie?', a: 'Koszt zależy od długości eventu, lokalizacji i wymaganego setup\'u sprzętowego. Wycenę przygotowuję indywidualnie po rozmowie o waszym weselu. Napisz do mnie — odpowiem w ciągu 24 godzin.' },
      { q: 'Jak wcześnie zarezerwować DJ-a na wesele?', a: 'Popularne terminy (zwłaszcza maj–wrzesień) rezerwowane są z 6–12-miesięcznym wyprzedzeniem. Im szybciej wyślesz zapytanie, tym większa szansa na wolny termin.' },
      { q: 'Czy DJ gra muzykę według listy życzeń?', a: 'Tak. Przed weselem ustalamy preferowane gatunki, konkretne utwory do ważnych momentów (pierwszy taniec, wejście rodziców) oraz listę "nie grać". W trakcie imprezy adaptuję set do reakcji parkietu.' },
      { q: 'Czy przyjeżdżasz z własnym sprzętem?', a: 'Tak, mój setup to Pioneer DJ CDJ-3000 + DJM-A9. Mogę też współpracować ze sprzętem zainstalowanym w sali — zależy od możliwości venue.' },
      { q: 'Jak daleko dojeżdżasz na wesele?', a: 'Baza to Warszawa i Mazowsze, ale gram po całej Polsce oraz w Europie. Dojazd i logistykę ustalamy indywidualnie.' },
      { q: 'Czy grasz na weselach z żywą muzyką?', a: 'Tak. Mam doświadczenie we współpracy z zespołami i wokalistami — synchronizacja z live music to dla mnie standard.' },
    ],
    ctaTitle: 'Zapytaj o wolny termin',
    ctaDesc: 'Powiedz mi o swoim weselu — data, miejsce, ile osób. Odezwę się w ciągu 24 godzin.',
    ctaBtn: 'Napisz do mnie',
  },
  en: {
    meta: {
      title: 'Wedding DJ Warsaw — DJ Litvin | Professional Wedding DJ Poland',
      description: 'Professional wedding DJ based in Warsaw. Music from the ceremony to the last dance. 6+ years, 500+ events. Available across Poland and Europe. Ask about availability.',
    },
    back: '← Home',
    label: 'Service',
    h1a: 'Wedding DJ',
    h1b: 'Warsaw',
    intro: 'A wedding is a single day — and the only chance to make the music sound exactly the way a memory should feel. I don\'t work from a preset playlist. Before the event, we talk about your guests, what matters to you, and how each moment of the day should sound.',
    benefitsLabel: 'Why DJ Litvin',
    benefits: [
      { num: '01', title: 'Music for every moment', desc: 'Ceremony, cocktail hour, dinner, first dance, late-night dancefloor — each part of your wedding has its own musical character.' },
      { num: '02', title: 'Pro-grade equipment', desc: 'Pioneer DJ CDJ-3000 + DJM-A9 — full setup. No need to rent a separate sound system. I arrive with everything ready.' },
      { num: '03', title: 'Pre-wedding briefing', desc: 'A conversation about your preferences, favourite genres, and must-not-play list. The music should tell your story, not just fill the room.' },
      { num: '04', title: 'Experience and adaptability', desc: '500+ events — from intimate dinners to 300-person parties. I read the room in real time and shift direction when needed.' },
      { num: '05', title: 'Available across Poland and Europe', desc: 'Based in Warsaw, but available throughout Poland and internationally. Travel logistics are handled on my end.' },
    ],
    faqLabel: 'Frequently asked questions',
    faq: [
      { q: 'How much does a wedding DJ cost in Warsaw?', a: 'Pricing depends on the duration of the event, location, and equipment requirements. I put together individual quotes after a brief conversation. Get in touch — I\'ll reply within 24 hours.' },
      { q: 'How far in advance should I book a wedding DJ?', a: 'Peak dates (especially May–September) are typically booked 6–12 months in advance. The sooner you reach out, the better the chances of securing your date.' },
      { q: 'Can guests make song requests?', a: 'Absolutely. Before the wedding, we agree on preferred genres, key songs for special moments, and a do-not-play list. During the event, I adapt the set to the crowd.' },
      { q: 'Do you bring your own equipment?', a: 'Yes — Pioneer DJ CDJ-3000 + DJM-A9. I can also work with equipment installed in the venue if needed.' },
      { q: 'Do you travel outside Warsaw for weddings?', a: 'Yes. Warsaw and Mazovia are my home base, but I perform across Poland and throughout Europe. Travel details are agreed individually.' },
      { q: 'Can you perform alongside a live band?', a: 'Yes. I have experience working alongside bands and vocalists — synchronising with live music is a standard part of what I do.' },
    ],
    ctaTitle: 'Check availability',
    ctaDesc: 'Tell me about your wedding — date, venue, guest count. I\'ll get back to you within 24 hours.',
    ctaBtn: 'Get in touch',
  },
  ru: {
    meta: {
      title: 'Диджей на свадьбу Варшава — DJ Litvin | Профессиональный диджей',
      description: 'Профессиональный диджей на свадьбу в Варшаве и по всей Польше. Музыка от церемонии до последнего танца. 6+ лет, 500+ мероприятий. Напишите про дату.',
    },
    back: '← Главная',
    label: 'Услуга',
    h1a: 'DJ на',
    h1b: 'Свадьбу',
    intro: 'Свадьба — один день, и единственный шанс сделать музыку такой, какой должно звучать воспоминание. Я не работаю с готовым плейлистом. До мероприятия мы говорим о гостях, о том, что для вас важно, и о том, как должен звучать каждый момент дня.',
    benefitsLabel: 'Почему DJ Litvin',
    benefits: [
      { num: '01', title: 'Музыка для каждого момента', desc: 'Церемония, фуршет, ужин, первый танец, дискотека для всех поколений — каждая часть свадьбы имеет свой музыкальный характер.' },
      { num: '02', title: 'Профессиональное оборудование', desc: 'Pioneer DJ CDJ-3000 + DJM-A9 — полный сетап. Звук и оборудование с собой, без аренды.' },
      { num: '03', title: 'Брифинг перед свадьбой', desc: 'Разговор о ваших предпочтениях, любимых жанрах и списке «не играть». Музыка должна рассказывать вашу историю.' },
      { num: '04', title: 'Опыт и гибкость', desc: '500+ мероприятий — от камерных ужинов до вечеринок на 300 человек. Читаю зал в реальном времени.' },
      { num: '05', title: 'Польша и вся Европа', desc: 'База — Варшава и Мазовецкое воеводство, но работаю по всей Польше и выезжаю за рубеж.' },
    ],
    faqLabel: 'Часто задаваемые вопросы',
    faq: [
      { q: 'Сколько стоит диджей на свадьбу в Варшаве?', a: 'Стоимость зависит от продолжительности, локации и требований к оборудованию. Готовлю индивидуальное предложение после короткого разговора. Напишите — отвечу в течение 24 часов.' },
      { q: 'За сколько месяцев бронировать диджея на свадьбу?', a: 'Популярные даты (особенно май–сентябрь) бронируются за 6–12 месяцев. Чем раньше напишете — тем больше шансов зафиксировать нужную дату.' },
      { q: 'Можно ли заказывать песни?', a: 'Да. До свадьбы согласовываем предпочтительные жанры, ключевые треки и список «не играть». В процессе адаптирую сет под реакцию зала.' },
      { q: 'Вы привозите своё оборудование?', a: 'Да — Pioneer DJ CDJ-3000 + DJM-A9. При необходимости работаю с оборудованием площадки.' },
      { q: 'Работаете за пределами Варшавы?', a: 'Да. Варшава и Мазовецкое — база, но работаю по всей Польше и выезжаю в Европу. Логистика согласовывается индивидуально.' },
      { q: 'Работаете с живой музыкой?', a: 'Да. Есть опыт совместной работы с группами и вокалистами — синхронизация с live music для меня стандарт.' },
    ],
    ctaTitle: 'Уточните дату',
    ctaDesc: 'Расскажите о свадьбе — дата, место, количество гостей. Отвечу в течение 24 часов.',
    ctaBtn: 'Написать мне',
  },
};

export async function generateMetadata({ params }) {
  params = await params;
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';
  const c = CONTENT[lang];
  const base = 'https://litvindj.com';
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `${base}/${lang}/dj-na-wesele-warszawa`,
      languages: {
        'pl': `${base}/pl/dj-na-wesele-warszawa`,
        'en': `${base}/en/dj-na-wesele-warszawa`,
        'ru': `${base}/ru/dj-na-wesele-warszawa`,
        'x-default': `${base}/pl/dj-na-wesele-warszawa`,
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `${base}/${lang}/dj-na-wesele-warszawa`,
      images: [{ url: `${base}/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function WeddingDJPage({ params }) {
  params = await params;
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';
  const c = CONTENT[lang];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lang === 'pl' ? 'DJ na wesele Warszawa' : lang === 'ru' ? 'Диджей на свадьбу Варшава' : 'Wedding DJ Warsaw',
    description: c.meta.description,
    provider: { '@id': 'https://litvindj.com/#business' },
    areaServed: [
      { '@type': 'City', name: 'Warsaw' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'AdministrativeArea', name: 'Europe' },
    ],
    url: `https://litvindj.com/${lang}/dj-na-wesele-warszawa`,
  };

  return (
    <div className="bg-dark text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-white/5 py-6 px-6 md:px-12">
        <Link href={`/${lang}`} className="font-header text-beige uppercase tracking-widest text-xs hover:text-white transition-colors duration-300">
          {c.back}
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-beige" />
              <span className="text-beige text-xs font-bold uppercase tracking-[0.4em]">{c.label}</span>
            </div>
            <h1 className="font-header uppercase leading-none mb-8 text-5xl md:text-8xl">
              {c.h1a}<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{c.h1b}</span>
            </h1>
            <p className="text-grey text-base md:text-lg leading-relaxed">
              {c.intro}
            </p>
          </div>
          <div className="relative w-full h-[420px] md:h-[560px] overflow-hidden">
            <Image
              src="/images/about.JPG"
              alt="DJ Litvin — profesjonalny DJ na wesele Warszawa"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-8 bg-beige" />
          <span className="text-beige text-xs font-bold uppercase tracking-[0.4em]">{c.benefitsLabel}</span>
        </div>
        <ul className="flex flex-col">
          {c.benefits.map((b) => (
            <li key={b.num} className="border-b border-white/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4">
              <span className="font-header text-beige/40 text-xl md:col-span-1">{b.num}</span>
              <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-3">
                <h2 className="font-header uppercase text-white text-2xl md:text-3xl tracking-wide">{b.title}</h2>
                <p className="text-grey text-sm leading-relaxed">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Photo strip */}
      <div className="w-full grid grid-cols-3 h-52 md:h-80">
        <div className="relative overflow-hidden">
          <Image src="/images/NJ0A9974.jpg" alt="DJ Litvin przy konsoli" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden border-l border-r border-white/10">
          <Image src="/images/NJ0A0027.jpg" alt="Parkiet weselny" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/NJ0A0287.jpg" alt="Atmosfera imprezy" fill className="object-cover" sizes="33vw" />
        </div>
      </div>

      {/* FAQ */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-8 bg-beige" />
          <span className="text-beige text-xs font-bold uppercase tracking-[0.4em]">{c.faqLabel}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {c.faq.map((item, i) => (
            <div key={i}>
              <h3 className="font-header uppercase text-white text-lg md:text-xl tracking-wide mb-3">{item.q}</h3>
              <p className="text-grey text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h2 className="font-header uppercase text-white text-4xl md:text-6xl leading-tight mb-4">{c.ctaTitle}</h2>
        <p className="text-grey text-sm leading-relaxed mb-10 max-w-lg">{c.ctaDesc}</p>
        <a href={`/${lang}/#footer-section`}
          className="group relative inline-flex items-center justify-center bg-beige text-dark font-header text-sm uppercase px-10 py-4 overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg tracking-wider">
          <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">{c.ctaBtn}</span>
        </a>
      </section>
    </div>
  );
}
