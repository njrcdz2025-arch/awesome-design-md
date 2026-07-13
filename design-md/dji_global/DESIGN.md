---
version: alpha
name: DJI-Global-Inspired-design-analysis
description: An inspired interpretation of DJI (大疆创新) — the global consumer + prosumer + industry + agriculture drone/imaging leader. The design language is a product-portfolio brand system built on a neutral cool-gray canvas (#f5f5f5) with near-black display type and monochrome SVG small-caps product wordmarks (MAVIC / OSMO / RONIN / AVATA / MATRICE / AGRAS) as visual anchors. The hero is a full-viewport rotating carousel that auto-advances through 10+ flagship products; each slide couples a moody sky-or-landscape photograph, one Chinese poetic 4-character slogan ("天地为你所动"), and a subtle bilingual sub-line ("三摄旗舰影像航拍机"). Below the fold, a horizontally scrollable product-tab strip (人气单品 / 云台相机 / 全景相机 / 广角相机 / 手机云台 / 无线麦克风 / 视频会议 / 专业级产品) organizes the entire lineup, followed by category-card grids, a purchase-helper, an editorial 创新故事 news band, and — most distinctly — three sub-brand entrypoints (专业影像 pro.dji.com / 行业应用 enterprise.dji.com / 农业应用 ag.dji.com) that acknowledge DJI is not one brand but four. This DESIGN.md documents the consumer flagship (dji.com/cn) and inherits from the "portfolio-brand-with-sub-brand-gateway" pattern.

> Source: raw observation + category inference (2026-07-13). Palette (canvas/ink/CTA), hero-carousel structure, product-tab strip, and sub-brand gateway all directly observed on `dji.com/cn`. Fine-grained tokens (spacing scale, elevation, hairline, spec-line typography) are inferred from the observed structure using DJI's public product-page conventions (Mavic/Osmo product pages) and portfolio-brand best practice.

colors:
  primary: "#000000"
  primary-hover: "#1c1c1c"
  primary-press: "#2a2a2a"
  ink: "#0a0a0a"
  ink-secondary: "#2c2c2c"
  ink-mute: "#5a5a5a"
  ink-mute-2: "#8a8a8a"
  on-ink: "#ffffff"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  canvas-cool: "#eef0f2"
  canvas-slate: "#141414"
  canvas-photo-overlay: "rgba(0,0,0,0.35)"
  hairline: "#e5e5e7"
  hairline-strong: "#d0d0d3"
  accent-link: "#0068c9"
  accent-link-hover: "#004fa3"
  status-ok: "#0a7a3b"
  status-warn: "#c47f00"
  tag-new: "#d0021b"

typography:
  display-xxl:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', 'HarmonyOS Sans SC', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 88px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2.0px
  display-xl:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', 'HarmonyOS Sans SC', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -1.4px
  display-lg:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', 'HarmonyOS Sans SC', system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.8px
  display-poetic-cn:
    fontFamily: "'PingFang SC', 'Noto Serif SC', 'Source Han Serif SC', serif"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 8px
  wordmark-svg:
    role: "graphic-only"
    letterSpacing: 3.6px
    textTransform: uppercase
    fontWeight: 400
    note: "Product names (MAVIC / OSMO / RONIN / AVATA / MATRICE / AGRAS / OSMO POCKET) are rendered as inline SVG wordmarks with fine-hairline geometric strokes — NOT web font. Size 36–72px."
  heading-lg:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.4px
  heading-md:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-spec:
    fontFamily: "'DJI Sans Mono', 'JetBrains Mono', 'SF Mono', ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: tnum
  eyebrow:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.4px
    textTransform: uppercase
  tab-strip:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  button-md:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  micro:
    fontFamily: "'DJI Sans', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
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
  huge: 80px
  giant: 128px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  pill: 9999px

elevation:
  0: "none"
  1: "0 1px 3px rgba(0,0,0,0.06)"
  2: "0 8px 24px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)"
  3: "0 24px 64px rgba(0,0,0,0.14)"
  card-hover: "0 12px 32px rgba(0,0,0,0.10)"

animations:
  carousel-slide:
    duration: 900ms
    easing: cubic-bezier(0.65, 0, 0.35, 1)
    interval: 6500ms
  card-hover-lift:
    duration: 220ms
    easing: cubic-bezier(0.2, 0, 0, 1)
  tab-underline-slide:
    duration: 260ms
    easing: cubic-bezier(0.4, 0, 0.2, 1)
  wordmark-fade-in:
    duration: 800ms
    easing: cubic-bezier(0.16, 1, 0.3, 1)

components:
  button-primary:
    background: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
    hoverBackground: "{colors.primary-hover}"
  button-secondary:
    background: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  hero-carousel-slide:
    background: "photo-full-bleed"
    overlay: "{colors.canvas-photo-overlay}"
    padding: 128px 80px
  product-tab-strip:
    background: "{colors.canvas}"
    borderBottom: "1px solid {colors.hairline}"
    padding: 0 24px
    height: 56px
  card-category:
    background: "{colors.canvas-soft}"
    padding: 32px
    rounded: "{rounded.md}"
    hoverElevation: "{elevation.card-hover}"
  card-subbrand-portal:
    background: "{colors.canvas-slate}"
    textColor: "{colors.on-ink}"
    padding: 48px
    rounded: "{rounded.md}"
---

## Overview

DJI's global consumer site (`dji.com`, `dji.com/cn`) is not a single-brand experience — it is a **portfolio-brand gateway**. One home page must simultaneously sell to hobbyists (Osmo Pocket, Mini series), prosumer creators (Mavic 4 Pro, Ronin), racing pilots (Avata 360), industrial operators (Matrice), and agriculture (Agras). The design language is therefore engineered around **product-anchoring rather than brand-anchoring**: individual products carry their own SVG wordmarks and 4-character Chinese slogans, and the DJI master brand recedes into the top-left corner as a small logotype.

The canvas is a light neutral: `{colors.canvas}` (`#ffffff`) for content bands and `{colors.canvas-soft}` (`#f5f5f5`) for card grids and photo cross-fades. Text is `{colors.ink}` (`#0a0a0a`) — a hair softer than pure black to match DJI's print-safe rendering conventions. The primary CTA color is `{colors.primary}` (`#000000`) — solid black — with no chromatic accent (unlike Skydio's red or Zapier's orange). All voltage comes from **photography and product renders**, not from the palette.

The hero is a **full-viewport rotating carousel** cycling through 10+ flagship products (MAVIC 4 PRO / DJI EV50 / MIC MINI 2S / OSMO POCKET 4P / AIR 3S / OSMO ACTION 6 / RS 5 / MATRICE 400 / T100S+T55 / FLYCART 200 / ROMO 2). Each slide is a full-bleed moody photograph (drone-over-mountain-range at golden hour, aerial-cinema handheld gimbal shots), an SVG product wordmark overlay, a Chinese poetic 4-character headline ("天地为你所动"), a sub-line ("三摄旗舰影像航拍机"), and dual CTAs ("了解更多" text-link + "立即购买" as `button-primary`). Auto-advance interval: 6.5 seconds.

Below the fold, the site uses a **horizontally scrollable product-tab strip** (人气单品 / 云台相机 / 全景相机 / 广角相机 / 手机云台 / 无线麦克风 / 视频会议 / 专业级产品 / 手机自拍屏) that behaves like a shopping-mall category rack. Category-card grids follow (Lito 新手入门航拍机 / Osmo Pocket 4 / Avata 360 / Mic Mini 2 / Osmo Mobile 8P), then a 无人机选购指南 helper, a 拍摄设备 secondary grid, an editorial 创新故事 news band, and — the most distinctive structural element — **three sub-brand entrypoints** (专业影像 pro.dji.com / 行业应用 enterprise.dji.com / 农业应用 ag.dji.com) that visually acknowledge DJI is a family of brands, not one.

**Key Characteristics:**
- **Portfolio-brand system.** No single hero product; the carousel gives 10+ products equal rotation. DJI as an umbrella brand is smaller than the individual product wordmarks.
- **SVG small-caps product wordmarks.** MAVIC / OSMO / RONIN / AVATA / MATRICE / AGRAS / OSMO POCKET are rendered as inline SVG geometric-hairline wordmarks (never web font). They are the strongest brand carriers on the page — the product line IS the brand.
- **Chinese 4-character poetic slogans.** "天地为你所动" / "感受生活" / "掌上视界" — each product carries one, always 4–6 characters, always vertically or horizontally centered on the photo hero.
- **Cool neutral canvas + monochrome ink.** `#ffffff` / `#f5f5f5` / `#0a0a0a`. No chromatic brand color — voltage comes from photography.
- **Rotating hero carousel as central navigation.** 10+ auto-advancing slides at 6.5s interval; each slide effectively acts as its own product-landing page hero.
- **Sub-brand gateway trilogy.** 专业影像 / 行业应用 / 农业应用 as three dark-inverted `card-subbrand-portal` tiles near the bottom of the page — explicit visual acknowledgment that DJI is a portfolio brand.
- **Product-tab strip is a shopping-mall rack.** Horizontal scroll, no drop-downs; click swaps in a category card grid. Density is high — DJI trusts users to know what they're shopping for.
- **Square-cornered buttons at 4px radius.** Not pill, not zero-radius — 4px keeps the CTA feeling both commerce-ready and industrial-precise.

## Colors

> **Source pages:** `dji.com/cn/` (home carousel), `dji.com/cn/mavic-4-pro` (product page), `dji.com/cn/osmo-pocket-4` (compact product), sub-brand portals `pro.dji.com` / `enterprise.dji.com` / `ag.dji.com`.

### Brand & Accent

DJI's consumer site has **no chromatic brand color**. What follows are functional roles.

- **Primary** (`{colors.primary}` — `#000000`): Every primary CTA ("立即购买" / "Buy Now" / "了解更多" filled variant), the wordmark logotype, and the default ink for display headlines on light photo overlays. Solid black — not softened to `#0a0a0a` in CTAs.
- **Primary Hover** (`{colors.primary-hover}` — `#1c1c1c`): CTA hover state — a subtle lift, not a color swap.
- **Primary Press** (`{colors.primary-press}` — `#2a2a2a`): Pressed state.
- **Accent Link** (`{colors.accent-link}` — `#0068c9`): Reserved for **text-only inline links** in body copy (support articles, spec sheets, "查看兼容性" style contextual links). Never used on CTAs, buttons, or hero copy.
- **Accent Link Hover** (`{colors.accent-link-hover}` — `#004fa3`): Deeper blue on hover.
- **Tag New** (`{colors.tag-new}` — `#d0021b`): The rare "NEW" badge on category cards for just-launched products (Mavic 4 Pro at launch window). Used at most 2 per page.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background for content bands.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f5f5f5`): Category card grids, product-tab strip background, section alternator between two consecutive white bands.
- **Canvas Cool** (`{colors.canvas-cool}` — `#eef0f2`): Slightly cooler tint for the 创新故事 news band and the 无人机选购指南 helper block — signals "editorial" rather than "commerce".
- **Canvas Slate** (`{colors.canvas-slate}` — `#141414`): The sub-brand-portal tiles (`card-subbrand-portal`) and one immersive product-video band. Deep near-black — deliberately darker than Skydio's `#111214` to feel more premium-broadcast.
- **Photo Overlay** (`{colors.canvas-photo-overlay}` — `rgba(0,0,0,0.35)`): The gradient wash over hero-carousel photos to guarantee display-headline legibility. Never solid — always a top-to-bottom or radial gradient at 0.25–0.45 opacity.
- **Hairline** (`{colors.hairline}` — `#e5e5e7`): 1px card borders, tab-strip separator.
- **Hairline Strong** (`{colors.hairline-strong}` — `#d0d0d3`): Emphasized under-tab active-state rule.

### Text
- **Ink** (`{colors.ink}` — `#0a0a0a`): Default body color on light surfaces.
- **Ink Secondary** (`{colors.ink-secondary}` — `#2c2c2c`): Sub-heading text.
- **Ink Mute** (`{colors.ink-mute}` — `#5a5a5a`): Helper copy, spec labels, sub-line under wordmarks.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#8a8a8a`): Fine metadata, timestamps in the 创新故事 news band.
- **On Ink / On Primary** (`{colors.on-ink}` — `#ffffff`): Text on dark surfaces (sub-brand portals, video overlay bands, hero photo overlays).

### Semantic
- **Status OK** (`{colors.status-ok}` — `#0a7a3b`): Rare — used in the buy-flow for "in stock" indicators and delivery confirmations.
- **Status Warn** (`{colors.status-warn}` — `#c47f00`): Extreme-rare — "剩余 X 件" low-stock indicator; regulatory compliance note ("请遵守当地无人机法规").

## Typography

### Font Family

DJI ships **DJI Sans** (custom typeface) as the master face for both display and UI. Fallback stack: **PingFang SC** (Apple system Chinese) → **Noto Sans SC** (Google Fonts) → **HarmonyOS Sans SC** (Huawei's open license) → **SF Pro Display** (English) → system UI. The Chinese/English mix is intentional — DJI Sans is designed to visually pair with PingFang SC at matching optical weights, so a headline rendered "天地为你所动 · MAVIC 4 PRO" reads as a single typographic unit despite mixing scripts.

The signature typographic move is **SVG-wordmark + Chinese-poetic-slogan pairing**: an inline SVG geometric-hairline wordmark for the product name ("OSMO POCKET" at 60–72px) sits above a 4-character Chinese slogan ("掌上视界") in `display-poetic-cn` (72px weight 500 with **letter-spacing 8px** — the wide tracking makes each Chinese character breathe individually, evoking a classical poem-scroll rhythm).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 88px | 500 | 1.05 | -2.0px | Wide-viewport hero sub-headline (English brand claim) |
| `{typography.display-xl}` | 64px | 500 | 1.08 | -1.4px | Section opener ("专业级产品", "拍摄设备") |
| `{typography.display-lg}` | 48px | 500 | 1.15 | -0.8px | Category-card title, sub-brand-portal title |
| `{typography.display-poetic-cn}` | 72px | 500 | 1.15 | 8px | The Chinese 4-character hero slogan — the brand's most-recognizable type moment |
| `{typography.wordmark-svg}` | 36–72px SVG | — | — | 3.6px | Product wordmark (MAVIC / OSMO / RONIN / AVATA / MATRICE / AGRAS) — SVG only |
| `{typography.heading-lg}` | 32px | 500 | 1.25 | -0.4px | Feature block title |
| `{typography.heading-md}` | 22px | 500 | 1.3 | -0.2px | Sub-heading, card title |
| `{typography.heading-sm}` | 18px | 500 | 1.35 | 0 | Small-card title, spec-group label |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Marketing body lead |
| `{typography.body-md}` | 15px | 400 | 1.6 | 0 | Default body, product-description one-liner |
| `{typography.body-spec}` | 13px | 500 | 1.4 | 0 | Spec sheets, monospace tabular data (`tnum`) |
| `{typography.eyebrow}` | 12px | 500 | 1.2 | 1.4px | ALL-CAPS eyebrow above product wordmarks |
| `{typography.tab-strip}` | 14px | 500 | 1.0 | 0 | Product-tab strip labels (人气单品 / 云台相机…) |
| `{typography.button-md}` | 15px | 500 | 1.0 | 0 | Button label |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | Photo credit, spec caption |
| `{typography.micro}` | 11px | 400 | 1.4 | 0 | Fine print, regulatory notice |

### Principles

- **The SVG wordmark is untouchable.** MAVIC / OSMO / RONIN / AVATA / MATRICE / AGRAS product names ONLY render as inline SVG — never as web font. Their geometric-hairline construction is the brand's most rigorous consistency layer.
- **Chinese slogans use letter-spacing 8px.** Wide inter-character tracking evokes classical Chinese scroll typography. Never tighten this for line-fit — reduce the size instead.
- **English + Chinese share optical weight.** When a headline mixes scripts ("MAVIC 4 PRO · 天地为你所动"), both scripts should read at the same visual weight. DJI Sans at 500 pairs correctly with PingFang SC at 500.
- **`tnum` on all spec numbers.** Battery minutes, weight grams, sensor size, video resolution — always tabular figures.
- **Poetic slogans are 4–6 characters only.** "天地为你所动" (6) / "掌上视界" (4) / "感受生活" (4). Never longer — the rhythm breaks.

### Note on Font Substitutes

DJI Sans is proprietary. Open-source approximation for web:
- Display + UI (Latin) → **Inter Display** at weight 500 with `letter-spacing: -1.4px` at 64px.
- Body (Latin) → **Inter** at weight 400/500.
- Chinese → **Noto Sans SC** at matching weights (400/500). For the poetic slogan, **Noto Serif SC** or **Source Han Serif SC** at weight 500 with 8px letter-spacing is a stronger classical-scroll match.
- Monospace (spec) → **JetBrains Mono** at weight 500 with `font-variant-numeric: tabular-nums`.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine-grain).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px · `{spacing.huge}` 80px · `{spacing.giant}` 128px.
- **Section padding**: 80–128px vertical on marketing bands; 40–80px on category-card grids.
- **Card internal padding**: 32px on `card-category`; 48px on `card-subbrand-portal`.

### Grid & Container
- 12-column grid, **1440px content max-width** on wide (DJI defaults wider than most B2B sites because photography dominates), 1240px on desktop, 24–32px gutters.
- Hero carousel is **full-bleed** (spans entire viewport), inner content constrained to the container.
- Product-tab strip is **full-width scrollable** on the outer band; inner tab labels flow at natural rhythm without justified spacing.
- Category-card grid: **3-up on wide desktop, 2-up on tablet, 1-up on mobile**.
- Sub-brand portal trilogy: always **3-up on desktop, stacked on mobile** — never 2-up, because "trilogy" is the story.

### Whitespace Philosophy
DJI's whitespace is commerce-generous. Not as air-heavy as Antigravity (240px cinema sections would waste product-page shelf-space), not as dense as an Amazon PLP either. The rule of thumb: every major band gets 80–128px vertical breathing room, but category-card grids inside those bands cluster with 24px gutters — trusting users to scan multi-product density fluently.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface — hero, most bands |
| 1 | `{elevation.1}` (0 1px 3px rgba(0,0,0,0.06)) | Category card resting state |
| 2 | `{elevation.2}` (0 8px 24px + 1px 2px) | Category card hover-lift, floating modal chrome |
| 3 | `{elevation.3}` (0 24px 64px) | Modal / overlay — rare on marketing |
| card-hover | `{elevation.card-hover}` (0 12px 32px) | Product-carousel slide lift on hover-preview |

### Decorative Depth
DJI's depth carrier is **product-render photography** — high-key studio shots with subtle rim-light and drop shadow rendered into the PNG itself. On category cards the products appear to float over the `{colors.canvas-soft}` background with an in-image shadow, not a CSS shadow. Traditional box-shadow is reserved for card-hover lift and modal chrome; it is deliberately quiet so photography carries the atmosphere.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hero carousel photo edges, full-bleed video |
| `{rounded.xs}` | 2px | Fine spec-tag chips |
| `{rounded.sm}` | 4px | **All buttons.** Product-tab active underline caps |
| `{rounded.md}` | 8px | Category cards, sub-brand portal tiles |
| `{rounded.lg}` | 12px | Video thumbnail chrome, news-band editorial cards |
| `{rounded.xl}` | 20px | Rare hero-scale illustration containers |
| `{rounded.pill}` | 9999px | Compact filter chip on the buy-flow only (not on marketing surface) |

### Photography Geometry
DJI's photography is **product-hero cinematography**: 16:9 or 21:9 full-bleed hero shots (moody sky, mountain range at golden hour, low-light urban aerial) with the product rendered small-but-central. On category cards, product renders are always 3:4 or 1:1 studio isolates on `{colors.canvas-soft}` with the product's own baked-in floor shadow — no environmental context. The rule: hero = drama, card = clarity.

## Components

### Buttons

**`button-primary`** — the dominant "立即购买" / "Buy Now" CTA.
- Background `{colors.primary}` (`#000000`), text `{colors.on-primary}`, type `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.sm}` 4px.
- Hover: background swaps to `{colors.primary-hover}` — subtle lift, no color change.
- Pressed: `{colors.primary-press}`.

**`button-secondary`** — the "了解更多" outline alternative.
- Background transparent, text `{colors.ink}`, 1px solid `{colors.ink}` border, same square-with-4px geometry.
- Hover: fill inverts to `{colors.ink}` background + `{colors.on-ink}` text.

**`button-on-photo`** — the hero-carousel CTA overlaid on photography.
- Background `{colors.canvas}` (white), text `{colors.ink}`, padding `12px 24px`, rounded `{rounded.sm}`. On dark hero photos, ensures maximum contrast without introducing color.

**`text-link-arrow`** — inline "了解更多 →" arrow-suffixed link.
- Text `{colors.ink}` at `{typography.body-md}`, arrow inline. On hover, arrow shifts 4px right; text darkens.

### Cards & Containers

**`card-category`** — the horizontally-scrolling category-card tile (Lito series / Osmo Pocket 4 / Avata 360 / Mic Mini 2 / Osmo Mobile 8P).
- Background `{colors.canvas-soft}`, padding 32px, rounded `{rounded.md}` 8px, no border.
- Structure: eyebrow (小新品 / 新手推荐 / 热销) → product render (3:4 studio isolate) → SVG wordmark → 4-character Chinese slogan → dual CTA (了解 text-link + 购买 button).
- Hover: `{elevation.card-hover}` lift + product render scales 1.02 over 220ms.

**`card-subbrand-portal`** — the three sub-brand entrypoint tiles (专业影像 / 行业应用 / 农业应用).
- Background `{colors.canvas-slate}`, text `{colors.on-ink}`, padding 48px, rounded `{rounded.md}` 8px.
- Structure: SVG icon (top, 48px, white-hairline geometric) → sub-brand title (`{typography.heading-lg}`) → one-line description (`{typography.body-md}` at `{colors.ink-mute-2}` opacity) → text-link "了解更多 →" in `{colors.on-ink}`.
- Full-height 3-up on desktop; each tile links to pro.dji.com / enterprise.dji.com / ag.dji.com respectively.

**`card-news-editorial`** — the 创新故事 (Innovation Stories) news-band card.
- Background `{colors.canvas}` on `{colors.canvas-cool}` band, 1px `{colors.hairline}` border, padding 24px, rounded `{rounded.lg}` 12px.
- Structure: thumbnail image (16:9), eyebrow (故事 / 新闻 / 案例), heading `{typography.heading-md}`, one-line dek in `{typography.body-md}`, publish date in `{typography.micro}` at `{colors.ink-mute-2}`.

**`card-guide-helper`** — the 无人机选购指南 helper block.
- Background `{colors.canvas-cool}`, padding 40px, rounded `{rounded.md}` 8px.
- Contains a 3-question wizard: "预算范围？" / "拍摄场景？" / "便携性优先级？" — each answer filters the below product grid.

### Inputs & Forms

**`text-input`** — standard form field (buy flow, newsletter signup).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `12px 14px`, rounded `{rounded.sm}` 4px, 1px `{colors.hairline-strong}` border.
- Focus: border swaps to `{colors.ink}`.

**`select-country`** — country/language selector in top nav.
- Uses ISO country flags at 20px + language label in `{typography.tab-strip}`. Dropdown reveals a full country list with search.

### Navigation

**`nav-bar`** — top nav.
- Background `{colors.canvas}` at scroll-top; `rgba(255,255,255,0.9)` + backdrop-blur when scrolled past 80px. Padding `{spacing.lg} {spacing.xxl}`.
- Left: DJI wordmark logo (SVG, 24px height). Middle: category nav (消费级 / 手持 / 专业级 / 农业 / 教育 / 支持). Right: search icon + cart icon + "登录" text link + country selector.
- Height 64px on desktop, 56px on mobile.

**`product-tab-strip`** — the horizontally scrollable category-tab rack below the hero.
- Background `{colors.canvas}`, 1px `{colors.hairline}` bottom border, height 56px, padding `0 24px`.
- Tabs: 人气单品 / 云台相机 / 全景相机 / 广角相机 / 手机云台 / 无线麦克风 / 视频会议 / 专业级产品 / 手机自拍屏.
- Active tab: `{colors.ink}` text + 2px `{colors.ink}` underline (aligned with `{rounded.sm}` cap ends). Inactive: `{colors.ink-mute}` text.
- Underline slides between tabs on click (`{animations.tab-underline-slide}`).

### Pills, Tags, and Chips

**`chip-eyebrow`** — section eyebrow.
- Background transparent, text `{colors.ink-mute}`, type `{typography.eyebrow}` (12px all-caps 1.4px tracking).

**`chip-tag-new`** — the "NEW" launch badge.
- Background `{colors.tag-new}` (`#d0021b`), text `{colors.on-primary}`, type `{typography.micro}` all-caps, padding `2px 6px`, rounded `{rounded.xs}`.

**`chip-spec-tag`** — inline spec highlight (e.g. "8K/60fps", "三摄", "44 分钟续航").
- Background `{colors.canvas-cool}`, text `{colors.ink-secondary}`, type `{typography.body-spec}` (mono 13px), padding `4px 10px`, rounded `{rounded.pill}`.

### Signature Components

**Rotating Product-Carousel Hero** — the brand's central navigation and its most-recognizable structural element.
- Full-bleed 100vh (85vh on mobile), auto-advances every 6.5s through 10+ slides (MAVIC 4 PRO / DJI EV50 / MIC MINI 2S / OSMO POCKET 4P / AIR 3S / OSMO ACTION 6 / RS 5 / MATRICE 400 / T100S+T55 / FLYCART 200 / ROMO 2).
- Each slide: full-bleed photograph → `{colors.canvas-photo-overlay}` gradient wash → SVG product wordmark (top-center or bottom-left, 60–72px) → 4-character Chinese slogan (`{typography.display-poetic-cn}`, centered) → sub-line in `{typography.body-lg}` → dual CTA (`text-link-arrow` "了解更多" + `button-on-photo` "立即购买").
- Progress indicator: bottom-center 10-dot pagination + slide-index counter in `{typography.body-spec}` monospace ("03 / 11").
- Slide transition: 900ms crossfade + subtle 1.03 scale on the outgoing slide.

**SVG Product-Wordmark System** — the hardware-brand carrier that is stronger than the DJI master brand.
- Every product line has its own wordmark: MAVIC, OSMO, RONIN, AVATA, MATRICE, AGRAS, OSMO POCKET, OSMO ACTION, MIC.
- Rendered ONLY as inline SVG. Never as web font. Never re-tracked. Never re-colored beyond `{colors.ink}` (light bg) or `{colors.on-ink}` (dark bg).
- Sizes: 36px on category cards, 48–60px on product-page heroes, 72px on the carousel hero.
- Character construction: geometric-hairline (approx 1px stroke) with wide inter-character tracking (`letter-spacing: 3.6px` equivalent). Uppercase-only.

**Chinese Poetic Slogan Block** — the type moment paired with each product wordmark.
- 4–6 character Chinese slogan in `{typography.display-poetic-cn}` (72px weight 500, letter-spacing 8px). Serif is optional; the sans PingFang SC at weight 500 is the default.
- Sits directly below the SVG wordmark, centered. Never flush-left.
- Always includes a sub-line one tier down (`{typography.body-lg}` — "三摄旗舰影像航拍机") that translates the poetic promise into a concrete product claim.

**Horizontally-Scrollable Product-Tab Strip** — the shopping-mall category rack.
- Height 56px, background `{colors.canvas}`, 1px hairline bottom. On mobile it becomes a swipe-scroll strip with fade-out edges.
- Tabs render at `{typography.tab-strip}` (14px weight 500). Active tab gets 2px `{colors.ink}` bottom underline + full-color text; inactive is `{colors.ink-mute}`.
- Clicking a tab does NOT navigate away — it swaps the below `card-category` grid content in place with a 220ms fade.

**Sub-Brand Portal Trilogy** — the three dark-inverted tiles that acknowledge DJI's portfolio structure.
- Position: near the bottom of the home page (after 创新故事), before the global footer.
- Three `card-subbrand-portal` tiles in a strict 3-up desktop row: **专业影像** (→ pro.dji.com) / **行业应用** (→ enterprise.dji.com) / **农业应用** (→ ag.dji.com).
- Each tile: `{colors.canvas-slate}` background, 48px padding, an SVG hairline icon top-left (camera / building / wheat-stalk), sub-brand name in `{typography.heading-lg}`, one-line description in `{typography.body-md}`, "了解更多 →" text-link in `{colors.on-ink}`.
- Never render 2-up or 1-up on desktop — the trilogy structure is the message. On mobile, stack vertically.

**创新故事 Editorial News Band** — the brand-storytelling section that lets DJI publish long-form.
- Full-width band on `{colors.canvas-cool}`. 3-up grid of `card-news-editorial` cards. Headline of the band: "创新故事" (`{typography.display-xl}`, 64px). "查看更多故事 →" link on the right.
- Content types: 产品故事 (behind-the-scenes engineering), 用户案例 (customer captured moments), 新闻发布 (press releases).

**Country / Region Selector with Full-Screen Overlay** — DJI serves 100+ countries with region-specific pricing and inventory.
- Trigger: country-flag chip in top-right nav. On click, a full-screen overlay (`rgba(0,0,0,0.85)` backdrop) reveals a searchable country list with flags + Chinese/English region names + currency indicator. Close with ESC or backdrop click.

## Do's and Don'ts

### Do
- Render every product name (MAVIC / OSMO / RONIN / AVATA / MATRICE / AGRAS / OSMO POCKET) as inline SVG wordmark. Never as web font.
- Pair each product wordmark with a 4–6 character Chinese poetic slogan. Never a long marketing sentence.
- Use letter-spacing 8px on the Chinese slogan. The wide tracking is signature.
- Keep the entire brand palette monochrome: `#ffffff` / `#f5f5f5` / `#eef0f2` / `#141414` / `#0a0a0a`. Chroma comes from photography.
- Include the three-sub-brand-portal trilogy near the bottom of any brand-level home page. It signals the portfolio structure explicitly.
- Auto-advance the hero carousel at 6–7s. Faster reads as advertising; slower reads as neglect.
- Use 4px rounded corners on buttons (`{rounded.sm}`). Not pill (consumer), not zero (industrial defense) — 4px is DJI's commerce+precision balance.
- Render product-tab active state with a 2px ink underline that slides between tabs on click.

### Don't
- Don't introduce a chromatic brand accent (red, orange, blue). The only chromatic exception is the accent-link blue in body copy, and the rare NEW badge red.
- Don't render product names as web font — the SVG wordmarks are the strongest consistency layer in the entire system.
- Don't collapse the sub-brand portal trilogy to 2-up. The trilogy IS the message. Stack vertically on mobile instead.
- Don't extend the Chinese slogan beyond 6 characters. The rhythm breaks and the block starts to look like body copy.
- Don't use pill-shaped buttons on the marketing surface. Pills are for the buy-flow filter chips only.
- Don't blur the sub-brand identities into a single "DJI" umbrella on the home page — respect that 专业影像 / 行业应用 / 农业应用 each have their own site and voice.
- Don't set the hero carousel to auto-advance faster than 5.5s or slower than 8s. Outside that band the pacing feels either aggressive or dead.
- Don't stack more than 4 CTAs on any single hero slide. Two (了解更多 + 立即购买) is the standard.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | 1440px container, full 100vh hero carousel, 3-up category cards, 3-up sub-brand portals |
| Desktop | 1024–1440px | 1240px container, 88vh hero, 3-up category cards, 3-up portals |
| Tablet | 768–1023px | Hero drops to 72vh, category cards 2-up, portals still 3-up (compressed) |
| Mobile | < 768px | Hero drops to 65vh, category cards 1-up carousel, portals stack vertically; product-tab strip becomes swipe with fade-edges |

### Touch Targets
- Buttons hit ≥ 44×44px on mobile via padding scaling.
- Product-tab strip labels get ≥ 40×40px tap area on mobile.
- Carousel pagination dots get ≥ 44×44px tap area (visual dot is 8px, tap zone is expanded).

### Collapsing Strategy
- Display stair-steps 88 → 72 → 64 → 48px through breakpoints.
- Chinese poetic slogan stair-steps 72 → 56 → 48 → 40px.
- Product-tab strip becomes swipe-scrollable on tablet and below; active-tab underline still animates.
- Category cards collapse 3-up → 2-up → 1-up horizontal carousel (with peek of next card).
- Sub-brand portals collapse 3-up → 3-up (compressed) → stacked 1-up on mobile.

### Image Behavior
Hero-carousel photos use `srcset` with three variants: 1440×900 wide-desktop, 1024×768 tablet, 768×1024 mobile-portrait (recomposed to keep the product visible when the aspect flips). Category-card product renders use 3:4 or 1:1 studio-isolate PNGs with transparent backgrounds so they can be recolored/re-backgrounded across the site.

## Iteration Guide

1. Focus on ONE component at a time; the **rotating product-carousel hero** and the **SVG-wordmark + Chinese-slogan pairing** are the two highest-signal signature elements — get them right first.
2. Reference tokens directly (`{colors.canvas-soft}`, `{typography.display-poetic-cn}`, `{rounded.sm}`).
3. When adding a new product to the family, first create its SVG wordmark (uppercase, geometric-hairline, 3.6px letter-spacing). Only then decide on the 4-character Chinese slogan.
4. Keep the palette monochrome. If you need voltage, add better photography — never add a brand color.
5. Body copy defaults to `{typography.body-md}` 15px (a hair smaller than most peer brands — DJI trusts users to read closer, because the content is product-technical).
6. When in doubt about tone, ask: "does this respect that DJI is a portfolio of four brands (consumer / pro / enterprise / agriculture), each with distinct users?" If the design collapses them into one voice, revise.
7. Never remove the sub-brand-portal trilogy from a brand-level page. Even if the section feels redundant to internal teams, it is the primary user-facing gateway for 行业应用 and 农业应用 traffic.
8. Auto-advancing hero carousels must pause on hover and on keyboard focus. Accessibility is not optional at DJI's scale.
