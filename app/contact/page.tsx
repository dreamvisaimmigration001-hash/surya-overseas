'use client';

import { useActionState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { submitConsultationAction, ConsultationFormState } from '@/app/actions/consultation';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState<ConsultationFormState | null, FormData>(
    submitConsultationAction,
    null
  );

  return (
    <div className="bg-primary-ivory pt-32 min-h-screen">

      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Info & Imagery */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Contact Us</h1>
            <h2 className="text-5xl md:text-7xl font-serif text-text-navy mb-8 leading-tight">
              Begin Your <br />
              <span className="italic text-accent-gold">Journey Here.</span>
            </h2>
            <p className="text-text-charcoal text-lg mb-12 max-w-md">
              Whether you are ready to apply or just beginning to explore your options, our architects are here to guide you.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-beige flex items-center justify-center rounded-full text-accent-gold shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-1">Head Office</h4>
                  <p className="text-text-navy font-serif text-lg">Ground Floor, Shop No. 3<br />Centra Mall, Chandigarh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-beige flex items-center justify-center rounded-full text-accent-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-1">Call Us</h4>
                  <a href="tel:8968599924" className="text-text-navy font-serif text-lg hover:text-accent-gold transition-colors block">
                    +91 89685 99924
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div>


                </div>
              </div>
            </div>

            <div className="relative h-[300px] w-full max-w-md overflow-hidden">
              <Image src="https://picsum.photos/seed/contactimg/800/600" alt="Office" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-16 border border-accent-champagne shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-beige rounded-bl-full -z-10" />

          <div className="mb-8">
            <h3 className="text-3xl font-serif text-text-navy">Book a Consultation</h3>
            <p className="text-text-charcoal text-sm mt-2">
              Share your details and one of our dedicated immigration specialists will reach out to evaluate your profile.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {state?.success ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-serif text-text-navy mb-3">Inquiry Submitted!</h4>
                <p className="text-text-charcoal max-w-md mx-auto mb-8 text-sm leading-relaxed">
                  {state.message}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    formRef.current?.reset();
                    // Force re-render with clean form
                    window.location.reload();
                  }}
                  className="px-8 py-3 bg-text-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors"
                >
                  Submit Another Consultation
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} action={formAction} className="space-y-6">
                {/* General Error Alert */}
                {state?.success === false && state?.message && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-3 rounded-sm">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{state.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all placeholder:text-text-charcoal/40 text-sm"
                    />
                    {state?.errors?.firstName && (
                      <p className="text-red-500 text-[11px] mt-1">{state.errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="e.g. Sharma"
                      className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all placeholder:text-text-charcoal/40 text-sm"
                    />
                    {state?.errors?.lastName && (
                      <p className="text-red-500 text-[11px] mt-1">{state.errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="rahul.sharma@example.com"
                      className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all placeholder:text-text-charcoal/40 text-sm"
                    />
                    {state?.errors?.email && (
                      <p className="text-red-500 text-[11px] mt-1">{state.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all placeholder:text-text-charcoal/40 text-sm"
                    />
                    {state?.errors?.phone && (
                      <p className="text-red-500 text-[11px] mt-1">{state.errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                      Service of Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        defaultValue="Study Abroad"
                        className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all appearance-none cursor-pointer text-sm"
                      >
                        <option value="Study Abroad">Study Abroad</option>
                        <option value="Permanent Residency">Permanent Residency (PR)</option>
                        <option value="Tourist & Visitor Visa">Tourist &amp; Visitor Visa</option>
                        <option value="Work Permit & Employment">Work Permit &amp; Employment</option>
                        <option value="Family & Spouse Sponsorship">Family &amp; Spouse Sponsorship</option>
                        <option value="Business & Investor Immigration">Business &amp; Investor Immigration</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-charcoal">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {state?.errors?.service && (
                      <p className="text-red-500 text-[11px] mt-1">{state.errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                      Target Destination <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="destination"
                        required
                        defaultValue="Canada"
                        className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all appearance-none cursor-pointer text-sm"
                      >
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="USA">United States</option>
                        <option value="Europe / Schengen">Europe / Schengen</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Other">Other / Undecided</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-charcoal">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {state?.errors?.destination && (
                      <p className="text-red-500 text-[11px] mt-1">{state.errors.destination}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-text-charcoal mb-2">
                    Tell us about your goals (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Provide information regarding your education background, work experience, or any specific visa queries..."
                    className="w-full bg-secondary-beige border-none p-4 text-text-navy focus:ring-2 focus:ring-accent-gold outline-none transition-all resize-none placeholder:text-text-charcoal/40 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-5 bg-text-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-gold transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-lg"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

      </section>
    </div>
  );
}
