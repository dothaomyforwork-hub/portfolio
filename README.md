# Portfolio Astrid

This is a static portfolio built with HTML, CSS, JavaScript and Tailwind CDN. The current design targets a modern luxury dark-mode portfolio with a black background, high-contrast white typography, a subtle orange accent `#F8752D`, oversized typography and an editorial grid composition. The layout draws from minimalist and premium agency aesthetics with cinematic lighting.

## Project structure

- `index.html` — main landing page
- `pages/` — `about.html`, `projects.html`, `contact.html`, `resume.html`, `playground.html`
- `css/styles.css` — imports the design system and global styles
- `css/design-system.css` — design tokens and shared component styles
- `components/header.html` — shared header component
- `components/footer.html` — shared footer component
- `js/components.js` — loader for header/footer and mobile nav logic
- `js/main.js` — contact form handling and small page interactions
- `assets/reference/` — sample images and visual assets
- `.github/workflows/gh-pages.yml` — GitHub Pages deployment workflow

## Run locally

1. Open the `d:\Thaomee` folder in VS Code.
2. Open `index.html` directly in the browser or run a local server.

### Using Live Server

```bash
npm install
npm start
```

Or with Python:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` and navigate to `index.html`.

## Deploy to GitHub Pages

1. Initialize a repo if needed:

```bash
git init
git add .
git commit -m "Init portfolio"
```

2. Push to GitHub on the `main` branch.
3. The workflow `.github/workflows/gh-pages.yml` will deploy to the `gh-pages` branch when pushing to `main`.
4. In the GitHub repository settings, enable GitHub Pages and select the `gh-pages` branch.

## Notes

- `new-style/` contains design images you may want to apply.
- `framer-export/` is for reference only.
- `components/header.html` and `components/footer.html` contain shared layout to avoid duplication.
- `js/components.js` injects the shared header/footer into each page.
- `css/design-system.css` is the source of truth for colors, spacing and buttons — edit tokens there.
