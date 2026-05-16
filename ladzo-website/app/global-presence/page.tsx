import type { Metadata } from 'next'
import GlobalPresenceClient from '@/components/pages/GlobalPresenceClient'

export const metadata: Metadata = {
  title: 'Global Presence',
  description:
    'Ladzo Limited operates across 6 countries: UK, Turkey, Germany, Romania, Moldova, and Estonia. International consulting with local expertise in every market.',
  alternates: { canonical: 'https://ladzolimited.com/global-presence' },
  openGraph: {
    title: 'Global Presence | Ladzo Limited',
    description:
      'Active consulting presence across 6 countries in Europe. Expertise in Textile, Horeca, Cosmetics and E-commerce markets.',
    url: 'https://ladzolimited.com/global-presence',
    type: 'website',
  },
}

export default function GlobalPresencePage() {
  return <GlobalPresenceClient />
}
