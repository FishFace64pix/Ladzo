'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  index?: number
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-white border border-navy/10 rounded-sm p-7 cursor-default transition-all duration-300 hover:border-gold hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="absolute inset-0 rounded-sm border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-playfair text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="font-sans text-sm text-silver-slate leading-relaxed">{description}</p>
    </motion.div>
  )
}
