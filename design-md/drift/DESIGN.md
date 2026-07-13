---
version: alpha
name: Drift-Innovation-Inspired-design-analysis
description: An inspired interpretation of Drift Innovation — a British action-camera brand with a distinctly motorcycle-and-industrial-rider identity, in strategic transition from consumer action cameras (Ghost / X5) into AI-powered wearable POV cameras for professional and remote-collaboration use cases. The design system is anchored on a near-black canvas (`#1A1A1A`) + a signature warm gold accent (`#B8912C`) + pure white for content surfaces, giving the brand a "reserved luxury workwear" feel that reads distinctly different from GoPro's aggressive commerce-yellow or from the FPV tech-cyan. Typography runs mid-weight sans-serif at moderate display sizes (never as loud as GoPro's 128px extra-bold shouts) — the brand's discipline is restraint. Structural signatures include: a full-bleed motorcycle-POV hero background (rider gloves + horizon + gauge), a 4-card **Featured Products** grid (Ghost XL / Ghost XL Pro / X5 / X3) each with £-sterling pricing prominently placed (British commerce provenance), a **5-slot vertical product-longform banner stack** where each product gets its own full-width feature strip with description + "Shop now", a **Best Selling Mounts & Accessories** row that acknowledges the mount-and-accessory ecosystem is 30%+ of category revenue, and — most distinctively — the **"AI-powered intelligent companion" pivot line** that repositions Drift from a consumer camera into a B2B wearable for industrial inspection and remote support. Drift is the only brand in this study whose home page announces a category pivot rather than a product refresh.

> Source: raw observation + category inference (2026-07-13). Palette (`#1A1A1A` primary + `#B8912C` gold + white), motorcycle-POV hero, 4-card Featured Products grid, Shopify-based commerce structure, and the strategic-pivot line "evolve into AI-powered intelligent companions for life and adventure" all directly observed on `driftinnovation.com`. Fine-grained tokens (spacing scale, elevation, hairline weights, gold-accent usage rules, £/US$ pricing conventions, and the 5-slot vertical product banner rhythm) are inferred from the observed structure and Shopify boutique-brand-store conventions.

colors:
  primary: "#1A1A1A"
  primary-hover: "#2c2c2c"
  primary-press: "#0a0a0a"
  accent: "#B8912C"
  accent-hover: "#a37e1f"
  accent-press: "#856615"
  accent-soft: "#f5ecd0"
  ink: "#1A1A1A"
  ink-secondary: "#2c2c2c"
  ink-mute: "#666666"
  ink-mute-2: "#8a8a8a"
  on-ink: "#ffffff"
  on-accent: "#0a0a0a"
  canvas: "#ffffff"
  canvas-soft: "#f7f6f2"
  canvas-warm: "#efece2"
  canvas-dark: "#1A1A1A"
  canvas-dark-lift: "#242424"
  hairline: "#e2e0d9"
  hairline-strong: "#c9c6bb"
  hairline-gold: "#B8912C"
  status-in-stock: "#0a7a3b"
  status-preorder: "#c47f00"

typography:
  display-xxl:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 84px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1.8px
  display-xl:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.6px
  display-editorial:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', 'Georgia', system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.4px
    fontStyle: normal
  heading-lg:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.3px
  heading-md:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  heading-sm:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0.4px
    textTransform: uppercase
  body-lg:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  price-md:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0
    fontFeature: tnum
  price-sm:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
    fontFeature: tnum
  eyebrow:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.6px
    textTransform: uppercase
  button-md:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 1.0px
    textTransform: uppercase
  caption:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  micro:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.4px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px
  huge: 72px
  giant: 112px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

elevation:
  0: "none"
  1: "0 1px 3px rgba(0,0,0,0.06)"
  2: "0 6px 20px rgba(0,0,0,0.08)"
  3: "0 20px 48px rgba(0,0,0,0.14)"
  hover-lift: "0 10px 28px rgba(0,0,0,0.10)"

