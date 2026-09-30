import { useState } from 'react'

const text =
  '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴'

export default function Description() {
  const [open, setOpen] = useState(false)

  return (
    <section aria-label="About this place">
      <p className="translate-note">
        Some info has been automatically translated.{' '}
        <button type="button" className="text-link">Show original</button>
      </p>

      <p id="description-text" className={open ? 'description' : 'description clamp'}>
        {text}
      </p>

      <button
        type="button"
        className="more-btn"
        aria-expanded={open}
        aria-controls="description-text"
        onClick={() => setOpen(o => !o)}
      >
        <span>{open ? 'Show less' : 'Show more'}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 4l8 8-8 8" />
        </svg>
      </button>

      <hr className="divider" />
    </section>
  )
}