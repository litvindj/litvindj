'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { translations } from '../../../utils/translations';
import { privacyCompany } from '../../../utils/privacyPolicy';

const linkClass = 'text-beige hover:text-white transition-colors';

function RichText({ text }) {
  return text.split(/(\{brand\}|\{email\})/).map((part, i) => {
    if (part === '{brand}') return <span key={i} className="text-white">DJ Litvin</span>;
    if (part === '{email}') {
      return (
        <a key={i} href={`mailto:${privacyCompany.email}`} className={linkClass}>
          {privacyCompany.email}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Block({ block, content }) {
  if (block.sub) return <p className="font-semibold text-white/80 mt-4 mb-2 first:mt-0">{block.sub}</p>;
  if (block.list) {
    return (
      <ul className="mt-3 space-y-2 list-none">
        {block.list.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-beige shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.controller) {
    return (
      <div className="mt-3 p-4 border border-white/10 text-white/80 text-sm space-y-1">
        <p className="text-white font-semibold">{privacyCompany.name}</p>
        <p>{content.address}</p>
        <p>{privacyCompany.ids}</p>
        <p>
          {content.emailLabel}{' '}
          <a href={`mailto:${privacyCompany.email}`} className={linkClass}>
            {privacyCompany.email}
          </a>
        </p>
      </div>
    );
  }
  return <p className="mt-3 first:mt-0"><RichText text={block.p} /></p>;
}

export default function PolitykaPrywatnosci() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const content = (translations[lang] || translations.en).privacy;

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="border-b border-white/5 py-6 px-6 md:px-12">
        <Link href={`/${lang}`} className="font-header text-beige uppercase tracking-widest text-xs hover:text-white transition-colors duration-300">
          {content.back}
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">

        <div className="font-header text-beige uppercase tracking-[0.3em] text-xs mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-beige/50" />
          {content.label}
          <span className="w-8 h-px bg-beige/50" />
        </div>
        <h1 className="font-header text-white uppercase text-4xl md:text-6xl leading-none mb-4 block w-full">
          {content.title[0]}<br />{content.title[1]}
        </h1>
        <div className="w-16 h-px bg-beige/40 mb-4" />
        <p className="text-grey/50 text-xs mb-12">{content.published}</p>

        <div className="space-y-10 text-grey leading-relaxed text-sm md:text-base">

          {content.sections.map((section) => (
            <section key={section.h}>
              <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
                {section.h}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} content={content} />
              ))}
            </section>
          ))}

          <div className="border-t border-white/10 pt-8 text-xs text-grey/50">
            <p>{content.lastUpdated}</p>
            <p className="mt-1">{privacyCompany.name} | {privacyCompany.ids}</p>
            {content.notice && <p className="mt-3">{content.notice}</p>}
          </div>

        </div>
      </div>
    </div>
  );
}
