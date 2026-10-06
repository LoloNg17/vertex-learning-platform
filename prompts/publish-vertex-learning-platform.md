# Publish the complete Vertex project

## Goal

Publish the current complete Vertex project to `https://github.com/LoloNg17/vertex-learning-platform.git` on `main`, in response to the user's commands and clarification “le projet complet”.

## Instructions and context reviewed

- `AGENTS.md`, including its prompt approval and verification workflow.
- Git status, branch, remotes, most recent commit, `.gitignore`, README, candidate file inventory and sizes.
- The working tree is already a Git repository on `main`, with commit `d8bc85c` and `origin` pointing at `vertex.git`; the new GitHub repository currently advertises no refs.
- The project includes the app, design reference, components, prompts, installed skills, and other source files. `node_modules`, `.next`, build outputs, and `.env*` are ignored.
- A targeted scan of candidate files found no obvious private key or common live API-token pattern. No installed skill applies to this Git publishing task.

## Decisions and assumptions

- Do not run `git init` or create a second initial history; preserve the existing commit history.
- Add `# vertex-learning-platform` as the README title, not as a trailing line after the boilerplate.
- Stage all non-ignored project files, including the currently untracked skill and design-reference files, after reviewing the staged list and checking for secrets again.
- Commit the current project state with a descriptive message, then publish `main` to the new repository.
- Preserve the old `vertex.git` remote as `vertex-legacy` and set the new repository as `origin`, so future `git push` targets the requested repository.
- Do not force-push or overwrite remote history. If the target gains commits or push authentication fails, stop and report it.

## Files and Git configuration to change

- `README.md`: add the requested project heading.
- Existing tracked and untracked non-ignored project files: stage and commit their current contents.
- Local Git remotes: rename old `origin` to `vertex-legacy`; add new `origin`.
- Remote GitHub repository: push `main` and establish upstream tracking.

## Security and safety

- Confirm no `.env` or private credential files are staged; check staged paths and perform a focused content scan without printing secret values.
- Preserve existing files and history. No reset, delete, or force push.
- Only publish the requested repository.

## Acceptance criteria

1. The README starts with `# vertex-learning-platform`.
2. All intended non-ignored project files are in a new local commit; no secret or generated files are included.
3. `origin` is `vertex-learning-platform.git`; `vertex-legacy` still points to `vertex.git`.
4. `main` is pushed to the new `origin` with upstream tracking, and local and remote commit hashes match.

## Checks and manual test

1. Inspect `git diff --cached --stat`, `git diff --cached --name-only`, and ignored paths before commit.
2. Run `git status --short` and `git log -1 --oneline` after commit.
3. Run `git push -u origin main`, then compare `git rev-parse HEAD` with `git ls-remote origin refs/heads/main`.
4. Open the new repository in GitHub and confirm the README and `app/design-system` are present.
