import type { Metadata } from 'next'
import ContactClient from '@/components/pages/ContactClient'

export const metadata: Metadata = {
  title: 'Book a Free Consultation',
  description:
    'Book your free consultation with Ladzo Limited. Available Monday to Friday. Reach us at +44 7392 994771 or Unit 6, 160 Eltham Hill, London SE9 5EA.',
  alternates: { canonical: 'https://ladzolimited.com/contact' },
  openGraph: {
    title: 'Book a Free Consultation | Ladzo Limited',
    description:
      'Get in touch with Ladzo Limited. First hour is always free. Consulting in Textile, Horeca, Cosmetics and E-commerce.',
    url: 'https://ladzolimited.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
