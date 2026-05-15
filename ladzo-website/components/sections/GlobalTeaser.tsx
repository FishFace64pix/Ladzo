'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const countries = [
  { code: 'GB', name: 'United Kingdom', cx: 480, cy: 148 },
  { code: 'TR', name: 'Turkey', cx: 570, cy: 185 },
  { code: 'RU', name: 'Russia', cx: 640, cy: 120 },
  { code: 'RO', name: 'Romania', cx: 548, cy: 162 },
  { code: 'MD', name: 'Moldova', cx: 560, cy: 158 },
  { code: 'UA', name: 'Ukraine', cx: 568, cy: 150 },
]

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
              {['🇬🇧 UK', '🇹🇷 Turkey', '🇷🇺 Russia', '🇷🇴 Romania', '🇲🇩 Moldova', '🇺🇦 Ukraine'].map(
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

          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-navy/5 rounded-sm border border-navy/10 p-4 overflow-hidden">
              <svg
                viewBox="400 100 350 150"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Map showing Ladzo Limited operating countries"
              >
                {/* Simplified Europe outline */}
                <path
                  d="M420,140 L425,135 L432,132 L440,130 L450,128 L458,130 L465,128 L472,125 L480,122 L490,120 L500,118 L512,115 L524,114 L536,113 L548,112 L560,112 L572,110 L584,108 L596,107 L608,106 L620,105 L632,104 L644,103 L656,102 L668,102 L680,101 L692,100 L704,100 L716,101 L728,102 L740,103 L745,108 L742,115 L738,122 L730,128 L722,132 L714,135 L706,138 L698,142 L690,148 L682,154 L674,160 L666,165 L658,170 L650,175 L642,180 L634,185 L626,190 L618,193 L610,196 L602,198 L594,200 L586,202 L578,204 L570,206 L562,205 L554,204 L546,202 L538,200 L530,198 L522,195 L514,192 L506,188 L498,184 L490,180 L482,175 L474,170 L466,164 L458,158 L450,152 L442,147 L434,143 L426,141 Z"
                  fill="#E8E4DB"
                  stroke="#0A1628"
                  strokeWidth="0.5"
                  opacity="0.6"
                />

                {/* Country pins */}
                {countries.map((country) => (
                  <g key={country.code}>
                    <circle
                      cx={country.cx}
                      cy={country.cy}
                      r="5"
                      fill="#C9A84C"
                      stroke="#0A1628"
                      strokeWidth="1"
                    />
                    <circle cx={country.cx} cy={country.cy} r="8" fill="#C9A84C" opacity="0.2" />
                    <circle cx={country.cx} cy={country.cy} r="12" fill="#C9A84C" opacity="0.1" />
                  </g>
                ))}
              </svg>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-silver-slate text-center mt-3">
              6 Active Markets
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
