import HomePage from '../../components/HomePage';
import { getAllPosts } from '../../lib/blog';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

export default async function Page({ params }) {
  params = await params;
  const allLatestPosts = {
    en: getAllPosts('en').slice(0, 3),
    ru: getAllPosts('ru').slice(0, 3),
    pl: getAllPosts('pl').slice(0, 3),
  };
  return <HomePage allLatestPosts={allLatestPosts} />;
}
