---
version: alpha
name: GoPro-Inspired-design-analysis
description: An inspired interpretation of GoPro — the category-defining action-camera brand whose visual system reads as an aggressive commerce-editorial hybrid. The design language is anchored on a stark high-contrast palette (near-black `#000000` primary + GoPro yellow `#F2C94C` as the single voltage + pure white canvas), oversized ultra-bold all-caps display typography ("360 MAX'D" / "MISSION SERIES" — set in Neue Haas Grotesk Extra Bold or a close proxy at 96–128px), and a product-first hero with prominent price + dual CTA ("了解更多" / "立即购买") that make the site behave as a commerce landing surface rather than a brand page. The signature structural moves are the **three-camera hero stack** (MAX2 / MISSION 1 / HERO13 BLACK — each with independent title/subtitle/price/dual-CTA), a **by-activity 十宫格 purchase grid** (Diving / Surf / MTB / Motor / Ski / Snowboard / Vlog / Travel / Fitness / Kids) that solves the "which camera for which sport" question, the **GoPro Awards community loop** that closes long-scroll pages with UGC (user-generated content) galleries, and the **subscription (GoPro Subscription) + Quik App** ecosystem row that hard-sells recurring revenue. Every marketing section is high-density, high-contrast, and unambiguously commerce-driven — GoPro is not selling atmosphere, it is selling cameras and subscriptions.

> Source: raw observation + category inference (2026-07-13). Palette (black/yellow/white), hero structure (MAX2 + MISSION 1 + HERO13 three-camera stack), by-activity purchase grid, and Quik App / GoPro Awards / Subscription structural blocks all directly observed on `gopro.com/zh/cn/`. Fine-grained tokens (spacing scale, elevation, hairline strokes, spec-badge typography, subscription-band styling) are inferred from GoPro product-page conventions and action-camera-category commerce norms.

colors:
  primary: "#000000"
  primary-hover: "#1c1c1c"
  primary-press: "#2a2a2a"
  accent: "#F2C94C"
  accent-deep: "#d9a921"
  accent-press: "#a17f15"
  accent-soft: "#fff3c4"
  ink: "#0a0a0a"
  ink-secondary: "#1c1c1c"
  ink-mute: "#5a5a5a"
  ink-mute-2: "#8a8a8a"
  on-ink: "#ffffff"
  on-accent: "#0a0a0a"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  canvas-black: "#000000"
  canvas-dark-lift: "#141414"
  hairline: "#e8e8e8"
  hairline-strong: "#cccccc"
  price-strike: "#8a8a8a"
  status-sale: "#e50914"
  status-ok: "#0a7a3b"

typography:
  display-mega:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk', 'Inter Display', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 128px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -4.0px
    textTransform: uppercase
  display-xxl:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 96px
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -2.8px
    textTransform: uppercase
  display-xl:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -1.8px
    textTransform: uppercase
  display-lg:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter Display', system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.8px
    textTransform: uppercase
  heading-lg:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading-md:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0.4px
    textTransform: uppercase
  body-lg:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  price-hero:
    fontFamily: "'Neue Haas Grotesk Display Pro', 'Inter', system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.6px
    fontFeature: tnum
  price-md:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
    fontFeature: tnum
  price-strike:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0
    textDecoration: line-through
    fontFeature: tnum
  eyebrow:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 1.8px
    textTransform: uppercase
  button-md:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 1.2px
    textTransform: uppercase
  activity-label:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.8px
    textTransform: uppercase
  caption:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

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
  lg: 16px
  pill: 9999px

elevation:
  0: "none"
  1: "0 2px 8px rgba(0,0,0,0.06)"
  2: "0 8px 24px rgba(0,0,0,0.10)"
  3: "0 24px 60px rgba(0,0,0,0.18)"
  hover-lift: "0 12px 32px rgba(0,0,0,0.12)"

animations:
  cta-press:
    duration: 100ms
    easing: cubic-bezier(0.4, 0, 0.6, 1)
  card-hover-lift:
    duration: 200ms
    easing: cubic-bezier(0.2, 0, 0, 1)
  activity-tile-fade:
    duration: 240ms
    easing: cubic-bezier(0.16, 1, 0.3, 1)

