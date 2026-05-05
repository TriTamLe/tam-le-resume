# Button UI Component Specification

This document describes the expected design behavior for the button UI component. AI agents should use this as the design source of truth when creating, editing, or reviewing button styles.

## Component Model

A button is defined by four design dimensions:

- `variant`: visual style family.
- `type`: semantic color intent.
- `state`: interaction state.
- `size`: button scale.

It may also receive a Lucide Lab icon item:

- `icon`: an icon node imported from `@lucide/lab`.
- `iconPosition`: `"before"` or `"after"`, defaulting to `"before"`.

## Variants

There are three variants:

- `primary`
- `secondary`
- `link`

Use `primary` for the most important action in a context.
Use `secondary` for supporting actions.
Use `link` for low-emphasis text-like actions.

## Types

Each variant supports four color types:

- `normal`
- `red`
- `blue`
- `green`

This creates 12 base button styles:

- 3 variants x 4 types = 12 button combinations.

Use the type to communicate intent:

- `normal`: neutral/default action.
- `red`: destructive, warning, or negative action.
- `blue`: informational or navigation-related action.
- `green`: positive, success, or confirmation action.

## States

Each button combination must support these states:

- `idle`
- `hover`
- `disabled`

The `hover` state should only change color enough to feel interactive. It should not change layout, size, border width, font size, or spacing.

Enabled buttons should show a pointer cursor on hover.

The `disabled` state should look inactive and must not use a hover style.

## Sizes

There are three sizes:

| Size | Min height | Padding | Text size | Line height |
| --- | ---: | ---: | ---: | ---: |
| `large` | `48px` | `12px 20px` | `18px` | `22px` |
| `default` | `36px` | `8px 14px` | `14px` | `17px` |
| `small` | `24px` | `4px 8px` | `10px` | `12px` |

Buttons should size from their content and padding. Do not use a fixed width for normal text buttons.

Only use fixed width for specific layout cases such as icon-only buttons or a parent layout that intentionally constrains the button.

All sizes should keep the same visual structure:

- horizontal layout
- centered content
- automatic width based on content
- optional icon before or after text
- `8px` gap between icon and text when both are present
- consistent border radius

## Base Layout

All non-link buttons should follow this structure:

```css
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
border-radius: 5px;
font-family: "Be Vietnam Pro";
font-style: normal;
font-weight: 400;
```

Default-size text:

```css
font-size: 14px;
line-height: 17px;
```

Do not absolutely position button text. Text and icons should be centered by the button layout.

## Icon Rules

A button may contain:

- text only
- a Lucide Lab icon before text
- a Lucide Lab icon after text
- icon only, if the usage provides an accessible label

Icons must be rendered with the `Icon` component from `@lucide/vue`, using the Lucide Lab item as the icon node.

Example:

```vue
<script setup lang="ts">
import { floppyDisk } from "@lucide/lab";
</script>

<template>
  <Button :icon="floppyDisk">
    Save
  </Button>
</template>
```

The button component should render the icon internally:

```vue
<Icon :icon-node="icon" />
```

Icon requirements:

- Icons inherit the current text color.
- Icons are decorative when button text is present, so render them with `aria-hidden="true"`.
- Icon-only buttons must provide an accessible label such as `aria-label`.
- Icon size should scale with button size:
  - `large`: about `18px`
  - `default`: about `14px`
  - `small`: about `10px`
- Keep the `8px` gap between icon and text.
- Do not pass raw SVG markup or text symbols as icons when a Lucide Lab item is available.

## Primary Variant

Primary buttons have a filled background and visible outline.

For primary buttons, the border color must always match the text color in the same state. This includes the disabled state.

### Primary Normal

Idle:

```css
background: var(--primary-10);
border: 1px solid var(--primary-90);
color: var(--primary-90);
```

Hover:

```css
background: var(--primary-30);
border: 1px solid var(--primary-90);
color: var(--primary-90);
```

Disabled:

```css
background: var(--primary-40);
border: 1px solid var(--primary-60);
color: var(--primary-60);
```

### Primary Red

Idle:

```css
background: var(--red-40);
border: 1px solid var(--red-90);
color: var(--red-90);
```

Hover:

```css
background: var(--red-50);
border: 1px solid var(--red-90);
color: var(--red-90);
```