animations:
  hover-shift-slow:
    duration: 260ms
    easing: cubic-bezier(0.2, 0, 0, 1)
  banner-parallax:
    duration: 700ms
    easing: cubic-bezier(0.4, 0, 0.2, 1)

components:
  button-primary:
    background: "{colors.primary}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 24px
    hoverBackground: "{colors.accent}"
    hoverTextColor: "{colors.on-accent}"
  button-secondary:
    background: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 24px
  card-featured-product:
    background: "{colors.canvas}"
    padding: 24px
    rounded: "{rounded.sm}"
    borderTop: "2px solid {colors.accent}"
  banner-product-strip:
    background: "{colors.canvas-warm}"
    padding: 64px 48px
    rounded: "{rounded.none}"
---

## Overview

Drift Innovation's design language reads as a **British riders' workshop**: reserved, industrial, warm-metallic, quietly confident. The brand is a small-team boutique competing in a category dominated by GoPro — its differentiation strategy is to lean into the **motorcycle/POV/wearable** niche and, per its explicit mission statement, to **pivot from consumer action cameras into AI-powered intelligent companions for adventure and industrial applications**.

The canvas is white (`{colors.canvas}` — `#ffffff`) with a warm-neutral secondary (`{colors.canvas-soft}` — `#f7f6f2`) for banded backgrounds. Text is near-black `{colors.ink}` (`#1A1A1A`) — deliberately warmer than pure black to pair with the gold accent. The signature voltage is **Drift Gold** `{colors.accent}` (`#B8912C`) — a warm brown-gold that reads as workshop-brass rather than jewelry-yellow. Gold is used sparingly: as a 2px card-top accent line on `card-featured-product`, on CTA hover swaps, and as a hairline separator between long-form banner strips.

The hero is a **single full-bleed motorcycle-POV background**: a rider's gloved hand on the throttle, dashboard in the foreground, horizon and road ahead. Over this photograph sits the brand headline "Capture Your Journey" in `{typography.display-xxl}` (84px weight 500 — noticeably lighter than GoPro's weight 800), a one-line mission subhead ("Craft innovative, user-centric action cameras and evolve into AI-powered intelligent companions for life and adventure"), and a single `button-primary` CTA "Shop now".

Below the fold, Drift follows a **Shopify-boutique commerce rhythm** with distinctly British sensibility:
1. **Featured Products 4-card grid** — Ghost XL / Ghost XL Pro / X5 / X3, each with £-sterling pricing.
2. **Best Selling Mounts & Accessories 3-card row** — 3.5mm mic / Universal Adapter / Handlebar Mount / Adhesive Kit.
3. **5-slot vertical product-longform banner stack** — Ghost XL / Ghost XL Pro / X3 / X5 / X5 Mini each get their own full-width feature strip with a longer description, an integrated product hero shot, and a "Shop now" CTA.
4. **Mission/brand-story block** — explicit language about the AI-companion pivot.

Compared to GoPro's dual-CTA aggressive-commerce pattern, Drift uses **a single CTA per card** ("Shop now") and lets the product description do the qualifying work. Compared to Antigravity's poetic minimalism, Drift's copy is straightforwardly declarative British-engineering language ("evolve into AI-powered intelligent companions for life and adventure").

