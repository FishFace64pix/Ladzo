'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden grain-overlay">
      {/* Animated SVG geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full animate-drift"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="200" y1="0" x2="0" y2="400" stroke="#C9A84C" strokeWidth="0.5" opacity="0.15" />
          <line x1="400" y1="0" x2="100" y2="800" stroke="#C9A84C" strokeWidth="0.5" opacity="0.1" />
          <line x1="700" y1="0" x2="900" y2="800" stroke="#C9A84C" strokeWidth="0.3" opacity="0.12" />
          <line x1="1000" y1="0" x2="1200" y2="600" stroke="#C9A84C" strokeWidth="0.5" opacity="0.1" />
          <line x1="0" y1="200" x2="1200" y2="400" stroke="#C9A84C" strokeWidth="0.3" opacity="0.08" />
          <line x1="0" y1="600" x2="800" y2="100" stroke="#C9A84C" strokeWidth="0.4" opacity="0.1" />
          <circle cx="600" cy="400" r="300" stroke="#C9A84C" strokeWidth="0.4" opacity="0.06" />
          <circle cx="600" cy="400" r="500" stroke="#C9A84C" strokeWidth="0.3" opacity="0.04" />
          <polygon
            points="600,100 850,550 350,550"
            stroke="#C9A84C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.06"
          />
        </svg>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-navy/0 via-navy/40 to-navy/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-gold mb-6 border border-gold/30 px-3 py-1.5 rounded-sm">
              Global Business Consulting
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Empowering
            <br />
            <span className="text-gold">Global Growth</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-silver-slate leading-relaxed mb-10 max-w-xl"
          >
            Strategic consulting across 6 countries, 100+ firms. We bridge local expertise with
            global markets across Textile, Horeca, Cosmetics, and E-commerce.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-sans font-bold px-8 py-4 rounded-sm hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/25 hover:shadow-gold/40 text-sm"
            >
              Book Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/expertise"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 font-sans font-semibold px-8 py-4 rounded-sm hover:border-white hover:bg-white/5 transition-all duration-200 text-sm"
            >
              Explore Our Expertise
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 font-sans text-xs text-silver-slate/60 flex items-center gap-2"
          >
            <span className="w-8 h-px bg-gold/40" />
            Registered in England & Wales · London, United Kingdom
          </motion.p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-off-white/10 to-transparent pointer-events-none" />
    </section>
  )
}
