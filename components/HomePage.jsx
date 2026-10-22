'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navbar from './layout/Navbar';
import Hero from './hero/Hero';
import About from './about/About';
import Events from './offer/Events';
import Music from './music/Music';
import VideoGallery from './gallery/VideoGallery';
import PhotoGallery from './gallery/PhotoGallery';
import ClientLogos from './layout/ClientLogos';
import Footer from './layout/Footer';

export default function HomePage({ logos = [] }) {
  const heroWrapperRef = useRef(null);
  const aboutWrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Links like /ru#footer-section (blog CTA, menu from other pages): the browser's own anchor jump
  // happens before the sticky hero is laid out, so scroll to the section ourselves once it has rendered.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const go = () => {
      const el = document.getElementById(hash);
      if (!el) return;
      const extra = hash === 'about-section' ? window.innerHeight * (window.innerWidth < 1024 ? 1.0 : 0.55) : 0;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset + extra, behavior: 'instant' });
    };
    const t1 = setTimeout(go, 50);
    const t2 = setTimeout(go, 600); // again after images and fonts have settled
    const t3 = setTimeout(() => history.replaceState(null, '', window.location.pathname), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (aboutWrapperRef.current) aboutWrapperRef.current.style.opacity = '';
      return;
    }
    if (aboutWrapperRef.current) aboutWrapperRef.current.style.opacity = '0';
    let requestIds;
    const animate = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      if (scrollY > vh * 2.0) { requestIds = requestAnimationFrame(animate); return; }
      const progress = scrollY / vh;

      if (heroWrapperRef.current) {
        const opacity = Math.max(0, 1 - progress * 3.5);
        heroWrapperRef.current.style.opacity = opacity;
        heroWrapperRef.current.style.visibility = opacity <= 0.01 ? 'hidden' : 'visible';
      }

      if (aboutWrapperRef.current) {
        const startFade = 0.15;
        const aboutProgress = Math.max(0, (progress - startFade) / (0.55 - startFade));
        const opacity = Math.min(1, aboutProgress);
        aboutWrapperRef.current.style.opacity = opacity;
      }
      requestIds = requestAnimationFrame(animate);
    };
    requestIds = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestIds);
  }, [isMobile]);

  return (
    <div className="bg-dark text-white min-h-screen relative selection:bg-beige selection:text-dark">
      <div>
        <Navbar />

        <main className="w-full relative">
          <div id="about-section" className="relative w-full lg:h-[170vh]">
            <div className="relative w-full lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
              <div id="hero-image-layer" ref={heroWrapperRef}
                className="w-full z-10 lg:absolute lg:inset-0 lg:h-full will-change-transform origin-center"
                style={{ height: 'var(--app-height, 100svh)' }}>
                <Hero />
              </div>
              <div ref={aboutWrapperRef}
                className="relative w-full z-20 bg-dark lg:absolute lg:inset-0 lg:h-full lg:bg-transparent lg:flex lg:items-center lg:justify-center will-change-transform lg:opacity-0">
                <About />
              </div>
            </div>
          </div>

          <div id="services-section" className="relative z-30 bg-dark"><Events /></div>
          <div id="music-section"    className="relative z-30 bg-dark"><Music /></div>
          <div id="gallery-section" className="relative z-30 bg-dark">
            <PhotoGallery />
            <VideoGallery />
          </div>
          <div id="clients-section" className="relative z-30 bg-dark"><ClientLogos logos={logos} /></div>
          <div id="footer-section"  className="relative z-30"><Footer /></div>
        </main>
      </div>
    </div>
  );
}
