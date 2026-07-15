---
name: write-component-docs
description: "Author component documentation in this project. Docs live in a standalone <Name>.mdx file next to the component's Stories, written in Japanese. Covers the React-first doc structure to write for any component, plus a short addendum for migrating content from the HTML reference's MDX."
---

## Where docs live

Documentation lives in a dedicated `src/components/<Name>/<Name>.mdx` file, sitting next to `<Name>.stories.tsx`. It attaches to that component's Stories via the `Meta` Doc Block:

```mdx
import * as FooStories from './Foo.stories';

<Meta of={FooStories} />
```

Do **not** write docs inline in `<Name>.stories.tsx` (no `parameters.docs.description.component`, no `parameters.docs.page`). The `.stories.tsx` file only defines Meta/Stories/args; all prose and layout goes in the `.mdx` file.

**Remove `tags: ['autodocs']` from `<Name>.stories.tsx`'s `meta`** whenever a component gets a `.mdx` file. The MDX file becomes the attached docs page; leaving the `autodocs` tag creates a duplicate, conflicting "Docs" entry (Storybook's own guidance is to remove it once a docs page is manually attached).

## How to structure a component's docs (React-first)

Write the docs to describe the React component as it stands on its own — do not treat the HTML reference's MDX as the primary source of truth or structure. (If the component was ported from the HTML reference, see the short addendum at the end of this skill for what to carry over.)

### Section order

1. `<Meta of={FooStories} />`
2. `<Title />` / `<Subtitle />` / `<Description />` (autodocs metadata blocks)
3. `<Canvas of={FooStories.Playground} withToolbar />` + `<Controls of={FooStories.Playground} />` (the leading interactive Story, explicitly pointed at the `Playground` story — see note below)
4. `<Stories includePrimary={false} />` (remaining Stories)
5. **仕様** (Spec)
   - コンポーネント構成 — list each exported component / hook with a one-line role (skip this if there's only one exported component)
   - Props — one table per exported component that has component-specific props, columns: `Props` / `説明` / `デフォルト`. If a component adds no props beyond the native element's (e.g. it's a thin wrapper over `ComponentProps<'div'>`), skip the table entirely and write a one-line paragraph instead (see Props tables below) — don't fake a row with `colSpan={3}` just to have a table.
   - 機能仕様 — variants, modes, screen-reader behavior, motion handling, and other non-obvious behavior
6. **使い方** (Usage)
   - 基本的な使い方 — minimum working snippet
   - 〜する — recipe-style snippets for common patterns (control state, customize messages, etc.)
   - Customization sub-sections (e.g. メッセージのカスタマイズ) live as `###` inside 使い方, not as their own top-level section
7. **参考情報** (References) — external links (WAI, WCAG, etc.), only when relevant

Skip 仕様/使い方/参考情報 sections that don't apply. A component with a single prop and no notable behavior can be just sections 1–4 plus a short 使い方 snippet — don't pad docs with empty headings.

**Use `Canvas`/`Controls`, not `Primary`.** In this project's Storybook setup, the `<Primary />` doc block (and a bare `<Controls />` with no `of`) silently render nothing when used inside a `.mdx` file attached via `<Meta of={FooStories} />` — no error, just an empty slot. This reproduces even in a minimal file, so treat it as environment-specific rather than something to debug per component. Always use `<Canvas of={FooStories.Playground} withToolbar />` + `<Controls of={FooStories.Playground} />` instead, explicitly pointed at the component's `Playground` story (or whatever its leading/primary Story export is called). This also matches how the HTML reference's own MDX docs call these blocks.

### Skeleton