components:
  button-primary:
    background: "{colors.primary}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 28px
    hoverBackground: "{colors.accent}"
    hoverTextColor: "{colors.on-accent}"
  button-secondary:
    background: "transparent"
    textColor: "{colors.ink}"
    border: "1.5px solid {colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 28px
  button-accent:
    background: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 28px
  hero-camera-stack-card:
    background: "{colors.canvas}"
    padding: 32px
    rounded: "{rounded.none}"
    borderTop: "4px solid {colors.primary}"
  card-activity-tile:
    background: "{colors.canvas-soft}"
    padding: 0
    rounded: "{rounded.sm}"
    aspect: "1/1"
---

## Overview

GoPro's site is not a brand story — it is a **camera store dressed as a manifesto**. The design language optimizes ruthlessly for two outcomes: getting shoppers to the correct camera SKU (MAX2 / MISSION 1 / HERO13 Black), and converting them to the recurring GoPro Subscription. Every visual decision serves those goals.

The canvas is `{colors.canvas}` (`#ffffff`) with high-density content bands. Text is near-black `{colors.ink}` (`#0a0a0a`). Voltage comes from a single accent — **GoPro Yellow** `{colors.accent}` (`#F2C94C`), used on hover swaps of primary CTAs, on inline emphasis of key claims ("**8K** 360 video"), on the price-highlight tag, and as a rare filled-band background for subscription upsells. Yellow is never a body-text color and never a section background outside of two specific components (GoPro Subscription band, GoPro Awards submission CTA).

Display typography is aggressive: **Neue Haas Grotesk Display Pro Extra Bold** (or Inter Display 800 as fallback) at 64–128px, ALL-CAPS, negative tracking, terminated in dramatic punctuation ("360 MAX'D" — apostrophe intentional, "MISSION SERIES." — period intentional). The hero doesn't whisper; it shouts spec claims. This is the opposite of Antigravity's poetic hush.

The hero itself is a **three-camera stack** — MAX2 (new 360 flagship) / MISSION 1 (upcoming cinema-grade 2026) / HERO13 Black (evergreen mainstay). Each card carries: product hero shot on light studio floor, ALL-CAPS product name, one-line subhead, prominent price (`{typography.price-hero}` 36px), and **dual CTA** — `button-secondary` "了解更多" beside `button-primary` "立即购买". The two-CTA discipline is a GoPro signature: never make users choose between "read more" and "buy."

Below the fold, the site follows a rigid commerce rhythm:
1. **原创运动摄像机 brand-claim band** — a full-width monochrome statement about GoPro's category leadership.
2. **GoPro Subscription upsell** — full-bleed yellow band, recurring-revenue hard-pitch.
3. **配件 (Accessories) horizontal grid** — mounts, filters, chargers, cases.
4. **Quik App download band** — the software ecosystem.
5. **十宫格 by-activity purchase grid** — the most-copied structural pattern in the category (Diving / Surf / MTB / Motor / Ski / Snowboard / Vlog / Travel / Fitness / Kids).
6. **GoPro Awards UGC band** — the community proof loop that lets buyers imagine themselves in the community.
7. **News / Editorial** — content marketing.

**Key Characteristics:**
- **Yellow-on-hover CTA swap.** Primary CTA rests black; on hover, background swaps to `{colors.accent}` (`#F2C94C`) with text swapping to `{colors.on-accent}` (near-black). This single moment is where yellow enters a filled state.
- **All-caps display typography, extra-bold weight.** No sentence-case display heads on the marketing surface. GoPro shouts.
- **Three-camera hero stack, always.** Never a single-product hero — the site shows the entire flagship lineup at the top so users self-select.
- **Prominent price + dual CTA per card.** Every product card carries price. Even in the hero. Commerce is not hidden behind "explore."
- **Zero border radius on buttons and hero cards.** `{rounded.none}`. The brand's industrial-action-camera edge; pills would soften the tone into consumer-lifestyle.
- **By-activity 十宫格 as category navigation.** The 10-tile activity grid replaces a traditional PLP filter — users click "Diving" and land on a curated pre-filtered list.
- **UGC as social proof engine.** GoPro Awards submissions are the community loop; every home page closes with a UGC gallery.
- **Recurring-revenue voltage.** The GoPro Subscription band is the ONE place where yellow fills a full section — it is the highest-margin product in the catalog and deserves the strongest voltage.

