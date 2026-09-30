import { useState } from 'react'

type Stay = { title: string; price: string; rating: string; src: string }

const stays: Stay[] = [
  { title: 'Beautiful Studio with a view to die for', price: '₹23,600', rating: '4.91', src: '/s1.jpeg' },
  { title: 'NAQAB - 1bhk with private pool', price: '₹42,218', rating: '4.95', src: '/s2.jpeg' },
  { title: 'Greentique Luxury Flat with plunge pool, Calangute', price: '₹44,506', rating: '4.94', src: '/s3.jpeg' },
  { title: 'The Tropical Studio | 5 mins to Beach', price: '₹22,824', rating: '4.96', src: '/s4.jpeg' },
  { title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: '₹39,942', rating: '4.95', src: '/s5.jpeg' },
  { title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool', price: '₹45,648', rating: '5.0', src: '/s6.jpeg' },
  { title: 'Luxury Apt | Private Pool | 6 Mins from Beach', price: '₹48,786', rating: '4.93', src: '/s2.jpeg' },
  { title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.', price: '₹22,824', rating: '4.92', src: '/s4.jpeg' },
]

const VISIBLE = 5
const STEP = 3
const MAX_OFFSET = stays.length - VISIBLE
const PAGE_COUNT = Math.ceil(MAX_OFFSET / STEP) + 1

export default function NearbyStays() {
  const [page, setPage] = useState(0)
  const offset = Math.min(page * STEP, MAX_OFFSET)

  return (
    <section aria-labelledby="nearby-title">
      <div className="nearby-head">
        <h2 id="nearby-title" className="section-title nearby-title">More stays nearby</h2>
        <div className="nearby-nav">
          <span className="nearby-count" aria-live="polite">{page + 1} / {PAGE_COUNT}</span>
          <button type="button" className="nearby-btn" aria-label="Previous stays" disabled={page === 0} onClick={() => setPage(p => p - 1)}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 4l-8 8 8 8" /></svg>
          </button>
          <button type="button" className="nearby-btn" aria-label="Next stays" disabled={page >= PAGE_COUNT - 1} onClick={() => setPage(p => p + 1)}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 4l8 8-8 8" /></svg>
          </button>
        </div>
      </div>

      <div className="nearby-viewport">
        <ul className="nearby-track" style={{ transform: `translateX(calc(${offset} * (-20% - 4px)))` }}>
          {stays.map((s, i) => {
            const visible = i >= offset && i < offset + VISIBLE
            return (
              <li key={s.title} className="stay" aria-hidden={!visible}>
                <a href="#stay" className="stay-link" tabIndex={visible ? 0 : -1}>
                  <div className="stay-img">
                    <img src={s.src} alt="" loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />
                  </div>
                  <p className="stay-title">{s.title}</p>
                  <p className="stay-meta">{s.price} <span className="stay-rating">★ {s.rating}</span></p>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}