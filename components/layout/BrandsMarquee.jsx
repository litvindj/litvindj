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

  useEffect(() => {
    let id;

    const animate = () => {
      if (trackRef.current) {
        xRef.current -= 0.6;
        const singleSetWidth = trackRef.current.scrollWidth / 3;
        if (Math.abs(xRef.current) >= singleSetWidth) xRef.current = 0;
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }
      id = requestAnimationFrame(animate);
    };

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

    if (containerRef.current) observer.observe(containerRef.current);

    return () => { cancelAnimationFrame(id); observer.disconnect(); };
  }, []);

  return (
    <div ref={containerRef} className="py-12 md:py-20 border-y border-white/5 overflow-hidden bg-charcoal relative z-30 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-charcoal to-transparent z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-charcoal to-transparent z-20" />
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
