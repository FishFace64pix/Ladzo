'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-navy py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="200" cy="150" r="200" stroke="#C9A84C" strokeWidth="1" fill="none" />
          <circle cx="1000" cy="150" r="250" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold border border-gold/30 px-3 py-1.5 rounded-sm">
            No Commitment Required
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white text-balance">
            Your First 1-Hour Consultation
            <br />
            <span className="text-gold">is Completely Free</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-silver-slate max-w-xl">
            Discover how Ladzo Limited can unlock new markets and drive growth for your business.
            No obligation, just expert insight.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-sans font-bold px-10 py-4 rounded-sm hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/30 hover:shadow-gold/50 text-sm mt-2"
          >
            Book My Free Hour
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <p className="font-sans text-xs text-silver-slate/60">
            +44 7585 367081 · Unit 6, 160 Eltham Hill, London SE9 5EA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