## Colors

> **Source pages:** `gopro.com/zh/cn/` (home), `/shop/cameras/buy/max2` (product page), `/subscription` (subscription upsell), `/awards` (UGC gallery).

### Brand & Accent
- **Primary** (`{colors.primary}` — `#000000`): Every primary CTA resting state, display type on light bg, wordmark logo. Solid black.
- **Primary Hover** (`{colors.primary-hover}` — `#1c1c1c`): Legacy hover (rarely used — most CTAs swap to yellow on hover instead).
- **Primary Press** (`{colors.primary-press}` — `#2a2a2a`): Pressed state.
- **Accent (GoPro Yellow)** (`{colors.accent}` — `#F2C94C`): The brand's single voltage. Uses:
  - CTA hover state (background swap from black → yellow, text from white → near-black).
  - Filled band background: GoPro Subscription upsell, GoPro Awards submission CTA band. Two places on the entire site.
  - Inline emphasis in body copy (bold key claims: **"8K"**, **"节省 30%"**).
  - Price-savings highlight tag on discounted SKUs.
- **Accent Deep** (`{colors.accent-deep}` — `#d9a921`): Pressed state on yellow-filled buttons.
- **Accent Press** (`{colors.accent-press}` — `#a17f15`): Deep-press on yellow bands.
- **Accent Soft** (`{colors.accent-soft}` — `#fff3c4`): Rare subscription-callout tint background (used ≤ once per page outside the subscription band).

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background. ~85% of the surface is white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f7f7`): Alternator between two consecutive white bands; background for the by-activity 十宫格 tiles.
- **Canvas Black** (`{colors.canvas-black}` — `#000000`): The rare full-bleed dark band — used for the GoPro Awards UGC gallery and one immersive video block.
- **Canvas Dark Lift** (`{colors.canvas-dark-lift}` — `#141414`): Slight elevation on the dark band for stacked components.
- **Hairline** (`{colors.hairline}` — `#e8e8e8`): 1px card separator, product-card top-border.
- **Hairline Strong** (`{colors.hairline-strong}` — `#cccccc`): Stronger dividers.
- **Price Strike** (`{colors.price-strike}` — `#8a8a8a`): Struck-through original-price grey.

### Text
- **Ink** (`{colors.ink}` — `#0a0a0a`): Default body color.
- **Ink Secondary** (`{colors.ink-secondary}` — `#1c1c1c`): Sub-heading.
- **Ink Mute** (`{colors.ink-mute}` — `#5a5a5a`): Helper copy, spec captions.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#8a8a8a`): Fine metadata, sale-badge sub-text.
- **On Ink / On Accent**: `#ffffff` on black; `#0a0a0a` on yellow.

### Semantic
- **Status Sale** (`{colors.status-sale}` — `#e50914`): Red-only sale badges ("限时优惠", "SAVE ¥500") — appears on discounted product cards, not on hero. Yellow is reserved for hover/subscription; red owns discount.
- **Status OK** (`{colors.status-ok}` — `#0a7a3b`): "现货" (in stock) confirmations in the buy flow.

## Typography

### Font Family

GoPro's display face is **Neue Haas Grotesk Display Pro** (Commercial Type) at **Extra Bold (800)**. The face is unusually condensed at the extra-bold weight — its aperture and rhythm are perfect for GoPro's all-caps aggressive claims. When Neue Haas Grotesk is unavailable, **Inter Display** at weight 800 with `letter-spacing: -2.8px` at 96px is the closest open-source approximation. Body text uses **Inter** at 400/600. Chinese fallback: **PingFang SC** at matching weights.

