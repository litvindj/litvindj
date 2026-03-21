import HomePage from '../../components/HomePage';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

export default async function Page({ params }) {
  params = await params;
  return <HomePage lang={params.lang} />;
}
