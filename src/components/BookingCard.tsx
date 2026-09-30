export default function BookingCard({ onReserve }: { onReserve: () => void }) {
  return (
    <aside className="side-col">
      {/* Offer banner */}
      <div className="offer">
      <img src="/discount.svg" alt="Discount offer" />

        <div className="offer-text">
          <p>Get 10% off your next stay.</p>
          <a href="#">Terms apply</a>
        </div>
        <button type="button" className="claim-btn">Claim</button>
      </div>

      {/* Booking box */}
      <div className="booking">
        <p className="booking-price">
          <span className="price">₹28,499</span> for 5 nights
        </p>

        <div className="booking-fields">
          <div className="date-row">
            <button type="button" className="field">
              <span className="field-label">CHECK‑IN</span>
              <span className="field-value">10/18/2026</span>
            </button>
            <button type="button" className="field field-right">
              <span className="field-label">CHECKOUT</span>
              <span className="field-value">10/23/2026</span>
            </button>
          </div>

          <button type="button" className="field guests-field">
            <span>
              <span className="field-label">GUESTS</span>
              <span className="field-value">2 guests</span>
            </span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        <p className="cancel-note">
          Free cancellation before <strong>17 October</strong>
        </p>

        <button type="button" className="reserve-btn" onClick={onReserve}>Reserve</button>
        <p className="no-charge">You won’t be charged yet</p>


      </div>
        <button type="button" className="report-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z" />
            <path d="M8 8h8v8H8z" />
          </svg>
          <span>Report this listing</span>
        </button>
    </aside>
  )
}
