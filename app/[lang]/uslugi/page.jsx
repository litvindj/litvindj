import { notFound } from 'next/navigation';
import ServicesHub from '../../../components/services/ServicesHub';
import { hubParams, hubMetadata } from '../../../components/services/serviceRoutes';

const LANGS = ['pl'];
export const dynamicParams = false;

export async function generateStaticParams() {
  return hubParams(LANGS);
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) return {};
  return hubMetadata(lang);
}

export default async function Page({ params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  return <ServicesHub lang={lang} />;
}
