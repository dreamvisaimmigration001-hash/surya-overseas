import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-primary-ivory flex flex-col items-center justify-center text-center px-6">
      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">
        Error 404
      </span>
      <h1 className="text-5xl md:text-7xl font-serif text-text-navy mb-6">
        Page Not Found
      </h1>
      <p className="text-text-charcoal max-w-md mb-8 text-base leading-relaxed">
        The destination you are looking for has moved or does not exist. Let us guide you back to familiar pathways.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-text-navy text-white text-[11px] font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
