# Commit, push, and open the Clerk authentication PR

## Goal

Commit the completed Clerk authentication integration, push the current feature branch, and open a pull request against `main` on `origin`.

## Repository state inspected

- Current branch: `feat/home-side-gutters`.
- Remote: `origin` at `https://github.com/LoloNg17/vertex-learning-platform.git`.
- Default branch: `main`.
- The current branch already contains the homepage gutter commit that the Clerk header integration builds upon.
- Clerk changes are uncommitted and `.env.local` is ignored.
- GitHub CLI is not installed; Winget is available.

## Decision

Keep the current branch and open one coherent PR to `main`. The Clerk controls modify the header established by the existing branch commit, so a single PR avoids a stacked dependency and presents the complete homepage/auth integration together.

## Actions

1. Review the complete tracked and untracked diff.
2. Confirm `.env.local` and real credentials are not staged.
3. Stage only the intended homepage, Clerk, environment-example, dependency, proxy, route, and prompt files.
4. Commit with a concise message describing Clerk authentication.
5. Push `feat/home-side-gutters` to `origin`.
6. Install GitHub CLI with Winget if it remains unavailable.
7. Authenticate GitHub CLI if required, pausing only for browser/device confirmation.
8. Open a PR from `feat/home-side-gutters` to `main`.

## Pull request content

- Title: `Add Clerk authentication to the Vertex homepage`
- Summary: mention the Clerk provider, Next.js proxy, sign-in/sign-up routes, responsive header controls, and safe environment documentation.
- Tests: report `clerk doctor`, `npx tsc --noEmit`, `npm run lint`, `npm run build`, and HTTP 200 checks for `/`, `/sign-in`, and `/sign-up`.

## Security

- Never stage or print `.env.local`.
- Verify no real Clerk key appears in the staged diff.
- Push only to `origin`; do not push to `vertex-legacy`.

## Acceptance criteria

- Working tree changes are committed.
- Remote branch is updated successfully.
- A PR targeting `main` exists and its URL is reported.
- Any GitHub authentication blocker is reported exactly.
