'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Stamp,
  Plane
} from 'lucide-react';

interface PPRItem {
  id: number;
  image: string;
  title: string;
  country: string;
  flag: string;
  region: 'Australia' | 'Europe' | 'New Zealand';
  category: string;
  subclass: string;
  docType: 'Embassy Grant Letter' | 'Passport Visa Sticker' | 'Border Clearance' | 'Flight & Departure';
  clientName: string;
  status: 'VISA GRANTED' | 'ENTRY CLEARED' | 'TRAVEL CLEARED';
  issueDate: string;
  details: string;
}

const pprData: PPRItem[] = [
  {
    id: 1,
    image: '/ppr/ppr-1.jpeg',
    title: 'Australian Government Visitor Visa Grant',
    country: 'Australia',
    flag: '🇦🇺',
    region: 'Australia',
    category: 'Visitor Visa (Tourist Stream)',
    subclass: 'Subclass 600',
    docType: 'Embassy Grant Letter',
    clientName: 'Sanjeev',
    status: 'VISA GRANTED',
    issueDate: '06 March 2026',
    details: 'Official Department of Home Affairs visa grant notice granting 3-year multi-entry travel to Australia.',
  },
  {
    id: 2,
    image: '/ppr/ppr-2.jpeg',
    title: 'Slovakia National D Employment Visa',
    country: 'Slovakia (EU)',
    flag: '🇸🇰',
    region: 'Europe',
    category: 'Employment & Long Stay',
    subclass: 'National D Visa (180 Days, MULT)',
    docType: 'Passport Visa Sticker',
    clientName: 'Mohit Ramniwas Jangid',
    status: 'VISA GRANTED',
    issueDate: '26 Sept 2025',
    details: 'European Union Schengen national employment authorization sticker stamped in biometric passport.',
  },
  {
    id: 3,
    image: '/ppr/ppr-3.jpeg',
    title: 'Malta European Schengen Tourism Visa',
    country: 'Malta (EU)',
    flag: '🇲🇹',
    region: 'Europe',
    category: 'Schengen Short Stay',
    subclass: 'Type C Tourism Visa',
    docType: 'Passport Visa Sticker',
    clientName: 'Manjot Singh',
    status: 'VISA GRANTED',
    issueDate: '29 Aug 2025',
    details: 'Official Schengen entry visa issued for tourism travel across European member nations.',
  },
  {
    id: 4,
    image: '/ppr/ppr-4.jpeg',
    title: 'Slovakia National D Labor Authorization',
    country: 'Slovakia (EU)',
    flag: '🇸🇰',
    region: 'Europe',
    category: 'Employment & Labor',
    subclass: 'National D Visa (180 Days, MULT)',
    docType: 'Passport Visa Sticker',
    clientName: 'Jagdip Singh',
    status: 'VISA GRANTED',
    issueDate: '02 Oct 2025',
    details: 'National D work authorization issued by Embassy of Slovakia in New Delhi for overseas employment.',
  },
  {
    id: 5,
    image: '/ppr/ppr-5.jpeg',
    title: 'Greece National D Visa & Flight Boarding',
    country: 'Greece (EU)',
    flag: '🇬🇷',
    region: 'Europe',
    category: 'Employment & Departure',
    subclass: 'National D Visa + Gulf Air Flight',
    docType: 'Flight & Departure',
    clientName: 'Pankaj Bhatti',
    status: 'TRAVEL CLEARED',
    issueDate: '08 July 2025',
    details: 'Hellenic Republic visa with Gulf Air boarding pass and New Delhi airport immigration departure clearance.',
  },
  {
    id: 6,
    image: '/ppr/ppr-6.jpeg',
    title: 'New Zealand Official Border Entry Clearance',
    country: 'New Zealand',
    flag: '🇳🇿',
    region: 'New Zealand',
    category: 'Immigration Act 2009',
    subclass: 'Entry Endorsement Stamp 2184',
    docType: 'Border Clearance',
    clientName: 'Surya Overseas Client',
    status: 'ENTRY CLEARED',
    issueDate: '06 Sep 2025',
    details: 'Official border officer entry endorsement at New Zealand border and Indian departure clearance.',
  },
  {
    id: 7,
    image: '/ppr/ppr-7.jpeg',
    title: 'Star Alliance Departure & Passport Clearance',
    country: 'Malta (EU)',
    flag: '🇲🇹',
    region: 'Europe',
    category: 'International Travel',
    subclass: 'Star Alliance Air Transit',
    docType: 'Flight & Departure',
    clientName: 'Manjot Singh',
    status: 'TRAVEL CLEARED',
    issueDate: '19 Sep 2025',
    details: 'Passport biometric verification and Star Alliance boarding endorsement following successful Malta visa grant.',
  },
  {
    id: 8,
    image: '/ppr/ppr-8.jpeg',
    title: 'Australian Transit Grant & Flight to Sydney',
    country: 'Australia',
    flag: '🇦🇺',
    region: 'Australia',
    category: 'Transit & Flight Arrival',
    subclass: 'Subclass 771 + AirAsia Flight D7 220',
    docType: 'Flight & Departure',
    clientName: 'Harsh Saini',
    status: 'VISA GRANTED',
    issueDate: '25 Sep 2025',
    details: 'Department of Home Affairs grant notice and flight boarding pass arriving in Sydney (SYD T1).',
  },
  {
    id: 9,
    image: '/ppr/ppr-9.jpeg',
    title: 'Australia Temporary Skills Shortage TSS',
    country: 'Australia',
    flag: '🇦🇺',
    region: 'Australia',
    category: 'Employer Sponsored Skilled Work',
    subclass: 'Subclass 482 (TSS)',
    docType: 'Embassy Grant Letter',
    clientName: 'Waleed Muhammad',
    status: 'VISA GRANTED',
    issueDate: '13 Feb 2026',
    details: 'Department of Home Affairs application dossier for Temporary Skills Shortage sponsorship in Australia.',
  },
  {
    id: 10,
    image: '/ppr/ppr-10.jpeg',
    title: 'Australian Government Visitor Visa Grant',
    country: 'Australia',
    flag: '🇦🇺',
    region: 'Australia',
    category: 'Visitor Visa (Tourist Stream)',
    subclass: 'Subclass 600',
    docType: 'Embassy Grant Letter',
    clientName: 'Luxmi Devi',
    status: 'VISA GRANTED',
    issueDate: '06 March 2026',
    details: 'Department of Home Affairs official grant letter for multi-entry family visit to Australia.',
  },
];

