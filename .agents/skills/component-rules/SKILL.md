---
name: component-rules
description: "Rules and conventions for building React components in this repo (composition pattern, no logic in component body, styling tokens, file layout, etc.). Read this before writing or editing any component."
---

These are the project-wide rules for component code. Workflow skills (`port-html-to-react`, `write-tests`, `write-component-docs`) build on top of these — they don't restate them.

## Before writing code

The codebase is the source of truth for style and structure. Read it before adding or changing components.

### When adding a new component

1. Skim `src/components/` to see what is already there and how directories are organized.
2. Open one or two components of the same nature (form control, animated indicator, navigational, etc.) and read all their files — `.tsx`, `.stories.tsx`, `.test.tsx`, plus any split-out `types.ts` / hooks. Match their patterns rather than inventing new ones.
3. Skim `tailwind.config.js` and the `@digital-go-jp/tailwind-theme-plugin` tokens so styles use existing tokens, not stock Tailwind values.
4. Read the HTML reference for the component (see [`port-html-to-react`](../port-html-to-react/SKILL.md)).

### When updating an existing component

1. Read every file under `src/components/<Name>/` first — including stories, tests, and any split-out hooks/utils. Subtle conventions live in those siblings.
2. Preserve the existing pattern (file split, prop shape, naming) unless the change explicitly requires breaking it.

## Component design principles

### Composition pattern

Use React children composition. Keep props and state minimal; let consumers assemble the structure.

```tsx
// Good: consumers control the structure
<Dialog>
  <DialogBody>
    <h2>...</h2>
    <p>...</p>
  </DialogBody>
</Dialog>

// Bad: structure locked inside props
<Dialog body={<><h2></h2></>} />
```

### Props

Base props on native element props. Add custom props only when necessary.

```tsx
type ButtonProps = ComponentProps<'button'>;

// When extension is necessary:
type ButtonProps = ComponentProps<'button'> & {
  size: Size;
  variant: Variant;
};
```

### No cross-component references or premature abstraction

- Component A must not import component B (Slot-like primitives excepted).
- Do not deduplicate similar UI code. No `BaseProps`, `CommonProps`, `BaseButton`, `BaseCard`.
- UI requirements diverge per project; shared base classes become liabilities.

### No logic in the component body

- Component bodies must not contain logic (state, timers, effects, data fetching, etc.).
- Do not use `useState`, `useRef`, `useEffect`, or other React hooks in the component body (keeps React Server Component compatibility).
- When logic is needed, provide it one of these ways:
  - **Inline in the Story** — demo-specific behavior (timers, demo state).
  - **Hook in a separate file** (e.g. `useFooAnnouncer.ts`) — imported when the consumer needs it.
  - **Util in a separate file** — pure functions, class-name helpers.
- When you split out a hook or util, add Vitest tests. See `src/components/FileUpload/FileUpload.test.tsx` for the pattern (Story reuse via `composeStories` + `vitest-browser-react`).

### No dependencies on shared config

Components must be self-contained. Do not rely on:

- Per-component additions to `tailwind.config.js` (e.g. extending `theme.keyframes` or `colors` for a single component)
- Additions to `global.css` or other shared stylesheets
- Project-level PostCSS plugins or global CSS variables

If you need custom CSS (e.g. `@keyframes`), put it in a `.css` file inside the component directory and `import` it from the component's `.tsx`. A consumer should be able to copy the component folder and have it work.

## File layout

Per component:

```
src/components/Foo/
├── Foo.tsx              # Main implementation (sub-components can live here too)
├── Foo.stories.tsx      # Storybook
├── Foo.test.tsx         # Vitest (when hooks/utils are split out, or for UI behavior)
├── types.ts             # Shared types (size, variant, etc.)
├── useFooSomething.ts   # Component-specific hook (when needed)
└── index.ts             # Public exports
```

- Start with everything in `Foo.tsx`.
- Do not split files preemptively. Once `Foo.tsx` exceeds roughly 300 lines, propose a split to the user; do not do it unprompted.
- Do not create new files (docs, READMEs, notes) unless explicitly requested.

## Styling rules

### Tailwind