The signature typographic move is the **oversized all-caps display statement with punctuation** — "360 MAX'D" (apostrophe as visual anchor), "MISSION SERIES." (terminal period), "IT'S TIME." Every hero-level statement is UPPERCASE, weight 800, tightly tracked. The punctuation is never a typo — it is the type's rhythm-marker.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 128px | 800 | 0.95 | -4.0px | Wide-viewport hero headline ("360 MAX'D") |
| `{typography.display-xxl}` | 96px | 800 | 0.98 | -2.8px | Default hero headline |
| `{typography.display-xl}` | 64px | 800 | 1.02 | -1.8px | Section opener ("BUY BY ACTIVITY", "GOPRO AWARDS") |
| `{typography.display-lg}` | 44px | 700 | 1.1 | -0.8px | Feature-band title |
| `{typography.heading-lg}` | 28px | 700 | 1.2 | -0.4px | Camera-card title (MAX2 / MISSION 1 / HERO13 BLACK) |
| `{typography.heading-md}` | 22px | 600 | 1.3 | -0.2px | Sub-heading |
| `{typography.heading-sm}` | 16px | 600 | 1.35 | 0.4px | ALL-CAPS section eyebrow (larger than the standard 12px) |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Marketing body lead |
| `{typography.body-md}` | 15px | 400 | 1.55 | 0 | Default body, product-card description |
| `{typography.price-hero}` | 36px | 700 | 1.0 | -0.6px | Camera-card hero price ("¥3,998.00") |
| `{typography.price-md}` | 20px | 700 | 1.1 | 0 | Accessory-card price |
| `{typography.price-strike}` | 15px | 400 | 1.1 | 0 | Struck-through original price |
| `{typography.eyebrow}` | 12px | 600 | 1.2 | 1.8px | ALL-CAPS eyebrow ("NEW ARRIVAL") |
| `{typography.button-md}` | 14px | 700 | 1.0 | 1.2px | ALL-CAPS button label — the extra tracking is signature |
| `{typography.activity-label}` | 13px | 600 | 1.2 | 0.8px | ALL-CAPS activity-tile label (DIVING / SURF / MTB…) |
| `{typography.caption}` | 13px | 400 | 1.45 | 0 | Photo credit, spec caption |
| `{typography.micro}` | 11px | 400 | 1.4 | 0 | Legal fine print |

### Principles
- **Extra-bold or nothing on display.** Weight 700 minimum for any headline ≥ 44px. Weight 400 display reads as consumer-lifestyle and off-brand.
- **All-caps for every marketing display.** Sentence-case is reserved for body copy and support articles.
- **Terminal punctuation is intentional.** "360 MAX'D" apostrophe, "MISSION SERIES." period. Never remove.
- **Button labels use letter-spacing 1.2px.** The tracking on ALL-CAPS buttons is what separates GoPro from generic Shopify sites.
- **`tnum` on every price and spec.** ¥3,998.00 / 8K / 5.3K / 60fps — tabular figures for alignment across cards.

### Note on Font Substitutes
Neue Haas Grotesk is Commercial Type paid-license. Open-source substitution:
- Display → **Inter Display** at 800 with `letter-spacing: -2.8px` at 96px.
- Body → **Inter** at 400/600.
- Chinese → **PingFang SC** (Apple system) or **Noto Sans SC** (Google Fonts) at matching weights.
- If forced to a totally free stack: **Bebas Neue** for display (condensed all-caps, weight 700) + **Inter** for body. Bebas is heavier-condensed than Neue Haas but preserves the aggressive-commerce voice.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px · `{spacing.huge}` 72px · `{spacing.giant}` 112px.
- **Section padding**: 72–112px vertical. Tighter than Antigravity's 240px cinema sections — GoPro's density-per-viewport is deliberately higher because the site is a commerce surface, not a museum.
- **Card internal padding**: 32px on `hero-camera-stack-card`; 24px on accessory cards; 0px on activity tiles (fully image-based).

### Grid & Container
- 12-column grid, **1400px content max-width** on wide, 1200px default, 24px gutters.
- Hero three-camera stack is 3-up on desktop, 3-up scrollable-with-snap on tablet, 1-up stacked on mobile.
- By-activity 十宫格: 5-across × 2-rows on desktop (10 tiles), 3×3+1 on tablet, 2×5 on mobile.
- Accessory grid: 4-up on desktop, 3-up on tablet, 2-up on mobile.
- UGC gallery: masonry, 4-up on wide, 3-up on desktop, 2-up on tablet, 1-up on mobile.

