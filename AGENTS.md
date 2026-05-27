# AGENTS.md

Shared rules for AI coding agents (Claude Code, Copilot, etc.) working on this repo.

## Project overview

React + TailwindCSS + Storybook reference implementation of the Digital Agency Design System (DADS) v2. Components are ported from the HTML reference: [digital-go-jp/design-system-example-components-html](https://github.com/digital-go-jp/design-system-example-components-html).

### Required reading

Read these before making design decisions:

- `src/docs/introduction.mdx` — project positioning, supported environments, how to file issues
- `src/docs/development-policy.mdx` — design principles (customizability, simplicity, HTML/CSS-native preferred), browser support, accessibility policy

## Tech stack

- React 18
- TailwindCSS 3 with `@digital-go-jp/tailwind-theme-plugin`
- Storybook 10
- TypeScript, Biome, Markuplint, Vitest

### Commands

Run these before declaring work complete:

- `npm run lint` — Biome lint
- `npm run lint:markup` — Markuplint (also checks `.stories.tsx`, e.g. heading-level skips)
- `npm run build` — `tsc && vite build` (doubles as typecheck)
- `npm test` — Vitest (unit + Storybook)
- `npm run storybook` — local Storybook on :6006 for manual verification

## Working on components

**Before writing or editing any component, read the [`component-rules`](.agents/skills/component-rules/SKILL.md) skill.** It covers component design principles, file layout, styling rules (Tailwind tokens, Preflight, `data-*` patterns), accessibility, Storybook conventions, and testing.

Workflow-specific tasks have their own skills (see _Skills_ below). They build on top of `component-rules` rather than restating it.

## Dependencies

Do not add runtime or dev dependencies without user approval. The project deliberately keeps dependencies minimal (see `introduction.mdx`).

## Code style

- Default to no comments. Add one only when the "why" is non-obvious (hidden constraint, workaround, surprising invariant). No comments that restate what the code does.
- Comments, commit messages, variable/type names: **English**.
- UI copy, Story display names (`name` field), `component-spec.md` contents, PR descriptions: **Japanese** (matches the user-facing product).
- Follow Biome's import ordering. Separate `type` imports from value imports.
- No `any`. Avoid `let` where `const` suffices.

## Branch naming

`<scope>/<slug>`, lowercase, hyphen-separated. Scopes observed: `feature`, `refactor`, `chore`, `docs`.

Examples: `feature/progress-indicator`, `refactor/button-styles`, `docs/agents-rules`.

## Commit messages

Use the [`create-commit`](.agents/skills/create-commit/SKILL.md) skill — it covers the message format, scope conventions, and approval flow used in this repo.

## Skills

Skills under `.agents/skills/`:

- [`component-rules`](.agents/skills/component-rules/SKILL.md) — **rules and conventions for every component (read this first)**.
- [`port-html-to-react`](.agents/skills/port-html-to-react/SKILL.md) — port a component from the HTML reference to this project.
- [`write-tests`](.agents/skills/write-tests/SKILL.md) — write UI / hook / util tests with the project's conventions.
- [`write-component-docs`](.agents/skills/write-component-docs/SKILL.md) — author Storybook autodocs (description / `docs.page`) translated from the HTML version's MDX structure.
- [`pre-completion-check`](.agents/skills/pre-completion-check/SKILL.md) — run lint, markup lint, build, and tests before declaring a task done.
- [`review`](.agents/skills/review/SKILL.md) — review changed code against the project's review checklist.
- [`create-commit`](.agents/skills/create-commit/SKILL.md) — stage, draft a Conventional Commits message in this repo's style, and commit after user approval.
