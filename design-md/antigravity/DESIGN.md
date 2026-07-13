---
version: alpha
name: Antigravity-Inspired-design-analysis
description: An inspired interpretation of Antigravity (影翎) — Insta360's mono-product sub-brand for the A1 8K panoramic drone. The design language is a pure dark-mode cinematic aesthetic (near-black canvas, white type, no chromatic accents) inspired by Apple product pages but pulled toward aerial cinematography rather than industrial design. Every marketing surface is a single-product deep-dive: full-bleed aerial video hero → bilingual manifesto ("THE FUTURE IS UP — 未来不在远方，而在苍穹之上") → 3-section feature deep-dive → spec blocks → sample-footage grid. Typography mixes large Chinese-English display headlines with poetic-tech copy ("感受飞行，探索新境", "飞完即出片！"). The brand is one product, one story, one hero domain (antigravity.tech) — deliberately separated from Insta360 despite the co-branding endorsement line.

colors:
  primary: "#ffffff"
  primary-mute: "#bcbcbc"
  ink-inverse: "#ffffff"
  ink-inverse-secondary: "#e4e4e6"
  ink-inverse-mute: "#8a8a8f"
  ink-inverse-fine: "#5a5a5f"
  canvas: "#000000"
  canvas-soft: "#0a0a0a"
  canvas-elev: "#141416"
  canvas-elev-2: "#1e1e21"
  canvas-light-band: "#f4f4f6"
  ink-on-light: "#0a0a0a"
  hairline: "#242427"
  hairline-strong: "#33333a"
  accent-sky: "#7ab3ff"
  accent-sky-soft: "#3f6a9e"
  accent-warn: "#ffb64d"

typography:
  display-cinema:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 120px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -3.6px
  display-xxl:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -2.4px
  display-xl:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.6px
  display-lg:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.8px
  display-poetic:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.35
    letterSpacing: 0.2px
  heading-lg:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading-md:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: "'SF Pro Text', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "'SF Pro Text', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-poetic:
    fontFamily: "'SF Pro Display', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: 0.4px
  spec-num-mega:
    fontFamily: "'SF Pro Display', system-ui, sans-serif"
    fontSize: 128px
    fontWeight: 200
    lineHeight: 0.95
    letterSpacing: -4.0px
    fontFeature: tnum
  spec-num-lg:
    fontFamily: "'SF Pro Display', system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -2.0px
    fontFeature: tnum
  spec-num-md:
    fontFamily: "'SF Pro Display', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.6px
    fontFeature: tnum
  eyebrow:
    fontFamily: "'SF Pro Text', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.6px
    textTransform: uppercase
  button-md:
    fontFamily: "'SF Pro Text', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "'SF Pro Text', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  micro:
    fontFamily: "'SF Pro Text', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
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
  xxl: 48px
  huge: 96px
  giant: 160px
  cinema: 240px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 32px
  pill: 9999px

elevation:
  0: "none"
  1: "0 2px 20px rgba(0,0,0,0.4)"
  2: "0 12px 48px rgba(0,0,0,0.55)"
  glow-sky: "0 0 80px rgba(122,179,255,0.18)"

animations:
  parallax-scroll:
    duration: 900ms
    easing: cubic-bezier(0.16, 1, 0.3, 1)
  video-fade-in:
    duration: 1200ms
    easing: cubic-bezier(0.4, 0, 0.2, 1)
  hover-lift:
    duration: 220ms
    easing: cubic-bezier(0.2, 0, 0, 1)

components:
  button-primary:
    background: "{colors.primary}"
    textColor: "{colors.ink-on-light}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
    hoverBackground: "{colors.primary-mute}"
  button-ghost-dark:
    background: "transparent"
    textColor: "{colors.ink-inverse}"
    border: "1px solid {colors.hairline-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  card-media-quote:
    background: "{colors.canvas-elev}"
    padding: 32px
    rounded: "{rounded.lg}"
    borderTop: "1px solid {colors.hairline}"
  card-feature-cinema:
    background: "{colors.canvas}"
    padding: 0
    rounded: "{rounded.none}"
  spec-block:
    background: "{colors.canvas-elev}"
    padding: 48px
    rounded: "{rounded.lg}"
    borderTop: "1px solid {colors.hairline}"
