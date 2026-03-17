'use client';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-svh flex flex-col items-center justify-center overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-dark/10 z-10" />
        <Image
          src="/images/hero.png"
          alt="Gennady Litvin DJ"
          fill
          priority
          className="object-cover opacity-60 grayscale"
          style={{ backfaceVisibility: 'hidden' }}
        />
      </div>

      <div className="relative z-20 text-center flex flex-col items-center select-none px-4">
        <span className="text-beige text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-6 animate-pulse">
          {t('hero.official')}
        </span>

        <h2 className="font-header text-5xl md:text-7xl lg:text-8xl text-transparent uppercase tracking-widest mb-2 md:mb-4" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
          GENNADY
        </h2>

        <div className="relative">
          <h1 className="font-header text-[18vw] md:text-[13rem] leading-[0.8] text-white uppercase mix-blend-overlay tracking-[0.1em] md:tracking-[0.2em]">
            LITVIN
          </h1>
          <h1 className="absolute top-0 left-0 w-full font-header text-[18vw] md:text-[13rem] leading-[0.8] text-transparent uppercase pointer-events-none opacity-30 tracking-[0.1em] md:tracking-[0.2em]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
            LITVIN
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
