const rooms = [
  { name: 'Bedroom', bed: '1 double bed', src: '/hero-4.jpeg', alt: 'Bedroom with a double bed' },
  { name: 'Living room', bed: '1 sofa', src: '/living room 1.1.jpeg', alt: 'Living room with an orange sofa' },
]

export default function Sleep() {
  return (
    <section aria-labelledby="sleep-title">
      <h2 id="sleep-title" className="section-title">Where you'll sleep</h2>

      <div className="sleep-grid">
        {rooms.map(r => (
          <div key={r.name} className="sleep-card">
            <div className="sleep-img">
              <img src={r.src} alt={r.alt} />
            </div>
            <p className="sleep-name">{r.name}</p>
            <p className="sleep-bed">{r.bed}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />
    </section>
  )
}