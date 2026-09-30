import { useState } from 'react'

const MIN_ZOOM = 1
const MAX_ZOOM = 1.6
const STEP = 0.2

export default function Location() {
  const [zoom, setZoom] = useState(1)

  return (
    <section aria-labelledby="location-title">
      <h2 id="location-title" className="section-title loc-title">Where you’ll be</h2>
      <p className="loc-place">Candolim, Goa, India</p>

      <div className="map" role="img" aria-label="Map showing the approximate area of the listing">
        <div className="map-layer" style={{ transform: `scale(${zoom})` }}>
          <div className="map-water" />
          <span className="map-blob map-blob-a" />
          <span className="map-blob map-blob-b" />
        </div>

        <div className="map-pin" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-5h4v5" />
          </svg>
        </div>

        <button type="button" className="map-btn map-search" aria-label="Search this area">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></svg>
        </button>

        <div className="map-zoom">
          <button type="button" className="map-btn" aria-label="Zoom in" disabled={zoom >= MAX_ZOOM} onClick={() => setZoom(z => Math.min(MAX_ZOOM, +(z + STEP).toFixed(1)))}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          </button>
          <button type="button" className="map-btn" aria-label="Zoom out" disabled={zoom <= MIN_ZOOM} onClick={() => setZoom(z => Math.max(MIN_ZOOM, +(z - STEP).toFixed(1)))}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14" /></svg>
          </button>
        </div>
      </div>

      <p className="loc-note">Exact location will be provided after booking.</p>

      <h3 className="loc-sub">Neighbourhood highlights</h3>
      <p className="loc-text">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
      </p>

      <button type="button" className="more-btn">
        <span>Show more</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 4l8 8-8 8" /></svg>
      </button>

      <hr className="divider" />
    </section>
  )
}