### Whitespace Philosophy
GoPro's whitespace is commerce-tight: enough to let each product card breathe, not so much that shoppers scroll past a purchase moment. Vertical section padding stays in the 72–112px band; card internal padding stays in 24–32px. The site respects that a shopper's attention span is shorter than a brand-page reader's.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface |
| 1 | `{elevation.1}` (0 2px 8px) | Product-card resting lift |
| 2 | `{elevation.2}` (0 8px 24px) | Card-hover lift |
| 3 | `{elevation.3}` (0 24px 60px) | Modal, subscription upsell floating card |
| hover-lift | `{elevation.hover-lift}` (0 12px 32px) | Activity-tile and camera-card hover |

### Decorative Depth
GoPro's depth carrier is **product-render photography with subtle drop-shadow baked into the PNG** — the camera products always appear to sit on an invisible studio floor with a soft rim-light. CSS shadows are quiet; imagery does the work.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | **All buttons.** Hero camera-stack cards. Full-bleed video, main banner |
| `{rounded.xs}` | 2px | Fine spec chip |
| `{rounded.sm}` | 4px | Activity tiles (10-grid), accessory cards |
| `{rounded.md}` | 8px | Video thumbnail chrome, form inputs |
| `{rounded.lg}` | 16px | Rare subscription-upsell floating card |
| `{rounded.pill}` | 9999px | Filter chip in the buy-flow only (not on marketing surface) |

### Photography Geometry
GoPro's photography is **action-in-motion**: cameras strapped to helmets, surfing shots, dashboard-mounted motorbike POV, aerial drone footage from underneath. All hero imagery is 16:9 or 21:9 full-bleed with zero border radius. Product-hero shots (MAX2, HERO13 Black) are studio isolates rendered on `{colors.canvas-soft}` with baked-in soft shadow. UGC gallery preserves original aspect ratios (portrait phone footage, landscape drone footage) — variety is the message.

## Components

### Buttons

**`button-primary`** — the dominant "立即购买" / "Buy Now" CTA.
- Background `{colors.primary}` (`#000000`), text `{colors.on-ink}` (`#ffffff`), type `{typography.button-md}` (ALL-CAPS 14px weight 700 tracking 1.2px), padding `14px 28px`, rounded `{rounded.none}` (square).
- **Hover state — the GoPro signature moment**: background swaps to `{colors.accent}` (`#F2C94C`), text swaps to `{colors.on-accent}` (`#0a0a0a`). Transition 100ms.
- Pressed: `{colors.accent-deep}` background.

**`button-secondary`** — the "了解更多" outline alternative.
- Background transparent, text `{colors.ink}`, **1.5px** solid `{colors.ink}` border (heavier than the 1px standard elsewhere — GoPro amps the border weight), same square geometry.
- Hover: fill inverts to `{colors.ink}` background + `{colors.on-ink}` text. Yellow is reserved for primary hover only.

**`button-accent`** — the yellow-filled subscription-upsell CTA.
- Background `{colors.accent}`, text `{colors.on-accent}`, same square geometry. Used ONLY in the GoPro Subscription band and the GoPro Awards submission CTA.
- Hover: background darkens to `{colors.accent-deep}`.

**`button-on-dark`** — CTA on `{colors.canvas-black}` bands (UGC gallery, video blocks).
- Background `{colors.canvas}` (white), text `{colors.ink}`, square. Hover: swap to yellow.

### Cards & Containers

**`hero-camera-stack-card`** — the three flagship-camera cards below the top banner (MAX2 / MISSION 1 / HERO13 BLACK).
- Background `{colors.canvas}`, padding 32px, rounded `{rounded.none}` (square), 4px `{colors.primary}` top border (signature detail — the black bar identifies these as flagship cards).
- Structure: eyebrow ("NEW" / "COMING 2026" / "BEST SELLER") → product hero shot (1:1 studio isolate) → ALL-CAPS product name (`{typography.heading-lg}`) → one-line spec subhead (`{typography.body-md}`) → price row (`price-hero` + optional `price-strike`) → dual CTA row (`button-secondary` "了解更多" + `button-primary` "立即购买").

