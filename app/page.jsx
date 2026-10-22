import HomePage from '../components/HomePage';
import { buildSchema } from '../lib/schema';
import { getClientLogos } from '../lib/clientLogos.server';

export const metadata = {
  title: 'DJ Litvin — Event & Wedding DJ in Warsaw and Europe',
};

export default async function RootPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema('en')) }} />
      <HomePage logos={await getClientLogos()} />
    </>
  );
}
