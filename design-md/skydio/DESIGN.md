---
version: alpha
name: Skydio-Inspired-design-analysis
description: An inspired interpretation of Skydio's design language — an AI-drone brand engineered as public-safety and defense infrastructure. The system is built on a white editorial canvas, deep-ink body type, and a single mission-critical red used only as an operational-status accent. Display headlines are heavy sans-serif in the mid-70s (px) with a signature period ("A family of flying robots."), and every marketing section is prefixed with a two-digit numeric counter (01–05) borrowed from technical documentation. The hero contains no hardware beauty shot — instead a live real-time clock, a rolling total-flights counter, and a short manifesto do the heavy lifting. It reads more like a defense contractor's annual report than a consumer drone site.

colors:
  primary: "#e63946"
  primary-deep: "#b91d2c"
  primary-press: "#7f1220"
  primary-soft: "#f47a83"
  primary-tint: "#fce4e6"
  ink: "#0a0a0a"
  ink-secondary: "#1c1c1c"
  ink-mute: "#5a5a5a"
  ink-mute-2: "#7a7a7a"
  on-primary: "#ffffff"
  on-ink: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f6f6f6"
  canvas-slate: "#111214"
  hairline: "#e5e5e5"
  hairline-strong: "#d4d4d4"
  status-live: "#e63946"
  status-ok: "#0a7a3b"

typography:
  display-mega:
    fontFamily: "Söhne, 'Inter Display', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -3.0px
    fontFeature: ss01
  display-xxl:
    fontFamily: "Söhne, 'Inter Display', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -2.2px
    fontFeature: ss01
  display-xl:
    fontFamily: "Söhne, 'Inter Display', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.6px
    fontFeature: ss01
  display-lg:
    fontFamily: "Söhne, 'Inter Display', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.0px
    fontFeature: ss01
  heading-lg:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.6px
  heading-md:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
  heading-sm:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-tabular:
    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', 'SF Mono', ui-monospace, monospace"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
    fontFeature: tnum
  counter-num:
    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', 'SF Mono', ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.4px
    fontFeature: tnum
  eyebrow:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.2px
    textTransform: uppercase
  button-md:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro:
    fontFamily: "Söhne, Inter, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px
  huge: 80px
  giant: 128px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  pill: 9999px

elevation:
  0: "none"
  1: "0 1px 2px rgba(0,0,0,0.04)"
  2: "0 6px 20px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"
  3: "0 24px 60px rgba(0,0,0,0.14)"

animations:
  hover-shift-fast:
    duration: 120ms
    easing: cubic-bezier(0.2, 0, 0, 1)
  counter-tick:
    duration: 400ms
    easing: cubic-bezier(0.4, 0, 0.2, 1)
  reveal-scroll:
    duration: 600ms
    easing: cubic-bezier(0.16, 1, 0.3, 1)

components:
  button-primary:
    background: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 22px
    hoverBackground: "{colors.primary}"
  button-secondary:
    background: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 22px
  section-counter:
    typography: "{typography.counter-num}"
    textColor: "{colors.primary}"
    padding: 0 0 8px 0
    borderBottom: "1px solid {colors.hairline}"
  live-clock:
    typography: "{typography.body-tabular}"
    textColor: "{colors.ink}"
    padding: 0
  status-dot-live:
    background: "{colors.status-live}"
    size: 8px
    rounded: "{rounded.pill}"
    animation: "pulse 1.6s ease-in-out infinite"
  card-solution:
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    padding: 32px
    rounded: "{rounded.sm}"
    hoverBorder: "{colors.ink}"
  card-product-hero:
    background: "{colors.canvas-slate}"
    textColor: "{colors.on-ink}"
    padding: 48px
    rounded: "{rounded.none}"
---

## Overview

Skydio's design language reads as a defense-and-infrastructure editorial system rather than a consumer product brand. The canvas is `{colors.canvas}` (pure white). Body type is near-black `{colors.ink}` (`#0a0a0a`). The lone accent is a single mission-critical **red** (`{colors.primary}` — `#e63946`), used sparingly as an operational-status signal — on the live status dot, the section counter numerals, hover states, and rare inline emphasis. Red is never a full-bleed background.

The hero has no hardware beauty shot. Instead a large **display-mega** headline ("A family of flying robots.") — heavy sans-serif at 96px, weight 600, negative tracking, terminated by a **period** — sits beside a monospace **live clock and date overlay** and a rolling **total-flights counter** ("4,779,138 Customer flights and counting"). Together they encode the brand claim: *this is real infrastructure, running right now*.

