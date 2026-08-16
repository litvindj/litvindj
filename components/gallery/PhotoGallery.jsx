'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '../layout/Container';
import { useLanguage } from '../../context/LanguageContext';

const PHOTOS = [
  '100047381147.jpg',
  '100129763105.jpg',
  '100210379934.jpg',
  '100213357031.jpg',
  '100217403762.jpg',
  '100233624988.jpg',
  'NJ0A0027.jpg',
  'NJ0A0287.jpg',
  'NJ0A9974.jpg',
  'IMG_4315.JPG',
  'IMG_3603.JPG',
  'IMG_3604.JPG',
  'alexfeyer.34.JPG',
  'alexfeyer.340.JPG',
  'IMG_2394.jpg',
  'IMG_3845.jpg',
  'IMG_0833.JPG',
  'IMG_3419.JPG',
  'IMG_5752.JPG',
];

const PhotoGallery = () => {
  const { getData, language } = useLanguage();
  const content = getData('photos');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section className="py-24 md:py-32 bg-dark border-t border-white/5 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-header uppercase leading-none text-white text-6xl md:text-8xl">
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
              {content.titleStroke}
            </span>
          </h2>
        </div>

        <div className="columns-2 lg:columns-3 gap-3 space-y-3">
          {PHOTOS.map((file, i) => (
            <div
              key={file}
              className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(216,195,165,0.15)] hover:border-white/20"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={`/images/${file}`}
                alt={`Photo ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
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
              alt={`Photo ${lightbox + 1}`}
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
