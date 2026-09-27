# 固定コンポーネント仕様スナップショット（React版）

この資料は、生成時点（2026-09-27）の `src/components/` とデザイントークンを固定した参照データである。全コンポーネントのStorybookストーリー、公開バリエーション、状態、レスポンシブ接頭辞、アクセシビリティシグナル、およびコンポーネントソース（スタイルはTailwindクラスとしてTSX内に定義される）を含む。

コンポーネントが変更された場合は、次を順に実行してこの資料を更新する。

```text
node scripts/generate-component-inventory.cjs
node scripts/embed-component-specifications.cjs
```

## 全コンポーネントのバリエーション・状態

This generated reference covers every component directory in `src/components/`. It is the required coverage checklist for component-oriented PowerPoint decks. Regenerate it after component changes with:

```text
node scripts/generate-component-inventory.cjs
```

States and modifiers are extracted heuristically from Tailwind variant prefixes, ARIA attributes, and data attributes in the component sources. Always confirm details against the component's `.tsx`, `.stories.tsx`, `.mdx`, and `component-spec.md`.

## Coverage summary

| Component | Stories | Data modifiers | Static states |
| --- | ---: | --- | --- |
| Accordion | 1 | — | hover, active / pressed, focus |
| Blockquote | 3 | — | normal |
| Breadcrumbs | 4 | — | hover, active / pressed, focus |
| Button | 16 | — | hover, active / pressed, focus, disabled |
| Calendar | 2 | data-focused=true, data-focus-visible=true, data-selected, data-[selected], data-[focus-visible] | hover, focus, disabled, checked, selected |
| Card | 6 | — | hover, active / pressed, focus, checked |
| Carousel | 4 | — | hover, focus, error, selected |
| Checkbox | 7 | data-size, data-error, data-[size=sm], data-[size=md], data-[size=lg], data-[error] | hover, focus, disabled, error, checked |
| ChipLabel | 2 | data-variant, data-color, data-[variant=text], data-[variant=outlined], data-[variant=filled-1], data-[variant=filled-2] | normal |
| DatePicker | 7 | data-size, data-error, data-readonly, data-disabled, data-[focus-visible], data-[selected], data-[size=md], data-[size=sm], data-[readonly], data-[disabled], data-[error] | hover, focus, disabled, error, checked, selected, expanded, readonly |
| Disclosure | 3 | — | hover, active / pressed, focus |
| Divider | 3 | data-color, data-[color=gray-420], data-[color=gray-536], data-[color=black] | normal |
| Dl | 4 | data-marker, data-[marker=bullet] | normal |
| Drawer | 5 | — | hover, focus |
| EmergencyBanner | 5 | — | hover, focus, error |
| ErrorText | 1 | — | error |
| FileUpload | 2 | data-dragover, data-id, data-multiple, data-error, data-has-error, data-droppable, data-[dragover=true], data-[has-error=true], data-[droppable=true], data-[multiple=true], data-[multiple=false], data-[error=true] | error, checked |
| HamburgerMenuButton | 5 | — | hover, focus, expanded |
| Heading | 1 | — | normal |
| HorizontalMenu | 1 | — | hover, focus, expanded |
| Image | 3 | data-full-width, data-bordered, data-style, data-[full-width], data-[bordered], data-[style=dashed], data-[style=solid] | hover, focus, error |
| Input | 4 | data-size, data-[size=sm], data-[size=md], data-[size=lg] | hover, focus, disabled, error, readonly |
| Label | 2 | data-size, data-[size=sm], data-[size=md], data-[size=lg] | normal |
| LanguageSelector | 7 | data-current, data-condensed, data-[condensed], data-[current] | hover, focus, expanded |
| Legend | 2 | data-size, data-[size=sm], data-[size=md], data-[size=lg] | normal |
| Link | 1 | — | hover, active / pressed, focus |
| List | 1 | data-spacing, data-marker | normal |
| MenuList | 2 | data-current, data-type, data-size, data-[size=regular], data-[size=small], data-[type=standard], data-[type=box], data-[current] | hover, focus, checked, selected, expanded |
| MenuListBox | 1 | data-size, data-style, data-text-weight, data-value, data-[size=sm], data-[size=md], data-[style=outlined], data-[style=filled], data-[text-weight=bold] | hover, focus, expanded |
| ModalDialog | 6 | data-scroll, data-[scroll=inner] | hover, focus, open |
| NotificationBanner | 11 | data-type, data-style, data-[style=standard], data-[style=color-chip], data-[type=info1], data-[type=info2], data-[type=warning], data-[type=error], data-[type=success] | hover, active / pressed, focus, error |
| PageNavigation | 6 | data-control, data-[control=prev], data-[control=next] | hover, active / pressed, focus |
| ProgressIndicator | 6 | data-type, data-indeterminate, data-indicator=spinner, data-indicator=linear, data-indicator=static, data-[type=stacked], data-[type=stacked-underlay], data-[indeterminate] | active / pressed |
| Radio | 6 | data-size, data-error, data-[size=sm], data-[size=md], data-[size=lg], data-[error] | hover, focus, disabled, error, checked |
| RequirementBadge | 1 | data-is-optional, data-[is-optional] | normal |
| ResourceList | 3 | data-style, data-interaction, data-[style=list], data-[style=frame], data-[interaction=whole] | hover, focus, disabled, checked |
| SearchBox | 2 | data-size, data-[size=sm], data-[size=md] | hover, focus, checked |
| Select | 5 | data-size, data-[size=sm], data-[size=md], data-[size=lg] | hover, focus, disabled, error |
| SeparatedDatePicker | 7 | data-size, data-[size=md], data-[size=sm], data-[focus-visible], data-[selected] | hover, focus, disabled, error, checked, selected, expanded, readonly |
| Slot | — | — | normal |
| StatusBadge | 2 | — | normal |
| StepNavigation | 2 | data-interactive, data-orientation, data-size, data-state, data-first, data-last, data-current, data-[orientation=horizontal], data-[orientation=vertical], data-[interactive], data-[size=small], data-[state=reached], data-[state=completed], data-[state=error], data-[state=skipped], data-[current] | hover, focus, error |
| SupportText | 1 | — | normal |
| Switch | 4 | — | focus, disabled, checked |
| Tab | 3 | data-position, data-[position=top], data-[position=bottom], data-[position=left], data-[position=right] | hover, focus, selected |
| Table | 16 | — | hover, focus, checked |
| Textarea | 6 | — | hover, focus, disabled, error, readonly |
| UtilityLink | 1 | — | hover, focus |

## Accordion

**Source:** `src/components/Accordion/`

### Stories

- `Example`

### Story files

- `Accordion.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `active / pressed`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Blockquote

**Source:** `src/components/Blockquote/`

### Stories

- `Playground`
- `MultipleParagraphs`
- `WithList`

### Story files

- `Blockquote.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Breadcrumbs

**Source:** `src/components/Breadcrumbs/`

### Stories

- `Example`
- `WithHomeIcon`
- `WithVisibleLabel`
- `WithSlot`

### Story files

- `Breadcrumbs.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `active / pressed`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-hidden`
- `aria-current`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Button

**Source:** `src/components/Button/`

### Stories

- `Playground`
- `AllButtons`
- `DisabledButtons`
- `LinkButtons`
- `SolidFillLG`
- `SolidFillMD`
- `SolidFillSM`
- `SolidFillXS`
- `OutlineLG`
- `OutlineMD`
- `OutlineSM`
- `OutlineXS`
- `TextLG`
- `TextMD`
- `TextSM`
- `TextXS`

### Story files

- `Button.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `active / pressed`
- `focus`
- `disabled`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-disabled`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Calendar

**Source:** `src/components/Calendar/`

### Stories

- `Static`
- `UsingReactAriaComponents`

### Story files

- `Calendar.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-focused=true`
- `data-focus-visible=true`
- `data-selected`
- `data-[selected]`
- `data-[focus-visible]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `checked`
- `selected`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-components`
- `aria-label`
- `aria-disabled`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Card

**Source:** `src/components/Card/`

### Stories

- `Example1`
- `Example2`
- `Example3`
- `Example4`
- `Example5`
- `Example6`

### Story files

- `Card.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `active / pressed`
- `focus`
- `checked`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`
- `aria-label`
- `role`
- `label`
- `alt`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Carousel

**Source:** `src/components/Carousel/`

### Stories

- `Container`
- `ContainerWithoutLinks`
- `KeyVisual`
- `KeyVisualSingle`

### Story files

- `Carousel.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`
- `error`
- `selected`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-label`
- `aria-selected`
- `aria-hidden`
- `aria-current`
- `aria-live`
- `aria-atomic`
- `role`
- `alt`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Checkbox

**Source:** `src/components/Checkbox/`

### Stories

- `Playground`
- `Standalone`
- `Stacked`
- `Inline`
- `Errored`
- `Disabled`
- `Indeterminate`

### Story files

- `Checkbox.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-error`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[size=lg]`
- `data-[error]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`
- `checked`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-disabled`
- `aria-label`
- `aria-describedby`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## ChipLabel

**Source:** `src/components/ChipLabel/`

### Stories

- `Playground`
- `AllChipLabels`

### Story files

- `ChipLabel.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-variant`
- `data-color`
- `data-[variant=text]`
- `data-[variant=outlined]`
- `data-[variant=filled-1]`
- `data-[variant=filled-2]`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## DatePicker

**Source:** `src/components/DatePicker/`

### Stories

- `Playground`
- `WithFieldset`
- `Errored`
- `Disabled`
- `Readonly`
- `WithCalendar`
- `Partial`

### Story files

- `DatePicker.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-error`
- `data-readonly`
- `data-disabled`
- `data-[focus-visible]`
- `data-[selected]`
- `data-[size=md]`
- `data-[size=sm]`
- `data-[readonly]`
- `data-[disabled]`
- `data-[error]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`
- `checked`
- `selected`
- `expanded`
- `readonly`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-components`
- `aria-describedby`
- `aria-haspopup`
- `aria-expanded`
- `aria-label`
- `aria-disabled`
- `aria-invalid`
- `aria-hidden`
- `role`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Disclosure

**Source:** `src/components/Disclosure/`

### Stories

- `Example`
- `WithLongContent`
- `MultipleLineTitle`

### Story files

- `Disclosure.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `active / pressed`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Divider

**Source:** `src/components/Divider/`

### Stories

- `Playground`
- `Solid`
- `Dash`

### Story files

- `Divider.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-color`
- `data-[color=gray-420]`
- `data-[color=gray-536]`
- `data-[color=black]`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Dl

**Source:** `src/components/Dl/`

### Stories

- `Playground`
- `Default`
- `Bullet`
- `Custom`

### Story files

- `Dl.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-marker`
- `data-[marker=bullet]`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Drawer

**Source:** `src/components/Drawer/`

### Stories

- `FullDrawer`
- `RightDrawer`
- `LeftDrawer`
- `ScrollOnlyMenuArea`
- `PreventLayoutChangeCausedByScrollbarVisibility`

### Story files

- `Drawer.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## EmergencyBanner

**Source:** `src/components/EmergencyBanner/`

### Stories

- `WithoutLink`
- `WithLink`
- `WithLinkInNewWindow`
- `Example`
- `Playground`

### Story files

- `EmergencyBanner.stories.tsx`
- `parts/Body.stories.tsx`
- `parts/Button.stories.tsx`
- `parts/Heading.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`
- `error`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## ErrorText

**Source:** `src/components/ErrorText/`

### Stories

- `Playground`

### Story files

- `ErrorText.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `error`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## FileUpload

**Source:** `src/components/FileUpload/`

### Stories

- `Playground`
- `WithExistingFiles`

### Story files

- `FileUpload.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-dragover`
- `data-id`
- `data-multiple`
- `data-error`
- `data-has-error`
- `data-droppable`
- `data-[dragover=true]`
- `data-[has-error=true]`
- `data-[droppable=true]`
- `data-[multiple=true]`
- `data-[multiple=false]`
- `data-[error=true]`

### Static states to include

- `error`
- `checked`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-describedby`
- `aria-live`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## HamburgerMenuButton

**Source:** `src/components/HamburgerMenuButton/`

### Stories

- `DesktopAndMobileCommon`
- `MobileOnly`
- `WithDrawer`
- `Example`
- `Playground`

### Story files

- `HamburgerMenuButton.stories.tsx`
- `parts/CloseIcon.stories.tsx`
- `parts/CloseWithLabelIcon.stories.tsx`
- `parts/HamburgerIcon.stories.tsx`
- `parts/HamburgerWithLabelIcon.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`
- `expanded`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-controls`
- `aria-expanded`
- `aria-labelledby`
- `aria-hidden`
- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Heading

**Source:** `src/components/Heading/`

### Stories

- `Playground`

### Story files

- `Heading.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## HorizontalMenu

**Source:** `src/components/HorizontalMenu/`

### Stories

- `Playground`

### Story files

- `HorizontalMenu.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`
- `expanded`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-expanded`
- `aria-current`
- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Image

**Source:** `src/components/Image/`

### Stories

- `Playground`
- `WithLink`
- `WithPictureElement`

### Story files

- `Image.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-full-width`
- `data-bordered`
- `data-style`
- `data-[full-width]`
- `data-[bordered]`
- `data-[style=dashed]`
- `data-[style=solid]`

### Static states to include

- `hover`
- `focus`
- `error`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `alt`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Input

**Source:** `src/components/Input/`

### Stories

- `Playground`
- `Errored`
- `Disabled`
- `Readonly`

### Story files

- `Input.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[size=lg]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`
- `readonly`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-describedby`
- `aria-disabled`
- `aria-invalid`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Label

**Source:** `src/components/Label/`

### Stories

- `Playground`
- `All`

### Story files

- `Label.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[size=lg]`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## LanguageSelector

**Source:** `src/components/LanguageSelector/`

### Stories

- `Example`
- `WithoutLabel`
- `WithPopoverAPI`
- `CondensedMenu`
- `Responsive`
- `OnlyUI`
- `Playground`

### Story files

- `LanguageSelector.stories.tsx`
- `parts/ArrowIcon.stories.tsx`
- `parts/Button.stories.tsx`
- `parts/GlobeIcon.stories.tsx`
- `parts/GlobeWithLabelIcon.stories.tsx`
- `parts/Menu.stories.tsx`
- `parts/MenuItem.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-current`
- `data-condensed`
- `data-[condensed]`
- `data-[current]`

### Static states to include

- `hover`
- `focus`
- `expanded`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-controls`
- `aria-expanded`
- `aria-hidden`
- `aria-label`
- `aria-current`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Legend

**Source:** `src/components/Legend/`

### Stories

- `Playground`
- `All`

### Story files

- `Legend.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[size=lg]`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Link

**Source:** `src/components/Link/`

### Stories

- `Example`

### Story files

- `Link.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `active / pressed`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## List

**Source:** `src/components/List/`

### Stories

- `AllLists`

### Story files

- `List.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-spacing`
- `data-marker`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## MenuList

**Source:** `src/components/MenuList/`

### Stories

- `Playground`
- `HasChildren`

### Story files

- `MenuList.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-current`
- `data-type`
- `data-size`
- `data-[size=regular]`
- `data-[size=small]`
- `data-[type=standard]`
- `data-[type=box]`
- `data-[current]`

### Static states to include

- `hover`
- `focus`
- `checked`
- `selected`
- `expanded`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-current`
- `aria-selected`
- `aria-checked`
- `aria-expanded`
- `aria-hidden`
- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## MenuListBox

**Source:** `src/components/MenuListBox/`

### Stories

- `Playground`

### Story files

- `MenuListBox.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-style`
- `data-text-weight`
- `data-value`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[style=outlined]`
- `data-[style=filled]`
- `data-[text-weight=bold]`

### Static states to include

- `hover`
- `focus`
- `expanded`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-expanded`
- `aria-controls`
- `aria-haspopup`
- `aria-hidden`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## ModalDialog

**Source:** `src/components/ModalDialog/`

### Stories

- `Playground`
- `InnerScroll`
- `InnerScrollWithFixedHeader`
- `InnerScrollWithFixedActions`
- `InnerScrollWithFixedBoth`
- `FixedWidth`

### Story files

- `ModalDialog.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-scroll`
- `data-[scroll=inner]`

### Static states to include

- `hover`
- `focus`
- `open`

### Responsive and container query prefixes

- `md:`

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Show mobile and desktop specimens with their viewport widths (mobile-first; `md:` = 768px).
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## NotificationBanner

**Source:** `src/components/NotificationBanner/`

### Stories

- `Playground`
- `StandardWithClose`
- `ColorChipWithClose`
- `StandardWithButton`
- `ColorChipWithButton`
- `StandardWithButtonMobileHoriz`
- `ColorChipWithButtonMobileHoriz`
- `MobileCompact`
- `Example`
- `WithButton`
- `WithButtonMobileHoriz`

### Story files

- `NotificationBanner.stories.tsx`
- `parts/Body.stories.tsx`
- `parts/Close.stories.tsx`
- `parts/Icon.stories.tsx`
- `parts/MobileClose.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-type`
- `data-style`
- `data-[style=standard]`
- `data-[style=color-chip]`
- `data-[type=info1]`
- `data-[type=info2]`
- `data-[type=warning]`
- `data-[type=error]`
- `data-[type=success]`

### Static states to include

- `hover`
- `active / pressed`
- `focus`
- `error`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`
- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## PageNavigation

**Source:** `src/components/PageNavigation/`

### Stories

- `Text`
- `TextLink`
- `Outlined`
- `OutlinedLink`
- `Arrow`
- `ArrowLink`

### Story files

- `PageNavigation.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-control`
- `data-[control=prev]`
- `data-[control=next]`

### Static states to include

- `hover`
- `active / pressed`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-label`
- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## ProgressIndicator

**Source:** `src/components/ProgressIndicator/`

### Stories

- `SpinnerLoop`
- `SpinnerFill`
- `LinearLoop`
- `LinearFill`
- `Static`
- `InteractiveDemo`

### Story files

- `ProgressIndicator.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-type`
- `data-indeterminate`
- `data-indicator=spinner`
- `data-indicator=linear`
- `data-indicator=static`
- `data-[type=stacked]`
- `data-[type=stacked-underlay]`
- `data-[indeterminate]`

### Static states to include

- `active / pressed`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-label`
- `aria-valuemin`
- `aria-valuemax`
- `aria-valuenow`
- `aria-hidden`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Radio

**Source:** `src/components/Radio/`

### Stories

- `Playground`
- `Standalone`
- `Stacked`
- `Inline`
- `Errored`
- `Disabled`

### Story files

- `Radio.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-error`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[size=lg]`
- `data-[error]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`
- `checked`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-disabled`
- `aria-label`
- `aria-describedby`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## RequirementBadge

**Source:** `src/components/RequirementBadge/`

### Stories

- `Playground`

### Story files

- `RequirementBadge.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-is-optional`
- `data-[is-optional]`

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## ResourceList

**Source:** `src/components/ResourceList/`

### Stories

- `Playground`
- `WithControl`
- `MultipleItems`

### Story files

- `ResourceList.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-style`
- `data-interaction`
- `data-[style=list]`
- `data-[style=frame]`
- `data-[interaction=whole]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `checked`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`
- `aria-label`
- `role`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## SearchBox

**Source:** `src/components/SearchBox/`

### Stories

- `Playground`
- `WithDetail`

### Story files

- `SearchBox.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-[size=sm]`
- `data-[size=md]`

### Static states to include

- `hover`
- `focus`
- `checked`

### Responsive and container query prefixes

- `md:`

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-hidden`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Show mobile and desktop specimens with their viewport widths (mobile-first; `md:` = 768px).
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Select

**Source:** `src/components/Select/`

### Stories

- `Playground`
- `InlineWithGrouping`
- `Errored`
- `Disabled`
- `WidthExamples`

### Story files

- `Select.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-[size=sm]`
- `data-[size=md]`
- `data-[size=lg]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-disabled`
- `aria-describedby`
- `aria-invalid`
- `aria-hidden`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## SeparatedDatePicker

**Source:** `src/components/SeparatedDatePicker/`

### Stories

- `Playground`
- `WithFieldset`
- `Errored`
- `Disabled`
- `Readonly`
- `WithCalendar`
- `Partial`

### Story files

- `SeparatedDatePicker.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-size`
- `data-[size=md]`
- `data-[size=sm]`
- `data-[focus-visible]`
- `data-[selected]`

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`
- `checked`
- `selected`
- `expanded`
- `readonly`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-label`
- `aria-expanded`
- `aria-hidden`
- `aria-disabled`
- `aria-components`
- `aria-describedby`
- `aria-haspopup`
- `aria-invalid`
- `role`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Slot

**Source:** `src/components/Slot/`

### Stories

- No exported story found; inspect the component source and MDX docs.

### Story files

- No Storybook story file in this directory.

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## StatusBadge

**Source:** `src/components/StatusBadge/`

### Stories

- `Readonly`
- `Disabled`

### Story files

- `StatusBadge.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## StepNavigation

**Source:** `src/components/StepNavigation/`

### Stories

- `PlaygroundSingle`
- `PlaygroundFull`

### Story files

- `StepNavigation.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-interactive`
- `data-orientation`
- `data-size`
- `data-state`
- `data-first`
- `data-last`
- `data-current`
- `data-[orientation=horizontal]`
- `data-[orientation=vertical]`
- `data-[interactive]`
- `data-[size=small]`
- `data-[state=reached]`
- `data-[state=completed]`
- `data-[state=error]`
- `data-[state=skipped]`
- `data-[current]`

### Static states to include

- `hover`
- `focus`
- `error`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-current`
- `aria-label`
- `aria-hidden`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## SupportText

**Source:** `src/components/SupportText/`

### Stories

- `Playground`

### Story files

- `SupportText.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `normal`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- Use native semantics and inspect source markup.

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Switch

**Source:** `src/components/Switch/`

### Stories

- `PlaygroundOnOff`
- `WithFormControlLabelOnOff`
- `PlaygroundMode`
- `WithFormControlLabelMode`

### Story files

- `Switch.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `focus`
- `disabled`
- `checked`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-disabled`
- `aria-checked`
- `aria-describedby`
- `aria-hidden`
- `role`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Tab

**Source:** `src/components/Tab/`

### Stories

- `Playground`
- `PlaygroundAria`
- `PlaygroundStatic`

### Story files

- `Tab.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- `data-position`
- `data-[position=top]`
- `data-[position=bottom]`
- `data-[position=left]`
- `data-[position=right]`

### Static states to include

- `hover`
- `focus`
- `selected`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-labelledby`
- `aria-options`
- `aria-current`
- `aria-selected`
- `aria-controls`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Table

**Source:** `src/components/Table/`

### Stories

- `FirstRowAsHeaderCell`
- `FirstColumnAsHeaderCell`
- `FirstRowAndColumnAsHeaderCell`
- `CondensedTable`
- `BorderOnRowAndColumn`
- `TableHeaderWithColspan`
- `TableHeaderWithRowspan`
- `IndentedRows`
- `StripeTable`
- `HighlightHoveredRow`
- `SelectableTable`
- `SortableHeader`
- `SortableHeaderDense`
- `LinkedTextInCell`
- `WithCaption`
- `OverflowOnMobile`

### Story files

- `Table.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`
- `checked`

### Responsive and container query prefixes

- `md:`

### Accessibility signals to preserve

- `aria-label`
- `aria-description`
- `aria-labelledby`
- `aria-hidden`
- `aria-sort`
- `aria-haspopup`
- `role`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Show mobile and desktop specimens with their viewport widths (mobile-first; `md:` = 768px).
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## Textarea

**Source:** `src/components/Textarea/`

### Stories

- `Playground`
- `Errored`
- `Disabled`
- `Readonly`
- `WithFieldSizing`
- `WithColsAndRowsAttribute`

### Story files

- `Textarea.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`
- `disabled`
- `error`
- `readonly`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-describedby`
- `aria-disabled`
- `aria-invalid`
- `label`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## UtilityLink

**Source:** `src/components/UtilityLink/`

### Stories

- `Example`

### Story files

- `UtilityLink.stories.tsx`

### Component spec

- No `component-spec.md` in this directory.

### Data modifiers and Tailwind attribute variants

- No data-* modifier found.

### Static states to include

- `hover`
- `focus`

### Responsive and container query prefixes

- 基本表示のみ（対象ソースを確認）

### Accessibility signals to preserve

- `aria-hidden`
- `aria-label`
- `role`

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] Do not imply a responsive layout change unless the source adds a responsive variant.
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.

## 全コンポーネントのソース（スタイル定義を含む）

### Accordion sources

#### `src/components/Accordion/Accordion.tsx`

```tsx
import type { ComponentProps } from 'react';

export type AccordionProps = ComponentProps<'details'>;