- Use tokens from `@digital-go-jp/tailwind-theme-plugin` (https://github.com/digital-go-jp/tailwind-theme-plugin).
- Do not use stock Tailwind colors (`text-blue-500` etc.). `text-white` and `text-black` are the only exceptions.
- Do not use stock Tailwind font sizes (`text-xs`, `text-lg`, etc.). Text styles are covered by the `text-std-*`, `text-dns-*`, `text-oln-*`, `text-mono-*` token sets — these set font-size, weight, line-height, and letter-spacing together, so a single token usually replaces multiple classes (`text-base leading-[1.3] tracking-normal` → `text-dns-16N-130`).
- For line-height alone, prefer the plugin's `leading-100` … `leading-175` over arbitrary values like `leading-[1.3]`.
- Prefer Tailwind shorthand utilities over arbitrary-value brackets when one exists. `[margin-left:calc(...)]` → `ml-[calc(...)]`, `[padding-left:1rem]` → `pl-4`, etc. Reserve `[property:value]` for properties Tailwind has no shorthand for.
- Mirror the HTML version's `prefers-reduced-motion: reduce` and `forced-colors` handling.
- Match the styling conventions used in neighboring components. Before writing a new pattern (especially `focus-visible`, hover, and other interaction states), grep for the same selector elsewhere in `src/components/` and follow that form. Example: `focus-visible` outline + ring is expressed with `focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:ring-* focus-visible:ring-yellow-300` — not as `[box-shadow:...]` arbitrary values.

### Don't re-implement Preflight

The HTML reference is built without a CSS reset, so it explicitly normalizes `<button>`, `<ul>`, `<a>`, etc. (e.g. `border: 0; background: transparent; padding: 0; margin: 0; list-style: none; font: inherit; text-decoration: none; color: inherit; box-sizing: border-box`). This project uses Tailwind's Preflight, which already applies those resets globally.

Do not copy those reset declarations into the React port. Only add classes that change behavior beyond Preflight's defaults. Common offenders to omit:

- `m-0`, `p-0`, `pl-0` on `<ul>`/`<ol>` (Preflight handles list margins/padding)
- `list-none` on a `<ul>` that has no markers
- `border-0`, `bg-transparent` on `<button>`
- `text-inherit`, `[font:inherit]`, `[letter-spacing:inherit]` on form/interactive elements
- `no-underline` on `<a>` when the design wants the default
- `box-sizing: border-box` (Preflight sets it)

### `data-*` + `group-data-[...]` pattern

Represent state via `data-*` on the root; children react via `group-data-[...]/name`. Avoid branching `className` in JS.

```tsx
<div
  className='group/progress-indicator'
  data-type={type}
  data-indeterminate={isIndeterminate ? '' : undefined}
>
  <svg className='group-data-[indeterminate]/progress-indicator:[animation:spin_2s_linear_infinite]' />
</div>
```

## Accessibility

- Target WCAG 2.2 Level AA (and JIS X 8341-3:2016).
- Use the correct HTML element; prefer native semantics over ARIA.
- Keep WAI-ARIA usage minimal.
- Verify keyboard navigation and screen reader output.
- No `console.log` or debug output in committed code.

## Storybook conventions

- Every component has a `Playground` Story. Tests reuse it via `composeStories`.
- Story export names match the HTML file names (`spinner-loop.html` → `SpinnerLoop`, display name in Japanese).
- Add `tags: ['autodocs']` to the meta.
- For the autodocs page itself, follow the [`write-component-docs`](../write-component-docs/SKILL.md) skill.

## Testing

All Vitest tests run in browser mode via Playwright + Chromium (see `vite.config.ts`). There is no jsdom environment.

- UI behavior (focus, ARIA, drag & drop, etc.) → `composeStories` + `vitest-browser-react` against Stories (`storybook` project).
- Pure hooks/utils → standard Vitest tests under `src/**/*.test.{ts,tsx}` (`unit` project — also browser-mode, but DOM globals are simply unused for pure logic).
- For conventions (deterministic time, query patterns, what to cover), see the [`write-tests`](../write-tests/SKILL.md) skill. Reference implementation: `src/components/FileUpload/FileUpload.test.tsx`.
