# Portfolio — Project Instructions

## Commands

- **Dev server**: `npm run dev` (Next.js on localhost:3000)
- **Build**: `npm run build` (Next.js production build to `.next/`)
- **Lint**: `npm run lint` (ESLint with next/core-web-vitals)
- **Start**: `npm run start` (serve production build)

## Stack

- Next.js 13 (App Router) — deployed on Vercel (serverless)
- React 18 + TypeScript 4.9
- Tailwind CSS 3 (dark mode via class strategy)
- Framer Motion 11 + GSAP 3 (@gsap/react)
- PostCSS + Autoprefixer
- Impeccable (design polish skill)

## Architecture

- `app/` — Next.js App Router pages (layout.tsx, page.tsx, head.tsx)
- `components/` — React components (Navbar, HeroSection, AboutSection, ProjectsSection, Footer, SlideUp)
- `styles/` — Global CSS (Tailwind base + custom layers)
- `public/` — Static assets (images, SVGs)
- `.opencode/skills/impeccable/` — Impeccable design skill

## Design System

- **Brand color**: Teal (`teal-600` primary, `teal-400` dark mode accent)
- **Dark mode**: Class strategy via `next-themes`, `dark:bg-gray-900`
- **Typography**: System font stack, `tracking-tight` on headings
- **Spacing**: 8px baseline grid
- **Motion**: `cubic-bezier(0.16, 1, 0.3, 1)` for slide-up reveals
- **Navbar**: Glassmorphism (`backdrop-blur-md`, semi-transparent bg)

## Conventions

- Path alias: `@/*` maps to project root
- Dark mode: Tailwind `class` strategy (toggled via `next-themes`)
- Deployment: Vercel serverless (default Next.js hosting)
- ESLint: `next/core-web-vitals` preset
- All interactive elements must have `aria-label` and focus ring
- Hover states use `transition-colors duration-200` or `transition-transform`

## Notes

- No test framework configured — add Vitest or Jest when needed
- `package-lock.json` is gitignored — Vercel installs fresh via `packageManager: yarn@1.22.22`
- `@vercel/analytics` enabled in `app/layout.tsx`
