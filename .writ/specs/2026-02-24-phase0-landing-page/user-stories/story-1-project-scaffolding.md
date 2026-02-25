# Story 1: Project Scaffolding & Design System

> **Status:** Complete
> **Priority:** High
> **Dependencies:** None

## User Story

**As a** developer
**I want to** have a fully configured Next.js 15 project with Tailwind, shadcn/ui, fonts, and project structure
**So that** all subsequent stories can build on a solid, consistent foundation

## Acceptance Criteria

- [x] Given a fresh clone, when I run `bun install && bun dev`, then the dev server starts without errors
- [x] Given the project, when I inspect the Tailwind config, then the blue color palette (primary: ocean blue) is configured
- [x] Given the project, when I view the app in a browser, then Geist font loads correctly
- [x] Given the project, when I look at the file structure, then it follows the Next.js App Router conventions with src/app, src/components, src/lib
- [x] Given shadcn/ui, when I use a component (e.g. Button), then it renders with the custom ClawCove theme

## Implementation Tasks

- [x] 1.1 Install core dependencies: Tailwind CSS v4, shadcn/ui, Geist font, Framer Motion, class-variance-authority, clsx, tailwind-merge
- [x] 1.2 Configure Tailwind with ClawCove color palette (primary blue #2563eb, backgrounds white/#f8fafc, text #0f172a/#64748b, accent blue/teal for CTAs)
- [x] 1.3 Set up project directory structure: src/app (routes), src/components (ui/, sections/, layout/), src/lib (utils, db, email, analytics)
- [x] 1.4 Configure Geist font via next/font and set as default in root layout
- [x] 1.5 Create root layout with HTML lang, meta viewport, base styles, font application
- [x] 1.6 Initialize shadcn/ui with custom theme matching ClawCove design tokens
- [x] 1.7 Verify: dev server runs, font loads, Tailwind classes apply, shadcn Button renders correctly

## Notes

- Tailwind v4 uses CSS-first configuration (no tailwind.config.js) — design tokens go in the CSS file
- shadcn/ui components should be installed into src/components/ui/
- Geist is Vercel's open-source font, available via `geist` npm package or next/font
- Keep the root layout minimal — nav and footer are part of later stories

## Definition of Done

- [x] All tasks completed
- [x] All acceptance criteria met
- [x] `bun dev` runs without errors
- [x] Clean, consistent project structure established
