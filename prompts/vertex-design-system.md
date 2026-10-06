# Implementation prompt: Vertex Design System

## Goal

Replace the starter home page with a responsive, accessible design-system showcase that reproduces `design/vertext-designsystem.png`. Establish reusable Vertex tokens and component patterns for later learning-platform pages. This request covers the design system itself, not the course catalog, authentication, Sanity setup, or search implementation.

## Sources inspected

- `AGENTS.md`, including its approval workflow, visual fidelity rule, and verification requirements.
- `design/vertext-designsystem.png` (1024 × 1536 reference): 14 numbered sections in a warm off-white board with subtle borders and shadows.
- Existing `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, and `package.json`: untouched Next.js starter with no product components or extra UI libraries.
- Installed Next.js documentation: App Router layouts/pages, global CSS and Tailwind, `next/font`, and static metadata.
- No external skill is needed for this visual implementation. The image is the source of truth.

## Design decisions

- Use `/` as the design-system specimen page. Match the reference's section order, desktop proportions, palette, typography, spacing, radius, shadow, labels, and sample content.
- Define semantic color, type, spacing, radius, and shadow tokens in CSS. Use Tailwind utilities and a small set of scoped CSS classes for the specimen layout.
- Use Playfair Display for display text and Inter for UI text through `next/font/google`. Provide CSS fallbacks.
- Build the Vertex mark as a small inline SVG and render example icons with inline SVGs or a compact reusable icon component. Do not add an icon package solely for the specimen.
- Keep the sample controls semantic: buttons as buttons, search as an input, select as a select, and navigation as links only when there is a real destination. Disabled examples use `disabled`.
- The reference is a static design board. Example course/lesson/resource cards use the exact illustrative copy from the image and do not imply working course routes.
- On narrow screens, stack the large panels and cards, allow dense token rows to wrap or scroll where appropriate, and preserve legible labels and touch targets.

## Files expected to change

- `app/page.tsx`: specimen sections and reusable local presentation helpers.
- `app/globals.css`: Vertex tokens, base styles, specimen layout, responsive rules.
- `app/layout.tsx`: fonts and Vertex metadata.
- Optionally add a small component or SVG asset under `app/` or `public/` if it improves reuse or fidelity.
- Keep the user's current unrelated untracked files and the modified `AGENTS.md` intact.

## Requirements and acceptance criteria

1. The root page contains all 14 reference sections: colors, typography, type scale, spacing, radius/shadows, icons, buttons, inputs, badges, status, progress, cards, navigation, and principles.
2. The visual hierarchy and sample data closely match the supplied desktop image at approximately 1024 px viewport width.
3. Tokens are named and reusable; colors include the primary and neutral scales shown in the image.
4. Text remains readable, form controls have labels, keyboard focus is visible, and SVG icons have appropriate accessible semantics.
5. Layout remains usable on tablet and mobile without horizontal page overflow.
6. Remove the default Next.js starter content and default metadata from the rendered page.

## Security and data handling

This is a local, static presentation task. Do not add network calls, environment variables, secrets, authentication, or external data writes.

## Checks to run

- `npx tsc --noEmit`
- `npm run lint`
- `npm run build` because the route/layout changes
- Start `npm run dev` and inspect the page at desktop and mobile viewport sizes, correcting visible layout issues.

## Manual test steps

1. Run `npm run dev` and open `http://localhost:3000`.
2. Compare the 14 sections to `design/vertext-designsystem.png` at a 1024 px wide viewport.
3. Resize to a narrow mobile width and confirm the panels stack, labels remain readable, and the page has no horizontal overflow.
4. Tab through the input, select, and enabled buttons to confirm visible focus; verify disabled button examples cannot be activated.
