import { useState } from 'react'

const WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const DAY_MS = 24 * 60 * 60 * 1000
const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
const same = (a: Date | null, b: Date) => !!a && a.getTime() === b.getTime()

function Month({ year, month, start, end, onPick }: { year: number; month: number; start: Date | null; end: Date | null; onPick: (d: Date) => void }) {
  const first = new Date(year, month, 1)
  const total = new Date(year, month + 1, 0).getDate()
  const blanks = Array.from({ length: first.getDay() })
  const days = Array.from({ length: total }, (_, i) => new Date(year, month, i + 1))

  return (
    <div className="cal-month">
      <h3 className="cal-title">{first.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</h3>
      <div className="cal-grid">
        {WEEK.map((w, i) => <span key={i} className="cal-week" aria-hidden="true">{w}</span>)}
        {blanks.map((_, i) => <span key={`b${i}`} />)}
        {days.map(d => {
          const isStart = same(start, d)
          const isEnd = same(end, d)
          const inRange = !!start && !!end && d > start && d < end
          const cls = ['cal-day', isStart || isEnd ? 'selected' : '', inRange ? 'in-range' : ''].filter(Boolean).join(' ')
          return (
            <button
              key={d.getDate()}
              type="button"
              className={cls}
              aria-pressed={isStart || isEnd}
              aria-label={d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              onClick={() => onPick(d)}
            >
              {d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Calendar() {
  const [base, setBase] = useState({ y: 2026, m: 9 })
  const [start, setStart] = useState<Date | null>(new Date(2026, 9, 18))
  const [end, setEnd] = useState<Date | null>(new Date(2026, 9, 23))

  const next = new Date(base.y, base.m + 1, 1)
  const atFirstMonth = base.y === 2026 && base.m === 9

  const shift = (delta: number) => {
    const d = new Date(base.y, base.m + delta, 1)
    setBase({ y: d.getFullYear(), m: d.getMonth() })
  }

  const pick = (d: Date) => {
    if (!start || end) {
      setStart(d)
      setEnd(null)
    } else if (d > start) {
      setEnd(d)
    } else {
      setStart(d)
    }
  }

  const nights = start && end ? Math.round((end.getTime() - start.getTime()) / DAY_MS) : 0

  return (
    <section aria-labelledby="calendar-title">
      <h2 id="calendar-title" className="cal-heading">
        {nights > 0 ? `${nights} nights in Candolim` : 'Select check-out date'}
      </h2>
      <p className="cal-range">
        {start && end ? `${fmt(start)} - ${fmt(end)}` : 'Add your travel dates for exact pricing'}
      </p>

      <div className="cal-wrap">
        <button type="button" className="cal-nav cal-prev" aria-label="Previous month" disabled={atFirstMonth} onClick={() => shift(-1)}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 4l-8 8 8 8" /></svg>
        </button>
        <button type="button" className="cal-nav cal-next" aria-label="Next month" onClick={() => shift(1)}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 4l8 8-8 8" /></svg>
        </button>
        <div className="cal-months">
          <Month year={base.y} month={base.m} start={start} end={end} onPick={pick} />
          <Month year={next.getFullYear()} month={next.getMonth()} start={start} end={end} onPick={pick} />
        </div>
      </div>

      <div className="cal-footer">
        <span className="cal-kbd" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 15h10" /></svg>
        </span>
        <button type="button" className="text-link" onClick={() => { setStart(null); setEnd(null) }}>
          Clear dates
        </button>
      </div>

      <hr className="divider" />
    </section>
  )
}