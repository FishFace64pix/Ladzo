'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subtext?: string
  light?: boolean
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  light = false,
  centered = false,
}: SectionHeaderProps) {
  const textColor = light ? 'text-white' : 'text-navy'
  const eyebrowColor = 'text-gold'
  const subtextColor = light ? 'text-silver-slate' : 'text-silver-slate'
  const alignClass = centered ? 'text-center items-center' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignClass}`}
    >
      {eyebrow && (
        <span className={`font-mono text-xs uppercase tracking-widest ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance ${textColor}`}
      >
        {heading}
      </h2>
      {subtext && (
        <p className={`font-sans text-base md:text-lg leading-relaxed max-w-2xl ${subtextColor}`}>
          {subtext}
        </p>
      )}
    </motion.div>
  )
}
