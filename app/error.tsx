'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router caught error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-primary-ivory flex flex-col items-center justify-center text-center px-6">
      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">
        Notice
      </span>
      <h1 className="text-4xl md:text-6xl font-serif text-text-navy mb-6">
        Something went wrong
      </h1>
      <p className="text-text-charcoal max-w-md mb-8 text-sm leading-relaxed">
        We encountered an unexpected issue while loading this page. Please try again or return to home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3.5 bg-text-navy text-white text-[11px] font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3.5 bg-transparent border border-text-navy text-text-navy text-[11px] font-bold uppercase tracking-widest hover:bg-text-navy hover:text-white transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
