import Link from 'next/link';
import { getAllPosts } from '../../../lib/blog';

export async function generateMetadata({ params }) {
  params = await params;
  const lang = params.lang || 'en';
  const titles = { en: 'Blog — DJ Litvin', ru: 'Блог — DJ Litvin', pl: 'Blog — DJ Litvin' };
  const descs = {
    en: 'Insights from behind the decks — DJ tips, event stories, and music philosophy from DJ Litvin.',
    ru: 'Взгляд изнутри — советы диджея, истории с мероприятий и музыкальная философия DJ Litvin.',
    pl: 'Spojrzenie zza konsolety — wskazówki DJ-a, historie z eventów i filozofia muzyczna DJ Litvin.',
  };
  return { title: titles[lang] || titles.en, description: descs[lang] || descs.en };
}

export default async function BlogIndexPage({ params }) {
  params = await params;
  const lang = params.lang || 'en';
  const posts = getAllPosts(lang);

  const t = {
    en: { back: '← Back', heading: 'Blog', label: 'DJ Litvin', empty: 'No articles yet.', read: 'Read →' },
    ru: { back: '← Назад', heading: 'Блог', label: 'DJ Litvin', empty: 'Статей пока нет.', read: 'Читать →' },
    pl: { back: '← Wróć', heading: 'Blog', label: 'DJ Litvin', empty: 'Brak artykułów.', read: 'Czytaj →' },
  }[lang] || { back: '← Back', heading: 'Blog', label: 'DJ Litvin', empty: 'No articles yet.', read: 'Read →' };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString(
      lang === 'ru' ? 'ru-RU' : lang === 'pl' ? 'pl-PL' : 'en-GB',
      { day: 'numeric', month: 'short', year: 'numeric' }
    ).toUpperCase();

  return (
    <div className="bg-dark text-white min-h-screen">

      {/* Top bar */}
      <div className="border-b border-white/5 py-6 px-6 md:px-12">
        <Link href={`/${lang}`} className="font-header text-beige uppercase tracking-widest text-xs hover:text-white transition-colors duration-300">
          {t.back}
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="pt-16 pb-12 md:pt-20 md:pb-16 border-b border-white/10">
          <h1 className="font-header text-white uppercase text-4xl md:text-6xl leading-none">{t.heading}</h1>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-grey py-16">{t.empty}</p>
        ) : (
          <div>
            {posts.map((post) => (
              <Link key={post.slug} href={`/${lang}/blog/${post.slug}`}
                className="group border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-y-4 gap-x-8 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6">

                <div className="flex flex-col gap-2">
                  <span className="font-header text-white/40 text-xs uppercase tracking-widest">
                    {formatDate(post.date)}
                  </span>
                  <h2 className="font-header text-white uppercase text-xl md:text-2xl leading-snug group-hover:text-beige transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-grey/70 text-sm leading-relaxed mt-1 max-w-2xl">
                    {post.description}
                  </p>
                </div>

                <div className="self-center font-header text-xs text-white/25 uppercase tracking-widest group-hover:text-beige transition-colors duration-300 whitespace-nowrap">
                  {t.read}
                </div>

              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
