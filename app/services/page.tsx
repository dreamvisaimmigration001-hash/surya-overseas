'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const services = [
  { id: "01", title: "Study Abroad", link: "/study-abroad", desc: "Gain admission to prestigious global universities with end-to-end guidance from application to enrollment.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" },
  { id: "02", title: "Tourist & Visitor Visa", link: "/visa-services", desc: "Travel the world seamlessly with dedicated tourist and visitor visa consultation and expedited processing.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop" },
  { id: "03", title: "Permanent Residency", link: "/pr", desc: "Secure your long-term future with expert pathways to permanent residency in top global destinations.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop" },
  { id: "04", title: "Business Immigration", link: "/contact", desc: "Expand your enterprise across borders with specialized business and investor visa solutions.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" },
  { id: "05", title: "Passport & Dual Citizenship", link: "/contact", desc: "Achieve the ultimate freedom of global mobility through international citizenship and golden passports.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop" },
  { id: "06", title: "Family Immigration", link: "/contact", desc: "Reunite with loved ones through expert assistance in family sponsorship and dependent visas.", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop" },
];

export default function ServicesPage() {
  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">
      <div className="text-center py-24 max-w-4xl mx-auto px-6">
        <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Our Services</h1>
        <h2 className="text-5xl md:text-7xl font-serif text-text-navy leading-tight">
          Comprehensive <br/>
          <span className="italic text-accent-gold">Pathways.</span>
        </h2>
      </div>

      <div>
        {services.map((srv, i) => (
          <ServiceSection key={i} srv={srv} index={i} />
        ))}
      </div>
    </div>
  );
}

function ServiceSection({ srv, index }: { srv: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden border-b border-white group">
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0 transform origin-center">
        <Image src={srv.img} alt={srv.title} fill className="object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-text-navy/50 transition-opacity duration-700 group-hover:bg-text-navy/30" />
      </motion.div>
      
      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-6xl font-sans font-bold text-accent-gold/80 block mb-4 tracking-tighter">{srv.id}</span>
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-6 hover:italic transition-all duration-300">
              <Link href={srv.link}>{srv.title}</Link>
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed font-light">{srv.desc}</p>
          </div>
          <Link href={srv.link} className="px-8 py-4 bg-white text-text-navy text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-colors shrink-0 text-center">
            Explore Pathway
          </Link>
        </div>
      </div>
    </section>
  );
}
