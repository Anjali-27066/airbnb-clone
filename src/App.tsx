import { useEffect, useState } from 'react'
import Header from './components/Header'
import BookingCard from './components/BookingCard'
import Overview from './components/Overview'
import Description from './components/Description'
import Sleep from './components/Sleep'
import Amenities from './components/Amenities'
import Calendar from './components/Calendar'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Host from './components/Host'
import ThingsToKnow from './components/ThingsToKnow'
import NearbyStays from './components/NearbyStays'
import PhotoTour from './components/PhotoTour'
import Lightbox from './components/Lightbox'

export default function App() {
  const [tourOpen, setTourOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null)

  function showToast(message: string) {
    setToast(current => ({ message, id: (current?.id ?? 0) + 1 }))
  }

  useEffect(() => {
    if (!toast) return
    const timeout = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(timeout)
  }, [toast])

  return (
    <>
      <Header />

      <main className="page">
        <div className="title-row">
          <h1 className="title">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>

          <div className="title-actions">
            <button type="button" className="link-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="M7 8l5-5 5 5" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
              </svg>
              <span>Share</span>
            </button>
            <button
              type="button"
              className={`link-btn${isSaved ? ' is-saved' : ''}`}
              aria-pressed={isSaved}
              onClick={() => {
                const nextSaved = !isSaved
                setIsSaved(nextSaved)
                showToast(nextSaved ? 'Saved to wishlist' : 'Removed from wishlist')
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z" fill={isSaved ? 'currentColor' : 'none'} />
              </svg>
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        <section className="hero">
          <div className="cell cell-0"><img src="/hero-1.jpeg" alt="Living room" /></div>
          <div className="cell"><img src="/hero-2.jpeg" alt="Living room seating area" /></div>
          <div className="cell"><img src="/hero-3.jpeg" alt="Jacuzzi" /></div>
          <div className="cell"><img src="/hero-4.jpeg" alt="Bedroom" /></div>
          <div className="cell"><img src="/exterior 3.jpeg" alt="Building exterior" /></div>

          <button type="button" className="show-all" onClick={() => setTourOpen(true)}>
            Show all photos
          </button>
        </section>

        <div className="layout">
          <div className="main-col">
            <Overview />
            <Description />
            <Sleep />
            <Amenities />
            <Calendar />
          </div>
          <BookingCard onReserve={() => showToast('You won’t be charged yet')} />
        </div>

        <Reviews />
        <Location />
        <Host />
        <ThingsToKnow />
        <NearbyStays />
      </main>

      {tourOpen && (
        <PhotoTour
          onClose={() => setTourOpen(false)}
          onOpenPhoto={i => setLightboxIndex(i)}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {toast && <div className="toast" role="status" aria-live="polite" key={toast.id}>{toast.message}</div>}
    </>
  )
}
