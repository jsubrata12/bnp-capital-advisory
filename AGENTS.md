# BNP Capital Advisory — website

React + Vite single-page site built from `docs/Brata Capital Website Narrative.md`.
Brand name is "BNP Capital Advisory"; the registered legal entity remains
"PT Brata Nusa Pratama" (BNP) and must stay that way in the regulatory statement.
All copy lives in `src/data/content.js`; components render it. Styling is one
hand-written design system at `src/styles/index.css` (no CSS framework, no runtime
animation libraries).

## Commands

Vite 7 requires Node >= 20.19. If the shell default is older (this machine ships 20.14),
switch first — e.g. `nvm use 22` or
`export PATH="$HOME/.nvm/versions/node/v22.22.3/bin:$PATH"`.

```sh
npm run dev      # dev server on :5173
npm run build    # production build to dist/
npm run preview  # serve dist/
npm run lint     # oxlint
```

## Conventions

- Section order, numbering and nav membership are declared in `sections` in `src/data/content.js`.
  Adding a section = add an entry there, a component, and mount it in `App.jsx`.
- Motion is done with `components/Reveal.jsx` (`<Reveal>` / `<RevealWords>`) driven by
  IntersectionObserver, plus CSS transitions keyed off `--reveal-delay`.
- Everything degrades under `prefers-reduced-motion: reduce` (see end of `index.css`).
