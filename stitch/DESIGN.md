---
name: LoopCheck Operations
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#3a4a5f'
  on-secondary-container: '#a9bad3'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style

The design system is engineered for operational efficiency and high-density monitoring. It serves professionals who require immediate clarity on complex system statuses. The aesthetic is **Corporate / Modern** with a strong emphasis on **Minimalism** and utility. 

The personality is calm and analytical, avoiding visual noise to prioritize data throughput. The UI evokes a sense of control and reliability through a structured, grid-aligned interface that utilizes subtle depth and high-contrast status signaling. It is built to remain legible and non-fatiguing during long periods of active monitoring.

## Colors

The palette is anchored by a deep Navy and Slate foundation to reduce eye strain in high-density environments. 

- **Primary Blue:** Used sparingly for primary actions and active selections.
- **Surface & Neutrals:** A tiered system of dark blues and grays (`#020617` to `#334155`) defines hierarchy.
- **Semantic Status:** 
  - **Emerald (Success/Ready):** High-vibrancy green for positive system states.
  - **Amber (Warning/Paused):** Clear visibility for non-critical interruptions.
  - **Rose (Error/Blocker):** High-contrast red for immediate attention.

In dark mode, borders use a subtle `slate-800` to define containers without the weight of heavy shadows. High contrast ratios (7:1 for text) are strictly maintained for accessibility.

## Typography

This design system utilizes a highly functional typographic scale centered on **Inter**. For data-heavy tables and ID strings, **JetBrains Mono** is introduced to ensure character distinction (e.g., 0 vs O).

- **Hierarchy:** Use `headline-sm` for most card titles to maintain high density.
- **Labels:** `label-caps` is reserved for table headers and section overviews to differentiate metadata from primary data.
- **Readability:** Line heights are kept tight (1.2x to 1.5x) to allow more rows of data to be visible on-screen at once.

## Layout & Spacing

A **Fluid Grid** model is used with a strict 4px baseline rhythm. For a status board, density is prioritized over "breathability."

- **Desktop Layout:** 12-column grid with 12px gutters. This allows for multi-pane dashboards where users can view 3-4 data modules side-by-side.
- **Component Spacing:** Use `sm` (8px) for internal padding of small cards and `xs` (4px) for spacing between related label/value pairs.
- **Container Alignment:** All elements should snap to the grid. Inset margins are kept minimal (16px - 24px) to maximize horizontal real estate for wide data tables.

## Elevation & Depth

Hierarchy in this design system is achieved primarily through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** `#020617` — The lowest layer.
- **Level 1 (Surface):** `#0F172A` — Primary card and container backgrounds.
- **Level 2 (Overlay/Pop-over):** `#1E293B` — Used for tooltips and dropdown menus.

**Borders:** Every container must have a 1px solid border (`#1E293B`). When a card is "Active" or "Selected," the border color shifts to the Primary Blue or the relevant semantic status color. 
**Shadows:** Use only a single "Ambient" shadow for floating elements (modals): `0 4px 12px rgba(0, 0, 0, 0.5)`.

## Shapes

The shape language is **Soft** but leans towards geometric precision. 

- **Containers & Cards:** 0.25rem (4px) corner radius. This keeps the interface feeling "instrument-like" and efficient.
- **Status Indicators:** Small 6px circles for status pips, or fully rounded (pill) tags for status chips to distinguish them from rectangular input fields.
- **Buttons:** 4px radius to match containers.

## Components

- **Buttons:** Compact height (32px for default). Primary buttons use a solid blue fill; secondary buttons use a ghost style with a slate border.
- **Status Chips:** High-density badges (20px height) with a 10% opacity background of the semantic color and a 100% opacity text color (e.g., Emerald text on a dark green tinted base).
- **Data Tables:** Row height fixed at 36px. Borders only between rows (no vertical lines) using `border_default`. Row hover state uses a subtle `slate-800` background.
- **Input Fields:** Dark background (`#020617`) with a 1px slate border. Focus state triggers a primary blue ring with 0px offset.
- **Status Pips:** A pulsating glow effect (8px circle) is used for "Active" or "Live" statuses to provide immediate visual feedback.
- **Operational Cards:** Must include a header with `headline-sm` and an optional "Action" area in the top right for overflow menus or filters.