const TITLES = { en: 'Thank You for Your Message | DJ Litvin', pl: 'Dziękuję za wiadomość | DJ Litvin', ru: 'Спасибо за сообщение | DJ Litvin' };

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: { absolute: TITLES[lang] || TITLES.en }, robots: { index: false, follow: false } };
}

export default function ThankYouLayout({ children }) {
  return children;
}
