import Laurel from './Laurel'

const highlights = [
  {
    title: 'Outdoor entertainment',
    text: 'The pool and alfresco dining are great for summer trips.',
    icon: <path d="M4 20h16M6 20v-6h12v6M12 4v6M9 8l3-4 3 4" />,
  },
  {
    title: 'Designed for staying cool',
    text: 'Beat the heat with the A/C and ceiling fan.',
    icon: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10c-2-4 0-7 2-7s2 4-2 7zM14 12c4-2 7 0 7 2s-4 2-7-2zM12 14c2 4 0 7-2 7s-2-4 2-7zM10 12c-4 2-7 0-7-2s4-2 7 2z" />
      </>
    ),
  },
  {
    title: 'Self check-in',
    text: 'You can check in with the building staff.',
    icon: (
      <>
        <path d="M6 3h12v18H6zM6 21h12" />
        <circle cx="15" cy="12" r="0.8" />
      </>
    ),
  },
]

export default function Overview() {
  return (
    <div>
      <h2 className="subtitle">Entire serviced apartment in Candolim, India</h2>
      <p className="facts">3 guests · 1 bedroom · 1 bed · 1 bathroom</p>

      <div className="favourite">
        <div className="favourite-badge">
          <Laurel height={40} />
          <strong>
            Guest
            <br />
            favourite
          </strong>
          <Laurel height={40} flip />
        </div>
        <p className="favourite-text">
          One of the most loved homes on Airbnb, according to guests
        </p>
        <div className="favourite-stat">
          <strong>4.95</strong>
          <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
        </div>
        <div className="favourite-stat favourite-reviews">
          <strong>19</strong>
          <span>Reviews</span>
        </div>
      </div>

      <div className="host-row">
        <img className="host-avatar" src="/host.jpeg" alt="Mirashya Homes logo" />
        <div>
          <p className="host-name">Hosted by Mirashya Homes</p>
          <p className="host-sub">2 years hosting</p>
        </div>
      </div>

      <hr className="divider" />

      <ul className="highlights">
        {highlights.map(h => (
          <li key={h.title} className="highlight">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {h.icon}
            </svg>
            <div>
              <p className="highlight-title">{h.title}</p>
              <p className="highlight-text">{h.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <hr className="divider" />
    </div>
  )
}