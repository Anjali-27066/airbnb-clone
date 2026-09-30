const coHosts = [
  { name: 'Sharath', img: '/co1.jpeg' },
  { name: 'Aman Dev Pahwa', img: '/co2.jpeg' },
  { name: 'Maria Karen Priyanka', img: '/co3.jpeg' },
  { name: 'Simran', img: '/rev5.jpeg' },
  { name: 'Pallavi', img: '/rev1.jpeg' },
  { name: 'Sanyukta', img: '/rev2.jpeg' },
  { name: 'Shruti', color: '#d53f8c', initial: 'S', light: true },
  { name: 'Amisha', color: '#3182ce', initial: 'A', light: true },
]

const stats = [
  { value: '1,463', label: 'Reviews' },
  { value: '4.68★', label: 'Rating' },
  { value: '2', label: 'Years hosting' },
]

export default function Host() {
  return (
    <section aria-labelledby="host-title">
      <h2 id="host-title" className="section-title host-title">Meet your host</h2>

      <div className="host-layout">
        <div>
          <div className="host-card">
            <div className="host-card-main">
              <div className="host-logo" aria-hidden="true">
                <img src="/host.jpeg" alt="" />
                <span className="host-verified">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                </span>
              </div>
              <p className="host-card-name">Mirashya Homes</p>
              <p className="host-card-role">Host</p>
            </div>

            <dl className="host-stats">
              {stats.map(s => (
                <div key={s.label} className="host-stat">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="host-stat-value">{s.value}</dd>
                  <dd className="host-stat-label" aria-hidden="true">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="host-facts">
            <li>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a6 6 0 0 0-4 10.5L12 17l4-4.5A6 6 0 0 0 12 2zM12 17v5" />
              </svg>
              <span>Born in the 80s</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
              </svg>
              <span>Where I went to school: NICMAR GOA</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="host-sub">Co-Hosts</h3>
          <ul className="cohost-grid">
            {coHosts.map(c => (
              <li key={c.name} className="cohost">
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.name}
                    className="cohost-avatar"
                    style={{
                      borderRadius: '50%',
                      width: '42px',
                      height: '42px',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <span
                    className="cohost-avatar"
                    style={{
                      background: c.light ? c.color + '22' : c.color,
                      color: c.light ? c.color : '#ffffff'
                    }}
                    aria-hidden="true"
                  >
                    {c.initial ?? c.name[0]}
                  </span>
                )}
                <span>{c.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="host-sub host-details-title">Host details</h3>
          <p className="host-detail">Response rate: 100%</p>
          <p className="host-detail">Responds within an hour</p>

          <button type="button" className="message-btn">Message host</button>

          <p className="host-safe">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM12 3v18" />
            </svg>
            <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
          </p>
        </div>
      </div>

      <hr className="divider" />
    </section>
  )
}
