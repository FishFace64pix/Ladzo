import type { Metadata } from 'next'
import ExpertiseClient from '@/components/pages/ExpertiseClient'

export const metadata: Metadata = {
  title: 'Our Expertise',
  description:
    'Expert consulting in Textile & Fashion, Horeca, Cosmetics, and E-commerce. Ladzo Limited delivers measurable results across 6 countries in Europe.',
  alternates: { canonical: 'https://ladzolimited.com/expertise' },
  openGraph: {
    title: 'Our Expertise | Ladzo Limited',
    description:
      'Consulting specialisms across Textile & Fashion, Horeca, Cosmetics, and E-commerce. Proven strategies across 6 countries.',
    url: 'https://ladzolimited.com/expertise',
    type: 'website',
  },
}

export default function ExpertisePage() {
  return <ExpertiseClient />
}
