'use client'

import { motion } from 'framer-motion'

interface CountryCardProps {
  flag: string
  country: string
  activity: string
  index?: number
}

export default function CountryCard({ flag, country, activity, index = 0 }: CountryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-navy/10 rounded-sm p-6 hover:border-gold hover:shadow-lg hover:shadow-navy/5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{flag}</span>
        <h3 className="font-playfair text-lg font-bold text-navy">{country}</h3>
      </div>
      <p className="font-sans text-sm text-silver-slate leading-relaxed">{activity}</p>
    </motion.div>
  )
}
