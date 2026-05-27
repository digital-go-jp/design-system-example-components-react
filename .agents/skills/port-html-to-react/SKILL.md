---
name: port-html-to-react
description: "Port a component from the HTML reference (digital-go-jp/design-system-example-components-html) to this React + Storybook project."
---

## Context

- HTML reference repo: https://github.com/digital-go-jp/design-system-example-components-html
- Target directory pattern: `src/components/<Name>/`
- **Read [`component-rules`](../component-rules/SKILL.md) first.** This skill assumes its rules (component design, file layout, styling, accessibility, Storybook conventions, testing) and only adds the port-specific flow on top.

## Steps

1. **Read the spec and the codebase**
   - Fetch the component's reference files from the HTML repo. **Use `curl` via Bash, not `WebFetch`** — `WebFetch` summarizes content past a quote limit and will silently truncate the spec/markup/CSS. Example:
     ```sh
     mkdir -p /tmp/<component>-html && cd /tmp/<component>-html
     for f in <component>.mdx <component>.html <component>.css <component>.js <component>.stories.ts <component>.test.js <component>.vrt.js <component>.unit.js; do
       curl -sSL "https://raw.githubusercontent.com/digital-go-jp/design-system-example-components-html/main/src/components/<component>/$f" -o "$f"
     done
     ```
     Then read the files locally. Test file roles in the HTML reference:
     - `<component>.test.js` — behavior tests (interaction, ARIA wiring, etc.)
     - `<component>.vrt.js` — visual regression tests for the reset-CSS variant
     - `<component>.unit.js` — jsdom-based unit tests for any logic split out of the component

     Not every component has all three. A 404 from `curl` just means that file doesn't exist; ignore it and move on.
   - Run through [`component-rules`](../component-rules/SKILL.md) § _Before writing code_ — read a similar existing component's full file set to pick up patterns before writing anything.

2. **Read the HTML reference implementation**
   - Markup and styles. The HTML reference uses **plain CSS with BEM-style class names** (`dads-<name>`, `dads-<name>__<part>`) in a sibling `<component>.css` — not Tailwind. Translate those rules into Tailwind utility classes (with theme-plugin tokens) on the React side; don't carry the BEM class names over.
   - **Read the companion Custom Element JS** (e.g. `progress-indicator.js`) carefully. Behavior is _not_ inline in the HTML — it lives in a `class Foo extends HTMLElement` / `customElements.define('dads-foo', Foo)` file. That file is where you'll find:
     - Attribute reactions (`observedAttributes`, `attributeChangedCallback`) — what state changes the component responds to.
     - Lifecycle work (`connectedCallback` / `disconnectedCallback`) — ARIA wiring (`role`, `aria-valuenow`, `aria-labelledby`), live-region announcers, timers/intervals, validation.
     - Public properties / methods (`get value()`, `start()`, `stop()`, etc.) — the imperative API consumers use.
     - `[data-js-*]` selectors — these are **JS-only hooks** for `querySelector`. The React port doesn't need them; express the same wiring through component structure / props instead.
   - The React port has to reproduce this behavior **without** `useState` / `useEffect` / `useRef` in the component body (see [`component-rules`](../component-rules/SKILL.md) § _No logic in the component body_). Plan where each piece goes: Story-side demo state, a separate hook file (`useFooAnnouncer.ts` etc.), or pure `data-*` + CSS.
   - Note `prefers-reduced-motion: reduce` and `forced-colors` handling — mirror them as-is.
   - **Don't port the reset CSS** that the HTML reference uses to normalize elements — Preflight already covers it. See [`component-rules`](../component-rules/SKILL.md) § _Don't re-implement Preflight_.

