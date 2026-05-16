import type { Metadata } from 'next'
import AboutClient from '@/components/pages/AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Ladzo Limited — a UK-registered global consulting firm operating across 6 countries in Textile, Horeca, Cosmetics and E-commerce since 2020.',
  alternates: { canonical: 'https://ladzolimited.com/about' },
  openGraph: {
    title: 'About Us | Ladzo Limited',
    description:
      'UK-registered consulting firm with presence across 6 countries. Over 100 firms served across Textile, Horeca, Cosmetics and E-commerce.',
    url: 'https://ladzolimited.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
