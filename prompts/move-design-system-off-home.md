# Move the Vertex showcase off the home route

## Goal

Keep the existing Vertex design-system showcase at `/design-system` only. Stop rendering it at `/`. The user's sentence ends after “plus sur”; assume the intended route is `/`, because `app/page.tsx` currently renders the showcase there.

## Instructions and context reviewed

- `AGENTS.md`, including the prompt-approval and verification requirements.
- `app/page.tsx`, `app/design-system/page.tsx`, `app/layout.tsx`, the existing showcase and reusable `VertexLogo`, and the current Git status.
- Installed Next.js 16 routing, linking, and metadata guides in `node_modules/next/dist/docs/`.
- No installed skill applies to this small Next.js route correction.
- No other home-page design or route exists in the repository. Preserve the design-system reference implementation and all unrelated worktree changes.

## Decision and scope

- Replace `/` with a minimal temporary Vertex entry page: the existing logo and a link to `/design-system`. Do not invent a product home page or modify design tokens.
- Keep `app/design-system/page.tsx` rendering the current showcase unchanged.
- Make root metadata generic to Vertex and put design-system-specific metadata on `/design-system`.
- Leave `app/globals.css`, reusable UI components, and showcase styles unchanged.

## Files to change

- `app/page.tsx`: remove the showcase import and render the minimal entry page.
- `app/layout.tsx`: use generic Vertex metadata.
- `app/design-system/page.tsx`: add route-specific design-system metadata.

## Security and accessibility

- No data access, storage, network calls, or authentication changes.
- Use a semantic `main` region and a keyboard-accessible Next.js `Link` with descriptive text.

## Acceptance criteria

1. `/` no longer renders any showcase section and offers a working link to `/design-system`.
2. `/design-system` still renders the same 14-section showcase without visual or responsive changes.
3. Each route has accurate title and description metadata.
4. Typecheck, lint, and production build pass.

## Checks and manual test

1. Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`.
2. Start the development server and open `/`; confirm the showcase is absent and the link works by keyboard and pointer.
3. Open `/design-system` at desktop and mobile widths; confirm all 14 sections and existing responsive behavior remain.
4. Inspect the page titles for both routes.
