import { useState } from 'react'
import type { ReactNode } from 'react'
import Laurel from './Laurel'

const bars = [
  { n: 5, pct: 96 },
  { n: 4, pct: 4 },
  { n: 3, pct: 0 },
  { n: 2, pct: 0 },
  { n: 1, pct: 0 },
]

const categories: { name: string; score: string; icon: ReactNode }[] = [
  { name: 'Cleanliness', score: '5.0', icon: <path d="M9 3h4v4l3 3v11H7V10l2-3zM13 3l3-1M15 5l3-1" /> },
  { name: 'Accuracy', score: '5.0', icon: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></> },
  { name: 'Check-in', score: '5.0', icon: <><circle cx="10" cy="9" r="5" /><path d="M13.5 12.5L21 20M17 16l2-2" /></> },
  { name: 'Communication', score: '5.0', icon: <path d="M4 5h16v11H9l-5 4z" /> },
  { name: 'Location', score: '4.8', icon: <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" /> },
  { name: 'Value', score: '4.8', icon: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.2" /></> },
]

const chips = [
  { name: 'Comfort', count: 6, img: '/comfort.jpeg' },
  { name: 'Accuracy', count: 5, img: '/accuracy.jpeg' },
  { name: 'Hot tub', count: 5, img: '/hot-tub.jpeg' },
  { name: 'Condition', count: 4, img: '/condition.jpeg' },
  { name: 'Hospitality', count: 8, img: '/hospitality.jpeg' },
  { name: 'Cleanliness', count: 4, img: '/cleanliness.jpeg' },
  { name: 'Amenities', count: 2, img: '/amenities.jpeg' },
  { name: 'Decor', count: 2, img: '/decor.jpeg' },
  { name: 'Indoor spaces', count: 2, img: '/indoor-spaces.jpeg' },
  { name: 'Location', count: 2, img: '/location.jpeg' },
]

type Review = {
  name: string
  since: string
  when: string
  text: string
  initial: string
  color: string
  more?: boolean
}

const reviews: Review[] = [
  { name: 'Amit', since: '2 months on Airbnb', when: '1 week ago', initial: 'A', color: '#b7791f', text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.' },
  { name: 'Aheesh', since: '3 years on Airbnb', when: '2 weeks ago', initial: 'A', color: '#6b46c1', img:'/rev1.jpeg', more: true, text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.' },
  { name: 'Samiksha', since: '8 months on Airbnb', when: 'May 2026', initial: 'S', color: '#c05621', img:'/rev2.jpeg', text: 'the host nitish was really great help' },
  { name: 'Vedant', since: '4 years on Airbnb', when: 'May 2026', initial: 'V', color: '#805ad5', more: true, text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.' },
  { name: 'Vaibhav S', since: '3 years on Airbnb', when: 'May 2026', initial: 'V', color: '#d53f8c', img:'/rev3.jpeg', text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too." },
  { name: 'Mohd', since: '5 years on Airbnb', when: 'May 2026', initial: 'M', color: '#2c7a7b', img:'/rev4.jpeg', text: 'Great place. Exactly as described in the listing.' },
]

function ReviewCard({ r }: { r: Review }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="rev-card">
      <div className="rev-user">
        {r.img ? (
          <img
            src={r.img}
            alt={r.name}
            className="rev-avatar"
            style={{ borderRadius: '50%', width: '40px', height: '40px', objectFit: 'cover' }}
          />
        ) : (
          <span
            className="rev-avatar"
            style={{ background: r.color + '22', color: r.color }}
            aria-hidden="true"
          >
            {r.initial}
          </span>
        )}
        <div>
          <p className="rev-name">{r.name}</p>
          <p className="rev-since">{r.since}</p>
        </div>
      </div>
      <p className="rev-meta">
        <span className="stars" aria-label="5 out of 5 stars">★★★★★</span> · {r.when}
      </p>
      <p className={r.more && !open ? 'rev-text rev-clamp' : 'rev-text'}>{r.text}</p>
      {r.more && (
        <button
          type="button"
          className="text-link rev-more"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Show less' : 'Show more'}
        </button>
      )}
    </article>
  )
}


export default function Reviews() {
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="rev-hero">
        <div className="rev-score">
          <Laurel />
          <span className="rev-big" id="reviews-title">4.95</span>
          <Laurel flip />
        </div>
        <p className="rev-fav">Guest favourite</p>
        <p className="rev-sub">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className="text-link">How reviews work</button>
      </div>

      <div className="rev-stats">
        <div className="rev-overall">
          <p className="rev-stat-name">Overall rating</p>
          {bars.map(b => (
            <div key={b.n} className="rev-bar-row">
              <span>{b.n}</span>
              <div className="rev-bar">
                <div className="rev-bar-fill" style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        {categories.map(c => (
          <div key={c.name} className="rev-cat">
            <p className="rev-stat-name">{c.name}</p>
            <p className="rev-cat-score">{c.score}</p>
            <svg
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {c.icon}
            </svg>
          </div>
        ))}
      </div>

      <div className="rev-chips" role="list" aria-label="Review topics">
        {chips.map(ch => (
          <button key={ch.name} type="button" className="rev-chip" role="listitem">
            <img
              src={ch.img}
              alt={ch.name}
              width="24"
              height="24"
              style={{ borderRadius: '4px', objectFit: 'cover' }}
            />
            <span>{ch.name}</span>
            <span className="rev-chip-count">{ch.count}</span>
          </button>
        ))}
      </div>

      <div className="rev-grid">
        {reviews.map(r => <ReviewCard key={r.name} r={r} />)}
      </div>

      <button type="button" className="outline-btn rev-all">Show all 19 reviews</button>

      <hr className="divider" />
    </section>
  )
}