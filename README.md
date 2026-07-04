# personal-website

Personal website + blog, built with React + Vite + Tailwind CSS, guided by
[Taste-Skill](https://github.com/Leonxlnx/taste-skill) and
[Impeccable](https://github.com/pbakaus/impeccable) design systems.

## Quick Start

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Deploy to GitHub Pages

### Option 1: User/Org site (`<username>.github.io`)

1. Create a repo named `<username>.github.io` on GitHub
2. The `base` in `vite.config.js` is already set to `'/'`
3. Run:
   ```bash
   git remote add origin https://github.com/<username>/<username>.github.io.git
   npm run deploy
   ```
4. Visit `https://<username>.github.io`

### Option 2: Project site (`<username>.github.io/<repo>`)

1. Create any repo on GitHub
2. Change `base` in `vite.config.js` to `'/<repo-name>/'`
3. Run:
   ```bash
   git remote add origin https://github.com/<username>/<repo-name>.git
   npm run deploy
   ```
4. Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch
5. Visit `https://<username>.github.io/<repo-name>`

## Design Philosophy

- **Font**: Geist (no Inter — Taste-Skill rule)
- **Accent**: Emerald (no AI-purple — Lila Rule)
- **Layout**: Bento grid, asymmetric hero, varied spacing
- **Anti-patterns avoided**: three equal cards, gradient text, em dashes, glassmorphism defaults, nested cards

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | react-router-dom v7 |
| Icons | @phosphor-icons/react |
| Animation | Motion (framer-motion) |
| Deploy | gh-pages |
