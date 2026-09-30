const cols = [
  {
    title: 'Cancellation policy',
    icon: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M9.5 13.5l5 5M14.5 13.5l-5 5" /></>,
    lines: ['Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.', 'Review this host’s full policy for details.'],
  },
  {
    title: 'House rules',
    icon: <><circle cx="10" cy="9" r="5" /><path d="M13.5 12.5L21 20M17 16l2-2" /></>,
    lines: ['Check-in after 2:00 pm', 'Checkout before 11:00 am', '3 guests maximum'],
  },
  {
    title: 'Safety & property',
    icon: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM12 3v18" />,
    lines: ['Carbon monoxide alarm not reported', 'Smoke alarm not reported', 'Exterior security cameras on property'],
  },
]

export default function ThingsToKnow() {
  return (
    <section aria-labelledby="ttk-title">
      <h2 id="ttk-title" className="section-title">Things to know</h2>
      <div className="ttk-grid">
        {cols.map(c => (
          <div key={c.title}>
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c.icon}</svg>
            <h3 className="ttk-title">{c.title}</h3>
            {c.lines.map(l => <p key={l} className="ttk-line">{l}</p>)}
            <button type="button" className="text-link ttk-link">Learn more</button>
          </div>
        ))}
      </div>
      <hr className="divider" />
    </section>
  )
}