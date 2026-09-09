'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  Tag, 
  Search, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const categories = [
  "All",
  "Study Abroad",
  "Permanent Residency",
  "Visitor Visa",
  "Life Abroad",
  "Business & Investment",
  "Immigration Policy"
];

const featuredPost = {
  category: "Immigration Policy",
  badge: "2026 Official Briefing",
  title: "Canada Express Entry 2026: Comprehensive Category-Based Draws & CRS Score Analysis",
  date: "October 12, 2026",
  readTime: "6 min read",
  author: "Senior Legal Counsel",
  desc: "An in-depth breakdown of STEM, Healthcare, and Francophone category-based selections, revised settlement funds, and practical strategies to maximize your CRS points this year.",
  img: "/images/blog/featured.jpg",
  tags: ["Canada PR", "Express Entry", "CRS Calculator", "STEM Draw"]
};

const allPosts = [
  { 
    id: 1,
    category: "Study Abroad", 
    title: "Top 10 Emerging Universities in Europe for STEM & Engineering", 
    date: "October 05, 2026", 
    readTime: "5 min read",
    desc: "From TU Munich to ETH Zurich and TU Delft: English-taught master's degrees, zero or low tuition fees, and direct post-study work avenues.",
    img: "/images/blog/europe-stem.jpg" 
  },
  { 
    id: 2,
    category: "Visitor Visa", 
    title: "Schengen Visa Guide 2026: Seamless Travel Across 29 European Nations", 
    date: "September 28, 2026", 
    readTime: "4 min read",
    desc: "Essential checklist for multi-entry visas, approved travel insurance, verified flight itineraries, and embassy appointment scheduling.",
    img: "/images/blog/schengen-guide.jpg" 
  },
  { 
    id: 3,
    category: "Life Abroad", 
    title: "Cost of Living Comparison: Melbourne vs. Sydney for New Migrants", 
    date: "September 15, 2026", 
    readTime: "7 min read",
    desc: "A detailed breakdown of monthly rentals, public transit passes, groceries, and part-time student income across Australia's two premier cities.",
    img: "/images/blog/melbourne-sydney.jpg" 
  },
  { 
    id: 4,
    category: "Business & Investment", 
    title: "Golden Visa Opportunities in the UAE: 10-Year Residency for Investors", 
    date: "September 02, 2026", 
    readTime: "5 min read",
    desc: "Explore 10-year residency via real estate investment, entrepreneurial ventures, and executive talent pathways with 0% personal income tax.",
    img: "/images/blog/uae-golden-visa.jpg" 
  },
  { 
    id: 5,
    category: "Immigration Policy", 
    title: "UK Graduate Route & Skilled Worker Visa: 2026 Policy Updates", 
    date: "August 20, 2026", 
    readTime: "6 min read",
    desc: "Everything you need to know about the 2-year post-study stay, salary threshold increases, and transitioning smoothly into employer sponsorship.",
    img: "/images/blog/uk-immigration.jpg" 
  },
  { 
    id: 6,
    category: "Permanent Residency", 
    title: "From International Student to Permanent Resident: The Step-by-Step Blueprint", 
    date: "August 10, 2026", 
    readTime: "8 min read",
    desc: "How Indian graduates successfully navigate from student permits to work authorization and long-term permanent settlement in Canada, Australia, and Germany.",
    img: "/images/blog/student-to-pr.jpg" 
  },
  { 
    id: 7,
    category: "Immigration Policy", 
    title: "Germany Opportunity Card (Chancenkarte): Point-Based Jobseeker Pathway", 
    date: "July 28, 2026", 
    readTime: "5 min read",
    desc: "A comprehensive analysis of qualification recognition, language point calculations, and working part-time while securing high-paying German roles.",
    img: "/images/blog/germany-opportunity.jpg" 
  },
  { 
    id: 8,
    category: "Permanent Residency", 
    title: "Navigating US EB-1 & EB-2 NIW: Direct Green Card Pathways for Specialists", 
    date: "July 15, 2026", 
    readTime: "9 min read",
    desc: "How Indian professionals with advanced degrees and substantial merit can petition directly for permanent residency without PERM employer labor certification.",
    img: "/images/blog/usa-visa.jpg" 
  },
  { 
    id: 9,
    category: "Study Abroad", 
    title: "Post-Study Work Visas: Complete Comparison for Global Graduates", 
    date: "July 02, 2026", 
    readTime: "7 min read",
    desc: "A country-by-country breakdown of post-graduation work rights across Australia (subclass 485), Canada (PGWP), UK (Graduate Route), and Germany.",
    img: "/images/blog/stem-europe.jpg" 
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter(post => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) || 
      post.desc.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-primary-ivory pt-24 min-h-screen">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-accent-champagne/80">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/blog/blog-hero.jpg" 
            alt="Global Perspectives & Immigration Insights - Surya Overseas" 
            fill 
            className="object-cover object-center" 
            priority 
            sizes="100vw"
          />
          {/* Multi-layered luxury gradient overlay for ultimate legibility & royal warmth */}
          <div className="absolute inset-0 bg-gradient-to-b from-text-navy/95 via-text-navy/80 to-text-navy/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-gold/25 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/50 text-accent-gold text-[10px] font-mono uppercase tracking-[0.25em] mb-6 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Surya Overseas Knowledge Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-sm">
              Insights & <br/>
              <span className="italic text-accent-gold">Global Perspectives.</span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
              Expert legal analyses, official embassy policy briefs, country comparison guides, and immigration blueprints curated by licensed counselors.
            </p>

            {/* Search Bar with Glassmorphic styling */}
            <div className="mt-10 max-w-xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-charcoal/60 z-10" />
              <input
                type="text"
                placeholder="Search immigration policies, visa routes, countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-4 bg-white/95 backdrop-blur-md border border-accent-champagne focus:border-accent-gold rounded-full text-sm text-text-navy placeholder:text-text-charcoal/60 focus:outline-none shadow-2xl transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED POST SPOTLIGHT */}
      <section className="mt-16 sm:mt-24 px-6 md:px-12 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="bg-white rounded-3xl border border-accent-champagne shadow-xl overflow-hidden hover:border-accent-gold/50 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Image Column */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden group">
              <Image 
                src={featuredPost.img} 
                alt={featuredPost.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
              
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-accent-gold text-white text-[10px] font-bold uppercase tracking-widest shadow-md inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {featuredPost.badge}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 text-xs text-text-charcoal/80 mb-4 font-mono">
                  <span className="text-accent-gold font-bold uppercase tracking-wider">{featuredPost.category}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-accent-gold" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-text-navy font-bold leading-snug mb-4 hover:text-accent-gold transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-text-charcoal text-sm sm:text-base font-light leading-relaxed mb-6">
                  {featuredPost.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-secondary-beige text-[11px] font-medium text-text-navy/80 border border-accent-champagne">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-accent-champagne flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-text-navy">{featuredPost.author}</p>
                  <p className="text-[11px] text-text-charcoal/70">{featuredPost.date}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors rounded-lg shadow-sm"
                >
                  <span>Book Review</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28 sm:pb-36">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-accent-champagne">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-text-navy">
              Latest Publications & Editorial Briefs
            </h3>
            <p className="text-xs text-text-charcoal/70 mt-1">Showing {filteredPosts.length} verified editorial briefs</p>
          </div>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-accent-gold hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article 
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white rounded-2xl border border-accent-champagne hover:border-accent-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={post.img} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-text-navy shadow-md border border-black/5">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-text-charcoal/60 mb-3 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-accent-gold" />
                        {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-accent-gold" />
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif text-text-navy font-bold mb-3 leading-snug group-hover:text-accent-gold transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-text-charcoal text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {post.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-accent-champagne/60 flex items-center justify-between text-xs">
                    <span className="font-bold text-accent-gold group-hover:text-text-navy transition-colors inline-flex items-center gap-1.5">
                      Consult Counselor <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-charcoal/50">
                      Surya Editorial
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-accent-champagne">
            <BookOpen className="w-12 h-12 text-accent-gold/40 mx-auto mb-4" />
            <h4 className="text-xl font-serif text-text-navy mb-2">No articles found</h4>
            <p className="text-sm text-text-charcoal/70 mb-6">No publications matched your current search criteria.</p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-2.5 bg-text-navy text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-accent-gold transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* 4. NEWSLETTER & IMMIGRATION DISPATCH */}
        <div className="mt-20 sm:mt-28 bg-text-navy text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold mb-3 inline-block">
              Surya Overseas Dispatch
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif mb-4">
              Get Official Embassy Policy Updates.
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              Subscribe to our monthly advisory bulletin. We track CRS cutoffs, high-commission updates, student visa quota announcements, and regional nomination lists.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Surya Overseas Advisory Bulletin!"); }} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-accent-gold"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-accent-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-navy transition-colors rounded-xl shrink-0"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-[11px] text-gray-400 mt-3 font-mono">No spam. Only verified legal and embassy notices.</p>
          </div>
        </div>

      </section>

    </div>
  );
}