---

## Overview

Antigravity's design language is a pure **cinematic dark-mode single-product page**. The entire brand exists at one URL (`antigravity.tech`) to sell one product (the A1 8K panoramic drone). Every design decision serves that concentration.

The canvas is deep near-black — `{colors.canvas}` (`#000000`) for the true void moments (hero video, sample-footage grid), `{colors.canvas-soft}` (`#0a0a0a`) and `{colors.canvas-elev}` (`#141416`) for the elevated content bands (spec blocks, feature cards). Text is white or near-white on all default surfaces. There are no chromatic brand accents. Sky-blue (`{colors.accent-sky}`) is used exclusively for subtle glow behind the drone hero image and rare "sample data" chart tints — not as a general brand color. The brand's chroma comes from the **imagery**, not the palette.

Typography does the emotional lifting. The hero renders "8K 全景无人机" at a full-cinema 88–120px display size in a Chinese-Latin mixed sans, followed immediately by the bilingual manifesto **"THE FUTURE IS UP — 未来不在远方，而在苍穹之上"** in poetic script casing. Below the fold, Apple-esque poetic-tech taglines ("感受飞行，探索新境", "飞完即出片！", "仅重 249 克") each get their own full-viewport section. Spec numbers ("39 min", "8K", "249g", "90° DFOV") render in oversized thin-weight display treatment (`display-thin` 128px weight 200) — the number IS the visual.

Because it's a mono-product brand, there's no product-line navigation, no category system, no complex information architecture. The whole page is a **scroll cinema**: video → poem → feature → spec → sample-footage grid → FAQ. Repeat, refine, ship.

**Key Characteristics:**
- **Pure dark-mode canvas.** `{colors.canvas}` and `{colors.canvas-soft}` cover 100% of the surface — no light bands, no "reset" white sections.
- **Bilingual manifesto typography.** English display + Chinese poetic subtitle rendered together as one typographic unit: "THE FUTURE IS UP — 未来不在远方，而在苍穹之上".
- **Oversized thin spec numbers.** "39" for battery minutes, "249" for grams, "8K" for resolution — all rendered at 72–128px weight 200. The number is the argument.
- **Zero chromatic brand accents.** No red, no orange, no green. Chroma comes from photography (blue sky, golden hour) and product LED (subtle sky-blue glow).
- **Mono-product single-scroll architecture.** No product-line switcher, no category nav. Every section is about A1.
- **Cinema-scale vertical rhythm.** Sections use 96–240px vertical padding. Each feature deep-dive occupies at least one full viewport height.
- **Poetic-tech copy voice.** Apple-inspired ("感受飞行，探索新境") but pulled toward aerial romanticism rather than industrial minimalism.
- **Sub-brand endorsement, not merger.** "由影石Insta360 与第三方共同孵化" appears once in the brand-story block; Insta360 branding does not appear in the nav, hero, or CTA.

## Colors

> **Source pages:** `antigravity.tech/` (home), `/drone/antigravity-a1/buy`, `/vision`.

### Brand & Accent

Antigravity has **no chromatic brand color**. The identity is monochrome dark-mode. What follows are the functional roles.

- **Primary** (`{colors.primary}` — `#ffffff`): The dominant CTA color. White pill on dark canvas.
- **Primary Mute** (`{colors.primary-mute}` — `#bcbcbc`): Hover state on white CTAs.
- **Accent Sky** (`{colors.accent-sky}` — `#7ab3ff`): The rare atmospheric accent. Used only as a soft glow behind the drone product shot in the hero, and as the LED indicator color rendered in product-detail illustrations. Not a general brand color.
- **Accent Sky Soft** (`{colors.accent-sky-soft}` — `#3f6a9e`): Deeper sky blue for larger glow gradients.
- **Accent Warn** (`{colors.accent-warn}` — `#ffb64d`): Extreme-rare golden-hour accent — appears in one horizon-band shot near the "感受飞行" section and nowhere else on the site.

