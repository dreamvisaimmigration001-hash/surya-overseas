'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Scale, 
  Home, 
  Award, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import LatestPPR from '@/components/LatestPPR';

export default function PRPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">

      {/* HERO */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/prhero/1920/1080" alt="Family" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-text-navy/50" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Permanent Residency</h1>
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-[1.1]">
              Build A Legacy, <br />
              <span className="italic text-accent-gold">Anywhere In The World.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 2. BESPOKE PERMANENT SETTLEMENT & SANCTUARY SECTION */}
      <section className="py-24 sm:py-32 bg-primary-ivory relative border-b border-accent-champagne overflow-hidden">
        {/* Subtle Ambient Aura */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-accent-champagne/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-accent-gold/40 shadow-xs mb-5">
              <Sparkles size={14} className="text-accent-gold" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-text-navy">
                Permanent Residency & Settlement Sanctuary
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-text-navy leading-[1.15] tracking-tight">
              Where your global roots <br />
              <span className="italic text-accent-gold font-normal">grow deep and secure.</span>
            </h2>
            <p className="mt-6 text-text-charcoal text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Permanent residency is more than legal paperwork—it is the cornerstone of your family&apos;s future. We orchestrate flawless applications that grant you unconditional settlement rights, social security, and an enduring generational legacy in the world&apos;s most desirable nations.
            </p>
          </div>

          {/* Main Visual & Interactive Pillar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Settlement Pillars (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {[
                {
                  icon: Home,
                  title: "Generational Settlement & Family Unity",
                  desc: "Sponsor spouses, dependent children, and parents with immediate rights to work, study, and live unconditionally in your new homeland.",
                  stat: "Family Inclusion"
                },
                {
                  icon: ShieldCheck,
                  title: "Universal Healthcare & Premier Education",
                  desc: "Access state-funded healthcare coverage, subsidized domestic university tuition fees, and complete national social safety networks.",
                  stat: "Domestic Benefits"
                },
                {
                  icon: Award,
                  title: "Direct Gateway To Citizenship",
                  desc: "Permanent residency serves as your legal bridge to naturalization, qualifying you for powerful global passports within 3 to 5 years.",
                  stat: "Citizenship Path"
                },
                {
                  icon: Globe2,
                  title: "Borderless Enterprise & Asset Ownership",
                  desc: "Enjoy the unrestricted freedom to purchase prime residential real estate, launch multinational businesses, and access elite global banking.",
                  stat: "Full Mobility"
                }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-accent-champagne hover:border-accent-gold/60 hover:shadow-xl transition-all duration-300 group flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-beige flex items-center justify-center shrink-0 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-all duration-300 shadow-xs">
                    <pillar.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-lg font-serif font-bold text-text-navy group-hover:text-accent-gold transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-mono font-bold uppercase tracking-wider shrink-0">
                        {pillar.stat}
                      </span>
                    </div>
                    <p className="text-text-charcoal text-sm font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Layered Architectural Visual Showcase (6 cols) */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Main Architectural Residence Photo */}
                <div className="relative h-[480px] sm:h-[560px] w-full rounded-3xl overflow-hidden border border-accent-champagne/80 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop"
                    alt="Prestigious Permanent Settlement Residence"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-navy/85 via-transparent to-black/20" />

                  {/* Top Badge: Global Status */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-black/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider text-text-navy uppercase">
                      Permanent Status Granted
                    </span>
                  </div>

                  {/* Bottom Info Bar inside Photo */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent-gold mb-1.5">
                      The Surya Overseas Standard
                    </p>
                    <h4 className="text-xl sm:text-2xl font-serif leading-snug">
                      Flawless PR Architecture for Canada, Australia, the UK & Europe.
                    </h4>
                  </div>
                </div>

                {/* Overlapping Floating Milestone Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-xl border border-accent-gold/40 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-[280px] sm:max-w-xs z-20"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-full bg-accent-gold flex items-center justify-center text-white shrink-0 shadow-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-navy">Points-Based Mastery</p>
                      <p className="text-[10px] text-text-charcoal">Express Entry & General Skilled</p>
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-accent-champagne/60 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-text-navy">99.4% PR Approvals</span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">Verified Record</span>
                  </div>
                </motion.div>

                {/* Overlapping Floating Destination Pill Box */}
                <div className="hidden sm:flex absolute -top-5 -right-4 bg-text-navy text-white px-4 py-2.5 rounded-xl shadow-xl items-center gap-3 border border-white/10 z-20">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Streams:</span>
                  <span className="text-xs font-medium text-gray-200">Express Entry • Subclass 189/190 • PNP</span>
                </div>

              </motion.div>
            </div>

          </div>

          {/* Bottom Assessment Strip */}
          <div className="mt-20 p-6 sm:p-8 rounded-2xl bg-secondary-beige border border-accent-champagne flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0 hidden sm:flex">
                <Scale size={24} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-text-navy">
                  Unsure of your PR eligibility score?
                </h4>
                <p className="text-text-charcoal text-xs sm:text-sm mt-0.5">
                  Our licensed migration architects calculate your CRS & points score across all current active draws.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-text-navy hover:bg-accent-gold text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 shrink-0 group"
            >
              <span>Calculate Your PR Score</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-secondary-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">Strategic Approach</h2>
            <p className="text-4xl font-serif text-text-navy">The PR Process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Eligibility Assessment", icon: ShieldCheck, desc: "Rigorous evaluation of your credentials against PR criteria." },
              { title: "Points Optimization", icon: TrendingUp, desc: "Strategic advice to maximize your score in points-based systems." },
              { title: "Family Sponsorship", icon: Users, desc: "Navigating dependent and spousal pathways for family unification." },
              { title: "Application & Legal", icon: Scale, desc: "Flawless compilation and submission of your PR application." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 border border-accent-champagne hover:shadow-xl transition-shadow group text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-secondary-beige flex items-center justify-center rounded-full mb-6 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                  <step.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif text-text-navy mb-4">{step.title}</h3>
                <p className="text-text-charcoal text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST PPR & VISA GRANTS SHOWCASE */}
      <LatestPPR />

      {/* CTA */}
      <section className="py-32 bg-text-navy text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to plant roots abroad?</h2>
        <Link href="/contact" className="px-10 py-5 bg-accent-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-navy transition-colors inline-block">
          Evaluate Eligibility
        </Link>
      </section>
    </div>
  );
}
