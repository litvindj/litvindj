import HomePage from '../../components/HomePage';
import { getClientLogos } from '../../lib/clientLogos.server';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

export default async function Page({ params }) {
  params = await params;
  return <HomePage logos={await getClientLogos()} />;
}
