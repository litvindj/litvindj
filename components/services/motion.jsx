'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Calls fn(progress) on scroll while the element is near the viewport.
// progress: 0 when the element's top hits the bottom of the viewport, 1 when its bottom leaves the top.
function useScrollProgress(ref, fn) {
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let raf = 0;
    let visible = false;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - r.top) / (vh + r.height);
      fn(Math.min(1, Math.max(0, p)), r, vh);
    };
    const onScroll = () => { if (visible && !raf) raf = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) onScroll(); }, { rootMargin: '200px 0px' });
    io.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref, fn]);
}

// Fades and lifts children into place the first time they enter the viewport
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`${className} transition-all duration-[900ms] ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

// Hero photo that drifts slower than the page and slowly zooms out
export function ParallaxImage({ src, alt, sizes, className = '' }) {
  const box = useRef(null);
  const img = useRef(null);
  const fn = useRef((p) => {
    if (!img.current) return;
    img.current.style.transform = `translate3d(0, ${(p - 0.5) * 18}%, 0) scale(${1.18 - p * 0.12})`;
  }).current;
  useScrollProgress(box, fn);
  return (
    <div ref={box} className={`relative overflow-hidden ${className}`}>
      <div ref={img} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.12)' }}>
        <Image src={src} alt={alt} fill priority className="object-cover" sizes={sizes} />
      </div>
    </div>
  );
}

// Giant outlined line of text that slides sideways as you scroll
export function ScrollMarquee({ text, reverse = false }) {
  const box = useRef(null);
  const track = useRef(null);
  const fn = useRef((p) => {
    if (!track.current) return;
    const x = (reverse ? -1 : 1) * (p - 0.5) * 40;
    track.current.style.transform = `translate3d(${-25 + x}%, 0, 0)`;
  }).current;
  useScrollProgress(box, fn);
  const items = Array.from({ length: 6 });
  return (
    <div ref={box} className="overflow-hidden py-6 md:py-10 select-none pointer-events-none" aria-hidden="true">
      <div ref={track} className="flex w-max gap-10 md:gap-16 will-change-transform" style={{ transform: 'translate3d(-25%,0,0)' }}>
        {items.map((_, i) => (
          <span key={i} className={`font-header uppercase whitespace-nowrap leading-none text-[16vw] md:text-[11vw] ${i % 2 ? 'text-white/[0.06]' : 'text-transparent'}`}
            style={i % 2 ? undefined : { WebkitTextStroke: '1px rgba(216,195,165,0.35)' }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// Paragraph whose words light up one by one as it scrolls through the viewport
export function ScrollText({ text, className = '' }) {
  const box = useRef(null);
  const words = text.split(' ');
  const [lit, setLit] = useState(words.length);
  const fn = useRef(null);
  fn.current = fn.current || ((p) => {
    // fully lit by the time the paragraph reaches the middle of the screen
    const k = Math.min(1, Math.max(0, (p - 0.15) / 0.4));
    setLit(Math.round(k * words.length));
  });
  useEffect(() => { if (!reduced()) setLit(0); }, []);
  useScrollProgress(box, fn.current);
  return (
    <p ref={box} className={className}>
      {words.map((w, i) => (
        <span key={i} className={`transition-colors duration-300 ${i < lit ? 'text-white' : 'text-white/15'}`}>{w} </span>
      ))}
    </p>
  );
}

// Section that pins while the photo strip slides horizontally with vertical scroll
export function HorizontalGallery({ photos, lang, title }) {
  const outer = useRef(null);
  const track = useRef(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (reduced()) return;
    const measure = () => {
      if (!track.current) return;
      const extra = track.current.scrollWidth - window.innerWidth;
      setHeight(extra > 0 ? window.innerHeight + extra : null);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!height) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = outer.current;
      const t = track.current;
      if (!el || !t) return;
      const r = el.getBoundingClientRect();
      const distance = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / distance));
      t.style.transform = `translate3d(${-p * (t.scrollWidth - window.innerWidth)}px, 0, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [height]);

  return (
    <section ref={outer} className="border-t border-white/5 relative" style={height ? { height } : undefined}>
      <div className={height ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden' : 'py-16 md:py-24 overflow-x-auto'}>
        <div className="max-w-6xl w-full mx-auto px-6 md:px-12 mb-8 md:mb-10">{title}</div>
        <div ref={track} className="flex gap-4 md:gap-6 w-max px-6 md:px-[max(3rem,calc((100vw-72rem)/2+3rem))] will-change-transform">
          {photos.map((p, i) => (
            <div key={p.src} className="relative shrink-0 overflow-hidden bg-charcoal h-[52vh] md:h-[60vh] aspect-[4/5]">
              <Image src={p.src} alt={p.alt[lang]} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 80vw, 40vw" />
              <span className="absolute left-4 bottom-3 font-header text-white/70 text-sm">{String(i + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
