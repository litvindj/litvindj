'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'DoubleTop',  src: '/brands/1one.png' },
  { name: 'Disney',     src: '/brands/6ix.png',  keepWhite: true },
  { name: 'Coca-Cola',  src: '/brands/4four.png' },
  { name: 'Philips',    src: '/brands/10en.png' },
  { name: 'Volkswagen', src: '/brands/11wen.png' },
  { name: 'Santander',  src: '/brands/2two.png' },
  { name: 'Evolution',  src: '/brands/7even.png', keepWhite: true },
  { name: 'Luxmed',     src: '/brands/9ine.png' },
];

const DURATION = 22; // seconds for one full loop

const BrandsMarquee = () => {
  const marqueeItems = [...brands, ...brands];
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let touchStartX = 0;
    let touchStartPx = 0;

    const getLoopWidth = () => track.scrollWidth / 2;

    const getCurrentX = () => {
      const matrix = new DOMMatrix(window.getComputedStyle(track).transform);
      return matrix.m41;
    };

    const onTouchStart = (e) => {
      const w = getLoopWidth();
      const currentX = getCurrentX();
      touchStartX = e.touches[0].clientX;
      touchStartPx = currentX;

      // Freeze animation at current position
      track.style.animation = 'none';
      track.style.transform = `translateX(${currentX}px)`;
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      const w = getLoopWidth();
      if (!w) return;
      const delta = e.touches[0].clientX - touchStartX;
      let x = touchStartPx + delta;
      // Keep within loop bounds
      x = ((x % -w) + -w) % -w;
      track.style.transform = `translateX(${x}px)`;
    };

    const onTouchEnd = () => {
      const w = getLoopWidth();
      const currentX = getCurrentX();
      const progress = Math.abs(currentX) / w;
      // Resume CSS animation from current position
      track.style.transform = '';
      track.style.animation = `marquee-scroll ${DURATION}s linear infinite`;
      track.style.animationDelay = `-${progress * DURATION}s`;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div ref={containerRef} className="py-12 md:py-20 border-y border-white/5 overflow-hidden bg-charcoal relative z-30 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-charcoal to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-charcoal to-transparent z-20 pointer-events-none" />
        <div
          ref={trackRef}
          className="flex w-max items-center"
          style={{ animation: `marquee-scroll ${DURATION}s linear infinite` }}
        >
          {marqueeItems.map((brand, i) => (
            <div key={i} className="flex shrink-0 items-center justify-center px-8 md:px-16 group/logo">
              <Image src={brand.src} alt={brand.name} width={120} height={48}
                className={`h-8 md:h-12 w-auto object-contain opacity-70 transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:scale-110 ${
                  brand.keepWhite
                    ? 'brightness-0 invert'
                    : 'brightness-0 invert group-hover/logo:brightness-100 group-hover/logo:invert-0'
                }`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandsMarquee;
