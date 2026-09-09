'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Countries', path: '/countries' },
    { name: 'Services', path: '/services' },
    { name: 'Study Abroad', path: '/study-abroad' },
    { name: 'PR', path: '/pr' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-accent-champagne bg-primary-ivory/95 backdrop-blur-md ${
          isScrolled
            ? 'h-20 shadow-sm'
            : 'h-24'
        }`}
      >
        <div className="h-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 relative z-50 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white border border-accent-champagne shadow-xs p-0.5 flex items-center justify-center shrink-0 group-hover:border-accent-gold transition-colors">
              <Image
                src="/logo.jpeg"
                alt="Surya Overseas Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-bold tracking-tight uppercase font-sans leading-none transition-colors ${isScrolled || mobileMenuOpen ? 'text-text-navy' : 'text-text-navy'}`}>
                Surya Overseas
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase text-accent-gold mt-1 leading-none">
                Since 2012
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 text-[11px] font-semibold uppercase tracking-[0.1em] opacity-80">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`transition-colors relative group ${
                    pathname === link.path ? 'text-accent-gold border-b border-accent-gold pb-1' : 'text-text-charcoal hover:text-accent-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-text-navy text-white text-[11px] font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-primary-ivory flex flex-col justify-center items-center pt-20 pb-10"
          >
            <nav className="flex flex-col items-center gap-5 text-center w-full max-w-sm px-6">
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white border border-accent-champagne shadow-sm p-0.5 flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt="Surya Overseas Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <span className="text-xl font-bold uppercase tracking-tight font-sans text-text-navy">
                  Surya Overseas
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-gold">
                  Since 2012
                </span>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-serif text-text-charcoal hover:text-accent-gold transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                className="w-full mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 bg-text-navy text-primary-ivory rounded-full text-lg font-medium shadow-md"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
