import { useDialog } from '../hooks/useDialog'
import { rooms } from '../data/rooms'
import { useRef, useState } from 'react'

type Props = { onClose: () => void; onOpenPhoto: (index: number) => void }

export default function PhotoTour({ onClose, onOpenPhoto }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [saved, setSaved] = useState(false)
  useDialog(ref, onClose)

  const goTo = (id: string) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document
      .getElementById(`room-${id}`)
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div
      ref={ref}
      className="tour"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-title"
      tabIndex={-1}
    >
      {/* Top bar */}
      <div className="pt-bar">
        <button type="button" className="tour-back" aria-label="Close photo tour" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 4l-8 8 8 8" />
          </svg>
        </button>

        <h2 id="tour-title" className="pt-heading">Photo tour</h2>

        <div className="pt-bar-actions">
          <button type="button" className="pt-icon-btn" aria-label="Share">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="M7 8l5-5 5 5" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
            </svg>
          </button>

          <button
            type="button"
            className="pt-icon-btn"
            aria-label={saved ? 'Remove from saved' : 'Save'}
            aria-pressed={saved}
            onClick={() => setSaved(s => !s)}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill={saved ? '#ff385c' : 'none'}
              stroke={saved ? '#ff385c' : 'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="pt-body">
        {/* ✅ Thumbnail navigation */}
        <nav className="pt-thumbs" aria-label="Rooms">
          {rooms.map(r => (
            <button key={r.id} type="button" className="pt-thumb" onClick={() => goTo(r.id)}>
              <span className="pt-thumb-img">
                <img src={r.photos[0]} alt={`${r.name} thumbnail`} loading="lazy" />
              </span>
              <span className="pt-thumb-label">{r.name}</span>
            </button>
          ))}
        </nav>

        {/* ✅ Full room sections */}
        {(() => {
          let counter = 0
          return rooms.map(r => {
            const startIndex = counter
            counter += r.photos.length
            return (
              <section key={r.id} id={`room-${r.id}`} className="pt-room" aria-labelledby={`room-title-${r.id}`}>
                <div>
                  <h3 id={`room-title-${r.id}`} className="pt-room-title">{r.name}</h3>
                  {r.amenities.length > 0 && (
                    <p className="pt-room-amenities">{r.amenities.join(' · ')}</p>
                  )}
                </div>

                <div className={`pt-photos ${getLayout(r)}`}>
                  {r.photos.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      className="pt-photo-btn"
                      aria-label={`Open ${r.name} photo ${i + 1}`}
                      onClick={() => onOpenPhoto(startIndex + i)}
                    >
                      <img src={src} alt={`${r.name}, photo ${i + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </section>
            )
          })
        })()}
      </div>
    </div>
  )
}

function getLayout(r: { id: string; photos: string[] }) {
  // Map room ids to the CSS layout classes defined in index.css
  switch (r.id) {
    case 'living-room-1':
      return 'pt-layout-hero-two'
    case 'living-room-2':
      return 'pt-layout-alternating'
    case 'full-kitchen':
      return 'pt-layout-split'
    case 'full-bathroom':
      return 'pt-layout-stack'
    case 'gym':
      return 'pt-layout-gym'
    case 'exterior':
      return 'pt-layout-alternating'
    case 'pool':
      return 'pt-layout-hero-two'
    case 'bedroom':
      return 'pt-layout-alternating'
    case 'additional':
      return 'pt-layout-alternating'
    default:
      // Fallback: simple grid with one column per photo count up to 3
      return r.photos.length === 1 ? 'pt-layout-stack' : r.photos.length === 2 ? 'pt-layout-split' : 'pt-layout-masonry'
  }
}
