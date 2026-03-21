import HomePage from '../../components/HomePage';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export default function Page({ params }) {
  return <HomePage lang={params.lang} />;
}
