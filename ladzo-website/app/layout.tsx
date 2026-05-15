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
  title: 'Ladzo Limited — Global Business Consulting',
  description:
    'Strategic consulting across Textile, Horeca, Cosmetics and E-commerce in 6 countries. First consultation free.',
  openGraph: {
    title: 'Ladzo Limited',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
