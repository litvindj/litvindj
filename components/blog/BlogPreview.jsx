import Link from 'next/link';

const labels = {
  en: { title: 'From the Decks', subtitle: 'Stories, insights & professional notes.', read: 'Read →', all: 'All Articles' },
  ru: { title: 'Из-за пульта', subtitle: 'Истории, заметки и профессиональный опыт.', read: 'Читать →', all: 'Все статьи' },
  pl: { title: 'Zza konsolety', subtitle: 'Historie, spostrzeżenia i notatki zawodowe.', read: 'Czytaj →', all: 'Wszystkie artykuły' },
};

const formatDate = (d, lang) =>
  new Date(d).toLocaleDateString(
    lang === 'ru' ? 'ru-RU' : lang === 'pl' ? 'pl-PL' : 'en-GB',
    { day: 'numeric', month: 'short', year: 'numeric' }
  ).toUpperCase();

export default function BlogPreview({ posts, lang }) {
  const t = labels[lang] || labels.en;
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog-section" className="relative z-30 bg-dark border-t border-white/5 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-header text-white uppercase text-3xl md:text-5xl leading-none">{t.title}</h2>
            <p className="text-grey/60 text-sm mt-3">{t.subtitle}</p>
          </div>
          <Link href={`/${lang}/blog`}
            className="group font-header text-xs uppercase tracking-widest text-white/40 hover:text-beige transition-colors duration-300 whitespace-nowrap flex items-center gap-2">
            {t.all}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link key={post.slug} href={`/${lang}/blog/${post.slug}`}
              className="group border-t border-white/10 last:border-b py-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-y-3 gap-x-8 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6">
              <div className="flex flex-col gap-2">
                <span className="font-header text-white/35 text-[10px] uppercase tracking-widest">{formatDate(post.date, lang)}</span>
                <h3 className="font-header text-white uppercase text-lg md:text-xl leading-snug group-hover:text-beige transition-colors duration-300">{post.title}</h3>
                <p className="text-grey/60 text-sm leading-relaxed max-w-2xl">{post.description}</p>
              </div>
              <div className="self-center font-header text-xs text-white/20 uppercase tracking-widest group-hover:text-beige transition-colors duration-300 whitespace-nowrap">
                {t.read}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
