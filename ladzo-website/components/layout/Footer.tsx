import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/global-presence', label: 'Global Presence' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = 2020

  return (
    <footer className="bg-navy border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Ladzo Limited"
                width={120}
                height={40}
                className="h-9 w-auto invert"
              />
            </Link>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">
              Empowering Global Growth
            </p>
            <p className="font-sans text-sm text-silver-slate leading-relaxed max-w-xs">
              Strategic business consulting across 6 countries and 100+ firms in Textile, Horeca,
              Cosmetics, and E-commerce.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">
              Navigation
            </h3>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-silver-slate hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">
              Contact
            </h3>
            <a
              href="tel:+447585367081"
              className="font-sans text-sm text-silver-slate hover:text-white transition-colors duration-200"
            >
              +44 7585 367081
            </a>
            <address className="not-italic font-sans text-sm text-silver-slate leading-relaxed">
              Unit 6, 160 Eltham Hill<br />
              London SE9 5EA<br />
              United Kingdom
            </address>
            <Link
              href="/contact"
              className="mt-2 inline-block font-sans text-sm font-semibold text-navy bg-gold px-4 py-2 rounded-sm hover:bg-gold/90 transition-colors duration-200 w-fit"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-silver-slate/60">
            © {year} Ladzo Limited. All rights reserved. Registered in England & Wales.
          </p>
          <p className="font-sans text-xs text-silver-slate/60">
            Unit 6, 160 Eltham Hill, London SE9 5EA
          </p>
        </div>
      </div>
    </footer>
  )
}
