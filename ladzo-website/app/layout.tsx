import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/layout/FloatingCTA'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ladzolimited.com'),
  title: {
    default: 'Ladzo Limited — Global Business Consulting',
    template: '%s | Ladzo Limited',
  },
  description:
    'Strategic business consulting across Textile, Horeca, Cosmetics and E-commerce. Operating in 6 countries. First consultation free.',
  keywords: [
    'business consulting',
    'global consulting',
    'textile consulting',
    'horeca consulting',
    'cosmetics consulting',
    'e-commerce consulting',
    'UK consulting firm',
    'Eastern Europe business',
    'international market entry',
    'Ladzo Limited',
  ],
  authors: [{ name: 'Ladzo Limited', url: 'https://ladzolimited.com' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Ladzo Limited — Global Business Consulting',
    description:
      'Strategic consulting across Textile, Horeca, Cosmetics and E-commerce in 6 countries. First consultation free.',
    url: 'https://ladzolimited.com',
    siteName: 'Ladzo Limited',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladzo Limited — Global Business Consulting',
    description: 'Strategic consulting across 6 countries. First consultation free.',
  },
  alternates: { canonical: 'https://ladzolimited.com' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ladzo Limited',
    description:
      'Strategic business consulting across Textile, Horeca, Cosmetics and E-commerce in 6 countries.',
    url: 'https://ladzolimited.com',
    telephone: '+447585367081',
    email: 'office@ladzogroup.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 6, 160 Eltham Hill',
      addressLocality: 'London',
      postalCode: 'SE9 5EA',
      addressCountry: 'GB',
    },
    areaServed: ['GB', 'TR', 'RU', 'RO', 'MD', 'UA'],
    knowsAbout: ['Textile Consulting', 'Horeca Consulting', 'Cosmetics Consulting', 'E-commerce Consulting'],
    foundingDate: '2020',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '10' },
  }

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