export const Accordion = (props: AccordionProps) => {
  const { children, className, ...rest } = props;

  return (
    <details
      className={`
        group/accordion border-b border-solid-gray-420
        [--icon-size:calc(20/16*1rem)] desktop:[--icon-size:calc(32/16*1rem)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </details>
  );
};

export type AccordionSummaryProps = ComponentProps<'summary'>;

export const AccordionSummary = (props: AccordionSummaryProps) => {
  const { children, className, ...rest } = props;

  return (
    <summary
      className={`
        group/summary relative block cursor-default py-2 pl-[calc(var(--icon-size)+(12/16*1rem))] pr-2
        marker:[content:'']
        hover:bg-solid-gray-50 focus-visible:rounded-4 focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        desktop:py-3.5 desktop:pl-[calc(var(--icon-size)+(20/16*1rem))] desktop:pr-4
        [&::-webkit-details-marker]:hidden ${className ?? ''}
      `}
      {...rest}
    >
      <span
        className={`
          absolute top-2 left-0.5 inline-flex items-center justify-center size-[var(--icon-size)] mt-[calc((1lh-var(--icon-size))/2)] border border-current bg-white text-key-1000 rounded-full
          desktop:top-3.5 desktop:left-1.5
          group-hover/summary:outline group-hover/summary:outline-2 group-hover/summary:outline-current
          group-open/accordion:rotate-180
        `}
      >
        <svg
          aria-hidden={true}
          className='pointer-events-none mt-0.5 size-4 desktop:size-auto'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <g>
            <path
              d='M16.668 5.5L10.0013 12.1667L3.33464 5.5L2.16797 6.66667L10.0013 14.5L17.8346 6.66667L16.668 5.5Z'
              fill='currentColor'
            />
          </g>
        </svg>
      </span>
      {children}
    </summary>
  );
};

export type AccordionContentProps = ComponentProps<'div'>;

export const AccordionContent = (props: AccordionContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`
        pl-[calc(var(--icon-size)+(12/16*1rem))] pr-2 py-4
        desktop:pl-[calc(var(--icon-size)+(20/16*1rem))] desktop:pr-4 desktop:py-6
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export type AccordionBackLinkProps = ComponentProps<'a'>;

export const AccordionBackLink = (props: AccordionBackLinkProps) => {
  const { className, children, href, ...rest } = props;

  return (
    <a
      className={`
        flex items-start w-fit gap-1.5
        text-blue-1000 underline underline-offset-[calc(3/16*1rem)]
        hover:text-blue-1000 hover:decoration-[calc(3/16*1rem)]
        active:text-orange-800 active:decoration-1
        focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      href={href}
      {...rest}
    >
      <svg
        aria-hidden={true}
        className='mt-[calc((1lh-24px)/2)] shrink-0'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <g>
          <path
            d='M5 7L7 7L7 14.1C7 15.15 7.33333 16.0625 8 16.8375C8.66667 17.6125 9.5 18 10.5 18C11.5 18 12.3333 17.6125 13 16.8375C13.6667 16.0625 14 15.15 14 14.1L14 7.8L11.4 10.4L10 9L15 4L20 9L18.6 10.4L16 7.8V14.1C16 15.7167 15.475 17.1042 14.425 18.2625C13.375 19.4208 12.0667 20 10.5 20C8.93333 20 7.625 19.4208 6.575 18.2625C5.525 17.1042 5 15.7167 5 14.1L5 7Z'
            fill='currentColor'
          />
        </g>
      </svg>
      {children}
    </a>
  );
};
```

#### `src/components/Accordion/index.ts`

```tsx
export {
  Accordion,
  AccordionBackLink,
  AccordionContent,
  AccordionSummary,
} from './Accordion';
```

### Blockquote sources

#### `src/components/Blockquote/Blockquote.tsx`

```tsx
import type { ComponentProps } from 'react';

type Props = ComponentProps<'blockquote'>;

export const Blockquote = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <blockquote
      className={`border-l-8 border-solid-gray-536 py-2 pl-6 pr-4 mx-10 [&>*:first-child]:!mt-0 [&>*:last-child]:!mb-0 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </blockquote>
  );
};
```

#### `src/components/Blockquote/index.ts`

```tsx
export { Blockquote } from './Blockquote';
```

### Breadcrumbs sources

#### `src/components/Breadcrumbs/Breadcrumbs.tsx`

```tsx
import type { ComponentProps } from 'react';
import { Slot } from '../Slot';

export type BreadcrumbItemProps = ComponentProps<'span'> & {
  isCurrent?: boolean;
};

export const BreadcrumbItem = ({
  isCurrent = false,
  children,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  if (isCurrent) {
    return (
      <span
        aria-current='page'
        className={`inline break-words text-oln-16N-100 ${className ?? ''}`}
        {...rest}
      >
        {children}
      </span>
    );
  }
  return (
    <span className={`inline break-words ${className ?? ''}`}>
      {children}
      <svg
        aria-hidden={true}
        className='mx-2 inline'
        fill='none'
        height='12'
        viewBox='0 0 12 12'
        width='12'
      >
        <path
          d='M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z'
          fill='currentColor'
        />
      </svg>
    </span>
  );
};

export const breadcrumbLinkStyle = `
  text-blue-1000 text-oln-16N-100 underline underline-offset-[calc(3/16*1rem)]
  hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]
  active:text-orange-800 active:decoration-1
  focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
`;

export type BreadcrumbLinkProps = {
  className?: string;
} & (({ asChild?: false } & ComponentProps<'a'>) | { asChild: true; children: React.ReactNode });

export const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
  const { asChild, children, className, ...rest } = props;

  if (asChild) {
    return (
      <Slot className={`${breadcrumbLinkStyle} ${className ?? ''}`} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={`${breadcrumbLinkStyle} ${className ?? ''}`} {...rest}>
      {children}
    </a>
  );
};

export type BreadcrumbListProps = ComponentProps<'p'>;

export const BreadcrumbList = (props: BreadcrumbListProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`inline ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};

export type BreadcrumbsLabelProps = ComponentProps<'span'>;

export const BreadcrumbsLabel = (props: BreadcrumbsLabelProps) => {
  const { children, className, ...rest } = props;

  return (
    <span className={`${className ?? ''}`} {...rest}>
      {children}
    </span>
  );
};

export type BreadcrumbsProps = ComponentProps<'nav'>;

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, className, ...rest } = props;

  return (
    <nav className={`${className ?? ''}`} {...rest}>
      {children}
    </nav>
  );
};
```

#### `src/components/Breadcrumbs/index.ts`

```tsx
export {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumbs,
  BreadcrumbsLabel,
} from './Breadcrumbs';
```

### Button sources

#### `src/components/Button/Button.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';
import { Slot } from '../Slot';

export type ButtonVariant = 'solid-fill' | 'outline' | 'text';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonBaseStyle = `
  flex items-center justify-center gap-x-1 w-fit max-w-full
  underline-offset-[calc(3/16*1rem)]
  focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
  aria-disabled:pointer-events-none aria-disabled:forced-colors:border-[GrayText] aria-disabled:forced-colors:text-[GrayText]
`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  'solid-fill': `
    border-4
    border-double
    border-transparent
    bg-key-900
    text-white
    hover:bg-key-1000
    hover:underline
    active:bg-key-1200
    active:underline
    aria-disabled:bg-solid-gray-300
    aria-disabled:text-solid-gray-50
  `,
  outline: `
    border
    border-current
    bg-white
    text-key-900
    hover:bg-key-200
    hover:text-key-1000
    hover:underline
    active:bg-key-300
    active:text-key-1200
    active:underline
    aria-disabled:bg-white
    aria-disabled:text-solid-gray-300
  `,
  text: `
    text-key-900
    underline
    hover:bg-key-50
    hover:text-key-1000
    hover:decoration-[calc(3/16*1rem)]
    active:bg-key-100
    active:text-key-1200
    focus-visible:bg-yellow-300
    aria-disabled:bg-transparent
    aria-disabled:focus-visible:bg-yellow-300
    aria-disabled:text-solid-gray-300
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: 'min-w-[calc(136/16*1rem)] min-h-14 rounded-8 px-4 py-3 text-oln-16B-100',
  md: 'min-w-24 min-h-12 rounded-8 px-4 py-2 text-oln-16B-100',
  sm: 'relative min-w-20 min-h-9 rounded-6 px-3 py-0.5 text-oln-16B-100 after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]',
  xs: 'relative min-w-18 min-h-7 rounded-4 px-2 py-0.5 text-oln-14B-100 after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]',
};

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size: ButtonSize;
} & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, children, className, variant, size, ...rest } = props;

  const classNames = `${buttonBaseStyle} ${buttonSizeStyle[size]} ${
    variant ? buttonVariantStyle[variant] : ''
  } ${className ?? ''}`;

  if (asChild) {
    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  const handleDisabled = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <button
      className={classNames}
      onClick={props['aria-disabled'] ? handleDisabled : props.onClick}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
```

#### `src/components/Button/index.ts`

```tsx
export type { ButtonProps, ButtonSize, ButtonVariant } from './Button';
export { Button, buttonBaseStyle, buttonSizeStyle, buttonVariantStyle } from './Button';
```

### Calendar sources

Component source files are not present for this component.

### Card sources

#### `src/components/Card/index.ts`

```tsx
// Card has no shared component — this package exports only Stories (examples).
// See Card.stories.tsx for the six example compositions.
export {};
```

### Carousel sources

#### `src/components/Carousel/Carousel.tsx`

```tsx
import type { ComponentProps, KeyboardEvent, Ref } from 'react';
import { Disclosure, DisclosureSummary } from '../Disclosure';

// Common Types
// ==============================

type CarouselImage = {
  src: string;
  srcSet?: string;
  alt: string;
  width: number;
  height: number;
};

export type CarouselSlide = {
  id: string;
  label: string;
  href?: string;
  target?: string;
  image: CarouselImage;
};

// Carousel Sub Components
// ==============================

type CarouselStepNavProps = {
  slides: CarouselSlide[];
  selectedIndex: number;
  unit: string;
  onStepSelect: (index: number) => void;
};

const CarouselStepNav = (props: CarouselStepNavProps) => {
  const { slides, selectedIndex, unit, onStepSelect } = props;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isNext = event.key === 'ArrowRight' || event.key === 'ArrowDown';
    const isPrev = event.key === 'ArrowLeft' || event.key === 'ArrowUp';

    if (!isNext && !isPrev) return;

    event.preventDefault();

    const direction = isNext ? 1 : -1;
    const nextIndex = (index + direction + slides.length) % slides.length;

    onStepSelect(nextIndex);

    const list = event.currentTarget.closest('[role="tablist"]');
    const tabs = list?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const target = tabs?.[nextIndex];
    target?.focus();
  };

  return (
    <ul
      className='relative flex justify-end gap-4'
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Correct tablist usage
      role='tablist'
      aria-label={`${unit}選択`}
    >
      {slides.map((slide, index) => {
        const isSelected = index === selectedIndex;
        const tabAttributes = {
          role: 'tab' as const,
          'aria-selected': isSelected,
          tabIndex: isSelected ? 0 : -1,
        };

        return (
          <li
            key={slide.id}
            className={`
              relative shrink-0
              before:absolute before:left-full before:top-1/2 before:w-4 before:border-b before:border-solid-gray-800 last:before:hidden
            `}
            role='presentation'
          >
            <button
              {...tabAttributes}
              type='button'
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`
                relative flex size-8 rounded-full cursor-default justify-center items-center border border-solid-gray-800 bg-white pb-0.5 text-solid-gray-800 font-inherit text-oln-16B-100
                after:absolute after:-inset-[calc(7/16*1rem)]
                aria-[selected=false]:underline aria-[selected=false]:decoration-1 aria-[selected=false]:underline-offset-[calc(3/16*1rem)]
                aria-[selected=false]:hover:decoration-[calc(3/16*1rem)] aria-[selected=false]:hover:cursor-pointer
                aria-[selected=true]:bg-solid-gray-800 aria-[selected=true]:text-white aria-[selected=true]:outline aria-[selected=true]:outline-1 aria-[selected=true]:outline-offset-[calc(2/16*1rem)] aria-[selected=true]:outline-solid-gray-800 aria-[selected=true]:ring-[calc(2/16*1rem)] aria-[selected=true]:ring-white
                focus-visible:outline focus-visible:!outline-4 focus-visible:!outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:!ring-yellow-300
              `}
              onClick={() => onStepSelect(index)}
            >
              <span className='sr-only'>{unit}</span>
              {index + 1}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

type CarouselPageNavProps = {
  currentIndex: number;
  total: number;
  unit: string;
  onPrev: () => void;
  onNext: () => void;
};

const CarouselPageNav = (props: CarouselPageNavProps) => {
  const { currentIndex, total, unit, onPrev, onNext } = props;
  return (
    <p className='relative m-0 flex items-center justify-end gap-3 p-0'>
      <button
        type='button'
        onClick={onPrev}
        className='
          relative flex h-6 w-6 items-center justify-center rounded-full border border-key-1000 bg-white p-0 text-key-1000
          after:absolute after:-inset-full after:m-auto after:h-11 after:w-11
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:shadow-[0_0_0_calc(2/16*1rem)_#fce16b]
        '
      >
        <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
          <path
            d='m5.27 8 5.33-5.33-.93-.94L3.4 8l6.27 6.27.93-.94L5.27 8Z'
            fill='currentColor'
          ></path>
        </svg>
        <span className='sr-only'>前の{unit}</span>
      </button>
      <span className='[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]'>
        {currentIndex + 1} / {total}
      </span>
      <button
        type='button'
        onClick={onNext}
        className={`
          relative flex h-6 w-6 items-center justify-center rounded-full border border-key-1000 bg-white p-0 text-key-1000
          after:absolute after:-inset-full after:m-auto after:h-11 after:w-11
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        `}
      >
        <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
          <path
            d='m6 1.73-.93.94L10.4 8l-5.33 5.33.93.94L12.27 8 6 1.73Z'
            fill='currentColor'
          ></path>
        </svg>
        <span className='sr-only'>次の{unit}</span>
      </button>
    </p>
  );
};

type CarouselBackgroundLayerProps = {
  className?: string;
  image: CarouselImage;
};

const CarouselBackgroundLayer = (props: CarouselBackgroundLayerProps) => {
  const { className, image } = props;

  return (
    <div
      aria-hidden={true}
      className={`absolute -inset-1/2 blur-[25px] transform-gpu pointer-events-none ${className ?? ''}`}
    >
      <img
        className='h-full w-full object-cover'
        src={image.src}
        srcSet={image.srcSet}
        alt=''
        width={image.width}
        height={image.height}
      />
      <div className='absolute inset-0 bg-white mix-blend-soft-light' />
    </div>
  );
};

type CarouselExpandListProps = {
  className?: string;
  slides: CarouselSlide[];
  otherSlides: CarouselSlide[];
  unit: string;
};

const CarouselExpandList = (props: CarouselExpandListProps) => {
  const { className, slides, otherSlides, unit } = props;
  return (
    <Disclosure className={`${className ?? ''}`}>
      <DisclosureSummary className='cursor-pointer rounded-8 border border-solid-gray-600 !bg-white px-3 py-2'>
        すべての{unit}
      </DisclosureSummary>
      <div className='mt-3 pl-0'>
        <ul className='grid list-none gap-y-6 p-0'>
          {otherSlides.map((slide) => {
            const slideIndex = slides.findIndex((item) => item.id === slide.id);

            return (
              <li
                className={`
                  relative grid [grid-template-areas:'main'] [grid-template-rows:auto] grid-cols-[auto]
                  @[64rem]:-mx-12 @[64rem]:[grid-template-areas:'number_main_next_.'] @[64rem]:[grid-template-rows:auto] @[64rem]:grid-cols-[calc(48/16*1rem)_3fr_1fr_calc(48/16*1rem)]
                  before:hidden before:[grid-area:number] before:justify-self-center before:border-r before:border-black before:h-full
                  @[64rem]:group-has-[[open]]/carousel:before:block
                `}
                key={slide.id}
              >
                <p
                  className={`
                    hidden [grid-area:number] items-center justify-center justify-self-center size-8 pb-0.5 border border-solid-gray-800 bg-white rounded-full text-solid-gray-800 text-oln-16B-100
                    @[64rem]:group-has-[[open]]/carousel:flex
                    aria-[current=true]:bg-solid-gray-800 aria-[current=true]:text-white aria-[current=true]:ring-[calc(2/16*1rem)] aria-[current=true]:ring-white aria-[current=true]:outline aria-[current=true]:outline-1 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-solid-gray-800
                    aria-[selected=true]:bg-solid-gray-800 aria-[selected=true]:text-white aria-[selected=true]:ring-[calc(2/16*1rem)] aria-[selected=true]:ring-white aria-[selected=true]:outline aria-[selected=true]:outline-1 aria-[selected=true]:outline-offset-2 aria-[selected=true]:outline-solid-gray-800
                  `}
                  aria-hidden='true'
                >
                  {slideIndex + 1}
                </p>
                <div className='[grid-area:main] relative min-w-0'>
                  <a
                    className={`
                      block relative
                      ${
                        slide.href
                          ? `
                        hover:outline hover:outline-4 hover:outline-key-900 hover:-outline-offset-1
                        focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-4 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
                        hover:after:absolute hover:after:inset-[1px] hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white hover:after:pointer-events-none
                      `
                          : ''
                      }
                    `}
                    href={slide.href}
                    target={slide.target}
                  >
                    <span className='sr-only'>{slide.label}</span>
                    <div className='grid place-content-center h-full rounded-[inherit] outline outline-2 outline-black -outline-offset-2'>
                      <img
                        className='block max-w-full size-auto'
                        src={slide.image.src}
                        srcSet={slide.image.srcSet}
                        alt={slide.image.alt}
                        width={slide.image.width}
                        height={slide.image.height}
                      />
                    </div>
                  </a>
                </div>
                <div className='[grid-area:main] relative -z-10 overflow-clip'>
                  <CarouselBackgroundLayer image={slide.image} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Disclosure>
  );
};

type CarouselPanelAreaProps = {
  currentSlide: CarouselSlide;
  nextSlide: CarouselSlide;
  currentIndex: number;
  unit: string;
  isNormal: boolean;
  onNext: () => void;
};

const CarouselPanelArea = (props: CarouselPanelAreaProps) => {
  const { currentSlide, nextSlide, currentIndex, unit, isNormal, onNext } = props;

  const mainLabel = currentSlide.label || `${unit}${currentIndex + 1}`;
  const mainPanelAttributes = isNormal ? { role: 'tabpanel', 'aria-label': mainLabel } : {};

  return (
    <div
      className={`
        relative grid [grid-template-areas:'main'] [grid-template-rows:auto] grid-cols-[auto]
        @[64rem]:-mx-12 @[64rem]:[grid-template-areas:'number_main_next_.'] @[64rem]:[grid-template-rows:auto] @[64rem]:grid-cols-[calc(48/16*1rem)_3fr_1fr_calc(48/16*1rem)]
        before:hidden before:[grid-area:number] before:justify-self-center before:border-r before:border-black before:h-full
        @[64rem]:group-has-[[open]]/carousel:before:block
      `}
    >
      <p
        className={`
          hidden [grid-area:number] items-center justify-center justify-self-center size-8 pb-0.5 border border-solid-gray-800 bg-white rounded-full text-solid-gray-800 text-oln-16B-100
          @[64rem]:group-has-[[open]]/carousel:flex
          aria-[current=true]:bg-solid-gray-800 aria-[current=true]:text-white aria-[current=true]:ring-[calc(2/16*1rem)] aria-[current=true]:ring-white aria-[current=true]:outline aria-[current=true]:outline-1 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-solid-gray-800
          aria-[selected=true]:bg-solid-gray-800 aria-[selected=true]:text-white aria-[selected=true]:ring-[calc(2/16*1rem)] aria-[selected=true]:ring-white aria-[selected=true]:outline aria-[selected=true]:outline-1 aria-[selected=true]:outline-offset-2 aria-[selected=true]:outline-solid-gray-800
        `}
        aria-current={true}
        aria-hidden={true}
      >
        {currentIndex + 1}
      </p>

      <div className='[grid-area:main] relative min-w-0' aria-live='polite' aria-atomic={true}>
        <div key={currentSlide.id} {...mainPanelAttributes}>
          <a
            className={`
              block relative
              ${
                currentSlide.href
                  ? `
                after:absolute after:pointer-events-none
                hover:outline hover:outline-4 hover:outline-key-900 hover:-outline-offset-2
                focus-visible:overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-[calc(2/16*1rem)] focus-visible:rounded-8 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
                hover:after:inset-[2px] hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white
                focus-visible:after:inset-[2px] focus-visible:after:ring-[calc(2/16*1rem)] focus-visible:after:ring-inset focus-visible:after:ring-yellow-300 focus-visible:after:rounded-6
              `
                  : ''
              }
            `}
            href={currentSlide.href}
            target={currentSlide.target}
          >
            <span className='sr-only'>{mainLabel}</span>
            <div className='grid place-content-center h-full rounded-[inherit] outline outline-2 outline-black -outline-offset-2'>
              <img
                className='block max-w-full size-auto'
                src={currentSlide.image.src}
                srcSet={currentSlide.image.srcSet}
                alt={currentSlide.image.alt}
                width={currentSlide.image.width}
                height={currentSlide.image.height}
              />
            </div>
          </a>
        </div>
      </div>

      <p
        className={`
            hidden [grid-area:next] min-w-0 p-6 border border-solid-gray-420 border-l-0
            group-has-[[open]]/carousel:!hidden @[64rem]:block
          `}
      >
        <button
          type='button'
          onClick={onNext}
          className={`
            relative border border-solid-gray-420 bg-white p-0 text-left underline underline-offset-[calc(3/16*1rem)] decoration-[calc(1/16*1rem)] cursor-pointer touch-manipulation
            hover:outline hover:outline-4 hover:outline-key-900 hover:-outline-offset-1 hover:decoration-[calc(3/16*1rem)]
            hover:after:absolute hover:after:inset-0 hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white hover:after:pointer-events-none
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-[calc(4/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          `}
        >
          <img
            className='block max-w-full size-auto'
            src={nextSlide.image.src}
            srcSet={nextSlide.image.srcSet}
            alt=''
            width={nextSlide.image.width}
            height={nextSlide.image.height}
          />

          <span className='block border-t border-solid-gray-420 p-4 text-std-16B-170 decoration-inherit'>
            次の{unit}
          </span>
        </button>
      </p>

      <div className='[grid-area:main] relative -z-10 overflow-clip'>
        <CarouselBackgroundLayer image={currentSlide.image} />
      </div>

      <div
        className={`
          hidden [grid-area:next] relative -z-10 overflow-clip
          group-has-[[open]]/carousel:!hidden @[64rem]:block
        `}
      >
        <CarouselBackgroundLayer image={nextSlide.image} />
      </div>
    </div>
  );
};

// Carousel Main Component
// ==============================

export type CarouselProps = ComponentProps<'section'> & {
  slides: CarouselSlide[];
  currentIndex: number;
  unit?: string;
  isNormal: boolean;
  innerRef: Ref<HTMLDivElement>;
  onPrev: () => void;
  onNext: () => void;
  onStepSelect: (index: number) => void;
};

export const Carousel = (props: CarouselProps) => {
  const {
    className,
    children,
    slides,
    currentIndex,
    unit = 'スライド',
    isNormal,
    innerRef,
    onPrev,
    onNext,
    onStepSelect,
    ...rest
  } = props;

  if (slides.length === 0) {
    return null;
  }

  const total = slides.length;
  const normalizedIndex = ((currentIndex % total) + total) % total;
  const currentSlide = slides[normalizedIndex];
  const nextSlide = slides[(normalizedIndex + 1) % total];
  const otherSlides =
    total > 1 ? [...slides.slice(normalizedIndex + 1), ...slides.slice(0, normalizedIndex)] : [];

  return (
    <section className={`@container group/carousel block ${className ?? ''}`} {...rest}>
      <div
        className={`
          relative z-0 max-w-[calc(1024/16*1rem)] text-solid-gray-800 text-std-16N-170
          @[64rem]:px-12
        `}
        ref={innerRef}
      >
        {children}
        <CarouselPanelArea
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          currentIndex={normalizedIndex}
          unit={unit}
          isNormal={isNormal}
          onNext={onNext}
        />

        <div className='flex items-center gap-5 py-3 group-has-[[open]]/carousel:pb-14 @[64rem]:gap-8'>
          <div className='shrink-0 group-has-[[open]]/carousel:!hidden @[64rem]:hidden'>
            <CarouselPageNav
              currentIndex={normalizedIndex}
              total={total}
              unit={unit}
              onPrev={onPrev}
              onNext={onNext}
            />
          </div>

          <div className='hidden group-has-[[open]]/carousel:!hidden @[64rem]:flex'>
            <CarouselStepNav
              slides={slides}
              selectedIndex={normalizedIndex}
              unit={unit}
              onStepSelect={onStepSelect}
            />
          </div>

          <CarouselExpandList
            className='-order-1 open:flex-1'
            slides={slides}
            otherSlides={otherSlides}
            unit={unit}
          />
        </div>
      </div>
    </section>
  );
};
```

#### `src/components/Carousel/CarouselSingle.tsx`

```tsx
import type { ComponentProps } from 'react';

export type CarouselSingleProps = ComponentProps<'div'>;

export const CarouselSingle = (props: CarouselSingleProps) => {
  const { className, children, ...rest } = props;
  return (
    <div className={`${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};

export type CarouselSingleLinkProps = ComponentProps<'a'>;

export const CarouselSingleLink = (props: CarouselSingleLinkProps) => {
  const { className, href, children, ...rest } = props;

  if (href) {
    return (
      <a
        className={`
          relative block w-fit
          after:absolute after:pointer-events-none
          hover:outline hover:outline-4 hover:outline-key-900 hover:-outline-offset-[calc(2/16*1rem)]
          hover:after:inset-[2px] hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white
          focus-visible:overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-[calc(2/16*1rem)] focus-visible:rounded-8
          focus-visible:after:inset-[2px] focus-visible:after:ring-[calc(2/16*1rem)] focus-visible:after:ring-inset focus-visible:after:ring-yellow-300 focus-visible:after:rounded-6 focus-visible:after:pointer-events-none
          ${className ?? ''}
        `}
        href={href}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return <span className={`relative block w-fit ${className ?? ''}`}>{children}</span>;
};

export type CarouselSingleImageProps = ComponentProps<'img'>;

export const CarouselSingleImage = (props: CarouselSingleImageProps) => {
  const { className, alt, ...rest } = props;
  return (
    <img
      className={`block max-w-full h-auto outline outline-2 outline-black -outline-offset-2 ${className ?? ''}`}
      alt={alt}
      {...rest}
    />
  );
};
```

#### `src/components/Carousel/index.ts`

```tsx
export type { CarouselProps, CarouselSlide } from './Carousel';
export { Carousel } from './Carousel';
export type {
  CarouselSingleImageProps,
  CarouselSingleLinkProps,
  CarouselSingleProps,
} from './CarouselSingle';
export { CarouselSingle, CarouselSingleImage, CarouselSingleLink } from './CarouselSingle';
```

### Checkbox sources

#### `src/components/Checkbox/Checkbox.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: CheckboxSize;
  isError?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, isError, onClick, size = 'sm', ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  const checkbox = (
    <span
      className={`
        flex items-center justify-center shrink-0 rounded-[calc(1/8*100%)]
        data-[size=sm]:size-6 data-[size=md]:size-8 data-[size=lg]:size-11
        has-[input:hover:not(:focus):not(:disabled):not([aria-disabled="true"])]:bg-solid-gray-420
      `}
      data-size={size}
    >
      <input
        className={`
          appearance-none size-3/4 rounded-[calc(2/18*100%)] border-solid-gray-600 bg-white bg-clip-padding
          hover:border-black
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          checked:border-key-900 checked:bg-key-900 checked:hover:border-key-1100 checked:hover:bg-key-1100
          indeterminate:border-key-900 indeterminate:bg-key-900 indeterminate:hover:border-key-1100 indeterminate:hover:bg-key-1100
          before:hidden before:size-3.5 before:bg-white
          checked:before:block checked:before:[clip-path:path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')]
          indeterminate:before:block indeterminate:before:[clip-path:path('M3.25,7.75H10.75V6.25H3.25V7.75Z')]
          data-[size=sm]:border-[calc(2/16*1rem)]
          data-[size=md]:border-[calc(2/16*1rem)] data-[size=md]:before:origin-top-left data-[size=md]:before:scale-[calc(20/14)]
          data-[size=lg]:border-[calc(3/16*1rem)] data-[size=lg]:before:origin-top-left data-[size=lg]:before:scale-[calc(27/14)]
          data-[error]:border-error-1 data-[error]:hover:border-red-1000 data-[error]:checked:bg-error-1 data-[error]:checked:hover:bg-red-1000 data-[error]:indeterminate:bg-error-1 data-[error]:indeterminate:hover:bg-red-1000
          aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:!bg-solid-gray-300 aria-disabled:indeterminate:!bg-solid-gray-300 aria-disabled:before:border-solid-gray-50
          disabled:!border-solid-gray-300 disabled:!bg-solid-gray-50 disabled:checked:!bg-solid-gray-300 disabled:indeterminate:!bg-solid-gray-300 disabled:before:border-solid-gray-50
          forced-colors:!border-[ButtonText] forced-colors:checked:!bg-[Highlight] forced-colors:checked:!border-[Highlight] forced-colors:indeterminate:!bg-[Highlight] forced-colors:indeterminate:!border-[Highlight] forced-colors:before:!bg-[HighlightText] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:!bg-[GrayText] forced-colors:disabled:!border-[GrayText] forced-colors:disabled:checked:!bg-[GrayText]
        `}
        onClick={props['aria-disabled'] ? handleDisabled : onClick}
        ref={ref}
        type='checkbox'
        data-size={size}
        data-error={isError || null}
        {...rest}
      />
    </span>
  );

  return children ? (
    <label
      className='flex w-fit items-start py-2 data-[size=sm]:gap-1 data-[size=md]:gap-2 data-[size=lg]:gap-2'
      data-size={size}
    >
      {checkbox}
      <span
        className='text-solid-gray-800 data-[size=sm]:pt-px data-[size=sm]:text-dns-16N-130 data-[size=md]:pt-1 data-[size=md]:text-dns-16N-130 data-[size=lg]:pt-2.5 data-[size=lg]:text-dns-17N-130'
        data-size={size}
      >
        {children}
      </span>
    </label>
  ) : (
    checkbox
  );
});
```

#### `src/components/Checkbox/index.ts`

```tsx
export { Checkbox } from './Checkbox';
```

### ChipLabel sources

#### `src/components/ChipLabel/ChipLabel.tsx`

```tsx
import type { ComponentProps } from 'react';

export type ChipLabelVariant = 'text' | 'outlined' | 'filled-1' | 'filled-2';
export type ChipLabelColor =
  | 'gray'
  | 'blue'
  | 'light-blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'magenta'
  | 'purple';

export type ChipLabelProps = ComponentProps<'span'> & {
  variant?: ChipLabelVariant;
  color?: ChipLabelColor;
};

// 色に関するスタイルのみ定義（共通スタイルは data-variant で適用）
const colorClasses: Record<ChipLabelVariant, Record<ChipLabelColor, string>> = {
  text: {
    gray: 'text-solid-gray-800',
    blue: 'text-blue-700',
    'light-blue': 'text-light-blue-800',
    cyan: 'text-cyan-900',
    green: 'text-green-800',
    lime: 'text-lime-900',
    yellow: 'text-yellow-1000',
    orange: 'text-orange-900',
    red: 'text-red-900',
    magenta: 'text-magenta-800',
    purple: 'text-purple-800',
  },
  outlined: {
    gray: 'border-solid-gray-700 text-solid-gray-800 bg-white',
    blue: 'border-blue-700 text-blue-700 bg-white',
    'light-blue': 'border-light-blue-800 text-light-blue-800 bg-white',
    cyan: 'border-cyan-900 text-cyan-900 bg-white',
    green: 'border-green-800 text-green-800 bg-white',
    lime: 'border-lime-900 text-lime-900 bg-white',
    yellow: 'border-yellow-1000 text-yellow-1000 bg-white',
    orange: 'border-orange-900 text-orange-900 bg-white',
    red: 'border-red-900 text-red-900 bg-white',
    magenta: 'border-magenta-800 text-magenta-800 bg-white',
    purple: 'border-purple-800 text-purple-800 bg-white',
  },
  'filled-1': {
    gray: 'border-solid-gray-700 bg-solid-gray-50 text-solid-gray-800 [&_svg]:text-solid-gray-700',
    blue: 'border-blue-700 bg-blue-50 text-blue-800 [&_svg]:text-blue-700',
    'light-blue':
      'border-light-blue-800 bg-light-blue-50 text-light-blue-900 [&_svg]:text-light-blue-800',
    cyan: 'border-cyan-900 bg-cyan-50 text-cyan-1000 [&_svg]:text-cyan-900',
    green: 'border-green-800 bg-green-50 text-green-900 [&_svg]:text-green-800',
    lime: 'border-lime-900 bg-lime-50 text-lime-1000 [&_svg]:text-lime-900',
    yellow: 'border-yellow-1000 bg-yellow-50 text-yellow-1100 [&_svg]:text-yellow-1000',
    orange: 'border-orange-900 bg-orange-50 text-orange-1000 [&_svg]:text-orange-900',
    red: 'border-red-900 bg-red-50 text-red-1000 [&_svg]:text-red-900',
    magenta: 'border-magenta-800 bg-magenta-50 text-magenta-900 [&_svg]:text-magenta-800',
    purple: 'border-purple-800 bg-purple-50 text-purple-800 [&_svg]:text-purple-800',
  },
  'filled-2': {
    gray: 'bg-solid-gray-700',
    blue: 'bg-blue-700',
    'light-blue': 'bg-light-blue-800',
    cyan: 'bg-cyan-900',
    green: 'bg-green-800',
    lime: 'bg-lime-900',
    yellow: 'bg-yellow-1000',
    orange: 'bg-orange-900',
    red: 'bg-red-900',
    magenta: 'bg-magenta-800',
    purple: 'bg-purple-800',
  },
};

export const ChipLabel = (props: ChipLabelProps) => {
  const { className, children, variant = 'text', color = 'gray', ...rest } = props;

  const colorClass = colorClasses[variant][color];

  return (
    <span
      className={`
        inline-grid grid-cols-[auto_auto] items-baseline content-center min-h-8 rounded-8 text-oln-16N-100 [overflow-wrap:anywhere]
        data-[variant=text]:py-1 data-[variant=text]:px-2
        data-[variant=outlined]:py-[calc(3/16*1rem)] data-[variant=outlined]:px-[calc(7/16*1rem)] data-[variant=outlined]:border
        data-[variant=filled-1]:py-[calc(3/16*1rem)] data-[variant=filled-1]:px-[calc(7/16*1rem)] data-[variant=filled-1]:border
        data-[variant=filled-2]:py-[calc(3/16*1rem)] data-[variant=filled-2]:px-[calc(7/16*1rem)] data-[variant=filled-2]:border data-[variant=filled-2]:border-transparent data-[variant=filled-2]:text-white
        [&_svg]:forced-colors:fill-[CanvasText]
        ${colorClass} ${className ?? ''}
      `}
      data-variant={variant}
      data-color={color}
      {...rest}
    >
      {children}
    </span>
  );
};
```

#### `src/components/ChipLabel/index.ts`

```tsx
export { ChipLabel } from './ChipLabel';
```

### DatePicker sources

#### `src/components/DatePicker/DatePicker.tsx`

```tsx
'use client';

import { type ComponentProps, type KeyboardEvent, type Ref, useRef } from 'react';

export type DatePickerSize = 'lg' | 'md' | 'sm';

export type DatePickerProps = Omit<ComponentProps<'div'>, 'children'> & {
  size?: DatePickerSize;
  isError?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  children: (props: {
    yearRef: Ref<HTMLInputElement>;
    monthRef: Ref<HTMLInputElement>;
    dateRef: Ref<HTMLInputElement>;
    readOnly?: boolean;
    'aria-disabled'?: boolean;
    'aria-invalid'?: boolean;
  }) => JSX.Element;
};

export const DatePicker = (props: DatePickerProps) => {
  const { className, size = 'lg', isError, isReadonly, isDisabled, children, ...rest } = props;

  const yearRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowRight') {
      moveRight(event);
    } else if (event.key === 'ArrowLeft') {
      moveLeft(event);
    } else if (event.key.match(/^[^0-9]$/)) {
      if (!event.ctrlKey && !event.metaKey) {
        event.preventDefault();
      }
    }
  }

  function moveRight(event: KeyboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      return;
    }
    if (input.selectionEnd === input.value.length) {
      event.preventDefault();
      if (input === yearRef.current) {
        monthRef.current?.focus();
      } else if (input === monthRef.current) {
        dateRef.current?.focus();
      }
    }
  }

  function moveLeft(event: KeyboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      return;
    }
    if (input.selectionStart === 0) {
      event.preventDefault();
      if (input === monthRef.current) {
        yearRef.current?.focus();
      } else if (input === dateRef.current) {
        monthRef.current?.focus();
      }
    }
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: For date input navigation
    <div
      className={`inline-flex h-14 -space-x-1 rounded-8 border border-solid-gray-600 bg-[--bg] p-0.5 pe-0 text-solid-gray-900 [--bg:theme(colors.white)] focus-within:border-black hover:border-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 data-[readonly]:border-dashed data-[disabled]:border-solid-gray-300 data-[error]:border-error-1 data-[disabled]:text-solid-gray-420 data-[disabled]:[--bg:theme(colors.solid-gray.50)] data-[error]:focus-within:border-red-1000 data-[error]:hover:border-red-1000 data-[error]:hover:data-[readonly]:border-error-1 hover:data-[readonly]:border-solid-gray-600 forced-colors:data-[disabled]:border-[GrayText] forced-colors:data-[disabled]:text-[GrayText] ${className ?? ''}`}
      data-size={size}
      data-error={isError || null}
      data-readonly={isReadonly || null}
      data-disabled={isDisabled || null}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children({
        yearRef,
        monthRef,
        dateRef,
        readOnly: isReadonly,
        'aria-disabled': isDisabled,
        'aria-invalid': isError,
      })}
    </div>
  );
};
```

#### `src/components/DatePicker/index.ts`

```tsx
export * from './DatePicker';
export * from './parts/DatePickerCalendarButton';
export * from './parts/DatePickerDate';
export * from './parts/DatePickerMonth';
export * from './parts/DatePickerYear';
```

#### `src/components/DatePicker/parts/DatePickerCalendarButton.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';
import type { DatePickerSize } from '../DatePicker';

export type DatePickerCalendarButtonProps = ComponentProps<'button'> & {
  size?: DatePickerSize;
};

export const DatePickerCalendarButton = forwardRef<
  HTMLButtonElement,
  DatePickerCalendarButtonProps
>((props, ref) => {
  const { className, size = 'lg', ...rest } = props;

  return (
    <button
      className={`group flex h-14 items-center justify-center gap-x-1 rounded-6 border border-key-900 bg-white px-3 text-key-900 hover:border-[calc(3/16*1rem)] hover:px-2.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[size=md]:h-12 data-[size=sm]:h-10 ${className ?? ''}`}
      type='button'
      data-size={size}
      ref={ref}
      {...rest}
    >
      <svg width='24px' height='24px' viewBox='0 -960 960 960' role='img' aria-label='カレンダー'>
        <path
          d='M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z'
          fill='currentcolor'
        />
      </svg>
      <svg className='size-4 group-aria-expanded:rotate-180' viewBox='0 0 24 24' aria-hidden={true}>
        <path d='M12 17.1L3 8L4 7L12 15L20 7L21 8L12 17.1Z' fill='currentcolor' />
      </svg>
    </button>
  );
});
```

#### `src/components/DatePicker/parts/DatePickerDate.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type DatePickerDateProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const DatePickerDate = forwardRef<HTMLInputElement, DatePickerDateProps>((props, ref) => {
  const { className, 'aria-disabled': ariaDisabled, readOnly, ...rest } = props;

  return (
    <label className='relative z-0 inline-flex flex-row-reverse last:pe-4 [&:has([aria-disabled="true"])]:pointer-events-none'>
      <span className='relative z-10 self-center bg-[--bg] p-1 text-oln-16N-100'>日</span>
      <input
        className={`-me-1 w-11 rounded-8 border border-transparent bg-transparent pe-3 text-right focus:border-solid-gray-600 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:pointer-events-none forced-colors:border-[Canvas] forced-colors:aria-disabled:focus:border-[GrayText] ${className ?? ''}`}
        type='text'
        inputMode='numeric'
        pattern='\d+'
        readOnly={ariaDisabled === 'true' || ariaDisabled === true || readOnly}
        aria-disabled={ariaDisabled}
        ref={ref}
        {...rest}
      />
    </label>
  );
});
```

#### `src/components/DatePicker/parts/DatePickerMonth.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type DatePickerMonthProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const DatePickerMonth = forwardRef<HTMLInputElement, DatePickerMonthProps>((props, ref) => {
  const { className, 'aria-disabled': ariaDisabled, readOnly, ...rest } = props;

  return (
    <label className='relative z-0 inline-flex flex-row-reverse last:pe-4 [&:has([aria-disabled="true"])]:pointer-events-none'>
      <span className='relative z-10 self-center bg-[--bg] p-1 text-oln-16N-100'>月</span>
      <input
        className={`-me-1 w-11 rounded-8 border border-transparent bg-transparent pe-3 text-right focus:border-solid-gray-600 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:pointer-events-none forced-colors:border-[Canvas] forced-colors:aria-disabled:focus:border-[GrayText] ${className ?? ''}`}
        type='text'
        inputMode='numeric'
        pattern='\d+'
        readOnly={ariaDisabled === 'true' || ariaDisabled === true || readOnly}
        aria-disabled={ariaDisabled}
        ref={ref}
        {...rest}
      />
    </label>
  );
});
```

#### `src/components/DatePicker/parts/DatePickerYear.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type DatePickerYearProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const DatePickerYear = forwardRef<HTMLInputElement, DatePickerYearProps>((props, ref) => {
  const { className, 'aria-disabled': ariaDisabled, readOnly, ...rest } = props;

  return (
    <label className='relative z-0 inline-flex flex-row-reverse last:pe-4 [&:has([aria-disabled="true"])]:pointer-events-none'>
      <span className='relative z-10 self-center bg-[--bg] p-1 text-oln-16N-100'>年</span>
      <input
        className={`-me-1 w-16 rounded-8 border border-transparent bg-transparent pe-3 text-right focus:border-solid-gray-600 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:pointer-events-none forced-colors:border-[Canvas] forced-colors:aria-disabled:focus:border-[GrayText] ${className ?? ''}`}
        type='text'
        inputMode='numeric'
        pattern='\d+'
        readOnly={ariaDisabled === 'true' || ariaDisabled === true || readOnly}
        aria-disabled={ariaDisabled}
        ref={ref}
        {...rest}
      />
    </label>
  );
});
```

### Disclosure sources

#### `src/components/Disclosure/Disclosure.tsx`

```tsx
import type { ComponentProps } from 'react';

export type DisclosureProps = ComponentProps<'details'>;

export const Disclosure = (props: DisclosureProps) => {
  const { children, className, ...rest } = props;

  return (
    <details className={`group/disclosure ${className ?? ''}`} {...rest}>
      {children}
    </details>
  );
};

export type DisclosureSummaryProps = ComponentProps<'summary'>;

export const DisclosureSummary = (props: DisclosureSummaryProps) => {
  const { children, className, ...rest } = props;

  return (
    <summary
      className={`
        group/summary flex w-fit cursor-default list-none items-start justify-start gap-2
        hover:underline hover:underline-offset-[calc(3/16*1rem)]
        focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        [&::-webkit-details-marker]:hidden ${className ?? ''}
      `}
      {...rest}
    >
      <svg
        aria-hidden={true}
        className={`
          flex-none text-key-1000 mt-[calc((1lh-24px)/2)]
          group-open/disclosure:rotate-180
          forced-colors:text-inherit
        `}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <circle className='fill-white forced-colors:fill-[Canvas]' cx='12' cy='12' r='10' />
        <g className='group-hover/summary:hidden'>
          <path
            d='M12 15.525L16.925 10.625H7.07502L12 15.525ZM12 22.85C10.4834 22.85 9.06677 22.566 7.75027 21.998C6.43394 21.4298 5.28886 20.6588 4.31502 19.685C3.34119 18.7112 2.57019 17.5661 2.00202 16.2498C1.43402 14.9333 1.15002 13.5167 1.15002 12C1.15002 10.4833 1.43402 9.06675 2.00202 7.75025C2.57019 6.43392 3.34119 5.28883 4.31502 4.315C5.28886 3.34117 6.43394 2.57017 7.75027 2.002C9.06677 1.434 10.4834 1.15 12 1.15C13.5167 1.15 14.9333 1.434 16.2498 2.002C17.5661 2.57017 18.7112 3.34117 19.685 4.315C20.6589 5.28883 21.4299 6.43392 21.998 7.75025C22.566 9.06675 22.85 10.4833 22.85 12C22.85 13.5167 22.566 14.9333 21.998 16.2498C21.4299 17.5661 20.6589 18.7112 19.685 19.685C18.7112 20.6588 17.5661 21.4298 16.2498 21.998C14.9333 22.566 13.5167 22.85 12 22.85Z'
            fill='currentColor'
          />
        </g>
        <g className='hidden group-hover/summary:inline'>
          <path
            d='M12 15.525L16.925 10.625H7.07502L12 15.525ZM12 22.85C10.4834 22.85 9.06677 22.566 7.75027 21.998C6.43394 21.4298 5.28886 20.6588 4.31502 19.685C3.34119 18.7112 2.57019 17.5661 2.00202 16.2498C1.43402 14.9333 1.15002 13.5167 1.15002 12C1.15002 10.4833 1.43402 9.06675 2.00202 7.75025C2.57019 6.43392 3.34119 5.28883 4.31502 4.315C5.28886 3.34117 6.43394 2.57017 7.75027 2.002C9.06677 1.434 10.4834 1.15 12 1.15C13.5167 1.15 14.9333 1.434 16.2498 2.002C17.5661 2.57017 18.7112 3.34117 19.685 4.315C20.6589 5.28883 21.4299 6.43392 21.998 7.75025C22.566 9.06675 22.85 10.4833 22.85 12C22.85 13.5167 22.566 14.9333 21.998 16.2498C21.4299 17.5661 20.6589 18.7112 19.685 19.685C18.7112 20.6588 17.5661 21.4298 16.2498 21.998C14.9333 22.566 13.5167 22.85 12 22.85ZM12 19.7C14.1667 19.7 15.9917 18.9583 17.475 17.475C18.9584 15.9917 19.7 14.1667 19.7 12C19.7 9.83334 18.9584 8.00833 17.475 6.525C15.9917 5.04167 14.1667 4.3 12 4.3C9.83336 4.3 8.00836 5.04167 6.52502 6.525C5.04169 8.00833 4.30002 9.83334 4.30002 12C4.30002 14.1667 5.04169 15.9917 6.52502 17.475C8.00836 18.9583 9.83336 19.7 12 19.7Z'
            fill='currentColor'
          />
        </g>
      </svg>
      {children}
    </summary>
  );
};

export type DisclosureBackLinkProps = ComponentProps<'a'>;

export const DisclosureBackLink = (props: DisclosureBackLinkProps) => {
  const { className, children, href, ...rest } = props;

  return (
    <a
      className={`
        flex items-start w-fit gap-1.5
        text-blue-1000 underline underline-offset-[calc(3/16*1rem)]
        hover:text-blue-1000 hover:decoration-[calc(3/16*1rem)]
        active:text-orange-800 active:decoration-1
        focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      href={href}
      {...rest}
    >
      <svg
        aria-hidden={true}
        className='mt-[calc((1lh-24px)/2)] shrink-0'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <g>
          <path
            d='M5 7L7 7L7 14.1C7 15.15 7.33333 16.0625 8 16.8375C8.66667 17.6125 9.5 18 10.5 18C11.5 18 12.3333 17.6125 13 16.8375C13.6667 16.0625 14 15.15 14 14.1L14 7.8L11.4 10.4L10 9L15 4L20 9L18.6 10.4L16 7.8V14.1C16 15.7167 15.475 17.1042 14.425 18.2625C13.375 19.4208 12.0667 20 10.5 20C8.93333 20 7.625 19.4208 6.575 18.2625C5.525 17.1042 5 15.7167 5 14.1L5 7Z'
            fill='currentColor'
          />
        </g>
      </svg>
      {children}
    </a>
  );
};
```

#### `src/components/Disclosure/index.ts`

```tsx
export { Disclosure, DisclosureBackLink, DisclosureSummary } from './Disclosure';
```

### Divider sources

#### `src/components/Divider/Divider.tsx`

```tsx
import type { ComponentProps } from 'react';

export type DividerColor = 'gray-420' | 'gray-536' | 'black';

export type DividerProps = ComponentProps<'hr'> & {
  color?: DividerColor;
};

export const Divider = (props: DividerProps) => {
  const { className, color = 'gray-420', ...rest } = props;

  return (
    <hr
      className={`
        data-[color=gray-420]:border-solid-gray-420 data-[color=gray-536]:border-solid-gray-536 data-[color=black]:border-black
        ${className ?? ''}
      `}
      data-color={color}
      {...rest}
    ></hr>
  );
};
```

#### `src/components/Divider/index.ts`

```tsx
export { Divider } from './Divider';
```

### Dl sources

#### `src/components/Dl/Dl.tsx`

```tsx
import type { ComponentProps } from 'react';

type DlProps = ComponentProps<'dl'> & {
  marker?: 'none' | 'bullet';
};

export const Dl = (props: DlProps) => {
  const { children, className, marker, ...rest } = props;
  return (
    <dl className={`group/dl grid gap-y-2 ${className ?? ''}`} data-marker={marker} {...rest}>
      {children}
    </dl>
  );
};

type DtProps = ComponentProps<'dt'>;

export const Dt = (props: DtProps) => {
  const { children, className, ...rest } = props;
  return (
    <dt
      className={`font-bold group-data-[marker=bullet]/dl:ml-8 group-data-[marker=bullet]/dl:list-item group-data-[marker=bullet]/dl:list-disc ${className ?? ''}`}
      {...rest}
    >
      {children}
    </dt>
  );
};

type DdProps = ComponentProps<'dd'>;

export const Dd = (props: DdProps) => {
  const { children, className, ...rest } = props;
  return (
    <dd className={`ml-8 ${className ?? ''}`} {...rest}>
      {children}
    </dd>
  );
};
```

#### `src/components/Dl/index.ts`

```tsx
export {
  Dd,
  Dl,
  Dt,
} from './Dl';
```

### Drawer sources

Component source files are not present for this component.

### EmergencyBanner sources

#### `src/components/EmergencyBanner/EmergencyBanner.tsx`

```tsx
import type { ComponentProps } from 'react';

export const bannerBodyStyle =
  'block px-2.5 py-3.5 border-[6px] bg-white desktop:p-[calc(26/16*1rem)] border-warning-orange-1';

type Props = ComponentProps<'div'>;

export const EmergencyBanner = (props: Props) => {
  const { className, children } = props;

  return <div className={`${bannerBodyStyle} ${className ?? ''}`}>{children}</div>;
};
```

#### `src/components/EmergencyBanner/index.ts`

```tsx
export { EmergencyBanner } from './EmergencyBanner';
export { EmergencyBannerBody } from './parts/Body';
export { EmergencyBannerButton } from './parts/Button';
export { EmergencyBannerHeading } from './parts/Heading';
```

#### `src/components/EmergencyBanner/parts/Body.tsx`

```tsx
import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export const EmergencyBannerBody = (props: Props) => {
  const { className, children } = props;

  return <div className={`mt-2 desktop:mt-4 ${className ?? ''}`}>{children}</div>;
};
```

#### `src/components/EmergencyBanner/parts/Button.tsx`

```tsx
import type { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;

export const EmergencyBannerButton = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <a
      className={`
        relative block mx-auto p-[calc(18/16*1rem)] w-full border-2 border-transparent bg-error-1 text-white text-oln-16B-100 text-center rounded-12
        desktop:p-5 desktop:w-fit desktop:min-w-[50%] desktop:border-4 desktop:rounded-16
        after:absolute after:inset-0 after:border-2 after:border-white after:rounded-[calc(10/16*1rem)]
        desktop:after:border-4 desktop:after:rounded-12
        hover:underline hover:underline-offset-[calc(3/16*1rem)] hover:bg-error-2
        focus-visible:outline focus-visible:outline-[calc(4/16*1rem)] focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
      {props.target === '_blank' && <NewWindowIcon className='ml-1 align-top' />}
    </a>
  );
};

type NewWindowIconProps = ComponentProps<'svg'>;

const NewWindowIcon = (props: NewWindowIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-label={`${rest['aria-label'] ?? '新規タブで開きます'}`}
      className={`inline ${className ?? ''}`}
      fill='none'
      height='16'
      role='img'
      viewBox='0 0 16 16'
      width='16'
    >
      <g>
        <path
          clipRule='evenodd'
          d='M3 13.5H13V9.16667H14V14.5H2V2.5H7.33333V3.5H3V13.5ZM9.33333 3.5V2.5H14V7.16667H13V4.23333L7 10.1667L6.33333 9.5L12.2667 3.5H9.33333Z'
          fillRule='evenodd'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
```

#### `src/components/EmergencyBanner/parts/Heading.tsx`

```tsx
import type { ComponentProps } from 'react';

export type EmergencyBannerHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type EmergencyBannerHeadingProps = ComponentProps<'h2'> & {
  level: EmergencyBannerHeadingLevel;
};

export const EmergencyBannerHeading = (props: EmergencyBannerHeadingProps) => {
  const { level, className, children, ...rest } = props;
  const Tag = level;

  return (
    <Tag
      className={`
        text-std-20B-150 text-black desktop:text-std-24B-150
        ${className ?? ''}
      `}
      {...rest}
    >
      【緊急】
      {children}
    </Tag>
  );
};
```

### ErrorText sources

#### `src/components/ErrorText/ErrorText.tsx`

```tsx
import type { ComponentProps } from 'react';

export type ErrorTextProps = ComponentProps<'p'>;

export const ErrorText = (props: ErrorTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-dns-16N-130 text-error-1 ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};
```

#### `src/components/ErrorText/index.ts`

```tsx
export { ErrorText } from './ErrorText';
```

### FileUpload sources

#### `src/components/FileUpload/FileUpload.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';
import { createPortal } from 'react-dom';

export type FileUploadProps = ComponentProps<'div'> & {
  maxFiles?: number;
  hasError?: boolean;
  droppable?: boolean;
};

export const FileUpload = (props: FileUploadProps) => {
  const { children, className, maxFiles = 1, hasError = false, droppable = false, ...rest } = props;

  const isMultiple = maxFiles > 1;

  return (
    <div
      className={`
        group/file-upload
        text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]
        ${className ?? ''}
      `}
      data-multiple={isMultiple ? 'true' : 'false'}
      data-has-error={hasError ? 'true' : undefined}
      data-droppable={droppable ? 'true' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export type FileUploadInputProps = Omit<ComponentProps<'input'>, 'type'>;

export const FileUploadInput = forwardRef<HTMLInputElement, FileUploadInputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      type='file'
      className={`
        hidden
        ${className ?? ''}
      `}
      {...rest}
    />
  );
});

export type FileUploadDropAreaProps = ComponentProps<'div'> & {
  isDragOver?: boolean;
};

export const FileUploadDropArea = (props: FileUploadDropAreaProps) => {
  const { children, className, isDragOver = false, ...rest } = props;

  return (
    <div
      className={`
        group/drop-area
        rounded-8 p-8 border border-solid-gray-536 bg-solid-gray-50
        group-data-[has-error=true]/file-upload:border-error-1
        data-[dragover=true]:outline data-[dragover=true]:outline-4 data-[dragover=true]:outline-success-1 data-[dragover=true]:-outline-offset-4 data-[dragover=true]:bg-green-50
        ${className ?? ''}
      `}
      data-dragover={isDragOver ? 'true' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export type FileUploadFileListProps = ComponentProps<'ul'>;

export const FileUploadFileList = (props: FileUploadFileListProps) => {
  const { children, className, ...rest } = props;

  return (
    <ul
      className={`
        mt-4 p-0 list-none [counter-reset:file-item]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  );
};

export type FileUploadFileItemProps = ComponentProps<'li'> & {
  hasError?: boolean;
};

export const FileUploadFileItem = (props: FileUploadFileItemProps) => {
  const { children, className, hasError = false, ...rest } = props;

  return (
    <li
      className={`
        group/file-item
        flex items-baseline [counter-increment:file-item]
        [&+&]:mt-1
        ${className ?? ''}
      `}
      data-error={hasError ? 'true' : undefined}
      {...rest}
    >
      {children}
    </li>
  );
};

export type FileUploadFileMarkerProps = ComponentProps<'div'>;

export const FileUploadFileMarker = (props: FileUploadFileMarkerProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={`
        shrink-0
        group-data-[multiple=true]/file-upload:w-8
        group-data-[multiple=true]/file-upload:before:content-[counter(file-item)'.']
        group-data-[multiple=false]/file-upload:flex group-data-[multiple=false]/file-upload:self-start group-data-[multiple=false]/file-upload:justify-center group-data-[multiple=false]/file-upload:items-center group-data-[multiple=false]/file-upload:w-6 group-data-[multiple=false]/file-upload:h-[calc(30/16*1rem)]
        group-data-[multiple=false]/file-upload:before:w-1.5 group-data-[multiple=false]/file-upload:before:h-1.5 group-data-[multiple=false]/file-upload:before:rounded-full group-data-[multiple=false]/file-upload:before:bg-current group-data-[multiple=false]/file-upload:before:content-['']
        group-data-[multiple=false]/file-upload:forced-colors:before:bg-[CanvasText]
        ${className ?? ''}
      `}
      {...rest}
    />
  );
};

export type FileUploadFileInfoProps = ComponentProps<'div'>;

export const FileUploadFileInfo = (props: FileUploadFileInfoProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`
        flex-1 min-w-0
        group-data-[error=true]/file-item:border-l-4 group-data-[error=true]/file-item:border-error-1 group-data-[error=true]/file-item:pl-2 group-data-[error=true]/file-item:text-error-1
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export type FileUploadFileNameProps = ComponentProps<'span'>;

export const FileUploadFileName = (props: FileUploadFileNameProps) => {
  const { children, className, ...rest } = props;

  return (
    <span className={`mr-4 font-bold ${className ?? ''}`} {...rest}>
      {children}
    </span>
  );
};

export type FileUploadFileMetaProps = ComponentProps<'span'>;

export const FileUploadFileMeta = (props: FileUploadFileMetaProps) => {
  const { children, className, ...rest } = props;

  return (
    <span
      className={`
        text-solid-gray-600
        group-data-[error=true]/file-item:text-inherit
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

export type FileUploadViewportOverlayProps = ComponentProps<'div'>;

export const FileUploadViewportOverlay = (props: FileUploadViewportOverlayProps) => {
  const { children, className, ...rest } = props;

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className={`
        fixed inset-0 z-[9999] border-4 border-success-1 bg-green-50
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>,
    document.body,
  );
};

export type FileUploadViewportOverlayMessageProps = ComponentProps<'div'>;

export const FileUploadViewportOverlayMessage = (props: FileUploadViewportOverlayMessageProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`
        flex justify-center content-center flex-wrap box-border w-full h-full p-[calc(2rem-4px)]
        text-[clamp(calc(18/16*1rem),0.75rem+1.875vw,calc(48/16*1rem))] font-bold pointer-events-none
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
```

#### `src/components/FileUpload/hooks/index.ts`

```tsx
export type { UseFileDropOptions } from './useFileDrop';
export { useFileDrop } from './useFileDrop';
export type { UseFileStateOptions } from './useFileState';
export { useFileState } from './useFileState';
export type { UseFileUploadOptions } from './useFileUpload';
export { useFileUpload } from './useFileUpload';
```

#### `src/components/FileUpload/hooks/useFileDrop.ts`

```tsx
import { type DragEvent, type RefObject, useEffect, useRef, useState } from 'react';
import { fileUploadDefaultMessages } from '../messages';
import type { FileUploadMessages } from '../types';

export type UseFileDropOptions = {
  /** ドラッグ＆ドロップを有効化 */
  droppable?: boolean;
  /** 全画面ドロップエリアを有効化 */
  dropAreaExpandable?: boolean;
  /** ファイル追加時のコールバック */
  onFilesAdded: (files: File[]) => void;
  /** フォーカスを戻すためのref */
  focusTargetRef?: RefObject<HTMLElement | null>;
  /** カスタムメッセージ */
  messages?: FileUploadMessages;
};

// 全画面ドロップエリアの排他制御用
const expandedDropAreaState = {
  activeCallback: null as (() => void) | null,
};

const registerExpandedDropArea = (callback: () => void) => {
  if (expandedDropAreaState.activeCallback && expandedDropAreaState.activeCallback !== callback) {
    expandedDropAreaState.activeCallback();
  }
  expandedDropAreaState.activeCallback = callback;
};

const unregisterExpandedDropArea = (callback: () => void) => {
  if (expandedDropAreaState.activeCallback === callback) {
    expandedDropAreaState.activeCallback = null;
  }
};

export const useFileDrop = (options: UseFileDropOptions) => {
  const {
    dropAreaExpandable = false,
    onFilesAdded,
    focusTargetRef,
    messages: customMessages,
  } = options;

  const messages = customMessages ?? fileUploadDefaultMessages;

  const [isDragOver, setIsDragOver] = useState(false);
  const [isExpandedDropArea, setIsExpandedDropArea] = useState(false);
  const [showViewportOverlay, setShowViewportOverlay] = useState(false);
  const [announcerText, setAnnouncerText] = useState('');
  const [announcerAssertiveText, setAnnouncerAssertiveText] = useState('');

  const dragCounterRef = useRef(0);
  const announcerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragOverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropAnnounceIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const collapseCallbackRef = useRef(() => setIsExpandedDropArea(false));

  const announceText = (text: string, assertive = false) => {
    if (announcerTimerRef.current) {
      clearTimeout(announcerTimerRef.current);
    }

    const setText = assertive ? setAnnouncerAssertiveText : setAnnouncerText;

    setText('');
    announcerTimerRef.current = setTimeout(() => {
      setText(text);
      announcerTimerRef.current = setTimeout(() => {
        setText('');
      }, 1000);
    }, 100);
  };

  const stopDropAnnounce = () => {
    if (dropAnnounceIntervalRef.current) {
      clearInterval(dropAnnounceIntervalRef.current);
      dropAnnounceIntervalRef.current = null;
    }
  };

  const startDropAnnounce = () => {
    stopDropAnnounce();
    const message = messages.announce.dropAvailable;
    announceText(message, true);

    dropAnnounceIntervalRef.current = setInterval(() => {
      announceText(message);
    }, 3000);
  };

  const handleExpandedDropAreaChange = (checked: boolean) => {
    setIsExpandedDropArea(checked);
    if (checked) {
      registerExpandedDropArea(collapseCallbackRef.current);
    } else {
      unregisterExpandedDropArea(collapseCallbackRef.current);
    }
  };

  // ドロップエリア用ハンドラ
  const handleDragEnter = () => {
    dragCounterRef.current++;
    if (dragCounterRef.current === 1) {
      setIsDragOver(true);
      startDropAnnounce();
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = () => {
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragOver(false);
      stopDropAnnounce();
      announceText(messages.announce.dropUnavailable, true);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDragOver(false);
    stopDropAnnounce();

    const fileList = Array.from(e.dataTransfer?.files || []);
    onFilesAdded(fileList);
    focusTargetRef?.current?.focus();
  };

  // ビューポートオーバーレイ用ハンドラ
  const handleViewportDragEnter = () => {
    dragCounterRef.current++;
    if (dragCounterRef.current === 1) {
      startDropAnnounce();
    }
  };

  const handleViewportDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';

    if (dragOverTimerRef.current) {
      clearTimeout(dragOverTimerRef.current);
    }

    dragOverTimerRef.current = setTimeout(() => {
      if (showViewportOverlay) {
        dragCounterRef.current = 0;
        setShowViewportOverlay(false);
      }
    }, 300);
  };

  const handleViewportDragLeave = () => {
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setShowViewportOverlay(false);
      stopDropAnnounce();
      announceText(messages.announce.dropUnavailable, true);
    }
  };

  const handleViewportDrop = (e: DragEvent) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setShowViewportOverlay(false);
    stopDropAnnounce();

    const fileList = Array.from(e.dataTransfer?.files || []);
    onFilesAdded(fileList);
    focusTargetRef?.current?.focus();
  };

  // ドキュメント全体のドラッグオーバーイベント
  useEffect(() => {
    if (!dropAreaExpandable) return;

    const handleDocumentDragOver = (e: globalThis.DragEvent) => {
      if (isExpandedDropArea) {
        e.preventDefault();
        setShowViewportOverlay(true);
      }
    };

    document.documentElement.addEventListener('dragover', handleDocumentDragOver);
    return () => {
      document.documentElement.removeEventListener('dragover', handleDocumentDragOver);
    };
  }, [dropAreaExpandable, isExpandedDropArea]);

  // クリーンアップ
  // biome-ignore lint/correctness/useExhaustiveDependencies: クリーンアップは初回マウント時のみ実行
  useEffect(() => {
    return () => {
      if (announcerTimerRef.current) {
        clearTimeout(announcerTimerRef.current);
      }
      if (dragOverTimerRef.current) {
        clearTimeout(dragOverTimerRef.current);
      }
      stopDropAnnounce();
      // 全画面ドロップエリアの登録解除
      unregisterExpandedDropArea(collapseCallbackRef.current);
    };
  }, []);

  return {
    // State
    isDragOver,
    isExpandedDropArea,
    showViewportOverlay,
    announcerText,
    announcerAssertiveText,

    // Handlers
    handleExpandedDropAreaChange,

    // Drop area handlers
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,

    // Viewport overlay handlers
    handleViewportDragEnter,
    handleViewportDragOver,
    handleViewportDragLeave,
    handleViewportDrop,
  };
};
```

#### `src/components/FileUpload/hooks/useFileState.ts`

```tsx
import { type ChangeEvent, useRef, useState } from 'react';
import { fileUploadDefaultMessages } from '../messages';
import type { FileInfo, FileUploadMessages } from '../types';
import { isFileTypeAllowed, parseAcceptAttribute, parseSize } from '../utils';

export type UseFileStateOptions = {
  /** 選択可能なファイル数の上限 */
  maxFiles?: number;
  /** 1ファイルあたりの最大サイズ（例: "5MB"） */
  maxFileSize?: string;
  /** 合計の最大サイズ（例: "10MB"） */
  maxTotalSize?: string;
  /** 許可するファイル形式（accept属性形式） */
  accept?: string;
  /** 初期ファイル一覧 */
  initialFiles?: FileInfo[];
  /** カスタムメッセージ */
  messages?: FileUploadMessages;
};

export const useFileState = (options: UseFileStateOptions = {}) => {
  const {
    maxFiles = 1,
    maxFileSize,
    maxTotalSize,
    accept = '',
    initialFiles = [],
    messages: customMessages,
  } = options;

  const messages = customMessages ?? fileUploadDefaultMessages;

  const [files, setFiles] = useState<FileInfo[]>(initialFiles);
  const [errors, setErrors] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectButtonRef = useRef<HTMLButtonElement>(null);

  const maxFileSizeBytes = maxFileSize ? parseSize(maxFileSize) : null;
  const maxTotalSizeBytes = maxTotalSize ? parseSize(maxTotalSize) : null;
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  const hasError = errors.length > 0;
  const isMultiple = maxFiles > 1;

  // VoiceOver + Safari でaria-describedbyのキャッシュ問題を回避するためのキー
  // 選択ファイルサマリー要素のIDサフィックスとして使用することで、変更時にIDが変わりキャッシュが無効化される
  const selectionSummarySuffix = `${files.length}-${totalSize}`;

  const validateFiles = (
    fileList: FileInfo[],
  ): { errors: string[]; validatedFiles: FileInfo[] } => {
    const newErrors: string[] = [];
    const validatedFiles = fileList.map((f) => ({
      ...f,
      errors: f.isExisting ? f.errors : [],
    }));

    const newFiles = validatedFiles.filter((f) => !f.isExisting);

    if (fileList.length > maxFiles) {
      newErrors.push(messages.error.maxFiles);
    }

    const allowedExtensions = parseAcceptAttribute(accept);
    const fileTotalSize = fileList.reduce((sum, f) => sum + (f.size || 0), 0);

    newFiles.forEach((fileInfo) => {
      if (allowedExtensions.length > 0 && fileInfo.file) {
        const mimeType = fileInfo.file.type;

        if (!isFileTypeAllowed(fileInfo.name, mimeType, allowedExtensions)) {
          fileInfo.errors = fileInfo.errors || [];
          fileInfo.errors.push(messages.error.invalidType);
        }
      }

      if (maxFileSizeBytes !== null && fileInfo.size > maxFileSizeBytes) {
        fileInfo.errors = fileInfo.errors || [];
        fileInfo.errors.push(messages.error.maxFileSize);
      }
    });

    if (maxTotalSizeBytes !== null && fileTotalSize > maxTotalSizeBytes) {
      newErrors.push(messages.error.maxTotalSize);
    }

    const hasFileErrors = validatedFiles.some((f) => f.errors && f.errors.length > 0);
    if (hasFileErrors) {
      newErrors.unshift(messages.error.hasFileErrors);
    }

    return { errors: newErrors, validatedFiles };
  };

  const addFiles = (newFileList: File[]) => {
    const filesToAdd = isMultiple ? newFileList : newFileList.slice(0, 1);

    // 単一ファイルモードで既存ファイルがある場合は置き換え
    const existingFiles = !isMultiple && files.length > 0 ? [] : files;

    const newFiles: FileInfo[] = filesToAdd.map((file) => ({
      id: `file-${Math.random().toString(36).slice(-8)}`,
      file: file,
      name: file.name,
      size: file.size,
      isExisting: false,
      errors: [],
    }));

    const updatedFiles = [...existingFiles, ...newFiles];
    const { errors: newErrors, validatedFiles } = validateFiles(updatedFiles);
    setFiles(validatedFiles);
    setErrors(newErrors);
  };

  const removeFile = (fileId: string, index: number) => {
    const updatedFiles = files.filter((f) => f.id !== fileId);
    const { errors: newErrors, validatedFiles } = validateFiles(updatedFiles);
    setFiles(validatedFiles);
    setErrors(newErrors);

    if (updatedFiles.length === 0) {
      selectButtonRef.current?.focus();
    } else if (index < updatedFiles.length) {
      const nextButton = document.getElementById(`${updatedFiles[index].id}-remove`);
      nextButton?.focus();
    } else {
      const lastButton = document.getElementById(
        `${updatedFiles[updatedFiles.length - 1].id}-remove`,
      );
      lastButton?.focus();
    }
  };

  const handleSelectButtonClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    addFiles(fileList);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    selectButtonRef.current?.focus();
  };

  return {
    // State
    files,
    errors,
    totalSize,
    hasError,
    isMultiple,
    maxFileSizeBytes,
    maxTotalSizeBytes,
    selectionSummarySuffix,

    // Refs
    inputRef,
    selectButtonRef,

    // Actions
    setFiles,
    setErrors,
    addFiles,
    removeFile,
    validateFiles,

    // Handlers
    handleSelectButtonClick,
    handleInputChange,

    // Messages
    messages,
  };
};
```

#### `src/components/FileUpload/hooks/useFileUpload.ts`

```tsx
import type { FileInfo, FileUploadMessages } from '../types';
import { useFileDrop } from './useFileDrop';
import { useFileState } from './useFileState';

export type UseFileUploadOptions = {
  /** 選択可能なファイル数の上限 */
  maxFiles?: number;
  /** 1ファイルあたりの最大サイズ（例: "5MB"） */
  maxFileSize?: string;
  /** 合計の最大サイズ（例: "10MB"） */
  maxTotalSize?: string;
  /** 許可するファイル形式（accept属性形式） */
  accept?: string;
  /** ドラッグ＆ドロップを有効化 */
  droppable?: boolean;
  /** 全画面ドロップエリアを有効化 */
  dropAreaExpandable?: boolean;
  /** 初期ファイル一覧 */
  initialFiles?: FileInfo[];
  /** カスタムメッセージ */
  messages?: FileUploadMessages;
};

export const useFileUpload = (options: UseFileUploadOptions = {}) => {
  const {
    maxFiles,
    maxFileSize,
    maxTotalSize,
    accept,
    droppable = false,
    dropAreaExpandable = false,
    initialFiles,
    messages,
  } = options;

  const fileState = useFileState({
    maxFiles,
    maxFileSize,
    maxTotalSize,
    accept,
    initialFiles,
    messages,
  });

  const fileDrop = useFileDrop({
    droppable,
    dropAreaExpandable,
    onFilesAdded: fileState.addFiles,
    focusTargetRef: fileState.selectButtonRef,
    messages,
  });

  return {
    // From useFileState
    files: fileState.files,
    errors: fileState.errors,
    totalSize: fileState.totalSize,
    hasError: fileState.hasError,
    isMultiple: fileState.isMultiple,
    maxFileSizeBytes: fileState.maxFileSizeBytes,
    maxTotalSizeBytes: fileState.maxTotalSizeBytes,
    selectionSummarySuffix: fileState.selectionSummarySuffix,
    inputRef: fileState.inputRef,
    selectButtonRef: fileState.selectButtonRef,
    setFiles: fileState.setFiles,
    setErrors: fileState.setErrors,
    addFiles: fileState.addFiles,
    removeFile: fileState.removeFile,
    validateFiles: fileState.validateFiles,
    handleSelectButtonClick: fileState.handleSelectButtonClick,
    handleInputChange: fileState.handleInputChange,
    messages: fileState.messages,

    // From useFileDrop
    isDragOver: fileDrop.isDragOver,
    isExpandedDropArea: fileDrop.isExpandedDropArea,
    showViewportOverlay: fileDrop.showViewportOverlay,
    announcerText: fileDrop.announcerText,
    announcerAssertiveText: fileDrop.announcerAssertiveText,
    handleExpandedDropAreaChange: fileDrop.handleExpandedDropAreaChange,
    handleDragEnter: fileDrop.handleDragEnter,
    handleDragOver: fileDrop.handleDragOver,
    handleDragLeave: fileDrop.handleDragLeave,
    handleDrop: fileDrop.handleDrop,
    handleViewportDragEnter: fileDrop.handleViewportDragEnter,
    handleViewportDragOver: fileDrop.handleViewportDragOver,
    handleViewportDragLeave: fileDrop.handleViewportDragLeave,
    handleViewportDrop: fileDrop.handleViewportDrop,
  };
};
```

#### `src/components/FileUpload/index.ts`

```tsx
export {
  FileUpload,
  FileUploadDropArea,
  FileUploadFileInfo,
  FileUploadFileItem,
  FileUploadFileList,
  FileUploadFileMarker,
  FileUploadFileMeta,
  FileUploadFileName,
  FileUploadInput,
  FileUploadViewportOverlay,
  FileUploadViewportOverlayMessage,
} from './FileUpload';
export { useFileUpload } from './hooks';
export { fileUploadDefaultMessages } from './messages';
export type { FileInfo, FileUploadMessages } from './types';
```

#### `src/components/FileUpload/messages.ts`

```tsx
import type { FileUploadMessages } from './types';

export const fileUploadDefaultMessages: FileUploadMessages = {
  error: {
    maxFiles: '選択できるファイル数が上限を超過しています。',
    maxTotalSize: '選択できるファイルサイズの合計が上限を超過しています。',
    invalidType: '許可されていないファイル形式です。',
    maxFileSize: 'ファイルサイズが上限を超過しています。',
    hasFileErrors: '選択したファイルにエラーがあります。該当ファイルをチェックしてください。',
  },
  announce: {
    dropAvailable: 'ここにドロップできます。',
    dropUnavailable: 'ドロップエリア外。',
  },
};
```

#### `src/components/FileUpload/types.ts`

```tsx
export type FileInfo = {
  id: string;
  name: string;
  size: number;
  file?: File;
  isExisting?: boolean;
  errors?: string[];
};

export type FileUploadMessages = {
  error: {
    maxFiles: string;
    maxTotalSize: string;
    invalidType: string;
    maxFileSize: string;
    hasFileErrors: string;
  };
  announce: {
    dropAvailable: string;
    dropUnavailable: string;
  };
};
```

#### `src/components/FileUpload/utils/formatSize.ts`

```tsx
export const formatSize = (bytes: number, precision: number | null = null): string => {
  if (bytes === 0) return '0B';

  const units = ['B', 'KB', 'MB', 'GB'];
  const k = 1024;
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), units.length - 1);

  const decimals = precision !== null ? precision : i > 0 ? 1 : 0;
  return `${parseFloat((bytes / k ** i).toFixed(decimals))}${units[i]}`;
};
```

#### `src/components/FileUpload/utils/index.ts`

```tsx
export { formatSize } from './formatSize';
export { isFileTypeAllowed } from './isFileTypeAllowed';
export { parseAcceptAttribute } from './parseAcceptAttribute';
export { parseSize } from './parseSize';
```

#### `src/components/FileUpload/utils/isFileTypeAllowed.ts`

```tsx
const getFileExtension = (filename: string): string => {
  const match = filename.match(/\.([^.]+)$/);
  return match ? `.${match[1].toLowerCase()}` : '';
};

export const isFileTypeAllowed = (
  filename: string,
  mimeType: string,
  allowedExtensions: string[],
): boolean => {
  const ext = getFileExtension(filename);

  return allowedExtensions.some((allowed) => {
    if (allowed.includes('/*')) {
      const [category] = allowed.split('/');
      return mimeType.startsWith(`${category}/`);
    }
    if (allowed.startsWith('.')) {
      return ext === allowed;
    }
    return mimeType === allowed;
  });
};
```

#### `src/components/FileUpload/utils/parseAcceptAttribute.ts`

```tsx
export const parseAcceptAttribute = (accept: string): string[] => {
  if (!accept) return [];
  return accept.split(',').map((s) => s.trim().toLowerCase());
};
```

#### `src/components/FileUpload/utils/parseSize.ts`

```tsx
export const parseSize = (sizeStr: string | null): number | null => {
  if (!sizeStr) return null;

  const units: Record<string, number> = {
    b: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
  };

  const match = sizeStr.toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(b|kb|mb|gb)?$/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const unit = match[2] || 'b';

  return Math.floor(value * units[unit]);
};
```

### HamburgerMenuButton sources

#### `src/components/HamburgerMenuButton/HamburgerMenuButton.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

type HamburgerMenuButtonProps = ComponentProps<'button'>;

export const HamburgerMenuButton = forwardRef<HTMLButtonElement, HamburgerMenuButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button
        className={`
          flex w-fit touch-manipulation items-center gap-x-1 rounded-6 px-3 pb-1.5 pt-1 text-oln-16N-100
          hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          ${className ?? ''}
        `}
        ref={ref}
        type='button'
        {...rest}
      >
        {children}
      </button>
    );
  },
);
```

#### `src/components/HamburgerMenuButton/HamburgerMenuIconButton.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

type HamburgerMenuIconButtonProps = ComponentProps<'button'>;

export const HamburgerMenuIconButton = forwardRef<HTMLButtonElement, HamburgerMenuIconButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button
        className={`
          block w-fit rounded-4 p-0 text-black touch-manipulation
          hover:outline-1 hover:bg-solid-gray-50
          focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          ${className ?? ''}
        `}
        ref={ref}
        type='button'
        {...rest}
      >
        {children}
      </button>
    );
  },
);
```

#### `src/components/HamburgerMenuButton/index.ts`

```tsx
export { HamburgerMenuButton } from './HamburgerMenuButton';
export { HamburgerMenuIconButton } from './HamburgerMenuIconButton';
export { CloseIcon } from './parts/CloseIcon';
export { CloseWithLabelIcon } from './parts/CloseWithLabelIcon';
export { HamburgerIcon } from './parts/HamburgerIcon';
export { HamburgerWithLabelIcon } from './parts/HamburgerWithLabelIcon';
```

#### `src/components/HamburgerMenuButton/parts/CloseIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type CloseIconProps = ComponentProps<'svg'>;

export const CloseIcon = (props: CloseIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={className}
      fill='none'
      height='24'
      viewBox='0 0 120 120'
      width='24'
      {...rest}
    >
      <path
        d='M32 95L25 88L53 60L25 32L32 25L60 53L88 25L95 32L67 60L95 88L88 95L60 67L32 95Z'
        fill='currentColor'
      />
    </svg>
  );
};
```

#### `src/components/HamburgerMenuButton/parts/CloseWithLabelIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type CloseWithLabelIconProps = ComponentProps<'svg'> & {
  isEnglish?: boolean;
};

export const CloseWithLabelIcon = (props: CloseWithLabelIconProps) => {
  const { className, isEnglish, ...rest } = props;
  return (
    <>
      {isEnglish ? (
        <svg
          aria-label={`${rest['aria-label'] ?? 'CLOSE'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            d='M37.3 39H33v-8h4.3v1h-3.1v2.3h3v1h-3V38h3.1v1ZM31.7 36.8c0 1.5-1 2.3-2.7 2.3-.9 0-1.6-.1-2.1-.4v-1.1c.6.3 1.4.5 2.2.5 1 0 1.5-.5 1.5-1.2 0-.9-1-1.2-1.7-1.5-1.1-.4-2-1.2-2-2.4 0-1.4 1.3-2.1 2.5-2.1a5 5 0 0 1 2.2.5l-.4 1c-.5-.3-1.1-.5-1.8-.5-.8 0-1.3.5-1.3 1 0 1 1 1.3 1.6 1.6 1.1.4 2 1 2 2.3ZM25.8 35c0 1.5-.5 3.2-2 3.8-.5.2-1 .3-1.6.3a4 4 0 0 1-1.6-.3c-1.4-.7-2-2.3-2-3.8 0-1.7.6-3 1.6-3.6.6-.3 1.2-.5 2-.5s1.5.2 2 .5c1 .7 1.6 2 1.6 3.6Zm-6 0c0 1.3.4 2.2 1.1 2.7.4.3.8.4 1.3.4.6 0 1-.1 1.4-.4.7-.5 1-1.4 1-2.7 0-1-.2-2.1-1-2.7-.4-.3-.8-.4-1.4-.4-.5 0-1 .1-1.3.4-.7.5-1 1.4-1 2.7ZM13.5 39l.1-8h1.2v7H18v1h-4.5ZM10.2 32c-1.7 0-2.4 1.5-2.4 3 0 1.9.8 3 2.4 3 .7 0 1.2 0 1.9-.3v1c-.7.3-1.4.4-2 .4-2.4 0-3.5-1.9-3.5-4 0-2.3 1.2-4.2 3.6-4.2.8 0 1.6.2 2.2.5l-.5 1a4 4 0 0 0-1.7-.5ZM13 26l-2-2 9-9-9-9 2-2 9 9 9-9 2 2-9 9 9 9-2 2-9-9-9 9Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg
          aria-label={`${rest['aria-label'] ?? '閉じる'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            d='m13 26-2-2 9-9-9-9 2-2 9 9 9-9 2 2-9 9 9 9-2 2-9-9-9 9ZM11.8 30v3.6H9v5.3H8V30h3.8ZM9 32.1v.7h1.7V32H9Zm0-.7h1.7v-.6H9v.6ZM16.4 30v7.6c0 .5 0 1-.5 1.1-.4.2-1 .2-2 .2 0-.3-.1-.7-.3-1h1.5c.2 0 .2-.1.2-.3v-4h-2.8V30h4Zm-2.8 2.1v.7h1.7v-.7h-1.7Zm0-1.3v.6h1.7v-.6h-1.7ZM13.3 34.6h1.4v.9h-1.4v2.2c0 .5 0 .7-.4.8-.3.2-.7.2-1.3.2l-.3-.9h.9l.1-.1v-1.5a8 8 0 0 1-2.3 1.9l-.6-.8c1-.4 1.8-1 2.5-1.8H9.7v-1h2.6v-.7h1v.8ZM23 31l1 1.6-.9.4c-.2-.6-.5-1.1-.9-1.6l.8-.3Zm1.3-.5 1 1.6-.8.4-1-1.6.8-.4Zm-4-.3c-.2 2-.1 4-.2 6 0 .3 0 .6.2.8.3.4.7.5 1.3.5 1.7 0 2.7-1 3.4-2l.9 1a5.3 5.3 0 0 1-4.3 2.2c-1 0-2-.3-2.3-1-.3-.3-.3-.6-.3-1.2v-6.3h1.4ZM28.8 30.5H31a60.3 60.3 0 0 0 2.8-.1l.6.8c-1.1.6-2 1.5-3 2.3l1-.1c1.5 0 3 .9 3 2.4 0 1.1-.6 2-1.6 2.4-.5.3-1.2.4-2 .4-1 0-2.3-.4-2.3-1.6 0-.9.8-1.5 1.7-1.5a2 2 0 0 1 2.1 2l-1 .2c0-.7-.4-1.3-1.1-1.3-.3 0-.7.2-.7.5 0 .6.7.7 1.1.7 1.7 0 2.6-.7 2.6-1.8 0-1-1.2-1.6-2-1.6-.9 0-1.5.2-2 .6-.7.3-1.2.8-1.8 1.5l-.8-.9 2.6-2.1 2.1-1.8c-1.1 0-2.2 0-3.3.2v-1.2Z'
            fill='currentColor'
          />
        </svg>
      )}
    </>
  );
};
```

#### `src/components/HamburgerMenuButton/parts/HamburgerIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type HamburgerIconProps = ComponentProps<'svg'>;

export const HamburgerIcon = (props: HamburgerIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={className}
      height='24'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <path
        clipRule='evenodd'
        d='M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};
```

#### `src/components/HamburgerMenuButton/parts/HamburgerWithLabelIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type HamburgerWithLabelIconProps = ComponentProps<'svg'> & {
  isEnglish?: boolean;
};

export const HamburgerWithLabelIcon = (props: HamburgerWithLabelIconProps) => {
  const { className, isEnglish, ...rest } = props;
  return (
    <>
      {isEnglish ? (
        <svg
          aria-label={`${rest['aria-label'] ?? 'MENU'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            d='M39 23v2H5v-2h34Zm0-6H5v-2h34v2Zm0-8H5V7h34v2ZM35.9 38.1c-2 0-3.4-1-3.4-3.5V30H34v4.7c0 1.8.8 2.3 1.9 2.3 1.1 0 2-.5 2-2.3V30h1.3v4.6c0 2.6-1.3 3.5-3.3 3.5ZM23.1 38v-8h1.5l4 6.4c-.2-2.1-.2-4.3-.2-6.4h1.3v8h-1.4l-4-6.4c.2 2.1.2 4.3.2 6.4H23ZM15.3 38v-8h5.3v1h-3.9v2.3H20v1h-3.3V37h4V38h-5.4ZM4.7 38v-8h1.6l2.3 5.7 2.2-5.7h1.7v8h-1.3l.1-6.4L9 37.2h-.9l-2.3-5.6c.2 2.1.2 4.2.2 6.4H4.7Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg
          aria-label={`${rest['aria-label'] ?? 'メニュー'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            d='M39 23v2H5v-2h34Zm0-6H5v-2h34v2Zm0-8H5V7h34v2ZM31 33.2h8v1.5h-8v-1.5ZM29 33c-.4 1.2-.3 2.5-.5 3.7H30v1.2H23v-1.3H27l.4-2.7H24v-1.3c1.2 0 2.9.3 4.2 0l1 .5ZM14.5 31c2 .2 4.2.2 6.3 0v1.5h-6.3V31Zm-.8 4.9c2.5 0 5.3.2 8 0v1.5a85 85 0 0 0-8 0v-1.5ZM12.3 30.5c-.6 1.2-1 2.5-1.7 3.6.9.7 1.7 1.4 2.4 2.2l-1 1-2.2-2c-.9 1-2 2-3.7 3l-1.1-1c1.6-.8 2.8-1.8 3.7-3a27 27 0 0 0-2.6-1.8l.8-1a40 40 0 0 1 2.6 1.8c.7-1 1.2-2.2 1.4-3.3l1.4.5Z'
            fill='currentColor'
          />
        </svg>
      )}
    </>
  );
};
```

### Heading sources

#### `src/components/Heading/Heading.tsx`

```tsx
import {
  Children,
  type ComponentProps,
  forwardRef,
  type HTMLAttributes,
  isValidElement,
  type RefObject,
} from 'react';

export type HeadingSize = '64' | '57' | '45' | '36' | '32' | '28' | '24' | '20' | '18' | '16';
export type RuleSize = '8' | '6' | '4' | '2';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const sizeClasses: Record<HeadingSize, string> = {
  '64': 'text-dsp-64B-140 [--shoulder-size:calc(28/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.01em]',
  '57': 'text-dsp-57B-140 [--shoulder-size:calc(24/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.02em]',
  '45': 'text-std-45B-140 [--shoulder-size:calc(22/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.02em]',
  '36': 'text-std-36B-140 [--shoulder-size:calc(20/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.02em]',
  '32': 'text-std-32B-150 [--shoulder-size:calc(18/16*1rem)] [--shoulder-line-height:1.6] [--shoulder-letter-spacing:0.02em]',
  '28': 'text-std-28B-150 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.01em]',
  '24': 'text-std-24B-150 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
  '20': 'text-std-20B-150 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
  '18': 'text-std-18B-160 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
  '16': 'text-std-16B-170 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
};

const ruleClasses: Record<RuleSize, string> = {
  '8': 'border-b-[calc(8/16*1rem)] pb-8',
  '6': 'border-b-[calc(6/16*1rem)] pb-6',
  '4': 'border-b-[calc(4/16*1rem)] pb-4',
  '2': 'border-b-[calc(2/16*1rem)] pb-2',
};

const chipClasses = `
  relative pl-[calc(1em/3+0.5em)]
  before:content-[''] before:absolute before:left-0 before:w-[calc(1em/3)] before:bg-key-900 before:top-[0.2em] before:bottom-[0.1em]
  supports-[top:1lh]:before:top-[calc(0.5lh-0.45em)] supports-[top:1lh]:before:bottom-[calc(0.5lh-0.55em)]
  forced-colors:before:bg-[CanvasText]
`;

const chipShoulderClasses =
  'before:!top-[calc((var(--shoulder-size)*(var(--shoulder-line-height)-1))/2)]';

export type HeadingShoulderProps = ComponentProps<'p'>;

export const HeadingShoulder = (props: HeadingShoulderProps) => {
  const { className, children, ...rest } = props;
  return (
    <p
      className={`
        font-bold text-[length:var(--shoulder-size)] leading-[var(--shoulder-line-height)] tracking-[var(--shoulder-letter-spacing)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </p>
  );
};

export type HeadingTitleProps = ComponentProps<'h2'> & {
  level: HeadingLevel;
};

export const HeadingTitle = forwardRef<HTMLHeadingElement, HeadingTitleProps>((props, ref) => {
  const { level: Component, className, children, ...rest } = props;
  return (
    <Component ref={ref} className={`${className ?? ''}`} {...rest}>
      {children}
    </Component>
  );
});

export type HeadingProps = HTMLAttributes<HTMLElement> & {
  size: HeadingSize;
  hasChip?: boolean;
  rule?: RuleSize;
};

export const Heading = forwardRef<HTMLElement, HeadingProps>((props, ref) => {
  const { size, hasChip, rule, className, children, ...rest } = props;

  const hasShoulder = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === HeadingShoulder,
  );

  const Component = hasShoulder ? 'hgroup' : 'div';

  return (
    <Component
      ref={ref as RefObject<HTMLDivElement>}
      className={`
        text-solid-gray-800
        ${sizeClasses[size]}
        ${hasChip ? chipClasses : ''}
        ${hasChip && hasShoulder ? chipShoulderClasses : ''}
        ${rule ? `border-solid border-key-900 ${ruleClasses[rule]}` : ''}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
});
```

#### `src/components/Heading/index.ts`

```tsx
export { Heading, HeadingShoulder, HeadingTitle } from './Heading';
```

### HorizontalMenu sources

#### `src/components/HorizontalMenu/HorizontalMenu.tsx`

```tsx
import type { ComponentProps } from 'react';

export type HorizontalMenuProps = ComponentProps<'ul'>;

export const HorizontalMenu = (props: HorizontalMenuProps) => {
  const { children, className, ...rest } = props;
  return (
    <ul
      className={`flex items-stretch border-b border-solid-gray-420 text-solid-gray-900 text-dns-16B-130 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export type HorizontalMenuItemProps = ComponentProps<'li'>;

export const HorizontalMenuItem = (props: HorizontalMenuItemProps) => {
  const { children, className, ...rest } = props;
  return (
    <li className={`relative flex items-stretch ${className ?? ''}`} {...rest}>
      {children}
    </li>
  );
};

const itemInnerBaseStyle = [
  'group/horizontal-menu-item',
  'relative flex items-center gap-1',
  'min-h-16 px-5 py-4',
  // Hover
  'hover:bg-solid-gray-50',
  "hover:after:absolute hover:after:inset-x-0 hover:after:bottom-0 hover:after:border-b-2 hover:after:border-black hover:after:content-['']",
  // Current
  "[&[aria-current]:not([aria-current='false'])]:bg-white [&[aria-current]:not([aria-current='false'])]:text-key-1000",
  "[&[aria-current]:not([aria-current='false'])]:after:absolute [&[aria-current]:not([aria-current='false'])]:after:inset-x-0 [&[aria-current]:not([aria-current='false'])]:after:bottom-0 [&[aria-current]:not([aria-current='false'])]:after:border-b-4 [&[aria-current]:not([aria-current='false'])]:after:border-key-900 [&[aria-current]:not([aria-current='false'])]:after:content-['']",
  // Current + hover
  "[&[aria-current]:not([aria-current='false'])]:hover:text-key-900 [&[aria-current]:not([aria-current='false'])]:hover:underline [&[aria-current]:not([aria-current='false'])]:hover:underline-offset-[calc(3/16*1rem)] [&[aria-current]:not([aria-current='false'])]:hover:decoration-[calc(1/16*1rem)]",
  "[&[aria-current]:not([aria-current='false'])]:hover:after:border-b-4 [&[aria-current]:not([aria-current='false'])]:hover:after:border-key-900",
  // Focus visible
  'focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-4 focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300',
  "[&[aria-current]:not([aria-current='false'])]:focus-visible:bg-white",
].join(' ');

export type HorizontalMenuItemLinkProps = ComponentProps<'a'>;

export const HorizontalMenuItemLink = (props: HorizontalMenuItemLinkProps) => {
  const { children, className, ...rest } = props;
  return (
    <a className={`${itemInnerBaseStyle} ${className ?? ''}`} {...rest}>
      {children}
    </a>
  );
};

export type HorizontalMenuItemButtonProps = Omit<ComponentProps<'button'>, 'type'>;

export const HorizontalMenuItemButton = (props: HorizontalMenuItemButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button type='button' className={`${itemInnerBaseStyle} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
};
```

#### `src/components/HorizontalMenu/index.ts`

```tsx
export {
  HorizontalMenu,
  HorizontalMenuItem,
  HorizontalMenuItemButton,
  HorizontalMenuItemLink,
} from './HorizontalMenu';
```

### Image sources

#### `src/components/Image/Image.tsx`

```tsx
import type { ComponentProps } from 'react';

export type ImageProps = ComponentProps<'figure'> & {
  fullWidth?: boolean;
};

export const Image = (props: ImageProps) => {
  const { children, className, fullWidth, ...rest } = props;
  return (
    <figure
      className={`group/image w-fit data-[full-width]:w-full ${className ?? ''}`}
      data-full-width={fullWidth ? '' : undefined}
      {...rest}
    >
      {children}
    </figure>
  );
};

export type ImageAreaProps = ComponentProps<'div'> & {
  bordered?: boolean;
};

export const ImageArea = (props: ImageAreaProps) => {
  const { children, className, bordered, ...rest } = props;
  return (
    <div
      className={`[&_img]:block [&_img]:max-w-full [&_img]:h-auto group-data-[full-width]/image:[&_img]:w-full data-[bordered]:outline data-[bordered]:outline-1 data-[bordered]:outline-solid-gray-420 data-[bordered]:[outline-offset:-1px] ${className ?? ''}`}
      data-bordered={bordered ? '' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export type ImageAreaLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: string };

export const ImageAreaLink = (props: ImageAreaLinkProps) => {
  const { children, className, ...rest } = props;
  return (
    <a
      className={`block [&_img]:block [&_img]:max-w-full [&_img]:h-auto group-data-[full-width]/image:[&_img]:w-full outline outline-1 outline-blue-900 [outline-offset:-1px] hover:outline-4 hover:[outline-offset:-4px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export type ImageCaptionStyle = 'dashed' | 'solid';

export type ImageCaptionProps = ComponentProps<'figcaption'> & {
  captionStyle?: ImageCaptionStyle;
};

export const ImageCaption = (props: ImageCaptionProps) => {
  const { children, className, captionStyle, ...rest } = props;
  return (
    <figcaption
      className={`mt-2 [contain:inline-size] py-2 px-6 text-solid-gray-900 text-std-16N-170 data-[style=dashed]:border data-[style=dashed]:border-dashed data-[style=dashed]:border-solid-gray-700 data-[style=solid]:border data-[style=solid]:border-solid-gray-420 ${className ?? ''}`}
      data-style={captionStyle}
      {...rest}
    >
      {children}
    </figcaption>
  );
};
```

#### `src/components/Image/index.ts`

```tsx
export type {
  ImageAreaLinkProps,
  ImageAreaProps,
  ImageCaptionProps,
  ImageCaptionStyle,
  ImageProps,
} from './Image';
export { Image, ImageArea, ImageAreaLink, ImageCaption } from './Image';
```

### Input sources

#### `src/components/Input/Input.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type InputBlockSize = 'lg' | 'md' | 'sm';

export type InputProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  isError?: boolean;
  blockSize?: InputBlockSize;
  placeholder?: never;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, readOnly, isError, blockSize = 'lg', ...rest } = props;

  return (
    <input
      className={`
        max-w-full rounded-8 border bg-white px-4 py-3 border-solid-gray-600 text-oln-16N-100 text-solid-gray-800
        hover:[&:read-write]:border-black
        data-[size=sm]:h-10 data-[size=md]:h-12 data-[size=lg]:h-14
        aria-[invalid=true]:border-error-1 aria-[invalid=true]:[&:read-write]:hover:border-red-1000
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        read-only:border-dashed
        aria-disabled:border-solid-gray-300 aria-disabled:!border-solid aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
        ${className ?? ''}
      `}
      aria-invalid={isError || undefined}
      data-size={blockSize}
      readOnly={props['aria-disabled'] ? true : readOnly}
      ref={ref}
      {...rest}
    />
  );
});
```

#### `src/components/Input/index.ts`

```tsx
export { Input } from './Input';
```

### Label sources

#### `src/components/Label/Label.tsx`

```tsx
import type { ComponentProps } from 'react';

export type LabelSize = 'lg' | 'md' | 'sm';

export type LabelProps = ComponentProps<'label'> & {
  size?: LabelSize;
};

export const Label = (props: LabelProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <label
      className={`
        text-solid-gray-800
        data-[size=sm]:text-std-16B-170 data-[size=md]:text-std-17B-170 data-[size=lg]:text-std-18B-160
        ${className ?? ''}
      `}
      data-size={size}
      {...rest}
    >
      {children}
    </label>
  );
};
```

#### `src/components/Label/index.ts`

```tsx
export { Label } from './Label';
```

### LanguageSelector sources

#### `src/components/LanguageSelector/LanguageSelector.tsx`

```tsx
import type { ComponentProps } from 'react';

export type LanguageSelectorProps = ComponentProps<'div'>;

export const LanguageSelector = (props: LanguageSelectorProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={`group relative ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};
```

#### `src/components/LanguageSelector/index.ts`

```tsx
export { LanguageSelector } from './LanguageSelector';
export { LanguageSelectorArrowIcon } from './parts/ArrowIcon';
export { LanguageSelectorButton } from './parts/Button';
export { LanguageSelectorGlobeIcon } from './parts/GlobeIcon';
export { LanguageSelectorGlobeWithLabelIcon } from './parts/GlobeWithLabelIcon';
export { LanguageSelectorMenu } from './parts/Menu';
export { LanguageSelectorMenuItem } from './parts/MenuItem';
```

#### `src/components/LanguageSelector/parts/ArrowIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type LanguageSelectorArrowIconProps = ComponentProps<'svg'>;

export const LanguageSelectorArrowIcon = (props: LanguageSelectorArrowIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={`${className ?? ''}`}
      fill='none'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      {...rest}
    >
      <g>
        <path
          d='M8 11.4L2 5.33332L2.66667 4.66666L8 9.99999L13.3333 4.66666L14 5.33332L8 11.4Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
```

#### `src/components/LanguageSelector/parts/Button.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorButtonProps = ComponentProps<'button'>;

export const LanguageSelectorButton = forwardRef<HTMLButtonElement, LanguageSelectorButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button
        className={`
          flex w-fit gap-1 items-center px-2 min-h-[calc(44/16*1rem)] text-oln-16N-100 text-solid-gray-800 rounded-8
          hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300
          ${className ?? ''}
        `}
        ref={ref}
        type='button'
        {...rest}
      >
        {children}
      </button>
    );
  },
);
```

#### `src/components/LanguageSelector/parts/GlobeIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type LanguageSelectorGlobeIconProps = ComponentProps<'svg'>;

export const LanguageSelectorGlobeIcon = (props: LanguageSelectorGlobeIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={className}
      fill='none'
      height='20'
      viewBox='0 0 20 20'
      width='20'
      {...rest}
    >
      <g>
        <path
          d='M10.0006 17.9166C8.91516 17.9166 7.89086 17.7086 6.92773 17.2924C5.9646 16.8763 5.12458 16.3098 4.40769 15.5929C3.69082 14.876 3.12432 14.036 2.70819 13.0729C2.29205 12.1098 2.08398 11.0855 2.08398 9.99999C2.08398 8.90598 2.29205 7.87954 2.70819 6.92068C3.12432 5.96182 3.69082 5.12394 4.40769 4.40705C5.12458 3.69018 5.9646 3.12368 6.92773 2.70755C7.89086 2.29141 8.91516 2.08334 10.0006 2.08334C11.0946 2.08334 12.1211 2.29141 13.0799 2.70755C14.0388 3.12368 14.8767 3.69018 15.5936 4.40705C16.3104 5.12394 16.8769 5.96182 17.2931 6.92068C17.7092 7.87954 17.9173 8.90598 17.9173 9.99999C17.9173 11.0855 17.7092 12.1098 17.2931 13.0729C16.8769 14.036 16.3104 14.876 15.5936 15.5929C14.8767 16.3098 14.0388 16.8763 13.0799 17.2924C12.1211 17.7086 11.0946 17.9166 10.0006 17.9166ZM10.0006 16.649C10.4259 16.0849 10.7838 15.516 11.0744 14.9423C11.365 14.3686 11.6016 13.7414 11.7843 13.0609H8.21696C8.41034 13.7628 8.64966 14.4006 8.93492 14.9743C9.22017 15.5481 9.57541 16.1063 10.0006 16.649ZM8.38688 16.4199C8.06744 15.9615 7.78057 15.4404 7.5263 14.8566C7.27202 14.2727 7.07437 13.6741 6.93334 13.0609H4.10638C4.54656 13.9263 5.13685 14.6533 5.87723 15.242C6.61764 15.8307 7.45419 16.2233 8.38688 16.4199ZM11.6144 16.4199C12.5471 16.2233 13.3836 15.8307 14.124 15.242C14.8644 14.6533 15.4547 13.9263 15.8949 13.0609H13.0679C12.9002 13.6795 12.6892 14.2807 12.4349 14.8646C12.1806 15.4484 11.9071 15.9669 11.6144 16.4199ZM3.58236 11.8109H6.68013C6.62778 11.5011 6.58986 11.1974 6.56636 10.8998C6.54286 10.6023 6.53111 10.3023 6.53111 9.99999C6.53111 9.69764 6.54286 9.39769 6.56636 9.10014C6.58986 8.80259 6.62778 8.49891 6.68013 8.18907H3.58236C3.50223 8.4722 3.4408 8.76654 3.39807 9.07209C3.35533 9.37765 3.33396 9.68695 3.33396 9.99999C3.33396 10.313 3.35533 10.6223 3.39807 10.9279C3.4408 11.2334 3.50223 11.5278 3.58236 11.8109ZM7.93011 11.8109H12.0712C12.1235 11.5011 12.1614 11.2001 12.1849 10.9078C12.2084 10.6157 12.2202 10.313 12.2202 9.99999C12.2202 9.68695 12.2084 9.38433 12.1849 9.09214C12.1614 8.79993 12.1235 8.49891 12.0712 8.18907H7.93011C7.87776 8.49891 7.83983 8.79993 7.81632 9.09214C7.79282 9.38433 7.78107 9.68695 7.78107 9.99999C7.78107 10.313 7.79282 10.6157 7.81632 10.9078C7.83983 11.2001 7.87776 11.5011 7.93011 11.8109ZM13.3211 11.8109H16.4189C16.499 11.5278 16.5605 11.2334 16.6032 10.9279C16.6459 10.6223 16.6673 10.313 16.6673 9.99999C16.6673 9.68695 16.6459 9.37765 16.6032 9.07209C16.5605 8.76654 16.499 8.4722 16.4189 8.18907H13.3211C13.3735 8.49891 13.4114 8.80259 13.4349 9.10014C13.4584 9.39769 13.4702 9.69764 13.4702 9.99999C13.4702 10.3023 13.4584 10.6023 13.4349 10.8998C13.4114 11.1974 13.3735 11.5011 13.3211 11.8109ZM13.0679 6.93912H15.8949C15.4494 6.06303 14.8631 5.33599 14.136 4.75799C13.409 4.18 12.5685 3.78471 11.6144 3.57209C11.9338 4.05714 12.218 4.58759 12.4669 5.16345C12.7159 5.73931 12.9162 6.3312 13.0679 6.93912ZM8.21696 6.93912H11.7843C11.5909 6.24253 11.3476 5.6007 11.0543 5.01361C10.7611 4.42655 10.4098 3.87232 10.0006 3.35095C9.59144 3.87232 9.24021 4.42655 8.94694 5.01361C8.65367 5.6007 8.41034 6.24253 8.21696 6.93912ZM4.10638 6.93912H6.93334C7.08505 6.3312 7.28537 5.73931 7.53432 5.16345C7.78325 4.58759 8.06744 4.05714 8.38688 3.57209C7.42748 3.78471 6.58559 4.18134 5.86121 4.76201C5.13685 5.34268 4.55191 6.06838 4.10638 6.93912Z'
          fill='currentColor'
          fillOpacity='0.9'
        />
      </g>
    </svg>
  );
};
```

#### `src/components/LanguageSelector/parts/GlobeWithLabelIcon.tsx`

```tsx
import type { ComponentProps } from 'react';

export type LanguageSelectorGlobeWithLabelIconProps = ComponentProps<'svg'>;

export const LanguageSelectorGlobeWithLabelIcon = (
  props: LanguageSelectorGlobeWithLabelIconProps,
) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-label={`${rest['aria-label'] ?? 'Language'}`}
      className={className}
      fill='none'
      height='44'
      role='img'
      viewBox='0 0 44 44'
      width='44'
      {...rest}
    >
      <g>
        <path
          d='M22 27.0669C20.3718 27.0669 18.8353 26.7548 17.3906 26.1306C15.9459 25.5064 14.6859 24.6567 13.6106 23.5814C12.5353 22.506 11.6855 21.246 11.0613 19.8013C10.4371 18.3566 10.125 16.8202 10.125 15.192C10.125 13.5509 10.4371 12.0113 11.0613 10.573C11.6855 9.1347 12.5353 7.87788 13.6106 6.80255C14.6859 5.72724 15.9459 4.87749 17.3906 4.2533C18.8353 3.62909 20.3718 3.31699 22 3.31699C23.641 3.31699 25.1806 3.62909 26.6189 4.2533C28.0572 4.87749 29.314 5.72724 30.3894 6.80255C31.4647 7.87788 32.3144 9.1347 32.9386 10.573C33.5628 12.0113 33.8749 13.5509 33.8749 15.192C33.8749 16.8202 33.5628 18.3566 32.9386 19.8013C32.3144 21.246 31.4647 22.506 30.3894 23.5814C29.314 24.6567 28.0572 25.5064 26.6189 26.1306C25.1806 26.7548 23.641 27.0669 22 27.0669ZM22 25.1655C22.6378 24.3194 23.1747 23.466 23.6106 22.6054C24.0465 21.7448 24.4014 20.8041 24.6755 19.7833H19.3245C19.6145 20.8362 19.9735 21.7929 20.4014 22.6535C20.8293 23.5141 21.3621 24.3514 22 25.1655ZM19.5793 24.8218C19.1002 24.1343 18.6699 23.3526 18.2885 22.4768C17.9071 21.601 17.6106 20.7031 17.399 19.7833H13.1586C13.8189 21.0814 14.7043 22.1719 15.8149 23.055C16.9255 23.938 18.1803 24.5269 19.5793 24.8218ZM24.4206 24.8218C25.8196 24.5269 27.0745 23.938 28.1851 23.055C29.2956 22.1719 30.1811 21.0814 30.8413 19.7833H26.6009C26.3493 20.7112 26.0328 21.613 25.6514 22.4888C25.27 23.3646 24.8597 24.1423 24.4206 24.8218ZM12.3726 17.9083H17.0192C16.9407 17.4436 16.8838 16.9881 16.8486 16.5417C16.8133 16.0954 16.7957 15.6455 16.7957 15.192C16.7957 14.7384 16.8133 14.2885 16.8486 13.8422C16.8838 13.3959 16.9407 12.9403 17.0192 12.4756H12.3726C12.2524 12.9003 12.1602 13.3418 12.0961 13.8001C12.032 14.2584 12 14.7224 12 15.192C12 15.6615 12.032 16.1255 12.0961 16.5838C12.1602 17.0421 12.2524 17.4836 12.3726 17.9083ZM18.8942 17.9083H25.1058C25.1843 17.4436 25.2412 16.9921 25.2764 16.5537C25.3117 16.1154 25.3293 15.6615 25.3293 15.192C25.3293 14.7224 25.3117 14.2685 25.2764 13.8302C25.2412 13.3919 25.1843 12.9403 25.1058 12.4756H18.8942C18.8157 12.9403 18.7588 13.3919 18.7235 13.8302C18.6883 14.2685 18.6706 14.7224 18.6706 15.192C18.6706 15.6615 18.6883 16.1154 18.7235 16.5537C18.7588 16.9921 18.8157 17.4436 18.8942 17.9083ZM26.9807 17.9083H31.6274C31.7476 17.4836 31.8397 17.0421 31.9038 16.5838C31.9679 16.1255 32 15.6615 32 15.192C32 14.7224 31.9679 14.2584 31.9038 13.8001C31.8397 13.3418 31.7476 12.9003 31.6274 12.4756H26.9807C27.0592 12.9403 27.1161 13.3959 27.1514 13.8422C27.1866 14.2885 27.2043 14.7384 27.2043 15.192C27.2043 15.6455 27.1866 16.0954 27.1514 16.5417C27.1161 16.9881 27.0592 17.4436 26.9807 17.9083ZM26.6009 10.6006H30.8413C30.1731 9.28652 29.2936 8.19596 28.2031 7.32896C27.1125 6.46198 25.8517 5.86903 24.4206 5.55011C24.8998 6.27767 25.326 7.07335 25.6994 7.93714C26.0729 8.80094 26.3733 9.68877 26.6009 10.6006ZM19.3245 10.6006H24.6755C24.3854 9.55577 24.0204 8.59302 23.5805 7.71239C23.1406 6.83179 22.6138 6.00046 22 5.21839C21.3862 6.00046 20.8593 6.83179 20.4194 7.71239C19.9795 8.59302 19.6145 9.55577 19.3245 10.6006ZM13.1586 10.6006H17.399C17.6266 9.68877 17.9271 8.80094 18.3005 7.93714C18.6739 7.07335 19.1002 6.27767 19.5793 5.55011C18.1402 5.86903 16.8774 6.46399 15.7908 7.33499C14.7043 8.20599 13.8269 9.29454 13.1586 10.6006Z'
          fill='currentColor'
        />
      </g>
      <path
        d='M34.0409 35.272H37.1369V39.544C36.6809 39.696 36.2129 39.808 35.7329 39.88C35.2609 39.96 34.7209 40 34.1129 40C33.2409 40 32.5009 39.824 31.8929 39.472C31.2929 39.12 30.8329 38.616 30.5129 37.96C30.2009 37.304 30.0449 36.516 30.0449 35.596C30.0449 34.7 30.2209 33.924 30.5729 33.268C30.9249 32.612 31.4289 32.104 32.0849 31.744C32.7489 31.376 33.5529 31.192 34.4969 31.192C34.9689 31.192 35.4209 31.24 35.8529 31.336C36.2849 31.424 36.6849 31.548 37.0529 31.708L36.5849 32.788C36.2889 32.652 35.9569 32.54 35.5889 32.452C35.2289 32.356 34.8489 32.308 34.4489 32.308C33.8169 32.308 33.2689 32.444 32.8049 32.716C32.3489 32.98 31.9969 33.36 31.7489 33.856C31.5089 34.344 31.3889 34.928 31.3889 35.608C31.3889 36.248 31.4889 36.816 31.6889 37.312C31.8889 37.808 32.2049 38.196 32.6369 38.476C33.0689 38.756 33.6329 38.896 34.3289 38.896C34.5609 38.896 34.7649 38.888 34.9409 38.872C35.1169 38.848 35.2769 38.824 35.4209 38.8C35.5729 38.768 35.7169 38.74 35.8529 38.716V36.388H34.0409V35.272Z'
        fill='currentColor'
      />
      <path
        d='M28.1804 39.88H26.6084L22.2764 32.956H22.2284C22.2364 33.116 22.2444 33.288 22.2524 33.472C22.2684 33.656 22.2804 33.852 22.2884 34.06C22.2964 34.26 22.3044 34.468 22.3124 34.684C22.3204 34.892 22.3244 35.104 22.3244 35.32V39.88H21.1484V31.312H22.7084L27.0284 38.2H27.0644C27.0564 38.08 27.0484 37.932 27.0404 37.756C27.0324 37.572 27.0244 37.376 27.0164 37.168C27.0164 36.96 27.0124 36.748 27.0044 36.532C26.9964 36.316 26.9884 36.112 26.9804 35.92V31.312H28.1804V39.88Z'
        fill='currentColor'
      />
      <path
        d='M18.6363 39.88L17.7242 37.408H14.4123L13.5002 39.88H12.1562L15.4083 31.276H16.7523L19.9923 39.88H18.6363ZM16.5002 33.868C16.4762 33.78 16.4323 33.648 16.3682 33.472C16.3123 33.288 16.2563 33.104 16.2003 32.92C16.1443 32.728 16.1002 32.572 16.0682 32.452C16.0282 32.612 15.9802 32.788 15.9242 32.98C15.8762 33.164 15.8283 33.336 15.7803 33.496C15.7323 33.648 15.6923 33.772 15.6603 33.868L14.7963 36.28H17.3643L16.5002 33.868Z'
        fill='currentColor'
      />
      <path d='M6.86328 39.88V31.312H8.15928V38.764H11.8193V39.88H6.86328Z' fill='currentColor' />
    </svg>
  );
};
```

#### `src/components/LanguageSelector/parts/Menu.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorMenuProps = ComponentProps<'ul'> & {
  isCondensed?: boolean;
};

export const LanguageSelectorMenu = forwardRef<HTMLUListElement, LanguageSelectorMenuProps>(
  (props, ref) => {
    const { children, className, isCondensed, ...rest } = props;

    return (
      <ul
        className={`
          min-w-fit w-auto py-2 border border-solid-gray-420 bg-white shadow-1 rounded-8
          has-[>:nth-child(7)]:rounded-r-none
          ${isCondensed ? 'max-h-[calc((36*6.5+16)/16*1rem)]' : 'max-h-[calc((44*6.5+16)/16*1rem)]'}
          ${className ?? ''}
        `}
        ref={ref}
        {...rest}
      >
        {children}
      </ul>
    );
  },
);
```

#### `src/components/LanguageSelector/parts/MenuItem.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorMenuItemProps = ComponentProps<'a'> & {
  isCurrent?: boolean;
  isCondensed?: boolean;
};

export const LanguageSelectorMenuItem = forwardRef<
  HTMLAnchorElement,
  LanguageSelectorMenuItemProps
>((props, ref) => {
  const { children, className, isCurrent, isCondensed, ...rest } = props;

  return (
    <li>
      <a
        aria-current={isCurrent}
        className={`
          group/menu-item relative flex min-h-11 items-center gap-x-2 text-nowrap px-4 py-2.5 text-dns-16N-130 text-solid-gray-800
          hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-black focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset focus-visible:ring-yellow-300
          data-[condensed]:min-h-9 data-[current]:bg-key-100 data-[condensed]:py-1.5 data-[condensed]:text-dns-16N-120 data-[current]:font-bold data-[current]:text-key-1000 data-[current]:hover:bg-key-50 data-[current]:hover:text-key-900
          ${className ?? ''}
        `}
        data-current={isCurrent || undefined}
        data-condensed={isCondensed || undefined}
        ref={ref}
        {...rest}
      >
        <svg
          aria-hidden={true}
          className='invisible flex-none group-data-[current]/menu-item:visible'
          fill='currentColor'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path d='m9.5 18-5.7-5.7 1.5-1.4 4.2 4.3L18.7 6l1.4 1.4L9.5 18Z' />
        </svg>
        {children}
      </a>
    </li>
  );
});
```

### Legend sources

#### `src/components/Legend/Legend.tsx`

```tsx
import type { ComponentProps } from 'react';

export type LegendSize = 'lg' | 'md' | 'sm';

export type LegendProps = ComponentProps<'legend'> & {
  size?: LegendSize;
};

export const Legend = (props: LegendProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <legend
      className={`
        flex w-fit items-center gap-2 text-solid-gray-800
        data-[size=sm]:text-std-16B-170 data-[size=md]:text-std-17B-170 data-[size=lg]:text-std-18B-160
        ${className ?? ''}
      `}
      data-size={size}
      {...rest}
    >
      {children}
    </legend>
  );
};
```

#### `src/components/Legend/index.ts`

```tsx
export { Legend } from './Legend';
```

### Link sources

#### `src/components/Link/Link.tsx`

```tsx
import type { ComponentProps } from 'react';
import { Slot } from '../Slot';

export const linkDefaultStyle = 'text-blue-1000 underline underline-offset-[calc(3/16*1rem)]';
export const linkVisitedStyle = 'visited:text-magenta-900';
export const linkHoverStyle = 'hover:text-blue-1000 hover:decoration-[calc(3/16*1rem)]';
export const linkFocusStyle =
  'focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300';
export const linkActiveStyle = 'active:text-orange-800 active:decoration-1';

export const linkStyle = `
  ${linkDefaultStyle}
  ${linkVisitedStyle}
  ${linkHoverStyle}
  ${linkFocusStyle}
  ${linkActiveStyle}
`;

export type LinkProps = {
  className?: string;
  icon?: LinkExternalLinkIconProps;
} & (({ asChild?: false } & ComponentProps<'a'>) | { asChild: true; children: React.ReactNode });

export const Link = (props: LinkProps) => {
  const { asChild, children, className, icon, ...rest } = props;

  if (asChild) {
    return (
      <Slot className={`${linkStyle} ${className ?? ''}`} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={`${linkStyle} ${className ?? ''}`} {...rest}>
      {children}

      {props.target === '_blank' && <LinkExternalLinkIcon {...icon} />}
    </a>
  );
};

export type LinkExternalLinkIconProps = ComponentProps<'svg'>;

export const LinkExternalLinkIcon = (props: LinkExternalLinkIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-label={`${rest['aria-label'] ?? '新規タブで開きます'}`}
      className={`mb-[calc(3/16*1rem)] ml-[calc(3/16*1rem)] inline ${className ?? ''}`}
      fill='none'
      height='17'
      role='img'
      viewBox='0 0 16 17'
      width='16'
    >
      <g>
        <path
          clipRule='evenodd'
          d='M3 13.5H13V9.16667H14V14.5H2V2.5H7.33333V3.5H3V13.5ZM9.33333 3.5V2.5H14V7.16667H13V4.23333L7 10.1667L6.33333 9.5L12.2667 3.5H9.33333Z'
          fillRule='evenodd'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
```

#### `src/components/Link/index.ts`

```tsx
export {
  Link,
  LinkExternalLinkIcon,
  linkActiveStyle,
  linkDefaultStyle,
  linkFocusStyle,
  linkHoverStyle,
  linkStyle,
  linkVisitedStyle,
} from './Link';
```

### List sources

#### `src/components/List/List.tsx`

```tsx
import type { ComponentProps } from 'react';

type Spacing = '4' | '8' | '12';
type Marker = 'number';

export type ListProps = ComponentProps<'ul'> & {
  spacing: Spacing;
  marker?: Marker;
};

export const listBaseStyle = `
  [&>li]:py-[var(--list-spacing,0px)]
  data-[spacing='4']:[--list-spacing:0.25rem] data-[spacing='8']:[--list-spacing:0.5rem] data-[spacing='12']:[--list-spacing:0.75rem]
  [&_ul]:mt-[var(--list-spacing,0px)] [&_ul]:mb-[calc(-1*var(--list-spacing,0px))]
`;

export const listDefaultStyle = 'pl-8 list-[revert]';

export const listNumberedStyle = `
  [&>li]:pl-8
  [&>li>a:only-child]:-ml-8 [&>li>a:only-child]:pl-8
  [&>li>span:first-child]:-ml-8 [&>li>span:first-child]:inline-block [&>li>span:first-child]:min-w-8 [&>li>span:first-child]:whitespace-nowrap
  [&>li>a:only-child>span:first-child]:-ml-8 [&>li>a:only-child>span:first-child]:inline-block [&>li>a:only-child>span:first-child]:min-w-8 [&>li>a:only-child>span:first-child]:whitespace-nowrap [&>li>a:only-child>span:first-child]:[text-decoration:inherit]
`;

export const List = (props: ListProps) => {
  const { spacing, marker, children, className, ...rest } = props;

  const markerStyle = marker === 'number' ? listNumberedStyle : listDefaultStyle;

  return (
    <ul
      className={`${listBaseStyle} ${markerStyle} ${className ?? ''}`}
      data-spacing={spacing}
      data-marker={marker}
      {...rest}
    >
      {children}
    </ul>
  );
};
```

#### `src/components/List/index.ts`

```tsx
export { List, listBaseStyle, listDefaultStyle, listNumberedStyle } from './List';
```

### MenuList sources

#### `src/components/MenuList/MenuList.tsx`

```tsx
import type { ComponentProps, CSSProperties } from 'react';

export type MenuListType = 'standard' | 'box';
export type MenuListSize = 'regular' | 'small';

export type MenuListProps = ComponentProps<'ul'> & {
  indent?: number;
};

export const MenuList = (props: MenuListProps) => {
  const { children, className, indent, style, ...rest } = props;

  return (
    <ul
      className={`relative z-0 text-solid-gray-800 text-dns-16N-130 ${className ?? ''}`}
      style={
        indent !== undefined
          ? ({ ...style, '--menu-list-indentation': indent } as CSSProperties)
          : style
      }
      {...rest}
    >
      {children}
    </ul>
  );
};

export type MenuListItemProps = ComponentProps<'li'>;

export const MenuListItem = (props: MenuListItemProps) => {
  const { children, ...rest } = props;
  return <li {...rest}>{children}</li>;
};

const menuListItemBaseStyle = `
  group/menu-list-item flex items-center gap-x-2 w-[stretch] px-4
  data-[size=regular]:min-h-11 data-[size=regular]:py-2.5
  data-[size=small]:min-h-9 data-[size=small]:py-1.5 data-[size=small]:text-dns-16N-120
  data-[type=standard]:ml-[calc(1rem*var(--menu-list-indentation,0))]
  data-[type=standard]:data-[size=regular]:rounded-8
  data-[type=standard]:data-[size=small]:rounded-4
  data-[type=box]:pl-[calc(1rem+1rem*var(--menu-list-indentation,0))]
  data-[current]:bg-key-100 data-[current]:text-key-1000 data-[current]:font-bold
  [&:has(+_*_[data-current])]:bg-key-50 [&:has(+_*_[data-current])]:text-key-1000
  hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
  data-[current]:hover:bg-key-50 data-[current]:hover:text-key-900
  [&:has(+_*_[data-current]):hover]:bg-key-50 [&:has(+_*_[data-current]):hover]:text-key-900
  focus-visible:relative focus-visible:z-[1] focus-visible:bg-yellow-300
  data-[type=standard]:focus-visible:outline data-[type=standard]:focus-visible:outline-4 data-[type=standard]:focus-visible:outline-black data-[type=standard]:focus-visible:outline-offset-[calc(2/16*1rem)] data-[type=standard]:focus-visible:ring-[calc(2/16*1rem)] data-[type=standard]:focus-visible:ring-yellow-300
  data-[type=box]:focus-visible:outline data-[type=box]:focus-visible:outline-4 data-[type=box]:focus-visible:outline-black data-[type=box]:focus-visible:-outline-offset-4 data-[type=box]:focus-visible:ring-[calc(6/16*1rem)] data-[type=box]:focus-visible:ring-inset data-[type=box]:focus-visible:ring-yellow-300
  data-[current]:focus-visible:bg-key-100
  [&:has(+_*_[data-current]):focus-visible]:bg-key-50
`;

type MenuListItemSharedAttrs = {
  type: MenuListType;
  size: MenuListSize;
  current?: boolean;
};

export type MenuListItemButtonProps = Omit<ComponentProps<'button'>, 'type'> &
  MenuListItemSharedAttrs;

export const MenuListItemButton = (props: MenuListItemButtonProps) => {
  const { children, className, type, size, current, ...rest } = props;

  return (
    <button
      type='button'
      data-type={type}
      data-size={size}
      data-current={current ? '' : undefined}
      className={`${menuListItemBaseStyle} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export type MenuListItemLinkProps = Omit<ComponentProps<'a'>, 'type'> & MenuListItemSharedAttrs;

export const MenuListItemLink = (props: MenuListItemLinkProps) => {
  const { children, className, type, size, current, ...rest } = props;

  return (
    <a
      data-type={type}
      data-size={size}
      data-current={current ? '' : undefined}
      className={`${menuListItemBaseStyle} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};
```

#### `src/components/MenuList/index.ts`

```tsx
export type {
  MenuListItemButtonProps,
  MenuListItemLinkProps,
  MenuListItemProps,
  MenuListProps,
  MenuListSize,
  MenuListType,
} from './MenuList';
export { MenuList, MenuListItem, MenuListItemButton, MenuListItemLink } from './MenuList';
```

### MenuListBox sources

#### `src/components/MenuListBox/MenuListBox.tsx`

```tsx
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

export type MenuListBoxProps = ComponentProps<'div'>;

export const MenuListBox = forwardRef<HTMLDivElement, MenuListBoxProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={`relative block w-fit text-solid-gray-900 text-dns-16N-120 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  );
});

export type MenuListBoxOpenerSize = 'sm' | 'md';
export type MenuListBoxOpenerStyle = 'text' | 'outlined' | 'filled';
export type MenuListBoxOpenerFontWeight = 'normal' | 'bold';

export type MenuListBoxOpenerProps = Omit<ComponentProps<'button'>, 'type'> & {
  size: MenuListBoxOpenerSize;
  buttonStyle: MenuListBoxOpenerStyle;
  fontWeight?: MenuListBoxOpenerFontWeight;
};

export const MenuListBoxOpener = forwardRef<HTMLButtonElement, MenuListBoxOpenerProps>(
  (props, ref) => {
    const { children, className, size, buttonStyle, fontWeight = 'normal', ...rest } = props;

    return (
      <button
        ref={ref}
        type='button'
        aria-haspopup='menu'
        data-size={size}
        data-style={buttonStyle}
        data-text-weight={fontWeight}
        className={`
          group/menu-list-box-opener
          flex items-center rounded-8 py-1
          data-[size=sm]:min-h-[calc(36/16*1rem)] data-[size=sm]:px-1 data-[size=sm]:gap-x-1
          data-[size=md]:min-h-11 data-[size=md]:px-4 data-[size=md]:gap-x-2
          data-[style=outlined]:border data-[style=outlined]:border-solid-gray-420
          data-[style=filled]:bg-solid-gray-50
          data-[text-weight=bold]:font-bold
          hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          data-[style=outlined]:hover:border-black
          data-[style=filled]:hover:bg-solid-gray-100
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          data-[style=filled]:focus-visible:bg-solid-gray-50
          ${className ?? ''}
        `}
        {...rest}
      >
        {children}
        <svg
          aria-hidden={true}
          className='mt-1 shrink-0 w-4 h-4 group-aria-expanded/menu-list-box-opener:rotate-180'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='m20.5 6.6-8 8-8-8L3.1 8l9.4 9.4L21.9 8l-1.4-1.4Z' />
        </svg>
      </button>
    );
  },
);

export type MenuListBoxPopupProps = ComponentProps<'div'>;

export const MenuListBoxPopup = (props: MenuListBoxPopupProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`
        absolute top-full left-0 z-10
        w-max max-h-[calc((16+44*6.5)/16*1rem)] overflow-y-auto
        rounded-l-8
        border border-solid-gray-420 bg-white
        py-4
        shadow-1
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
```

#### `src/components/MenuListBox/index.ts`

```tsx
export type {
  MenuListBoxOpenerFontWeight,
  MenuListBoxOpenerProps,
  MenuListBoxOpenerSize,
  MenuListBoxOpenerStyle,
  MenuListBoxPopupProps,
  MenuListBoxProps,
} from './MenuListBox';
export { MenuListBox, MenuListBoxOpener, MenuListBoxPopup } from './MenuListBox';
export type {
  MenuItemSelectDetail,
  UseMenuListBoxOptions,
  UseMenuListBoxReturn,
} from './useMenuListBox';
export { useMenuListBox } from './useMenuListBox';
```

#### `src/components/MenuListBox/useMenuListBox.ts`

```tsx
import type { ComponentProps } from 'react';
import { useEffect, useRef, useState } from 'react';

export type MenuItemSelectDetail = {
  selectedValue: string;
  selectedIndex: number;
};

export type UseMenuListBoxOptions = {
  onMenuItemSelect?: (detail: MenuItemSelectDetail) => void;
};

export type UseMenuListBoxReturn = {
  isOpen: boolean;
  rootProps: ComponentProps<'div'>;
  openerProps: Partial<ComponentProps<'button'>>;
  popupProps: ComponentProps<'div'>;
};

const focusItem = (items: HTMLElement[], index: number) => {
  for (const item of items) item.setAttribute('tabindex', '-1');
  items[index].setAttribute('tabindex', '0');
  items[index].focus();
};

export function useMenuListBox(options?: UseMenuListBoxOptions): UseMenuListBoxReturn {
  const { onMenuItemSelect } = options ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  // 'first' | 'last' | null — which item to focus after the menu opens
  const pendingFocusRef = useRef<'first' | 'last' | null>(null);

  // Focus the correct item after the popup mounts.
  useEffect(() => {
    if (!isOpen || pendingFocusRef.current === null) return;

    const items = Array.from(
      rootRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? [],
    );
    if (items.length === 0) return;

    focusItem(items, pendingFocusRef.current === 'first' ? 0 : items.length - 1);

    pendingFocusRef.current = null;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        openerRef.current?.focus();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleRootBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!isOpen) return;
    if (e.relatedTarget && rootRef.current?.contains(e.relatedTarget as Node)) return;
    setIsOpen(false);
  };

  const handleOpenerClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      pendingFocusRef.current = 'first';
      setIsOpen(true);
    }
  };

  const handleOpenerKeydown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const target = e.key === 'ArrowDown' ? 'first' : 'last';
    if (isOpen) {
      const items = Array.from(
        rootRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? [],
      );
      if (items.length > 0) focusItem(items, target === 'first' ? 0 : items.length - 1);
    } else {
      pendingFocusRef.current = target;
      setIsOpen(true);
    }
  };

  // Menuitem selection via click delegation on the popup.
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('[role="menuitem"]');
    if (!item) return;

    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    const selectedIndex = items.indexOf(item);
    if (selectedIndex === -1) return;

    // Prefer data-value attribute; fall back to textContent for plain-text items.
    const selectedValue = item.dataset.value ?? item.textContent?.trim() ?? '';
    onMenuItemSelect?.({ selectedValue, selectedIndex });

    setIsOpen(false);
    openerRef.current?.focus();
  };

  const handlePopupKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    if (items.length === 0) return;

    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < items.length - 1) focusItem(items, currentIndex + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) focusItem(items, currentIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusItem(items, 0);
        break;
      case 'End':
        e.preventDefault();
        focusItem(items, items.length - 1);
        break;
    }
  };

  return {
    isOpen,
    rootProps: {
      ref: rootRef,
      onBlur: handleRootBlur,
    },
    openerProps: {
      ref: openerRef,
      'aria-expanded': isOpen,
      onClick: handleOpenerClick,
      onKeyDown: handleOpenerKeydown,
    },
    popupProps: {
      onClick: handlePopupClick,
      onKeyDown: handlePopupKeydown,
    },
  };
}
```

### ModalDialog sources

#### `src/components/ModalDialog/ModalDialog.tsx`

```tsx
import { type ComponentProps, type CSSProperties, forwardRef } from 'react';

export type ModalDialogProps = ComponentProps<'dialog'> & {
  scroll?: 'inner' | 'outer';
  width?: string;
};

export const ModalDialog = forwardRef<HTMLDialogElement, ModalDialogProps>(
  ({ children, className, scroll, width, style, ...rest }, ref) => {
    const mergedStyle: CSSProperties = {
      ...style,
      ['--modal-dialog-width' as string]: width ?? 'fit-content',
    };

    return (
      <dialog
        ref={ref}
        className={`
          group/modal-dialog
          inset-0 w-auto h-auto max-w-none max-h-none border-0 bg-transparent px-4
          [container-type:inline-size] [color-scheme:dark] break-words
          text-std-16N-170
          [&:modal]:flex [&:modal]:flex-col [&:modal]:items-center
          backdrop:bg-opacity-gray-600 forced-colors:backdrop:bg-[#000b]
          [scrollbar-gutter:stable] data-[scroll=inner]:[scrollbar-gutter:auto]
          ${className ?? ''}
        `}
        data-scroll={scroll}
        style={mergedStyle}
        {...rest}
      >
        <div className='shrink-[9999] w-px h-[calc(120/16*1rem)] min-h-4'></div>
        {children}
        <div className='shrink-[9999] w-px h-[calc(120/16*1rem)] min-h-4'></div>
      </dialog>
    );
  },
);

export type ModalDialogContentProps = ComponentProps<'div'>;

export const ModalDialogContent = ({ className, ...rest }: ModalDialogContentProps) => (
  <div
    className={`
      flex flex-col gap-y-3 shrink-0
      w-[var(--modal-dialog-width)] min-w-[min(30rem,calc(100cqw-2rem))] max-w-full min-h-0
      rounded-8 border border-black bg-white shadow-3 text-solid-gray-800 [color-scheme:light]
      md:gap-y-4
      group-data-[scroll=inner]/modal-dialog:shrink group-data-[scroll=inner]/modal-dialog:[scrollbar-width:thin] group-data-[scroll=inner]/modal-dialog:[&:not(:has(.modal-dialog-scroll-area))]:overflow-y-auto
      ${className ?? ''}
    `}
    {...rest}
  />
);

export type ModalDialogHeaderProps = ComponentProps<'div'>;

export const ModalDialogHeader = ({ className, ...rest }: ModalDialogHeaderProps) => (
  <div
    className={`flex items-start shrink-0 gap-x-4 min-w-0 pt-2 px-4 md:pt-6 md:px-6 ${className ?? ''}`}
    {...rest}
  />
);

export type ModalDialogHeadingProps = ComponentProps<'h2'>;

export const ModalDialogHeading = forwardRef<HTMLHeadingElement, ModalDialogHeadingProps>(
  ({ className, tabIndex = -1, ...rest }, ref) => (
    <h2
      ref={ref}
      tabIndex={tabIndex}
      className={`
        grow min-w-0 text-std-24B-150 md:text-std-28B-150
        focus-visible:outline-none focus-visible:rounded-none focus-visible:shadow-none
        ${className ?? ''}
      `}
      {...rest}
    />
  ),
);

export type ModalDialogCloseProps = Omit<ComponentProps<'button'>, 'children'>;

export const ModalDialogClose = ({ className, ...rest }: ModalDialogCloseProps) => (
  <button
    type='button'
    className={`
      flex items-center shrink-0 gap-x-1 w-fit rounded-6 touch-manipulation
      pt-1 px-3 pb-1.5
      text-solid-gray-800 text-oln-16N-100
      hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
      focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
      ${className ?? ''}
    `}
    {...rest}
  >
    <svg
      className='mt-[calc(2/16*1rem)] w-6 h-6 shrink-0 text-black forced-colors:text-current'
      width='24'
      height='24'
      viewBox='0 0 120 120'
      aria-hidden='true'
    >
      <path
        d='M32 95L25 88L53 60L25 32L32 25L60 53L88 25L95 32L67 60L95 88L88 95L60 67L32 95Z'
        fill='currentColor'
      />
    </svg>
    閉じる
  </button>
);

export type ModalDialogBodyProps = ComponentProps<'div'>;

export const ModalDialogBody = ({ className, ...rest }: ModalDialogBodyProps) => (
  <div className={`shrink-0 min-w-0 px-4 pb-8 md:px-6 ${className ?? ''}`} {...rest} />
);

export type ModalDialogActionsProps = ComponentProps<'div'>;

export const ModalDialogActions = ({ className, ...rest }: ModalDialogActionsProps) => (
  <div className={`shrink-0 min-w-0 px-4 pb-4 md:px-6 md:pb-6 ${className ?? ''}`} {...rest} />
);

export type ModalDialogScrollAreaProps = ComponentProps<'div'>;

export const ModalDialogScrollArea = ({ className, ...rest }: ModalDialogScrollAreaProps) => (
  <div
    className={`
      modal-dialog-scroll-area
      flex flex-col gap-y-3 overflow-y-auto [scrollbar-width:thin]
      [&:not(:first-child)]:-mt-1 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-solid-gray-600
      [&:not(:last-child)]:mb-1 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-solid-gray-600
      md:gap-y-4 md:[&:not(:first-child)]:mt-2 md:[&:not(:last-child)]:mb-2
      ${className ?? ''}
    `}
    {...rest}
  />
);
```

#### `src/components/ModalDialog/index.ts`

```tsx
export * from './ModalDialog';
export * from './useModalDialog';
```

#### `src/components/ModalDialog/useModalDialog.ts`

```tsx
import { type RefObject, useEffect, useId, useRef } from 'react';

export type ModalDialogRequestCloseEvent = {
  defaultPrevented: boolean;
  preventDefault: () => void;
};

export type UseModalDialogOptions = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestClose?: (event: ModalDialogRequestCloseEvent) => void;
};

export type UseModalDialogResult = {
  dialogProps: {
    ref: RefObject<HTMLDialogElement>;
    'aria-labelledby': string;
  };
  headingProps: {
    ref: RefObject<HTMLHeadingElement>;
    id: string;
  };
  closeButtonProps: {
    onClick: () => void;
  };
};

export const useModalDialog = (options: UseModalDialogOptions): UseModalDialogResult => {
  const { open, onOpenChange, onRequestClose } = options;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingId = useId();

  const executeRequestClose = () => {
    const event: ModalDialogRequestCloseEvent = {
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true;
      },
    };
    onRequestClose?.(event);
    if (!event.defaultPrevented) onOpenChange(false);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
        headingRef.current?.focus();
      }
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      executeRequestClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  });

  return {
    dialogProps: {
      ref: dialogRef,
      'aria-labelledby': headingId,
    },
    headingProps: {
      ref: headingRef,
      id: headingId,
    },
    closeButtonProps: {
      onClick: () => executeRequestClose(),
    },
  };
};
```

### NotificationBanner sources

#### `src/components/NotificationBanner/NotificationBanner.tsx`

```tsx
import type { ReactNode } from 'react';
import { NotificationBannerIcon } from './parts/Icon';
import { bannerStyleClasses, bannerTypeClasses } from './styles';
import type {
  NotificationBannerHeadingLevel,
  NotificationBannerStyle,
  NotificationBannerType,
} from './types';

type Props = {
  className?: string;
  children: ReactNode;
  bannerStyle: NotificationBannerStyle;
  type: NotificationBannerType;
  title: string;
  headingLevel?: NotificationBannerHeadingLevel;
};

export const NotificationBanner = (props: Props) => {
  const { className, children, bannerStyle, type, title, headingLevel } = props;
  const Tag = headingLevel ?? 'div';

  return (
    <div
      className={`
        grid grid-cols-[var(--icon-size)_1fr_minmax(0,auto)] grid-rows-[minmax(calc(36/16*1rem),auto)] border-current px-4 pt-2 pb-6 [--icon-size:calc(24/16*1rem)] gap-4
        desktop:gap-x-6 desktop:px-6 desktop:pt-6 desktop:pb-8 desktop:[--icon-size:calc(36/16*1rem)]
        ${bannerStyleClasses}
        ${bannerTypeClasses}
        ${className ?? ''}
      `}
      data-type={type}
      data-style={bannerStyle}
    >
      <Tag className={`col-span-2 grid grid-cols-[inherit] gap-[inherit]`}>
        <NotificationBannerIcon
          className='justify-self-center mt-[calc(3/16*1rem)] size-7 max-w-none max-h-none desktop:size-11 desktop:-my-1'
          type={type}
        />
        <span className='pt-[calc(3/16*1rem)] text-std-17B-170 text-solid-gray-900 desktop:text-std-20B-150 desktop:pt-0.5'>
          {title}
        </span>
      </Tag>
      {children}
    </div>
  );
};
```

#### `src/components/NotificationBanner/index.ts`

```tsx
export { NotificationBanner } from './NotificationBanner';
export { NotificationBannerBody } from './parts/Body';
export { NotificationBannerClose } from './parts/Close';
export { NotificationBannerMobileClose } from './parts/MobileClose';
```

#### `src/components/NotificationBanner/parts/Body.tsx`

```tsx
import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export const NotificationBannerBody = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={`
        col-start-1 -col-end-1 desktop:col-start-2 text-std-16N-170 text-solid-gray-800 grid gap-y-2
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
```

#### `src/components/NotificationBanner/parts/Close.tsx`

```tsx
import type { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
  label?: string;
};

export const NotificationBannerClose = (props: Props) => {
  const { className, label, ...rest } = props;

  return (
    <button
      className={`
        -mr-3 inline-flex items-center self-start gap-1 rounded-6 px-3 pb-1.5 pt-1 text-solid-gray-900
        hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
        focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      type='button'
      {...rest}
    >
      <svg
        aria-hidden={true}
        className='mt-0.5 size-6'
        fill='none'
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <g>
          <path
            d='m6.4 18.6-1-1 5.5-5.6-5.6-5.6 1.1-1 5.6 5.5 5.6-5.6 1 1.1L13 12l5.6 5.6-1 1L12 13l-5.6 5.6Z'
            fill='currentColor'
          />
        </g>
      </svg>
      <span className='text-oln-16N-100'>{label ?? '閉じる'}</span>
    </button>
  );
};
```

#### `src/components/NotificationBanner/parts/Icon.tsx`

```tsx
import type { ComponentProps } from 'react';
import type { NotificationBannerType } from '../types';

type IconProps = ComponentProps<'svg'>;

const InfoIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='インフォメーション'
      fill='none'
      height='24'
      role='img'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <circle cx='12' cy='12' r='10' fill='currentcolor' />
      <circle cx='12' cy='8' r='1' fill='Canvas' />
      <path d='M11 11h2v6h-2z' fill='Canvas' />
    </svg>
  );
};

const WarningIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='警告'
      fill='none'
      height='24'
      role='img'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <path d='M1 21 12 2l11 19H1Z' fill='currentcolor' />
      <path d='M13 15h-2v-5h2v5Z' fill='Canvas' />
      <circle cx='12' cy='17' r='1' fill='Canvas' />
    </svg>
  );
};

const ErrorIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='エラー'
      fill='none'
      height='24'
      role='img'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <path d='M8.25 21 3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21h-7.5Z' fill='currentcolor' />
      <path
        d='m12 13.4-2.85 2.85-1.4-1.4L10.6 12 7.75 9.15l1.4-1.4L12 10.6l2.85-2.85 1.4 1.4L13.4 12l2.85 2.85-1.4 1.4L12 13.4Z'
        fill='Canvas'
      />
    </svg>
  );
};

const SuccessIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='成功'
      fill='none'
      height='24'
      role='img'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <circle cx='12' cy='12' r='10' fill='currentcolor' />
      <path d='m17.6 9.6-7 7-4.3-4.3L7.7 11l2.9 2.9 5.7-5.6 1.3 1.4Z' fill='Canvas' />
    </svg>
  );
};

type NotificationBannerIconProps = ComponentProps<'svg'> & {
  type: NotificationBannerType;
};

export const NotificationBannerIcon = (props: NotificationBannerIconProps) => {
  const { type, className } = props;

  switch (type) {
    case 'info1':
    case 'info2':
      return <InfoIcon className={className} />;
    case 'warning':
      return <WarningIcon className={className} />;
    case 'error':
      return <ErrorIcon className={className} />;
    case 'success':
      return <SuccessIcon className={className} />;
    default:
      return null;
  }
};
```

#### `src/components/NotificationBanner/parts/MobileClose.tsx`

```tsx
import type { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {};

export const NotificationBannerMobileClose = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <button
      className={`
        mt-1 self-start touch-manipulation rounded-4 text-solid-gray-900
        hover:bg-solid-gray-50 hover:outline hover:outline-1
        focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      type='button'
      {...rest}
    >
      <svg className='' width='44' height='44' viewBox='0 0 44 44' role='img' aria-label='閉じる'>
        <path
          d='m13 26-2-2 9-9-9-9 2-2 9 9 9-9 2 2-9 9 9 9-2 2-9-9-9 9ZM11.8 30v3.6H9v5.3H8V30h3.8ZM9 32.1v.7h1.7V32H9Zm0-.7h1.7v-.6H9v.6ZM16.4 30v7.6c0 .5 0 1-.5 1.1-.4.2-1 .2-2 .2 0-.3-.1-.7-.3-1h1.5c.2 0 .2-.1.2-.3v-4h-2.8V30h4Zm-2.8 2.1v.7h1.7v-.7h-1.7Zm0-1.3v.6h1.7v-.6h-1.7ZM13.3 34.6h1.4v.9h-1.4v2.2c0 .5 0 .7-.4.8-.3.2-.7.2-1.3.2l-.3-.9h.9l.1-.1v-1.5a8 8 0 0 1-2.3 1.9l-.6-.8c1-.4 1.8-1 2.5-1.8H9.7v-1h2.6v-.7h1v.8ZM23 31l1 1.6-.9.4c-.2-.6-.5-1.1-.9-1.6l.8-.3Zm1.3-.5 1 1.6-.8.4-1-1.6.8-.4Zm-4-.3c-.2 2-.1 4-.2 6 0 .3 0 .6.2.8.3.4.7.5 1.3.5 1.7 0 2.7-1 3.4-2l.9 1a5.3 5.3 0 0 1-4.3 2.2c-1 0-2-.3-2.3-1-.3-.3-.3-.6-.3-1.2v-6.3h1.4ZM28.8 30.5H31a60.3 60.3 0 0 0 2.8-.1l.6.8c-1.1.6-2 1.5-3 2.3l1-.1c1.5 0 3 .9 3 2.4 0 1.1-.6 2-1.6 2.4-.5.3-1.2.4-2 .4-1 0-2.3-.4-2.3-1.6 0-.9.8-1.5 1.7-1.5a2 2 0 0 1 2.1 2l-1 .2c0-.7-.4-1.3-1.1-1.3-.3 0-.7.2-.7.5 0 .6.7.7 1.1.7 1.7 0 2.6-.7 2.6-1.8 0-1-1.2-1.6-2-1.6-.9 0-1.5.2-2 .6-.7.3-1.2.8-1.8 1.5l-.8-.9 2.6-2.1 2.1-1.8c-1.1 0-2.2 0-3.3.2v-1.2Z'
          fill='currentcolor'
        ></path>
      </svg>
    </button>
  );
};
```

#### `src/components/NotificationBanner/styles.ts`

```tsx
export const bannerStyleClasses = `
  data-[style=standard]:border-[calc(3/16*1rem)] data-[style=standard]:rounded-12
  data-[style=color-chip]:[--color-chip-color:currentColor] data-[style=color-chip]:border-[calc(2/16*1rem)] data-[style=color-chip]:!pl-6 data-[style=color-chip]:shadow-[inset_calc(8/16*1rem)_0_0_0_var(--color-chip-color)]
  data-[style=color-chip]:desktop:!pl-10 data-[style=color-chip]:desktop:shadow-[inset_calc(16/16*1rem)_0_0_0_var(--color-chip-color)]
`;

export const bannerTypeClasses = `
  data-[type=info1]:text-blue-900
  data-[type=info2]:text-solid-gray-536
  data-[type=warning]:text-warning-yellow-2 data-[type=warning]:[--color-chip-color:theme(colors.yellow.400)]
  data-[type=error]:text-error-1
  data-[type=success]:text-success-2
`;
```

#### `src/components/NotificationBanner/types.ts`

```tsx
export type NotificationBannerHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type NotificationBannerStyle = 'standard' | 'color-chip';
export type NotificationBannerType = 'info1' | 'info2' | 'warning' | 'error' | 'success';
```

### PageNavigation sources

#### `src/components/PageNavigation/PageNavigation.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';
import { Button, type ButtonProps, type ButtonVariant } from '../Button';
import { Slot } from '../Slot';

export type PageNavigationProps = ComponentProps<'nav'>;

export const PageNavigation = forwardRef<HTMLElement, PageNavigationProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <nav
      className={`flex items-center gap-4 text-oln-16N-100 text-solid-gray-800 ${className ?? ''}`}
      ref={ref}
      {...rest}
    >
      {children}
    </nav>
  );
});

