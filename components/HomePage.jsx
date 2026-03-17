'use client';
import { useEffect, useRef, useState } from 'react';
import Preloader from './layout/Preloader';
import Navbar from './layout/Navbar';
import Hero from './hero/Hero';
import About from './about/About';
import Services from './offer/Services';
import Events from './offer/Events';
import TechnicalRider from './offer/TechnicalRider';
import Music from './music/Music';
import VideoGallery from './gallery/VideoGallery';
import BrandsMarquee from './layout/BrandsMarquee';
import Footer from './layout/Footer';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const heroWrapperRef = useRef(null);
  const aboutWrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || isLoading) return;
    let requestIds;
    const animate = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      if (scrollY > vh * 2.5) { requestIds = requestAnimationFrame(animate); return; }
      const progress = scrollY / vh;

      if (heroWrapperRef.current) {
        const opacity = Math.max(0, 1 - progress * 2.5);
        heroWrapperRef.current.style.opacity = opacity;
        heroWrapperRef.current.style.visibility = opacity <= 0.01 ? 'hidden' : 'visible';
      }

      if (aboutWrapperRef.current) {
        const startFade = 0.3;
        const aboutProgress = Math.max(0, (progress - startFade) / (0.8 - startFade));
        const opacity = Math.min(1, aboutProgress * 2);
        aboutWrapperRef.current.style.opacity = opacity;
      }
      requestIds = requestAnimationFrame(animate);
    };
    requestIds = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestIds);
  }, [isMobile, isLoading]);

  return (
    <div className="bg-dark text-white min-h-screen relative selection:bg-beige selection:text-dark">
      {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}

      <div className={`transition-opacity duration-1000 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />

        <main className="w-full relative">
          <div id="about-section" className="relative w-full lg:h-[200vh]">
            <div className="relative w-full lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
              <div id="hero-image-layer" ref={heroWrapperRef}
                className="w-full h-[100svh] z-10 lg:absolute lg:inset-0 lg:h-full will-change-transform origin-center">
                <Hero />
              </div>
              <div ref={aboutWrapperRef}
                className="relative w-full z-20 bg-dark lg:absolute lg:inset-0 lg:h-full lg:bg-transparent lg:opacity-0 lg:flex lg:items-center lg:justify-center will-change-transform">
                <About />
              </div>
            </div>
          </div>

          <div id="events-section" className="relative z-30 bg-dark"><Events /></div>
          <div id="services-section" className="relative z-30 bg-dark shadow-2xl"><Services /></div>
          <div id="rider-section" className="relative z-30 bg-dark"><TechnicalRider /></div>
          <div id="music-section" className="relative z-30 bg-dark"><Music /></div>
          <div id="gallery-section" className="relative z-30 bg-dark"><VideoGallery /></div>
          <div className="relative z-30 bg-dark"><BrandsMarquee /></div>
          <div id="footer-section" className="relative z-30"><Footer /></div>
        </main>
      </div>
    </div>
  );
}
