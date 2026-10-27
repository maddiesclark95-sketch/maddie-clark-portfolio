# Figma Variables — Homepage

Source: [Maddie Clark — Website 2026 2.0](https://www.figma.com/design/0OWFhozzgDOkQ7E8KuuchY/Maddie-Clark---Website-2026-2.0?node-id=12628-915) — node `12628:915` ("Homepage" frame)

Extracted variable properties from this frame, organised by type with suggested CSS custom property names for a code setup.

## Colour

| Figma variable | Value | Suggested CSS var |
|---|---|---|
| `colour/peach/50` | `#fef3f2` | `--color-peach-50` |
| `colour/peach/100` | `#fde2df` | `--color-peach-100` |
| `colour/peach/300` | `#fba89d` | `--color-peach-300` |
| `colour/peach/500-brand` | `#f96e4f` | `--color-peach-500-brand` |
| `colour/peach/700` | `#853826` | `--color-peach-700` |
| `colour/peach/800` | `#532014` | `--color-peach-800` |
| `colour/maroon/50` | `#d8cece` | `--color-maroon-50` |
| `colour/maroon/700` | `#260505` | `--color-maroon-700` |
| `colour/primary-lavender/50` | `#fbf9fe` | `--color-primary-lavender-50` |
| `colour/primary-lavender/100` | `#f1e5fa` | `--color-primary-lavender-100` |

### Text colour

| Figma variable | Value | Suggested CSS var |
|---|---|---|
| `text-colour/text-primary` | `#202020` | `--text-primary` |
| `text-colour/text-primary-invert` | `#fbf6ed` | `--text-primary-invert` |
| `text-colour/text-secondary` | `#202020bd` (74% opacity) | `--text-secondary` |

### Surface colour

| Figma variable | Value | Suggested CSS var |
|---|---|---|
| `surface-colour/surface-primary` | `#ffffff` | `--surface-primary` |
| `surface-colour/surface-tertiary` | `#ffffff` | `--surface-tertiary` |
| `surface-colour/surface-invert-primary` | `#202020` | `--surface-invert-primary` |
| `surface-colour/surface-invert-secondary` | `#260505` | `--surface-invert-secondary` |

### Border colour

| Figma variable | Value | Suggested CSS var |
|---|---|---|
| `border-colour/border-secondary` | `#fef3f2` | `--border-secondary` |

### CTA colour

| Figma variable | Value | Suggested CSS var |
|---|---|---|
| `cta-colour/primary/text` | `#202020` | `--cta-primary-text` |
| `cta-colour/primary/text-disabled` | `#ffffff` | `--cta-primary-text-disabled` |
| `cta-colour/primary-invert/surface` | `#ffffff` | `--cta-primary-invert-surface` |
| `cta-colour/secondary-invert/surface` | `#ffffff` | `--cta-secondary-invert-surface` |

## Typography

### Font families & weights

| Figma variable | Value |
|---|---|
| `typography/heading-font-family` | P22 Mackinac Pro |
| `typography/heading-weight` | Medium |
| `typography/body-font-family` | DM Sans |
| `typography/body-weight` | Regular |

### Heading styles

| Style | Size (px) | Line height (px) | Letter spacing (px) | Weight | Font |
|---|---|---|---|---|---|
| H1 | 56 | 60 | -1 | Medium (500) | P22 Mackinac Pro |
| H4 | 28 | 36 | -1 | Medium (500) | P22 Mackinac Pro |
| H6 | 20 | 28 | 0 | Medium (500) | P22 Mackinac Pro |

### Body styles

| Style | Size (px) | Line height (px) | Letter spacing (px) | Weight | Font |
|---|---|---|---|---|---|
| Sm Body | 16 | 24 | 0 | Regular (400) | DM Sans |

Raw Figma composite font tokens (for reference):

- `Heading/H1`: `Font(family: typography/heading-font-family, style: typography/heading-weight, size: size/heading/h1, weight: 500, lineHeight: line-height/heading/h1, letterSpacing: letter-spacing/heading/h1)`
- `Heading/H4`: `Font(family: typography/heading-font-family, style: typography/heading-weight, size: size/heading/h4, weight: 500, lineHeight: line-height/heading/h4, letterSpacing: letter-spacing/heading/h4)`
- `Heading/H6`: `Font(family: typography/heading-font-family, style: typography/heading-weight, size: size/heading/h6, weight: 500, lineHeight: line-height/heading/h6, letterSpacing: letter-spacing/heading/h6)`
- `Body/Sm Body`: `Font(family: typography/body-font-family, style: typography/body-weight, size: size/body/sm-body, weight: 400, lineHeight: line-height/body/sm-body, letterSpacing: letter-spacing/body/sm-body)`

> Note: this frame only surfaced H1, H4, H6 and Sm Body styles. If the full type scale (H2, H3, H5, other body sizes) exists elsewhere in the file, those variables weren't bound on this particular frame and would need pulling from another node.

## Spacing

| Figma variable | Value (px) | Suggested CSS var |
|---|---|---|
| `spacing/50` | 4 | `--space-50` |
| `spacing/100` | 8 | `--space-100` |
| `spacing/150` | 12 | `--space-150` |
| `spacing/200` | 16 | `--space-200` |
| `spacing/300` | 24 | `--space-300` |
| `spacing/400` | 32 | `--space-400` |
| `spacing/800` | 64 | `--space-800` |
| `spacing/1500` | 120 | `--space-1500` |

## Component padding

| Figma variable | Value (px) | Suggested CSS var |
|---|---|---|
| `padding/component-horizontal/md` | 64 | `--padding-component-horizontal-md` |
| `padding/component-vertical/xl` | 240 | `--padding-component-vertical-xl` |

## Radius

| Figma variable | Value (px) | Suggested CSS var |
|---|---|---|
| `radius/rounded` | 1000 (effectively full/pill) | `--radius-rounded` |

## Example CSS custom properties block

```css
:root {
  /* Colour */
  --color-peach-50: #fef3f2;
  --color-peach-100: #fde2df;
  --color-peach-300: #fba89d;
  --color-peach-500-brand: #f96e4f;
  --color-peach-700: #853826;
  --color-peach-800: #532014;
  --color-maroon-50: #d8cece;
  --color-maroon-700: #260505;
  --color-primary-lavender-50: #fbf9fe;
  --color-primary-lavender-100: #f1e5fa;

  --text-primary: #202020;
  --text-primary-invert: #fbf6ed;
  --text-secondary: rgba(32, 32, 32, 0.74);

  --surface-primary: #ffffff;
  --surface-tertiary: #ffffff;
  --surface-invert-primary: #202020;
  --surface-invert-secondary: #260505;

  --border-secondary: #fef3f2;

  --cta-primary-text: #202020;
  --cta-primary-text-disabled: #ffffff;
  --cta-primary-invert-surface: #ffffff;
  --cta-secondary-invert-surface: #ffffff;

  /* Typography */
  --font-heading: "P22 Mackinac Pro";
  --font-body: "DM Sans";

  --h1-size: 56px;
  --h1-line-height: 60px;
  --h1-letter-spacing: -1px;
  --h1-weight: 500;

  --h4-size: 28px;
  --h4-line-height: 36px;
  --h4-letter-spacing: -1px;
  --h4-weight: 500;

  --h6-size: 20px;
  --h6-line-height: 28px;
  --h6-letter-spacing: 0px;
  --h6-weight: 500;

  --body-sm-size: 16px;
  --body-sm-line-height: 24px;
  --body-sm-letter-spacing: 0px;
  --body-sm-weight: 400;

  /* Spacing */
  --space-50: 4px;
  --space-100: 8px;
  --space-150: 12px;
  --space-200: 16px;
  --space-300: 24px;
  --space-400: 32px;
  --space-800: 64px;
  --space-1500: 120px;

  /* Component padding */
  --padding-component-horizontal-md: 64px;
  --padding-component-vertical-xl: 240px;

  /* Radius */
  --radius-rounded: 1000px;
}
```
