'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

interface PPRItem {
  id: number;
  image: string;
  title: string;
  country: string;
  category: string;
  clientName?: string;
  status: string;
  issueDate?: string;
}

const pprData: PPRItem[] = [
  {
    id: 1,
    image: '/ppr/ppr-1.jpeg',
    title: 'Russian Federation Work Visa',
    country: 'Russian Federation',
    category: 'Employment Visa',
    clientName: 'Yadav Aklesh Kumar',
    status: 'VISA GRANTED',
    issueDate: '2026',
  },
  {
    id: 2,
    image: '/ppr/ppr-2.jpeg',
    title: 'Russian Federation Employment Visa',
    country: 'Russian Federation',
    category: 'Employment Visa',
    clientName: 'Mohammad Sahib',
    status: 'VISA GRANTED',
    issueDate: '2026',
  },
  {
    id: 3,
    image: '/ppr/ppr-3.jpeg',
    title: 'Russian Federation Work Permit Visa',
    country: 'Russian Federation',
    category: 'Employment Visa',
    clientName: 'Chand Sharad',
    status: 'VISA GRANTED',
    issueDate: '2026',
  },
  {
    id: 4,
    image: '/ppr/ppr-4.jpeg',
    title: 'Russian Federation Visa Approval',
    country: 'Russian Federation',
    category: 'Employment Visa',
    clientName: 'Rangrej Mo Seraj',
    status: 'VISA GRANTED',
    issueDate: '2026',
  },
  {
    id: 5,
    image: '/ppr/ppr-5.jpeg',
    title: 'Australian Government Visa Grant',
    country: 'Australia',
    category: 'Transit Subclass 771',
    clientName: 'Patel Chintankumar R.',
    status: 'VISA GRANTED',
    issueDate: 'Feb 2025',
  },
  {
    id: 6,
    image: '/ppr/ppr-6.jpeg',
    title: 'Department of Home Affairs Grant Notice',
    country: 'Australia',
    category: 'Transit Subclass 771',
    clientName: 'Kanwariya Shravankumar S.',
    status: 'VISA GRANTED',
    issueDate: 'Feb 2025',
  },
  {
    id: 7,
    image: '/ppr/ppr-7.jpeg',
    title: 'Australian Government Subclass 771',
    country: 'Australia',
    category: 'Official Grant Notice',
    clientName: 'Patel Chintankumar R.',
    status: 'VISA GRANTED',
    issueDate: 'Feb 2025',
  },
];

export default function LatestPPR() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
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
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 320;
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
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
    setSelectedIndex((selectedIndex + 1) % pprData.length);
  };

  const prevModal = () => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((selectedIndex - 1 + pprData.length) % pprData.length);
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
  }, [selectedIndex]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden border-b border-accent-champagne/60">
      {/* Ambient decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-text-navy tracking-tight">
            Latest PPR
          </h2>
          {/* Distinct golden/amber underline bar matching design */}
          <div className="w-16 sm:w-20 h-1 bg-[#E5A93B] rounded-full mx-auto mt-3" />
        </div>

        {/* Carousel Container with Floating Arrow Buttons */}
        <div className="relative group/carousel">
          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2 -mx-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pprData.map((item, index) => (
              <div
                key={item.id}
                className="w-[280px] sm:w-[305px] md:w-[320px] flex-shrink-0 snap-start bg-white rounded-[26px] p-3 sm:p-3.5 border-2 border-[#FF5E5E]/85 shadow-[0_8px_30px_rgba(255,94,94,0.06)] hover:shadow-[0_16px_40px_rgba(255,94,94,0.18)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Card Window */}
                <div
                  onClick={() => openModal(index)}
                  className="relative h-[330px] sm:h-[360px] w-full rounded-[18px] overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Shimmer sweep on card hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-text-navy shadow-lg">
                      <ZoomIn size={13} className="text-[#FF3B30]" />
                      <span>View Full Document</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Metadata & Action Bar */}
                <div className="mt-3.5 flex items-center justify-between px-1 pb-0.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF1F1] border border-[#FFCDCD] text-[#FF3B30] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase shadow-xs">
                    {item.status}
                  </span>

                  <button
                    type="button"
                    onClick={() => openModal(index)}
                    className="text-[11px] sm:text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline flex items-center gap-0.5 cursor-pointer transition-colors"
                  >
                    <span>Click to view</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              type="button"
              aria-label="Previous PPRs"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] border border-gray-100 flex items-center justify-center text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-white transition-all duration-300 z-20 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={22} className="stroke-[2.5]" />
            </button>
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              type="button"
              aria-label="Next PPRs"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] border border-gray-100 flex items-center justify-center text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-white transition-all duration-300 z-20 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight size={22} className="stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>

      {/* Luxury Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[99990] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[92vh] flex flex-col border border-accent-champagne"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-primary-ivory">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-text-navy">
                        {pprData[selectedIndex].title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-50 text-red-600 border border-red-200">
                        {pprData[selectedIndex].status}
                      </span>
                    </div>
                    <p className="text-xs text-text-charcoal mt-0.5">
                      {pprData[selectedIndex].country} • {pprData[selectedIndex].category}
                      {pprData[selectedIndex].clientName && (
                        <span> • Client: {pprData[selectedIndex].clientName}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom Toggle */}
                  <button
                    type="button"
                    aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-text-navy flex items-center justify-center transition-colors cursor-pointer"
                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                  >
                    {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                  </button>

                  {/* Open in new tab link */}
                  <a
                    href={pprData[selectedIndex].image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-text-navy flex items-center justify-center transition-colors cursor-pointer"
                    title="Open full size in new tab"
                  >
                    <ExternalLink size={18} />
                  </a>

                  {/* Close button */}
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
              <div className="relative flex-1 min-h-[360px] sm:min-h-[480px] md:min-h-[540px] max-h-[70vh] bg-slate-950 flex items-center justify-center p-3 sm:p-6 overflow-auto">
                <img
                  src={pprData[selectedIndex].image}
                  alt={pprData[selectedIndex].title}
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`max-w-full object-contain rounded-md shadow-2xl transition-all duration-300 ${
                    isZoomed 
                      ? 'scale-150 cursor-zoom-out my-auto' 
                      : 'max-h-[64vh] cursor-zoom-in hover:opacity-95'
                  }`}
                  style={{ maxHeight: isZoomed ? 'none' : 'calc(70vh - 40px)' }}
                />

                {/* Modal Navigation Arrows */}
                <button
                  type="button"
                  aria-label="Previous Document"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModal();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg z-10"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg z-10"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Modal Footer with CTA */}
              <div className="p-4 sm:p-5 bg-primary-ivory border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-text-charcoal">
                  <span className="font-bold text-accent-gold">
                    {selectedIndex + 1} of {pprData.length}
                  </span>
                  <span>Approvals Verified by Surya Overseas Advisory</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={closeModal}
                    className="w-full sm:w-auto px-5 py-2.5 bg-text-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-gold transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    <span>Start Your Visa Application</span>
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