Below the fold, marketing sections are prefixed with a two-digit numeric counter (**01 DFR / 02 Site Security / 03 Inspection / 04 Mapping / 05 National Security**) in monospace with a hairline underline. The pattern is lifted directly from technical documentation and defense whitepapers; the brand carries it into the marketing surface unmodified.

**Key Characteristics:**
- **Mission-critical red as accent-only.** `{colors.primary}` never fills a section. It appears on the live status dot (pulsing), section counter numerals, hover swaps on primary CTAs, and rare inline emphasis words.
- **Period-terminated display headlines.** Every hero-level statement ends in a period. "A family of flying robots." — the punctuation is deliberate and signals declarative confidence.
- **Two-digit monospace section counters.** 01 through 05, with a hairline rule, opens every solution/section block. Borrowed from technical doc conventions.
- **Live real-time telemetry in the hero.** Clock, date, and rolling flights counter render as monospace live data — not decorative text.
- **Hardware appears mid-scroll, never at the top.** The X10 → Dock → R10 product line reveal happens after solutions and mission statement — hardware is subordinated to mission.
- **Square-cornered buttons.** `{rounded.none}` 0px on all buttons. Pills are consumer; squares are industrial.
- **Editorial 12-col with generous huge/giant vertical rhythm.** 80–128px section padding is the norm; feature grids breathe.

## Colors

> **Source pages:** `skydio.com/` (home), `/solutions/dfr`, `/products` (product line).

### Brand & Accent
- **Mission Red** (`{colors.primary}` — `#e63946`): The only accent. Live status dot, section counter numerals, hover state on primary CTA, rare inline emphasis. *Never* a section background or a filled button in the default state.
- **Mission Red Deep** (`{colors.primary-deep}` — `#b91d2c`): Pressed / active state.
- **Mission Red Press** (`{colors.primary-press}` — `#7f1220`): Deep-press state on dark surfaces.
- **Mission Red Soft** (`{colors.primary-soft}` — `#f47a83`): Rare data-viz tint (e.g. secondary line in a two-line chart).
- **Mission Red Tint** (`{colors.primary-tint}` — `#fce4e6`): Extreme-subtle callout background (used ≤ once per page).

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background. 90%+ of the marketing surface is on white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f6f6f6`): Feature-band alternator; used to segment consecutive white sections.
- **Canvas Slate** (`{colors.canvas-slate}` — `#111214`): The rare dark-inverted band — used for the product-line reveal ("The first of its kind. A family of flying robots") and for one immersive video block.
- **Hairline** (`{colors.hairline}` — `#e5e5e5`): 1px card borders and section rules.
- **Hairline Strong** (`{colors.hairline-strong}` — `#d4d4d4`): Emphasized rules under section counters.

### Text
- **Ink** (`{colors.ink}` — `#0a0a0a`): Near-black default body color. Not pure black — a hair softer for print-safe rendering.
- **Ink Secondary** (`{colors.ink-secondary}` — `#1c1c1c`): Secondary heading text.
- **Ink Mute** (`{colors.ink-mute}` — `#5a5a5a`): Helper text, captions, section eyebrows.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#7a7a7a`): Fine print, metadata.
- **On Ink / On Primary** (`{colors.on-ink}` — `#ffffff`): Text on dark or red surfaces.

### Semantic
- **Status Live** (`{colors.status-live}` — `#e63946`): The pulsing dot indicating live telemetry. Deliberately identical to primary — the brand's operational identity IS the accent.
- **Status OK** (`{colors.status-ok}` — `#0a7a3b`): Rare success confirmation (e.g. checkmark on a spec-compliance line). Used sparingly.

## Typography

### Font Family

Skydio's marketing uses **Söhne** (Klim Type Foundry) at weight 600 for display and 500 for UI. When Söhne is unavailable, **Inter Display** at weight 600 with `letter-spacing: -1.6px` at 56px+ is the closest open-source match. Monospace roles (live clock, counter numerals, section counters, tabular figures) use **JetBrains Mono** or **IBM Plex Mono** at weight 500.

