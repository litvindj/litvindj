'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// Final stat values — these are the real numbers and must be what renders
// on the server (and thus in the HTML Google/no-JS users see).
const STAT_VALUES = { events: 500, years: 6, brands: 25 };
const ANIMATION_DURATION = 1600; // ms
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Stats = ({ language }) => {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  // Initialize to the FINAL values, not 0 — this is what the server renders
  // and what shows up before/without JS. The count-up below is purely a
  // client-side enhancement layered on top of already-correct numbers.
  const [events, setEvents] = useState(STAT_VALUES.events);
  const [years,  setYears]  = useState(STAT_VALUES.years);
  const [brands, setBrands] = useState(STAT_VALUES.brands);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return; // keep final values, skip animation entirely

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      setEvents(0);
      setYears(0);
      setBrands(0);

      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / ANIMATION_DURATION);
        const eased = easeOutCubic(progress);
        setEvents(Math.round(eased * STAT_VALUES.events));
        setYears(Math.round(eased * STAT_VALUES.years));
        setBrands(Math.round(eased * STAT_VALUES.brands));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) runAnimation(); }),
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const labels = {
    en: ['Events', 'Years', 'Brands'],
    ru: ['Ивентов', 'Лет', 'Брендов'],
    pl: ['Eventów', 'Lat', 'Marek'],
  };
  const [l1, l2, l3] = labels[language] || labels.en;

  const stats = [
    { count: events, final: STAT_VALUES.events, suffix: '+', label: l1 },
    { count: years,  final: STAT_VALUES.years,  suffix: '+', label: l2 },
    { count: brands, final: STAT_VALUES.brands, suffix: '+', label: l3 },
  ];

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-10">
      {stats.map(({ count, final, suffix, label }) => (
        <div key={label} className="flex flex-col">
          <span
            className="font-header text-3xl md:text-4xl text-white leading-none tabular-nums inline-block"
            style={{ minWidth: `${String(final).length + suffix.length}ch` }}
          >
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