3. **Write a port plan and get user approval before coding** — required.
   - After Steps 1–2, write `src/components/<Name>/component-spec.md` (template at the end of this file). Cover at minimum:
     - **Component design**: which sub-components / props / `data-*` attributes you'll expose, how children compose, what is intentionally _not_ in the component API (e.g. placeholder icons — see below).
     - **File layout**: which files you'll create. Default to one `<Name>.tsx` with Tailwind classes inline in the JSX; only propose `types.ts` / a hook file when the complexity actually warrants it (see [`component-rules`](../component-rules/SKILL.md) § _File layout_).
     - **Story plan**: which Stories to mirror from the HTML version (one per HTML file, plus `Playground`).
     - **Test plan**: whether tests are needed, with reasoning, and the target cases if any. Decision rule: [`write-tests`](../write-tests/SKILL.md).
     - **Intentional deviations from the HTML reference**: anything you plan to do differently from the HTML version (and why).
   - Present the plan to the user and **wait for confirmation before writing component code**. The plan exists so the user can redirect file layout, prop shape, and Story/test scope before code is written, not after.
   - **Commit `component-spec.md` to the repo as a deliverable.** It's not a throwaway working doc — it's the artifact reviewers use to evaluate the port on the PR. Commit it as part of the port (typically the first commit on the branch, before the implementation), and keep it in sync if the design changes during implementation. Don't leave it untracked or add it as an after-the-fact follow-up commit.

   **Defaults to bake into the plan:**
   - Start with everything in `<Name>.tsx`. Do not split files preemptively.
   - **Don't componentize placeholder icons.** When the HTML reference shows decorative or example SVGs at icon slots (front/tail/end icons, illustrative glyphs in demos), do not create wrapper components like `<FooFrontIcon>` for them. Consumers bring their own icons of unknown shape/size, so the component can't usefully fix `width`/`viewBox`/`fill`. Instead, the component contributes only the layout / behavior classes via the slot's container, and the Story renders raw `<svg>` elements with the required slot classes attached directly. Document the required classes for each slot in the autodocs page so consumers know what to attach.
   - **Don't create pass-through wrapper components.** If an HTML reference element only carries a BEM class for styling (e.g. `<span class="dads-menu-list__label">`) and that class is replaced by Tailwind utilities in the React port, the wrapper has nothing left to do. Don't expose it as a sub-component (`<MenuListItemLabel>`) — apply the Tailwind classes directly on the parent's children, or have consumers pass the inner content as a prop / `children`. A wrapper is only justified when it owns layout / `data-*` / behavior that consumers can't sensibly attach themselves.

4. **Implement the React component** (only after the user approves the plan from Step 3)
   - Follow the rules in [`component-rules`](../component-rules/SKILL.md) (composition, native-prop extension, no logic in body, no cross-component imports, no shared config additions, styling tokens, `data-*` + `group-data-[...]` pattern).
   - Reproduce HTML markup, classes, and behavior **as-is**. Do not introduce improvements.

5. **Build the Storybook entries**
   - Follow [`component-rules`](../component-rules/SKILL.md) § _Storybook conventions_ for the basics (Playground Story, `tags: ['autodocs']`, export-name → HTML-file-name mapping).
   - Mirror the HTML Storybook layout: one Story per HTML file. Display `name` in Japanese.
   - Author the autodocs page (description or `docs.page`) following the [`write-component-docs`](../write-component-docs/SKILL.md) skill.
   - **Register the component in `.storybook/preview.ts` story sort order**, in Japanese 50音順 (gojūon). The list under `parameters.options.storySort.order > 'Component'` is ordered by each title's kana reading — insert the new title at the right position (e.g. `ボタン` falls after `プログレスインジケーター` (ぷ) and before `見出し` (み), not next to `パンくずリスト`). Re-read the surrounding entries to confirm placement.
   - **Add the component to `src/index.ts`** with `export * from './components/<Name>';`, keeping the list alphabetized.

6. **Tests**
   - Decide whether tests are needed, and follow the conventions for writing them, per [`write-tests`](../write-tests/SKILL.md) (see § _When to skip tests entirely_ for the skip rule).

7. **Run the pre-completion checklist**
   - Invoke the `pre-completion-check` skill.
   - Manually verify each Story in Storybook against the HTML reference side-by-side.

## Naming reminders

- Branch: `feature/<component-name>` (lowercase, hyphenated).
- Commit scope: component PascalCase, e.g. `feat(ProgressIndicator): ...`.
- UI copy and Story display names: Japanese. Code, types, comments: English.

