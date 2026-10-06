# Refactor Vertex Design System

## Goal and approved scope

Refactor the existing 14-section design-system showcase into a reusable Vertex foundation without changing its visual result. Create `/design-system` and keep `/` rendering the same showcase. Preserve the user's existing unrelated worktree changes.

## Instructions and sources reviewed

- `AGENTS.md`, including the approval, UI fidelity, and verification rules.
- `design/vertext-designsystem.png` at 1024 × 1536.
- `app/globals.css`, `app/page.tsx`, `app/layout.tsx`, package/config files, the absence of `app/design-system/` and `components/ui/`, and Tailwind usage in application code.
- Installed Next.js App Router and CSS documentation; Tailwind v4 theme and custom-utility documentation. No installed skill specifically applies to a generic React/Tailwind design-system refactor.

## Architecture

- Keep `app/globals.css` limited to Tailwind import, canonical Vertex tokens and Tailwind mappings, eight semantic typography utilities, resets, html/body defaults, and global focus behavior.
- Expose primary 100–500 and neutral 50–900 values shown in the image via Tailwind `@theme inline`. Keep existing token values. Expose font, 4px spacing base, radius, and shadow utilities. Define display-1, display-2, heading-1/2/3, body-lg, body, and small typography utilities from the reference table.
- Move the showcase composition and sample data to `app/design-system/design-system.tsx`. `app/design-system/page.tsx` and `app/page.tsx` render the same composition.
- Move board-only selectors from `.design-board` onward, including panel grids, specimens, cards, navigation, and responsive rules, to `app/design-system/design-system.module.css`.
- Extract genuinely reusable Icon, VertexLogo, Button, Badge, TextField, SelectField, and ProgressBar components under `components/ui/`. Keep sample course/lesson/resource cards and numbered showcase headings local until product data shapes exist.
- Use Tailwind classes in reusable components. Keep compact specimen sizes and forced hover examples in the showcase CSS module.

## Token discrepancies and preservation

- Body text currently renders as `#111`, while foreground token is `#0F172A`; preserve both and the visible body color.
- Showcase action accents use `#F4511E`, while Primary 500 is `#F97316`; do not silently unify them.
- Specimen buttons and fields render around 27–31px while their written production specification says 44px; reusable controls use the production size, showcase-only overrides preserve the compact board.
- Full radius and the type/spacing scales are displayed but not fully tokenized; expose them without altering their listed values.

## Files to change or create

- Change: `app/globals.css`, `app/page.tsx`.
- Create: `app/design-system/page.tsx`, `app/design-system/design-system.tsx`, `app/design-system/design-system.module.css`.
- Create: `components/ui/icon.tsx`, `vertex-logo.tsx`, `vertex-logo.module.css`, `button.tsx`, `badge.tsx`, `text-field.tsx`, `select-field.tsx`, `progress-bar.tsx`.
- Keep `app/layout.tsx`, dependencies, and unrelated files unchanged unless a concrete build issue requires a scoped fix.

## Security and accessibility

Static visual UI only. Add no network calls, credentials, storage, or data writes. Keep semantic buttons, labels, native select, disabled state, progressbar ARIA values, decorative icon semantics, and visible keyboard focus.

## Acceptance criteria

1. `/` and `/design-system` render all 14 reference sections with unchanged desktop composition and sensible mobile behavior.
2. No showcase selectors remain in `app/globals.css`.
3. Vertex primary/neutral scales, spacing, radii, shadows, fonts, and semantic type utilities are usable via Tailwind classes.
4. Extracted components expose typed, minimal props and are usable by future pages without importing showcase CSS.
5. No horizontal page overflow at mobile widths; controls retain focus, labels, and disabled semantics.
6. Typecheck, lint, production build, and both routes pass. Compare rendering at 1024px and mobile against the reference and current baseline when browser capture is available.

## Checks and manual test

- Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`.
- Run or reuse `npm run dev`; verify HTTP 200 for `/` and `/design-system`.
- Open both routes at 1024px; compare section order, typography, color swatches, buttons, cards, and proportions to the reference.
- Check 768px and 375px: panels stack, token labels remain legible, and the viewport does not scroll horizontally.
- Tab through enabled controls; confirm focus is visible and disabled examples do not activate.
