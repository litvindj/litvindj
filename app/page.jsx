import HomePage from '../components/HomePage';
import { getAllPosts } from '../lib/blog';

export default function RootPage() {
  const allLatestPosts = {
    en: getAllPosts('en').slice(0, 3),
    ru: getAllPosts('ru').slice(0, 3),
    pl: getAllPosts('pl').slice(0, 3),
  };
  return <HomePage allLatestPosts={allLatestPosts} />;
}
