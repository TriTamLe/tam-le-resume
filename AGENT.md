# AGENT.md

## 1) Project Goal
- This is Tam Lê's personal CV/portfolio landing page, built with Vue 3 + TypeScript + Vite.
- Priorities: clean and readable UI, multilingual support (`vi`/`en`), and stable theme switching (`light`/`dark`).

## 2) Stack and Core Structure
- Framework: Vue 3 (`<script setup lang="ts">`)
- Build tool: Vite
- Styling: Tailwind v4 + CSS variables in `src/style.css`
- i18n: `vue-i18n`, configured in `src/i18n.ts`

Important directories/files:
- `src/App.vue`: main layout and theme/language/avatar toggle logic
- `src/i18n.ts`: bilingual content
- `src/components/ui/*`: UI primitives (`Button`, `Badge`, `Card`)
- `src/style.css`: design tokens (palette, border, radius, typography)
- `src/assets/*`: fonts and images

## 3) Development Commands
- Install dependencies: `yarn install`
- Run locally: `yarn dev` (port `3000`)
- Build for production: `yarn build`
- Preview production build: `yarn preview`

## 4) Editing Conventions
- Do not add new libraries unless clearly necessary.
- Preserve the existing visual language (colors, borders, corner radius, `BeVietnamPro` font).
- When adding/updating visible text:
  - Update both `vi` and `en` in `src/i18n.ts`.
  - Avoid hard-coded text in templates unless it is a proper noun that should not be translated.
- When adding UI state in `App.vue`:
  - Use explicit TypeScript types.
  - Keep reactive logic simple and avoid hard-to-track side effects.
- Keep UI components reusable; if styling is repeated often, extract it into a shared component or utility class.

## 5) Quality Checklist Before Handoff
- Run `yarn build` successfully with no TypeScript errors.
- Manually verify key behaviors:
  - Theme toggle works and keeps readable foreground/background contrast.
  - Language toggle updates all relevant content correctly.
  - Avatar flip works with both click and keyboard (`Enter`/`Space`).
- Verify basic responsiveness on both mobile and desktop.

## 6) Change Safety Rules
- Prefer small, clear, review-friendly changes.
- Do not rename files or reorganize large structures unless explicitly requested.
- If there are UI/UX trade-offs, document them clearly in the handoff notes.