### Surface
- **Canvas** (`{colors.canvas}` — `#000000`): True black. Used for full-bleed video hero and sample-footage grid — where nothing should compete with the imagery.
- **Canvas Soft** (`{colors.canvas-soft}` — `#0a0a0a`): The default "page black" — subtly warmer than true black, used for most content bands.
- **Canvas Elev** (`{colors.canvas-elev}` — `#141416`): Elevated content bands (spec blocks, feature cards). Provides just enough surface separation without introducing a hard border.
- **Canvas Elev 2** (`{colors.canvas-elev-2}` — `#1e1e21`): Second-level elevation for stacked components (e.g. accordion FAQ inside a spec block).
- **Canvas Light Band** (`{colors.canvas-light-band}` — `#f4f4f6`): The single exception — used only for the "关于我们" brand story block, once, as a deliberate inversion.
- **Hairline** (`{colors.hairline}` — `#242427`): Subtle 1px separator on elevated cards.
- **Hairline Strong** (`{colors.hairline-strong}` — `#33333a`): Emphasized dividers, ghost button borders.

### Text
- **Ink Inverse** (`{colors.ink-inverse}` — `#ffffff`): Default text on dark canvas.
- **Ink Inverse Secondary** (`{colors.ink-inverse-secondary}` — `#e4e4e6`): Secondary text.
- **Ink Inverse Mute** (`{colors.ink-inverse-mute}` — `#8a8a8f`): Helper text, captions, spec labels.
- **Ink Inverse Fine** (`{colors.ink-inverse-fine}` — `#5a5a5f`): Fine print, timestamp, source credits.
- **Ink on Light** (`{colors.ink-on-light}` — `#0a0a0a`): Text on the rare `{colors.canvas-light-band}` inversion and on white CTA buttons.

### Semantic
The brand does not use a traditional semantic palette. Warnings and errors in the buy flow render in `{colors.accent-warn}` (`#ffb64d`) as a single amber highlight, not as filled backgrounds.

## Typography

### Font Family

Antigravity does not license a proprietary display face. It stacks **SF Pro Display / SF Pro Text** (Apple) with **PingFang SC** and **Noto Sans SC** for Chinese — a stack that matches the Apple-inspired voice while covering both scripts. When SF Pro is unavailable, use **Inter Display** at heavy weights and **Noto Sans SC** at matching weights.

