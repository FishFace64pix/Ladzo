'use client'

import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/contact"
        className="animate-pulse-gold flex items-center gap-2 bg-gold text-navy font-sans font-bold text-sm px-5 py-3 rounded-full shadow-xl shadow-gold/30 hover:shadow-gold/50 hover:bg-gold/95 transition-all duration-200"
      >
        Free Consultation
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  )
}