export type PageNavigationCounterProps = ComponentProps<'span'>;

export const PageNavigationCounter = forwardRef<HTMLSpanElement, PageNavigationCounterProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <span
        className={`min-w-[3.75rem] whitespace-nowrap text-center text-oln-16N-100 text-solid-gray-900 ${className ?? ''}`}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );
  },
);

export type PageNavigationControl = 'prev' | 'next';

const pageNavigationButtonControlStyle: Partial<
  Record<ButtonVariant, Record<PageNavigationControl, string>>
> = {
  text: {
    prev: 'data-[control=prev]:pl-2',
    next: 'data-[control=next]:pr-2',
  },
  outline: {
    prev: 'data-[control=prev]:pr-6',
    next: 'data-[control=next]:pl-6',
  },
};

export type PageNavigationButtonProps = ButtonProps & {
  control: PageNavigationControl;
};

export const PageNavigationButton = forwardRef<HTMLButtonElement, PageNavigationButtonProps>(
  (props, ref) => {
    const { className, control, variant, ...rest } = props;

    const controlStyle = variant ? pageNavigationButtonControlStyle[variant]?.[control] : undefined;

    return (
      <Button
        className={`${controlStyle ?? ''} ${className ?? ''}`}
        data-control={control}
        ref={ref}
        variant={variant}
        {...(rest as ButtonProps)}
      />
    );
  },
);

