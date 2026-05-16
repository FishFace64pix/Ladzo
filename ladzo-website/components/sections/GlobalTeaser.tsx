'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import SectionHeader from '@/components/ui/SectionHeader'

const WorldMapChart = dynamic(() => import('@/components/sections/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 bg-navy/5 border border-navy/10 rounded-sm flex items-center justify-center">
      <p className="font-mono text-xs uppercase tracking-widest text-silver-slate">Loading map...</p>
    </div>
  ),
})

export default function GlobalTeaser() {
  return (
    <section className="bg-off-white py-20 md:py-28 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Global Presence"
              heading="Operating Across Europe & Beyond"
              subtext="With active operations in 6 countries, Ladzo Limited connects local business talent with international opportunities, providing on-the-ground expertise where it matters most."
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {['🇬🇧 UK', '🇹🇷 Turkey', '🇩🇪 Germany', '🇷🇴 Romania', '🇲🇩 Moldova', '🇪🇪 Estonia'].map(
                (c) => (
                  <span
                    key={c}
                    className="font-sans text-xs text-navy bg-navy/5 border border-navy/10 px-3 py-1 rounded-full"
                  >
                    {c}
                  </span>
                )
              )}
            </div>
            <Link
              href="/global-presence"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold/80 transition-colors mt-2"
            >
              Explore our global footprint
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <WorldMapChart />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
