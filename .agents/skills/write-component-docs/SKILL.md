---
name: write-component-docs
description: "Author component documentation in this project. Docs live inside the component's *.stories.tsx (Storybook autodocs), translated from the HTML reference's MDX structure into JSX, in Japanese."
---

## Where docs live

This project does **not** use standalone MDX files for component docs (yet). Instead, documentation is rendered by Storybook autodocs, configured inside `<Name>.stories.tsx`:

- Simple components → `parameters.docs.description.component` with a short Markdown string.
- Complex components → `parameters.docs.page` with a JSX page that mirrors the HTML version's MDX structure.

Reference implementations:
- Simple: `src/components/Divider/Divider.stories.tsx`
- Complex: `src/components/ProgressIndicator/ProgressIndicator.stories.tsx`

> **Note:** Migrating to standalone MDX (matching the HTML version's setup) is on the roadmap. Until that migration happens, write new docs in the JSX form described here. Do not introduce a one-off MDX file for a single component ahead of the project-wide switch.

## When to use which form

| Form | Use when |
|---|---|
| `description.component` only | The component has minimal API surface (1–2 props), no notable variants, no specific usage notes. |
| Full `docs.page` JSX | The component has multiple sub-components, multiple variants worth tabling, JS-driven behavior, accessibility caveats, or paired hooks/utils. |

If in doubt, start with `description.component` and expand later.

## Source of structure: the HTML version's MDX

Use the HTML version's `.mdx` for the same component (https://github.com/digital-go-jp/design-system-example-components-html) as the **content** source — variant tables, behavior descriptions, usage recipes. Translate it into Japanese suitable for a React API surface (drop CSS class names, `data-*` attributes that don't exist on the React side, raw HTML markup, etc.).

The **section order is different from the HTML MDX**, because the React version uses Storybook autodocs (live components) rather than `<details>` source-code blocks. Match the React layout below, not the HTML one.

### Section order (React)

1. `<Title />` / `<Subtitle />` / `<Description />` (autodocs metadata)
2. `<Primary />` + `<Controls />` (the leading interactive Story)
3. `<Stories includePrimary={false} />` (remaining Stories — placed _before_ spec/usage in this project)
4. **仕様** (Spec)
   - コンポーネント構成 — list each exported component / hook with one-line role
   - Props — one table per exported component, columns: `Props` / `説明` / `デフォルト`
   - 機能仕様 — variants, modes, screen-reader behavior, motion handling
5. **使い方** (Usage)
   - 基本的な使い方 — minimum working snippet
   - 〜する — recipe-style snippets for common patterns (control state, customize messages, etc.)
   - Customization sub-sections (e.g. メッセージのカスタマイズ, 通知間隔のカスタマイズ) live as `<h3>` inside 使い方 — not as a separate top-level section.
6. **参考情報** (References) — external links (WAI, WCAG, etc.) when relevant

### What to omit from the HTML MDX

- **ソースコード section (`<details>` with HTML/CSS/JS source)** — the React version exposes live components instead; do not include raw source dumps.
- **CSS class names and `data-*` attributes** that do not exist on the React API.
- **Raw HTML markup blocks** showing internal SVG / element structure — replace with the React component name.
- **JavaScript API tables** (HTML version's `start()`, `stop()`, `value`) — replaced by props and hooks; describe the React equivalents.

### HTML MDX → React docs mapping

| HTML MDX | React equivalent |
|---|---|
| `<Canvas of={...Playground} withToolbar />` | `<Primary />` |
| `<Controls of={...Playground} />` | `<Controls />` |
| `<Stories title="デモ" includePrimary={false} />` (placed at end) | `<Stories includePrimary={false} />` (placed near top, after Primary/Controls) |
| `## ソースコード` `<details>` blocks | _omit_ |
| `## カスタマイズ` (top-level) | `### 〜のカスタマイズ` (under 使い方) |
| `data-foo` attribute table | Props table per exported component |
| HTML element JS API table | Hook signature + options table |

## Skeleton for `docs.page` (complex components)

```tsx
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Foo } from './Foo';

const meta = {
  id: 'Component/DADS v2/Foo',
  title: 'Component/フー',
  component: Foo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <Unstyled>
          <div className='prose'>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />

            <h2>仕様</h2>
            {/* ... */}

            <h2>使い方</h2>
            {/* ... */}
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta<typeof Foo>;
```

**Required wrapper:** `<Unstyled>` + `<div className='prose'>`. Without these, autodocs styles bleed into the documentation content.

## Conventions

### Language

- All prose: Japanese.
- Identifier names, type signatures, code samples: as in code (English).
- Keep prose concise and noun-ending where natural (`〜の追加`, `〜を実装` style).

### Props tables

Three columns: `Props` / `説明` / `デフォルト`. The `説明` cell starts with the type in `<code>`, then a one-line description.

```tsx
<table aria-labelledby='foo-props' className='w-full'>
  <thead>
    <tr>
      <th scope='col' className='text-nowrap'>Props</th>
      <th scope='col'>説明</th>
      <th scope='col' className='text-nowrap'>デフォルト</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='whitespace-nowrap'><code>size</code></td>
      <td>
        <div><code>'lg' | 'sm'</code></div>
        インジケーターのサイズ
      </td>
      <td><code>'lg'</code></td>
    </tr>
  </tbody>
</table>
```

Use `aria-labelledby` to tie the table to a preceding `<h4 id='...'>`. When the table sits under an inline heading (no preceding labeled heading), fall back to a regular table caption or omit `aria-labelledby` rather than inventing IDs.

### Code samples

Use `<pre><code>` with template literals for multi-line samples. No syntax highlighting (Storybook autodocs renders as-is).

```tsx
<pre>
  <code>
    {`import { Foo } from './Foo';

<Foo size='lg' />`}
  </code>
</pre>
```

### Headings

- `<h2>` for top-level sections (仕様, 使い方, 参考情報).
- `<h3>` for sub-sections (Props, バリエーション, 基本的な使い方).
- `<h4>` for nested entries (e.g. each exported component's Props block).

Markuplint enforces no heading-level skips — verify with `npm run lint:markup`.

## Skeleton for simple components

```tsx
parameters: {
  docs: {
    description: {
      component: `<コンポーネント名>の概要を1〜2文で。

詳細な使い分けは別段落で書いてもよい。`,
    },
  },
},
```

This renders into the autodocs `<Description />` slot. No JSX page needed.

## Pre-flight

- [ ] Section order matches the HTML version's MDX (where the HTML version exists).
- [ ] Wrapped in `<Unstyled>` + `<div className='prose'>` for JSX page form.
- [ ] All prose is in Japanese; identifiers/types remain English.
- [ ] Each table has a header row with the right column count and uses `<th scope='col'>`.
- [ ] Heading levels are sequential (no skips). `npm run lint:markup` passes.
- [ ] Code samples are runnable (correct imports, props that actually exist).
- [ ] `npm run storybook` renders the docs tab without runtime errors.
