'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
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
      <div className="text-center max-w-lg">
        <p className="font-header text-beige uppercase tracking-widest text-sm mb-6">
          Message Received
        </p>
        <h1 className="font-header text-white uppercase text-4xl md:text-6xl leading-tight mb-8">
          Thank You
        </h1>
        <p className="text-grey text-lg mb-12 leading-relaxed">
          I'll get back to you within 24 hours to discuss your event.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-beige text-dark font-header text-lg uppercase px-12 py-4 hover:bg-white transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
