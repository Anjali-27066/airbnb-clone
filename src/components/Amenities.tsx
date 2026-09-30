import { useState } from 'react'
import type { ReactNode } from 'react'
import AmenitiesModal from './AmenitiesModal'

type Amenity = { name: string; unavailable?: boolean; icon: ReactNode }

const amenities: Amenity[] = [
  { name: 'Kitchen', icon: <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 6 0 8v10" /> },
  { name: 'Wifi', icon: <><path d="M3 9a13 13 0 0 1 18 0M6 13a9 9 0 0 1 12 0M9 17a5 5 0 0 1 6 0" /><circle cx="12" cy="20" r="0.8" /></> },
  { name: 'Dedicated workspace', icon: <path d="M4 20V10h16v10M2 10h20M8 10V6h8v4" /> },
  { name: 'Free parking on premises', icon: <><path d="M4 16v-4l2-5h12l2 5v4zM4 16v3h3v-3M17 16v3h3v-3" /><circle cx="8" cy="13" r="0.8" /><circle cx="16" cy="13" r="0.8" /></> },
  { name: 'Pool', icon: <path d="M3 17c2 0 2-1.5 4.5-1.5S10 17 12 17s2.5-1.5 4.5-1.5S19 17 21 17M3 21c2 0 2-1.5 4.5-1.5S10 21 12 21s2.5-1.5 4.5-1.5S19 21 21 21M8 12V5a2 2 0 0 1 4 0M16 12V5a2 2 0 0 0-4 0M8 9h8" /> },
  { name: 'Hot tub', icon: <path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM8 9c-1-2 1-3 0-5M13 9c-1-2 1-3 0-5" /> },
  { name: 'Pets allowed', icon: <><circle cx="8" cy="9" r="1.5" /><circle cx="16" cy="9" r="1.5" /><circle cx="5" cy="14" r="1.5" /><circle cx="19" cy="14" r="1.5" /><path d="M12 12c3 0 5 4 4 6s-3 1-4 1-3 1-4-1 1-6 4-6z" /></> },
  { name: 'Exterior security cameras on property', icon: <><path d="M3 6h14v9H3zM17 9l4-2v8l-4-2M8 21h6M11 15v6" /></> },
  { name: 'Carbon monoxide alarm', unavailable: true, icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 16l8-8" /></> },
  { name: 'Smoke alarm', unavailable: true, icon: <><circle cx="12" cy="12" r="8" /><path d="M7 17L17 7" /></> },
]

export default function Amenities() {
  const [open, setOpen] = useState(false)

  return (
    <section aria-labelledby="amenities-title">
      <h2 id="amenities-title" className="section-title">What this place offers</h2>

      <ul className="amenity-grid">
        {amenities.map(a => (
          <li key={a.name} className={a.unavailable ? 'amenity off' : 'amenity'}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {a.icon}
            </svg>
            <span>
              {a.name}
              {a.unavailable && <span className="sr-only"> (not available)</span>}
            </span>
          </li>
        ))}
      </ul>

      <button type="button" className="outline-btn" onClick={() => setOpen(true)}>
        Show all 50 amenities
      </button>

      {open && <AmenitiesModal onClose={() => setOpen(false)} />}

      <hr className="divider" />
    </section>
  )
}