````mdx
import {
  Canvas,
  Controls,
  Description,
  Meta,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import * as FooStories from './Foo.stories';

<Meta of={FooStories} />

<Unstyled>
<div className='prose'>

<Title />
<Subtitle />
<Description />
<Canvas of={FooStories.Playground} withToolbar />
<Controls of={FooStories.Playground} />
<Stories includePrimary={false} />

## 仕様

### コンポーネント構成

- `Foo`: ルートコンテナ
- `FooItem`: 子要素

### Props

#### `Foo`

<table className='w-full'>
  <thead>
    <tr>
      <th scope='col' className='whitespace-nowrap'>Props</th>
      <th scope='col'>説明</th>
      <th scope='col' className='whitespace-nowrap'>デフォルト</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='whitespace-nowrap'><code>size</code></td>
      <td>
        <div><code>'lg' | 'sm'</code></div>
        コンポーネントのサイズ
      </td>
      <td><code>'lg'</code></td>
    </tr>
  </tbody>
</table>

### 機能仕様

説明...

## 使い方

### 基本的な使い方

```tsx
import { Foo } from './Foo';

<Foo size='lg' />
```

## 参考情報

- [WAI-ARIA ...](https://www.w3.org/WAI/...)

</div>
</Unstyled>
````

**Required wrapper:** `<Unstyled>` + `<div className='prose'>` around everything after `<Meta />`. Without these, autodocs styles bleed into the documentation content.

**Blank lines matter.** MDX distinguishes Markdown from JSX by surrounding blank lines. Always leave a blank line before/after headings, lists, and JSX blocks (including the opening `<div className='prose'>` and `<Title />` etc.) or the parser will misparse them.

## Conventions

### Language

- All prose: Japanese.
- Identifier names, type signatures, code samples: as in code (English).
- Keep prose concise and noun-ending where natural (`〜の追加`, `〜を実装` style).

### Prefer native Markdown, fall back to JSX only where needed

Since docs are real MDX (not JSX embedded in a `.stories.tsx`), prefer plain Markdown syntax over raw HTML tags wherever Markdown covers it:

| Content | Use |
|---|---|
| Headings | `##`, `###`, `####` (not `<h2>`/`<h3>`/`<h4>`) |
| Bullet / numbered lists | `-` / `1.` (not `<ul>`/`<ol>`) |
| Bold / inline code | `**text**`, `` `code` `` |
| Code samples | fenced code blocks with a language tag (` ```tsx `), not `<pre><code>` |
| Tables | raw `<table>` JSX (see below) — this project doesn't enable the GFM plugin, so pipe-style Markdown tables (`\| a \| b \|`) won't render |

### Props tables

Tables must stay as raw `<table>` JSX (no GFM configured). Three columns: `Props` / `説明` / `デフォルト`. The `説明` cell starts with the type in `<code>`, then a one-line description.

**Required props:** put `（必須）` in the `デフォルト` cell instead of a value — a prop that's genuinely required has no default to show, so this column doubles as the required/optional indicator without adding a fourth column.

```mdx
<table className='w-full'>
  <thead>
    <tr>
      <th scope='col' className='whitespace-nowrap'>Props</th>
      <th scope='col'>説明</th>
      <th scope='col' className='whitespace-nowrap'>デフォルト</th>
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
    <tr>
      <td className='whitespace-nowrap'><code>title</code></td>
      <td>
        <div><code>string</code></div>
        バナーの見出しテキスト
      </td>
      <td>（必須）</td>
    </tr>
  </tbody>
</table>
```

**No table when there are no component-specific props.** If a component only forwards a native element's props without adding anything of its own, write a plain sentence:

```mdx
コンポーネント特有のPropsはありません。ネイティブの `<details>` 要素と同じ属性がそのまま利用できます。
```

### Code samples

Use fenced code blocks with a language tag; MDX/Storybook syntax-highlights these automatically.

````mdx
```tsx
import { Foo } from './Foo';

<Foo size='lg' />
```
````

### Headings

- `##` for top-level sections (仕様, 使い方, 参考情報).
- `###` for sub-sections (Props, バリエーション, 基本的な使い方).
- `####` for nested entries (e.g. each exported component's Props block).

Markuplint enforces no heading-level skips — verify with `npm run lint:markup`.

**Don't hand-write a table of contents.** This project enables Storybook's built-in docs table of contents.

## Addendum: migrating docs from the HTML reference

When the component was ported from the HTML reference (digital-go-jp/design-system-example-components-html), its `.mdx` file is a useful source of **content** — variant tables, behavior descriptions, usage recipes — but not of structure. Fit that content into the section order above; do not follow the HTML MDX's section order or layout.

## Pre-flight

- [ ] Docs live in `<Name>.mdx`, not in `<Name>.stories.tsx`.
- [ ] `tags: ['autodocs']` was removed from `<Name>.stories.tsx`'s `meta` (MDX now supplies the attached docs page).
- [ ] `<Meta of={FooStories} />` references the full Stories module import (`import * as FooStories from './Foo.stories'`), not the component itself.
- [ ] `<Canvas />` and `<Controls />` are called with an explicit `of={FooStories.Playground}` (or the actual leading story's export), not bare `<Primary />` / `<Controls />` — those silently render nothing in this project's setup.
- [ ] Section order matches this skill's React-first structure — the HTML version's MDX (if any) was used only for content, not layout.
- [ ] Wrapped in `<Unstyled>` + `<div className='prose'>`.
- [ ] Headings/lists/bold use native Markdown; tables use raw `<table>` JSX; code samples use fenced ` ```tsx ` blocks.
- [ ] All prose is in Japanese; identifiers/types remain English.
- [ ] Each table has a header row with the right column count and uses `<th scope='col'>`. Components with no component-specific props use a one-line sentence instead of a table with a fake `colSpan={3}` row. Required props show `（必須）` in the `デフォルト` cell instead of a value.
- [ ] Heading levels are sequential (no skips). `npm run lint:markup` passes.
- [ ] Code samples are runnable (correct imports, props that actually exist).
- [ ] `npm run storybook` renders the docs tab without runtime errors, and shows no duplicate "Docs" entry for the component.
