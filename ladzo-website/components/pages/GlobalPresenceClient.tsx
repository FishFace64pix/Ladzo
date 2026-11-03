'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import CountryCard from '@/components/ui/CountryCard'
import CTABanner from '@/components/sections/CTABanner'

const WorldMapChart = dynamic(() => import('@/components/sections/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-navy/5 border border-navy/10 rounded-sm flex items-center justify-center">
      <p className="font-mono text-xs uppercase tracking-widest text-silver-slate">Loading map...</p>
    </div>
  ),
})

const countries = [
  {
    flag: '🏢',
    country: 'Domestic — United Kingdom',
    activity:
      'Our registered headquarters. We support UK businesses across all four industries with management, market research and operational consulting.',
  },
  {
    flag: '🌍',
    country: 'International',
    activity:
      'From our UK base, we advise clients abroad and businesses expanding across borders, with the same consistent standard of strategic support.',
  },
]

export default function GlobalPresenceClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="600" cy="200" r="350" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
            <circle cx="600" cy="200" r="500" stroke="#C9A84C" strokeWidth="0.4" fill="none" />
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
              Where We Operate
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight">
              Global
              <br />
              <span className="text-gold">Presence</span>
            </h1>
            <p className="font-sans text-lg text-silver-slate mt-6 max-w-xl">
              One consistent standard of excellence. Ladzo Limited works where
              opportunity and ambition meet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeader
              eyebrow="Where We Work"
              heading="UK Based, Global Reach"
              subtext="Headquartered in the United Kingdom, we advise clients both domestically and internationally."
              centered
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <WorldMapChart />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {countries.map((c, i) => (
              <CountryCard
                key={c.country}
                flag={c.flag}
                country={c.country}
                activity={c.activity}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
