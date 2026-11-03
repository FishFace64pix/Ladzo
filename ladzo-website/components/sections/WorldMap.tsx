'use client'

import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// ISO 3166-1 numeric code for the United Kingdom
const HQ_ID = '826'
const HQ: [number, number] = [-0.1, 51.5]

// Unlabelled endpoints that illustrate global reach
const reach: [number, number][] = [
  [-74, 40.7],
  [-46.6, -23.5],
  [55.3, 25.2],
  [28, -26.2],
  [77.2, 28.6],
  [103.8, 1.35],
  [151.2, -33.9],
]

export default function WorldMapChart() {
  return (
    <div className="relative bg-navy/5 border border-navy/10 rounded-sm overflow-hidden">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 160 }}
        viewBox="0 0 800 420"
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHQ = String(geo.id) === HQ_ID
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHQ ? '#C9A84C' : '#D1CAB8'}
                  stroke="#F5F3EE"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: 'none', opacity: isHQ ? 1 : 0.45 },
                    hover: { outline: 'none', opacity: isHQ ? 1 : 0.45 },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>

        {reach.map((to) => (
          <Line
            key={to.join(',')}
            from={HQ}
            to={to}
            stroke="#C9A84C"
            strokeWidth={1}
            strokeLinecap="round"
            strokeDasharray="3 4"
            strokeOpacity={0.7}
          />
        ))}

        {reach.map((to) => (
          <Marker key={`dot-${to.join(',')}`} coordinates={to}>
            <circle r={2.5} fill="#C9A84C" opacity={0.8} />
          </Marker>
        ))}

        <Marker coordinates={HQ}>
          <circle r={12} fill="#C9A84C" opacity={0.2}>
            <animate attributeName="r" values="6;16;6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r={5} fill="#0A1628" stroke="#C9A84C" strokeWidth={1.5} />
        </Marker>
      </ComposableMap>

      <p className="font-mono text-xs uppercase tracking-widest text-silver-slate text-center py-3 border-t border-navy/10">
        UK Headquarters · Domestic &amp; International Consulting
      </p>
    </div>
  )
}
