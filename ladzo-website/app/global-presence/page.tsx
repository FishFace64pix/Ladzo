import type { Metadata } from 'next'
import GlobalPresenceClient from '@/components/pages/GlobalPresenceClient'

export const metadata: Metadata = {
  title: 'Global Presence',
  description:
    'Ladzo Limited is headquartered in the UK and supports businesses connected to Turkey, Germany, Moldova and Estonia. International consulting with local expertise in every market.',
  alternates: { canonical: 'https://ladzolimited.com/global-presence' },
  openGraph: {
    title: 'Global Presence | Ladzo Limited',
    description:
      'UK-based consulting with an international outlook. Expertise in Textile, Horeca, Cosmetics and E-commerce markets.',
    url: 'https://ladzolimited.com/global-presence',
    type: 'website',
  },
}

export default function GlobalPresencePage() {
  return <GlobalPresenceClient />
}
