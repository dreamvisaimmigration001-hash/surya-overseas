'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, Globe, Navigation as NavIcon, MapPin, ArrowRight } from 'lucide-react';
import LatestPPR from '@/components/LatestPPR';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-primary-ivory">
      <HeroSection />
      <IntroSection />
      <FloatingDestinations />
      <LatestPPR />
      <ServicesSticky />
      <ImageStorytelling />
      <WhySurya />
      <VerticalJourney />
      <DestinationTransition />
      <ConsultationHover />
      <TestimonialSection />
      <SuccessMetrics />
      <BlogEditorial />
      <FinalCTA />
    </div>
  );
}

// 1. DYNAMIC ANIMATED HOME HERO
function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll parallax for each country image
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yTopRight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [-2, 3]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [2, -3]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 md:pt-32 pb-12 bg-primary-ivory"
    >
      {/* Ambient Luxury Atmospheric Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-accent-gold/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-accent-champagne/40 rounded-full blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05908_1px,transparent_1px),linear-gradient(to_bottom,#C5A05908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* ========================================================================= */}
      {/* 1. TOP-LEFT COUNTRY IMAGE (CANADA BANFF ROCKIES)                         */}
      {/* ========================================================================= */}
      <motion.div
        style={{ y: yLeft, rotate: rotateLeft }}
        className="hidden md:block absolute top-[8%] md:top-[9%] left-[2%] md:left-[5%] xl:left-[7%] z-10 md:w-[280px] lg:w-[350px] xl:w-[400px] pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative rounded-2xl overflow-hidden p-2.5 bg-white/85 backdrop-blur-xl border border-accent-champagne/90 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(197,160,89,0.25)] hover:-translate-y-1 transition-all duration-300">
            {/* Country Image Frame */}
            <div className="relative h-[190px] sm:h-[220px] md:h-[260px] w-full rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop"
                alt="Canada - Banff National Park & Rocky Mountains"
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 50vw, 420px"
                priority
              />

              {/* Animated Light Sweep Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />

              {/* Top Pill: Country Tag with Pulsing Beacon */}
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                  <span>🇨🇦</span> Canada
                </span>
              </div>

              {/* Bottom Badge: Pathway Name */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-accent-gold text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Express Entry & PNP
                </span>
                <span className="hidden sm:inline-block px-2 py-1 rounded bg-white/90 backdrop-blur-md text-text-navy text-[10px] font-bold shadow">
                  6-Month Fast Track
                </span>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-2.5 px-1 flex items-center justify-between text-text-navy">
              <div>
                <p className="text-xs font-serif font-bold tracking-tight">Banff & Toronto Pathways</p>
                <p className="text-[10px] text-text-charcoal font-medium">Permanent Residency & Study</p>
              </div>
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                Explore →
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================================ */}
      {/* 2. BOTTOM-RIGHT COUNTRY IMAGE (AUSTRALIA SYDNEY)                            */}
      {/* ============================================================================ */}
      <motion.div
        style={{ y: yRight, rotate: rotateRight }}
        className="hidden md:block absolute bottom-[4%] md:bottom-[6%] right-[2%] md:right-[5%] xl:right-[7%] z-10 md:w-[290px] lg:w-[360px] xl:w-[410px] pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative rounded-2xl overflow-hidden p-2.5 bg-white/85 backdrop-blur-xl border border-accent-champagne/90 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(197,160,89,0.25)] hover:-translate-y-1 transition-all duration-300">
            {/* Country Image Frame */}
            <div className="relative h-[190px] sm:h-[220px] md:h-[260px] w-full rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop"
                alt="Australia - Sydney Opera House & Harbour"
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 50vw, 440px"
                priority
              />

              {/* Animated Light Sweep Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />

              {/* Top Pill: Country Tag with Pulsing Beacon */}
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-[11px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                  <span>🇦🇺</span> Australia
                </span>
              </div>

              {/* Bottom Badge: Pathway Name */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-text-navy text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Subclass 189 / 190 PR
                </span>
                <span className="hidden sm:inline-block px-2 py-1 rounded bg-white/90 backdrop-blur-md text-text-navy text-[10px] font-bold shadow">
                  99.4% Approval
                </span>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-2.5 px-1 flex items-center justify-between text-text-navy">
              <div>
                <p className="text-xs font-serif font-bold tracking-tight">Sydney & Melbourne</p>
                <p className="text-[10px] text-text-charcoal font-medium">Skilled Migration & Group of Eight</p>
              </div>
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                Explore →
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 3. TOP-RIGHT SUBTLE AMBIENT COUNTRY CARD (UK LONDON) - DEPTH ELEMENT      */}
      {/* ========================================================================= */}
      <motion.div
        style={{ y: yTopRight }}
        className="hidden lg:block absolute top-[12%] right-[4%] xl:right-[6%] z-0 w-52 pointer-events-none select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-2 rounded-xl bg-white/60 backdrop-blur-md border border-accent-champagne shadow-lg group cursor-default transition-all duration-300"
        >
          <div className="relative h-28 w-full rounded-lg overflow-hidden mb-1.5">
            <Image
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop"
              alt="United Kingdom - London Westminster"
              fill
              className="object-cover transition-transform duration-700"
              sizes="200px"
            />
            <div className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-black/60 rounded text-[9px] font-bold text-white uppercase">
              🇬🇧 UK & Europe
            </div>
          </div>
          <p className="text-[10px] font-bold text-text-navy px-1 truncate">Russell Group & Tech Visas</p>
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 4. MAIN CENTER TYPOGRAPHY & INTERACTIVE HEADLINE (MAGAZINE EDITORIAL)    */}
      {/* ========================================================================= */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center my-auto"
      >
        {/* Top Gold Divider Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 flex items-center justify-center gap-3 sm:gap-4"
        >
          <span className="h-[1px] w-8 sm:w-16 bg-accent-gold" />
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent-gold">
            Global Immigration • Study • Settlement • Visas
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-accent-gold" />
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[98px] leading-[0.94] tracking-tighter text-text-navy flex flex-col items-center select-none drop-shadow-sm">
          <motion.span 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-black uppercase tracking-tight"
          >
            Your World
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic font-normal text-accent-gold my-1 md:my-2 tracking-normal"
          >
            Starts Beyond
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-black uppercase tracking-tight text-text-navy"
          >
            Borders.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-text-charcoal max-w-xl font-light leading-relaxed"
        >
          Transforming ambitions into global legacies with bespoke immigration architecture for Canada, Australia, the UK, USA, and Europe.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 bg-text-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group rounded-sm shadow-md"
          >
            <span>Book Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/countries"
            className="w-full sm:w-auto px-9 py-4 bg-white/90 backdrop-blur-md border border-accent-champagne text-text-navy text-xs font-bold uppercase tracking-widest hover:border-accent-gold hover:bg-white hover:text-accent-gold transition-all duration-300 flex items-center justify-center gap-2 rounded-sm shadow-sm"
          >
            <span>Explore Destinations</span>
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 5. TRUST & PROOF METRICS BAR AT BOTTOM                                    */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
        className="relative z-20 w-full max-w-5xl mx-auto px-6 mt-10 pt-6 border-t border-accent-champagne/80"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-text-navy">99.4%</p>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-text-charcoal mt-1">Visa Success Rate</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-text-navy">15,000+</p>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-text-charcoal mt-1">Clients Relocated</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-text-navy">50+</p>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-text-charcoal mt-1">Countries Handled</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-text-navy">Since 2012</p>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-text-charcoal mt-1">Licensed Advisory</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// 2 & 3. NEW INTRODUCTION SECTION
function IntroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="relative min-h-[120vh] flex items-center overflow-hidden bg-text-navy">
      <motion.div style={{ x }} className="absolute inset-0 w-[150%] h-full opacity-40">
        <Image src="https://picsum.photos/seed/introbg/1920/1080" alt="Moving Abroad" fill className="object-cover" referrerPolicy="no-referrer" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-12 leading-tight tracking-tight uppercase">
            Moving abroad is <br/>
            <span className="font-serif italic text-accent-champagne normal-case">more than paperwork.</span><br/>
            It is a decision about your future.
          </h2>
          <p className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl leading-relaxed">
            Surya Overseas helps you navigate that decision with clarity, expertise and absolute confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// 4. FLOATING GLOBAL DESTINATIONS
function FloatingDestinations() {
  const destinations = [
    { name: "Canada", flag: "/flags/ca.png", top: "20%", left: "15%", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop" },
    { name: "UK", flag: "/flags/gb.png", top: "30%", left: "45%", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop" },
    { name: "Europe", flag: "/flags/eu.png", top: "50%", left: "60%", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop" },
    { name: "USA", flag: "/flags/us.png", top: "70%", left: "20%", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop" },
    { name: "Australia", flag: "/flags/au.png", top: "80%", left: "75%", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop" },
    { name: "UAE", flag: "/flags/ae.png", top: "76%", left: "45%", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="relative bg-secondary-beige cursor-hover-target py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="w-full flex flex-col justify-center">
        <div className="text-center mb-8 md:mb-12 relative z-20 px-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-2 md:mb-3">Global Network</h2>
          <p className="text-3xl md:text-5xl font-serif text-text-navy">Explore The Map</p>
          <div className="mt-2 flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest text-text-navy/60 uppercase">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
            <span>Click or Hover Flags For Destination Details</span>
          </div>
        </div>

        <div className="relative w-full h-[560px] sm:h-[620px] md:h-[680px] max-w-7xl mx-auto px-4">
          {destinations.map((dest, i) => (
            <DestinationNode key={i} {...dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationNode({ name, flag, top, left, img, index }: { name: string, flag: string, top: string, left: string, img: string, index: number }) {
  const [isActive, setIsActive] = useState(false);

  const topPercent = parseFloat(top);
  const leftPercent = parseFloat(left);
  const isBottomHalf = topPercent > 45;
  const isLeft = leftPercent < 30;
  const isRight = leftPercent > 65;

  // Position popup dynamically so it NEVER gets cut off at any edge
  const verticalPos = isBottomHalf ? "bottom-full mb-4" : "top-full mt-4";
  const horizontalPos = isLeft ? "left-0" : isRight ? "right-0" : "left-1/2 -translate-x-1/2";

  return (
    <div 
      className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ top, left }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="relative">
        <motion.div 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 cursor-pointer select-none group"
        >
          {/* Substantially Increased Flag Size - Highly Visible, Crisp & Prestigious */}
          <div className="relative w-14 h-9 sm:w-16 sm:h-10 md:w-20 md:h-13 lg:w-24 lg:h-15 overflow-hidden rounded-lg shadow-lg shrink-0 border-2 border-white group-hover:border-accent-gold transition-all duration-300 group-hover:shadow-2xl">
            <Image src={flag} alt={`${name} flag`} fill className="object-cover" sizes="(max-width: 768px) 64px, 96px" />
          </div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-navy text-center bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-md shadow-md border border-black/5 group-hover:border-accent-gold/50 group-hover:text-accent-gold transition-all whitespace-nowrap">
            {name}
          </span>
        </motion.div>
        
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: isBottomHalf ? 6 : -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: isBottomHalf ? 6 : -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute ${verticalPos} ${horizontalPos} w-60 sm:w-64 md:w-72 max-w-[calc(100vw-2.5rem)] bg-white rounded-xl shadow-2xl border border-accent-gold/40 p-2.5 z-50 pointer-events-auto`}
            >
              <div className="relative h-32 sm:h-36 md:h-40 w-full rounded-lg overflow-hidden mb-2.5 bg-slate-100">
                <Image 
                  src={img} 
                  alt={name} 
                  fill 
                  className="object-cover" 
                  referrerPolicy="no-referrer" 
                  sizes="(max-width: 768px) 240px, 288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5 text-white">
                  <div className="relative w-5 h-3.5 overflow-hidden rounded-xs border border-white/40">
                    <Image src={flag} alt={`${name} flag`} fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold tracking-wide">{name}</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-[9px] sm:text-[10px] font-mono text-text-navy/70 uppercase tracking-wider truncate mr-1">
                  Study • Settlement • Visas
                </span>
                <Link 
                  href="/countries" 
                  className="text-[11px] font-bold text-accent-gold hover:text-text-navy flex items-center gap-1 transition-colors shrink-0"
                >
                  Explore →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// 5. NEW SERVICES EXPERIENCE (Sticky Scrolling)
function ServicesSticky() {
  const services = [
    { 
      num: "01", 
      name: "Study Abroad", 
      desc: "Gain access to world-class education and top international universities.", 
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
      num: "02", 
      name: "Tourist & Visitor Visa", 
      desc: "Seamless international travel, leisure, and global exploration.", 
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
      num: "03", 
      name: "Permanent Residency", 
      desc: "Build a life you don't have to leave with long-term settlement avenues.", 
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
      num: "04", 
      name: "Business Immigration", 
      desc: "Expand your enterprise internationally with investor pathways.", 
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
      num: "05", 
      name: "Family Sponsorship", 
      desc: "Bring your loved ones closer with dedicated dependent migration.", 
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
      num: "06", 
      name: "Passport & Citizenship", 
      desc: "Achieve the ultimate freedom of global mobility and citizenship.", 
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="bg-primary-ivory relative border-y border-accent-champagne">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 relative items-start">
        
        {/* Left Column: Pinned Sticky Editorial Header on Scroll Down & Scroll Up */}
        <div className="md:col-span-5 md:sticky md:top-28 xl:top-32 md:self-start py-12 md:py-20 lg:py-28 z-20">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/40 text-accent-gold text-[10px] font-mono uppercase tracking-[0.25em] mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              <span>Expertise</span>
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-text-navy leading-[1.08] tracking-tight">
              One Journey. <br/>
              <span className="italic text-accent-gold font-normal">Many Possibilities.</span>
            </h3>

            <p className="mt-6 sm:mt-8 text-text-navy/75 text-base md:text-lg font-light leading-relaxed">
              Navigating the pathways to your global future with precision, transparency, and personal commitment at every stage.
            </p>

            {/* Quick Service Directory & Progress Indicator */}
            <div className="mt-10 pt-8 border-t border-accent-champagne/80 hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold mb-4">
                Available Pathways ({services.length})
              </p>
              <div className="space-y-3">
                {services.map((srv) => (
                  <div key={srv.num} className="flex items-center gap-3 text-xs font-medium text-text-navy/70 group">
                    <span className="font-mono text-[10px] text-accent-gold font-bold">{srv.num}</span>
                    <span className="group-hover:text-accent-gold transition-colors">{srv.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-text-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors rounded-sm shadow-sm"
                >
                  <span>Explore All Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Service Cards Scrolling Down */}
        <div className="md:col-span-7 py-8 sm:py-16 md:py-20 lg:py-28 space-y-12 sm:space-y-16 lg:space-y-24">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative bg-white border border-accent-champagne p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden mb-6 sm:mb-8 rounded-lg bg-slate-100">
                <Image 
                  src={srv.img} 
                  alt={srv.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  referrerPolicy="no-referrer" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
              </div>
              <div className="flex gap-4 sm:gap-6 items-start">
                <span className="text-3xl sm:text-4xl font-serif text-accent-champagne font-bold shrink-0">{srv.num}</span>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-serif text-text-navy mb-3 italic">{srv.name}</h4>
                  <p className="text-text-charcoal mb-5 text-sm sm:text-base leading-relaxed">{srv.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-text-navy group-hover:text-accent-gold transition-colors">
                    Explore Service <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// 6. IMAGE STORYTELLING SECTION ("Where Could Your Journey Take You?")
function ImageStorytelling() {
  const journeys = [
    {
      country: "Canada",
      flag: "/flags/ca.png",
      tagline: "World-Class Academics & Direct Permanent Residency",
      desc: "Top research universities, post-graduation stay permits, and accessible permanent residency pathways.",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Express Entry & PNP", "Top Global Universities", "Post-Grad Stay Options"],
      link: "/countries",
    },
    {
      country: "United Kingdom",
      flag: "/flags/gb.png",
      tagline: "Centuries of Academic Prestige & Global Hub",
      desc: "Home to Oxford, Cambridge, Russell Group institutions and a two-year graduate route in a financial powerhouse.",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Russell Group Excellence", "2-Year Graduate Route", "Financial & Cultural Capital"],
      link: "/countries",
    },
    {
      country: "Europe (Schengen)",
      flag: "/flags/eu.png",
      tagline: "Borderless Travel Across 29 European Nations",
      desc: "Affordable higher education, multilingual culture, and unparalleled freedom of mobility throughout Europe.",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Affordable Tuition", "29-Country Mobility", "Exceptional Standard of Living"],
      link: "/countries",
    },
    {
      country: "United States",
      flag: "/flags/us.png",
      tagline: "The Epicenter of Innovation & Higher Education",
      desc: "World-leading technology hubs, Ivy League prestige, and extensive OPT stay avenues for global graduates.",
      img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Ivy League & Tier-1 Unis", "STEM OPT Extension", "Global Career Headstart"],
      link: "/countries",
    },
    {
      country: "Australia",
      flag: "/flags/au.png",
      tagline: "Unrivaled Quality of Life & Top Research Universities",
      desc: "High minimum standards, Group of Eight institutions, and generous regional permanent residency streams.",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Group of Eight Universities", "Regional Migration Streams", "Pristine Coastline Lifestyle"],
      link: "/countries",
    },
    {
      country: "United Arab Emirates",
      flag: "/flags/ae.png",
      tagline: "0% Personal Tax & 10-Year Golden Visas",
      desc: "The world's leading crossroads for business, safety, cosmopolitan lifestyle, and high-yield investment visas.",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      highlights: ["10-Year Golden Visa", "Tax-Free Personal Income", "Global Transit Center"],
      link: "/countries",
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-secondary-beige relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/40 text-accent-gold text-[10px] font-mono uppercase tracking-[0.25em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-ping" />
            <span>Global Horizons</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-text-navy leading-tight">
            Where Could Your <br />
            <span className="italic text-accent-gold font-normal">Journey Take You?</span>
          </h2>
          <p className="mt-6 text-text-navy/70 text-base md:text-lg font-light leading-relaxed">
            From Ivy League institutions to borderless Schengen freedom and sunny Australian coasts, Surya Overseas guides your path to the world’s most prestigious destinations.
          </p>
        </div>

        {/* 6-Card High-Definition Destination Showcase - ZERO CUTOFFS, 100% VISIBLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeys.map((item, idx) => (
            <motion.div
              key={item.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-accent-champagne shadow-md hover:shadow-2xl hover:border-accent-gold/60 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame - 100% visible, fully responsive, crisp aspect ratio */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.img}
                    alt={`${item.country} landscape`}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Country Flag Pill Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-black/5">
                    <div className="relative w-5 h-3.5 overflow-hidden rounded-xs border border-black/10">
                      <Image src={item.flag} alt={`${item.country} flag`} fill className="object-cover" />
                    </div>
                    <span className="text-xs font-bold text-text-navy tracking-wider uppercase">{item.country}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-serif font-bold text-text-navy group-hover:text-accent-gold transition-colors leading-snug">
                    {item.tagline}
                  </h3>
                  <p className="mt-3 text-sm text-text-navy/70 leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-5 space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-text-navy/85 font-medium">
                        <span className="w-4 h-4 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-accent-champagne/40 flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-text-navy/60 uppercase">
                  Available Streams
                </span>
                <Link
                  href={item.link}
                  className="text-xs font-bold uppercase tracking-widest text-accent-gold hover:text-text-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  <span>Explore Pathways</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Overview Action Bar */}
        <div className="mt-16 text-center">
          <Link
            href="/countries"
            className="inline-flex items-center gap-3 bg-text-navy text-accent-champagne hover:bg-accent-gold hover:text-text-navy px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>View All Global Destinations & Visa Criteria</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 7. WHY SURYA OVERSEAS - REDESIGN
function WhySurya() {
  const principles = [
    { num: "01", title: "Personalized Strategy", desc: "Every journey is unique. We build a customized roadmap for your specific goals." },
    { num: "02", title: "Experienced Guidance", desc: "A decade of expertise navigating complex international immigration laws." },
    { num: "03", title: "Transparent Process", desc: "No hidden fees, no false promises. Just clear, honest immigration pathways." },
    { num: "04", title: "End-to-End Support", desc: "From initial assessment to your final settlement abroad, we are with you." },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-text-navy text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/texture1/1920/1080')] bg-cover mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif mb-6 lg:mb-8 lg:sticky lg:top-32">
            Guidance that goes <br/>
            <span className="italic text-accent-gold">beyond the application.</span>
          </h2>
        </div>
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {principles.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/20 pb-8 sm:pb-12"
            >
              <span className="text-4xl sm:text-6xl font-sans font-bold text-white/10 block mb-4 sm:mb-6">{p.num}</span>
              <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4">{p.title}</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. NEW IMMIGRATION PROCESS (Vertical Journey)
function VerticalJourney() {
  const steps = [
    {
      title: "Profile Assessment",
      desc: "In-depth evaluation of your academic qualifications, career history, language proficiency, and global visa eligibility.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Pathway Selection",
      desc: "Strategic guidance choosing the premier universities, career paths, and tailored immigration visa categories for you.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Documentation",
      desc: "Meticulous verification, legal document drafting, and preparation of all required credentials and financial proofs.",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Application",
      desc: "Flawless official submission and lodging with immigration authorities, embassies, and top university admissions.",
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Decision",
      desc: "Receiving your approved visa stamp, official confirmation of enrollment, and final immigration clearance.",
      img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Your New Beginning",
      desc: "Pre-departure briefings, flight arrangements, accommodation assistance, and taking flight towards your global future.",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
    }
  ];
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-28 md:py-40 bg-primary-ivory relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-3">Step-By-Step Process</h2>
          <p className="text-4xl md:text-6xl font-serif text-text-navy">The Journey</p>
        </div>
        
        <div className="hidden md:block absolute left-[50%] top-48 bottom-0 w-[2px] bg-accent-champagne -translate-x-1/2" />
        <motion.div 
          className="hidden md:block absolute left-[50%] top-48 bottom-0 w-[2px] bg-accent-gold origin-top -translate-x-1/2"
          style={{ scaleY }}
        />

        <div className="space-y-16 md:space-y-28">
          {steps.map((step, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-14 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-accent-gold flex items-center justify-center shrink-0 z-10 md:absolute md:left-[50%] md:-translate-x-1/2 shadow-lg">
                <span className="font-serif text-accent-gold font-bold text-base md:text-lg">0{i + 1}</span>
              </div>
              <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight text-text-navy">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mt-2 font-light leading-relaxed max-w-sm mx-auto md:mx-0 inline-block">{step.desc}</p>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-40px" }}
                   transition={{ duration: 0.5 }}
                   className="w-full h-48 md:h-52 bg-secondary-beige border border-accent-champagne rounded-xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 group"
                 >
                   <Image 
                     src={step.img} 
                     alt={step.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                     referrerPolicy="no-referrer" 
                     sizes="(max-width: 768px) 100vw, 420px"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                     <span>{step.title}</span>
                     <span className="text-accent-champagne">Step 0{i + 1}</span>
                   </div>
                 </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 9. DESTINATION FEATURE (Full Screen Transition)
function DestinationTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <section ref={ref} className="h-[120vh] sm:h-[140vh] md:h-[150vh] bg-text-navy relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute top-20 text-center z-10 px-4">
          <h2 className="text-2xl sm:text-3xl font-serif italic text-accent-gold">Imagine waking up somewhere new.</h2>
        </div>
        
        <motion.div style={{ scale }} className="relative w-full h-full transform origin-center">
          <Image src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop" alt="Canada - Banff Rocky Mountains" fill className="object-cover opacity-60" priority referrerPolicy="no-referrer" />
          
          <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h3 className="text-6xl sm:text-8xl md:text-[130px] lg:text-[150px] font-sans font-bold tracking-tighter uppercase mb-3 sm:mb-4 text-center">CANADA</h3>
            <p className="text-sm sm:text-base md:text-xl tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold text-accent-gold text-center">Study • PR • Tourism • Family</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// 10. NEW CONSULTATION SECTION
function ConsultationHover() {
  const countryImages: Record<string, string> = {
    "Canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop",
    "Australia": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&auto=format&fit=crop",
    "UK": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop",
    "USA": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1920&auto=format&fit=crop",
    "Europe": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1920&auto=format&fit=crop",
    "New Zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1920&auto=format&fit=crop",
  };
  const dests = Object.keys(countryImages);
  const [activeImg, setActiveImg] = useState("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop");

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-primary-ivory border-y border-accent-champagne overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImg}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Image src={activeImg} alt="Background" fill className="object-cover grayscale" referrerPolicy="no-referrer" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-8 sm:mb-12">Where do you want to go?</h2>
        <div className="flex flex-col items-center">
          {dests.map((dest, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveImg(countryImages[dest])}
              onClick={() => setActiveImg(countryImages[dest])}
              className="group cursor-pointer py-1.5 sm:py-2"
            >
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter uppercase text-text-charcoal group-hover:text-text-navy transition-colors duration-300">
                {dest}
              </h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16">
          <Link href="/contact" className="px-8 sm:px-10 py-4 sm:py-5 bg-text-navy text-primary-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors inline-block rounded-sm shadow-md">
            Start Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

// 11. TESTIMONIAL SECTION
function TestimonialSection() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-secondary-beige relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-lg"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          >
            <Image src="/images/about/story.jpg" alt="Client Success Story" fill className="object-cover" />
          </motion.div>
        </div>
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6 sm:mb-12">Client Success</h2>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-text-navy leading-relaxed mb-6 sm:mb-8">
            &quot;The entire process finally felt simple. Surya Overseas gave us the confidence to build our life in Canada.&quot;
          </blockquote>
          <div>
            <p className="font-sans font-bold uppercase tracking-widest text-text-navy">Priya & Rahul</p>
            <p className="text-sm text-text-charcoal mt-1">Permanent Residency, Canada</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 12. SUCCESS METRICS
function SuccessMetrics() {
  const metrics = [
    { num: "2012", label: "Established" },
    { num: "50+", label: "Countries" },
    { num: "10K+", label: "Applications" },
    { num: "95%+", label: "Satisfaction" },
  ];
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-text-navy text-white overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6 gap-6 sm:gap-8">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center"
          >
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter text-accent-champagne mb-2 sm:mb-4">{m.num}</h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent-gold">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// 13. BLOG SECTION
function BlogEditorial() {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-primary-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-text-navy">Insights & Updates</h2>
          <Link href="/blog" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-text-navy pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative h-[280px] sm:h-[380px] lg:h-[480px] overflow-hidden border border-accent-champagne mb-5 sm:mb-6 rounded-lg bg-slate-100">
              <Image src="/images/blog/featured.jpg" alt="Canada Express Entry" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-2 sm:mb-3">Canada PR</p>
            <h3 className="text-2xl sm:text-3xl font-serif text-text-navy mb-3 sm:mb-4 group-hover:text-accent-gold transition-colors">Express Entry Updates 2026: What You Need To Know</h3>
            <p className="text-text-charcoal text-sm">October 12, 2026</p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8">
            <div className="group cursor-pointer">
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden border border-accent-champagne mb-3 sm:mb-4 rounded-lg bg-slate-100">
                <Image src="/images/blog/melbourne-sydney.jpg" alt="Australia Universities" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-1.5 sm:mb-2">Study Abroad</p>
              <h3 className="text-lg sm:text-xl font-serif text-text-navy group-hover:text-accent-gold transition-colors">Top Universities in Australia for Engineering</h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden border border-accent-champagne mb-3 sm:mb-4 rounded-lg bg-slate-100">
                <Image src="/images/blog/uk-immigration.jpg" alt="UK Visa Route" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-1.5 sm:mb-2">Visitor Visa</p>
              <h3 className="text-lg sm:text-xl font-serif text-text-navy group-hover:text-accent-gold transition-colors">Understanding the UK Visitor & Tourist Route</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 14. FINAL CTA
function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative min-h-[75vh] md:h-screen flex items-center justify-center overflow-hidden bg-text-navy py-16 md:py-0">
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image src="/images/about/story.jpg" alt="Global Departure" fill className="object-cover opacity-40 mix-blend-luminosity" />
      </motion.div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter uppercase text-white mb-6 sm:mb-8 leading-tight">
          Your next chapter <br/>
          <span className="font-serif italic text-accent-gold font-light normal-case tracking-normal">is waiting somewhere.</span>
        </h2>
        <Link href="/contact" className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-text-navy text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-colors inline-block mt-4 sm:mt-8 rounded-sm shadow-xl">
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}