Disabled:

```css
background: var(--red-40);
border: 1px solid var(--primary-60);
color: var(--primary-60);
```

### Primary Blue

Idle:

```css
background: var(--blue-40);
border: 1px solid var(--blue-90);
color: var(--blue-90);
```

Hover:

```css
background: var(--blue-50);
border: 1px solid var(--blue-90);
color: var(--blue-90);
```

Disabled:

```css
background: var(--blue-40);
border: 1px solid var(--primary-60);
color: var(--primary-60);
```

### Primary Green

Idle:

```css
background: var(--green-40);
border: 1px solid var(--green-90);
color: var(--green-90);
```

Hover:

```css
background: var(--green-50);
border: 1px solid var(--green-90);
color: var(--green-90);
```

Disabled:

```css
background: var(--green-40);
border: 1px solid var(--primary-60);
color: var(--primary-60);
```

## Secondary Variant

Secondary buttons are filled but do not have a visible outline.

Use a transparent border to preserve layout stability:

```css
border: 1px solid transparent;
```

### Secondary Normal

Idle:

```css
background: var(--primary-40);
color: var(--primary-90);
```

Hover:

```css
background: var(--primary-50);
color: var(--primary-90);
```

Disabled:

```css
background: var(--primary-30);
color: var(--primary-60);
```

### Secondary Red

Idle:

```css
background: var(--red-40);
color: var(--red-90);
```

Hover:

```css
background: var(--red-50);
color: var(--red-90);
```

Disabled:

```css
background: var(--red-40);
color: var(--primary-60);
```

### Secondary Blue

Idle:

```css
background: var(--blue-40);
color: var(--blue-90);
```

Hover:

```css
background: var(--blue-50);
color: var(--blue-90);
```

Disabled:

```css
background: var(--blue-40);
color: var(--primary-60);
```

### Secondary Green

Idle:

```css
background: var(--green-40);
color: var(--green-90);
```

Hover:

```css
background: var(--green-50);
color: var(--green-90);
```

Disabled:

```css
background: var(--green-40);
color: var(--primary-60);
```

## Link Variant

Link buttons have no filled background and no visible outline.

Use link buttons for actions that should feel lightweight. They should still behave like buttons, but visually resemble inline text actions.

Base link style:

```css
background: transparent;
border: 1px solid transparent;
```

### Link Normal

Idle:

```css
color: var(--primary-90);
```

Hover:

```css
color: var(--primary-90);
background: var(--primary-30);
```

Disabled:

```css
color: var(--primary-60);
background: transparent;
```

### Link Red

Idle:

```css
color: var(--red-60);
```

Hover:

```css
color: var(--red-70);
background: transparent;
```

Disabled:

```css
color: var(--red-40);
background: transparent;
```

### Link Blue

Idle:

```css
color: var(--blue-60);
```

Hover:

```css
color: var(--blue-70);
background: transparent;
```

Disabled:

```css
color: var(--blue-40);
background: transparent;
```

### Link Green

Idle:

```css
color: var(--green-60);
```

Hover:

```css
color: var(--green-70);
background: transparent;
```

Disabled:

```css
color: var(--green-40);
background: transparent;
```

## Agent Implementation Rules

When implementing or modifying buttons:

1. Preserve the three-level button model: `variant`, `type`, and `size`.
2. Support all states: `idle`, `hover`, and `disabled`.
3. Do not change dimensions between states.
4. Do not change icon/text spacing between states.
5. Render icons through `Icon` from `@lucide/vue` and receive icon nodes from `@lucide/lab`.
6. Use padding and min-height for size; do not hard-code text button widths.
7. Use design tokens such as `var(--primary-90)` instead of hard-coded colors.
8. Keep text and icons vertically centered.
9. Use a pointer cursor for enabled buttons.
10. Make disabled buttons visually inactive and functionally non-interactive.
11. If a design detail is missing, infer it from the matching color scale and existing pattern.

## Quick Reference

Primary:

- filled background
- visible outline
- strongest emphasis

Secondary:

- filled background
- no visible outline
- medium emphasis

Link:

- transparent background
- no visible outline
- lowest emphasis

Color type pattern:

- `normal` uses `primary-*`
- `red` uses `red-*`
- `blue` uses `blue-*`
- `green` uses `green-*`
