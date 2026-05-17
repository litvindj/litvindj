import { Oswald, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const oswald = Oswald({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '700'], variable: '--font-oswald', display: 'swap' });
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500', '600'], variable: '--font-manrope', display: 'swap' });

export const metadata = {
  title: 'DJ Litvin — Professional DJ for Corporate Events & Weddings | Warsaw',
  description: 'DJ Litvin — professional DJ for corporate events, weddings, brand launches and private parties. 6+ years, 500+ events. Warsaw, available worldwide. Trusted by Disney, Coca-Cola, Volkswagen.',
  alternates: {
    canonical: 'https://litvindj.com',
    languages: {
      'en': 'https://litvindj.com/en',
      'ru': 'https://litvindj.com/ru',
      'pl': 'https://litvindj.com/pl',
      'x-default': 'https://litvindj.com',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://litvindj.com',
    siteName: 'DJ Litvin',
    title: 'DJ Litvin — Sound Architect | Warsaw',
    description: 'Professional DJ for corporate events, weddings & private parties. Warsaw-based, available worldwide. Trusted by Disney, Coca-Cola, Volkswagen and more.',
    images: [{ url: 'https://litvindj.com/og-image.jpg', width: 1200, height: 630, alt: 'DJ Litvin — Professional DJ Warsaw' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJ Litvin — Sound Architect | Warsaw',
    description: 'Professional DJ for corporate events, weddings & private parties. Warsaw-based, available worldwide.',
    images: ['https://litvindj.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className={`${oswald.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration="manual";` }} />
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','33819537680993763');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=33819537680993763&ev=PageView&noscript=1" /></noscript>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NGFZW2NR');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J3CN7R2Z67" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J3CN7R2Z67');` }} />
      </head>
      <body className="bg-dark text-white min-h-screen">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGFZW2NR" height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
