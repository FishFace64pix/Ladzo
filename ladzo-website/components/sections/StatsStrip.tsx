import StatCard from '@/components/ui/StatCard'

const stats = [
  { value: '6', label: 'Countries' },
  { value: '100+', label: 'Firms Served' },
  { value: '4', label: 'Industries' },
]

export default function StatsStrip() {
  return (
    <section className="bg-navy border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
