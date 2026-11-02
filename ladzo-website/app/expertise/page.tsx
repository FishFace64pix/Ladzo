import type { Metadata } from 'next'
import ExpertiseClient from '@/components/pages/ExpertiseClient'

export const metadata: Metadata = {
  title: 'Our Expertise',
  description:
    'Expert consulting in Textile & Fashion, Horeca, Cosmetics, and E-commerce. Ladzo Limited supports UK and international businesses.',
  alternates: { canonical: 'https://ladzolimited.com/expertise' },
  openGraph: {
    title: 'Our Expertise | Ladzo Limited',
    description:
      'Consulting specialisms across Textile & Fashion, Horeca, Cosmetics, and E-commerce. Practical strategies for UK and international markets.',
    url: 'https://ladzolimited.com/expertise',
    type: 'website',
  },
}

export default function ExpertisePage() {
  return <ExpertiseClient />
}
