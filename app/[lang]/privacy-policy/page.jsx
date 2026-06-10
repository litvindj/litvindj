import PrivacyPolicyContent from './PrivacyPolicyContent';

export async function generateMetadata() {
  return {
    robots: { index: false, follow: false },
    title: 'Privacy Policy — DJ Litvin',
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