The signature typographic move is the **bilingual manifesto**: English display + Chinese poetic line rendered as one unit, with the em-dash "—" as the visual bridge. Both scripts must render at approximately the same optical size and share the same weight (usually 300 for the poetic line, 700 for the declarative English).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-cinema}` | 120px | 700 | 1.0 | -3.6px | Wide-viewport hero headline |
| `{typography.display-xxl}` | 88px | 700 | 1.02 | -2.4px | Default hero headline |
| `{typography.display-xl}` | 64px | 700 | 1.05 | -1.6px | Section opener |
| `{typography.display-lg}` | 44px | 600 | 1.1 | -0.8px | Feature deep-dive title |
| `{typography.display-poetic}` | 40px | 300 | 1.35 | 0.2px | Chinese poetic sub-line (bilingual manifesto) |
| `{typography.heading-lg}` | 32px | 600 | 1.2 | -0.4px | Card title |
| `{typography.heading-md}` | 22px | 500 | 1.3 | -0.2px | Sub-heading |
| `{typography.heading-sm}` | 18px | 500 | 1.35 | 0 | Spec label |
| `{typography.body-lg}` | 20px | 400 | 1.55 | 0 | Marketing body lead |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body |
| `{typography.body-poetic}` | 18px | 300 | 1.75 | 0.4px | Poetic-tech copy ("感受飞行，探索新境") |
| `{typography.spec-num-mega}` | 128px | 200 | 0.95 | -4.0px | Hero spec number ("249", "39", "8K") |
| `{typography.spec-num-lg}` | 72px | 300 | 1.0 | -2.0px | Standard spec number |
| `{typography.spec-num-md}` | 40px | 400 | 1.0 | -0.6px | Compact spec number |
| `{typography.eyebrow}` | 12px | 500 | 1.2 | 1.6px | ALL-CAPS eyebrow |
| `{typography.button-md}` | 15px | 500 | 1.0 | 0 | Button label |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | Caption, metadata |
| `{typography.micro}` | 11px | 400 | 1.4 | 0 | Legal fine print |

### Principles
- **Bilingual as one type block.** English and Chinese are typeset together as a unit. Never render one without the other in the manifesto position.
- **Thin numbers, heavy nouns.** Spec numbers use weight 200–300 at huge sizes; display nouns use weight 600–700. The contrast is the brand.
- **Poetic-tech voice.** Body poetic (`body-poetic`) uses weight 300 with slightly loose tracking to convey Apple-esque air. Reserved for feature-block subtitles.
- **`tnum` on all spec numbers.** Battery minutes, weight grams, resolution — always tabular figures.
- **No sentence-case commas in the manifesto.** "THE FUTURE IS UP — 未来不在远方，而在苍穹之上" uses em-dash bridge and Chinese full-width comma. Never mix half-width and full-width punctuation.

### Note on Font Substitutes
SF Pro is Apple-proprietary but ships free on macOS/iOS. For open-source approximation on web:
- English display → **Inter Display** at 700 with `letter-spacing: -2.4px` at 88px.
- English body → **Inter** at 400/500.
- Chinese → **Noto Sans SC** (Google Fonts, free) at matching weights. Do not fall back to Microsoft YaHei — its weight distribution differs and breaks the manifesto rhythm.
- Spec numbers → **Inter** at weight 200 with `font-variant-numeric: tabular-nums`.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 48px · `{spacing.huge}` 96px · `{spacing.giant}` 160px · `{spacing.cinema}` 240px.
- **Section padding**: 96–240px vertical. Cinema sections (hero, manifesto, spec-num showcase) use `{spacing.cinema}` 240px.
- **Card internal padding**: 32–48px on media quote and spec-block cards.

### Grid & Container
- 12-column grid, 1440px content max-width on wide, 1200px default, 24–32px gutters.
- Hero, manifesto, and spec-number sections are **full-bleed** (no container limit — content spans the entire viewport with generous side gutters).
- Feature deep-dive uses split-hero pattern: 50/50 image + text on desktop; stacked on mobile.
- Sample-footage grid uses a 3-up masonry with variable heights to preserve individual photo aspect ratios.

### Whitespace Philosophy
Antigravity's whitespace is cinematic, not editorial. Sections are separated by darkness — 96–240px of pure `{colors.canvas-soft}` between blocks lets the eye reset before the next image arrives. Density is a sin here; density is what Insta360 (the parent brand) does for shopping. Antigravity is for atmosphere.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default `{colors.canvas-soft}` sections |
| 1 | Surface swap to `{colors.canvas-elev}` | Elevated cards, spec blocks |
| 2 | Surface swap to `{colors.canvas-elev-2}` + hairline | Second-level nested elevation |
| glow-sky | `0 0 80px rgba(122,179,255,0.18)` | Rare sky-glow behind product hero — the only chromatic depth |

### Decorative Depth
The brand's depth medium is **video and photography**, not shadow. Full-bleed video plates carry parallax lift; static product shots use a subtle sky-blue radial glow behind the drone body (implemented as a large radial-gradient behind the transparent product PNG). Traditional box-shadows are almost invisible on the dark canvas — surface swaps carry the elevation logic instead.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed video, sample-footage tiles |
| `{rounded.xs}` | 4px | Tag chips |
| `{rounded.sm}` | 8px | Inputs, minor cards |
| `{rounded.md}` | 12px | Video thumbnail cards |
| `{rounded.lg}` | 20px | Spec blocks, feature cards, media-quote cards |
| `{rounded.xl}` | 32px | Rare hero-scale cards (Vision goggles spec block) |
| `{rounded.pill}` | 9999px | All CTA buttons, product-spec chips |

### Photography Geometry
Antigravity's photography is **aerial cinematography**. All hero-scale imagery is 16:9 or 21:9 rendered at full-bleed with zero border radius. Product-detail shots (A1 drone, Vision goggles) are rendered as transparent PNGs floated over the dark canvas with the sky-blue radial glow behind. Sample footage in the grid preserves original aspect ratios (16:9, 4:3, 9:16) — the variety is part of the "wherever you fly" message.

## Components

### Buttons

**`button-primary`** — the dominant CTA ("立即购买" / "Buy Now").
- Background `{colors.primary}` (white), text `{colors.ink-on-light}` (near-black), type `{typography.button-md}`, padding `14px 28px`, rounded `{rounded.pill}`.
- Hover: background swaps to `{colors.primary-mute}`.

**`button-ghost-dark`** — outline alternative on dark canvas.
- Background transparent, text `{colors.ink-inverse}`, 1px solid `{colors.hairline-strong}` border, same pill geometry.
- Hover: border swaps to `{colors.ink-inverse}`.

**`button-play-video`** — the hero play button overlaid on video.
- Circular 64px (mobile 48px), background `rgba(255,255,255,0.15)`, backdrop-blur 10px, white play-icon centered. Rounded `{rounded.pill}`.

**`text-link-arrow`** — inline "了解更多 →" link.
- Text `{colors.ink-inverse}` at `{typography.body-md}`, arrow icon inline. Hover: text mutes to `{colors.ink-inverse-secondary}` and arrow shifts 4px right.

### Cards & Containers

**`card-media-quote`** — media-testimonial band card ("《时代》周刊", "36氪", "极客公园").
- Background `{colors.canvas-elev}`, padding 32px, rounded `{rounded.lg}` 20px, 1px `{colors.hairline}` top border.
- Structure: media logo (top, monochrome white), quote in `{typography.body-lg}` italicized, source in `{typography.caption}` `{colors.ink-inverse-mute}`.

**`card-feature-cinema`** — full-bleed feature deep-dive block.
- Background `{colors.canvas}`, no padding constraint, no border radius. Split-hero: full-bleed image on one half, text stack on the other.
- Text stack: eyebrow → `{typography.display-lg}` title → `{typography.body-poetic}` sub-copy → optional CTA.

**`card-award-logo`** — award/certification logo tile.
- Background transparent, padding 16px, no border. Monochrome white award mark centered.

**`card-accessory`** — accessory carousel card.
- Background `{colors.canvas-elev}`, padding 24px, rounded `{rounded.lg}`. Product image (transparent PNG on subtle gradient), `{typography.heading-md}` name, `{typography.caption}` short-desc, `{typography.body-md}` price.

**`card-sample-footage`** — sample-footage grid tile.
- Background transparent, padding 0, rounded `{rounded.md}` 12px. Preserves original aspect ratio. Hover: subtle 1.02 scale + 300ms brightness lift.

### Inputs & Forms

**`text-input-dark`** — form field on dark canvas.
- Background `{colors.canvas-elev}`, text `{colors.ink-inverse}`, type `{typography.body-md}`, padding `12px 16px`, rounded `{rounded.sm}` 8px, 1px `{colors.hairline-strong}` border.
- Focus: border swaps to `{colors.ink-inverse}` (white).

**`accordion-faq`** — FAQ accordion item.
- Background `{colors.canvas-elev}`, padding `20px 24px`, rounded `{rounded.sm}`. Question at `{typography.heading-sm}` bold, answer at `{typography.body-md}` `{colors.ink-inverse-secondary}` on expand. Chevron rotates 180° on open.

### Navigation

**`nav-bar-dark`** — top nav.
- Background `rgba(10,10,10,0.75)` + `backdrop-filter: blur(20px)` (frosted-dark on scroll), padding `{spacing.lg} {spacing.xl}`.
- Left: "ANTIGRAVITY" wordmark at `{typography.heading-md}` in `{colors.ink-inverse}`. Center: primary nav (A1 / Vision / 配件 / 样片 / FAQ). Right: `button-primary` "立即购买".
- Height 68px on desktop, 56px on mobile.

### Pills, Tags, and Chips

**`chip-eyebrow`** — section eyebrow.
- Background transparent, text `{colors.ink-inverse-mute}`, type `{typography.eyebrow}` (12px all-caps 1.6px tracking).

**`chip-spec`** — spec-highlight pill next to a spec number.
- Background `{colors.canvas-elev-2}`, text `{colors.ink-inverse-secondary}`, type `{typography.caption}`, padding `4px 12px`, rounded `{rounded.pill}`.

### Signature Components

**Bilingual Manifesto Block** — the brand's central typographic signature.
- Full-bleed section on `{colors.canvas}`, 240px vertical padding. Two-line typographic unit centered:
  - Line 1: **THE FUTURE IS UP** in `{typography.display-xxl}` or `display-cinema`, weight 700, near-white.
  - Line 2 (immediately below): **未来不在远方，而在苍穹之上** in `{typography.display-poetic}` weight 300 at `{colors.ink-inverse-secondary}`.
  - Optional em-dash bridge "—" between the two on wide viewports.

**Cinema Spec Number** — the oversized-number showcase (e.g. "249g", "39min", "8K", "90° DFOV").
- Full-viewport-height section on `{colors.canvas}`, 240px vertical padding. Layout:
  - Small eyebrow at top ("重量" / "续航" / "分辨率").
  - Massive number in `{typography.spec-num-mega}` 128px weight 200 centered.
  - Small unit label ("克" / "分钟") beside the number in `{typography.heading-sm}`.
  - Optional supporting caption below in `{typography.body-poetic}`.

**Full-Bleed Aerial Video Hero** — the opening act.
- Autoplay muted loop of aerial footage at 100vh, `{colors.canvas}` fallback. Overlaid: brand wordmark top-left, headline + subheadline center-lower-third, `button-primary` CTA bottom-center. Subtle bottom-fade gradient (`linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)`) ensures text legibility.

**Product Hero with Sky Glow** — the A1 or Vision product beauty shot.
- Full-bleed section on `{colors.canvas-soft}`. Transparent PNG of the product centered, with a radial-gradient background using `{colors.accent-sky-soft}` at 15% opacity, blurred 120px, sized 800×800 behind the product. The only chromatic moment on the page.

**Media-Quote Wall** — the press-endorsement band.
- Horizontal 4–6-up grid of `card-media-quote` on `{colors.canvas-soft}`. On mobile collapses to a swipeable carousel. Media logos (《时代》, 36氪, 极客公园, 差评, X.PIN, TechCrunch style) always monochrome white.

**Sample Footage Grid** — the "精彩样片" showcase.
- Masonry-style grid on `{colors.canvas}`, 3-up desktop / 2-up tablet / 1-up mobile. `card-sample-footage` tiles at variable aspect ratios. Each tile: aerial shot, hover reveals shooting location + operator + drone-model chip.

**Sub-brand Endorsement Line** — the one-time Insta360 mention.
- Appears once in the "关于我们" brand-story block. Rendered as `{typography.caption}` at `{colors.ink-inverse-mute}`: "由影石Insta360 与第三方共同孵化". Never in the nav, hero, or CTA. Sub-brand strategy demands this restraint.

## Do's and Don'ts

### Do
- Keep the entire brand surface in dark-mode (`{colors.canvas}` / `{colors.canvas-soft}` / `{colors.canvas-elev}`).
- Render the bilingual manifesto as one type block — never English alone, never Chinese alone.
- Show one spec number per section at cinema scale — the number IS the proof.
- Use aerial photography as the primary chromatic source; the palette itself is monochrome.
- Autoplay muted looped video in the hero — the drone IS aerial motion.
- Preserve original sample-footage aspect ratios in the grid — variety signals "shoot anywhere."
- Restrict Insta360 endorsement to a single mention in the brand-story block.
- Pill buttons only — the brand's Apple-inspired voice demands pills.

### Don't
- Don't introduce a light-mode default. The `{colors.canvas-light-band}` inversion happens exactly once, in the brand-story block, and never repeats.
- Don't add chromatic brand accents (red, orange, green). Chroma comes from photography.
- Don't add a product-line switcher or category navigation — the brand is mono-product. Adding nav categories breaks the concentration.
- Don't render the spec number below 40px — small numbers read as data, not manifesto.
- Don't put Insta360 branding in the nav, hero, or CTA. The whole point of the sub-brand is separation.
- Don't add square-cornered buttons — pills are non-negotiable.
- Don't mix half-width and full-width punctuation in the manifesto. English uses en/em dashes; Chinese uses full-width commas.
- Don't use gradient text or animated color shifts — the brand is grayscale purity.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full `display-cinema` 120px hero; 3-up media-quote wall; 3-up sample grid |
| Desktop | 1024–1440px | Default 1200px container; `display-xxl` 88px hero; 4-up media-quote |
| Tablet | 768–1023px | Hero drops to 64px; feature deep-dives collapse split-hero → stacked; 2-up sample grid |
| Mobile | < 768px | Hero drops to 44–48px; media-quote becomes swipeable carousel; single-column sample grid; nav collapses to hamburger with white overlay |

### Touch Targets
- Pill buttons hit ≥ 44×44px on mobile via padding scaling.
- Sample-footage tiles use ≥ 60px minimum tap area for the location/operator chip overlay.

### Collapsing Strategy
- Display stair-steps 120 → 88 → 64 → 44px through breakpoints.
- Spec-num-mega stair-steps 128 → 96 → 72 → 56px.
- Split-hero feature blocks collapse to stacked at tablet; image renders above text.
- Full-bleed video hero maintains 100vh but reduces to 90vh on mobile with hero video swapping to a shorter mobile-optimized loop (or a hero image if bandwidth-constrained).
- Sample-footage masonry collapses 3-up → 2-up → single-column with preserved aspect ratios.

### Image Behavior
Aerial hero video uses `srcset` / `<source>` variants: desktop = long 15s cinematic loop, mobile = 5s tight loop plus poster fallback. Sample-footage tiles use lazy-load with LQIP (low-quality image placeholder) blur-up. Product PNG shots preserve transparent backgrounds at all breakpoints.

## Iteration Guide

1. Focus on ONE component at a time; the **bilingual manifesto** and **cinema spec number** are the two highest-signal signatures — get them right first.
2. Reference tokens directly (`{colors.canvas}`, `{typography.display-poetic}`, `{rounded.pill}`).
3. When adding a new feature deep-dive, always use the split-hero pattern (image + text) and give it its own full-viewport section.
4. Keep spec numbers under one page's control — no more than 4 cinema-scale numbers per full page or the argument diffuses.
5. Body copy defaults to `{typography.body-md}` 16px; poetic-tech copy uses `{typography.body-poetic}` 18px weight 300.
6. When in doubt about tone, ask: "would an Apple product page do this, if Apple made an aerial drone?" If yes, ship. If it feels like a Kickstarter tech product page, revise.
7. Never break the mono-product concentration — every added section must serve the A1 story. If a new content type doesn't fit, it belongs on antigravity.tech/press or antigravity.tech/support, not the home page.
