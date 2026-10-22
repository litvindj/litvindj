'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../layout/Container';
import { FEATURED_PHOTOS, GALLERY_TEXT } from '../../lib/gallery';
import { pagePath } from '../../lib/services';
import { useLanguage } from '../../context/LanguageContext';


// photos: list of files in /public/images; showMore: link to the full gallery page; hideTitle: when the page has its own H1
// uniform: equal-size tiles in a grid (homepage); otherwise a masonry layout (gallery page)
const PhotoGallery = ({ photos: PHOTOS = FEATURED_PHOTOS, showMore = true, hideTitle = false, uniform = PHOTOS === FEATURED_PHOTOS }) => {
  const { getData, language } = useLanguage();
  const content = getData('photos');
  const [lightbox, setLightbox] = useState(null);
  const g = GALLERY_TEXT[language] || GALLERY_TEXT.en;

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section className={`bg-dark overflow-hidden ${hideTitle ? 'pb-24 md:pb-32' : 'py-24 md:py-32 border-t border-white/5'}`}>
      <Container>
        {!hideTitle && <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-header uppercase leading-none text-white text-6xl md:text-8xl">
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
              {content.titleStroke}
            </span>
          </h2>
        </div>}

        <div className={uniform ? 'grid grid-cols-2 lg:grid-cols-3 gap-3' : 'columns-2 lg:columns-3 gap-3 space-y-3'}>
          {PHOTOS.map((file, i) => (
            <div
              key={file}
              className={`${uniform ? 'aspect-[4/5]' : 'break-inside-avoid'} relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(216,195,165,0.15)] hover:border-white/20`}
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={`/images/${file}`}
                alt={`${g.alt} ${i + 1}`}
                width={800}
                height={600}
                sizes="(max-width: 1024px) 50vw, 33vw"
                className={uniform ? 'w-full h-full object-cover' : 'w-full h-auto object-cover'}
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>

        {showMore && (
          <div className="flex justify-center mt-12">
            <Link href={pagePath(language, 'gallery')}
              className="text-beige text-xs font-bold uppercase tracking-widest border-b border-beige/40 pb-1 hover:text-white hover:border-white transition-colors duration-300">
              {g.more} →
            </Link>
          </div>
        )}
      </Container>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 text-white/60 hover:text-white transition-colors text-4xl leading-none z-10"
            style={{ top: 'calc(max(5rem, env(safe-area-inset-top) + 4rem))' }}
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-5xl leading-none z-10 px-4"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length); }}
          >
            ‹
          </button>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/images/${PHOTOS[lightbox]}`}
              alt={`${g.alt} ${lightbox + 1}`}
              width={1200}
              height={900}
              className="max-w-full max-h-screen object-contain"
              style={{ width: '100vw', height: '100vh', objectFit: 'contain' }}
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-5xl leading-none z-10 px-4"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % PHOTOS.length); }}
          >
            ›
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm font-header tracking-widest">
            {lightbox + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