**Key Characteristics:**
- **Warm-gold accent, not consumer-yellow.** `{colors.accent}` (`#B8912C`) reads as workshop-brass — an intentional distance from GoPro's `#F2C94C` retail-yellow.
- **British-provenance signals.** £-sterling pricing on Featured Products (the US mirror `us.driftinnovation.com` uses $), en-dash punctuation, restrained copy voice.
- **Motorcycle-POV hero, not action-multi-sport.** The single hero photograph is the visual identity — GoPro shows 10 sports; Drift shows one rider.
- **Single CTA discipline.** One "Shop now" per card. No "Learn more + Buy now" dual-CTA. The brand trusts descriptions to qualify.
- **5-slot vertical product-longform banner stack.** Each of the 5 flagship products gets its own full-width feature strip with room to breathe (unlike GoPro's dense 3-camera grid).
- **AI-companion pivot line in the hero subheadline.** The mission statement is not hidden in an "About" page — it is stated in the hero subhead itself. Explicit repositioning.
- **Shopify commerce infrastructure.** The site uses Shopify's default cart/checkout with a boutique-brand theme. `/collections/all` catalog, `£` pricing, and standard Shopify product-page markup are structural signals.
- **Zero-radius square buttons at moderate weight.** `{rounded.none}` + `{typography.button-md}` (13px weight 500 ALL-CAPS letter-spacing 1.0px) reads industrial but not shouty.

## Colors

> **Source pages:** `driftinnovation.com/` (home), `driftinnovation.com/products/ghost-xl` (product), `us.driftinnovation.com/` (US mirror with slightly different hero copy "Your Journey. Your Story"), `driftinnovation.com/collections/all` (catalog).

### Brand & Accent
- **Primary** (`{colors.primary}` — `#1A1A1A`): CTA resting state, wordmark, display type on light bg. Warmer than pure black — pairs with gold.
- **Primary Hover** (`{colors.primary-hover}` — `#2c2c2c`): Legacy hover; most CTAs swap to gold on hover instead.
- **Primary Press** (`{colors.primary-press}` — `#0a0a0a`): Pressed state.
- **Accent (Drift Gold)** (`{colors.accent}` — `#B8912C`): The single voltage. Uses:
  - CTA hover-state background swap (black → gold, text white → near-black).
  - 2px `card-featured-product` top border — a signature detail identifying flagship product cards.
  - Hairline dividers between vertical banner strips (`{colors.hairline-gold}`).
  - Rare inline emphasis in body copy on brand-mission words ("**AI-powered intelligent companions**").
- **Accent Hover** (`{colors.accent-hover}` — `#a37e1f`): Deeper gold on hover-over-gold.
- **Accent Press** (`{colors.accent-press}` — `#856615`): Pressed on gold.
- **Accent Soft** (`{colors.accent-soft}` — `#f5ecd0`): Rare mission-callout tint background (used ≤ once per page).

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f6f2`): Warm-tinted secondary — used for Featured Products band and Accessories band. The warm tint is what distinguishes Drift from a cold-white Shopify default.
- **Canvas Warm** (`{colors.canvas-warm}` — `#efece2`): Deeper warm tint for the vertical product-longform banner strips (each strip alternates canvas/canvas-warm/canvas/canvas-warm/canvas for visual rhythm).
- **Canvas Dark** (`{colors.canvas-dark}` — `#1A1A1A`): The nav bar background (on scroll) and the footer.
- **Canvas Dark Lift** (`{colors.canvas-dark-lift}` — `#242424`): Stacked-elevation on dark surface.
- **Hairline** (`{colors.hairline}` — `#e2e0d9`): 1px card border, warm-tinted to pair with the warm canvases.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c9c6bb`): Emphasized dividers.
- **Hairline Gold** (`{colors.hairline-gold}` — `#B8912C`): 1px gold hairline between vertical banner strips — the signature separator that unifies the 5-slot product stack.

### Text
- **Ink** (`{colors.ink}` — `#1A1A1A`): Default body color.
- **Ink Secondary** (`{colors.ink-secondary}` — `#2c2c2c`): Sub-heading.
- **Ink Mute** (`{colors.ink-mute}` — `#666666`): Helper copy.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#8a8a8a`): Fine metadata.
- **On Ink / On Accent**: `#ffffff` on `#1A1A1A`; `#0a0a0a` on `#B8912C`.

### Semantic
- **Status In Stock** (`{colors.status-in-stock}` — `#0a7a3b`): "In Stock" indicator.
- **Status Preorder** (`{colors.status-preorder}` — `#c47f00`): "Preorder" state (near-gold — visually consistent with the accent family).

## Typography

### Font Family

Drift uses a **Neue Haas Grotesk Display Pro** stack (paid Commercial Type) with **Inter Display** as the closest open-source substitute at matching weights. Weights favor 400/500 — deliberately lighter than GoPro's 700/800 shout — which gives Drift a "reserved British engineering" feel rather than a "loud American commerce" feel.

The signature typographic move is **display-editorial** (`{typography.display-editorial}`, 44px weight 400) — used exclusively for the vertical-banner product-headline slots (each of the 5 product strips uses this typographic register). It reads more like a magazine article headline than a marketing shout. Combined with warm-tinted canvas, it evokes a print-magazine product-feature layout.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 84px | 500 | 1.05 | -1.8px | Hero headline "Capture Your Journey" |
| `{typography.display-xl}` | 56px | 500 | 1.1 | -1.2px | Section opener |
| `{typography.display-lg}` | 40px | 500 | 1.15 | -0.6px | Featured-band title |
| `{typography.display-editorial}` | 44px | 400 | 1.25 | -0.4px | Vertical-banner product headline (Ghost XL / X5 / X3…) |
| `{typography.heading-lg}` | 28px | 500 | 1.25 | -0.3px | Card title |
| `{typography.heading-md}` | 20px | 500 | 1.3 | 0 | Sub-heading |
| `{typography.heading-sm}` | 15px | 500 | 1.35 | 0.4px | ALL-CAPS section eyebrow |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Marketing body lead |
| `{typography.body-md}` | 15px | 400 | 1.6 | 0 | Default body, product-card description |
| `{typography.price-md}` | 22px | 500 | 1.1 | 0 | Product-card price ("£299.00") |
| `{typography.price-sm}` | 15px | 500 | 1.2 | 0 | Accessory-card price |
| `{typography.eyebrow}` | 11px | 500 | 1.2 | 1.6px | ALL-CAPS eyebrow ("FEATURED") |
| `{typography.button-md}` | 13px | 500 | 1.0 | 1.0px | ALL-CAPS button label "SHOP NOW" — smaller than GoPro's 14px, more restrained |
| `{typography.caption}` | 12px | 400 | 1.5 | 0 | Photo credit, spec caption |
| `{typography.micro}` | 10px | 400 | 1.4 | 0.4px | Legal fine print |

### Principles
- **Mid-weight display, not extra-bold.** Weight 500 for hero, 400 for editorial. Never 700+.
- **British punctuation conventions.** Em-dash preferred over hyphen; single-quote for citations; no Oxford comma.
- **£-first pricing on the UK site.** "£299.00" not "£299" — always two decimals for retail commerce fidelity.
- **`tnum` on all prices.**
- **ALL-CAPS buttons at 13px.** Smaller and more restrained than GoPro's 14px. Signals "boutique" rather than "big-box retailer."

### Note on Font Substitutes
Open-source substitution stack:
- Display + UI → **Inter Display** at 500 with `letter-spacing: -1.8px` at 84px.
- Body → **Inter** at 400/500.
- If forced to a system-only stack: **Helvetica Neue** at Regular/Medium is a strong fallback (matches Drift's British-Modernist voice better than more decorative alternatives).

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px · `{spacing.huge}` 72px · `{spacing.giant}` 112px.
- **Section padding**: 72–112px vertical on marketing bands; 48–64px on vertical product-longform strips.
- **Card internal padding**: 24px on `card-featured-product`; 20px on accessory cards.

### Grid & Container
- 12-column grid, **1280px content max-width** on wide, 1120px default, 24px gutters.
- Featured Products grid: 4-up on wide desktop, 4-up on desktop, 2-up on tablet, 1-up on mobile.
- Accessories row: 3–4-up on desktop, 2-up on tablet, horizontal-swipe on mobile.
- **Vertical product-longform banner stack**: always 1-up full-width, 5 strips in canonical order (Ghost XL → Ghost XL Pro → X3 → X5 → X5 Mini), each strip 480–560px tall containing a 50/50 split (product hero shot on one side, editorial text + Shop-now CTA on the other). Strips alternate photo-left/photo-right so the reader's eye zig-zags down the page.

### Whitespace Philosophy
Drift's whitespace is **editorial-boutique**: enough breathing room that each product feels considered, tight enough that a Shopify commerce shopper doesn't lose the buy-flow. Vertical section padding of 72–112px is the standard band; individual banner strips get 48–64px of internal padding so the product-render can breathe against the warm canvas.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface — most of the page |
| 1 | `{elevation.1}` (0 1px 3px) | Featured product card resting state |
| 2 | `{elevation.2}` (0 6px 20px) | Card-hover lift |
| 3 | `{elevation.3}` (0 20px 48px) | Modal / floating chrome |
| hover-lift | `{elevation.hover-lift}` (0 10px 28px) | Accessory-card hover |

### Decorative Depth
Drift's depth is quiet — the brand doesn't rely on shadow drama. The visual weight comes from warm-canvas alternation (canvas / canvas-soft / canvas-warm) and from the gold hairline dividers that anchor each banner strip. Product renders carry their own baked-in soft shadow on the studio floor.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | **All buttons.** Vertical banner strips. Full-bleed hero |
| `{rounded.xs}` | 2px | Fine spec chip |
| `{rounded.sm}` | 4px | Featured product cards, accessory cards |
| `{rounded.md}` | 8px | Form inputs, video thumbnail chrome |
| `{rounded.lg}` | 12px | Rare mission-story card |
| `{rounded.pill}` | 9999px | Filter/tag chip in the collection PLP only |

### Photography Geometry
Drift's photography is **rider-POV documentary**: motorcycle-cockpit shots, remote-industrial-inspection tech close-ups, action-cyclist shoulder-mount POV. Hero imagery is 21:9 full-bleed with zero border radius. Product renders are studio isolates on `{colors.canvas-warm}` inner tiles with the product's baked-in floor shadow. No lifestyle-influencer photography — Drift's brand is craft, not lifestyle.

## Components

### Buttons

**`button-primary`** — the dominant "SHOP NOW" CTA.
- Background `{colors.primary}` (`#1A1A1A`), text `{colors.on-ink}`, type `{typography.button-md}` (ALL-CAPS 13px weight 500 tracking 1.0px), padding `14px 24px`, rounded `{rounded.none}`.
- **Hover state (signature)**: background swaps to `{colors.accent}` (`#B8912C`), text swaps to `{colors.on-accent}` (`#0a0a0a`). Transition 260ms — slower than GoPro's 100ms flash, reads as considered/British.
- Pressed: `{colors.accent-press}`.

**`button-secondary`** — outline alternative (rare — Drift mostly uses primary only).
- Background transparent, text `{colors.ink}`, 1px solid `{colors.ink}` border, square geometry.
- Hover: fill inverts to `{colors.ink}` background.

**`button-on-dark`** — CTA on `{colors.canvas-dark}` surfaces.
- Background `{colors.canvas}` (white), text `{colors.ink}`, square, `14px 24px`. Hover: swap to gold.

**`text-link-arrow`** — inline "Read more →" link.
- Text `{colors.ink}` at `{typography.body-md}`, arrow inline, no underline. Hover: text and arrow shift to `{colors.accent}` (gold).

### Cards & Containers

**`card-featured-product`** — Featured Products 4-card grid tile (Ghost XL / Ghost XL Pro / X5 / X3).
- Background `{colors.canvas}`, padding 24px, rounded `{rounded.sm}` 4px, **2px `{colors.accent}` top border** (signature detail — the gold accent bar identifies flagship cards).
- Structure: product hero shot (1:1 on `{colors.canvas-soft}` inner tile) → product name (`{typography.heading-lg}`) → one-line description (`{typography.body-md}`) → price (`{typography.price-md}` — "£299.00") → single `button-primary` "Shop now".
- Hover: `{elevation.hover-lift}` + product image scales 1.02.

**`card-accessory`** — Best Selling Mounts & Accessories tile.
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, padding 20px, rounded `{rounded.sm}` 4px.
- Structure: mount/accessory image → product name (`{typography.heading-md}`) → short description → price (`{typography.price-sm}`) → single "Shop now" text-link.

**`banner-product-strip`** — the 5-slot vertical product-longform strip (Ghost XL / Ghost XL Pro / X3 / X5 / X5 Mini).
- Background alternates `{colors.canvas}` / `{colors.canvas-warm}` between strips.
- Layout: 50/50 split — product hero shot on one side (photo-left or photo-right, alternating), text stack on the other.
- Text stack: eyebrow (product line — "GHOST XL" ALL-CAPS) → `{typography.display-editorial}` product headline (a short editorial phrase — "Ride ready. Rain ready.") → `{typography.body-lg}` 2–3-sentence description → `button-primary` "Shop now".
- Between strips: 1px `{colors.hairline-gold}` divider — the gold hairline unifies the entire product stack as a cohesive family.

**`card-mission-block`** — the brand-mission callout ("evolve into AI-powered intelligent companions").
- Background `{colors.accent-soft}` (`#f5ecd0`), padding 48px, rounded `{rounded.lg}` 12px.
- Contains: eyebrow "OUR MISSION" → display headline in `{typography.display-lg}` → 2-paragraph explanatory body copy → link to /about.

### Inputs & Forms

**`text-input`** — Shopify-standard form field.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `12px 14px`, rounded `{rounded.md}` 8px (slightly softer than buttons for input approachability), 1px `{colors.hairline-strong}` border.
- Focus: border swaps to `{colors.accent}` (gold — one of the rare places accent color signals focus rather than hover).

**`newsletter-signup`** — footer newsletter inline row.
- Layout: `text-input` (flex) + `button-primary` "Subscribe". Matched height 48px.

### Navigation

**`nav-bar`** — top nav.
- Background transparent over hero; `{colors.canvas-dark}` (`#1A1A1A`) with `{colors.on-ink}` text when scrolled past 80px. Padding `{spacing.lg} {spacing.xl}`. Height 64px desktop, 56px mobile.
- Left: Drift wordmark (SVG, 20px height). Middle: nav (Cameras / Accessories / About / Support). Right: search icon + cart icon + region selector (UK / US flag).

**`region-toggle`** — UK / US region switcher.
- Compact flag+label chip in nav-right. Toggles between `driftinnovation.com` (£, UK) and `us.driftinnovation.com` ($, US). This is one of Drift's structural signals — the brand explicitly serves both markets from separate mirrors.

### Pills, Tags, and Chips

**`chip-eyebrow`** — section eyebrow ("FEATURED PRODUCTS", "MOUNTS & ACCESSORIES").
- Background transparent, text `{colors.ink-mute}`, type `{typography.eyebrow}` (11px all-caps 1.6px tracking).

**`chip-in-stock`** — availability indicator on cards.
- Background transparent (no fill), text `{colors.status-in-stock}` (`#0a7a3b`), type `{typography.caption}`. A small circle-dot glyph 6px prefixes the label.

**`chip-preorder`** — the rare pre-order indicator on X5 Mini or similar upcoming SKU.
- Background transparent, text `{colors.status-preorder}` (`#c47f00`), type `{typography.caption}`. Small circle-dot glyph 6px.

### Signature Components

**Motorcycle-POV Full-Bleed Hero** — the visual identity anchor.
- Full-bleed 100vh (85vh on mobile), background: rider-first-person-view photograph (gloved hand on throttle, dashboard, horizon, road). The image is dark-graded so overlay text reads at high contrast.
- Overlay: eyebrow (`chip-eyebrow` "CAPTURE") → hero headline `{typography.display-xxl}` "Capture Your Journey" → subhead `{typography.body-lg}` "Craft innovative, user-centric action cameras and evolve into AI-powered intelligent companions for life and adventure" → single `button-primary` "Shop now".
- Position: bottom-left third of the viewport (not centered) — evokes cinematography lower-third framing rather than symmetric composition.

**Featured Products 4-Grid with Gold Top-Border** — the primary flagship-line surface.
- 4-up row of `card-featured-product` on `{colors.canvas-soft}` band.
- Section eyebrow: "FEATURED PRODUCTS" (11px ALL-CAPS 1.6px tracking).
- Section title: "The Ghost Family." (`{typography.display-lg}`, 40px, terminal period).
- Each card carries the 2px gold top border as the unifying accent — the four cards visually read as a coordinated family.

**5-Slot Vertical Product-Longform Banner Stack** — the brand's most distinctive structural element.
- Immediately below the Featured Products grid, five stacked `banner-product-strip` blocks in canonical order: **Ghost XL → Ghost XL Pro → X3 → X5 → X5 Mini**.
- Each strip alternates canvas / canvas-warm background, and alternates photo-left / photo-right layout — the reader's eye zig-zags down the page.
- Each strip separated by a 1px `{colors.hairline-gold}` divider — the gold thread that unifies the product family narrative.
- Individual strips are 480–560px tall so the entire stack is ~2500px of vertical scroll — deliberately long, evoking a print-magazine product feature.
- On mobile, each strip collapses to a stacked layout: hero image on top, editorial text below, "Shop now" CTA at the bottom.

**AI-Companion Mission Callout** — the strategic-pivot signal.
- A dedicated `card-mission-block` on `{colors.accent-soft}` background near the middle of the page.
- Content: eyebrow "OUR MISSION" → display headline "**Beyond the action camera.**" → body copy explaining the transition from consumer POV cameras to AI-powered intelligent companions for adventure, remote support, and industrial inspection.
- The block is the ONE place gold-soft appears as a filled section — its rarity underscores that the mission pivot is the brand's most important message.

**Region-Toggle UK/US Split** — the market-specific commerce infrastructure.
- Nav-right chip toggles the entire site between `driftinnovation.com` (£, UK — "Capture Your Journey") and `us.driftinnovation.com` ($, US — "Your Journey. Your Story"). Hero copy differs subtly between mirrors.
- On mobile, the region chip lives in the hamburger-nav header. On page load, the site auto-detects locale and defaults to the correct mirror.

**Gold Hairline Unifier** — the single 1px accent that carries the brand consistency.
- 1px `{colors.hairline-gold}` (`#B8912C`) horizontal line between vertical banner strips, and 2px `{colors.accent}` top border on `card-featured-product`. These are the ONLY places gold appears as a line/border (never as a filled band).
- The gold hairline is the invisible thread that says "these five products are one family."

**Preorder / Availability Indicator Row** — the small trust-signal chip beneath price.
- `chip-in-stock` (green dot + "In Stock") or `chip-preorder` (amber dot + "Preorder — ships March") beneath the price on every product card.
- Never as a filled badge — always as a subtle circle-dot-plus-text pair. Boutique commerce restraint.

## Do's and Don'ts

### Do
- Reserve gold (`{colors.accent}`) for: CTA hover swap, 2px card-top border on `card-featured-product`, 1px hairline between vertical banner strips, rare inline emphasis. Never a filled section background except the once-per-page mission callout.
- Use motorcycle-POV or rider-cockpit photography for the hero. Never a multi-sport action collage (that is GoPro's territory).
- Alternate photo-left / photo-right on the 5-slot vertical banner strips. The zig-zag rhythm is the reading experience.
- Include the AI-companion mission callout on the home page. The brand-pivot signal must not be buried.
- Use single-CTA discipline on cards. One "Shop now" per card — no dual-CTA.
- Show £-sterling pricing on the UK site with two-decimal precision ("£299.00").
- Keep display weight at 400–500, never 700+. British restraint is the voice.
- Include the region-toggle in the nav for UK/US switching. The dual-mirror infrastructure is a brand signal.

### Don't
- Don't use consumer-yellow (`#F2C94C`) or any bright gold. Drift Gold `#B8912C` is warm-brass, not retail-yellow.
- Don't render the hero with multiple sports. One rider, one road.
- Don't add dual-CTA ("Learn more + Buy now"). Single "Shop now" is the pattern.
- Don't shout in extra-bold display (700+). Weight 500 is the ceiling.
- Don't remove the 2px gold top border from `card-featured-product` — the accent bar is the brand's product-family unifier.
- Don't collapse the 5-slot vertical banner stack to a grid on desktop. Vertical zig-zag is the pattern; grid destroys the rhythm.
- Don't use bright red for sale badges. Drift doesn't have prominent sale flows — the boutique brand rarely discounts.
- Don't reference GoPro / Hero / Session naming — Drift's product family is Ghost / X series and the brand voice must feel independent of the category leader.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | 1280px container, full 84px hero, 4-up Featured Products, 5-slot banner stack with 50/50 layout |
| Desktop | 1024–1440px | 1120px container, 72px hero, 4-up Featured Products, 5-slot banner alternating layout |
| Tablet | 768–1023px | Hero drops to 56px, Featured Products 2-up, banner strips collapse to stacked layout (image top, text bottom) |
| Mobile | < 768px | Hero drops to 40–44px, Featured Products 1-up, banner strips fully stacked with 1-column layout |

### Touch Targets
- Buttons hit ≥ 44×44px on mobile via padding scaling.
- Region-toggle chip is 40×40px minimum.
- Cart icon is 44×44px in the nav.

### Collapsing Strategy
- Display stair-steps 84 → 72 → 56 → 40px through breakpoints.
- Featured Products 4-up → 2-up → 1-up.
- 5-slot vertical banner strips maintain their vertical order at all breakpoints; only the internal 50/50 split collapses to stacked (image top, text below) on tablet and below.
- Accessories row 4-up → 3-up → 2-up → horizontal-swipe on mobile.
- Gold hairline divider maintains 1px at all breakpoints — the brand thread.

### Image Behavior
Motorcycle-POV hero uses `srcset` with mobile crops that recompose to keep the throttle-hand and horizon in frame. Product renders use transparent-background PNGs so they can be recolored/re-backgrounded across the site. UGC-style rider imagery uses lazy-load with LQIP blur-up.

## Iteration Guide

1. Focus on ONE component at a time; the **5-slot vertical banner stack** and the **gold-hairline unifier** are the two highest-signal signature elements — get them right first.
2. Reference tokens directly (`{colors.accent}`, `{typography.display-editorial}`, `{rounded.none}`).
3. When adding a new product to the Ghost/X family, first decide which of the 5 vertical banner slots it displaces (or slot it at the bottom below X5 Mini). Never expand to a 6-slot stack.
4. Keep gold rare. If you need voltage, use warmer canvas or heavier photography grade. Never dilute the gold.
5. Body copy defaults to `{typography.body-md}` 15px. Buttons use `{typography.button-md}` ALL-CAPS 13px with 1.0px tracking.
6. When in doubt about tone, ask: "does this feel like a British motorcycle-workshop catalog, or does it feel like an American action-camera retailer?" Drift is the British workshop. If it drifts American, add restraint.
7. The AI-companion mission callout is inviolate. Even if internal marketing pushes for a "consumer only" message on the home page, keep the pivot line — it is the brand's strategic differentiation from GoPro.
8. £-sterling pricing on UK site, $-USD on US mirror. Never mix currencies on a single page.
