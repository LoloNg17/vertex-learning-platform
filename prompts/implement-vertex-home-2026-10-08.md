# Implement the Vertex home page

## Goal

Replace the placeholder `/` route with the home page shown in `design/vertex-home.png`. Match the 1024 x 1536 desktop reference and adapt the layout for wider desktop and mobile screens. This prompt covers the visual home page only.

## Sources and skills inspected

- `AGENTS.md`: approval-first workflow, screenshot fidelity, responsive design, and verification.
- `design/vertex-home.png`: header, centered hero, search field, three course cards, weekly note, and decorative bars.
- `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `components/ui/icon.tsx`, `components/ui/vertex-logo.tsx`, its CSS module, existing public assets, and `package.json`.
- Installed Next.js 16.3.8 App Router CSS and font guides under `node_modules/next/dist/docs/01-app/01-getting-started/`.
- `imagegen` skill for the small photographic avatar. No Sanity, Clerk, or agent skill applies to this visual-only page.

## Decisions and assumptions

- Keep the current Next.js workspace and `/design-system` route. Do not add content APIs, authentication, analytics, or a search backend as part of a single screenshot implementation.
- Reuse `VertexLogo`, `Icon`, Inter, Playfair Display, and the existing design tokens. Keep page-specific layout in `app/home.module.css`.
- Treat the three pictured courses as illustrative local data until real catalog content exists. Show exactly the copy and metadata visible in the reference; do not imply it was fetched.
- Use the reference's 29px outer gutters at 1024px. Let the canvas grow with desktop width instead of capping it at 966px. Keep the hero content itself comfortably bounded and centered. Stack the cards on small screens.
- Courses, Explore Courses, and View all courses scroll to the course section. My Learning and the notifications bell remain presentational because their destinations do not exist yet. The search input accepts text but does not fabricate a result or submit to a nonexistent API.
- Create the Next.js and TypeScript marks and the Docker symbol as small SVG/CSS assets in code, matching the reference silhouette. Generate only the circular photographic avatar with the built-in image tool and save it to `public/vertex-avatar.png`.
- The reference includes warm orange accent elements beyond the design system's primary token. Match those locally in this page without changing global tokens.

## Files expected to change

- `app/page.tsx`: semantic structure and reference copy.
- `app/home.module.css` (new): scoped desktop layout, decorative bars, and responsive rules.
- `public/vertex-avatar.png` (new): generated portrait asset for the header.
- `components/ui/icon.tsx` only if a missing icon cannot be expressed as a page-local SVG.

## Requirements and acceptance criteria

1. At 1024px viewport width, header, hero, search, course cards, weekly note, and decorative bars closely match the supplied image in order, size, spacing, typography, color, and alignment.
2. The page fills wide desktop screens with narrow outer gutters; the hero remains centered and the cards expand naturally.
3. At 768px, 390px, and 320px, there is no horizontal overflow; controls remain legible and the cards stack when needed.
4. Page links, labels, heading structure, and focus treatment are accessible. Presentational controls do not navigate to nonexistent routes.
5. `/design-system` remains visually unchanged.

## Security considerations

- No credentials, client tokens, user data writes, backend calls, or external image requests at runtime.
- The avatar is an illustrative generated asset, not a real learner's profile photo.

## Checks to run

- `npx tsc --noEmit`, `npm run lint`, `npm run build`, and start or verify `npm run dev` from the repository root.
- Inspect `/` against the reference at 1024px and check 1440px, 390px, and 320px. Inspect `/design-system` for regression. If browser automation is unavailable, report that limitation rather than claiming a visual check passed.

## Exact manual test steps

1. Run `npm run dev` and open `http://localhost:3000` at 1024 x 1536 at 100% zoom; compare each section to `design/vertex-home.png`.
2. Open at 1440px width; check the canvas uses the available width without broad empty sidebars.
3. Click Courses, Explore Courses, and View all courses; each should move to the course cards.
4. Type into the search field and tab through the interactive elements; check focus visibility and that typing does not navigate to an unbuilt search route.
5. Resize to 390px and 320px; verify the header, title, search field, and stacked cards fit without horizontal scrolling.
6. Open `http://localhost:3000/design-system` and confirm the existing showcase still renders.