**`card-accessory`** — mount, filter, charger, case product cards.
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, padding 20px, rounded `{rounded.sm}` 4px.
- Structure: product image (1:1 on `{colors.canvas-soft}` inner tile), product name (`{typography.heading-md}`), one-line description (`{typography.body-md}`), price (`{typography.price-md}`), single CTA "加入购物车".
- Hover: `{elevation.hover-lift}` + image scales 1.03.

**`card-activity-tile`** — the by-activity 十宫格 tile (Diving / Surf / MTB / Motor / Ski / Snowboard / Vlog / Travel / Fitness / Kids).
- Background: **full-bleed action photograph** (photographer strapped to helmet, POV shot). No padding. Rounded `{rounded.sm}` 4px.
- Overlay: bottom-left `{typography.activity-label}` in white with a subtle `linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)` bottom fade for legibility.
- Aspect ratio locked to 1:1 for grid consistency.
- Hover: bright activity label + subtle 1.04 scale + 240ms brightness lift (`{animations.activity-tile-fade}`).

**`card-subscription-upsell`** — the GoPro Subscription hard-pitch card (typically inside the yellow band).
- Background `{colors.canvas}` on the yellow band (contrasts with `{colors.accent}` surroundings), padding 32px, rounded `{rounded.lg}` 16px (the rare rounded card — subscription is the ONE moment softer geometry is allowed).
- Structure: subscription-tier name, price/mo, 4-bullet benefit list (unlimited cloud / auto highlight reels / no-questions-asked replacement / exclusive discounts), single primary CTA "立即订阅".

**`card-ugc-gallery`** — GoPro Awards UGC (user-generated content) card.
- Background transparent, rounded `{rounded.sm}` 4px, aspect-ratio preserved from original photo.
- Overlay on hover: creator handle (@name) + activity tag + camera model used, in `{typography.caption}` white on `rgba(0,0,0,0.6)` bottom band.

### Inputs & Forms

**`text-input`** — standard form field (email signup, checkout).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `14px 16px`, rounded `{rounded.md}` 8px (slightly softer than buttons — inputs are less confrontational), 1px `{colors.hairline-strong}` border.
- Focus: border swaps to `{colors.ink}` and 2px shadow ring `{colors.accent-soft}` outside.

**`newsletter-signup-bar`** — the "订阅 GoPro 资讯" inline row.
- Row layout: `text-input` (flex-1) + `button-primary` "订阅". Height matched at 48px.

### Navigation

**`nav-bar`** — top nav.
- Background `{colors.canvas}` at rest; solid white with subtle bottom hairline when scrolled. Height 64px desktop, 56px mobile.
- Left: GoPro wordmark logo (SVG, 22px height, near-black). Middle: category nav (相机 / 配件 / 订阅 / Awards / 支持). Right: 搜索 / 购物车 / 账户 icons.

**`shop-by-activity-nav`** — dropdown from top nav.
- Reveals a 10-column mini-grid of activity thumbnails (mini versions of the 十宫格 tiles) — users can jump to a curated per-sport landing page from anywhere.

### Pills, Tags, and Chips

**`chip-eyebrow`** — section eyebrow.
- Background transparent, text `{colors.ink-mute}`, type `{typography.eyebrow}` (12px all-caps 1.8px tracking).

**`chip-tag-new`** — the "NEW" flag on cards.
- Background `{colors.accent}` (yellow), text `{colors.on-accent}` (near-black), type `{typography.micro}` all-caps weight 700, padding `2px 8px`, rounded `{rounded.none}` (square).
- Positioned top-left corner of the product card, sitting flush against the top edge (bleeds into the border-radius).

**`chip-sale-savings`** — the discount-savings tag.
- Background `{colors.status-sale}` (`#e50914`), text `{colors.on-ink}` white, same geometry as `chip-tag-new`. Reads "省 ¥500" or "SAVE 20%".

**`chip-mission-series`** — the "MISSION SERIES" curated-line badge.
- Background `{colors.canvas-black}`, text `{colors.on-ink}` white, ALL-CAPS `{typography.activity-label}`, padding `4px 10px`, rounded `{rounded.none}`. Marks HERO cameras or 360 models that are part of the cinema-grade MISSION SERIES sub-line.

### Signature Components

