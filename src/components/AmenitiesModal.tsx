import { useRef } from 'react'
import { useDialog } from '../hooks/useDialog'

type Item = { name: string; off?: boolean }
type Group = { title: string; items: (string | Item)[] }

const off = (name: string): Item => ({ name, off: true })

const groups: Group[] = [
  { title: 'Bathroom', items: ['Hairdryer', 'Cleaning products', 'Shampoo', 'Hot water', 'Shower gel'] },
  { title: 'Bedroom and laundry', items: ['Washing machine', 'Hangers', 'Bed linen', 'Room-darkening blinds', 'Iron', 'Clothes storage', 'Cot'] },
  { title: 'Entertainment', items: ['TV'] },
  { title: 'Family', items: ['Cot'] },
  { title: 'Heating and cooling', items: ['Air conditioning', 'Ceiling fan'] },
  { title: 'Home safety', items: ['Exterior security cameras on property', off('Carbon monoxide alarm'), off('Smoke alarm')] },
  { title: 'Internet and office', items: ['Wifi', 'Dedicated workspace'] },
  { title: 'Kitchen and dining', items: ['Kitchen', 'Fridge', 'Freezer', 'Microwave', 'Cooking basics', 'Crockery and cutlery', 'Kettle', 'Coffee', 'Wine glasses', 'Toaster', 'Blender', 'Cooker'] },
  { title: 'Location features', items: ['Private entrance'] },
  { title: 'Outdoor', items: ['Patio or balcony', 'Outdoor dining area'] },
  { title: 'Parking and facilities', items: ['Free parking on premises', 'Pool', 'Hot tub', 'Gym'] },
  { title: 'Services', items: ['Pets allowed', 'Cleaning available during stay', 'Long-term stays allowed', 'Self check-in'] },
]

type Props = { onClose: () => void }

export default function AmenitiesModal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useDialog(ref, onClose)

  return (
    <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div ref={ref} className="modal" role="dialog" aria-modal="true" aria-labelledby="amenities-modal-title" tabIndex={-1}>
        <div className="modal-bar">
          <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <h2 id="amenities-modal-title" className="modal-title">What this place offers</h2>

          {groups.map(g => (
            <section key={g.title} className="amenity-group">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item, i) => {
                  const it = typeof item === 'string' ? { name: item } : item
                  return (
                    <li key={it.name + i} className={it.off ? 'off' : undefined}>
                      <span>{it.name}</span>
                      {it.off && <span className="sr-only"> (not available)</span>}
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}