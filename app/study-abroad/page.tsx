'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { GraduationCap, MapPin, FileText, Plane } from 'lucide-react';

export default function StudyAbroadPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">
      
      {/* HERO */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/studyhero/1920/1080" alt="University" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-text-navy/60" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Study Abroad</h1>
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-[1.1]">
              Turn Education Into <br/>
              <span className="italic text-accent-gold">Your Global Advantage.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-secondary-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">Methodology</h2>
            <p className="text-4xl font-serif text-text-navy">The Academic Pathway</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Choose Your Course", icon: GraduationCap, desc: "Align your academic interests with global career opportunities." },
              { title: "University Applications", icon: FileText, desc: "Craft compelling profiles and manage complex admissions processes." },
              { title: "Visa Assistance", icon: MapPin, desc: "Navigate student visa requirements with high approval success." },
              { title: "Pre-Departure", icon: Plane, desc: "Comprehensive preparation for your new academic life abroad." },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 border border-accent-champagne hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-secondary-beige flex items-center justify-center rounded-sm mb-6 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                  <step.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif text-text-navy mb-4">{step.title}</h3>
                <p className="text-text-charcoal text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATION SELECTION */}
      <DestinationSelection />

      {/* CTA */}
      <section className="py-32 bg-text-navy text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to study on the global stage?</h2>
        <Link href="/contact" className="px-10 py-5 bg-accent-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-navy transition-colors inline-block">
          Start Your Application
        </Link>
      </section>
    </div>
  );
}

function DestinationSelection() {
  const dests = [
    { name: "United Kingdom", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop", uni: "Russell Group Universities (Oxford, Cambridge, LSE)" },
    { name: "USA", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop", uni: "Ivy League & Tier-1 Tech Universities" },
    { name: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop", uni: "Group of Eight (Go8) Premier Research Hubs" },
    { name: "Canada", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop", uni: "Top Research Institutes (UofT, UBC, McGill)" },
    { name: "Germany", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop", uni: "TU9 Leading Technical Universities" },
  ];
  
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-primary-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Choose Your Destination</h2>
          <h3 className="text-5xl font-serif text-text-navy mb-12">World-Class Education Hubs.</h3>
          
          <div className="flex flex-col gap-4">
            {dests.map((dest, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setActive(i)}
                className={`text-left py-4 border-b transition-colors duration-300 flex justify-between items-center ${active === i ? 'border-accent-gold text-accent-gold' : 'border-accent-champagne text-text-charcoal hover:text-text-navy'}`}
              >
                <span className="text-3xl font-serif">{dest.name}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">{dest.uni}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative h-[600px] w-full bg-secondary-beige p-6">
           <div className="relative w-full h-full overflow-hidden border border-accent-champagne shadow-2xl">
             <Image src={dests[active].img} alt={dests[active].name} fill className="object-cover transition-transform duration-1000 scale-105" referrerPolicy="no-referrer" />
           </div>
        </div>
      </div>
    </section>
  );
}
