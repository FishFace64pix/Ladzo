'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner from '@/components/sections/CTABanner'

const timelineEntries = [
  {
    country: '🇬🇧 United Kingdom',
    description:
      'Incorporated in London. Established operational headquarters at Unit 6, 160 Eltham Hill, SE9 5EA. Built initial client roster across Textile and E-commerce sectors.',
  },
  {
    country: '🇹🇷 Turkey',
    description:
      'Launched Textile & Fashion consulting practice in Istanbul. Partnered with leading fabric manufacturers and fashion exporters to streamline European distribution.',
  },
  {
    country: '🇷🇴 Romania',
    description:
      'Entered the Romanian market with Horeca and Cosmetics consulting. Supported 15+ hospitality brands with cost management and operational frameworks.',
  },
  {
    country: '🇲🇩 Moldova',
    description:
      'Expanded into Moldova during market liberalisation. Advised e-commerce startups on cross-border logistics and EU market entry strategies.',
  },
  {
    country: '🇺🇦 Ukraine',
    description:
      'Established consulting relationships with Ukrainian Textile exporters and Horeca operators. Built supply chain resilience frameworks for volatile environments.',
  },
  {
    country: '🇷🇺 Russia',
    description:
      'Maintained consulting advisory services focused on Cosmetics regulatory compliance and E-commerce marketplace expansion for established client accounts.',
  },
]

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="100" cy="200" r="300" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
            <circle cx="1100" cy="200" r="250" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold mb-4 block">
              Our Story
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight">
              About Ladzo
              <br />
              <span className="text-gold">Limited</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-silver-slate/30 to-navy/30 border-2 border-gold rounded-sm overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-navy/40 border-2 border-gold flex items-center justify-center">
                    <span className="font-playfair text-3xl font-bold text-gold">LL</span>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-silver-slate">
                    Ladzo Limited
                  </span>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold opacity-60" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold opacity-60" />
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <SectionHeader eyebrow="Our Foundation" heading="Built on Global Expertise" />
              <div className="font-sans text-base text-silver-slate leading-relaxed flex flex-col gap-4">
                <p>
                  Ladzo Limited was founded with a singular purpose: to give businesses across
                  emerging and established markets access to the strategic insight that drives
                  sustainable, international growth. Registered in the United Kingdom and operating
                  across six countries, we combine London-calibre consulting with genuine on-the-ground
                  presence.
                </p>
                <p>
                  Our journey began in the United Kingdom before expanding across Turkey, Romania,
                  Moldova, Ukraine, and Russia — regions where opportunity and complexity exist in equal
                  measure. Across these markets, we have partnered with over 100 firms spanning Textile
                  & Fashion, Horeca, Cosmetics, and E-commerce.
                </p>
                <p>
                  What sets us apart is not just our network, but our philosophy: every engagement is
                  built on data-driven analysis, honest strategic counsel, and a deep respect for the
                  cultural nuances that determine success across borders.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { value: '6+', label: 'Years Active' },
                  { value: '100+', label: 'Firms Served' },
                  { value: '6', label: 'Countries' },
                  { value: '4', label: 'Industries' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-navy/10 p-4 rounded-sm">
                    <p className="font-playfair text-3xl font-bold text-gold">{stat.value}</p>
                    <p className="font-mono text-xs uppercase tracking-widest text-silver-slate mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 border-t border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeader eyebrow="Our Purpose" heading="Vision & Mission" centered />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                label: 'Vision',
                icon: '◈',
                text: 'To bridge the gap between local potential and global markets — enabling businesses in every region we serve to compete and thrive on an international stage.',
              },
              {
                label: 'Mission',
                icon: '◇',
                text: 'Providing data-driven insights and strategic leadership for sustainable growth — through honest counsel, cultural intelligence, and a relentless focus on measurable outcomes.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-off-white border border-navy/10 rounded-sm p-8 border-l-4 border-l-gold"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold text-xl">{item.icon}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">
                    {item.label}
                  </span>
                </div>
                <p className="font-playfair text-xl text-navy leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Timeline */}
      <section className="bg-off-white py-20 border-t border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Our Expansion"
              heading="A Timeline of Global Growth"
              subtext="How Ladzo Limited built its presence across Europe, one country at a time."
            />
          </div>
          <div className="overflow-x-auto scrollbar-hide pb-6">
            <div className="flex gap-6 min-w-max">
              {timelineEntries.map((entry, i) => (
                <motion.div
                  key={entry.country}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="w-72 flex-shrink-0 bg-white border border-navy/10 rounded-sm p-6 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold rounded-t-sm opacity-60" />
                  <h3 className="font-playfair text-lg font-bold text-navy mb-3">
                    {entry.country}
                  </h3>
                  <p className="font-sans text-sm text-silver-slate leading-relaxed">
                    {entry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
