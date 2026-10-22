import Link from 'next/link';
import { SITE } from '../../lib/services';

// items: [{ name, href }]; the last item is the current page
export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.href}`,
    })),
  };
}

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 md:px-12">
      <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-grey">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-beige">{it.name}</span>
              ) : (
                <>
                  <Link href={it.href} className="hover:text-white transition-colors duration-300">{it.name}</Link>
                  <span className="opacity-40">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