The signature move is **display + mono side-by-side** in the hero: an editorial 96px headline next to a 15px monospace live-data readout. The contrast is the brand.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 96px | 600 | 1.0 | -3.0px | Hero headline (desktop wide) |
| `{typography.display-xxl}` | 72px | 600 | 1.02 | -2.2px | Hero headline (default) |
| `{typography.display-xl}` | 56px | 600 | 1.05 | -1.6px | Section opener |
| `{typography.display-lg}` | 40px | 600 | 1.1 | -1.0px | Solution-card title |
| `{typography.heading-lg}` | 28px | 600 | 1.15 | -0.6px | Feature title |
| `{typography.heading-md}` | 22px | 600 | 1.25 | -0.3px | Card title |
| `{typography.heading-sm}` | 18px | 600 | 1.3 | 0 | Sub-heading |
| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | Marketing body lead |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default body |
| `{typography.body-tabular}` | 15px | 500 | 1.3 | 0 | Live clock, counter, tabular data (monospace + `tnum`) |
| `{typography.counter-num}` | 14px | 500 | 1.0 | 0.4px | Section counter "01" — "05" |
| `{typography.eyebrow}` | 12px | 500 | 1.2 | 1.2px | ALL-CAPS section eyebrow |
| `{typography.button-md}` | 15px | 500 | 1.0 | 0 | Button label |
| `{typography.caption}` | 13px | 400 | 1.45 | 0 | Metadata, image captions |
| `{typography.micro}` | 11px | 400 | 1.35 | 0 | Fine print, legal |

### Principles
- **The period is part of the type.** Never remove the terminal period from display headlines. Its absence changes the tone from declarative-industrial to marketing-generic.
- **Heavy weight, negative tracking.** Display always renders at 600 with strong negative tracking (-1.6 to -3.0px at large sizes). Refuses the thin-type editorial mode of consumer/fintech brands.
- **Mono is not decoration.** Monospace roles (live clock, counters, tabular data) are functional. Do not use mono as a stylistic flourish for arbitrary headlines.
- **Eyebrows are all-caps.** Every section starts with a 12px all-caps letterspaced eyebrow above the display title.
- **`tnum` on every number.** Live counter, telemetry readouts, spec sheets — all use tabular figures.

### Note on Font Substitutes
Söhne is proprietary. For close open-source approximation:
- Display + UI → **Inter Display** at weight 600 with `letter-spacing: -1.6px` at 56–96px.
- Body → **Inter** at weight 400/500.
- Mono → **JetBrains Mono** or **IBM Plex Mono** at weight 500 (free via Google Fonts). Do not fall back to Courier — its width defeats the compact live-data feel.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px · `{spacing.huge}` 80px · `{spacing.giant}` 128px.
- **Section padding**: 80–128px vertical on marketing surfaces. Skydio breathes generously; consumer-drone density is off-brand.
- **Card internal padding**: 32–48px on solution cards; 48px on product-hero cards.

### Grid & Container
- 12-column grid, 1240px content max-width, 24px gutters.
- Solutions section uses a 2-column split: left rail = numbered counter list (01–05) at sticky position; right rail = detail imagery + copy that swaps as user scrolls or clicks. It's the brand's most-recognizable structural pattern.
- Product-line reveal ("X10 / Dock / R10") uses a horizontal 3-up on dark canvas.

### Whitespace Philosophy
Skydio's whitespace is defense-report generous. Consumer sites cluster; Skydio isolates. Every hero has 128px above and below the headline; every solution card has 40–48px internal padding. The visual message is "there is nothing here that shouldn't be here."

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface — most of the page |
| 1 | `{elevation.1}` (0 1px 2px rgba(0,0,0,0.04)) | Card lift on white — barely perceptible |
| 2 | `{elevation.2}` (0 6px 20px + 1px 2px) | Product-line dark-card lift, floating panels |
| 3 | `{elevation.3}` (0 24px 60px) | Modal / overlay — rare on marketing |

### Decorative Depth
Skydio's depth medium is **not shadow**. It's the **live status dot pulse animation** on the hero — a single 8px red dot that softly pulses at 1.6s intervals, signaling the site is a live operational surface. Static shadows stay subtle; motion carries the atmosphere.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | **All buttons.** All primary cards. Section dividers. |
| `{rounded.xs}` | 2px | Fine hairline tags |
| `{rounded.sm}` | 4px | Solution cards |
| `{rounded.md}` | 6px | Video / image containers |
| `{rounded.lg}` | 8px | Occasional product screenshot chrome |
| `{rounded.xl}` | 12px | Reserved — used sparingly |
| `{rounded.pill}` | 9999px | Status dot ONLY. Never on buttons. |