## Checklist

This checklist covers only the port-specific items. The general rules in [`component-rules`](../component-rules/SKILL.md) (component design, styling, accessibility, Storybook conventions, testing, code style) apply on top — verify against that skill as well, do not assume.

### Plan

- [ ] `src/components/<Name>/component-spec.md` was written after Steps 1–2 and approved by the user before any component code was written.
- [ ] `component-spec.md` is committed to the branch (typically the first commit, before the implementation), not left untracked or added as a follow-up.
- [ ] The implementation matches the approved plan, or any deviation has been re-confirmed with the user and reflected back into `component-spec.md`.

### HTML reference parity

- [ ] Markup matches the HTML reference (element names, structure, ARIA attributes).
- [ ] Behavior matches the HTML reference. No "improvements" introduced during the port.
- [ ] No wrapper components were created for placeholder icons; the Story renders raw `<svg>` with the slot classes documented in the autodocs page.
- [ ] No pass-through wrapper components were created for HTML elements that only carried a BEM class (and whose Tailwind classes can sit on the parent or on `children`).
- [ ] Reset CSS from the HTML reference was _not_ ported (Preflight covers it — see [`component-rules`](../component-rules/SKILL.md) § _Don't re-implement Preflight_).
- [ ] `prefers-reduced-motion: reduce` and `forced-colors` handling mirror the HTML reference.
- [ ] Reference repo SHA / path noted somewhere (commit message, PR description, or `component-spec.md` if used).

### Storybook & registration

- [ ] Every HTML file has a matching Story; export name matches the HTML file name (`spinner-loop.html` → `SpinnerLoop`).
- [ ] The component's Japanese title is added to `.storybook/preview.ts` story sort order in 50音順.
- [ ] `src/index.ts` re-exports the new component (`export * from './components/<Name>';`), kept alphabetized.

### Tests

- [ ] Followed [`write-tests`](../write-tests/SKILL.md), including its § _When to skip tests entirely_ rule.

### Pre-completion

- [ ] Run the [`pre-completion-check`](../pre-completion-check/SKILL.md) skill (lint / markup lint / build / test).
- [ ] Visually verify each Story side-by-side with the HTML reference in Storybook.

## component-spec.md template (port plan)

Write this at `src/components/<Name>/component-spec.md` after Steps 1–2 and before writing any component code. The point is to surface design decisions early so the user can redirect them. Keep it brief — bullets, not prose. `component-spec.md` is a required, committed deliverable (see Step 3) — commit it as part of the port (typically the first commit, before the implementation) and keep it in sync when the design changes during implementation.

```markdown
# <Component> 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/<sha-or-branch>/<path>
- 関連ファイル:
  - `<component>.mdx` / `<component>.html` / `<component>.css` / `<component>.js`
  - `<component>.stories.ts` (Storybook)
  - `<component>.test.js`（機能テスト） / `<component>.vrt.js`（リセット CSS VRT） / `<component>.unit.js`（jsdom ユニット） — 存在するもの

## コンポーネント設計

- 公開する構成要素（例: `Foo`, `FooItem`, `FooLabel`）
- 各要素の props（型・必須/任意・デフォルト）
- ルートで持たせる `data-*` 属性とその役割
- 子要素が反応する `group-data-[...]/name` の対応関係
- コンポーネント API に**入れない**もの（プレースホルダーアイコン、アニメーション一時停止、その他）

## ファイル構成

- `<Name>.tsx`（基本これ1つ。Tailwind クラスは JSX に直書き）
- 分割が必要なら理由とともに（`types.ts` / `useFooXxx.ts` / `<Name>.css`）

## Story 構成

- HTML 版にある Story 一覧 → React 版の export 名と表示名
- 追加で必要な Story（`Playground` など）
- autodocs ページに載せる項目（仕様表、必要クラス一覧など）

## テスト方針

- テストを書く / 書かない、と理由
- 書く場合は対象ケース（focus、keyboard、event payload など）

## HTML 版との意図的な差異

- 何を / なぜ
```