export type PageNavigationArrowButtonSize = 'lg' | 'md' | 'sm' | 'xs';

const pageNavigationArrowButtonSizeStyle: Record<PageNavigationArrowButtonSize, string> = {
  lg: 'size-11',
  md: 'relative size-8 after:absolute after:-inset-full after:m-auto after:size-11',
  sm: 'relative size-6 after:absolute after:-inset-full after:m-auto after:size-11',
  xs: 'relative size-5 after:absolute after:-inset-full after:m-auto after:size-11',
};

const pageNavigationArrowButtonHoverBorderStyle: Record<PageNavigationArrowButtonSize, string> = {
  lg: 'hover:border-[3px]',
  md: 'hover:border-[3px]',
  sm: 'hover:border-2',
  xs: 'hover:border-2',
};

const pageNavigationArrowButtonBaseStyle = `
  flex shrink-0 items-center justify-center
  rounded-full border border-current bg-white text-key-1000
  hover:bg-key-200
  active:bg-key-300 active:text-key-1200
  focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
`;

export type PageNavigationArrowButtonProps = {
  className?: string;
  size: PageNavigationArrowButtonSize;
} & (
  | ({ asChild?: false; label: string } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
);

export const PageNavigationArrowButton = forwardRef<
  HTMLButtonElement,
  PageNavigationArrowButtonProps
>((props, ref) => {
  const { size, className } = props;

  const classNames = `
    ${pageNavigationArrowButtonBaseStyle}
    ${pageNavigationArrowButtonSizeStyle[size]}
    ${pageNavigationArrowButtonHoverBorderStyle[size]}
    ${className ?? ''}
  `;

  if (props.asChild) {
    const { asChild: _asChild, children, className: _className, size: _size, ...rest } = props;

    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  const { asChild: _asChild, children, className: _className, label, size: _size, ...rest } = props;

  return (
    <button className={classNames} type='button' {...rest} ref={ref}>
      {children}
      <span className='sr-only'>{label}</span>
    </button>
  );
});
```

#### `src/components/PageNavigation/index.ts`

```tsx
export type {
  PageNavigationArrowButtonProps,
  PageNavigationArrowButtonSize,
  PageNavigationButtonProps,
  PageNavigationControl,
  PageNavigationCounterProps,
  PageNavigationProps,
} from './PageNavigation';
export {
  PageNavigation,
  PageNavigationArrowButton,
  PageNavigationButton,
  PageNavigationCounter,
} from './PageNavigation';
```

### ProgressIndicator sources

#### `src/components/ProgressIndicator/ProgressIndicator.tsx`

```tsx
import type { ComponentProps, CSSProperties } from 'react';
import './keyframes.css';
import type { ProgressIndicatorSize, ProgressIndicatorType } from './types';

export type ProgressIndicatorProps = Omit<ComponentProps<'div'>, 'role' | 'type'> & {
  type: ProgressIndicatorType;
  value?: number;
  active?: boolean;
};

const clampValue = (value: number) => Math.min(100, Math.max(0, value));

export const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { children, className, type, value, active = true, style, ...rest } = props;

  if (!active) return null;

  const hasValue = value !== undefined && Number.isFinite(value);
  const normalizedValue = hasValue ? clampValue(value as number) : undefined;
  const isIndeterminate = normalizedValue === undefined;

  const mergedStyle: CSSProperties = {
    ...style,
    ...(normalizedValue !== undefined ? { ['--value' as string]: String(normalizedValue) } : {}),
  };

  return (
    <div
      className={`
        group/progress-indicator flex justify-center items-center gap-y-4 gap-x-2 text-solid-gray-900 text-std-16N-170
        data-[type=stacked]:flex-col
        data-[type=stacked-underlay]:flex-col data-[type=stacked-underlay]:mx-auto data-[type=stacked-underlay]:box-border data-[type=stacked-underlay]:w-fit data-[type=stacked-underlay]:rounded-16 data-[type=stacked-underlay]:border data-[type=stacked-underlay]:border-solid-gray-500 data-[type=stacked-underlay]:bg-white
        data-[type=stacked-underlay]:has-[[data-indicator=spinner]]:min-w-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=spinner]]:min-h-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=spinner]]:p-4
        data-[type=stacked-underlay]:has-[[data-indicator=static]]:min-w-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=static]]:min-h-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=static]]:p-4
        data-[type=stacked-underlay]:has-[[data-indicator=linear]]:p-6
        ${className ?? ''}
      `}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalizedValue}
      data-type={type}
      data-indeterminate={isIndeterminate ? '' : undefined}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </div>
  );
};

