'use client';
import React from 'react';
import Container from '../layout/Container';
import { useLanguage } from '../../context/LanguageContext';

const Events = () => {
  const { getData, language } = useLanguage(); 
  const content = getData('events');
  const eventTypes = content.items;  

  return (
    <section id="events-section" className="py-24 md:py-32 bg-dark relative z-30 border-t border-white/5">
      <Container>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-beige"></span>
                <span className={`text-beige text-xs font-bold uppercase 
                  ${language === 'ru' ? 'tracking-widest' : 'tracking-[0.4em]'}`}>
                  {content.label}
                </span>
              </div>
              
              <h2 className={`font-header uppercase text-white leading-none mb-6
                 ${language === 'ru' ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'}`}>
                {content.titlePart1} <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
                  {content.titlePart2}
                </span>
              </h2>

              <p className="text-grey text-sm leading-relaxed max-w-xs">
                {content.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="group/list flex flex-col hover:text-white/20 transition-colors duration-500">
              {eventTypes.map((item) => (
                <li 
                  key={item.id} 
                  className="relative border-b border-white/10 py-8 md:py-10 cursor-default transition-all duration-500 hover:text-white! lg:hover:pl-4 hover:border-beige/30 group/item"
                >
                  <div className="flex flex-col gap-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-4 md:gap-6">
                        <span className="font-header text-beige/50 text-xl md:text-2xl group-hover/item:text-beige transition-colors duration-300">
                            {item.id}
                        </span>
                        <h3 className={`font-header uppercase tracking-wide transition-colors duration-300 text-white group-hover/item:text-beige
                           ${language === 'ru' ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl'}`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <span className="opacity-0 -translate-x-4 group-hover/list:hover:opacity-100 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 text-beige shrink-0 ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </span>
                    </div>

                    <p className="text-grey text-sm md:text-base leading-relaxed max-w-2xl pl-0 md:pl-[3.5rem] group-hover/item:text-white/80 transition-colors duration-300">
                        {item.description}
                    </p>

                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Events;