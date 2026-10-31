'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const partners = [
  { name: 'Eden Energy and Construction', logo: '/partners/eden-energy.png' },
  { name: 'Evka Tourism', logo: '/partners/evka-tourism.png' },
  { name: 'Sky Education', logo: '/partners/sky-education.png' },
  { name: 'A2B Commuting', logo: '/partners/a2b-commuting.png' },
  { name: 'Trademark Union', logo: '/partners/trademark-union.svg' },
  { name: "Jay's Foods", logo: '/partners/jays-foods.png' },
]

export default function Partners() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader eyebrow="Trusted By" heading="Some of Our Partners" centered />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-4 bg-off-white border border-navy/10 rounded-sm p-6 md:p-8 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-navy/10"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  unoptimized={partner.logo.endsWith('.svg')}
                  sizes="(min-width: 768px) 300px, 45vw"
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="font-sans text-sm font-semibold text-navy text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
