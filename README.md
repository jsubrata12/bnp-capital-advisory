# BNP Capital Advisory

Corporate website for **BNP Capital Advisory** (PT Brata Nusa Pratama) — a Jakarta-based
proprietary investment and project origination firm, established 1999.

Built with React 19 + Vite. No CSS framework and no runtime animation libraries: the
design system is hand-written in a single stylesheet, and all motion is CSS transitions
driven by IntersectionObserver.

## Getting started

Vite 7 requires Node >= 20.19.

```sh
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Structure

```
index.html
src/
  App.jsx              section order / composition
  data/content.js       all site copy, in one place
  components/           one component per section, plus Nav, Rail, Reveal, Contours
  hooks/                useInView, useScrollSpy
  styles/index.css      the entire design system
docs/                   source narrative the copy is derived from
```

Editing copy means editing `src/data/content.js` — the components render from it, so no
prose is hard-coded in JSX.

## Notes

- The brand name is "BNP Capital Advisory"; the registered legal entity is
  "PT Brata Nusa Pratama" and must remain so in the Capital & Regulatory Statement.
- Contact domain and email in `src/data/content.js` are placeholders pending confirmation.
- Everything degrades gracefully under `prefers-reduced-motion: reduce`.
