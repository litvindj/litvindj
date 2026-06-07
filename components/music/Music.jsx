'use client';
import Image from 'next/image';
import Container from '../layout/Container';

import { useLanguage } from '../../context/LanguageContext';

const Music = () => {
  const { getData, language } = useLanguage();
  const content = getData('music');

  return (
    <section className="py-24 md:py-32 bg-dark relative border-t border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/80 z-10" />
        
        <Image
          src="/images/music-bg.webp"
          alt="Music Background"
          fill
          sizes="100vw"
          className="object-cover opacity-50 grayscale"
        />
      </div>

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(216, 195, 165, 0.08) 0%, transparent 70%)'
        }}
      />

      <Container className="relative z-20">
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <h2 className={`font-header uppercase leading-none text-white mb-6
            ${language === 'ru' 
              ? 'text-5xl md:text-7xl tracking-normal'
              : 'text-6xl md:text-8xl'}`} 
          >
            {content.title} <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
              {content.titleStroke}
            </span>
          </h2>
          
          <p className="text-grey text-sm md:text-base max-w-lg mx-auto">
            {content.desc}
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {[
            '2yhvcmtTMF4D86l7XIkDoR',
            '4Wx0WyDpZkwYztO7wyk23M',
          ].map((id) => (
            <div key={id} className="group relative bg-charcoal/60 p-1 md:p-2 border border-white/10 hover:border-beige/40 transition-all duration-500 shadow-2xl">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator`}
                width="100%"
                height="450"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '0px' }}
                className="relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Music;