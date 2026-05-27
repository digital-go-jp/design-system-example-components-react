---
name: pre-completion-check
description: "Run the pre-completion checks before declaring a task done. Executes lint, markup lint, build (tsc), tests, and reminds the user to verify Storybook visually."
---

## Context

- Current branch: !`git branch --show-current`
- Changed files: !`git status --short`

## Steps

Run each command and report pass/fail. If any command fails, stop and surface the failure to the user before continuing.

1. `npm run lint` — Biome lint
2. `npm run lint:markup` — Markuplint (also checks `.stories.tsx`)
3. `npm run build` — `tsc && vite build` (doubles as typecheck)
4. `npm test` — Vitest (unit + Storybook). To scope to one component while iterating, pass the path through `npm` with `--`: `npm test -- src/components/Foo` (don't call `npx vitest` directly — stay on the project's npm script).

## Manual checks (remind the user)

These cannot be automated; list them so the user can confirm before merging:

- [ ] Storybook started locally (`npm run storybook`) and each affected Story (including autodocs) was visually verified.
- [ ] For ports: compared against the HTML reference side-by-side.
- [ ] WCAG 2.2 AA criteria relevant to the change are satisfied.
- [ ] Keyboard navigation works end-to-end for any interactive element added or changed.
- [ ] No `console.log` or other debug output left in the diff.
- [ ] No new runtime or dev dependencies were added without user approval.
