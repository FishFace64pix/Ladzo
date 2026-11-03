'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const scopeOfServices = [
  'Management consultancy activities',
  'Market research and business development advisory',
  'Project coordination and documentation support',
  'Operational consulting',
  'Field visit participation, reporting and documentation',
  'Additional services agreed in writing',
]

export default function ScopeOfServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Engage"
          heading="Scope of Services"
          subtext="The core services we provide to clients across every engagement."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {scopeOfServices.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 bg-off-white border border-navy/10 border-l-4 border-l-gold rounded-sm p-6"
            >
              <span className="font-mono text-xs text-gold mt-1 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-sans text-base font-semibold text-navy leading-snug">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
