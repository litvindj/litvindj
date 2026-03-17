'use client';
import React from 'react';
import Container from '../layout/Container';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { getData, language } = useLanguage(); 
  const content = getData('services');
  const servicesList = content.items;

  const scrollToContact = () => {
    const contactSection = document.getElementById('footer-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-dark relative border-t border-white/5">
      <Container>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-beige"></span>
                <span className={`text-beige text-xs font-bold uppercase ${language === 'ru' ? 'tracking-widest' : 'tracking-[0.4em]'}`}>
                  {content.label}
                </span>
              </div>
            
            <h2 className={`font-header uppercase text-white leading-none
              ${language === 'ru' 
                ? 'text-4xl md:text-6xl tracking-normal' 
                : 'text-5xl md:text-7xl'}`}
            >
              {content.titlePart1} <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
                {content.titlePart2}
              </span>
            </h2>
          </div>
          
          <p className="text-grey max-w-sm text-sm md:text-base leading-relaxed text-right md:text-right">
            {content.subtitleMain}
            <span className="text-white font-bold block mt-1">
              {content.subtitleHighlight}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-charcoal border border-white/10 p-8 hover:bg-charcoal/80 hover:border-beige/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-beige transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-beige transition-colors duration-500" />

              <div className="mb-6">
                <span className="font-header text-4xl text-white/10 group-hover:text-beige transition-colors duration-500">
                  {item.id}
                </span>
              </div>

              <h3 className={`font-header uppercase mb-4 transition-transform duration-300 group-hover:translate-x-2 text-white
                ${language === 'ru' 
                  ? 'text-xl tracking-normal leading-snug' 
                  : 'text-2xl tracking-wide'}`}
              >
                {item.title}
              </h3>
              
              <p className="text-grey text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-beige/30 transition-colors duration-500">
                {item.description}
              </p>

            </div>
          ))}

          <div 
            onClick={scrollToContact}
            className="bg-beige flex flex-col justify-center items-center text-center p-8 cursor-pointer hover:bg-white transition-colors duration-300 group"
          >
            <h3 className={`font-header text-dark uppercase mb-2
              ${language === 'ru' ? 'text-2xl tracking-normal' : 'text-3xl'}`}>
              {content.bookBtn}
            </h3>
            <p className="text-dark/70 text-sm mb-6">
              {content.bookDesc}
            </p>
            <div className="w-12 h-12 rounded-full border border-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-dark"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Services;