// --- Spinner ---

const spinnerBarAnimationClass = `
  group-data-[indeterminate]/progress-indicator:[animation:dads-spinner-bar-rotate_2.5s_cubic-bezier(0.4,0,0.3,1)_infinite,dads-spinner-bar-dash_2.5s_cubic-bezier(0.4,0,0.3,1)_infinite]
  motion-reduce:![animation:none]
`;

const spinnerOuterGroupAnimationClass = `
  group-data-[indeterminate]/progress-indicator:[animation:dads-spinner-rotate_13s_linear_infinite]
  motion-reduce:![animation:none]
`;

const spinnerInnerGroupAnimationClass = `
  group-data-[indeterminate]/progress-indicator:[animation:dads-spinner-group-rotate_2.5s_linear_infinite]
  motion-reduce:![animation:none]
`;

export type ProgressIndicatorSpinnerProps = Omit<ComponentProps<'svg'>, 'children'> & {
  size?: ProgressIndicatorSize;
};

export const ProgressIndicatorSpinner = (props: ProgressIndicatorSpinnerProps) => {
  const { size = 'lg', className, ...rest } = props;
  const isLg = size === 'lg';
  const dimension = isLg ? 48 : 24;
  const center = isLg ? 24 : 12;
  const radius = isLg ? 22 : 8;
  const outerRadius = isLg ? 23.5 : 9.5;
  const strokeWidth = isLg ? 4 : 3;

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={`0 0 ${dimension} ${dimension}`}
      stroke='currentcolor'
      fill='none'
      aria-hidden={true}
      data-indicator='spinner'
      className={className ?? ''}
      {...rest}
    >
      <circle
        className='stroke-current text-key-100 forced-colors:text-[Canvas]'
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <g className={`[transform-origin:center] ${spinnerOuterGroupAnimationClass}`}>
        <g className={`[transform-origin:center] ${spinnerInnerGroupAnimationClass}`}>
          <circle
            className={`
              text-key-1200 [stroke-dasharray:100] [transform:rotate(-90deg)] [transform-origin:center]
              [stroke-dashoffset:calc(100-clamp(0,var(--value,35),100))]
              forced-colors:text-[CanvasText]
              ${spinnerBarAnimationClass}
            `}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            pathLength={100}
          />
        </g>
      </g>
      <circle
        className='text-key-1200 forced-colors:text-[CanvasText]'
        cx={center}
        cy={center}
        r={outerRadius}
        strokeWidth={1}
      />
    </svg>
  );
};

// --- Linear ---

const linearBarClass = `
  [stroke-dasharray:100]
  group-data-[indeterminate]/progress-indicator:[stroke-dasharray:35_65]
  group-data-[indeterminate]/progress-indicator:[animation:dads-linear-rotate_4s_linear_infinite]
  motion-reduce:![animation:none]
`;

export type ProgressIndicatorLinearProps = Omit<ComponentProps<'svg'>, 'children'> & {
  size?: ProgressIndicatorSize;
};

export const ProgressIndicatorLinear = (props: ProgressIndicatorLinearProps) => {
  const { size = 'lg', className, ...rest } = props;
  const width = size === 'lg' ? 240 : 80;

  return (
    <svg
      width={width}
      height={4}
      viewBox={`0 0 ${width} 4`}
      stroke='currentcolor'
      fill='none'
      aria-hidden={true}
      data-indicator='linear'
      className={className ?? ''}
      {...rest}
    >
      <line
        className='stroke-current text-key-100 forced-colors:text-[Canvas]'
        x1={0}
        y1={2}
        x2={width}
        y2={2}
        strokeWidth={4}
      />
      <line
        className={`
          text-key-1200 forced-colors:text-[CanvasText]
          [stroke-dashoffset:calc(100-clamp(0,var(--value,35),100))]
          ${linearBarClass}
        `}
        x1={0}
        y1={2}
        x2={width}
        y2={2}
        strokeWidth={4}
        pathLength={100}
      />
      <line
        className='text-key-1200 forced-colors:text-[CanvasText]'
        x1={0}
        y1={3.5}
        x2={width}
        y2={3.5}
        strokeWidth={1}
      />
    </svg>
  );
};

// --- Static ---

export type ProgressIndicatorStaticProps = Omit<ComponentProps<'svg'>, 'children'> & {
  size?: ProgressIndicatorSize;
};

export const ProgressIndicatorStatic = (props: ProgressIndicatorStaticProps) => {
  const { size = 'lg', className, ...rest } = props;

  if (size === 'lg') {
    return (
      <svg
        width={48}
        height={48}
        viewBox='0 0 48 48'
        fill='none'
        aria-hidden={true}
        data-indicator='static'
        className={`text-key-1200 forced-colors:text-[CanvasText] ${className ?? ''}`}
        {...rest}
      >
        <path
          fill='currentcolor'
          d='M17 15c0 2.5 2.2 7 7 7s7-5 7-7H17ZM15 42h18c0-2-1-4.5-1-4.5L24 34l-8 3.5S15 40 15 42Z'
        />
        <path
          fill='none'
          stroke='currentcolor'
          strokeWidth={2}
          d='M24 24C34.5 24 35.5 6 35.5 4.8V4M24 24C13.5 24 12.5 6 12.5 4.8V4M24 24c7 0 11.5 11.8 11.5 18.3V44M24 24c-7 0-11.5 11.8-11.5 18.3V44M9 4h30M9 44h30'
        />
        <circle cx={24} cy={28} r={1} fill='currentcolor' />
        <circle cx={24} cy={31} r={1} fill='currentcolor' />
      </svg>
    );
  }

  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden={true}
      data-indicator='static'
      className={`text-key-1200 forced-colors:text-[CanvasText] ${className ?? ''}`}
      {...rest}
    >
      <path
        fill='currentcolor'
        d='M9 6c0 1.8 1.1 5 3.5 5S16 7.4 16 6H9ZM8 21h9c0-1-.5-2.2-.5-2.2l-4-1.8-4 1.8S8 20 8 21Z'
      />
      <path
        fill='none'
        stroke='currentcolor'
        d='M4 1.5h17m-17 21h17M6 1.5C6 5.1 7.6 12 12.5 12S18.9 5 19 1.5M19 22.5c.3-3.7-2.2-10.5-6.5-10.5S5.7 18.8 6 22.5'
      />
      <circle cx={12.5} cy={13.5} r={0.5} fill='currentcolor' />
      <circle cx={12.5} cy={15.5} r={0.5} fill='currentcolor' />
    </svg>
  );
};
```

#### `src/components/ProgressIndicator/index.ts`

```tsx
export type {
  ProgressIndicatorLinearProps,
  ProgressIndicatorProps,
  ProgressIndicatorSpinnerProps,
  ProgressIndicatorStaticProps,
} from './ProgressIndicator';
export {
  ProgressIndicator,
  ProgressIndicatorLinear,
  ProgressIndicatorSpinner,
  ProgressIndicatorStatic,
} from './ProgressIndicator';
export type { ProgressIndicatorSize, ProgressIndicatorType } from './types';
export type {
  ProgressIndicatorAnnouncerMessages,
  UseProgressIndicatorAnnouncerProps,
} from './useProgressIndicatorAnnouncer';
export { useProgressIndicatorAnnouncer } from './useProgressIndicatorAnnouncer';
```

#### `src/components/ProgressIndicator/types.ts`

```tsx
export type ProgressIndicatorType = 'stacked' | 'inlined' | 'stacked-underlay';
export type ProgressIndicatorSize = 'lg' | 'sm';
```

#### `src/components/ProgressIndicator/useProgressIndicatorAnnouncer.ts`

```tsx
import { useEffect, useRef, useState } from 'react';

const DEFAULT_ANNOUNCE_INTERVAL_SEC = 5;

export type ProgressIndicatorAnnouncerMessages = {
  start?: string;
  end?: string;
  long?: string;
  longWithValue?: string;
};

const defaultMessages: Required<ProgressIndicatorAnnouncerMessages> = {
  start: '読み込みを開始しました',
  end: '読み込みが完了しました',
  long: '読み込み中です',
  longWithValue: '{value}% 読み込みました。',
};

export type UseProgressIndicatorAnnouncerProps = {
  active: boolean;
  value?: number;
  announceInterval?: number;
  messages?: ProgressIndicatorAnnouncerMessages;
};

const format = (template: string, variables: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key) =>
    variables[key] !== undefined ? String(variables[key]) : match,
  );

/**
 * スクリーンリーダーへの通知テキストを管理する hook。
 * 戻り値を `role="status"` のビジュアル上隠した要素に差し込んで使用する。
 */
export const useProgressIndicatorAnnouncer = (props: UseProgressIndicatorAnnouncerProps) => {
  const { active, value, announceInterval, messages } = props;
  const [text, setText] = useState('');

  const valueRef = useRef(value);
  valueRef.current = value;

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const previousActiveRef = useRef(false);

  useEffect(() => {
    const getMessage = (key: keyof ProgressIndicatorAnnouncerMessages) =>
      messagesRef.current?.[key] ?? defaultMessages[key];

    const timers: number[] = [];

    const announce = (nextText: string) => {
      const showTimer = window.setTimeout(() => {
        setText(nextText);
        const clearTextTimer = window.setTimeout(() => setText(''), 1000);
        timers.push(clearTextTimer);
      }, 100);
      timers.push(showTimer);
    };

    const announceLong = () => {
      const currentValue = valueRef.current;
      if (currentValue !== undefined && Number.isFinite(currentValue)) {
        announce(format(getMessage('longWithValue'), { value: Math.round(currentValue) }));
      } else {
        announce(getMessage('long'));
      }
    };

    const wasActive = previousActiveRef.current;
    previousActiveRef.current = active;

    if (active) {
      if (!wasActive) {
        announce(getMessage('start'));
      }

      const intervalMs =
        (announceInterval && announceInterval > 0
          ? announceInterval
          : DEFAULT_ANNOUNCE_INTERVAL_SEC) * 1000;

      const longTimer = window.setTimeout(() => {
        announceLong();
        const repeatTimer = window.setInterval(announceLong, intervalMs);
        timers.push(repeatTimer);
      }, intervalMs);
      timers.push(longTimer);
    } else if (wasActive) {
      announce(getMessage('end'));
    }

    return () => {
      for (const id of timers) {
        window.clearTimeout(id);
        window.clearInterval(id);
      }
    };
  }, [active, announceInterval]);

  return text;
};
```

### Radio sources

#### `src/components/Radio/Radio.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export type RadioProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: RadioSize;
  isError?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, isError, onClick, size = 'sm', ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  const radio = (
    <span
      className={`
        flex items-center justify-center shrink-0 rounded-full
        data-[size=sm]:size-6 data-[size=md]:size-8 data-[size=lg]:size-11
        has-[input:hover:not(:focus):not(:disabled):not([aria-disabled="true"])]:bg-solid-gray-420
      `}
      data-size={size}
    >
      <input
        className={`
          appearance-none size-[calc(5/6*100%)] rounded-full border-solid-gray-600 bg-white
          hover:border-black
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          checked:border-key-900 checked:before:bg-key-900 checked:hover:border-key-1100 checked:hover:before:bg-key-1100
          before:hidden before:size-full before:bg-white before:[clip-path:circle(calc(5/16*100%))]
          checked:before:block
          data-[size=sm]:border-[calc(2/16*1rem)]
          data-[size=md]:border-[calc(2/16*1rem)]
          data-[size=lg]:border-[calc(3/16*1rem)]
          data-[error]:border-error-1 data-[error]:hover:border-red-1000 data-[error]:checked:before:bg-error-1 data-[error]:checked:hover:before:bg-red-1000
          aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:before:!bg-solid-gray-300
          disabled:!border-solid-gray-300 disabled:!bg-solid-gray-50 disabled:checked:before:!bg-solid-gray-300
          forced-colors:!border-[ButtonText] forced-colors:checked:!border-[Highlight] forced-colors:checked:before:!bg-[Highlight] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:before:!bg-[GrayText] forced-colors:disabled:!border-[GrayText] forced-colors:disabled:checked:before:!bg-[GrayText]
        `}
        ref={ref}
        type='radio'
        onClick={props['aria-disabled'] ? handleDisabled : onClick}
        data-size={size}
        data-error={isError || null}
        {...rest}
      />
    </span>
  );

  return children ? (
    <label
      className='flex w-fit items-start py-2 data-[size=sm]:gap-1 data-[size=md]:gap-2 data-[size=lg]:gap-3'
      data-size={size}
    >
      {radio}
      <span
        className='text-solid-gray-800 data-[size=sm]:pt-px data-[size=sm]:text-dns-16N-130 data-[size=md]:pt-1 data-[size=md]:text-dns-16N-130 data-[size=lg]:pt-2.5 data-[size=lg]:text-dns-17N-130'
        data-size={size}
      >
        {children}
      </span>
    </label>
  ) : (
    radio
  );
});
```

#### `src/components/Radio/index.ts`

```tsx
export { Radio } from './Radio';
```

### RequirementBadge sources

#### `src/components/RequirementBadge/RequirementBadge.tsx`

```tsx
import type { ComponentProps } from 'react';

export type RequirementBadgeProps = ComponentProps<'span'> & {
  isOptional?: boolean;
};

export const RequirementBadge = (props: RequirementBadgeProps) => {
  const { children, className, isOptional, ...rest } = props;

  return (
    <span
      className={`
        ml-2 inline-block text-oln-16N-100 text-red-800
        data-[is-optional]:text-solid-gray-800
        ${className ?? ''}
      `}
      data-is-optional={isOptional || undefined}
      {...rest}
    >
      {children}
    </span>
  );
};
```

#### `src/components/RequirementBadge/index.ts`

```tsx
export { RequirementBadge } from './RequirementBadge';
```

### ResourceList sources

#### `src/components/ResourceList/ResourceList.tsx`

```tsx
import type { ComponentProps, ElementType } from 'react';
import { Slot } from '../Slot';

// ======================== ResourceList ========================

export type ResourceListVariant = 'list' | 'frame';

export type ResourceListProps = ComponentProps<'div'> & {
  variant: ResourceListVariant;
  interaction?: 'whole';
};

export const ResourceList = ({
  children,
  className,
  variant,
  interaction,
  ...rest
}: ResourceListProps) => (
  <div
    className={`
      group/resource-list
      flex items-center bg-white text-solid-gray-800 [overflow-wrap:anywhere]
      [--border-color:theme(colors.solid-gray.420)]
      data-[style=list]:border data-[style=list]:border-transparent data-[style=list]:border-b-[color:var(--border-color)]
      data-[style=frame]:rounded-16 data-[style=frame]:border data-[style=frame]:border-[color:var(--border-color)]
      has-[:checked:enabled]:bg-key-50 has-[:checked:enabled]:[--border-color:theme(colors.solid-gray.500)]
      has-[:disabled]:[--border-color:theme(colors.solid-gray.300)]
      data-[interaction=whole]:has-[:disabled]:bg-solid-gray-50 data-[interaction=whole]:has-[:disabled]:text-solid-gray-420
      ${className ?? ''}
    `}
    data-style={variant}
    data-interaction={interaction}
    {...rest}
  >
    {children}
  </div>
);

// ======================== ResourceListBody ========================

const bodyClass = `
  relative z-0 flex grow items-center gap-4 rounded-[inherit] outline-offset-[calc(-1/16*1rem)] p-4
  [&:not(:last-child)]:rounded-r-none
  [&:any-link:hover]:outline [&:any-link:hover]:outline-2 [&:any-link:hover]:outline-black [&:any-link:hover]:bg-solid-gray-50
  [&:any-link:focus-visible]:outline [&:any-link:focus-visible]:outline-4 [&:any-link:focus-visible]:outline-black [&:any-link:focus-visible]:outline-offset-[calc(2/16*1rem)] [&:any-link:focus-visible]:ring-[calc(2/16*1rem)] [&:any-link:focus-visible]:ring-yellow-300
  group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:outline group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:outline-2 group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:outline-black group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:bg-solid-gray-50
`;

export type ResourceListBodyProps = { className?: string } & (
  | ({ asChild?: false } & ComponentProps<'div'>)
  | { asChild: true; children: React.ReactNode }
);