### Photography Geometry
Skydio's photography is **operational, not aspirational**. Drone shots in-flight over infrastructure (bridges, power lines, disaster sites), first-responders receiving DFR intel, night-mode thermal views. Never a lifestyle shot of a person "having fun with a drone." All images render at 16:9 or 21:9 with zero border radius. Full-bleed hero images are common; portrait crops are rare.

## Components

### Buttons

**`button-primary`** — the dominant CTA system-wide.
- Background `{colors.ink}` (near-black), text `{colors.on-ink}`, type `{typography.button-md}`, padding `14px 22px`, rounded `{rounded.none}` (square).
- **Hover state** `button-primary-hover`: background swaps to `{colors.primary}` (red). This is the single moment red enters a filled state.
- Pressed state: background `{colors.primary-deep}`.

**`button-secondary`** — outline alternative.
- Background transparent, text `{colors.ink}`, 1px solid `{colors.ink}` border, same square geometry.
- Hover: fill inverts to `{colors.ink}` background + `{colors.on-ink}` text.

**`button-on-dark`** — used on `{colors.canvas-slate}` panels.
- Background `{colors.on-ink}` (white), text `{colors.ink}`, square, `14px 22px`.

**`text-link-arrow`** — the "Learn more →" arrow-suffixed inline link.
- Text `{colors.ink}` at `{typography.body-md}`, no underline. Arrow icon inline. Hover: text and arrow both shift to `{colors.primary}`.

### Cards & Containers

**`card-solution`** — the numbered solution card (01–05).
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, padding 32–40px, rounded `{rounded.sm}` 4px.
- Structure: `01` counter (top-left, mono red), section eyebrow, display title, body, `text-link-arrow`.
- Hover: border darkens to `{colors.ink}`; no fill change.

**`card-product-hero`** — the dark inverted product-line card.
- Background `{colors.canvas-slate}`, text `{colors.on-ink}`, padding 48px, rounded `{rounded.none}`.
- Contains hardware beauty shot (X10 / Dock / R10), name in `{typography.heading-lg}`, one-line description in `{typography.body-md}` at `{colors.hairline-strong}` opacity, `button-on-dark` CTA.

**`card-story`** — the customer-proof band card.
- Background `{colors.canvas}` or `{colors.canvas-soft}`, 1px `{colors.hairline}` border, padding 32px, rounded `{rounded.sm}`.
- Headshot / operator image at top, `heading-md` outcome quote, `caption` role + agency name, small logo.

**`card-logo-tile`** — industry logo-wall tile.
- Background `{colors.canvas-soft}`, padding 24px, rounded `{rounded.none}`. Monochrome logo centered; grayscale-hover-to-color unless the customer is public-safety (then stays monochrome — signals confidentiality).

### Inputs & Forms

**`text-input`** — standard form field.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `12px 14px`, rounded `{rounded.sm}` 4px, 1px `{colors.hairline-strong}` border.
- Focus: border swaps to `{colors.ink}` (not red — red is reserved).

### Navigation

**`nav-bar`** — top nav.
- Background `{colors.canvas}` (or `{colors.canvas}` with `rgba(255,255,255,0.9)` + backdrop-blur when scrolled), padding `{spacing.lg} {spacing.xl}`. Logo wordmark on the left in `{typography.heading-md}`, primary nav center at `{typography.body-md}`, "Talk to sales" as `button-primary` on the right.
- Height 64px on desktop, 56px on mobile.

### Pills, Tags, and Chips

**`chip-eyebrow`** — the section eyebrow tag.
- Background transparent, text `{colors.ink-mute}`, type `{typography.eyebrow}` (12px all-caps 1.2px tracking). No border, no fill — just letterspaced type.

**`chip-live`** — the "LIVE" indicator paired with real-time telemetry.
- Background transparent, contains `status-dot-live` (8px pulsing red circle) + "LIVE" text at `{typography.eyebrow}` in `{colors.primary}`.

### Signature Components

**Live Hero Telemetry** — the brand's most distinctive element.
- A row containing: real-time clock (HH:MM:SS in `{typography.body-tabular}`) + date (YYYY.MM.DD same style) + `chip-live` + running counter ("4,779,138 Customer flights and counting" — animate with counter-tick on scroll-into-view). All monospace. Positioned inside the hero, right of or below the display headline.

