'use client';
import { useEffect, useRef, useState } from 'react';

const GENNADY = 'GENNADY'.split('');
const LITVIN  = 'LITVIN'.split('');

const letterStyle = (delay) => ({
  display: 'inline-block',
  animation: 'heroFadeUp 0.55s ease-out both',
  animationDelay: `${delay}s`,
});

const Hero = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 1024;
    const connection = navigator.connection;
    const savesData = connection?.saveData || ['slow-2g', '2g'].includes(connection?.effectiveType);

    // Video is shot portrait — only worth showing on phone-sized viewports.
    // Desktop stays a flat dark background; nothing is fetched there.
    if (prefersReducedMotion || !isMobile || savesData) return;

    const onCanPlay = () => {
      video.play().catch(() => {});
      setVideoReady(true);
    };
    video.addEventListener('canplay', onCanPlay);
    video.src = '/videos/hero-mobile.mp4';
    video.load();

    return () => video.removeEventListener('canplay', onCanPlay);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-dark" style={{ height: 'var(--app-height, 100svh)' }}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-700"
          style={{ backfaceVisibility: 'hidden', opacity: videoReady ? 0.6 : 0 }}
        />
        <div className="absolute inset-0 bg-dark/10 z-10" />
      </div>

      <div className="relative z-20 text-center flex flex-col items-center select-none px-4">
        <h2
          className="font-header text-5xl md:text-7xl lg:text-8xl text-transparent uppercase tracking-widest mb-2 md:mb-4"
          style={{ WebkitTextStroke: '1px #D8C3A5' }}
        >
          {GENNADY.map((l, i) => (
            <span key={i} style={letterStyle(0.05 + i * 0.07)}>{l}</span>
          ))}
        </h2>

        <div className="relative">
          <h1 className="font-header text-[18vw] md:text-[13rem] leading-[0.8] text-white uppercase tracking-[0.1em] md:tracking-[0.2em]">
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