export const ResourceListBody = (props: ResourceListBodyProps) => {
  const { asChild, children, className, ...rest } = props;
  const classNames = `${bodyClass} ${className ?? ''}`;

  if (asChild) {
    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

// ======================== ResourceListControl ========================

export type ResourceListControlProps = ComponentProps<'label'>;

export const ResourceListControl = ({ children, className, ...rest }: ResourceListControlProps) => (
  <label
    className={`shrink-0 self-stretch -my-4 -ml-4 py-4 pl-4 flex items-center ${className ?? ''}`}
    {...rest}
  >
    {children}
  </label>
);

// ======================== ResourceListContents ========================

export type ResourceListContentsProps = ComponentProps<'div'>;

export const ResourceListContents = ({
  children,
  className,
  ...rest
}: ResourceListContentsProps) => (
  <div
    className={`w-0 grow shrink flex flex-col gap-1 text-dns-16N-130 [&>*]:max-w-full ${className ?? ''}`}
    {...rest}
  >
    {children}
  </div>
);

// ======================== ResourceListTitle ========================

export type ResourceListTitleAs = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type ResourceListTitleProps = ComponentProps<'h2'> & {
  as: ResourceListTitleAs;
};

export const ResourceListTitle = ({
  children,
  className,
  as: As,
  ...rest
}: ResourceListTitleProps) => {
  const Tag = As as ElementType;
  return (
    <Tag
      className={`
        text-solid-gray-900 text-std-20B-150
        [a_&]:text-blue-1000 [a_&]:underline [a_&]:underline-offset-[calc(3/16*1rem)] [a_&]:decoration-1
        [&_a]:text-blue-1000 [&_a]:underline [&_a]:underline-offset-[calc(3/16*1rem)] [&_a]:decoration-1
        [&_:is(a,label)]:-my-2 [&_:is(a,label)]:block [&_:is(a,label)]:py-2 [&_:is(a,label)]:isolate
        [a:hover_&]:text-blue-900 [a:hover_&]:decoration-[calc(3/16*1rem)]
        [&_a:hover]:text-blue-900 [&_a:hover]:decoration-[calc(3/16*1rem)]
        [a:active_&]:text-orange-800 [a:active_&]:decoration-1
        [&_a:active]:text-orange-800 [&_a:active]:decoration-1
        [&_a:focus-visible]:my-0 [&_a:focus-visible]:py-0 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-4 [&_a:focus-visible]:outline-black [&_a:focus-visible]:outline-offset-[calc(2/16*1rem)] [&_a:focus-visible]:rounded-4 [&_a:focus-visible]:bg-yellow-300 [&_a:focus-visible]:ring-[calc(2/16*1rem)] [&_a:focus-visible]:ring-yellow-300
        [&_label]:before:content-[normal] [&_label]:before:absolute [&_label]:before:inset-0 [&_label]:before:z-10 [&_label]:before:rounded-[inherit]
        group-data-[interaction=whole]/resource-list:[&_label]:before:content-['']
        [[data-interaction=whole]:has(:disabled)_&]:text-inherit
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// ======================== ResourceListLabel ========================

export type ResourceListLabelProps = ComponentProps<'div'>;

export const ResourceListLabel = ({ children, className, ...rest }: ResourceListLabelProps) => (
  <div className={`order-first ${className ?? ''}`} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListSupport ========================

export type ResourceListSupportProps = ComponentProps<'div'>;

export const ResourceListSupport = ({ children, className, ...rest }: ResourceListSupportProps) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListSub ========================

export type ResourceListSubProps = ComponentProps<'div'>;

export const ResourceListSub = ({ children, className, ...rest }: ResourceListSubProps) => (
  <div className={`shrink-0 text-dns-16N-130 ${className ?? ''}`} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListAction ========================

export type ResourceListActionProps = ComponentProps<'div'>;

export const ResourceListAction = ({ children, className, ...rest }: ResourceListActionProps) => (
  <div className={`shrink-0 self-stretch rounded-r-[inherit] ${className ?? ''}`} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListActionButton ========================

export type ResourceListActionButtonProps = Omit<ComponentProps<'button'>, 'type'>;

export const ResourceListActionButton = ({
  children,
  className,
  ...rest
}: ResourceListActionButtonProps) => (
  <button
    type='button'
    className={`
      w-11 h-full flex justify-center items-center rounded-[inherit]
      enabled:hover:outline enabled:hover:outline-2 enabled:hover:outline-black enabled:hover:outline-offset-[calc(-1/16*1rem)] enabled:hover:bg-solid-gray-50
      focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(-3/16*1rem)] focus-visible:bg-yellow-300 focus-visible:shadow-none
      ${className ?? ''}
    `}
    {...rest}
  >
    {children}
  </button>
);
```

#### `src/components/ResourceList/index.ts`

```tsx
export {
  ResourceList,
  ResourceListAction,
  ResourceListActionButton,
  type ResourceListActionButtonProps,
  type ResourceListActionProps,
  ResourceListBody,
  type ResourceListBodyProps,
  ResourceListContents,
  type ResourceListContentsProps,
  ResourceListControl,
  type ResourceListControlProps,
  ResourceListLabel,
  type ResourceListLabelProps,
  type ResourceListProps,
  ResourceListSub,
  type ResourceListSubProps,
  ResourceListSupport,
  type ResourceListSupportProps,
  ResourceListTitle,
  type ResourceListTitleAs,
  type ResourceListTitleProps,
  type ResourceListVariant,
} from './ResourceList';
```

### SearchBox sources

#### `src/components/SearchBox/SearchBox.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';
import { Button, type ButtonProps } from '../Button';

export type SearchBoxSize = 'lg' | 'md' | 'sm';

export type SearchBoxProps = ComponentProps<'div'> & {
  size?: SearchBoxSize;
};

export const SearchBox = forwardRef<HTMLDivElement, SearchBoxProps>((props, ref) => {
  const { children, className, size = 'lg', ...rest } = props;

  return (
    <div
      className={`
        group/search-box
        grid [grid-template-areas:'fields_submit'_'detail_detail'] grid-cols-[1fr_auto] gap-x-4
        text-solid-gray-900 text-oln-16N-100 font-sans
        ${className ?? ''}
      `}
      data-size={size}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

export type SearchBoxFieldsProps = ComponentProps<'div'>;

export const SearchBoxFields = forwardRef<HTMLDivElement, SearchBoxFieldsProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div className={`relative z-0 flex [grid-area:fields] ${className ?? ''}`} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export type SearchBoxSelectProps = ComponentProps<'select'> & {
  label: string;
};

export const SearchBoxSelect = forwardRef<HTMLSelectElement, SearchBoxSelectProps>((props, ref) => {
  const { children, className, label, ...rest } = props;

  return (
    <label className='dads-search-box__select relative flex shrink-0'>
      <span
        className={`
          absolute top-[calc(50%-1.25rem)] left-[calc(17/16*1rem)] z-[2] text-solid-gray-700 pointer-events-none
          group-data-[size=sm]/search-box:sr-only
          group-data-[size=md]/search-box:top-[calc(50%-1.125rem)]
        `}
      >
        {label}
      </span>
      <select
        className={`
          appearance-none flex items-center overflow-hidden
          w-40 rounded-l-8 rounded-r-none
          border border-solid-gray-600
          bg-solid-gray-50
          pt-5 pr-10 pb-0 pl-4
          text-solid-gray-900 text-oln-17N-100 font-sans
          whitespace-nowrap text-ellipsis
          hover:border-black
          focus-visible:relative focus-visible:z-[1]
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
          focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          group-data-[size=md]/search-box:pt-[calc(18/16*1rem)]
          group-data-[size=sm]/search-box:pt-0
          ${className ?? ''}
        `}
        ref={ref}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden={true}
        className='pointer-events-none absolute right-4 top-0 bottom-0 my-auto z-[1] w-4 h-4'
        width='16'
        height='16'
        viewBox='0 0 24 24'
      >
        <path d='M12 17L3 8L4 7L12 15L20 7L21 8L12 17Z' fill='currentColor' />
      </svg>
    </label>
  );
});

export type SearchBoxInputProps = Omit<ComponentProps<'input'>, 'aria-labelledby'> &
  ({ label: string; 'aria-labelledby'?: never } | { label?: never; 'aria-labelledby': string });

export const SearchBoxInput = forwardRef<HTMLInputElement, SearchBoxInputProps>((props, ref) => {
  const { className, label, ...rest } = props;

  return (
    <label className='relative flex grow'>
      <svg
        aria-hidden={true}
        className='pointer-events-none absolute left-4 top-0 bottom-0 my-auto z-[1] w-6 h-6 text-solid-gray-600 forced-colors:text-[CanvasText]'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path
          d='m21 20.5-6-6a7.4 7.4 0 0 0 1.9-5A7.4 7.4 0 0 0 9.5 2 7.5 7.5 0 1 0 14 15.5l6 6 1-1ZM3.5 9.5a6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6Z'
          fill='currentColor'
        />
      </svg>
      {label !== undefined && <span className='sr-only'>{label}</span>}
      <input
        className={`
          grow w-32
          border border-solid-gray-600 rounded-8 bg-white
          pt-3 pr-4 pb-3 pl-12
          placeholder:text-solid-gray-600
          hover:border-black
          focus-visible:relative
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
          focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          group-data-[size=md]/search-box:pt-[calc(11/16*1rem)] group-data-[size=md]/search-box:pb-[calc(11/16*1rem)]
          group-data-[size=sm]/search-box:pt-[calc(7/16*1rem)] group-data-[size=sm]/search-box:pb-[calc(7/16*1rem)]
          [label:not(:first-child)_&]:-ml-px [label:not(:first-child)_&]:rounded-tl-none [label:not(:first-child)_&]:rounded-bl-none
          [&::-webkit-search-cancel-button]:hidden
          ${className ?? ''}
        `}
        ref={ref}
        {...rest}
      />
    </label>
  );
});

export type SearchBoxDetailProps = ComponentProps<'details'> & {
  summary: string;
};

export const SearchBoxDetail = forwardRef<HTMLDetailsElement, SearchBoxDetailProps>(
  (props, ref) => {
    const { children, className, summary, ...rest } = props;

    return (
      <details
        className={`
          group/disclosure
          mt-4 [grid-area:detail] w-fit border border-solid-gray-600 rounded-8 py-3 px-4
          text-solid-gray-800 text-std-16N-170 font-sans
          open:w-auto open:pb-6
          ${className ?? ''}
        `}
        ref={ref}
        {...rest}
      >
        <summary
          className={`
            group/summary
            flex items-start justify-start gap-2 w-fit cursor-default list-none
            -mx-4 -my-3 px-4 py-3
            [&::-webkit-details-marker]:hidden [&::marker]:content-['']
            hover:underline hover:underline-offset-[calc(3/16*1rem)]
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
            focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-4
            focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          `}
        >
          <svg
            aria-hidden={true}
            className='shrink-0 mt-[calc((1lh-24px)/2)] text-key-1000 forced-colors:text-inherit group-open/disclosure:rotate-180'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <circle cx='12' cy='12' r='11' fill='currentColor' />
            <circle
              className='group-hover/summary:fill-[Canvas]'
              cx='12'
              cy='12'
              r='8'
              fill='currentColor'
            />
            <path
              className='group-hover/summary:fill-current'
              d='M17 10H7L12 15L17 10Z'
              fill='Canvas'
            />
          </svg>
          {summary}
        </summary>
        <div className='mt-8'>{children}</div>
      </details>
    );
  },
);

export type SearchBoxDetailActionsProps = ComponentProps<'div'>;

export const SearchBoxDetailActions = forwardRef<HTMLDivElement, SearchBoxDetailActionsProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div className={`flex flex-col items-center gap-4 ${className ?? ''}`} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

export type SearchBoxSubmitProps = ButtonProps;

export const SearchBoxSubmit = forwardRef<HTMLButtonElement, SearchBoxSubmitProps>((props, ref) => {
  const { className, variant, ...rest } = props;

  return (
    <Button
      className={`
          [grid-area:submit] cursor-pointer
          group-has-[details[open]]/search-box:invisible
          ${className ?? ''}
        `}
      variant={variant ?? 'solid-fill'}
      ref={ref}
      {...(rest as ButtonProps)}
    />
  );
});
```

#### `src/components/SearchBox/index.ts`

```tsx
export * from './SearchBox';
```

### Select sources

#### `src/components/Select/Select.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type SelectBlockSize = 'lg' | 'md' | 'sm';

export type SelectProps = ComponentProps<'select'> & {
  isError?: boolean;
  blockSize?: SelectBlockSize;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { children, className, isError, blockSize = 'lg', onKeyDown, onMouseDown, ...rest } = props;

  const handleDisabledKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (e.code !== 'Tab') {
      e.preventDefault();
    }
  };

  const handleDisabledMouseDown = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <span className='relative'>
      <select
        className={`
          w-full appearance-none border border-solid-gray-600 rounded-8 bg-white pl-4 pr-10 py-[calc(11/16*1rem)] text-oln-16N-100 text-solid-gray-800
          hover:border-black
          data-[size=sm]:h-10 data-[size=md]:h-12 data-[size=lg]:h-14
          aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
          ${className ?? ''}
        `}
        aria-invalid={isError || undefined}
        data-size={blockSize}
        onMouseDown={props['aria-disabled'] ? handleDisabledMouseDown : onMouseDown}
        onKeyDown={props['aria-disabled'] ? handleDisabledKeyDown : onKeyDown}
        ref={ref}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden={true}
        className={`
          pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
          ${props['aria-disabled'] ? 'text-solid-gray-420 forced-colors:text-[GrayText]' : 'text-solid-gray-900 forced-colors:text-[CanvasText]'}
        `}
        fill='none'
        height='16'
        viewBox='0 0 16 16'
        width='16'
      >
        <path
          d='M13.3344 4.40002L8.00104 9.73336L2.66771 4.40002L1.73438 5.33336L8.00104 11.6L14.2677 5.33336L13.3344 4.40002Z'
          fill='currentColor'
        />
      </svg>
    </span>
  );
});
```

#### `src/components/Select/index.ts`

```tsx
export { Select } from './Select';
```

### SeparatedDatePicker sources

#### `src/components/SeparatedDatePicker/SeparatedDatePicker.tsx`

```tsx
import type { ComponentProps } from 'react';

export type SeparatedDatePickerSize = 'lg' | 'md' | 'sm';

export type SeparatedDatePickerProps = Omit<ComponentProps<'div'>, 'children'> & {
  size?: SeparatedDatePickerSize;
  isError?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  children: (props: {
    readOnly?: boolean;
    'aria-disabled'?: boolean;
    'aria-invalid'?: boolean;
  }) => JSX.Element;
};

export const SeparatedDatePicker = (props: SeparatedDatePickerProps) => {
  const { className, size = 'lg', isError, isReadonly, isDisabled, children, ...rest } = props;

  return (
    <div className='pt-3 inline-block'>
      <div
        className={`flex h-14 gap-x-4 text-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 ${className ?? ''}`}
        data-size={size}
        {...rest}
      >
        {children({ readOnly: isReadonly, 'aria-disabled': isDisabled, 'aria-invalid': isError })}
      </div>
    </div>
  );
};
```

#### `src/components/SeparatedDatePicker/index.ts`

```tsx
export * from './parts/SeparatedDatePickerCalendarButton';
export * from './parts/SeparatedDatePickerDate';
export * from './parts/SeparatedDatePickerMonth';
export * from './parts/SeparatedDatePickerYear';
export * from './SeparatedDatePicker';
```

#### `src/components/SeparatedDatePicker/parts/SeparatedDatePickerCalendarButton.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';
import type { SeparatedDatePickerSize } from '../SeparatedDatePicker';

export type SeparatedDatePickerCalendarButtonProps = ComponentProps<'button'> & {
  size?: SeparatedDatePickerSize;
};

export const SeparatedDatePickerCalendarButton = forwardRef<
  HTMLButtonElement,
  SeparatedDatePickerCalendarButtonProps
>((props, ref) => {
  const { className, size = 'lg', ...rest } = props;

  return (
    <button
      className={`group flex h-14 items-center justify-center gap-x-1 rounded-6 border border-key-900 bg-white px-3 text-key-900 hover:border-[calc(3/16*1rem)] hover:px-2.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 data-[size=md]:h-12 data-[size=sm]:h-10 ${className ?? ''}`}
      type='button'
      data-size={size}
      ref={ref}
      {...rest}
    >
      <svg width='24px' height='24px' viewBox='0 -960 960 960' role='img' aria-label='カレンダー'>
        <path
          d='M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z'
          fill='currentcolor'
        />
      </svg>
      <svg className='size-4 group-aria-expanded:rotate-180' viewBox='0 0 24 24' aria-hidden={true}>
        <path d='M12 17.1L3 8L4 7L12 15L20 7L21 8L12 17.1Z' fill='currentcolor' />
      </svg>
    </button>
  );
});
```

#### `src/components/SeparatedDatePicker/parts/SeparatedDatePickerDate.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type SeparatedDatePickerDateProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const SeparatedDatePickerDate = forwardRef<HTMLInputElement, SeparatedDatePickerDateProps>(
  (props, ref) => {
    const { className, 'aria-disabled': disabled, readOnly, ...rest } = props;

    return (
      <label className='relative [&:has([aria-disabled="true"])]:pointer-events-none'>
        <span className='absolute inset-x-0 -top-3 mx-auto w-6 bg-white p-1 text-oln-16N-100 [&:has(+[aria-disabled=true])]:text-solid-gray-420 forced-colors:[&:has(+[aria-disabled=true])]:text-[GrayText]'>
          日
        </span>
        <input
          className={`h-full w-14 rounded-8 border border-solid-gray-600 bg-white text-center read-only:[&:not([aria-disabled="true"])]:border-dashed hover:border-solid-gray-900 hover:read-only:border-solid-gray-600 focus:border-solid-gray-900 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:hover:border-solid-gray-600 aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000 forced-colors:[&:read-write]:aria-disabled:border-[GrayText] ${className ?? ''}`}
          type='text'
          inputMode='numeric'
          pattern='\d+'
          readOnly={disabled ? true : readOnly}
          aria-disabled={disabled}
          ref={ref}
          {...rest}
        />
      </label>
    );
  },
);
```

#### `src/components/SeparatedDatePicker/parts/SeparatedDatePickerMonth.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type SeparatedDatePickerMonthProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const SeparatedDatePickerMonth = forwardRef<HTMLInputElement, SeparatedDatePickerMonthProps>(
  (props, ref) => {
    const { className, 'aria-disabled': disabled, readOnly, ...rest } = props;

    return (
      <label className='relative [&:has([aria-disabled="true"])]:pointer-events-none'>
        <span className='absolute inset-x-0 -top-3 mx-auto w-6 bg-white p-1 text-oln-16N-100 [&:has(+[aria-disabled=true])]:text-solid-gray-420 forced-colors:[&:has(+[aria-disabled=true])]:text-[GrayText]'>
          月
        </span>
        <input
          className={`h-full w-14 rounded-8 border border-solid-gray-600 bg-white text-center read-only:[&:not([aria-disabled="true"])]:border-dashed hover:border-solid-gray-900 hover:read-only:border-solid-gray-600 focus:border-solid-gray-900 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:hover:border-solid-gray-600 aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000 forced-colors:[&:read-write]:aria-disabled:border-[GrayText] ${className ?? ''}`}
          type='text'
          inputMode='numeric'
          pattern='\d+'
          readOnly={disabled ? true : readOnly}
          aria-disabled={disabled}
          ref={ref}
          {...rest}
        />
      </label>
    );
  },
);
```

#### `src/components/SeparatedDatePicker/parts/SeparatedDatePickerYear.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type SeparatedDatePickerYearProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const SeparatedDatePickerYear = forwardRef<HTMLInputElement, SeparatedDatePickerYearProps>(
  (props, ref) => {
    const { className, 'aria-disabled': disabled, readOnly, ...rest } = props;

    return (
      <label className='relative [&:has([aria-disabled="true"])]:pointer-events-none'>
        <span className='absolute inset-x-0 -top-3 mx-auto w-6 bg-white p-1 text-oln-16N-100 [&:has(+[aria-disabled=true])]:text-solid-gray-420 forced-colors:[&:has(+[aria-disabled=true])]:text-[GrayText]'>
          年
        </span>
        <input
          className={`h-full w-[calc(72/16*1rem)] rounded-8 border border-solid-gray-600 bg-white text-center read-only:[&:not([aria-disabled="true"])]:border-dashed hover:border-solid-gray-900 hover:read-only:border-solid-gray-600 focus:border-solid-gray-900 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:hover:border-solid-gray-600 aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000 forced-colors:[&:read-write]:aria-disabled:border-[GrayText] ${className ?? ''}`}
          type='text'
          inputMode='numeric'
          pattern='\d+'
          readOnly={disabled ? true : readOnly}
          aria-disabled={disabled}
          ref={ref}
          {...rest}
        />
      </label>
    );
  },
);
```

### Slot sources

#### `src/components/Slot/Slot.tsx`

```tsx
import { Children, cloneElement, type HTMLAttributes, isValidElement, type ReactNode } from 'react';

type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export const Slot = (props: SlotProps) => {
  const { children, ...rest } = props;

  // https://react.dev/reference/react/isValidElement
  // https://react.dev/reference/react/cloneElement
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...rest,
      ...children.props,
      className: `${rest.className ?? ''} ${children.props.className ?? ''}`,
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
};
```

#### `src/components/Slot/index.ts`

```tsx
export { Slot } from './Slot';
```

### StatusBadge sources

#### `src/components/StatusBadge/StatusBadge.tsx`

```tsx
import type { ComponentProps } from 'react';

export const StatusBadge = (props: ComponentProps<'span'>) => {
  const { className, children, ...rest } = props;

  return (
    <span
      className={`ml-2 inline-block rounded-8 bg-solid-gray-536 p-2 text-oln-16N-100 text-white outline-1 outline-transparent ${className ?? ''}`}
      {...rest}
    >
      {children}
    </span>
  );
};
```

#### `src/components/StatusBadge/index.ts`

```tsx
export { StatusBadge } from './StatusBadge';
```

### StepNavigation sources

#### `src/components/StepNavigation/StepNavigation.tsx`

```tsx
import { type ComponentProps, type CSSProperties, cloneElement } from 'react';
import { Slot } from '../Slot';

// --- StepNavigation (root) ---

export type StepNavigationProps = {
  orientation?: 'horizontal' | 'vertical';
  size?: 'normal' | 'small';
  className?: string;
  style?: CSSProperties;
} & (({ asChild?: false } & ComponentProps<'div'>) | { asChild: true; children: React.ReactNode });

export const StepNavigation = (props: StepNavigationProps) => {
  const {
    asChild,
    orientation = 'horizontal',
    size = 'normal',
    children,
    className,
    style,
    ...rest
  } = props;

  const Component = asChild ? Slot : 'div';

  const mergedStyle: CSSProperties = {
    ...style,
    ['--step-number-size' as string]: size === 'normal' ? 'calc(44/16*1rem)' : 'calc(32/16*1rem)',
    ['--step-number-margin' as string]: size === 'normal' ? 'calc(4/16*1rem)' : 'calc(3/16*1rem)',
    ['--step-outline-width' as string]: size === 'normal' ? 'calc(2/16*1rem)' : 'calc(1/16*1rem)',
    ['--step-title-margin' as string]: size === 'normal' ? 'calc(24/16*1rem)' : 'calc(16/16*1rem)',
    ['--step-description-margin' as string]:
      size === 'normal' ? 'calc(8/16*1rem)' : 'calc(4/16*1rem)',
  };

  return (
    <Component
      className={`
        group/step-nav
        text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]
        data-[orientation=horizontal]:overflow-x-auto data-[orientation=horizontal]:pt-[calc(6/16*1rem)] data-[orientation=horizontal]:pb-[calc(6/16*1rem)]
        ${className ?? ''}
      `}
      data-orientation={orientation}
      data-size={size}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
};

// --- StepNavigationList ---

export type StepNavigationListProps = ComponentProps<'ul'>;

export const StepNavigationList = ({ children, className, ...rest }: StepNavigationListProps) => {
  return (
    <ul
      className={`
        flex group-data-[orientation=vertical]/step-nav:flex-col
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  );
};

// --- StepNavigationStep ---

export type StepNavigationStepState = 'reached' | 'completed' | 'editing' | 'error' | 'skipped';

export type StepNavigationStepProps = ComponentProps<'li'> & {
  state?: StepNavigationStepState;
  first?: boolean;
  last?: boolean;
};

export const StepNavigationStep = ({
  state,
  first,
  last,
  children,
  className,
  'aria-current': ariaCurrent,
  ...rest
}: StepNavigationStepProps) => {
  return (
    <li
      className={`
        group/step relative
        group-data-[orientation=horizontal]/step-nav:w-[calc(var(--step-width,320)/16*1rem)] group-data-[orientation=horizontal]/step-nav:min-w-[calc(var(--step-min-width,160)/16*1rem)] group-data-[orientation=horizontal]/step-nav:px-4
        group-data-[orientation=vertical]/step-nav:flex-1 group-data-[orientation=vertical]/step-nav:pb-6 group-data-[orientation=vertical]/step-nav:last:pb-0

        ${className ?? ''}
      `}
      data-state={state}
      data-first={first ? '' : undefined}
      data-last={last ? '' : undefined}
      data-current={ariaCurrent != null && ariaCurrent !== false && ariaCurrent !== 'false' ? '' : undefined}
      aria-current={ariaCurrent}
      {...rest}
    >
      {!first && (
        <>
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 top-[calc(var(--step-number-size)/2+var(--step-number-margin))] right-1/2 w-1/2 border-b border-current
              group-data-[orientation=horizontal]/step-nav:block
            '
          />
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 top-0 left-[calc(var(--step-number-size)/2+var(--step-number-margin))] h-8 border-r border-current
              group-data-[orientation=vertical]/step-nav:block
            '
          />
        </>
      )}
      {!last && (
        <>
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 top-[calc(var(--step-number-size)/2+var(--step-number-margin))] left-1/2 w-1/2 border-b border-current
              group-data-[orientation=horizontal]/step-nav:block
            '
          />
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 bottom-0 left-[calc(var(--step-number-size)/2+var(--step-number-margin))] h-[calc(100%-32/16*1rem)] border-r border-current
              group-data-[orientation=vertical]/step-nav:block
            '
          />
        </>
      )}
      {children}
    </li>
  );
};

// --- StepNavigationStepHeader ---

export type StepNavigationStepHeaderProps = {
  className?: string;
} & (
  | ({ asChild?: false } & ComponentProps<'span'>)
  | { asChild: true; children: React.ReactElement }
);

export const StepNavigationStepHeader = (props: StepNavigationStepHeaderProps) => {
  const { asChild, children, className, ...rest } = props;

  const classNames = `
    group/step-header block text-pretty
    focus-visible:outline-none focus-visible:shadow-none
    data-[interactive]:underline data-[interactive]:decoration-[calc(1/16*1rem)] data-[interactive]:underline-offset-[calc(3/16*1rem)]
    data-[interactive]:hover:decoration-[calc(3/16*1rem)] data-[interactive]:hover:cursor-pointer
    group-data-[orientation=horizontal]/step-nav:w-full group-data-[orientation=horizontal]/step-nav:text-center
    group-data-[orientation=vertical]/step-nav:relative group-data-[orientation=vertical]/step-nav:flex group-data-[orientation=vertical]/step-nav:items-baseline group-data-[orientation=vertical]/step-nav:gap-x-4 group-data-[orientation=vertical]/step-nav:text-left
    ${className ?? ''}
  `;

  const srOnly = <span className='sr-only'>ステップ</span>;

  if (asChild) {
    const child = children as React.ReactElement<{
      children?: React.ReactNode;
      disabled?: boolean;
    }>;
    const isDisabled = child.props.disabled === true;

    return (
      <Slot className={classNames} data-interactive={isDisabled ? undefined : ''} {...rest}>
        {cloneElement(
          child,
          {},
          <>
            {srOnly}
            {child.props.children}
          </>,
        )}
      </Slot>
    );
  }

  return (
    <span className={classNames} {...rest}>
      {srOnly}
      {children}
    </span>
  );
};

// --- StepNavigationNumber ---

export type StepNavigationNumberProps = ComponentProps<'span'>;

export const StepNavigationNumber = ({
  children,
  className,
  ...rest
}: StepNavigationNumberProps) => {
  return (
    <span
      className={`
        relative grid place-content-center w-fit rounded-full bg-white border-current
        [text-decoration:inherit] [text-decoration-thickness:inherit]
        px-[calc(2/16*1rem)] pb-[calc(2/16*1rem)]

        h-[var(--step-number-size)] min-w-[var(--step-number-size)] m-[var(--step-number-margin)] border-2 text-std-20B-150
        group-data-[size=small]/step-nav:border group-data-[size=small]/step-nav:text-[calc(16/16*1rem)]

        group-data-[orientation=horizontal]/step-nav:mx-auto
        group-data-[orientation=vertical]/step-nav:shrink-0

        group-data-[state=reached]/step:bg-solid-gray-800 group-data-[state=reached]/step:text-white group-data-[state=reached]/step:border-solid-gray-800
        group-data-[state=completed]/step:bg-solid-gray-50
        group-data-[state=error]/step:text-error-1
        group-data-[state=skipped]/step:border-dashed group-data-[state=skipped]/step:border

        forced-colors:group-data-[state=reached]/step:bg-[CanvasText]
        forced-colors:group-data-[state=reached]/step:text-[Canvas]
        forced-colors:group-data-[state=reached]/step:[forced-color-adjust:none]

        group-data-[current]/step:outline group-data-[current]/step:outline-solid-gray-800
        group-data-[current]/step:outline-offset-[calc(2/16*1rem)]
        group-data-[current]/step:shadow-[0_0_0_calc(2/16*1rem)_white]
        group-data-[current]/step:[outline-width:var(--step-outline-width)]

        [[data-interactive]:hover_&]:outline [[data-interactive]:hover_&]:[outline-width:1px]
        group-data-[state=reached]/step:[[data-interactive]:hover_&]:outline-solid-gray-800
        group-data-[state=skipped]/step:[[data-interactive]:hover_&]:outline-none
        group-data-[state=skipped]/step:[[data-interactive]:hover_&]:border-2

        group-focus-visible/step-header:!outline group-focus-visible/step-header:![outline-width:calc(4/16*1rem)]
        group-focus-visible/step-header:!outline-black
        group-focus-visible/step-header:!outline-offset-[calc(2/16*1rem)]
        group-focus-visible/step-header:!ring-[calc(2/16*1rem)] group-focus-visible/step-header:!ring-yellow-300

        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

// --- StepNavigationStateIndicator ---

const CompletedIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden={true}>
    <circle cx='12' cy='12' r='12' fill='#666' className='forced-colors:fill-[CanvasText]' />
    <path
      d='M10 17.5 19.8 8l-1.5-1.5-8.1 8-4.1-4L4.5 12l5.6 5.5Z'
      fill='#fff'
      className='forced-colors:fill-[Canvas]'
    />
  </svg>
);

const EditingIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden={true}>
    <path
      d='M5.8 20c-.5 0-1-.2-1.3-.5-.3-.4-.5-.8-.5-1.3V5.6c0-.5.2-.9.5-1.3.4-.3.8-.5 1.3-.5h8L12 5.6H5.8v12.6h12.6V12l1.8-1.8v8c0 .5-.2 1-.5 1.3-.4.3-.8.5-1.3.5H5.8Zm3.6-5.4v-3.8l8.3-8.3a1.8 1.8 0 0 1 2.5 0l1.3 1.3.4.6a1.7 1.7 0 0 1 0 1.3c-.1.3-.2.5-.4.6l-8.3 8.3H9.4Zm1.8-1.8h1.3l5.2-5.2L17 7l-.7-.7-5.2 5.2v1.3Z'
      fill='#333'
      className='forced-colors:fill-[CanvasText]'
    />
  </svg>
);

const ErrorIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden={true}>
    <path
      d='M1 21 12 2l11 19H1Zm3.5-2h15L12 6 4.5 19Zm7.5-1c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .3.1.5.3.7.2.2.4.3.7.3Zm-1-3h2v-5h-2v5Z'
      fill='#ec0000'
      className='forced-colors:fill-[CanvasText]'
    />
  </svg>
);

const stateIconClassName = `
  absolute rounded-full bg-white
  top-[calc(-10/16*1rem)] left-[calc(50%+6/16*1rem)]
  group-data-[size=small]/step-nav:top-[calc(-9/16*1rem)] group-data-[size=small]/step-nav:left-[calc(50%+4/16*1rem)]
  [&>svg]:block [&>svg]:max-w-none
  group-data-[size=small]/step-nav:[&_svg]:w-5 group-data-[size=small]/step-nav:[&_svg]:h-5
`;

const stateLabelClassName = `
  absolute top-[calc(100%+0.5rem)] -inset-x-full bottom-0 mx-auto my-0
  w-[4em] h-[1.2em] bg-white text-dns-14N-120 text-center
`;

export type StepNavigationStateIndicatorProps = ComponentProps<'span'> & {
  state?: StepNavigationStepState;
};

export const StepNavigationStateIndicator = ({
  state,
  className,
  ...rest
}: StepNavigationStateIndicatorProps) => {
  return (
    <span className={className ?? ''} {...rest}>
      {state === 'completed' && (
        <>
          <span className={stateIconClassName}>
            <CompletedIcon />
          </span>
          <span className='sr-only'>完了</span>
        </>
      )}

      {state === 'editing' && (
        <>
          <span className={stateIconClassName}>
            <EditingIcon />
          </span>
          <span className={stateLabelClassName}>編集中</span>
        </>
      )}

      {state === 'error' && (
        <>
          <span className={stateIconClassName}>
            <ErrorIcon />
          </span>
          <span className={stateLabelClassName}>エラー</span>
        </>
      )}

      {state === 'skipped' && <span className='sr-only'>スキップされました</span>}
    </span>
  );
};

// --- StepNavigationTitle ---

export type StepNavigationTitleProps = ComponentProps<'span'>;

export const StepNavigationTitle = ({ children, className, ...rest }: StepNavigationTitleProps) => {
  return (
    <span
      className={`
        block font-bold [text-decoration-thickness:inherit]
        text-std-18B-160
        group-data-[size=small]/step-nav:text-std-16B-170
        group-data-[orientation=horizontal]/step-nav:mt-[var(--step-title-margin)]
        group-data-[orientation=vertical]/step-nav:py-[calc(var(--step-number-size)/2+var(--step-number-margin)-0.875rem)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

// --- StepNavigationDescription ---

export type StepNavigationDescriptionProps = ComponentProps<'p'>;

export const StepNavigationDescription = ({
  children,
  className,
  ...rest
}: StepNavigationDescriptionProps) => {
  return (
    <p
      className={`
        mt-[var(--step-description-margin)]
        group-data-[orientation=horizontal]/step-nav:text-center
        group-data-[orientation=vertical]/step-nav:mt-[calc(var(--step-description-margin)-(var(--step-number-size)/2+var(--step-number-margin)-0.875rem))]
        group-data-[orientation=vertical]/step-nav:pl-[calc(var(--step-number-size)+var(--step-number-margin)*2+1rem)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </p>
  );
};
```

#### `src/components/StepNavigation/index.ts`

```tsx
export * from './StepNavigation';
```

### SupportText sources

#### `src/components/SupportText/SupportText.tsx`

```tsx
import type { ComponentProps } from 'react';

export type SupportTextProps = ComponentProps<'p'>;

export const SupportText = (props: SupportTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-std-16N-170 text-solid-gray-600 ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};
```

#### `src/components/SupportText/index.ts`

```tsx
export { SupportText } from './SupportText';
```

### Switch sources

#### `src/components/Switch/Switch.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type SwitchOnOffProps = Omit<ComponentProps<'button'>, 'aria-disabled'>;

export const SwitchOnOff = forwardRef<HTMLButtonElement, SwitchOnOffProps>((props, ref) => {
  const { className, 'aria-checked': ariaChecked = false, ...rest } = props;

  return (
    <button
      ref={ref}
      {...rest}
      type='button'
      role='switch'
      aria-checked={ariaChecked}
      className={`
        group/switch-on-off relative shrink-0 select-none [-webkit-tap-highlight-color:transparent]
        before:absolute before:-inset-y-1 before:inset-x-0
        focus-visible:rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
    >
      <span
        className={`
          relative block w-14 rounded-full border-2 border-solid-gray-600 bg-white p-1
          group-aria-checked/switch-on-off:border-key-900 group-aria-checked/switch-on-off:bg-key-50
          group-hover/switch-on-off:border-black group-hover/switch-on-off:ring-4 group-hover/switch-on-off:ring-solid-gray-420
          group-aria-checked/switch-on-off:group-hover/switch-on-off:border-key-1100
          group-active/switch-on-off:ring-[calc(6/16*1rem)] group-active/switch-on-off:ring-solid-gray-600
          group-disabled/switch-on-off:!border-solid-gray-300 group-disabled/switch-on-off:!bg-solid-gray-50 group-disabled/switch-on-off:!ring-0
          forced-colors:!border-[ButtonText]
          group-aria-checked/switch-on-off:forced-colors:!border-[Highlight]
          group-disabled/switch-on-off:forced-colors:!border-[GrayText]
          group-disabled/switch-on-off:group-aria-checked/switch-on-off:forced-colors:!border-[GrayText]
        `}
        aria-hidden='true'
      >
        <span
          className={`
            block size-6 rounded-full bg-solid-gray-800
            group-aria-checked/switch-on-off:ml-auto group-aria-checked/switch-on-off:bg-key-900
            group-hover/switch-on-off:bg-black
            group-aria-checked/switch-on-off:group-hover/switch-on-off:bg-key-1100
            group-disabled/switch-on-off:!bg-solid-gray-300
            forced-colors:!bg-[ButtonText]
            group-aria-checked/switch-on-off:forced-colors:!bg-[Highlight]
            group-disabled/switch-on-off:forced-colors:!bg-[GrayText]
            group-disabled/switch-on-off:group-aria-checked/switch-on-off:forced-colors:!bg-[GrayText]
          `}
        >
          <svg
            className={`
              hidden size-6 shrink-0 text-white
              group-aria-checked/switch-on-off:block
              forced-colors:text-[Canvas]
            `}
            viewBox='0 0 24 24'
            width='24'
            height='24'
            aria-hidden='true'
          >
            <path
              d='m10.4 16.3-4.1-4.1 1.2-1.3 2.9 2.9 6-6.1 1.3 1.2z'
              fill='currentcolor'
            />
          </svg>
        </span>
      </span>
    </button>
  );
});

export type SwitchModeProps = Omit<ComponentProps<'div'>, 'onChange' | 'aria-describedby'> & {
  leftLabel: string;
  rightLabel: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  'aria-describedby'?: string;
};

export const SwitchMode = (props: SwitchModeProps) => {
  const {
    className,
    leftLabel,
    rightLabel,
    value,
    onChange,
    disabled,
    'aria-describedby': ariaDescribedby,
    ...rest
  } = props;

  const toggledValue = value === leftLabel ? rightLabel : leftLabel;

  const optionClassName = `
    relative flex self-stretch items-center select-none [-webkit-tap-highlight-color:transparent]
    aria-checked:-z-10
    before:absolute before:-inset-y-2 before:inset-x-0
    after:absolute after:inset-0
    first:before:-right-[calc((60+16)/16*1rem)] first:after:-right-[calc((60+16)/16*1rem)]
    last:before:-left-[calc((60+16)/16*1rem)] last:after:-left-[calc((60+16)/16*1rem)]
    focus-visible:outline-none
    focus-visible:after:rounded-full focus-visible:after:outline focus-visible:after:outline-4 focus-visible:after:outline-black focus-visible:after:outline-offset-2 focus-visible:after:ring-2 focus-visible:after:ring-yellow-300
    forced-colors:focus-visible:after:outline-[Highlight]
  `;

  return (
    <div
      className={`
        group/switch-mode isolate inline-flex items-center gap-4
        text-solid-gray-800 text-oln-16N-100
        has-[:disabled]:text-solid-gray-300
        forced-colors:has-[:disabled]:text-[GrayText]
        ${className ?? ''}
      `}
      {...rest}
    >
      <button
        type='button'
        role='switch'
        aria-checked={value === leftLabel}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
        onClick={() => onChange(toggledValue)}
        className={optionClassName}
      >
        {leftLabel}
      </button>
      <span
        className={`
          relative box-border shrink-0 w-[calc(60/16*1rem)] rounded-full p-1.5 pointer-events-none
          group-hover/switch-mode:ring-4 group-hover/switch-mode:ring-solid-gray-420
          group-active/switch-mode:ring-[calc(6/16*1rem)] group-active/switch-mode:ring-solid-gray-600
          group-has-[:disabled]/switch-mode:!ring-0
        `}
        aria-hidden='true'
      >
        <span
          className={`
            box-border block h-4 rounded-8 border-2 border-blue-900 bg-blue-100
            group-hover/switch-mode:border-blue-1100
            group-has-[:disabled]/switch-mode:!border-solid-gray-300 group-has-[:disabled]/switch-mode:!bg-solid-gray-50
            forced-colors:border-[ButtonText] forced-colors:group-hover/switch-mode:border-[ButtonText]
          `}
        />
        <span
          className={`
            absolute inset-x-0 -inset-y-full my-auto box-content size-6 rounded-full border-2 border-white bg-blue-900
            group-hover/switch-mode:bg-blue-1100
            group-has-[button:last-of-type[aria-checked=true]]/switch-mode:left-8
            group-has-[:disabled]/switch-mode:!bg-solid-gray-300
            forced-colors:bg-[ButtonText] forced-colors:border-[Canvas] forced-colors:group-hover/switch-mode:bg-[ButtonText]
            forced-colors:group-has-[:disabled]/switch-mode:!bg-[GrayText]
          `}
        />
      </span>
      <button
        type='button'
        role='switch'
        aria-checked={value === rightLabel}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
        onClick={() => onChange(toggledValue)}
        className={optionClassName}
      >
        {rightLabel}
      </button>
    </div>
  );
};
```

#### `src/components/Switch/index.ts`

```tsx
export * from './Switch';
```

### Tab sources

#### `src/components/Tab/Tab.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

// Types

export type TabPosition = 'top' | 'bottom' | 'left' | 'right';

export type TabChangeDetail = {
  selectedIndex: number;
  selectedTabLabel: string;
};

// Tab (root wrapper)

export type TabProps = ComponentProps<'div'> & {
  position?: TabPosition;
};

export const Tab = ({ position = 'top', className, children, ...rest }: TabProps) => (
  <div
    className={`
      group/tab
      relative z-0 flex text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]
      data-[position=top]:flex-col data-[position=bottom]:flex-col
      data-[position=left]:flex-row data-[position=right]:flex-row-reverse
      ${className ?? ''}
    `}
    data-position={position}
    {...rest}
  >
    {children}
  </div>
);

// TabList

export type TabListProps = ComponentProps<'ul'>;

export const TabList = forwardRef<HTMLUListElement, TabListProps>(
  ({ className, children, ...rest }, ref) => (
    <ul
      ref={ref}
      className={`
        relative z-0 -m-1.5 overflow-hidden flex
        pt-[calc(7/16*1rem)] pr-1.5 pb-1.5 pl-[calc(7/16*1rem)]
        after:relative after:flex-grow after:border-0 after:border-solid after:border-solid-gray-420 after:content-['']
        group-data-[position=top]/tab:flex-wrap group-data-[position=top]/tab:after:-ml-px group-data-[position=top]/tab:after:w-px group-data-[position=top]/tab:after:border-b
        group-data-[position=bottom]/tab:flex-wrap-reverse group-data-[position=bottom]/tab:after:-mt-px group-data-[position=bottom]/tab:after:-ml-px group-data-[position=bottom]/tab:after:w-px group-data-[position=bottom]/tab:after:border-t
        group-data-[position=left]/tab:flex-col group-data-[position=left]/tab:shrink-0 group-data-[position=left]/tab:after:-mt-px group-data-[position=left]/tab:after:h-px group-data-[position=left]/tab:after:border-r
        group-data-[position=right]/tab:flex-col group-data-[position=right]/tab:shrink-0 group-data-[position=right]/tab:after:-mt-px group-data-[position=right]/tab:after:-ml-px group-data-[position=right]/tab:after:h-px group-data-[position=right]/tab:after:border-l
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  ),
);

// TabItem

export type TabItemProps = ComponentProps<'a'> & {
  /**
   * @internal provided by useTabAria's getTabProps.
   * Applied to the inner <li> wrapper as role="presentation".
   */
  _internalListItemRole?: 'presentation';
  /**
   * @internal provided by useTabAria's getTabProps.
   * Renders the inner interactive element as <button> instead of <a>.
   */
  _internalElementType?: 'button';
};

export const TabItem = ({
  _internalListItemRole,
  _internalElementType,
  href,
  className,
  children,
  ...rest
}: TabItemProps) => {
  const computedClassName = `
    group/tab-item
    isolate -mt-px -ml-px flex border border-solid-gray-420 bg-white text-left no-underline
    [&[role=tab]]:cursor-default
    focus-visible:overflow-hidden focus-visible:z-[1]
    focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
    focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-[calc(4/16*1rem)]
    focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:absolute
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-0
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-solid
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-white
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:content-['']
    forced-colors:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-[Canvas]
    [&:not([aria-selected=true]):not([aria-current]:not([aria-current='false']))]:hover:bg-solid-gray-50
    group-data-[position=top]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:bottom-1.5
    group-data-[position=top]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:w-full
    group-data-[position=top]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-b
    group-data-[position=bottom]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:top-1.5
    group-data-[position=bottom]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:w-full
    group-data-[position=bottom]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-b
    group-data-[position=left]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:right-1.5
    group-data-[position=left]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:h-full
    group-data-[position=left]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-r
    group-data-[position=right]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:left-1.5
    group-data-[position=right]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:h-full
    group-data-[position=right]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-l
    ${className ?? ''}
  `;

  const inner = (
    <span
      className={`
        relative flex flex-grow items-center border-0 border-solid border-solid-gray-50
        p-4 font-normal text-dns-16N-120 [letter-spacing:0]
        group-aria-selected/tab-item:font-bold
        group-[&[aria-current]:not([aria-current='false'])]/tab-item:font-bold
        before:absolute before:content-['']
        group-aria-selected/tab-item:before:bg-key-900
        group-[&[aria-current]:not([aria-current='false'])]/tab-item:before:bg-key-900
        forced-colors:border-[Canvas]
        forced-colors:group-aria-selected/tab-item:before:bg-[ButtonText]
        forced-colors:group-[&[aria-current]:not([aria-current='false'])]/tab-item:before:bg-[ButtonText]
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:underline
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:underline-offset-[calc(3/16*1rem)]
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:decoration-[calc(1/16*1rem)]
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:before:bg-solid-gray-420
        group-data-[position=top]/tab:border-t-[5px] group-data-[position=top]/tab:before:-top-1.5 group-data-[position=top]/tab:before:left-0 group-data-[position=top]/tab:before:right-0 group-data-[position=top]/tab:before:h-1.5
        group-data-[position=bottom]/tab:border-b-[5px] group-data-[position=bottom]/tab:before:left-0 group-data-[position=bottom]/tab:before:-bottom-1.5 group-data-[position=bottom]/tab:before:right-0 group-data-[position=bottom]/tab:before:h-1.5
        group-data-[position=left]/tab:border-l-[5px] group-data-[position=left]/tab:before:top-0 group-data-[position=left]/tab:before:bottom-0 group-data-[position=left]/tab:before:-left-1.5 group-data-[position=left]/tab:before:w-1.5
        group-data-[position=right]/tab:border-r-[5px] group-data-[position=right]/tab:before:top-0 group-data-[position=right]/tab:before:-right-1.5 group-data-[position=right]/tab:before:bottom-0 group-data-[position=right]/tab:before:w-1.5
      `}
    >
      {children}
    </span>
  );

  return (
    <li role={_internalListItemRole} className='contents'>
      {_internalElementType === 'button' ? (
        <button type='button' className={computedClassName} {...(rest as ComponentProps<'button'>)}>
          {inner}
        </button>
      ) : (
        <a href={href} className={computedClassName} {...rest}>
          {inner}
        </a>
      )}
    </li>
  );
};

// TabPanel

export type TabPanelProps = ComponentProps<'div'>;

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={`
        border border-solid-gray-420 bg-white p-4
        focus-visible:z-[1] focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
        focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-[calc(4/16*1rem)]
        focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        group-data-[position=top]/tab:border-t-0
        group-data-[position=bottom]/tab:border-b-0
        group-data-[position=left]/tab:flex-grow group-data-[position=left]/tab:min-w-0 group-data-[position=left]/tab:border-l-0
        group-data-[position=right]/tab:flex-grow group-data-[position=right]/tab:min-w-0 group-data-[position=right]/tab:border-r-0
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  ),
);
```

#### `src/components/Tab/index.ts`

```tsx
export * from './Tab';
export * from './useTab';
export * from './useTabAria';
```

#### `src/components/Tab/useTab.ts`

```tsx
import { useEffect, useId, useRef, useState } from 'react';
import type { TabChangeDetail } from './Tab';

type UseTabOptions = {
  defaultSelectedIndex?: number;
  onTabChange?: (detail: TabChangeDetail) => void;
};

type TabGetListProps = {
  ref: React.RefObject<HTMLUListElement>;
  onClick: React.MouseEventHandler<HTMLUListElement>;
  onAuxClick: React.MouseEventHandler<HTMLUListElement>;
};

type TabGetTabProps = {
  href: string;
  'aria-current': true | undefined;
};

type TabGetPanelProps = {
  ref: (el: HTMLDivElement | null) => void;
  id: string;
  hidden: boolean;
};

export const useTab = ({ defaultSelectedIndex = 0, onTabChange }: UseTabOptions = {}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const idBase = useId();
  const listRef = useRef<HTMLUListElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const insertedHeadingsRef = useRef<HTMLElement[]>([]);
  const headingsInsertedRef = useRef(false);
  const headingIdBase = useId();

  // Track the index that should receive focus after the next render.
  const pendingFocusRef = useRef<number | null>(null);

  // Insert visually-hidden headings into each panel on mount.
  useEffect(() => {
    if (headingsInsertedRef.current) return;

    const list = listRef.current;
    if (!list) return;

    const labelledby = list.getAttribute('aria-labelledby');
    if (!labelledby) {
      console.warn('[useTab] aria-labelledby attribute is mandatory.');
      return;
    }

    const headingEl = document.getElementById(labelledby);
    const match = headingEl?.tagName.match(/^H([1-6])$/i);
    const parentLevel = match ? Number.parseInt(match[1], 10) : 2;
    const level = Math.min(parentLevel + 1, 6);

    const tabs = Array.from(list.querySelectorAll<HTMLAnchorElement>('a'));

    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      const tab = tabs[index];
      if (!tab) return;

      const label = tab.textContent?.trim() ?? '';
      const heading = document.createElement(`h${level}`);
      heading.textContent = label;
      heading.id = `${headingIdBase}-panel-heading-${index}`;
      heading.setAttribute('tabindex', '-1');
      Object.assign(heading.style, {
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
      });

      panel.insertBefore(heading, panel.firstChild);
      insertedHeadingsRef.current.push(heading);
    });

    headingsInsertedRef.current = true;

    return () => {
      for (const h of insertedHeadingsRef.current) {
        h.remove();
      }
      insertedHeadingsRef.current = [];
      headingsInsertedRef.current = false;
    };
  }, [headingIdBase]);

  // Focus the visually-hidden heading after the panel becomes visible.
  // biome-ignore lint/correctness/useExhaustiveDependencies: selectedIndex is an intentional trigger
  useEffect(() => {
    const index = pendingFocusRef.current;
    if (index === null) return;
    pendingFocusRef.current = null;
    insertedHeadingsRef.current[index]?.focus();
  }, [selectedIndex]);

  const getListProps = (): TabGetListProps => ({
    ref: listRef,
    onClick: (e) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target || !listRef.current?.contains(target)) return;

      e.preventDefault();

      const tabs = Array.from(listRef.current.querySelectorAll<HTMLAnchorElement>('a'));
      const index = tabs.indexOf(target);
      if (index === -1) return;

      setSelectedIndex(index);
      pendingFocusRef.current = index;

      if (onTabChange) {
        onTabChange({
          selectedIndex: index,
          selectedTabLabel: tabs[index]?.textContent?.trim() ?? '',
        });
      }
    },
    onAuxClick: (e) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && e.button === 1) e.preventDefault();
    },
  });

  const getTabProps = (index: number): TabGetTabProps => ({
    href: `#${idBase}-panel-${index}`,
    'aria-current': index === selectedIndex ? true : undefined,
  });

  const getPanelProps = (index: number): TabGetPanelProps => ({
    ref: (el) => {
      panelRefs.current[index] = el;
    },
    id: `${idBase}-panel-${index}`,
    hidden: index !== selectedIndex,
  });

  return { getListProps, getTabProps, getPanelProps };
};
```

#### `src/components/Tab/useTabAria.ts`

```tsx
import { useId, useRef, useState } from 'react';
import type { TabChangeDetail } from './Tab';

type UseTabAriaOptions = {
  defaultSelectedIndex?: number;
  activation?: 'auto' | 'manual';
  onTabChange?: (detail: TabChangeDetail) => void;
};

type TabAriaGetListProps = {
  ref: React.RefObject<HTMLUListElement>;
  role: 'tablist';
  onClick: React.MouseEventHandler<HTMLUListElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLUListElement>;
};

type TabAriaGetTabProps = {
  id: string;
  role: 'tab';
  'aria-selected': boolean;
  'aria-controls': string;
  tabIndex: 0 | -1;
  _internalListItemRole: 'presentation';
  _internalElementType: 'button';
};

type TabAriaGetPanelProps = {
  id: string;
  role: 'tabpanel';
  'aria-labelledby': string;
  tabIndex: 0;
  hidden: boolean;
};

export const useTabAria = ({
  defaultSelectedIndex = 0,
  activation = 'auto',
  onTabChange,
}: UseTabAriaOptions = {}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const tablistRef = useRef<HTMLUListElement | null>(null);
  const idBase = useId();

  const selectTab = (index: number) => {
    setSelectedIndex(index);

    const list = tablistRef.current;
    const tabs = list ? Array.from(list.querySelectorAll<HTMLElement>('[role=tab]')) : [];
    tabs[index]?.focus();

    if (onTabChange) {
      onTabChange({
        selectedIndex: index,
        selectedTabLabel: tabs[index]?.textContent?.trim() ?? '',
      });
    }
  };

  const focusTab = (index: number) => {
    const list = tablistRef.current;
    const tabs = list ? Array.from(list.querySelectorAll<HTMLElement>('[role=tab]')) : [];
    tabs[index]?.focus();
  };

  const getListProps = (): TabAriaGetListProps => ({
    ref: tablistRef,
    role: 'tablist',
    onClick: (e) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[role=tab]');
      if (!target || !tablistRef.current?.contains(target)) return;

      e.preventDefault();

      const tabs = Array.from(tablistRef.current.querySelectorAll<HTMLElement>('[role=tab]'));
      const index = tabs.indexOf(target);
      if (index === -1) return;

      selectTab(index);
    },
    onKeyDown: (e) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[role=tab]');
      if (!target || !tablistRef.current?.contains(target)) return;

      const tabs = Array.from(tablistRef.current.querySelectorAll<HTMLElement>('[role=tab]'));
      const currentIndex = tabs.indexOf(target);
      const count = tabs.length;
      const isManual = activation === 'manual';

      const activate = isManual ? (i: number) => focusTab(i) : (i: number) => selectTab(i);

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) activate(currentIndex - 1);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < count - 1) activate(currentIndex + 1);
          break;
        case 'Home':
          e.preventDefault();
          activate(0);
          break;
        case 'End':
          e.preventDefault();
          activate(count - 1);
          break;
      }
    },
  });

  const getTabProps = (index: number): TabAriaGetTabProps => ({
    id: `${idBase}-tab-${index}`,
    role: 'tab',
    'aria-selected': index === selectedIndex,
    'aria-controls': `${idBase}-panel-${index}`,
    tabIndex: index === selectedIndex ? 0 : -1,
    _internalListItemRole: 'presentation',
    _internalElementType: 'button',
  });

  const getPanelProps = (index: number): TabAriaGetPanelProps => ({
    id: `${idBase}-panel-${index}`,
    role: 'tabpanel',
    'aria-labelledby': `${idBase}-tab-${index}`,
    tabIndex: 0,
    hidden: index !== selectedIndex,
  });

  return { getListProps, getTabProps, getPanelProps };
};
```

### Table sources

Component source files are not present for this component.

### Textarea sources

#### `src/components/Textarea/Textarea.tsx`

```tsx
import { type ComponentProps, forwardRef } from 'react';

export type TextareaProps = Omit<ComponentProps<'textarea'>, 'placeholder'> & {
  isError?: boolean;
  placeholder?: never;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, isError, readOnly, ...rest } = props;

  return (
    <textarea
      className={`
        max-w-full rounded-8 border bg-white p-4 border-solid-gray-600 text-std-16N-170 text-solid-gray-800
        hover:[&:read-write]:border-black
        aria-[invalid=true]:border-error-1 aria-[invalid=true]:[&:read-write]:hover:border-red-1000
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        read-only:border-dashed
        aria-disabled:border-solid-gray-300 read-only:aria-disabled:border-solid aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
        ${className ?? ''}
      `}
      aria-invalid={isError || undefined}
      readOnly={props['aria-disabled'] ? true : readOnly}
      ref={ref}
      {...rest}
    />
  );
});
```

#### `src/components/Textarea/index.ts`

```tsx
export { Textarea } from './Textarea';
```

### UtilityLink sources

#### `src/components/UtilityLink/UtilityLink.tsx`

```tsx
import type { ComponentProps } from 'react';
import { Slot } from '../Slot';