**Three-Camera Hero Stack** — the brand's most-recognizable structural element.
- 3-up row of `hero-camera-stack-card` cards below a top-banner (top-banner rotates: seasonal campaign, MISSION SERIES teaser, sale event).
- Slots are fixed to the three canonical flagships: **MAX2** (360 category leader) / **MISSION 1** (cinema-grade series, coming 2026) / **HERO13 BLACK** (mainstream evergreen).
- Each card carries the identical structure (eyebrow → product shot → name → subhead → price → dual CTA) so users can side-by-side compare in a single glance.
- On mobile, cards stack vertically full-width with a subtle progress-dot indicator for the currently-viewed card.

**By-Activity 十宫格 Purchase Grid** — the category's most-imitated pattern.
- 10-tile grid organized 5-across × 2-rows: **Diving / Surf / MTB (山地车) / Motor (摩托) / Ski (滑雪) / Snowboard / Vlog / Travel / Fitness / Kids**.
- Each tile is a `card-activity-tile` (full-bleed POV action photo + white ALL-CAPS label bottom-left).
- Section eyebrow: "SHOP BY ACTIVITY" (`{typography.heading-sm}` ALL-CAPS 16px). Section title: "按活动购买" (`{typography.display-xl}` 64px ALL-CAPS).
- Click a tile → jump to a curated per-sport landing page with pre-filtered camera + accessory bundle recommendations.
- This grid is the alternative to a traditional PLP filter — GoPro trusts that users know their sport better than they know spec sheets.

**GoPro Subscription Yellow Band** — the recurring-revenue voltage moment.
- Full-bleed section on `{colors.accent}` (`#F2C94C`), 112px vertical padding.
- Content: 2-column layout — left = ALL-CAPS display headline "SUBSCRIBE. SAVE." (`{typography.display-xxl}` 96px in `{colors.ink}`) + subhead body copy; right = `card-subscription-upsell` floating card with pricing.
- The single section on the entire site where yellow is a filled background. Its rarity makes it work.

**MISSION SERIES Chip + Section Callout** — the sub-line branding for cinema-grade cameras.
- Every MISSION SERIES product card carries the `chip-mission-series` black badge in the top-left corner.
- A dedicated section titled "THE MISSION SERIES." (with terminal period) appears mid-scroll, describing the sub-line's positioning. Uses `{colors.canvas-black}` band with white type.

**GoPro Awards UGC Gallery** — the community-proof closer.
- Full-bleed band on `{colors.canvas-black}` (black), 72px vertical padding. Section title in white `{typography.display-xl}` "GOPRO AWARDS." (terminal period). Subhead: "You shoot. We reward."
- Masonry 4-up grid of `card-ugc-gallery` tiles. Each card: aerial/action photo + hover reveals creator handle, sport tag, camera-model used.
- Bottom CTA: `button-accent` (yellow-filled) "SUBMIT YOUR SHOT". This is the second-and-final full-yellow moment on the page.

**Quik App Download Band** — the software-ecosystem push.
- Full-bleed on `{colors.canvas-soft}`. Left: phone-frame mockup showing Quik's auto-edit feature with a highlight reel preview; right: `{typography.display-lg}` "EDIT ON THE GO" (ALL-CAPS) + body copy + dual store-download buttons (App Store / Google Play as their brand-official SVGs).

**Dual-CTA Discipline** — the two-button pattern on every product card.
- Every camera and every accessory card in the hero-and-below-fold surfaces carries **exactly two CTAs side by side**: `button-secondary` "了解更多" (learn) + `button-primary` "立即购买" (buy). Never one, never three.
- The rule holds even in the hero. GoPro trusts that a shopper knows which button they want.

**High-Density Price Row** — the multi-price-line pattern under each product.
- Format: `{typography.price-hero}` 36px current price + optional `{typography.price-strike}` original price + optional `chip-sale-savings` "省 ¥500" red flag.
- All three elements sit on a single row with `{spacing.md}` 12px gap. If a product isn't on sale, the strike-price and chip are omitted — never left as empty placeholders.

## Do's and Don'ts

