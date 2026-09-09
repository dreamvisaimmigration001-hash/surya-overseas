'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const destinations = [
  {
    name: "Canada",
    landmark: "Banff National Park & Toronto",
    desc: "Experience world-class living standards, top-ranked universities, and welcoming permanent residency pathways like Express Entry and Provincial Nominees.",
    pathways: "Study • Express Entry • PNP • Family Sponsorship",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop",
    highlights: ["#1 Best Quality of Life", "Post-Graduation Settlement Pathway", "Fast-track PR in 6-12 Months"],
  },
  {
    name: "Australia",
    landmark: "Sydney Opera House & Harbour",
    desc: "Thriving economy with premier universities, world-leading healthcare, and a laid-back coastal lifestyle for students and migrants.",
    pathways: "Study • Permanent Residency (189/190) • Visitor • Family PR",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&auto=format&fit=crop",
    highlights: ["Up to 5 Years Post-Study Stay", "World-Class Living Standards", "Direct Points-based PR Pathway"],
  },
  {
    name: "United Kingdom",
    landmark: "Big Ben & Westminster, London",
    desc: "Historic prestige meets modern global innovation. Home to the world's most renowned educational institutions and a thriving financial and tech hub.",
    pathways: "Study • Innovator Founder • Global Talent • Visitor",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop",
    highlights: ["2-Year Graduate Route Visa", "Shorter 1-Year Masters Degrees", "Global Financial Capital"],
  },
  {
    name: "USA",
    landmark: "Manhattan Skyline, New York",
    desc: "The global center for ambition, technology, and career growth. Access Silicon Valley, Wall Street, and the Ivy League with specialized immigration strategies.",
    pathways: "Study (F-1) • Investor (EB-5) • Extraordinary Ability (EB-1) • NIW",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1920&auto=format&fit=crop",
    highlights: ["STEM Degree Stay up to 3 Years", "Top Global Universities", "Global Innovation Ecosystem"],
  },
  {
    name: "New Zealand",
    landmark: "Milford Sound & Queenstown",
    desc: "A picturesque haven offering an unbeatable lifestyle balance, progressive environmental policies, and straightforward Green List residency avenues.",
    pathways: "Study • Green List Residency • Skilled Migrant • PR",
    img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1920&auto=format&fit=crop",
    highlights: ["Green List Straight-to-PR", "Peaceful & Safe Communities", "Spouse Open Resident Rights"],
  },
  {
    name: "Germany",
    landmark: "Neuschwanstein Castle, Bavaria",
    desc: "Europe's leading industrial and engineering powerhouse offering tuition-free public universities, the Opportunity Card, and fast-track EU Blue Cards.",
    pathways: "Study • EU Blue Card • Opportunity Card (Chancenkarte)",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1920&auto=format&fit=crop",
    highlights: ["Zero Tuition at Public Universities", "EU Blue Card in 21 Months", "Europe's Strongest Economy"],
  },
  {
    name: "UAE",
    landmark: "Burj Khalifa, Downtown Dubai",
    desc: "A futuristic tax-free oasis offering high income potential, unmatched modern luxury, safety, and long-term 10-year Golden Visa pathways.",
    pathways: "10-Year Golden Visa • Green Visa • Investor Residency • Business",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop",
    highlights: ["0% Personal Income Tax", "10-Year Golden Residency", "Fast Visa Processing & Setup"],
  },
  {
    name: "Europe (Schengen)",
    landmark: "Eiffel Tower, Paris",
    desc: "Experience seamless border-free travel across 29 Schengen countries, diverse cultural landscapes, digital nomad programs, and premier European universities.",
    pathways: "Schengen Visa • Digital Nomad • D-Visa • European PR",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1920&auto=format&fit=crop",
    highlights: ["Visa-Free Access to 29 Nations", "Rich Heritage & Healthcare", "Flexible Digital Nomad Visas"],
  },
  {
    name: "Ireland",
    landmark: "Cliffs of Moher & Dublin Tech Bay",
    desc: "The vibrant Silicon Docks of Europe hosting headquarters for Google, Meta, and Apple with welcoming English-speaking culture and high standards of living.",
    pathways: "Critical Skills Residency • Graduate Route • EU Settlement",
    img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1920&auto=format&fit=crop",
    highlights: ["European Tech HQ Hub", "2-Year Stay-Back Post-Graduation", "Path to Irish Citizenship"],
  },
];

export default function CountriesPage() {
  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4 inline-block">
          Global Opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-text-navy leading-tight mb-6">
          Where will your <br />
          <span className="italic text-accent-gold">journey begin?</span>
        </h1>
        <p className="text-text-charcoal max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Discover handpicked global destinations for higher education, career elevation, and permanent residency. Each destination offers tailored pathways managed end-to-end by Surya Overseas.
        </p>
      </section>

      {/* Destination Rows */}
      <section className="border-t border-accent-champagne">
        {destinations.map((dest, i) => (
          <DestinationRow key={dest.name} dest={dest} index={i} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-text-navy text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4 inline-block">
            Personalized Evaluation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Not sure which country is right for you?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Our licensed immigration advisors assess your educational background, career goals, and eligibility to match you with the optimal destination.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-accent-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-navy transition-colors inline-block"
          >
            Book Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}

function DestinationRow({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/contact?destination=${encodeURIComponent(dest.name)}`}
      className="block border-b border-accent-champagne overflow-hidden cursor-hover-target relative group"
    >
      <div
        className="relative w-full min-h-[360px] md:min-h-[420px] transition-all duration-700 bg-text-navy flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image of the specific country */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={dest.img}
            alt={`${dest.name} - ${dest.landmark}`}
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="100vw"
            priority={index < 2}
          />
          {/* Rich cinematic gradient overlay ensuring high text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-text-navy/95 via-text-navy/80 to-text-navy/40 group-hover:from-text-navy/90 group-hover:via-text-navy/70 group-hover:to-text-navy/30 transition-colors duration-500" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-3xl">
            {/* Landmark and Index Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold text-accent-gold tracking-widest uppercase flex items-center gap-1.5">
                <MapPin size={14} className="text-accent-gold" />
                {dest.landmark}
              </span>
              <span className="text-xs text-accent-champagne/60">•</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-champagne/80">
                0{index + 1}
              </span>
            </div>

            {/* Country Name */}
            <motion.h3
              animate={{ x: isHovered ? 12 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-4"
            >
              {dest.name}
            </motion.h3>

            {/* Description */}
            <motion.p
              animate={{ x: isHovered ? 12 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="text-gray-200 text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
            >
              {dest.desc}
            </motion.p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {dest.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/15 text-white rounded-full font-medium"
                >
                  <CheckCircle2 size={12} className="text-accent-gold" />
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Action Column */}
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-3">
              {dest.pathways}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-white hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore Country
              </span>
              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  isHovered
                    ? 'border-accent-gold bg-accent-gold text-white scale-110 shadow-lg'
                    : 'border-white/30 text-white bg-white/10 backdrop-blur-sm'
                }`}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
