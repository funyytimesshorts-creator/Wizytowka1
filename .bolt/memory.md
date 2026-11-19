# Project memory

## Product intent & audience

- Restaurant website; the business is located near Pałac Kultury i Nauki (Palace of Culture and Science), Warsaw, Poland.
- Target audience: restaurant customers needing location/contact info; site must be production-quality and polished.

## Brand personality & voice

- User communicates in Polish; respond in Polish.
- Desired feel: beautiful, non-cookie-cutter, production-ready.

## Visual design & UX direction

- Contact section includes a clickable map area (white placeholder) that opens a map popup/overlay showing the restaurant's exact location at/near Pałac Kultury i Nauki.
- Replace static/embedded map previews with an interactive trigger that opens a map window above the page.
- Stack: Vite + React (JSX), Tailwind CSS, Lucide React icons; use `@/` path alias for imports.
- Avoid installing extra UI/icon packages.

## Decisions, constraints & rationale

- Map location target: Pałac Kultury i Nauki, Warsaw.
- Rationale: empty white area was unhelpful; making it interactive improves UX and discoverability.
- Constraint: no additional dependencies for UI themes/icons beyond provided stack.

## Open questions & assumptions

- Assumption: restaurant coordinates/address correspond to Pałac Kultury i Nauki; confirm exact address/coordinates when available.
- Open: which map provider to use for the popup (e.g., Google Maps, OpenStreetMap/Leaflet) — prefer no-extra-dependency approach if possible.
- Open: last file edit did not complete due to environment unavailability; map change still pending.