### Do
- Use ALL-CAPS on every marketing display headline. Never sentence-case display type.
- Terminate hero-level statements with dramatic punctuation ("360 MAX'D" / "MISSION SERIES.").
- Show three flagship cameras in the hero stack (MAX2 / MISSION 1 / HERO13 BLACK). Never one product only.
- Give every product card a prominent price and two CTAs ("了解更多" + "立即购买"). Never hide price.
- Reserve yellow (`{colors.accent}`) for: CTA hover swap, GoPro Subscription band, GoPro Awards submission CTA, inline body-copy emphasis. Two full-yellow sections per page maximum.
- Use square-cornered buttons (`{rounded.none}`). Pills read consumer-fitness-tech; squares read action-camera-industrial.
- Include the by-activity 十宫格 grid on the home page. It is the brand's most-imitated pattern and users expect it.
- Use extra-bold display weight (700–800) at 44px and above.

### Don't
- Don't run the entire page on yellow — the accent's power comes from its scarcity. Two full-yellow bands maximum.
- Don't use sentence-case on any display headline. Reserved for body copy only.
- Don't render buttons with rounded corners > 4px. Softer geometry breaks the aggressive-commerce voice.
- Don't hide price. Every card shows price at the hero level, never "start from" or "prices vary."
- Don't lead the hero with a single-product beauty shot — the three-camera stack is the pattern.
- Don't add a fourth camera to the flagship stack. Three is the discipline; adding a fourth dilutes the trilogy.
- Don't remove the terminal punctuation from display heads. "MISSION SERIES." with period is intentional.
- Don't animate the CTA hover swap slower than 120ms — the yellow flash must feel instantaneous.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | 1400px container, full 128px display-mega hero, 3-up camera stack, 5×2 activity grid |
| Desktop | 1024–1440px | 1200px container, 96px hero, 3-up stack, 5×2 activity grid |
| Tablet | 768–1023px | Hero drops to 64px, 3-up stack becomes horizontal snap-scroll, activity grid becomes 3×3+1 |
| Mobile | < 768px | Hero drops to 40–48px, camera stack stacks vertically full-width, activity grid becomes 2×5, dual-CTAs stack |

### Touch Targets
- Buttons hit ≥ 48×48px on mobile via padding scaling (larger than DJI's 44px because GoPro users are often wearing gloves).
- Activity tiles get full-tile tap zones.
- Cart-add "+" button on accessory cards has a 44px minimum tap area.

### Collapsing Strategy
- Display stair-steps 128 → 96 → 64 → 40px through breakpoints.
- Three-camera stack collapses 3-up → horizontal-snap-scroll → vertical stack.
- Activity grid collapses 5×2 → 3×3+1 → 2×5. Never 1-column — the grid geometry is part of the pattern.
- Dual-CTAs collapse from side-by-side to stacked full-width on mobile with 8px vertical gap.
- UGC masonry collapses 4-up → 3-up → 2-up → 1-up preserving individual aspect ratios.

### Image Behavior
Hero action-photography uses `srcset` with mobile crops that recompose to keep the action in the frame. Activity-tile photos use lazy-load with LQIP (low-quality image placeholder) blur-up. Product-hero renders always use transparent-background PNGs.

## Iteration Guide

1. Focus on ONE component at a time; the **three-camera hero stack** and the **by-activity 十宫格 grid** are the two highest-signal signature elements — get them right first.
2. Reference tokens directly (`{colors.accent}`, `{typography.display-mega}`, `{rounded.none}`).
3. When adding a new camera to the flagship line, first decide if it earns a slot in the three-camera hero (displacing MAX2, MISSION 1, or HERO13 BLACK) — never expand to a four-camera stack.
4. Keep yellow rare. If you need voltage, use bolder photography or heavier weight. Never dilute the yellow.
5. Body copy defaults to `{typography.body-md}` 15px. Buttons use `{typography.button-md}` ALL-CAPS 14px with 1.2px tracking.
6. When in doubt about tone, ask: "does this feel like a magazine ad for action sports, or does it feel like a museum piece?" GoPro is the magazine ad. If it drifts toward museum, add price back.
7. Every hero and every card must show price. If the SKU is not yet purchasable ("MISSION 1 — Coming 2026"), replace price with a "COMING SOON" chip in `{typography.eyebrow}` — but never leave the price slot blank.
8. The dual-CTA pattern is inviolate. Every product surface must offer both "了解" and "购买" side by side.
