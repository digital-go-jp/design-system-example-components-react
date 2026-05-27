---
name: write-tests
description: "Write tests for components in this project. Covers Storybook-based UI tests (composeStories + vitest-browser-react), unit tests for hooks/utils, and the conventions that keep tests deterministic and meaningful."
---

## Test runner setup

This project runs **all** Vitest tests in browser mode via Playwright + Chromium. There are two projects in `vite.config.ts`:

- `storybook` — Storybook-driven test runs (`npm run test:storybook`)
- `unit` — `src/**/*.test.{ts,tsx}` (`npm run test:unit`)

Both projects use the same browser provider — there is no jsdom setup. Hook / util tests therefore also run in the browser. If you need to verify pure logic without a DOM, you can still write a `.test.ts` under the `unit` project; it will execute in Chromium but jsdom-style globals are simply unused.

## Test categories

Two buckets, decided by what is being verified:

| Category | File | Project | Verifies |
|---|---|---|---|
| UI / interaction | `<Name>.test.tsx` | `storybook` (or `unit` for non-Story tests) | Rendering, ARIA, focus, keyboard nav, drag & drop, event handlers |
| Unit | `<Name>.test.ts` (hook/util) | `unit` | Pure functions, hook logic in isolation |
| Visual | (covered by Storybook autodocs + manual review) | — | Mirrors the HTML reference; verified manually via `npm run storybook` |

There is no VRT pipeline in this project — visual parity is checked manually against the HTML reference. Do not invent VRT setup.

### When to skip tests entirely

Not every component needs a `<Name>.test.tsx`. Skip it when **all** of the following are true:

- The component has no JS behavior — no event handlers, no state, no focus management beyond browser defaults.
- It is a pass-through wrapper around native elements with `data-*` attributes for styling, with no logic in the body.
- The HTML reference has no behavior tests of its own (only VRT under `*.test.js` calling `resetCssVrt`).

In those cases, visual parity via Storybook + the autodocs page is sufficient. Adding assertions like "data-current is set when current=true" only re-tests JSX prop-passing — the build's type check already covers it.

Add tests when the component has actual behavior to verify: focus trapping, keyboard nav, event payloads, controlled state, conditional rendering driven by interaction, etc.

## Reference

- `src/components/FileUpload/FileUpload.test.tsx` — canonical example of a UI test that reuses Stories via `composeStories`.

## UI / interaction tests

### Reuse Stories via `composeStories`

Tests reuse Storybook Stories so that the demo and the test stay aligned. Do not write a separate test-only render.

```tsx
import { composeStories } from '@storybook/react-vite';
import { describe, expect, test } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import * as stories from './Foo.stories';

const { Playground } = composeStories(stories);

describe('Foo', () => {
  test('renders the trigger', async () => {
    render(<Playground />);
    await expect.element(page.getByRole('button', { name: '開く' })).toBeVisible();
  });
});
```

### Querying elements

Prefer semantic queries. Fall back to `document.querySelector` only for things without an accessible name (internal `data-*` attributes, structural assertions).

| Need | Use |
|---|---|
| Element with a role / accessible name | `page.getByRole('button', { name: '送信' })` |
| Element by visible text | `page.getByText('メッセージ')` |
| Internal state node, attribute check | `document.querySelector('[data-state="open"]')` |
| Repeated queries in one file | Define DOM helper functions at the top of the file |

```tsx
const getRoot = () => document.querySelector('.group\\/foo') as HTMLElement;
const getOpenItems = () =>
  Array.from(document.querySelectorAll('[data-state="open"]'));
```

### Assertions

- Use `expect.element(locator).toXxx()` for async DOM updates (rerenders, animations) — it retries.
- Use `expect(value).toXxx()` for synchronous values.
- **Always assert against a concrete expected value.** "Changed from initial" tells you nothing about correctness.

```tsx
// DO: concrete expected value
await page.getByRole('button', { name: '前の月' }).click();
expect(getCurrentMonth()).toBe('5月');

// DON'T: just "it changed"
const initial = getCurrentMonth();
await page.getByRole('button', { name: '前の月' }).click();
expect(getCurrentMonth()).not.toBe(initial);
```

