export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo" aria-label="Airbnb home">
  <svg viewBox="0 0 32 32" width="30" height="30" fill="none" aria-hidden="true">
    <path
      d="M16 4 27 13.5V27a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 27V13.5L16 4Z"
      fill="currentColor"
    />
    <path
      d="M16 22c-2.8-2-4.6-3.6-4.6-5.6a2.4 2.4 0 0 1 4.6-1.1 2.4 2.4 0 0 1 4.6 1.1c0 2-1.8 3.6-4.6 5.6Z"
      fill="#fff"
    />
  </svg>
  <span>airbnb</span>
</a>

      <div className="search-pill" role="search">
        <img className="pill-icon" src="/searchbar-house.png" alt="" aria-hidden="true" />
        <button type="button" className="pill-btn">Anywhere</button>
        <span className="pill-divider" />
        <button type="button" className="pill-btn">Anytime</button>
        <span className="pill-divider" />
        <button type="button" className="pill-btn pill-muted">Add guests</button>
        <button type="button" className="pill-search" aria-label="Search">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            <circle cx="10" cy="10" r="6" />
            <path d="M15 15l6 6" />
          </svg>
        </button>
      </div>

      <div className="header-right">
        <button type="button" className="host-btn">Become a host</button>
        <button type="button" className="round-btn" aria-label="Language and region">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <path d="M3 12h18" />
          </svg>
        </button>
        <button type="button" className="round-btn" aria-label="Menu">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}