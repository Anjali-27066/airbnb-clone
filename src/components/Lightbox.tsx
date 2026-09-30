import { useEffect } from 'react'
import { rooms } from '../data/rooms'

type Props = {
  index: number
  onChange: (i: number) => void
  onClose: () => void
}

export default function Lightbox({ index, onChange, onClose }: Props) {
  // Flatten all photos from all rooms
  const allPhotos = rooms.flatMap(r => r.photos)

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % allPhotos.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + allPhotos.length) % allPhotos.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, onChange, onClose, allPhotos.length])

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        className="lightbox-prev"
        onClick={() => onChange((index - 1 + allPhotos.length) % allPhotos.length)}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <img
        src={allPhotos[index]}
        alt={`Photo ${index + 1}`}
        className="lightbox-img"
      />

      <button
        className="lightbox-next"
        onClick={() => onChange((index + 1) % allPhotos.length)}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  )
}