**Section Counter Rail** — the numbered 01–05 vertical navigator.
- Sticky left rail on desktop, scrollable horizontal chip row on mobile. Each entry: two-digit mono number in `{colors.primary}` + section eyebrow. Active state: red number + solid ink text; inactive: red number + mute text. Clicking scrolls; scrolling activates.

**Manifesto Band** — the "Mission-ready. Day or night." interstitial.
- Full-bleed `{colors.canvas-slate}` block, 96–128px vertical padding, single centered display headline in `{colors.on-ink}` at `{typography.display-xl}`, no imagery. Pure typographic statement.

**Product-Line Reveal (3-up)** — X10 → Dock for X10 → R10 horizontal reveal.
- 3 `card-product-hero` cards on `{colors.canvas-slate}`. Each hardware shot rendered at 4:3 with dramatic side-lighting. Order matters: X10 (the flagship) → Dock (autonomy infrastructure) → R10 (compact tactical). The order tells the mission story.

**Customer Logo Wall** — grid of `card-logo-tile` (5–6 per row).
- Public-safety and defense agency logos. Monochrome. Confidentiality note in `{typography.caption}` at bottom right acknowledges unnamed classified customers.

**Live Status Dot** (`status-dot-live`) — 8px red circle that pulses at 1.6s intervals. Rendered via CSS `@keyframes pulse` scaling 1.0 → 1.15 → 1.0 and opacity 1 → 0.6 → 1.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (red) for accent-only: status dot, counter numerals, hover states, rare inline emphasis. One "red event" per section max.
- Terminate hero-level display headlines with a period. Declarative confidence is the brand.
- Number your sections 01 through 0N in mono red at the top of each block.
- Include a live element in the hero — real clock, running counter, telemetry readout. The brand is "operational, right now."
- Use square-cornered buttons (`{rounded.none}`). Industrial not consumer.
- Show operational photography — infrastructure inspection, first responders, night thermal. Not lifestyle.
- Give sections 80–128px vertical breathing room.

### Don't
- Don't use red as a section background or a default filled-button state. Red is a status signal, not decoration.
- Don't add pill-shaped buttons — pills read consumer / SaaS and break the industrial voice.
- Don't remove the period from display headlines. It's not a typo.
- Don't lead with a hardware beauty shot in the hero. Solutions and mission first; hardware after.
- Don't introduce gradient backgrounds or soft/pastel palettes — the brand is high-contrast documentary.
- Don't use display weight below 600 — thin type collapses the industrial authority.
- Don't animate the live dot faster than 1.4s — it becomes an alarm, not a heartbeat.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full `display-mega` 96px hero; sticky numbered rail on left of solutions |
| Desktop | 1024–1440px | Default 1240px container; `display-xxl` 72px hero |
| Tablet | 768–1023px | Sticky rail collapses to horizontal chip strip above content; hero drops to 56px |
| Mobile | < 768px | Numbered rail becomes swipeable chip row; hero drops to 40–44px; live telemetry stacks under headline |

### Touch Targets
- Square buttons hit ≥ 44×44px on mobile via padding scaling. Section-counter chips on mobile hit 40×40px minimum.

### Collapsing Strategy
- Display stair-steps 96 → 72 → 56 → 40px through breakpoints.
- Numbered solutions rail collapses left-rail → sticky-top → swipeable chips.
- Product-line 3-up horizontal → 2-up → 1-up single-file on mobile.
- Manifesto band stays full-bleed at all sizes; text drops one display tier.

### Image Behavior
Full-bleed hero and inline imagery use `srcset` with mobile crops centering on the operator / drone, desktop crops showing the wider infrastructure context. Never crop out the operational context on mobile — the environmental frame IS the brand.

## Iteration Guide

1. Focus on ONE component at a time; the counter rail and live hero are the two highest-signal signature components.
2. Reference tokens directly (`{colors.primary}`, `{typography.counter-num}`, `{rounded.none}`).
3. When adding a new section, always number it — insert into the 01–0N counter rail.
4. Keep red usage below 5% of any given viewport. Red is a scalar accent.
5. Body text defaults to `{typography.body-md}` 16px; monospace roles use `{typography.body-tabular}` 15px with `tnum`.
6. When in doubt about tone, ask: "would a defense contractor's annual report do this?" If yes, ship. If it feels like a Kickstarter drone page, revise.
7. Live elements (clock, counter, pulse dot) MUST use real data or fallback gracefully — a frozen "live" element is worse than none.
