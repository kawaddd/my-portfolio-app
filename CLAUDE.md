# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — always run before deploying
npm run lint     # ESLint check
```

No test framework is installed. Verify changes visually via `npm run dev`.

## Architecture

### Stack
- **Next.js 16 App Router** — single route (`app/page.tsx`), static generation
- **Tailwind CSS v4** — CSS-first config via `@theme {}` in `app/globals.css` (no `tailwind.config.js`)
- **Framer Motion** — scroll/blur reveal animations
- **TypeScript strict mode** — path alias `@/*` maps to project root

### Key Principle: Data ↔ UI separation
All user-facing content lives in `src/data/`. UI components never hardcode content.

```
src/data/
  profile.ts      # Name, bio, stats, contact email, values, strengths
  skills.ts       # SkillCategory[] with level (0-100), note, cert badges
  projects.ts     # Project[] with image, url, duration fields
  experience.ts   # ExperienceItem[] timeline entries
```

### Page composition (`app/page.tsx`)
Sections render in this order:
`Hero → About → Skills → Works → InlineCta → Process → Experience → Vision → Contact`

### Section components (`src/components/sections/`)
Each section is a self-contained `"use client"` component that imports its own data slice. Sections use `id="..."` anchors for smooth-scroll navigation.

### Animation system (`src/lib/motion.ts`)
Reusable Framer Motion `Variants`. Use `staggerContainer` as parent + child variant (e.g. `revealUp`, `scaleIn`) on children. Blur-based reveals use `filter: "blur(10px)" → "blur(0px)"` with expo easing `[0.19, 1.0, 0.22, 1.0]`.

### Design tokens (`app/globals.css`)
Dark-only site. Base background `#07080F`, surface `#0d0f1a`. Accent colors: indigo `#818CF8`, emerald `#34D399`. Decorative glow divs use `pointer-events-none aria-hidden` and must use `w-[min(Npx,95vw)]` to prevent mobile overflow.

### Responsive pattern
Mobile-first. All padding/sizing uses `p-4 sm:p-6 md:p-8` progression. Never use bare fixed pixel widths on decorative elements — always `min(Npx, Xvw)`.

### Works section specifics
`projects.ts` fields:
- `image?: string` — path under `/public/works/` (e.g. `"/works/foo.png"`)
- `url?: string` — public link shown as button in modal
- `duration?: string` — shown as ⏱ badge top-right of card (e.g. `"10時間程度"`)
- `featured: true` renders as large FeaturedCard; `false` as SmallCard

Cert skills (`id: "cert"` category) omit `level` — rendered as badge grid, not progress bars.

## Coding Rules
- Do not rewrite files unrelated to the task
- All new content (text, data) goes in `src/data/`, not in components
- Shell commands: use Unix syntax (bash), not PowerShell
