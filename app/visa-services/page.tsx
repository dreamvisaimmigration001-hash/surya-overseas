'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { Compass, Briefcase, Heart, PlaneTakeoff } from 'lucide-react';

export default function VisaServicesPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">
      
      {/* HERO */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1920&auto=format&fit=crop" 
            alt="International Passport and Flight Travel" 
            fill 
            priority
            className="object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-text-navy/60" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Visa Services</h1>
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-[1.1]">
              The World, <br/>
              <span className="italic text-accent-gold">Simplified.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL CONTENT */}
      <section className="py-32 bg-primary-ivory relative border-b border-accent-champagne">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-3xl">
           <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Seamless Travel</h2>
           <h3 className="text-4xl md:text-5xl font-serif text-text-navy mb-8">Navigate borders with ease.</h3>
           <p className="text-xl text-text-charcoal leading-relaxed font-light">
             From short-term tourist visas to crucial business trips, we ensure your travel plans are never derailed by administrative hurdles. Our expert team handles the complexities so you can focus on the journey.
           </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-32 bg-secondary-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Tourist Visa", 
              icon: Compass, 
              desc: "Explore new destinations for leisure, tourism, and short-term visits.", 
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" 
            },
            { 
              title: "Business Visa", 
              icon: Briefcase, 
              desc: "Attend conferences, meetings, and explore international business opportunities.", 
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
            },
            { 
              title: "Family Visit Visa", 
              icon: Heart, 
              desc: "Reunite with family members and loved ones living abroad.", 
              img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop" 
            },
            { 
              title: "Transit Visa", 
              icon: PlaneTakeoff, 
              desc: "Seamless connections through international hubs for your onward journey.", 
              img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop" 
            },
          ].map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-accent-champagne group overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-secondary-beige flex items-center justify-center rounded-full text-accent-gold">
                    <cat.icon size={20} />
                  </div>
                  <h3 className="text-2xl font-serif text-text-navy">{cat.title}</h3>
                </div>
                <p className="text-text-charcoal leading-relaxed">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-text-navy text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Planning your next trip?</h2>
        <Link href="/contact" className="px-10 py-5 bg-white text-text-navy text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-colors inline-block">
          Get Visa Assistance
        </Link>
      </section>
    </div>
  );
}
