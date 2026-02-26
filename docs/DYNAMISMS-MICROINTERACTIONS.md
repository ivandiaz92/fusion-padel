# Dynamisms & Microinteractions — Fusion Padel

This document describes the **motion, transitions, and microinteractions** implemented across the Fusion Padel site. They are implemented so that the site feels responsive and polished while still respecting `prefers-reduced-motion`.

---

## 1. Design tokens (motion)

In `css/variables.css`:

- **Easing**: `--ease-out-expo` and `--ease-out-quart` for snappy, natural-feeling motion.
- **Durations**: `--duration-fast` (0.2s), `--duration-normal` (0.35s), `--duration-slow` (0.5s).

These are used consistently so all animations and transitions feel coherent.

---

## 2. Hero (above the fold)

**CSS animations** in `css/sections.css`:

- **fadeUp**: Elements start with `opacity: 0` and `translateY(…)` and animate to `opacity: 1` and `translateY(0)`.
- **Staggered delays**:  
  - Eyebrow: 0.2s  
  - Title: 0.35s  
  - Subtitle: 0.5s  
  - Actions (CTA): 0.65s  
- **scrollPulse**: The hero scroll indicator (vertical line) uses a subtle scale/opacity loop (2s, infinite) to draw attention without being distracting.

Result: a clear entrance sequence and a gentle ongoing cue to scroll.

---

## 3. Scroll reveal

**Mechanism**: JavaScript in `js/main.js` uses an **IntersectionObserver** to add the class `is-visible` when elements enter the viewport (with a small bottom rootMargin). CSS in `css/sections.css` defines:

- **.reveal**: `opacity: 0`, `translateY(24px)`, and a 0.6s transition.
- **.reveal.is-visible**: `opacity: 1`, `translateY(0)`.
- **Staggered delays** per element (e.g. service cards get different transition-delay values when they become visible) so cards don’t all pop in at once.

**Elements that reveal**: Service cards, stats, plan cards, coach cards, consideraciones block, instalaciones content and media.

Result: content “reveals” as the user scrolls, with a light staggered effect.

---

## 4. Buttons

In `css/components.css`:

- **Default**: Transitions on `transform`, `background-color`, `color`, `box-shadow`.
- **Active**: `transform: scale(0.98)` for a quick press feedback.
- **Primary hover**: Background lightens and `box-shadow` uses `--shadow-glow` (green glow).
- **Outline hover**: Background gets a light primary tint (`--color-primary-muted`).

Result: clear hover and click feedback without heavy animation.

---

## 5. Service cards

In `css/sections.css`:

- **Top border**: A `::before` pseudo-element (3px, primary color) has `transform: scaleX(0)` by default and `scaleX(1)` on hover (origin left), creating a “line draw” effect.
- **Card**: On hover, `translateY(-4px)`, stronger border color, and `box-shadow`.
- **Link**: “Ver más” link increases `gap` on hover so the arrow feels like it’s moving away.

Result: cards feel interactive and the top line gives a clear “selected” state.

---

## 6. Plan cards (membresías)

- **Hover**: `translateY(-2px)` and stronger border color.
- **Featured plan**: Already has a distinct border and gradient; the same hover lift applies.

Result: subtle lift that differentiates hover state without overwhelming the pricing content.

---

## 7. Coach cards

- **Hover**: `translateY(-4px)` and `box-shadow` (medium shadow).
- Same transition tokens as other cards for consistency.

Result: coaches section feels interactive and consistent with the rest of the site.

---

## 8. Navigation

**Mobile** (`css/components.css` + `js/main.js`):

- **Hamburger → X**: The three `.nav-toggle__bar` lines transition with `transform` and `opacity`; when `aria-expanded="true"`, the first and third bars rotate to form an X and the middle bar fades out.
- **Overlay**: The nav overlay uses `opacity`, `visibility`, and `translateY(10px)` → `translateY(0)` when `.nav.is-open` is toggled.
- **Body scroll**: When the menu is open, `body` overflow is set to hidden to avoid background scroll.

**Desktop**: Nav links have a simple color transition to primary on hover.

Result: the mobile menu feels like a clear open/close interaction; desktop nav is minimal but responsive.

---

## 9. Header

- **Background**: Header uses a semi-transparent background and `backdrop-filter: blur(12px)`.
- **On scroll**: When `window.scrollY > 60`, the class `header--scrolled` is added (in `js/main.js`), which adds a bottom border. The change is tied to CSS transitions on background and border.

Result: the header gains a clear “scrolled” state that reinforces context.

---

## 10. Form (contacto)

In `js/main.js`:

- **Submit**: Prevent default (no backend yet). Button text changes to “Enviado”, button is disabled, then after 2 seconds it resets to “Enviar”, is re-enabled, and the form is reset.
- **Focus**: Inputs and textarea get `border-color: var(--color-primary)` on focus (CSS in `css/sections.css`).

Result: immediate feedback on submit and clear focus states.

---

## 11. Smooth scroll

- **CSS**: `html { scroll-behavior: smooth }` in `css/base.css`.
- **JS**: Fallback for anchor links: `scrollIntoView({ behavior: 'smooth', block: 'start' })` so in-page navigation (e.g. “Únete ahora”, nav links) scrolls smoothly to the target section.

Result: in-page navigation feels smooth and intentional.

---

## 12. Reduced motion

In `css/responsive.css`, `@media (prefers-reduced-motion: reduce)`:

- All animations and transitions are forced to 0.01ms duration and animations run once.
- `html` scroll-behavior is set to `auto`.

Result: the site remains usable and readable for users who prefer minimal motion, while keeping the same layout and content.

---

## 13. Summary

The site has **consistent dynamisms and microinteractions**: hero entrance and scroll cue, scroll reveal with stagger, button and card hovers (including service-card top line and link gap), nav hamburger/X and overlay, header scroll state, form feedback, and smooth scroll, all using shared motion tokens and with reduced-motion support. No changes were made for this confirmation; this document only describes what is already implemented.
