import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-ivory border-t border-accent-champagne pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 border-r border-accent-champagne/50 pr-8">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Surya Overseas Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-text-navy uppercase tracking-tight leading-tight">
                  Surya Overseas
                </h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-gold mt-1">
                  Since 2012
                </p>
              </div>
            </Link>
            <p className="text-text-charcoal text-sm mb-6 max-w-sm leading-relaxed">
              &quot;Bespoke immigration architecture for study, residency, and settlement. We curate your international legacy with precision and prestige.&quot;
            </p>

            {/* Office Address & Contact */}
            <div className="space-y-3 mb-8 max-w-sm">
              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xs p-3.5 rounded-lg border border-accent-champagne/80 shadow-xs">
                <MapPin size={18} className="text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold mb-1">Head Office</p>
                  <p className="text-text-navy text-sm font-medium leading-relaxed">
                    Ground Floor Shop no 3, Centra Mall, Chandigarh
                  </p>
                </div>
              </div>

              <a
                href="tel:8968599924"
                className="flex items-center gap-3 bg-white/60 backdrop-blur-xs p-3.5 rounded-lg border border-accent-champagne/80 shadow-xs hover:border-accent-gold hover:bg-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold text-accent-gold group-hover:text-white transition-colors">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold mb-0.5">Contact Number</p>
                  <p className="text-text-navy text-sm font-semibold tracking-wide group-hover:text-accent-gold transition-colors">
                    +91 89685 99924
                  </p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61594240381348&sk=photos" className="w-10 h-10 border border-accent-champagne flex items-center justify-center hover:bg-accent-gold hover:text-white hover:border-accent-gold text-text-navy transition-colors">
                <Facebook size={18} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/suryaoverseas_/?hl=en" className="w-10 h-10 border border-accent-champagne flex items-center justify-center hover:bg-accent-gold hover:text-white hover:border-accent-gold text-text-navy transition-colors">
                <Instagram size={18} />
              </a>

            </div>
          </div>

          <div className="pl-0 lg:pl-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-accent-gold">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="/blog" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Blog</Link></li>
              <li><Link href="/contact" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-accent-gold">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/study-abroad" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Study Abroad</Link></li>
              <li><Link href="/services" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">All Services</Link></li>
              <li><Link href="/pr" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">PR</Link></li>
              <li><Link href="/visa-services" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Visa Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-accent-gold">Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="/countries" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Canada</Link></li>
              <li><Link href="/countries" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Australia</Link></li>
              <li><Link href="/countries" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">UK</Link></li>
              <li><Link href="/countries" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">USA</Link></li>
              <li><Link href="/countries" className="text-text-charcoal hover:text-accent-gold transition-colors text-sm font-medium">Europe</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-champagne pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-wider text-text-charcoal">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Surya Overseas. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
