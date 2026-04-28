# Jeevan Seva — Marketing Website

Official marketing / landing-page site for the **Jeevan Seva** health companion app. It introduces the app, walks through features and benefits, and drives downloads on the App Store and Google Play.

Built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # produce production bundle in dist/
npm run preview  # preview the production build
npm run lint     # run eslint
```

The dev server runs on [http://localhost:5173](http://localhost:5173) by default.

## Project structure

```
src/
  App.tsx                  # assembles all sections
  main.tsx                 # React entry point
  index.css                # Tailwind v4 entry + theme tokens
  components/
    Nav.tsx                # sticky responsive navigation
    Hero.tsx               # headline, CTAs, phone mockup
    ProblemSolution.tsx    # problem/solution narrative
    Features.tsx           # 9 core features grid
    Benefits.tsx           # “why Jeevan Seva” benefits
    HowItWorks.tsx         # 3-step onboarding story
    Testimonials.tsx       # social proof
    About.tsx              # mission + stats
    CTA.tsx                # closing download call-to-action
    Footer.tsx             # footer + social links
    PhoneMockup.tsx        # illustrative app mockup
    StoreButtons.tsx       # App Store / Google Play buttons
    Logo.tsx               # inline SVG logo
  data/
    features.tsx           # feature copy + icons
```

## Design system

- **Colors** — brand blue (`--color-brand-*`) and mint green (`--color-mint-*`) defined as CSS custom properties in `src/index.css`, consumed via Tailwind utilities (e.g. `bg-brand-600`, `text-mint-700`).
- **Typography** — Inter, loaded from Google Fonts in `index.html`.
- **Responsiveness** — layouts use Tailwind breakpoints (`sm`, `md`, `lg`); fully responsive on mobile, tablet, and desktop.

## Editing content

Most copy lives directly in the section components under `src/components/`. Feature cards are data-driven via `src/data/features.tsx` — edit the exported `features` array to add, remove, or reorder cards.

## Deployment

Any static host works — run `npm run build` and deploy the `dist/` folder. The site is fully static and zero-backend.
