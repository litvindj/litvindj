import { notFound } from 'next/navigation';
import ServicePage from '../../../../components/services/ServicePage';
import { serviceParams, resolveService, serviceMetadata } from '../../../../components/services/serviceRoutes';

const LANGS = ['en', 'ru'];
export const dynamicParams = false;

export async function generateStaticParams() {
  return serviceParams(LANGS);
}

export async function generateMetadata({ params }) {
  const r = resolveService(await params, LANGS);
  return r ? serviceMetadata(r.lang, r.service) : {};
}

export default async function Page({ params }) {
  const r = resolveService(await params, LANGS);
  if (!r) notFound();
  return <ServicePage lang={r.lang} service={r.service} />;
}
