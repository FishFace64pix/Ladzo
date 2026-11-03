'use client'

import { motion } from 'framer-motion'
import ScopeOfServices from '@/components/sections/ScopeOfServices'
import CTABanner from '@/components/sections/CTABanner'

export default function ExpertiseClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none opacity-8">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="900" cy="100" r="300" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold mb-4 block">
              What We Do
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight">
              Our Areas of
              <br />
              <span className="text-gold">Expertise</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <ScopeOfServices />

      <CTABanner />
    </>
  )
}

