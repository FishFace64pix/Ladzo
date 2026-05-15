import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import ServicesGrid from '@/components/sections/ServicesGrid'
import GlobalTeaser from '@/components/sections/GlobalTeaser'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Ladzo Limited — Global Business Consulting',
  description:
    'Strategic consulting across Textile, Horeca, Cosmetics and E-commerce in 6 countries. First consultation free.',
  openGraph: {
    title: 'Ladzo Limited — Empowering Global Growth',
    description:
      'Strategic consulting across Textile, Horeca, Cosmetics and E-commerce in 6 countries. First consultation free.',
    url: 'https://ladzolimited.com',
    siteName: 'Ladzo Limited',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <GlobalTeaser />
      <CTABanner />
    </>
  )
}
