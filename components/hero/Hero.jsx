'use client';
import Image from 'next/image';

const GENNADY = 'GENNADY'.split('');
const LITVIN  = 'LITVIN'.split('');

const letterStyle = (delay) => ({
  display: 'inline-block',
  animation: 'heroFadeUp 0.55s ease-out both',
  animationDelay: `${delay}s`,
});

const Hero = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-dark"
      style={{ minHeight: '100svh' }}
    >
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

      <div className="relative z-20 text-center flex flex-col items-center select-none px-4 mt-[32vh]">
        <h2
          className="font-header text-5xl md:text-7xl lg:text-8xl text-transparent uppercase tracking-widest mb-2 md:mb-4"
          style={{ WebkitTextStroke: '1px #D8C3A5' }}
        >
          {GENNADY.map((l, i) => (
            <span key={i} style={letterStyle(0.05 + i * 0.07)}>{l}</span>
          ))}
        </h2>

        <div className="relative">
          <h1 className="font-header text-[18vw] md:text-[13rem] leading-[0.8] text-white uppercase mix-blend-overlay tracking-[0.1em] md:tracking-[0.2em]">
            {LITVIN.map((l, i) => (
              <span key={i} style={letterStyle(0.38 + i * 0.08)}>{l}</span>
            ))}
          </h1>
          <h1 className="absolute top-0 left-0 w-full font-header text-[18vw] md:text-[13rem] leading-[0.8] text-transparent uppercase pointer-events-none opacity-30 tracking-[0.1em] md:tracking-[0.2em]"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
            {LITVIN.map((l, i) => (
              <span key={i} style={letterStyle(0.38 + i * 0.08)}>{l}</span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
