'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

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
    { name: t('navbar.Home'),     targetId: 'root',             isProfile: false, originalName: 'Home' },
    { name: t('navbar.Profile'),  targetId: 'about-section',    isProfile: true,  originalName: 'Profile' },
    { name: t('navbar.Events'),   targetId: 'events-section',   isProfile: false, originalName: 'Events' },
    { name: t('navbar.Services'), targetId: 'services-section', isProfile: false, originalName: 'Services' },
    { name: t('navbar.Rider'),    targetId: 'rider-section',    isProfile: false, originalName: 'Rider' },
    { name: t('navbar.Music'),    targetId: 'music-section',    isProfile: false, originalName: 'Music' },
    { name: t('navbar.Gallery'),  targetId: 'gallery-section',  isProfile: false, originalName: 'Gallery' },
    { name: t('navbar.Blog'),     targetId: 'articles-section', isProfile: false, originalName: 'Blog' },
    { name: t('navbar.Contact'),  targetId: 'footer-section',   isProfile: false, originalName: 'Contact' },
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
    <div className="flex items-center gap-3">
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
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 pointer-events-none">

        <a href="#" onClick={(e) => handleScroll(e, 'root', false, 'Home')}
          className="font-header text-3xl text-white mix-blend-difference hover:text-beige transition-colors tracking-tighter z-[60] relative select-none pointer-events-auto">
          G L
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12 text-white pointer-events-auto">
          {links.map((link) => (
            link.href ? (
              <Link key={link.originalName} href={link.href}
                className={`group relative font-header uppercase transition-colors cursor-pointer text-center
                  ${language === 'ru' ? 'text-xs lg:text-sm tracking-normal font-medium' : 'text-xs lg:text-sm tracking-[0.2em]'}
                  ${activeSection === link.originalName || isBlogPage ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-beige transition-all duration-300 ${activeSection === link.originalName || isBlogPage ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ) : (
              <a key={link.originalName} href={`#${link.targetId}`}
                onClick={(e) => handleScroll(e, link.targetId, link.isProfile, link.originalName)}
                className={`group relative font-header uppercase transition-colors cursor-pointer text-center
                  ${language === 'ru' ? 'text-xs lg:text-sm tracking-normal font-medium' : 'text-xs lg:text-sm tracking-[0.2em]'}
                  ${activeSection === link.originalName ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-beige transition-all duration-300 ${activeSection === link.originalName ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            )
          ))}
          <div className="pointer-events-auto ml-4">
            <LangSwitcher />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden z-[60] flex items-center gap-4 pointer-events-auto">
          <LangSwitcher />
          <button onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center w-12 h-12 transition-all duration-300 hover:border-beige/50"
            aria-label="Toggle Menu">
            <div className="relative w-6 h-5 flex flex-col justify-between items-center">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-dark z-[50] flex flex-col items-center justify-center transition-all duration-500 pointer-events-auto ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col gap-6 text-center w-full px-6 overflow-y-auto mt-20 items-center justify-center">
            {links.map((link, i) => (
              link.href ? (
                <Link key={link.originalName} href={link.href} onClick={() => setIsOpen(false)}
                  className={`font-header uppercase transition-all duration-300 cursor-pointer border-b border-white/5 last:border-none w-full text-center block pb-4
                    ${language === 'ru' ? 'text-3xl tracking-normal font-medium' : 'text-4xl tracking-widest'}
                    ${activeSection === link.originalName || isBlogPage ? 'text-beige' : 'text-white hover:text-beige'}`}
                  style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateY(0)' : 'translateY(20px)', transitionDelay: `${isOpen ? 100 + i * 50 : 0}ms` }}>
                  {link.name}
                </Link>
              ) : (
                <a key={link.originalName} href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId, link.isProfile, link.originalName)}
                  className={`font-header uppercase transition-all duration-300 cursor-pointer border-b border-white/5 last:border-none w-full text-center block pb-4
                    ${language === 'ru' ? 'text-3xl tracking-normal font-medium' : 'text-4xl tracking-widest'}
                    ${activeSection === link.originalName ? 'text-beige' : 'text-white hover:text-beige'}`}
                  style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateY(0)' : 'translateY(20px)', transitionDelay: `${isOpen ? 100 + i * 50 : 0}ms` }}>
                  {link.name}
                </a>
              )
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