export default function LatestPPR() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Australia' | 'Europe' | 'New Zealand'>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Filter items dynamically
  const filteredData = useMemo(() => {
    if (selectedFilter === 'All') return pprData;
    return pprData.filter((item) => item.region === selectedFilter);
  }, [selectedFilter]);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

    const totalScrollable = el.scrollWidth - el.clientWidth;
    if (totalScrollable > 0) {
      setScrollProgress((el.scrollLeft / totalScrollable) * 100);
    } else {
      setScrollProgress(0);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, filteredData]);

  // Reset scroll when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedFilter]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 340;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
    document.body.style.overflow = '';
  };

  const nextModal = () => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((selectedIndex + 1) % filteredData.length);
  };

  const prevModal = () => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((selectedIndex - 1 + filteredData.length) % filteredData.length);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModal();
      if (e.key === 'ArrowLeft') prevModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredData.length]);

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-primary-ivory overflow-hidden border-b border-accent-champagne/70">

      {/* Ambient Luxury Atmospheric Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-accent-gold/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-accent-champagne/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & Official Verification Seal */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-accent-gold/35 shadow-xs mb-4">
            <Stamp size={14} className="text-accent-gold" />
            <span className="text-[11px] font-bold tracking-widest text-text-charcoal uppercase">
              Official Passport Requests (PPR) & Verified Visa Vault
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text-navy tracking-tight leading-[1.15]">
            Real Visas. Real Clients. Real Results.
          </h2>

          <div className="mt-3.5 text-sm sm:text-base text-text-charcoal font-sans leading-relaxed max-w-2xl mx-auto">
            Direct visual proof of successful immigration outcomes. Examine genuine passport stickers, embassy grant notices, and flight departure clearances processed by Surya Overseas Advisory.
          </div>

          {/* Interactive Region Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: 'All', label: 'All Records', count: pprData.length },
              { id: 'Australia', label: 'Australia 🇦🇺', count: pprData.filter((i) => i.region === 'Australia').length },
              { id: 'Europe', label: 'Europe & Schengen 🇪🇺', count: pprData.filter((i) => i.region === 'Europe').length },
              { id: 'New Zealand', label: 'New Zealand 🇳🇿', count: pprData.filter((i) => i.region === 'New Zealand').length },
            ].map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as typeof selectedFilter)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${isSelected
                    ? 'bg-text-navy text-white border-text-navy shadow-md scale-105'
                    : 'bg-white text-text-charcoal border-accent-champagne hover:border-accent-gold/60 hover:bg-secondary-beige/60'
                    }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${isSelected ? 'bg-accent-gold text-white' : 'bg-gray-100 text-text-charcoal'
                    }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Trust Highlights Bar */}
          <div className="mt-6 pt-5 border-t border-accent-champagne/50 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-text-charcoal">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>100% Genuine Biometric Records</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={15} className="text-accent-gold" />
              <span>Certified Surya Overseas Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane size={15} className="text-accent-gold" />
              <span>Travel & Border Clearance</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className="w-[295px] sm:w-[325px] md:w-[340px] flex-shrink-0 snap-start bg-white rounded-3xl p-3.5 border border-accent-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(197,160,89,0.18)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Header Strip inside Card */}
                <div className="flex items-center justify-between px-1 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{item.flag}</span>
                    <span className="text-xs font-bold text-text-navy">{item.country}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold bg-accent-gold/10 px-2.5 py-0.5 rounded-full">
                    {item.docType}
                  </span>
                </div>

                {/* Image Window Container */}
                <div
                  onClick={() => openModal(index)}
                  className="relative h-[370px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-slate-900/5 cursor-pointer border border-gray-100 shadow-inner"
                >
                  {/* Real Visa / Passport Document Image */}
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.clientName}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* PROMINENT RED STAMP - Positioned in the middle of the picture, placed to the right so it never covers client face */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-2.5 sm:right-4 z-15 pointer-events-none select-none">
                    <div className="transform -rotate-12 border-2 sm:border-3 border-red-600 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white/85 backdrop-blur-[2px] shadow-lg text-center">
                      <div className="text-red-600 font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-1">
                        <span>★</span>
                        <span>SURYA OVERSEAS CLIENT</span>
                        <span>★</span>
                      </div>
                      <div className="text-[9px] font-extrabold text-red-600 tracking-wider uppercase mt-0.5">
                        OFFICIAL VISA APPROVAL
                      </div>
                    </div>
                  </div>

                  {/* Shimmer sweep & View Full Document hover action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                    <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-text-navy text-xs font-bold shadow-xl">
                      <ZoomIn size={15} className="text-red-600" />
                      <span>Inspect Biometric Document</span>
                    </span>
                  </div>
                </div>

                {/* Card Information & Metadata */}
                <div className="mt-3.5 px-1 pb-1">

                  {/* RED TEXT: SURYA OVERSEAS CLIENT */}
                  <div className="flex items-center gap-1.5 text-red-600 font-black text-xs uppercase tracking-wide">
                    <ShieldCheck size={14} className="text-red-600 shrink-0" />
                    <span>SURYA OVERSEAS CLIENT</span>
                  </div>

                  {/* Real Unique Client Name */}
                  <div className="mt-1 flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-base text-text-navy truncate font-serif" title={item.clientName}>
                      {item.clientName}
                    </h3>
                    <span className="text-[11px] font-semibold text-text-charcoal/70 shrink-0">
                      {item.issueDate}
                    </span>
                  </div>

                  {/* Visa Subclass & Stream (Clean title, redundant p-tags removed) */}
                  <div className="text-xs text-text-charcoal/90 mt-0.5 font-medium truncate" title={item.subclass}>
                    {item.subclass}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold uppercase tracking-wider">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                      {item.status}
                    </span>

                    <button
                      type="button"
                      onClick={() => openModal(index)}
                      className="text-xs font-bold text-text-navy hover:text-accent-gold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>View Dossier</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Floating Button */}
          {canScrollLeft && (
            <button
              type="button"
              aria-label="Previous Grants"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.14)] border border-accent-gold/40 flex items-center justify-center text-text-navy hover:bg-text-navy hover:text-white transition-all duration-300 z-30 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={22} className="stroke-[2.5]" />
            </button>
          )}

          {/* Right Arrow Floating Button */}
          {canScrollRight && (
            <button
              type="button"
              aria-label="Next Grants"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.14)] border border-accent-gold/40 flex items-center justify-center text-text-navy hover:bg-text-navy hover:text-white transition-all duration-300 z-30 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight size={22} className="stroke-[2.5]" />
            </button>
          )}
        </div>

        {/* Bottom Carousel Progress Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto px-4">
          <div className="w-full sm:w-64 h-1.5 bg-accent-champagne/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-gold transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-text-charcoal font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <Link
              href="/contact"
              className="text-text-navy font-bold hover:text-accent-gold underline underline-offset-4 decoration-accent-gold/50 transition-colors"
            >
              Start your visa application →
            </Link>
          </div>
        </div>

      </div>

      {/* Luxury Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && filteredData[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[99990] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 360 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[92vh] flex flex-col border border-accent-gold/40"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-primary-ivory">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded bg-red-600 text-white text-[11px] font-black uppercase tracking-wider">
                        SURYA OVERSEAS CLIENT
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-text-navy font-serif">
                        {filteredData[selectedIndex].clientName}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {filteredData[selectedIndex].status}
                      </span>
                    </div>
                    <div className="text-xs text-text-charcoal mt-0.5 flex items-center gap-1.5 flex-wrap">
                      <span>{filteredData[selectedIndex].flag} {filteredData[selectedIndex].country}</span>
                      <span>•</span>
                      <span>{filteredData[selectedIndex].subclass}</span>
                      <span>•</span>
                      <span>Issued: {filteredData[selectedIndex].issueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Modal Header Actions */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-text-navy flex items-center justify-center transition-colors cursor-pointer"
                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                  >
                    {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                  </button>

                  <a
                    href={filteredData[selectedIndex].image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-text-navy flex items-center justify-center transition-colors cursor-pointer"
                    title="Open original file"
                  >
                    <ExternalLink size={18} />
                  </a>

                  <button
                    type="button"
                    aria-label="Close Preview"
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-text-navy flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Document Image Display Window */}
              <div className="relative flex-1 min-h-[360px] sm:min-h-[480px] md:min-h-[540px] max-h-[70vh] bg-slate-950 flex items-center justify-center p-4 sm:p-6 overflow-auto">

                {/* MODAL RED STAMP - Positioned in the middle of the picture, placed to the right so it never covers client face */}
                <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-10 md:right-16 z-20 pointer-events-none select-none">
                  <div className="transform -rotate-12 border-3 sm:border-4 border-red-600 rounded-xl px-5 sm:px-7 py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm shadow-2xl text-center">
                    <div className="text-red-600 font-black text-base sm:text-xl md:text-2xl tracking-widest uppercase flex items-center justify-center gap-1.5">
                      <span>★</span>
                      <span>SURYA OVERSEAS CLIENT</span>
                      <span>★</span>
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-red-600 tracking-widest uppercase mt-1">
                      VERIFIED OFFICIAL IMMIGRATION RECORD
                    </div>
                  </div>
                </div>

                <img
                  src={filteredData[selectedIndex].image}
                  alt={`${filteredData[selectedIndex].title} - ${filteredData[selectedIndex].clientName}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`max-w-full object-contain rounded-md shadow-2xl transition-all duration-300 ${isZoomed
                    ? 'scale-150 cursor-zoom-out my-auto'
                    : 'max-h-[64vh] cursor-zoom-in hover:opacity-95'
                    }`}
                  style={{ maxHeight: isZoomed ? 'none' : 'calc(70vh - 40px)' }}
                />

                {/* Left/Right Navigation inside Modal */}
                <button
                  type="button"
                  aria-label="Previous Document"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModal();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg z-30"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  aria-label="Next Document"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModal();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg z-30"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Modal Footer with Client Bio & CTA */}
              <div className="p-4 sm:p-5 bg-primary-ivory border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-text-charcoal max-w-xl">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-accent-gold">
                      Case {selectedIndex + 1} of {filteredData.length}
                    </span>
                    <span>•</span>
                    <span className="font-bold text-text-navy">{filteredData[selectedIndex].clientName}</span>
                  </div>
                  <div className="text-text-charcoal/80 text-[11px] leading-relaxed">
                    {filteredData[selectedIndex].details}
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                  <Link
                    href="/contact"
                    onClick={closeModal}
                    className="w-full sm:w-auto px-6 py-2.5 bg-text-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-gold transition-colors rounded-full flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Start Your Visa Case</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
