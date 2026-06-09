'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Stats = ({ language }) => {
  const ref = useRef(null);
  const [events, setEvents] = useState(0);
  const [years,  setYears]  = useState(0);
  const [brands, setBrands] = useState(0);

  useEffect(() => {
    const vh = window.innerHeight;
    const onScroll = () => {
      let progress;

      if (window.innerWidth >= 1024) {
        const raw = window.scrollY / vh;
        progress = Math.max(0, Math.min(1, (raw - 0.15) / (0.7 - 0.15)));
      } else {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        progress = Math.max(0, Math.min(1, (vh * 0.8 - rect.top) / (vh * 0.7)));
      }

      setEvents(Math.floor(progress * 500));
      setYears( Math.floor(progress * 6));
      setBrands(Math.floor(progress * 25));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const labels = {
    en: ['Events', 'Years', 'Brands'],
    ru: ['Ивентов', 'Лет', 'Брендов'],
    pl: ['Eventów', 'Lat', 'Marek'],
  };
  const [l1, l2, l3] = labels[language] || labels.en;

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-10">
      {[
        { count: events, suffix: '+', label: l1 },
        { count: years,  suffix: '+', label: l2 },
        { count: brands, suffix: '+', label: l3 },
      ].map(({ count, suffix, label }) => (
        <div key={label} className="flex flex-col">
          <span className="font-header text-3xl md:text-4xl text-white leading-none tabular-nums">
            {count}{suffix}
          </span>
          <span className="text-beige text-[10px] uppercase tracking-widest mt-1 font-bold">{label}</span>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section className="w-full flex flex-col lg:flex-row bg-dark relative lg:min-h-screen">

      <div className="w-full lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">

        <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto lg:min-h-screen w-full group overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="absolute inset-0 bg-beige/5 mix-blend-overlay z-10 pointer-events-none"></div>
          <Image
            src="/images/about.JPG"
            alt="Gennady Litvin"
            fill
            className="object-cover transition-all duration-1000"
            style={{ objectPosition: '50% 5%' }}
          />
        </div>

        <div className="w-full flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 relative z-10 bg-dark">

          <h2 className={`font-header text-white uppercase leading-[0.9] mb-8 text-4xl sm:text-5xl md:text-7xl lg:text-[4vw]`}>
            {t('about.title1')}
          </h2>

          <div className="space-y-4 mb-6 text-grey text-sm md:text-base font-light leading-relaxed max-w-lg">
            <p>{t('about.desc1')}</p>
            <p className="text-white font-normal">{t('about.desc2')}</p>
          </div>

          <div className="py-5 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className={`text-beige text-xs font-bold uppercase ${language === 'ru' ? 'tracking-wide' : 'tracking-widest'}`}>
              {t('about.languagesLabel')}:
            </span>
            <span className="text-grey text-xs font-bold tracking-wide">{t('about.languagesList')}</span>
          </div>

          <Stats language={language} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <span className={`block text-beige text-[10px] uppercase mb-3 font-bold ${language === 'ru' ? 'tracking-wide' : 'tracking-widest'}`}>
                {t('about.resident')}
              </span>
              <ul className="text-white font-header text-lg uppercase leading-snug space-y-1">
                <li>Baila Show & Dining</li>
                <li>EWNS</li>
                <li>Dock19 <span className="text-grey text-xs normal-case font-sans tracking-normal opacity-70">by Mateusz Gessler</span></li>
              </ul>
            </div>
            <div>
              <span className={`block text-beige text-[10px] uppercase mb-3 font-bold ${language === 'ru' ? 'tracking-wide' : 'tracking-widest'}`}>
                {t('about.trusted')}
              </span>
              <p className="text-grey text-sm leading-relaxed">{t('about.trustedDesc')}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
