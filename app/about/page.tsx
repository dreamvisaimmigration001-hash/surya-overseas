'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { 
  CheckCircle2, 
  Compass, 
  Globe, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  Building2, 
  Users, 
  FileCheck,
  Scale
} from 'lucide-react';
import LatestPPR from '@/components/LatestPPR';

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">
      
      {/* 1. HERO */}
      <section ref={heroRef} className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image 
            src="/images/about/hero-journey.jpg" 
            alt="International Flight Journey - Surya Overseas" 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-text-navy/90 via-text-navy/60 to-text-navy/30" />
        </motion.div>
        
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-12">
          <motion.div style={{ opacity }} className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-accent-gold text-[10px] font-mono uppercase tracking-[0.25em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>Our Heritage & Vision</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
                Experience Behind <br/>
                <span className="italic text-accent-gold">Every Journey.</span>
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ACCREDITATIONS TICKER / TRUST BAR */}
      <section className="bg-secondary-beige border-b border-accent-champagne/80 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 text-text-charcoal/80 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-accent-gold shrink-0" />
              <span>CICC & MARA Regulatory Compliance</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5">
              <Award className="w-5 h-5 text-accent-gold shrink-0" />
              <span>British Council Certified Advisory</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-accent-gold shrink-0" />
              <span>800+ Direct University Partnerships</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-accent-gold shrink-0" />
              <span className="font-bold text-text-navy">99.4% Verified Visa Approval Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="py-24 sm:py-32 bg-primary-ivory relative border-b border-accent-champagne">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[440px] sm:h-[540px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-accent-champagne group"
          >
            <Image 
              src="/images/about/story.jpg" 
              alt="Global Journey - Indian Aspirants Moving Abroad" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 right-6 bg-white/95 backdrop-blur-md border border-accent-gold/40 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-gold/15 flex items-center justify-center text-accent-gold shrink-0">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-navy">Govt. Registered Advisory</p>
                <p className="text-xs font-serif font-bold text-accent-gold">Since 2012 &bull; Chandigarh</p>
              </div>
            </motion.div>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded bg-accent-gold text-white text-[10px] font-bold uppercase tracking-widest shadow-md inline-block mb-2">
                14+ Years of Dedicated Guidance
              </span>
              <p className="text-sm sm:text-base font-serif italic text-white/95">
                Empowering Indian aspirants to establish prestigious lives and careers across borders.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4 sm:mb-6">Our Story</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text-navy mb-6 sm:mb-8 leading-tight">
              Built on trust. <br/> 
              <span className="italic text-accent-gold">Guided by precision.</span>
            </h3>
            <p className="text-text-charcoal mb-6 leading-relaxed text-base sm:text-lg font-light">
              Founded in 2012 in India, Surya Overseas began with a singular mission: to demystify and streamline the complex world of international immigration and study abroad. What started as an ethical advisory practice in India has blossomed into a globally recognized immigration architecture agency.
            </p>
            <p className="text-text-charcoal mb-8 leading-relaxed text-base sm:text-lg font-light">
              We do not just process applications; we engineer life-changing global opportunities for Indian students, professionals, and families. From world-class university placements to elite skilled PR and business investor routes, we curate your international legacy with steadfast dedication.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-accent-champagne">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-text-navy">15K+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-charcoal/70 mt-1">Visas Granted</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-accent-gold">99.4%</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-charcoal/70 mt-1">Success Ratio</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-text-navy">50+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-charcoal/70 mt-1">Destinations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 sm:py-32 bg-secondary-beige relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-12 rounded-2xl border border-accent-champagne shadow-sm hover:shadow-lg transition-shadow"
          >
             <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold mb-6">
               <Compass className="w-6 h-6" />
             </div>
             <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-3">Our Mission</h2>
             <h3 className="text-2xl sm:text-3xl font-serif text-text-navy mb-4 italic">To architect global pathways.</h3>
             <p className="text-text-charcoal leading-relaxed font-light text-base">We strive to provide impeccable, transparent, and highly personalized immigration guidance, transforming complex bureaucratic processes into seamless transitions for students, professionals, and families worldwide.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-text-navy text-white p-8 sm:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
             <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-accent-champagne mb-6">
               <Globe className="w-6 h-6" />
             </div>
             <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-3">Our Vision</h2>
             <h3 className="text-2xl sm:text-3xl font-serif mb-4 italic text-accent-champagne">A world without borders.</h3>
             <p className="text-gray-300 leading-relaxed font-light text-base">To be the global gold standard in immigration consultancy, renowned for our unwavering integrity, exceptional visa success rates, and the profound positive impact we have on our clients&apos; lives and futures.</p>
          </motion.div>
        </div>
      </section>

      {/* 5. THE SURYA STANDARD - 4 CORE PILLARS OF EXCELLENCE */}
      <section className="py-24 sm:py-32 bg-primary-ivory border-b border-accent-champagne">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-3 inline-block">
              Why We Lead The Industry
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-text-navy mb-6">
              The Surya Standard.
            </h2>
            <p className="text-text-charcoal text-base sm:text-lg font-light leading-relaxed">
              Immigration is not paperwork; it is a life-defining transition. Our operational methodology is anchored by four unyielding pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Legal Architecture",
                subtitle: "Multi-Tier File Audits",
                desc: "Every SOP, employment dossier, and financial portfolio is rigorously vetted by certified counsels to ensure absolute compliance with embassy criteria.",
                icon: Scale
              },
              {
                num: "02",
                title: "Institutional Ties",
                subtitle: "800+ Partner Universities",
                desc: "Direct liaisons with premier global universities across Canada, the UK, Australia, the US, and Europe for accelerated offer letters and scholarship advisory.",
                icon: Building2
              },
              {
                num: "03",
                title: "Zero False Promises",
                subtitle: "100% Transparent Tracking",
                desc: "No hidden charges, no fabricated promises. Clients receive real-time portal access, official embassy filing receipts, and candid profile feasibility ratings.",
                icon: FileCheck
              },
              {
                num: "04",
                title: "Landing Concierge",
                subtitle: "Post-Arrival Settlement",
                desc: "Our responsibility extends beyond the visa stamp: airport reception guidance, housing assistance, SIN/TFN registration, and long-term PR roadmapping.",
                icon: Users
              }
            ].map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-accent-champagne hover:border-accent-gold shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-accent-gold tracking-widest bg-accent-gold/10 px-2.5 py-1 rounded-md">
                        {pillar.num}
                      </span>
                      <IconComp className="w-5 h-5 text-text-navy/60 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-navy mb-1 group-hover:text-accent-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono text-accent-gold uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>
                    <p className="text-text-charcoal text-sm font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPANY JOURNEY */}
      <section className="py-24 sm:py-32 bg-secondary-beige border-b border-accent-champagne">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-3">Milestones</h2>
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif text-text-navy">Our Journey.</p>
          </div>
          
          <div className="space-y-20 sm:space-y-32">
            {[
              { 
                year: "2012", 
                title: "The Foundation", 
                desc: "Surya Overseas is established in India with a vision to redefine immigration consulting through rigorous legal compliance, transparent paperwork, and dedicated advisory.", 
                img: "/images/journey/foundation-2012.jpg" 
              },
              { 
                year: "2015", 
                title: "Global Expansion", 
                desc: "Established licensed counseling desks and overseas support networks, serving over 5,000 successful applicants across Canada, the UK, Australia, and Europe.", 
                img: "/images/journey/expansion-2015.jpg" 
              },
              { 
                year: "2020", 
                title: "Digital Transformation", 
                desc: "Launched our proprietary client tracking workflow, ensuring 100% transparent tracking, digital document audits, and real-time embassy updates.", 
                img: "/images/journey/digital-2020.jpg" 
              },
              { 
                year: "2026", 
                title: "The New Era", 
                desc: "Surpassing 15,000 success stories with an industry-leading 99.4% visa success rate, celebrated as India's premier immigration architecture agency.", 
                img: "/images/journey/newera-2026.jpg" 
              },
            ].map((milestone, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-20 items-center`}>
                <div className="flex-1 w-full relative">
                   <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, margin: "-40px" }}
                     transition={{ duration: 0.6 }}
                     className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full rounded-2xl overflow-hidden border border-accent-champagne shadow-xl"
                   >
                     <Image 
                       src={milestone.img} 
                       alt={milestone.title} 
                       fill 
                       className="object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                       sizes="(max-width: 1024px) 100vw, 50vw"
                     />
                   </motion.div>
                </div>
                <div className="flex-1 w-full text-left">
                   <motion.div
                     initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-40px" }}
                     transition={{ duration: 0.6 }}
                   >
                     <h3 className="text-6xl sm:text-7xl lg:text-8xl font-sans font-bold text-accent-champagne mb-2 sm:mb-4 tracking-tighter">{milestone.year}</h3>
                     <h4 className="text-2xl sm:text-3xl font-serif text-text-navy mb-3 sm:mb-4 italic">{milestone.title}</h4>
                     <p className="text-text-charcoal leading-relaxed max-w-md text-sm sm:text-base font-light">{milestone.desc}</p>
                   </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REAL PASSPORT & VISA APPROVALS PROOF (Latest PPR) */}
      <LatestPPR />

      {/* 8. PRESTIGE EXECUTIVE CONSULTATION CTA BANNER */}
      <section className="py-24 sm:py-32 bg-text-navy text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-gold/15 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4 inline-block">
            Start Your International Chapter
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif leading-tight mb-6">
            Architect your future with <br className="hidden sm:inline" />
            <span className="italic text-accent-champagne">unrivaled expertise.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed mb-10">
            Book a confidential consultation with our licensed immigration counsels. We conduct a complete profile assessment and provide a realistic, transparent roadmap for study, residency, or settlement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-navy transition-all duration-300 shadow-xl rounded-md"
            >
              <span>Schedule Free Assessment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-colors rounded-md"
            >
              <span>Explore All Pathways</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400 font-mono">
            <span>&bull; Ground Floor, Central Mall, Chandigarh</span>
            <span>&bull; Confidential Assessment</span>
            <span>&bull; Direct Visa Filing</span>
          </div>
        </div>
      </section>

    </div>
  );
}
