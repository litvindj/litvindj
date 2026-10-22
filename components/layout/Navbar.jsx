'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { servicesHubPath, pagePath, PAGE_SLUGS, SERVICES_SEGMENT, localizedPath } from '../../lib/services';

const glassStyle = {
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.18)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(0,0,0,0.25)',
};

const isHomePath = (p) => !p || p === '/' || /^\/(en|pl|ru)\/?$/.test(p);

// Which top-level item a non-home URL belongs to
function sectionFromPath(pathname) {
  const seg = (pathname || '/').split('/').filter(Boolean)[1];
  if (!seg) return 'Home';
  if (seg === 'blog') return 'Blog';
  if (Object.values(SERVICES_SEGMENT).includes(seg)) return 'Services';
  if (Object.values(PAGE_SLUGS.gallery).includes(seg)) return 'Gallery';
  return null;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const onHome = isHomePath(pathname);
  const [activeSection, setActiveSection] = useState(onHome ? 'Home' : sectionFromPath(pathname));
  const isManualScroll = useRef(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    setActiveSection(onHome ? 'Home' : sectionFromPath(pathname));
  }, [pathname, onHome]);

  // scrollTo: homepage section id. anyPage: also scroll on other pages when the section exists there (footer form).
  const links = [
    { key: 'Home',     href: `/${language}`, scrollTo: 'root' },
    { key: 'About',    href: `/${language}#about-section`, scrollTo: 'about-section', isProfile: true },
    { key: 'Services', href: servicesHubPath(language) },
    { key: 'Music',    href: `/${language}#music-section`, scrollTo: 'music-section' },
    { key: 'Gallery',  href: pagePath(language, 'gallery') },
    { key: 'Blog',     href: `/${language}/blog` },
    { key: 'Contact',  href: `/${language}#footer-section`, scrollTo: 'footer-section', anyPage: true },
  ];

  // Scroll spy for the sections that live on the homepage
  useEffect(() => {
    if (!onHome) return;
    const spy = { 'about-section': 'About', 'music-section': 'Music' };
    const handleScrollSpy = () => {
      if (isManualScroll.current) return;
      const vh = window.innerHeight;
      const y = window.scrollY;
      if (y < vh * 0.3) { setActiveSection('Home'); return; }
      if (vh + y >= document.body.offsetHeight - 50) { setActiveSection('Contact'); return; }
      let current = null;
      for (const [id, name] of Object.entries(spy)) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (y >= top - vh * 0.4 && y < top + el.offsetHeight - vh * 0.4) current = name;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [onHome]);

  // Smooth scroll on the homepage (and to the footer form on any page); otherwise a normal link
  const handleClick = (e, link) => {
    setIsOpen(false);
    if (!link.scrollTo) return;
    if (!onHome && !(link.anyPage && document.getElementById(link.scrollTo))) return;
    e.preventDefault();
    isManualScroll.current = true;
    setActiveSection(link.key);
    setTimeout(() => { isManualScroll.current = false; }, 1000);
    if (link.scrollTo === 'root') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(link.scrollTo);
    if (!el) return;
    // The About block sits inside a sticky cross-fade on desktop, so scroll past the hero
    const extra = link.isProfile ? window.innerHeight * (window.innerWidth < 1024 ? 1.0 : 0.55) : 0;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset + extra, behavior: 'smooth' });
  };

  const switchLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
    const target = localizedPath(pathname, code);
    if (target && target !== pathname) router.push(target);
  };

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
    { code: 'ru', label: 'RU' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center pointer-events-none" style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}>

      {/* Logo pill */}
      <Link href={`/${language}`} onClick={(e) => handleClick(e, links[0])}
        className="font-header text-white hover:text-beige transition-colors z-[60] relative select-none pointer-events-auto flex items-center justify-center px-5 py-2.5 rounded-full"
        style={glassStyle} aria-label="DJ Litvin">
        <span style={{ transform: 'scaleY(0.78)', display: 'inline-block', fontSize: '1.1rem', letterSpacing: '-0.05em' }}>
          LITVIN
        </span>
      </Link>

      {/* Desktop nav pill */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-white pointer-events-auto px-7 xl:px-8 py-3 rounded-full" style={glassStyle}>
        {links.map((link) => {
          const active = activeSection === link.key;
          return (
            <Link key={link.key} href={link.href} onClick={(e) => handleClick(e, link)}
              className={`group relative font-header uppercase transition-colors cursor-pointer text-center
                ${language === 'ru' ? 'text-xs tracking-normal font-medium' : 'text-xs tracking-[0.18em]'}
                ${active ? 'text-white' : 'text-white/55 hover:text-white'}`}>
              {t(`navbar.${link.key}`)}
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-beige transition-all duration-300 ${active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
            </Link>
          );
        })}
        <div className="flex items-center gap-3 pl-4 border-l border-white/20">
          {langs.map((lang) => (
            <button key={lang.code} onClick={() => switchLanguage(lang.code)}
              className={`relative font-header text-xs tracking-widest uppercase transition-colors duration-200 pb-0.5 ${language === lang.code ? 'text-beige' : 'text-white/40 hover:text-white/70'}`}>
              {lang.label}
              {language === lang.code && <span className="absolute bottom-0 left-0 w-full h-px bg-beige" />}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile hamburger pill */}
      <div className="lg:hidden z-[60] flex items-center pointer-events-auto">
        <button onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
          style={glassStyle} aria-label="Toggle Menu" aria-expanded={isOpen}>
          <div className="relative w-5 h-4 flex flex-col justify-between items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[50] flex flex-col items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(60px) saturate(160%)',
          WebkitBackdropFilter: 'blur(60px) saturate(160%)',
          background: 'rgba(10,10,10,0.75)',
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <div className="flex flex-col gap-5 text-center w-full px-6 overflow-y-auto mt-16 items-center">
          {links.map((link, i) => (
            <Link key={link.key} href={link.href} onClick={(e) => handleClick(e, link)}
              className={`font-header uppercase cursor-pointer border-b border-white/5 last:border-none w-full text-center block pb-4 text-3xl sm:text-4xl tracking-widest
                ${activeSection === link.key ? 'text-beige' : 'text-white hover:text-beige'}`}
              style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 400ms ease', transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}>
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4">
          {langs.map((lang) => (
            <button key={lang.code} onClick={() => switchLanguage(lang.code)}
              className={`font-header text-sm tracking-widest uppercase px-8 py-3 rounded-full transition-all duration-300 ${language === lang.code ? 'text-beige' : 'text-white/40 hover:text-white'}`}
              style={language === lang.code ? glassStyle : { backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
