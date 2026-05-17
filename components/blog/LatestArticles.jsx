'use client';
import Link from 'next/link';
import Container from '../layout/Container';
import { useLanguage } from '../../context/LanguageContext';

const labels = {
  en: { label: 'Blog', title1: 'Latest',   title2: 'Articles', viewAll: 'View all articles' },
  ru: { label: 'Блог', title1: 'Последние', title2: 'Статьи',   viewAll: 'Все статьи' },
  pl: { label: 'Blog', title1: 'Ostatnie', title2: 'Artykuły',  viewAll: 'Wszystkie artykuły' },
};

export default function LatestArticles({ allPosts }) {
  const { language } = useLanguage();
  const lang = language;
  const posts = allPosts?.[lang] || allPosts?.['en'] || [];
  const t = labels[lang] || labels.en;
  if (!posts?.length) return null;

  return (
    <section className="py-16 md:py-20 bg-dark relative border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">

          {/* Left column */}
          <div className="lg:col-span-4 min-w-0 overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-beige" />
              <span className={`text-beige text-xs font-bold uppercase ${lang === 'ru' ? 'tracking-widest' : 'tracking-[0.4em]'}`}>
                {t.label}
              </span>
            </div>

            <div className="mb-8">
              <h2 className={`font-header uppercase text-white leading-none ${lang === 'ru' ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'}`}>
                {t.title1} <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #D8C3A5' }}>
                  {t.title2}
                </span>
              </h2>
            </div>

            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center gap-2 text-beige text-xs font-bold uppercase tracking-widest hover:text-white transition-colors duration-300 group/link"
            >
              {t.viewAll}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 translate-x-0 group-hover/link:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>

          {/* Right articles list */}
          <div className="lg:col-span-8">
            <ul className="group/list flex flex-col hover:text-white/20 transition-colors duration-500">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="relative border-b border-white/10 py-8 md:py-10 transition-all duration-500 hover:!text-white lg:hover:pl-4 hover:border-beige/30 group/item"
                >
                  <Link href={`/${lang}/blog/${post.slug}`} className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <span className="block text-beige/50 text-[10px] font-bold uppercase tracking-widest mb-3 group-hover/item:text-beige transition-colors duration-300">
                        {new Date(post.date).toLocaleDateString(
                          lang === 'ru' ? 'ru-RU' : lang === 'pl' ? 'pl-PL' : 'en-GB',
                          { year: 'numeric', month: 'long', day: 'numeric' }
                        )}
                      </span>
                      <h3 className={`font-header uppercase text-white leading-tight mb-3 transition-colors duration-300 group-hover/item:text-beige ${lang === 'ru' ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                        {post.title}
                      </h3>
                      <p className="text-grey text-sm leading-relaxed max-w-xl group-hover/item:text-white/80 transition-colors duration-300">
                        {post.description}
                      </p>
                    </div>
                    <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500 text-beige shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