export const utilityLinkStyle = `!text-solid-gray-800 text-dns-16N-130 underline underline-offset-[calc(3/16*1rem)]
  hover:decoration-[calc(3/16*1rem)]
  focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300`;

export type UtilityLinkProps = {
  className?: string;
  icon?: UtilityLinkExternalLinkIconProps;
} & (({ asChild?: false } & ComponentProps<'a'>) | { asChild: true; children: React.ReactNode });

export const UtilityLink = (props: UtilityLinkProps) => {
  const { asChild, children, className, icon, ...rest } = props;

  if (asChild) {
    return (
      <Slot className={`${utilityLinkStyle} ${className ?? ''}`} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={`${utilityLinkStyle} ${className ?? ''}`} {...rest}>
      {children}

      {props.target === '_blank' && <UtilityLinkExternalLinkIcon {...icon} />}
    </a>
  );
};

export type UtilityLinkExternalLinkIconProps = ComponentProps<'svg'>;

export const UtilityLinkExternalLinkIcon = (props: UtilityLinkExternalLinkIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-label={`${rest['aria-label'] ?? '新規タブで開きます'}`}
      role='img'
      className={`ml-1 inline-block align-[-0.15em] ${className ?? ''}`}
      fill='none'
      height='16'
      viewBox='0 0 48 48'
      width='16'
    >
      <path
        className={className ?? ''}
        d='M22 6V9H9V39H39V26H42V42H6V6H22ZM42 6V20H39V11.2L21 29L19 27L36.8 9H28V6H42Z'
        fill='currentColor'
      />
    </svg>
  );
};
```

#### `src/components/UtilityLink/index.ts`

```tsx
export { UtilityLink, UtilityLinkExternalLinkIcon, utilityLinkStyle } from './UtilityLink';
```

## Foundation（トークンとTailwind設定）

デザイントークンの一次情報は `@digital-go-jp/design-tokens` パッケージの `tokens.css` である。`tailwind-theme-plugin` がこれらをTailwindクラス（例: `bg-key-900`、`text-solid-gray-800`）へ対応付ける。

#### `node_modules/@digital-go-jp/design-tokens/dist/tokens.css`

```css
/**
 * Do not edit directly, this file was auto-generated.
 */

:root {
  --color-primitive-blue-50: #e8f1fe;
  --color-primitive-blue-100: #d9e6ff;
  --color-primitive-blue-200: #c5d7fb;
  --color-primitive-blue-300: #9db7f9;
  --color-primitive-blue-400: #7096f8;
  --color-primitive-blue-500: #4979f5;
  --color-primitive-blue-600: #3460fb;
  --color-primitive-blue-700: #264af4;
  --color-primitive-blue-800: #0031d8;
  --color-primitive-blue-900: #0017c1;
  --color-primitive-blue-1000: #00118f;
  --color-primitive-blue-1100: #000071;
  --color-primitive-blue-1200: #000060;
  --color-primitive-light-blue-50: #f0f9ff;
  --color-primitive-light-blue-100: #dcf0ff;
  --color-primitive-light-blue-200: #c0e4ff;
  --color-primitive-light-blue-300: #97d3ff;
  --color-primitive-light-blue-400: #57b8ff;
  --color-primitive-light-blue-500: #39abff;
  --color-primitive-light-blue-600: #008bf2;
  --color-primitive-light-blue-700: #0877d7;
  --color-primitive-light-blue-800: #0066be;
  --color-primitive-light-blue-900: #0055ad;
  --color-primitive-light-blue-1000: #00428c;
  --color-primitive-light-blue-1100: #00316a;
  --color-primitive-light-blue-1200: #00234b;
  --color-primitive-cyan-50: #e9f7f9;
  --color-primitive-cyan-100: #c8f8ff;
  --color-primitive-cyan-200: #99f2ff;
  --color-primitive-cyan-300: #79e2f2;
  --color-primitive-cyan-400: #2bc8e4;
  --color-primitive-cyan-500: #01b7d6;
  --color-primitive-cyan-600: #00a3bf;
  --color-primitive-cyan-700: #008da6;
  --color-primitive-cyan-800: #008299;
  --color-primitive-cyan-900: #006f83;
  --color-primitive-cyan-1000: #006173;
  --color-primitive-cyan-1100: #004c59;
  --color-primitive-cyan-1200: #003741;
  --color-primitive-green-50: #e6f5ec;
  --color-primitive-green-100: #c2e5d1;
  --color-primitive-green-200: #9bd4b5;
  --color-primitive-green-300: #71c598;
  --color-primitive-green-400: #51b883;
  --color-primitive-green-500: #2cac6e;
  --color-primitive-green-600: #259d63;
  --color-primitive-green-700: #1d8b56;
  --color-primitive-green-800: #197a4b;
  --color-primitive-green-900: #115a36;
  --color-primitive-green-1000: #0c472a;
  --color-primitive-green-1100: #08351f;
  --color-primitive-green-1200: #032213;
  --color-primitive-lime-50: #ebfad9;
  --color-primitive-lime-100: #d0f5a2;
  --color-primitive-lime-200: #c0f354;
  --color-primitive-lime-300: #ade830;
  --color-primitive-lime-400: #9ddd15;
  --color-primitive-lime-500: #8cc80c;
  --color-primitive-lime-600: #7eb40d;
  --color-primitive-lime-700: #6fa104;
  --color-primitive-lime-800: #618e00;
  --color-primitive-lime-900: #507500;
  --color-primitive-lime-1000: #3e5a00;
  --color-primitive-lime-1100: #2c4100;
  --color-primitive-lime-1200: #1e2d00;
  --color-primitive-yellow-50: #fbf5e0;
  --color-primitive-yellow-100: #fff0b3;
  --color-primitive-yellow-200: #ffe380;
  --color-primitive-yellow-300: #ffd43d;
  --color-primitive-yellow-400: #ffc700;
  --color-primitive-yellow-500: #ebb700;
  --color-primitive-yellow-600: #d2a400;
  --color-primitive-yellow-700: #b78f00;
  --color-primitive-yellow-800: #a58000;
  --color-primitive-yellow-900: #927200;
  --color-primitive-yellow-1000: #806300;
  --color-primitive-yellow-1100: #6e5600;
  --color-primitive-yellow-1200: #604b00;
  --color-primitive-orange-50: #ffeee2;
  --color-primitive-orange-100: #ffdfca;
  --color-primitive-orange-200: #ffc199;
  --color-primitive-orange-300: #ffa66d;
  --color-primitive-orange-400: #ff8d44;
  --color-primitive-orange-500: #ff7628;
  --color-primitive-orange-600: #fb5b01;
  --color-primitive-orange-700: #e25100;
  --color-primitive-orange-800: #c74700;
  --color-primitive-orange-900: #ac3e00;
  --color-primitive-orange-1000: #8b3200;
  --color-primitive-orange-1100: #6d2700;
  --color-primitive-orange-1200: #541e00;
  --color-primitive-red-50: #fdeeee;
  --color-primitive-red-100: #ffdada;
  --color-primitive-red-200: #ffbbbb;
  --color-primitive-red-300: #ff9696;
  --color-primitive-red-400: #ff7171;
  --color-primitive-red-500: #ff5454;
  --color-primitive-red-600: #fe3939;
  --color-primitive-red-700: #fa0000;
  --color-primitive-red-800: #ec0000;
  --color-primitive-red-900: #ce0000;
  --color-primitive-red-1000: #a90000;
  --color-primitive-red-1100: #850000;
  --color-primitive-red-1200: #620000;
  --color-primitive-magenta-50: #f3e5f4;
  --color-primitive-magenta-100: #ffd0ff;
  --color-primitive-magenta-200: #ffaeff;
  --color-primitive-magenta-300: #ff8eff;
  --color-primitive-magenta-400: #f661f6;
  --color-primitive-magenta-500: #f137f1;
  --color-primitive-magenta-600: #db00db;
  --color-primitive-magenta-700: #c000c0;
  --color-primitive-magenta-800: #aa00aa;
  --color-primitive-magenta-900: #8b008b;
  --color-primitive-magenta-1000: #6c006c;
  --color-primitive-magenta-1100: #500050;
  --color-primitive-magenta-1200: #3b003b;
  --color-primitive-purple-50: #f1eafa;
  --color-primitive-purple-100: #ecddff;
  --color-primitive-purple-200: #ddc2ff;
  --color-primitive-purple-300: #cda6ff;
  --color-primitive-purple-400: #bb87ff;
  --color-primitive-purple-500: #a565f8;
  --color-primitive-purple-600: #8843e1;
  --color-primitive-purple-700: #6f23d0;
  --color-primitive-purple-800: #5c10be;
  --color-primitive-purple-900: #5109ad;
  --color-primitive-purple-1000: #41048e;
  --color-primitive-purple-1100: #30016c;
  --color-primitive-purple-1200: #21004b;
  --color-neutral-white: #ffffff;
  --color-neutral-black: #000000;
  --color-neutral-solid-gray-50: #f2f2f2;
  --color-neutral-solid-gray-100: #e6e6e6;
  --color-neutral-solid-gray-200: #cccccc;
  --color-neutral-solid-gray-300: #b3b3b3;
  --color-neutral-solid-gray-400: #999999;
  --color-neutral-solid-gray-420: #949494;
  --color-neutral-solid-gray-500: #7f7f7f;
  --color-neutral-solid-gray-536: #767676;
  --color-neutral-solid-gray-600: #666666;
  --color-neutral-solid-gray-700: #4d4d4d;
  --color-neutral-solid-gray-800: #333333;
  --color-neutral-solid-gray-900: #1a1a1a;
  --color-neutral-opacity-gray-50: rgba(0, 0, 0, 0.05);
  --color-neutral-opacity-gray-100: rgba(0, 0, 0, 0.1);
  --color-neutral-opacity-gray-200: rgba(0, 0, 0, 0.2);
  --color-neutral-opacity-gray-300: rgba(0, 0, 0, 0.3);
  --color-neutral-opacity-gray-400: rgba(0, 0, 0, 0.4);
  --color-neutral-opacity-gray-420: rgba(0, 0, 0, 0.42);
  --color-neutral-opacity-gray-500: rgba(0, 0, 0, 0.5);
  --color-neutral-opacity-gray-536: rgba(0, 0, 0, 0.54);
  --color-neutral-opacity-gray-600: rgba(0, 0, 0, 0.6);
  --color-neutral-opacity-gray-700: rgba(0, 0, 0, 0.7);
  --color-neutral-opacity-gray-800: rgba(0, 0, 0, 0.8);
  --color-neutral-opacity-gray-900: rgba(0, 0, 0, 0.9);
  --font-weight-400: 400;
  --font-weight-700: 700;
  --font-family-sans: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-mono: 'Noto Sans Mono', monospace;
  --font-size-14: 0.875rem;
  --font-size-16: 1rem;
  --font-size-17: 1.0625rem;
  --font-size-18: 1.125rem;
  --font-size-20: 1.25rem;
  --font-size-22: 1.375rem;
  --font-size-24: 1.5rem;
  --font-size-26: 1.625rem;
  --font-size-28: 1.75rem;
  --font-size-32: 2rem;
  --font-size-36: 2.25rem;
  --font-size-45: 2.8125rem;
  --font-size-48: 3rem;
  --font-size-57: 3.5625rem;
  --font-size-64: 4rem;
  --line-height-100: 1;
  --line-height-120: 1.2;
  --line-height-130: 1.3;
  --line-height-140: 1.4;
  --line-height-150: 1.5;
  --line-height-160: 1.6;
  --line-height-170: 1.7;
  --line-height-175: 1.75;
  --border-radius-4: 0.25rem;
  --border-radius-6: 0.375rem;
  --border-radius-8: 0.5rem;
  --border-radius-12: 0.75rem;
  --border-radius-16: 1rem;
  --border-radius-24: 1.5rem;
  --border-radius-32: 2rem;
  --border-radius-full: 624.9375rem;
  --elevation-1: 0 2px 8px 1px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.3);
  --elevation-2: 0 2px 12px 2px rgba(0,0,0,0.1), 0 1px 6px 0 rgba(0,0,0,0.3);
  --elevation-3: 0 4px 16px 3px rgba(0,0,0,0.1), 0 1px 6px 0 rgba(0,0,0,0.3);
  --elevation-4: 0 6px 20px 4px rgba(0,0,0,0.1), 0 2px 6px 0 rgba(0,0,0,0.3);
  --elevation-5: 0 8px 24px 5px rgba(0,0,0,0.1), 0 2px 10px 0 rgba(0,0,0,0.3);
  --elevation-6: 0 10px 30px 6px rgba(0,0,0,0.1), 0 3px 12px 0 rgba(0,0,0,0.3);
  --elevation-7: 0 12px 36px 7px rgba(0,0,0,0.1), 0 3px 14px 0 rgba(0,0,0,0.3);
  --elevation-8: 0 14px 40px 7px rgba(0,0,0,0.1), 0 3px 16px 0 rgba(0,0,0,0.3);
  --color-semantic-success-1: var(--color-primitive-green-600);
  --color-semantic-success-2: var(--color-primitive-green-800);
  --color-semantic-error-1: var(--color-primitive-red-800);
  --color-semantic-error-2: var(--color-primitive-red-900);
  --color-semantic-warning-yellow-1: var(--color-primitive-yellow-700);
  --color-semantic-warning-yellow-2: var(--color-primitive-yellow-900);
  --color-semantic-warning-orange-1: var(--color-primitive-orange-600);
  --color-semantic-warning-orange-2: var(--color-primitive-orange-800);
  --color-key-50: var(--color-primitive-blue-50);
  --color-key-100: var(--color-primitive-blue-100);
  --color-key-200: var(--color-primitive-blue-200);
  --color-key-300: var(--color-primitive-blue-300);
  --color-key-400: var(--color-primitive-blue-400);
  --color-key-500: var(--color-primitive-blue-500);
  --color-key-600: var(--color-primitive-blue-600);
  --color-key-700: var(--color-primitive-blue-700);
  --color-key-800: var(--color-primitive-blue-800);
  --color-key-900: var(--color-primitive-blue-900);
  --color-key-1000: var(--color-primitive-blue-1000);
  --color-key-1100: var(--color-primitive-blue-1100);
  --color-key-1200: var(--color-primitive-blue-1200);
}
```

#### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin'),
    require('@tailwindcss/container-queries'),
  ],
};
```

## コンポーネントの動作仕様

PowerPointでは次の動作を実装したように見せかけない。キーボード操作、フォーカス遷移、ARIA更新、ライブリージョン、開閉、選択、入力補助は、資料内で状態名と注記として扱う。動作の一次情報は各コンポーネントのソースと `react-aria-components` のドキュメントである。

| Component | Behavior provider |
| --- | --- |
| Accordion | ネイティブ要素 |
| Blockquote | ネイティブ要素 |
| Breadcrumbs | ネイティブ要素 |
| Button | ネイティブ要素 |
| Calendar | ネイティブ要素 |
| Card | ネイティブ要素 |
| Carousel | ネイティブ要素 |
| Checkbox | ネイティブ要素 |
| ChipLabel | ネイティブ要素 |
| DatePicker | ネイティブ要素 |
| Disclosure | ネイティブ要素 |
| Divider | ネイティブ要素 |
| Dl | ネイティブ要素 |
| Drawer | ネイティブ要素 |
| EmergencyBanner | ネイティブ要素 |
| ErrorText | ネイティブ要素 |
| FileUpload | ネイティブ要素 |
| HamburgerMenuButton | ネイティブ要素 |
| Heading | ネイティブ要素 |
| HorizontalMenu | ネイティブ要素 |
| Image | ネイティブ要素 |
| Input | ネイティブ要素 |
| Label | ネイティブ要素 |
| LanguageSelector | ネイティブ要素 |
| Legend | ネイティブ要素 |
| Link | ネイティブ要素 |
| List | ネイティブ要素 |
| MenuList | ネイティブ要素 |
| MenuListBox | ネイティブ要素 |
| ModalDialog | ネイティブ要素 |
| NotificationBanner | ネイティブ要素 |
| PageNavigation | ネイティブ要素 |
| ProgressIndicator | ネイティブ要素 |
| Radio | ネイティブ要素 |
| RequirementBadge | ネイティブ要素 |
| ResourceList | ネイティブ要素 |
| SearchBox | ネイティブ要素 |
| Select | ネイティブ要素 |
| SeparatedDatePicker | ネイティブ要素 |
| Slot | ネイティブ要素 |
| StatusBadge | ネイティブ要素 |
| StepNavigation | ネイティブ要素 |
| SupportText | ネイティブ要素 |
| Switch | ネイティブ要素 |
| Tab | ネイティブ要素 |
| Table | ネイティブ要素 |
| Textarea | ネイティブ要素 |
| UtilityLink | ネイティブ要素 |

## アセット利用規則

| Source asset | Type | Bytes |
| --- | --- | ---: |
| `src/components/Card/assets/card-2.jpg` | `JPG` | 98074 |
| `src/components/Card/assets/card-3-1.png` | `PNG` | 4174 |
| `src/components/Card/assets/card-3-2.png` | `PNG` | 12969 |
| `src/components/Card/assets/card-4.jpg` | `JPG` | 119447 |
| `src/components/Card/assets/card-5.jpg` | `JPG` | 121749 |
| `src/components/Card/assets/card-6.jpg` | `JPG` | 163165 |
| `src/components/Carousel/carousel-sample-images/image-1.webp` | `WEBP` | 40562 |
| `src/components/Carousel/carousel-sample-images/image-1@2x.webp` | `WEBP` | 107354 |
| `src/components/Carousel/carousel-sample-images/image-2.webp` | `WEBP` | 35466 |
| `src/components/Carousel/carousel-sample-images/image-2@2x.webp` | `WEBP` | 80276 |
| `src/components/Carousel/carousel-sample-images/image-3.webp` | `WEBP` | 43642 |
| `src/components/Carousel/carousel-sample-images/image-3@2x.webp` | `WEBP` | 114676 |
| `src/components/Carousel/carousel-sample-images/image-4.webp` | `WEBP` | 22634 |
| `src/components/Carousel/carousel-sample-images/image-4@2x.webp` | `WEBP` | 43548 |
| `src/components/Carousel/carousel-sample-images/image-5.webp` | `WEBP` | 60614 |
| `src/components/Carousel/carousel-sample-images/image-5@2x.webp` | `WEBP` | 160882 |
| `src/components/Carousel/carousel-sample-images/image-6.webp` | `WEBP` | 62706 |
| `src/components/Carousel/carousel-sample-images/image-6@2x.webp` | `WEBP` | 195284 |
| `src/components/Carousel/carousel-sample-images/image-7.webp` | `WEBP` | 19662 |
| `src/components/Carousel/carousel-sample-images/image-7@2x.webp` | `WEBP` | 47136 |
| `src/components/Carousel/carousel-sample-images/image-8.webp` | `WEBP` | 12092 |
| `src/components/Carousel/carousel-sample-images/image-8@2x.webp` | `WEBP` | 29648 |
| `src/components/Carousel/carousel-sample-images/image-9.webp` | `WEBP` | 67336 |
| `src/components/Carousel/carousel-sample-images/image-9@2x.webp` | `WEBP` | 161104 |
| `src/components/Carousel/docs/carousel-1024.webp` | `WEBP` | 19384 |
| `src/components/Carousel/docs/carousel-1024@2x.webp` | `WEBP` | 52102 |
| `src/components/Image/sample-mobile.png` | `PNG` | 11891 |
| `src/components/Image/sample-mobile@2x.png` | `PNG` | 32812 |
| `src/components/Image/sample.png` | `PNG` | 12165 |
| `src/components/Image/sample@2x.png` | `PNG` | 37687 |

Use an asset without changing its aspect ratio. Give meaningful assets descriptive PowerPoint alt text; decorative assets receive empty alt text.
