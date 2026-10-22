'use client';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

const HEADING = { en: 'Trusted by', pl: 'Zaufali mi', ru: 'Мне доверяют' };

// logos come from lib/clientLogos.server.js (sizes computed at build time)
export default function ClientLogos({ logos = [] }) {
  const { language } = useLanguage();
  if (!logos.length) return null;

  return (
    <section className="py-16 md:py-24 border-y border-white/5 bg-charcoal relative z-30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <span className="h-px w-8 bg-beige" />
          <h2 className="text-beige text-xs font-bold uppercase tracking-[0.3em]">{HEADING[language] || HEADING.en}</h2>
          <span className="h-px w-8 bg-beige" />
        </div>
        {/* flex-wrap (not grid) so an incomplete last row stays centred */}
        <ul className="flex flex-wrap justify-center gap-y-10 md:gap-y-14 [--logo-k:0.72] md:[--logo-k:0.9] lg:[--logo-k:1]">
          {logos.map((logo) => (
            <li key={logo.name} className="group basis-1/3 md:basis-1/4 lg:basis-1/6 flex items-center justify-center px-3 md:px-5 h-14 md:h-16">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                sizes="160px"
                className="h-auto max-w-full brightness-0 invert opacity-45 transition-opacity duration-300 lg:group-hover:opacity-100"
                style={{ width: `calc(${logo.displayWidth}px * var(--logo-k))` }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
