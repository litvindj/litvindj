'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ThankYouPage() {
  const params = useParams();
  const lang = params?.lang || 'en';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit_success',
      });
    }
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-xl w-full flex flex-col items-center">

        <div className="font-header text-beige uppercase tracking-[0.3em] text-xs md:text-sm mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-beige/50" />
          Message Received
          <span className="w-8 h-px bg-beige/50" />
        </div>

        <h1 className="font-header text-white uppercase text-6xl md:text-8xl leading-none mb-10 tracking-tight w-full">
          Thank You
        </h1>

        <div className="w-16 h-px bg-beige/40 mb-10" />

        <p className="text-grey text-base md:text-lg mb-16 leading-relaxed max-w-sm">
          I'll get back to you within 24 hours to discuss your event.
        </p>

        <Link
          href={`/${lang}`}
          className="group relative inline-flex items-center justify-center bg-beige text-dark font-header text-lg uppercase px-14 py-4 overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg"
        >
          <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 tracking-wider group-hover:tracking-widest">
            Back to Home
          </span>
        </Link>

      </div>
    </div>
  );
}
