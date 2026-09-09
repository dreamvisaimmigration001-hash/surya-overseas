'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, TrendingUp, Users, Scale } from 'lucide-react';

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
              Build A Legacy, <br/>
              <span className="italic text-accent-gold">Anywhere In The World.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL CONTENT */}
      <section className="py-32 bg-primary-ivory relative border-b border-accent-champagne">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Secure Your Future</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text-navy mb-8">A place to call home.</h3>
            <p className="text-text-charcoal mb-6 leading-relaxed">
              Permanent residency is more than a visa; it is a commitment to a new life. We specialize in navigating the intricate points-based systems, sponsorship pathways, and legal requirements for top global destinations.
            </p>
            <p className="text-text-charcoal leading-relaxed">
              Whether you are applying for Express Entry in Canada or General Skilled Migration in Australia, our architects of immigration will build a flawless application.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <Image src="https://picsum.photos/seed/prcontent/800/1000" alt="Residency" fill className="object-cover rounded-sm shadow-xl" referrerPolicy="no-referrer" />
          </motion.div>
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