For event handlers, assert on the payload, not just that it fired:

```tsx
const handler = vi.fn();
ref.current.addEventListener('date-selected', handler);

await userEvent.click(getButtonForDay(20));

expect(handler).toHaveBeenCalledOnce();
const { date } = handler.mock.calls[0][0].detail;
expect(date.getFullYear()).toBe(2025);
expect(date.getMonth()).toBe(5);
expect(date.getDate()).toBe(20);
```

### User interaction

Use `userEvent` from `vitest/browser` — it dispatches real keystrokes via CDP.

```tsx
await userEvent.keyboard('{ArrowDown}');
await userEvent.keyboard('{Escape}');
await userEvent.keyboard('{ }'); // Space
await userEvent.tab();
await userEvent.tab({ shift: true });

await page.getByRole('button', { name: '送信' }).click();
```

Notes:
- Locator `.click()` waits for the element to be enabled. To click an `aria-disabled="true"` element, grab the DOM node and call `element.click()`.
- After a re-render, locators auto-refresh, but raw DOM references go stale — re-query with `document.querySelector`.

## Determinism

### Time-dependent components

If the component reads `new Date()` (calendars, "today" highlighting, formatting), freeze the clock. Otherwise tests pass on Tuesday and fail on Wednesday.

```tsx
import { afterEach, beforeEach, vi } from 'vitest';

const FAKE_NOW = new Date(2025, 5, 15, 12, 0, 0); // 2025-06-15

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(FAKE_NOW);
});

afterEach(() => {
  vi.useRealTimers();
});
```

**`toFake: ['Date']` is required** — without it, `setTimeout` and `requestAnimationFrame` are also faked, which breaks `await new Promise(r => setTimeout(r, 0))` and similar. Always restore real timers in `afterEach`.

Add a comment near the top of the file describing what state the fake date implies (e.g. "2025-06-15 → calendar opens on June, day 15 is today"). It saves the next reader from recomputing.

### Independence

Each test should set up its own state. Do not lean on test ordering or a shared, mutated module-level fixture.

## Unit tests for hooks / utils

When a component splits out a hook (`useFooAnnouncer.ts`) or a util (`fooHelpers.ts`), test it directly with Vitest. The `unit` project also runs in Chromium (see _Test runner setup_), so DOM globals are available but not required — for pure logic just import and assert.

```ts
import { describe, expect, test } from 'vitest';
import { parseSize } from './fileSize';

describe('parseSize', () => {
  test('parses MB units', () => {
    expect(parseSize('10MB')).toBe(10 * 1024 * 1024);
  });

  test('returns null for invalid input', () => {
    expect(parseSize('abc')).toBeNull();
  });
});
```

For React hooks, use `renderHook` from `vitest-browser-react`, or wrap the hook in a tiny test component.

## What to cover

Aim for one assertion per behavior. Use these categories as a checklist when planning tests:

| Category | Examples |
|---|---|
| Initial render | Default state, ARIA roles, default attribute values |
| Conditional rendering | Item count, enabled/disabled state |
| User interaction | Click, keyboard navigation, selection toggle |
| Events | Custom event firing, `detail` payload, bubbling |
| Boundary behavior | Out-of-range input ignored, min/max clamping |
| Public API | Imperative methods (if exposed), prop changes |
| Dynamic prop changes | Re-render on prop update |
| Accessibility | `aria-label`, `aria-selected`, focus management, live regions |
| Edge cases | Empty input, leap years, unmount/remount |

## Pre-flight

Before declaring tests done:

- [ ] No `not.toBe(initial)` style assertions — every check has a concrete expected value
- [ ] Time-dependent code is wrapped in `vi.useFakeTimers({ toFake: ['Date'] })` and restored in `afterEach`
- [ ] Tests reuse Stories where the behavior is already in a Story
- [ ] Semantic queries (`getByRole`, `getByText`) are used wherever the element has an accessible name
- [ ] `npm test` passes locally
