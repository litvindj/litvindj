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

const BrandsMarquee = () => {
  const marqueeItems = [...brands, ...brands, ...brands];
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const xRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  useEffect(() => {
    let id;

    const getLoop = () => trackRef.current ? trackRef.current.scrollWidth / 3 : 0;

    const clamp = (x) => {
      const w = getLoop();
      if (!w) return x;
      let v = x % -w;
      if (v > 0) v -= w;
      return v;
    };

    const animate = () => {
      if (!isDragging.current && trackRef.current) {
        xRef.current -= 0.6;
        const w = getLoop();
        if (w && Math.abs(xRef.current) >= w) xRef.current = 0;
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }
      id = requestAnimationFrame(animate);
    };

    const onTouchStart = (e) => {
      isDragging.current = true;
      dragStartX.current = e.touches[0].clientX;
      dragStartOffset.current = xRef.current;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current || !trackRef.current) return;
      e.preventDefault();
      const delta = e.touches[0].clientX - dragStartX.current;
      xRef.current = clamp(dragStartOffset.current + delta);
      trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
    };

    const onTouchEnd = () => { isDragging.current = false; };

    const container = containerRef.current;
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          id = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(id);
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="py-12 md:py-20 border-y border-white/5 overflow-hidden bg-charcoal relative z-30 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-charcoal to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-charcoal to-transparent z-20 pointer-events-none" />
      <div ref={trackRef} className="flex w-max items-center" style={{ willChange: 'transform' }}>
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
  );
};

export default BrandsMarquee;
