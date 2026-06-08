'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

const glassStyle = {
  backdropFilter: 'blur(72px) saturate(210%) brightness(1.08)',
  WebkitBackdropFilter: 'blur(72px) saturate(210%) brightness(1.08)',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.05) 100%)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.08), 0 12px 48px rgba(0,0,0,0.4)',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const isManualScroll = useRef(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isBlogPage = pathname?.includes('/blog');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const links = [
    { name: t('navbar.Home'),    targetId: 'root',            isProfile: false, originalName: 'Home' },
    { name: t('navbar.About'),   targetId: 'about-section',   isProfile: true,  originalName: 'About' },
    { name: t('navbar.Music'),   targetId: 'music-section',   isProfile: false, originalName: 'Music' },
    { name: t('navbar.Gallery'), targetId: 'gallery-section', isProfile: false, originalName: 'Gallery' },
    { name: t('navbar.Contact'), targetId: 'footer-section',  isProfile: false, originalName: 'Contact' },
    { name: t('navbar.Blog'),    href: `/${language}/blog`,                     originalName: 'Blog' },
  ];

  useEffect(() => {
    const handleScrollSpy = () => {
      if (isManualScroll.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollY < windowHeight * 0.3) { setActiveSection('Home'); return; }
      if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 50) { setActiveSection('Contact'); return; }
      for (const link of links) {
        const element = document.getElementById(link.targetId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= (offsetTop - windowHeight * 0.4) && scrollY < (offsetTop + offsetHeight - windowHeight * 0.4)) {
            setActiveSection(link.originalName);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleScroll = (e, targetId, isProfile, linkName) => {
    e.preventDefault();
    setIsOpen(false);
    isManualScroll.current = true;
    setActiveSection(linkName);
    setTimeout(() => { isManualScroll.current = false; }, 1000);
    if (targetId === 'root') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      let extraOffset = 0;
      if (isProfile) {
        const factor = window.innerWidth < 1024 ? 1.0 : 0.55;
        extraOffset = window.innerHeight * factor;
      }
      window.scrollTo({ top: elementPosition + extraOffset, behavior: 'smooth' });
    }
  };

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
    { code: 'ru', label: 'RU' },
  ];

  const LangSwitcher = () => (
    <div className="flex items-center gap-3 pl-4 border-l border-white/20">
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative font-header text-xs tracking-widest uppercase transition-colors duration-200 pb-0.5 ${
            language === lang.code ? 'text-beige' : 'text-white/40 hover:text-white/70'
          }`}
        >
          {lang.label}
          {language === lang.code && (
            <span className="absolute bottom-0 left-0 w-full h-px bg-beige" />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center pointer-events-none">

        {/* Logo pill */}
        <a href="#" onClick={(e) => handleScroll(e, 'root', false, 'Home')}
          className="font-header text-white hover:text-beige transition-colors z-[60] relative select-none pointer-events-auto flex items-center justify-center px-5 py-2.5 rounded-full"
          style={glassStyle}>
          <span style={{ transform: 'scaleY(0.78)', display: 'inline-block', fontSize: '1.1rem', letterSpacing: '-0.05em' }}>
            LITVIN
          </span>
        </a>

        {/* Desktop nav pill */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 text-white pointer-events-auto px-6 lg:px-8 py-3 rounded-full"
          style={glassStyle}>
          {links.map((link) => (
            link.href ? (
              <Link key={link.originalName} href={link.href}
                className={`group relative font-header uppercase transition-colors cursor-pointer text-center
                  ${language === 'ru' ? 'text-xs tracking-normal font-medium' : 'text-xs tracking-[0.18em]'}
                  ${activeSection === link.originalName || isBlogPage ? 'text-white' : 'text-white/55 hover:text-white'}`}>
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-beige transition-all duration-300 ${activeSection === link.originalName || isBlogPage ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
              </Link>
            ) : (
              <a key={link.originalName} href={`#${link.targetId}`}
                onClick={(e) => handleScroll(e, link.targetId, link.isProfile, link.originalName)}
                className={`group relative font-header uppercase transition-colors cursor-pointer text-center
                  ${language === 'ru' ? 'text-xs tracking-normal font-medium' : 'text-xs tracking-[0.18em]'}
                  ${activeSection === link.originalName ? 'text-white' : 'text-white/55 hover:text-white'}`}>
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-beige transition-all duration-300 ${activeSection === link.originalName ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
              </a>
            )
          ))}
          <LangSwitcher />
        </div>

        {/* Mobile hamburger pill */}
        <div className="md:hidden z-[60] flex items-center pointer-events-auto">
          <button onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
            style={glassStyle}
            aria-label="Toggle Menu">
            <div className="relative w-5 h-4 flex flex-col justify-between items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-[50] flex flex-col items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{
            transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(60px) saturate(160%)',
            WebkitBackdropFilter: 'blur(60px) saturate(160%)',
            background: 'rgba(10,10,10,0.06)',
          }}
        >
          <nav className="flex flex-col gap-6 text-center w-full px-6 overflow-y-auto mt-20 items-center justify-center">
            {links.map((link, i) => (
              link.href ? (
                <Link key={link.originalName} href={link.href} onClick={() => setIsOpen(false)}
                  className={`font-header uppercase cursor-pointer border-b border-white/5 last:border-none w-full text-center block pb-4
                    ${language === 'ru' ? 'text-3xl tracking-normal font-medium' : 'text-4xl tracking-widest'}
                    ${activeSection === link.originalName || isBlogPage ? 'text-beige' : 'text-white hover:text-beige'}`}
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 400ms ease',
                    transitionDelay: isOpen ? `${i * 80}ms` : '0ms',
                  }}>
                  {link.name}
                </Link>
              ) : (
                <a key={link.originalName} href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId, link.isProfile, link.originalName)}
                  className={`font-header uppercase cursor-pointer border-b border-white/5 last:border-none w-full text-center block pb-4
                    ${language === 'ru' ? 'text-3xl tracking-normal font-medium' : 'text-4xl tracking-widest'}
                    ${activeSection === link.originalName ? 'text-beige' : 'text-white hover:text-beige'}`}
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 400ms ease',
                    transitionDelay: isOpen ? `${i * 80}ms` : '0ms',
                  }}>
                  {link.name}
                </a>
              )
            ))}
          </nav>
          <div className="mt-10 flex items-center gap-4">
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`font-header text-base tracking-widest uppercase w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  language === lang.code
                    ? 'text-beige'
                    : 'text-white/40 hover:text-white'
                }`}
                style={language === lang.code ? glassStyle : {
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
