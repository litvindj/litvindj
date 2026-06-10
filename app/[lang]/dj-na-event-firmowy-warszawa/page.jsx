import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

const CONTENT = {
  pl: {
    meta: {
      title: 'DJ na event firmowy Warszawa — DJ Litvin | Eventy firmowe',
      description: 'DJ na eventy firmowe w Warszawie. Gale, launche marek, konferencje, imprezy integracyjne. 6+ lat, 500+ eventów. Zaufały mu Disney, Coca-Cola, Volkswagen.',
    },
    back: '← Strona główna',
    label: 'Usługa',
    h1a: 'DJ na event',
    h1b: 'Firmowy',
    intro: 'Event firmowy rządzi się innymi prawami niż prywatna impreza. Muzyka nie może być zbyt głośna podczas networkingu, nie może przyćmić prezentacji i powinna zsynchronizować się z każdym momentem programu. Mam doświadczenie w pracy z agencjami eventowymi, hostem i techniczną obsługą sceny.',
    benefitsLabel: 'Jak pracuję',
    benefits: [
      { num: '01', title: 'Muzyka dopasowana do marki', desc: 'Gatunek, tempo i klimat dobierane pod tożsamość klienta — nie każda firma brzmi tak samo.' },
      { num: '02', title: 'Synchronizacja z programem', desc: 'Ścisła współpraca z MC, reżyserem sceny i technikami. Wejścia, przerwy, prezentacje — każdy moment ma właściwe tło dźwiękowe.' },
      { num: '03', title: 'Dyskretny background lub energetyczny parkiet', desc: 'Od ambient na cocktail hour przez lounge podczas kolacji po pełną imprezę na zakończenie eventu.' },
      { num: '04', title: 'Sprzęt klasy pro', desc: 'Pioneer DJ CDJ-3000 + DJM-A9. Mogę też pracować ze sprzętem AV zainstalowanym przez obsługę techniczną.' },
      { num: '05', title: 'Dyspozycyjność i doświadczenie', desc: '500+ eventów dla Disney, Coca-Cola, Deloitte, Santander Bank, Volkswagen, Philips. Wiem, czego oczekują klienci firmowi.' },
    ],
    eventsLabel: 'Rodzaje eventów',
    events: [
      'Gale i kolacje firmowe',
      'Launche produktów i marek',
      'Konferencje i eventy hybrydowe',
      'Imprezy integracyjne i team building',
      'Otwarcia biur i sklepów',
      'Eventy VIP i networking',
      'Pokazy mody i fashion events',
      'Eventy na zlecenie agencji eventowych',
    ],
    faqLabel: 'Najczęstsze pytania',
    faq: [
      { q: 'Jak wcześnie zarezerwować DJ-a na event firmowy?', a: 'Duże eventy (gale, launche) najlepiej rezerwować 3–6 miesięcy wcześniej. W przypadku mniejszych imprez firmowych zazwyczaj jest krótsza dostępność — napisz, sprawdzę termin.' },
      { q: 'Czy grasz ciszej podczas networkingu i kolacji?', a: 'Tak. Potrafię utrzymać muzykę w tle podczas rozmów, a następnie naturalnie eskalować energię na parkiecie. To wymaga doświadczenia i czytania sali.' },
      { q: 'Czy możesz dostosować muzykę do brief\'u klienta lub agencji?', a: 'Tak. Pracuję z briefami od agencji eventowych i bezpośrednio od klientów. Dobór muzyki uwzględnia tone of voice marki i format eventu.' },
      { q: 'Czy współpracujesz z agencjami eventowymi?', a: 'Tak, chętnie. Mam doświadczenie w pracy jako podwykonawca dla agencji — terminowość, komunikacja i profesjonalizm to moje standardy.' },
      { q: 'Czy przywozisz własny sprzęt?', a: 'Tak. Pioneer DJ CDJ-3000 + DJM-A9. Mogę też pracować z instalacją AV na miejscu — wystarczy wcześniej ustalić specyfikację techniczną.' },
      { q: 'Czy gram po całej Polsce i za granicą?', a: 'Tak. Gram w Warszawie, ale obsługuję całą Polskę i wyjeżdżam za granicę. Logistykę ustalamy indywidualnie.' },
    ],
    ctaTitle: 'Wyślij zapytanie',
    ctaDesc: 'Napisz o swoim evencie — data, typ, przybliżona liczba gości. Odpowiem w ciągu 24 godzin.',
    ctaBtn: 'Wyślij zapytanie',
  },
  en: {
    meta: {
      title: 'Corporate Events DJ Warsaw — DJ Litvin | Brand Launches & Galas',
      description: 'Professional DJ for corporate events in Warsaw. Galas, brand launches, conferences, company parties. 6+ years, 500+ events. Trusted by Disney, Coca-Cola, Volkswagen.',
    },
    back: '← Home',
    label: 'Service',
    h1a: 'Corporate',
    h1b: 'Events DJ',
    intro: 'Corporate events follow different rules from private parties. The music can\'t drown out conversations during networking, must stay in sync with the programme, and has to support the brand. I have extensive experience working alongside event agencies, MCs, and technical crews.',
    benefitsLabel: 'How I work',
    benefits: [
      { num: '01', title: 'Music aligned with the brand', desc: 'Genre, tempo, and atmosphere are chosen to reflect the client\'s identity — not every company sounds the same.' },
      { num: '02', title: 'Synchronised with the programme', desc: 'Close coordination with the MC, stage director, and technical crew. Entrances, breaks, presentations — every moment has the right sound.' },
      { num: '03', title: 'Background or full dancefloor', desc: 'From ambient during cocktail hour and lounge during dinner to a full dancefloor set at the end of the event.' },
      { num: '04', title: 'Pro-grade equipment', desc: 'Pioneer DJ CDJ-3000 + DJM-A9. Can also work with AV equipment installed on-site.' },
      { num: '05', title: 'Proven at scale', desc: '500+ events for Disney, Coca-Cola, Deloitte, Santander Bank, Volkswagen, Philips. I know what corporate clients expect.' },
    ],
    eventsLabel: 'Event types',
    events: [
      'Corporate galas and dinners',
      'Product and brand launches',
      'Conferences and hybrid events',
      'Team building and company parties',
      'Office and store openings',
      'VIP events and networking',
      'Fashion shows and presentations',
      'Events commissioned by agencies',
    ],
    faqLabel: 'Frequently asked questions',
    faq: [
      { q: 'How far in advance should I book a DJ for a corporate event?', a: 'Larger events (galas, launches) are best booked 3–6 months in advance. For smaller company parties, lead times are shorter — reach out and I\'ll check availability.' },
      { q: 'Can you play quietly during networking and dinner?', a: 'Yes. I can hold music in the background during conversation and then naturally build energy towards the dancefloor. That\'s a skill that comes from reading rooms over hundreds of events.' },
      { q: 'Can you work to a brand brief from an agency?', a: 'Yes. I work with agency briefs and direct client requirements. Music selection takes into account the brand\'s tone of voice and the format of the event.' },
      { q: 'Do you work with event agencies?', a: 'Yes, regularly. I have experience as a subcontractor for agencies — reliability, communication, and professionalism are standard for me.' },
      { q: 'Do you bring your own equipment?', a: 'Yes — Pioneer DJ CDJ-3000 + DJM-A9. I can also work with the venue\'s AV installation. Just share the technical spec in advance.' },
      { q: 'Do you travel outside Warsaw for corporate events?', a: 'Yes. I\'m based in Warsaw but perform across Poland and throughout Europe. Travel logistics are agreed individually.' },
    ],
    ctaTitle: 'Send an enquiry',
    ctaDesc: 'Tell me about your event — date, type, approximate guest count. I\'ll get back to you within 24 hours.',
    ctaBtn: 'Get in touch',
  },
  ru: {
    meta: {
      title: 'Диджей на корпоратив Варшава — DJ Litvin | Корпоративные мероприятия',
      description: 'Профессиональный диджей на корпоративные мероприятия в Варшаве. Гала-ужины, запуски брендов, конференции. 6+ лет, 500+ событий. Disney, Coca-Cola, Volkswagen.',
    },
    back: '← Главная',
    label: 'Услуга',
    h1a: 'DJ на',
    h1b: 'Корпоратив',
    intro: 'Корпоративное мероприятие подчиняется другим законам, чем частная вечеринка. Музыка не должна заглушать разговоры на нетворкинге, мешать презентациям и должна синхронизироваться с каждым моментом программы. Работаю с ивент-агентствами, ведущими и технической командой.',
    benefitsLabel: 'Как я работаю',
    benefits: [
      { num: '01', title: 'Музыка под бренд', desc: 'Жанр, темп и атмосфера подбираются под идентичность клиента — не все компании звучат одинаково.' },
      { num: '02', title: 'Синхронизация с программой', desc: 'Плотная работа с ведущим, режиссёром сцены и техниками. Выходы, паузы, презентации — каждый момент получает нужный звук.' },
      { num: '03', title: 'Фоновая музыка или танцпол', desc: 'От эмбиента на фуршете до полноценного DJ-сета в завершение мероприятия.' },
      { num: '04', title: 'Профессиональное оборудование', desc: 'Pioneer DJ CDJ-3000 + DJM-A9. Могу работать с AV-оборудованием на площадке.' },
      { num: '05', title: 'Опыт с крупными брендами', desc: '500+ мероприятий для Disney, Coca-Cola, Deloitte, Santander Bank, Volkswagen, Philips.' },
    ],
    eventsLabel: 'Типы мероприятий',
    events: [
      'Корпоративные гала-ужины',
      'Запуски продуктов и брендов',
      'Конференции и гибридные ивенты',
      'Тимбилдинги и корпоративы',
      'Открытия офисов и магазинов',
      'VIP-мероприятия и нетворкинг',
      'Показы мод и fashion-презентации',
      'Мероприятия по заказу ивент-агентств',
    ],
    faqLabel: 'Часто задаваемые вопросы',
    faq: [
      { q: 'За сколько бронировать диджея на корпоратив?', a: 'Крупные мероприятия (гала, запуски) лучше бронировать за 3–6 месяцев. Для небольших корпоративов — сроки короче. Напишите — проверю дату.' },
      { q: 'Можете играть тихо на нетворкинге?', a: 'Да. Умею держать музыку в фоне во время разговоров и плавно поднимать энергию к танцполу. Это навык, который приходит с опытом.' },
      { q: 'Работаете по брифу агентства?', a: 'Да. Работаю с брифами от ивент-агентств и напрямую от клиентов. Подбор музыки учитывает tone of voice бренда и формат мероприятия.' },
      { q: 'Сотрудничаете с ивент-агентствами?', a: 'Да, регулярно. Есть опыт работы субподрядчиком для агентств — пунктуальность, коммуникация, профессионализм — мой стандарт.' },
      { q: 'Привозите своё оборудование?', a: 'Да — Pioneer DJ CDJ-3000 + DJM-A9. Могу работать с AV-установкой на площадке — нужно заранее уточнить технические требования.' },
      { q: 'Работаете за пределами Варшавы?', a: 'Да. Базируюсь в Варшаве, работаю по всей Польше и выезжаю в Европу. Логистику согласовываем индивидуально.' },
    ],
    ctaTitle: 'Отправьте запрос',
    ctaDesc: 'Расскажите о мероприятии — дата, формат, примерное число гостей. Отвечу в течение 24 часов.',
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
      canonical: `${base}/${lang}/dj-na-event-firmowy-warszawa`,
      languages: {
        'pl': `${base}/pl/dj-na-event-firmowy-warszawa`,
        'en': `${base}/en/dj-na-event-firmowy-warszawa`,
        'ru': `${base}/ru/dj-na-event-firmowy-warszawa`,
        'x-default': `${base}/pl/dj-na-event-firmowy-warszawa`,
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `${base}/${lang}/dj-na-event-firmowy-warszawa`,
      images: [{ url: `${base}/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function CorporateDJPage({ params }) {
  params = await params;
  const lang = ['ru', 'pl'].includes(params.lang) ? params.lang : 'en';
  const c = CONTENT[lang];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lang === 'pl' ? 'DJ na event firmowy Warszawa' : lang === 'ru' ? 'DJ на корпоратив Варшава' : 'Corporate Events DJ Warsaw',
    description: c.meta.description,
    provider: { '@id': 'https://litvindj.com/#business' },
    areaServed: [
      { '@type': 'City', name: 'Warsaw' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'AdministrativeArea', name: 'Europe' },
    ],
    url: `https://litvindj.com/${lang}/dj-na-event-firmowy-warszawa`,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="pb-16 md:pb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-beige" />
              <span className="text-beige text-xs font-bold uppercase tracking-[0.4em]">{c.label}</span>
            </div>
            <h1 className="font-header uppercase leading-none mb-8 text-5xl md:text-8xl lg:text-7xl">
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
              alt="DJ Litvin — DJ na event firmowy Warszawa"
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

      {/* Event types */}
      <section className="border-t border-white/5 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-8 bg-beige" />
          <span className="text-beige text-xs font-bold uppercase tracking-[0.4em]">{c.eventsLabel}</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {c.events.map((e, i) => (
            <li key={i} className="flex items-center gap-3 text-grey text-sm border-b border-white/5 pb-4">
              <span className="text-beige shrink-0">—</span>
              {e}
            </li>
          ))}
        </ul>
      </section>

      {/* Photo strip */}
      <div className="w-full grid grid-cols-3 h-52 md:h-80">
        <div className="relative overflow-hidden">
          <Image src="/images/100047381147.jpg" alt="DJ Litvin przy konsoli — event firmowy" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden border-l border-r border-white/10">
          <Image src="/images/100210379934.jpg" alt="Parkiet na evencie firmowym" fill className="object-cover" sizes="33vw" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/NJ0A0027.jpg" alt="Atmosfera eventu" fill className="object-cover" sizes="33vw" />
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
