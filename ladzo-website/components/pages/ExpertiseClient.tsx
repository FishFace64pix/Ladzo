'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner from '@/components/sections/CTABanner'

const services = [
  {
    id: 'textile',
    icon: '🧵',
    title: 'Textile & Fashion',
    eyebrow: 'Supply Chain Excellence',
    description:
      'Our Textile & Fashion practice helps brands and manufacturers navigate the complexities of global sourcing, production optimisation, and market positioning. With deep networks across Turkey, Eastern Europe, and the UK, we deliver strategies that reduce cost, improve quality, and accelerate time-to-market for fashion businesses at every stage.',
    deliverables: [
      'Global supply chain audit and optimisation roadmap',
      'Supplier qualification and sourcing network development',
      'Production cost benchmarking and margin improvement',
    ],
  },
  {
    id: 'horeca',
    icon: '🍽️',
    title: 'Horeca',
    eyebrow: 'Hospitality Operations',
    description:
      'The hospitality sector demands precision in every detail — from menu engineering to procurement and staff training. Ladzo Limited brings operational consulting expertise built across Romanian, Turkish, and UK hospitality markets. We help hotels, restaurants, and catering operations reduce overhead, improve guest experience metrics, and build sustainable profitability.',
    deliverables: [
      'Full operations audit with cost reduction action plan',
      'Staff training frameworks and performance KPI systems',
      'Procurement strategy and supplier contract renegotiation',
    ],
  },
  {
    id: 'cosmetics',
    icon: '🌿',
    title: 'Cosmetics',
    eyebrow: 'Regulatory & Market Entry',
    description:
      'Entering new cosmetics markets requires navigating complex regulatory landscapes, building distributor relationships, and positioning brands to resonate with local consumers. Our team combines EU and UK regulatory expertise with Eastern European market knowledge to create compliant, commercially viable market entry plans for cosmetics and personal care brands.',
    deliverables: [
      'EU/UK regulatory compliance review and CPNP registration support',
      'Distributor network identification and negotiation',
      'Consumer positioning and competitive market analysis',
    ],
  },
  {
    id: 'ecommerce',
    icon: '🌐',
    title: 'E-commerce',
    eyebrow: 'Digital Growth Strategy',
    description:
      'Cross-border e-commerce unlocks enormous growth potential — but only when logistics, localisation, and marketplace strategy are aligned. Ladzo Limited guides businesses through digital transformation and marketplace expansion on Amazon, eBay, and regional platforms. We design end-to-end e-commerce systems that scale across borders with operational efficiency.',
    deliverables: [
      'Marketplace expansion strategy (Amazon, eBay, regional platforms)',
      'Cross-border logistics and fulfilment optimisation',
      'Digital transformation roadmap and technology stack review',
    ],
  },
]

export default function ExpertiseClient() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)!

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

      {/* Tabs Section */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-sm border transition-all duration-200 ${
                  active === s.id
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-navy/20 hover:border-gold hover:text-gold'
                }`}
              >
                <span>{s.icon}</span>
                {s.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-10"
            >
              <div className="lg:col-span-3 bg-white border border-navy/10 rounded-sm p-8 md:p-10 border-l-4 border-l-gold">
                <span className="font-mono text-xs uppercase tracking-widest text-gold mb-3 block">
                  {current.eyebrow}
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-5 flex items-center gap-4">
                  <span className="text-4xl">{current.icon}</span>
                  {current.title}
                </h2>
                <p className="font-sans text-base text-silver-slate leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="lg:col-span-2 bg-navy rounded-sm p-8">
                <span className="font-mono text-xs uppercase tracking-widest text-gold mb-6 block">
                  Key Deliverables
                </span>
                <ul className="flex flex-col gap-5">
                  {current.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-1 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="font-sans text-sm text-silver-slate leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-20">
            <SectionHeader
              eyebrow="Full Overview"
              heading="All Four Disciplines"
              subtext="A snapshot of every area where Ladzo Limited delivers measurable impact."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {services.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => {
                    setActive(s.id)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="bg-white border border-navy/10 rounded-sm p-7 cursor-pointer hover:border-gold hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-gold"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{s.icon}</span>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-gold mb-1 block">
                        {s.eyebrow}
                      </span>
                      <h3 className="font-playfair text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                        {s.title}
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {s.deliverables.map((d, j) => (
                          <li key={j} className="font-sans text-xs text-silver-slate flex items-start gap-2">
                            <span className="text-gold mt-0.5">·</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
