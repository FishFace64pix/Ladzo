import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
  {
    icon: '🧵',
    title: 'Textile & Fashion',
    description:
      'Global supply chain optimisation, production consulting, and sourcing strategies that reduce cost while maintaining quality standards across international markets.',
  },
  {
    icon: '🍽️',
    title: 'Horeca',
    description:
      'Hotel and restaurant operations consulting, cost management frameworks, and staff training programmes designed for sustainable profitability in competitive markets.',
  },
  {
    icon: '🌿',
    title: 'Cosmetics',
    description:
      'Market entry strategy, EU and UK regulatory compliance guidance, and distributor network development for cosmetics brands entering new territories.',
  },
  {
    icon: '🌐',
    title: 'E-commerce',
    description:
      'Digital transformation, marketplace expansion across Amazon, eBay and local platforms, plus logistics optimisation for cross-border e-commerce growth.',
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Our Expertise"
            heading="Industries We Transform"
            subtext="From supply chains to digital storefronts, we bring deep sector knowledge and global networks to every engagement."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
