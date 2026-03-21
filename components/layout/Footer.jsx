'use client';
import Container from './Container';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { getData, language } = useLanguage();
  const content = getData('footer');

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/litvin.dj?igsh=MWJmZDl6d3dzanh4ag==', action: 'Follow',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { name: 'Spotify', url: 'https://open.spotify.com/playlist/2yhvcmtTMF4D86l7XIkDoR?si=kQ-Y0BNOSnWVBBWnGccRvg', action: 'Listen',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.38 9.841-.719 13.44 1.5.42.3.6.84.301 1.32zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.32z"/></svg> },
    { name: 'Telegram', url: 'https://t.me/litdj', action: 'Chat',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
    { name: 'WhatsApp', url: 'https://wa.me/48884325413', action: 'Chat',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> },
  ];

  const inputStyles = 'w-full bg-black/20 border border-white/10 text-white placeholder-white/30 px-6 py-4 focus:outline-none focus:border-beige focus:bg-black/40 transition-all duration-300 text-base rounded-none';

  return (
    <footer className="relative z-30 bg-dark pt-24 md:pt-32 pb-8 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-80 bg-beige/3 blur-3xl md:blur-[120px] pointer-events-none rounded-full transform-gpu" />
      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32 items-start">
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
              <h2 className={`font-header text-white uppercase leading-tight mb-6 ${language === 'ru' ? 'text-3xl md:text-5xl tracking-normal' : 'text-4xl md:text-6xl tracking-tight'}`}>
                {content.title}
              </h2>
              <p className={`font-header text-beige uppercase ${language === 'ru' ? 'text-xl md:text-2xl tracking-wide' : 'text-2xl md:text-3xl tracking-widest'}`}>
                {content.subtitle}
              </p>
            </div>
            <form action="https://formsubmit.co/booking@litvindj.com" method="POST"
              className="w-full flex flex-col gap-5 text-left bg-charcoal/30 p-8 md:p-10 border border-white/5 shadow-2xl">
              <input type="hidden" name="_subject" value="New Booking Request from Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://litvindj.com/thank-you" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="name" placeholder={content.formName} required className={inputStyles} />
                <input type="email" name="email" placeholder={content.formEmail} required className={inputStyles} />
              </div>
              <textarea name="message" placeholder={content.formMessage} required rows="4" className={`${inputStyles} resize-none`}></textarea>
              <div className="flex justify-center lg:justify-start mt-4">
                <button type="submit" className="group relative inline-flex items-center justify-center bg-beige text-dark font-header text-lg md:text-xl uppercase px-14 py-4 overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg">
                  <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className={`relative z-10 ${language === 'ru' ? 'tracking-normal font-medium' : 'tracking-wider group-hover:tracking-widest'}`}>{content.formSend}</span>
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center mb-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 border-y border-white/5 py-8 w-full">
              <a href="tel:+48884325413" className="font-header text-white uppercase hover:text-beige transition-colors duration-300 text-lg md:text-2xl tracking-wider whitespace-nowrap">+48 884 325 413</a>
              <span className="w-2 h-2 bg-beige rounded-full opacity-60 shrink-0 hidden md:block" />
              <span className="font-header text-grey uppercase text-lg md:text-2xl tracking-wider whitespace-nowrap">Warsaw, Poland</span>
              <span className="w-2 h-2 bg-beige rounded-full opacity-60 shrink-0 hidden md:block" />
              <a href="mailto:booking@litvindj.com" className="font-header text-white uppercase hover:text-beige transition-colors duration-300 text-lg md:text-2xl tracking-wider whitespace-nowrap">booking@litvindj.com</a>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 relative z-10 px-4 md:px-0">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className="group relative border border-white/10 py-8 md:py-10 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-beige/50 hover:-translate-y-1">
                <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-grey group-hover:text-beige text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 transition-colors">{link.action}</span>
                <span className="relative z-10 text-white group-hover:scale-110 transition-transform duration-500">{link.icon}</span>
              </a>
            ))}
          </div>

          <div className="w-full pt-8 border-t border-white/10 flex justify-center items-center text-center relative z-10">
            <p className={`text-grey/80 text-[10px] uppercase leading-loose max-w-3xl ${language === 'ru' ? 'tracking-normal' : 'tracking-widest'}`}>
              © 2026 Gennady Litvin. {content.rights}
              <span className="hidden sm:inline mx-3 opacity-30">|</span>
              <br className="sm:hidden" />
              {content.design}{' '}
              <a href="https://onushch.com/" target="_blank" rel="noopener noreferrer"
                className="font-bold text-beige hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-px">
                ONUSHCH
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
