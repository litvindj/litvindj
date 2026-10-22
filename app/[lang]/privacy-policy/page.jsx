import PrivacyPolicyContent from './PrivacyPolicyContent';

const TITLES = { en: 'Privacy Policy | DJ Litvin', pl: 'Polityka prywatności | DJ Litvin', ru: 'Политика конфиденциальности | DJ Litvin' };

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    robots: { index: false, follow: false },
    title: { absolute: TITLES[lang] || TITLES.en },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'pl' }];
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
