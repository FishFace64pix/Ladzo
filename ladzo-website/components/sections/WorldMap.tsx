'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// ISO 3166-1 numeric codes
const HIGHLIGHTED = new Set(['826', '792', '643', '642', '498', '804'])

const markers: { name: string; note: string; coordinates: [number, number] }[] = [
  { name: 'United Kingdom', note: 'Headquarters', coordinates: [-2, 54] },
  { name: 'Turkey', note: 'Active Market', coordinates: [35, 39] },
  { name: 'Russia', note: 'Active Market', coordinates: [55, 57] },
  { name: 'Romania', note: 'Active Market', coordinates: [25, 46] },
  { name: 'Moldova', note: 'Active Market', coordinates: [28.5, 47.5] },
  { name: 'Ukraine', note: 'Active Market', coordinates: [32, 49.5] },
]

export default function WorldMapChart() {
  const [hovered, setHovered] = useState<string | null>(null)
  const active = markers.find((m) => m.name === hovered)

  return (
    <div className="relative bg-navy/5 border border-navy/10 rounded-sm overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [22, 54], scale: 560 }}
        viewBox="0 0 800 500"
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = HIGHLIGHTED.has(String(geo.id))
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? '#C9A84C' : '#D1CAB8'}
                  stroke="#F5F3EE"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none', opacity: isHighlighted ? 1 : 0.45 },
                    hover: { outline: 'none', opacity: isHighlighted ? 0.8 : 0.5 },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>

        {markers.map((m) => (
          <Marker
            key={m.name}
            coordinates={m.coordinates}
            onMouseEnter={() => setHovered(m.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <circle
              r={hovered === m.name ? 7 : 5}
              fill="#0A1628"
              stroke="#C9A84C"
              strokeWidth={1.5}
              style={{ cursor: 'pointer', transition: 'r 0.15s ease' }}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip */}
      {active && (
        <div className="absolute bottom-4 left-4 bg-navy text-white px-4 py-2.5 rounded-sm shadow-xl border border-gold/30 pointer-events-none">
          <p className="font-playfair font-bold text-sm text-white">{active.name}</p>
          <p className="font-mono text-xs text-gold uppercase tracking-widest mt-0.5">{active.note}</p>
        </div>
      )}

      <p className="font-mono text-xs uppercase tracking-widest text-silver-slate text-center py-3 border-t border-navy/10">
        Hover country pins for details · Gold = Active Markets
      </p>
    </div>
  )
}
