import { notFound } from 'next/navigation';
import GalleryPage, { galleryMetadata } from '../../../components/pages/GalleryPage';

const LANGS = ['pl'];
export const dynamicParams = false;

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return LANGS.includes(lang) ? galleryMetadata(lang) : {};
}

export default async function Page({ params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  return <GalleryPage lang={lang} />;
}
