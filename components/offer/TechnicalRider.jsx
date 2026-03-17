'use client';
import Image from 'next/image';
import Container from '../layout/Container';
import { useLanguage } from '../../context/LanguageContext';

const TechnicalRider = () => {
  const { getData, language } = useLanguage();
  const content = getData('rider');
  const gearList = content.items;

  return (
    <section className="py-24 md:py-32 bg-dark relative z-30 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-beige"></span>
                <span className={`text-beige text-xs font-bold uppercase ${language === 'ru' ? 'tracking-widest' : 'tracking-[0.4em]'}`}>
                  {content.label}
                </span>
              </div>
              <h2 className={`font-header uppercase text-white leading-none mb-6 ${language === 'ru' ? 'text-4xl md:text-6xl tracking-normal' : 'text-5xl md:text-7xl'}`}>
                {content.titlePart1} <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>{content.titlePart2}</span>
              </h2>
              <div className="bg-white/5 border border-white/10 p-6 mb-8">
                <p className="text-grey text-sm md:text-base leading-relaxed">
                  <span className="text-white font-bold block mb-2 uppercase tracking-wider text-xs">{content.noteLabel}</span>
                  {content.noteText}
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {gearList.map((item, index) => (
                <li key={index} className="group relative flex items-center py-4 border-b border-white/10 hover:border-beige transition-colors duration-300 cursor-default">
                  <span className="w-1.5 h-1.5 bg-beige rounded-full mr-4 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></span>
                  <span className={`font-header text-white/60 uppercase group-hover:text-white group-hover:translate-x-2 transition-all duration-300 ${language === 'ru' ? 'text-lg md:text-xl tracking-wide' : 'text-xl md:text-2xl'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 h-full min-h-[400px] relative group">
            <div className="relative h-full w-full overflow-hidden border border-white/10" style={{ minHeight: '400px' }}>
              <div className="absolute inset-0 bg-beige/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <Image src="/images/rider.jpg" alt="DJ Setup Equipment — Pioneer CDJ-3000" fill
                className="object-cover grayscale contrast-125 lg:group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-beige z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-beige z-20"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border border-white/5 -z-10 hidden md:block"></div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TechnicalRider;
