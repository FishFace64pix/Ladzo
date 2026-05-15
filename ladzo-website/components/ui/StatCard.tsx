'use client'

import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  index?: number
}

export default function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col items-center gap-1 px-8 py-4"
    >
      <span className="font-playfair text-4xl md:text-5xl font-bold text-gold">{value}</span>
      <span className="font-mono text-xs uppercase tracking-widest text-silver-slate">{label}</span>
    </motion.div>
  )
}
