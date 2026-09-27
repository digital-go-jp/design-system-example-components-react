# DADS Component Inventory (React)

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

