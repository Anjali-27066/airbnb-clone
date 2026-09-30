# Airbnb listing clone

Stack: Vite + React + TypeScript, plain CSS (design tokens as CSS variables
in `src/index.css`). No backend; all listing/photo data lives in
`src/data/rooms.ts`.

Views (per the assignment brief):
1. Listing page — the full property page
2. Photo tour — full-screen gallery, opened from "Show all photos"
3. Lightbox — single-photo viewer with prev/next and ←/→ keyboard nav

## Rules for any agent or contributor working on this repo
- The reference site is the single source of truth for visuals and
  behavior. Measure it (DevTools computed styles, screenshots at multiple
  widths). Never copy its source code, CSS, or asset URLs directly.
- All colors, spacing, and font sizes go through CSS variables — no magic
  values scattered through component files.
- Every overlay (Photo tour, Lightbox, Amenities modal) must use the shared
  `useDialog` hook: it traps focus, closes on Esc, and returns focus to
  whatever triggered it.
- Respect `prefers-reduced-motion` — no forced animation for users who've
  asked for less motion.
- Buttons for actions, anchors for navigation — don't mix the two.
- Run `npm run build` before considering any task finished.