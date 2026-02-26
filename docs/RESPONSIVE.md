# Responsive Design — Fusion Padel

This document describes everything implemented for a **fully responsive** experience across devices (mobile, tablet, desktop) and special user preferences.

---

## 1. Foundation

| Element | Implementation |
|--------|----------------|
| **Viewport** | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in `index.html` so layout scales correctly on all screens. |
| **Fluid typography** | All text sizes use `clamp()` in `css/variables.css` (e.g. `--text-hero`, `--text-4xl`, `--text-base`) so type scales smoothly between breakpoints without hard jumps. |
| **Container padding** | `--container-padding: clamp(1rem, 5vw, 2rem)` so side spacing adapts from small phones to large desktops. |
| **Overflow** | `body { overflow-x: hidden }` in `css/base.css` to avoid horizontal scroll on narrow viewports. |
| **Images** | `img { max-width: 100%; height: auto }` so images never overflow and keep aspect ratio. |

---

## 2. Breakpoints & layout

Breakpoints are used consistently across `css/sections.css`, `css/components.css`, and `css/responsive.css`:

| Breakpoint | Width | Usage |
|------------|--------|--------|
| **Extra small** | max 23.4375em (~375px) | Smaller hero title, larger touch targets for buttons, reduced card padding. |
| **Small** | 30em (480px) | Services grid: 2 columns. |
| **Tablet** | 48em (768px) | Section titles larger; membresías 3 columns (with featured plan spanning on tablet); coaches 3 columns; footer row layout; consideraciones 2-column list. |
| **Desktop** | 64em (1024px) | Services 3 columns; nav becomes horizontal (hamburger hidden); contact 2 columns; instalaciones 2 columns. |
| **Large desktop** | 80em (1280px) | Hero content and section titles get max-width for readable line length. |

---

## 3. Section-by-section behavior

- **Hero**: `min-height: 100vh` and `100dvh` for correct height on mobile (including dynamic viewport). Padding uses `--header-height` and `--container-padding`. On very short viewports (landscape, max-height 500px), hero uses `min-height: auto` and the scroll indicator is hidden.
- **Services**: 1 column (default) → 2 columns at 30em → 3 columns at 64em. Gaps increase at larger breakpoints.
- **Stats**: Flexbox with wrap and centered content; gap increases on tablet.
- **Instalaciones**: Single column by default; at 64em becomes 2 columns (content + media).
- **Membresías**: Single column → at 48em two columns with featured plan full-width and centered; at 64em three columns (handled in sections.css).
- **Coaches**: Single column → 3 columns at 48em.
- **Contact**: Single column → 2 columns at 64em.
- **Footer**: Stacked on small screens; row with space-between at 48em.

---

## 4. Touch & accessibility

- **Touch targets**: In `responsive.css`, buttons get `min-height: 2.75rem` and adequate padding on extra-small screens to meet touch-target guidelines.
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` in `responsive.css` sets animations and transitions to near-zero duration and disables smooth scroll, so motion-sensitive users are not overwhelmed.
- **High contrast**: `@media (prefers-contrast: high)` strengthens focus and outline styles (e.g. outline button border width).

---

## 5. Print

A full `@media print` block in `responsive.css`:

- Hides header, nav toggle, hero scroll, hero actions, buttons, and skip link.
- Sets hero to auto height and normal padding.
- Forces light background and dark text; keeps section titles and key text readable with black/green accents.
- Keeps footer with a simple border.

---

## 6. Summary

The site is **responsive** end-to-end: viewport meta, fluid type and spacing, breakpoint-driven grids and layout, small-screen and landscape tweaks, touch-friendly controls, and respect for reduced motion and print. No changes were made for this confirmation; this document only describes what is already implemented.
