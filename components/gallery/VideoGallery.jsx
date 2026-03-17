'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import { useLanguage } from '../../context/LanguageContext';

const VideoGallery = () => {
  const { getData } = useLanguage();
  const content = getData('gallery');
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.src = '/videos/bgyoutube.mp4';
            videoRef.current.load();
            videoRef.current.play().catch(() => {});
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden border-t border-white/5 bg-dark" style={{ height: '100vh' }}>
      <div className="absolute inset-0 z-0 bg-black">
        <video ref={videoRef} loop muted playsInline preload="none"
          className="w-full h-full object-cover grayscale transform-gpu will-change-transform">
        </video>
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent z-20 opacity-90 pointer-events-none" />
      </div>
      <Container className="relative z-30 h-full flex flex-col items-center justify-center text-center">
        <h2 className="font-header text-5xl md:text-8xl uppercase text-white mb-12">
          {content.title}{' '}
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{content.titleStroke}</span>
        </h2>
        <a href="https://www.youtube.com/@litvindj" target="_blank" rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-24 h-16 md:w-32 md:h-24 transition-transform duration-500 hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-full h-full text-beige group-hover:text-white transition-colors duration-300 drop-shadow-2xl">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      </Container>
    </section>
  );
};

export default VideoGallery;
