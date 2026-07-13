---
version: alpha
name: PanoX-LabPano-Inspired-design-analysis
description: An inspired interpretation of PanoX (全景时光) / LabPano (圆周率科技) — a Chinese panoramic-imaging brand whose home page carries three product lines in parallel (consumer VR-vlog cameras, professional 8K panoramic cameras, and industrial digital-twin solutions) and whose design language is more literary and brand-narrative-heavy than any peer in the drone/camera category. The visual system is anchored on a signature deep-blue accent (`#1E5AA8` — sky-into-deep-sea) + near-black ink (`#111111`) + pure white canvas, with restrained mid-weight sans-serif typography and a distinctly "China-brand-storytelling" copy voice ("Break through thorns and grow towards the sun", "Born at dawn, walking on the waves"). Structural signatures include: a **four-product hero-parallel banner stack** (PanoX V2 / PilotPano / PilotEra / PilotOne) that gives each consumer-and-pro model equal visual weight, a **"Life enthusiast" scenario-tag row** (Life vlog / Dogs Kids & Family / Speed and passion) that acts as content-marketing bridge between products and use cases, a **PanoX APP cloud-editing feature block** that positions the software ecosystem as first-party integrated, and — most distinctively — the **"Brand born from stories" four-milestone brand-timeline block** with headline dates (2020 破局 / 2022 万米深潜 / 嫦娥 VR / 火神山医院援建) that translates PanoX's technical portfolio into a nationalist-technology narrative. This DESIGN.md documents the consumer-facing site (`panox.com`) and captures the pattern that distinguishes PanoX from Insta360 (its main competitor): PanoX leans into brand-story-as-differentiation, Insta360 leans into product-story-as-differentiation.

> Source: raw observation + category inference (2026-07-13). Palette (`#1E5AA8` blue + `#111111` + white), 4-product hero-parallel banner, three-line product portfolio (consumer / pro / industrial), literary copy voice, and the 4-milestone brand-story timeline (2020 破局 / 2022 万米深潜 / 嫦娥 VR / 火神山医院) all directly observed on `panox.com`. Fine-grained tokens (spacing scale, elevation, hairline weights, blue-usage rules, VR-preview interaction details) are inferred from the observed structure and Chinese-brand-storytelling-panoramic-camera category conventions (Insta360 / Kandao / Trisio reference patterns).

colors:
  primary: "#1E5AA8"
  primary-hover: "#194a8b"
  primary-press: "#123a6e"
  primary-soft: "#eaf1fb"
  primary-tint: "#d4e2f2"
  accent-horizon: "#4a7ec7"
  ink: "#111111"
  ink-secondary: "#2c2c2c"
  ink-mute: "#5a5a5a"
  ink-mute-2: "#8a8a8a"
  on-ink: "#ffffff"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f7f8fb"
  canvas-blue: "#eaf1fb"
  canvas-story: "#0f2540"
  canvas-story-lift: "#173254"
  hairline: "#e5e9ef"
  hairline-strong: "#c9d1dc"
  status-ok: "#0a7a3b"
  tag-new: "#e63946"

typography:
  display-xxl:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'HarmonyOS Sans SC', 'Inter Display', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.4px
  display-xl:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter Display', system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -1.0px
  display-lg:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter Display', system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.6px
  display-literary:
    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'PingFang SC', serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 2px
  display-eng-serif:
    fontFamily: "'PT Serif', 'Georgia', 'Source Serif Pro', serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0.4px
    fontStyle: italic
  heading-lg:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter', system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.2px
  heading-md:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  heading-sm:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 1.0px
    textTransform: uppercase
  body-lg:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-md:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-narrative:
    fontFamily: "'PingFang SC', 'Noto Serif SC', system-ui, serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: 0.4px
  spec-num-lg:
    fontFamily: "'Inter Display', 'SF Pro Display', system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -1.5px
    fontFeature: tnum
  spec-num-md:
    fontFamily: "'Inter Display', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.4px
    fontFeature: tnum
  eyebrow:
    fontFamily: "'Inter', 'PingFang SC', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.4px
    textTransform: uppercase
  button-md:
    fontFamily: "'PingFang SC', 'Noto Sans SC', 'Inter', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.4px
  timeline-date:
    fontFamily: "'Inter Display', system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -0.6px
    fontFeature: tnum
  caption:
    fontFamily: "'PingFang SC', 'Inter', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  micro:
    fontFamily: "'PingFang SC', 'Inter', system-ui, sans-serif"
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
  sm: 6px
  md: 10px
  lg: 16px
  pill: 9999px

elevation:
  0: "none"
  1: "0 1px 3px rgba(30,90,168,0.06)"
  2: "0 8px 24px rgba(30,90,168,0.10)"
  3: "0 24px 60px rgba(15,37,64,0.20)"
  vr-glow: "0 0 60px rgba(30,90,168,0.24)"

animations:
  banner-slide:
    duration: 700ms
    easing: cubic-bezier(0.16, 1, 0.3, 1)
  vr-orbit:
    duration: 20000ms
    easing: linear
  timeline-reveal:
    duration: 900ms
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
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  card-product-hero:
    background: "{colors.canvas-soft}"
    padding: 32px
    rounded: "{rounded.md}"
    hoverElevation: "{elevation.2}"
  card-timeline-story:
    background: "{colors.canvas-story-lift}"
    textColor: "{colors.on-ink}"
    padding: 40px
    rounded: "{rounded.md}"
---

## Overview

PanoX (全景时光) / LabPano (圆周率科技) sits in a niche that no other brand in this study occupies cleanly: **panoramic + digital-twin technology sold across consumer, professional, and industrial buyers simultaneously, framed as a Chinese-technology brand-storytelling narrative**. The home page must simultaneously introduce the consumer 5.7K vlog camera (PanoX V2), the professional 8K panoramic camera (PilotEra), and the outdoor/industrial-inspection camera (PilotOne) — while also carrying an unusually literary brand-story block that positions PanoX alongside China's aerospace ambitions (嫦娥 VR project) and pandemic-response infrastructure (火神山 Hospital construction documentation).

The canvas is `{colors.canvas}` (`#ffffff`) with a warm-cool secondary `{colors.canvas-soft}` (`#f7f8fb`) and a brand-blue tint `{colors.canvas-blue}` (`#eaf1fb`) for atmospheric bands. Text is `{colors.ink}` (`#111111`) — a hair softer than pure black. Voltage comes from a single signature — **PanoX Blue** `{colors.primary}` (`#1E5AA8`) — a deep-sea-into-sky blue that reads simultaneously scientific-precision and horizon-atmospheric. Blue is used on primary CTAs, on section eyebrow inline accents, on VR-preview glow around the product hero, and — critically — as the full-bleed background of the brand-story timeline block.

Typography does subtle work. The default sans stack is **PingFang SC / Noto Sans SC** at weight 500 for display and 400 for body, at moderate sizes (72px hero max — well below GoPro's 128px or Antigravity's 120px). But PanoX uniquely uses **serif type in two places**:
1. **`display-literary`** — Noto Serif SC at 44px weight 400 with letter-spacing 2px — reserved exclusively for the brand-story block's Chinese literary headings (e.g. "破局重生" / "深海之光" / "苍穹之下").
2. **`display-eng-serif`** — PT Serif italic at 36px — reserved for the poetic English brand-narrative subheads that pair with each Chinese literary heading ("Born at dawn, walking on the waves" / "Break through thorns and grow towards the sun").

This dual-serif treatment is what makes PanoX read as more literary than any peer brand in this study.

The hero is a **four-product parallel banner stack** (PanoX V2 / PilotPano / PilotEra / PilotOne). Unlike GoPro's three-camera-competitive stack or DJI's rotating carousel, PanoX shows four products with equal visual weight — the message is "we have a product for every use case." Each banner: full-width strip on `{colors.canvas-soft}`, product hero shot on left, product name + spec highlight + one-line poetic tagline + dual CTA on right.

Below the fold, the site follows a distinctive rhythm:
1. **Life enthusiast scenario-tag row** — 3 tags (Life vlog / Dogs Kids & Family / Speed and passion) that filter content examples.
2. **PanoX APP cloud-editing block** — first-party software ecosystem push.
3. **Brand born from stories 4-milestone timeline** — the literary block with 2020 破局 / 2022 万米深潜 / 嫦娥 VR / 火神山医院 as milestones.
4. **PiPlay VR / digital-twin ecosystem gateway** — reserved for professional/industrial buyers.

**Key Characteristics:**
- **Deep-blue accent, not consumer-orange or tech-cyan.** `{colors.primary}` (`#1E5AA8`) reads as scientific-atmospheric — signals precision and horizon simultaneously.
- **Four-product parallel banner stack, not three.** Consumer + pro + outdoor + specialized — four vertical strips in canonical order. Equal visual weight signals "portfolio matters more than flagship."
- **Serif type for brand narrative.** PanoX is the only brand in this study that uses serif type as a functional register — reserved for the literary brand-story block.
- **Milestone-timeline as brand differentiation.** The 2020 破局 / 2022 万米深潜 / 嫦娥 VR / 火神山医院 four-card timeline is the brand's strongest differentiation vs Insta360. Never omit.
- **VR-preview glow around product-hero renders.** A subtle blue radial glow (`{elevation.vr-glow}`) behind the PilotEra product shot — signals 360°/VR affordance visually.
- **Chinese + English poetic pairing.** Every literary heading pairs Chinese literary phrase (Noto Serif SC) with English italic poetic subhead (PT Serif italic).
- **First-party APP as ecosystem signal.** PanoX APP + PiPlay VR are introduced as first-party integrated software — signals "we own the whole stack."
- **6px rounded corners on buttons.** Not zero (industrial), not pill (consumer) — 6px is PanoX's precision+approachability balance.

## Colors

> **Source pages:** `panox.com/` (home, 4-product banner + timeline), `panox.com/en/products/PanoxV2` (consumer product), `panox.com/en/products/PilotEra` (pro product), `labpano.com` (parent-company site with more industrial content).

### Brand & Accent
- **Primary** (`{colors.primary}` — `#1E5AA8`): Every primary CTA, wordmark accent, section-eyebrow bar, brand-story block background. Deep saturated blue — reads scientific.
- **Primary Hover** (`{colors.primary-hover}` — `#194a8b`): Darker blue on hover.
- **Primary Press** (`{colors.primary-press}` — `#123a6e`): Pressed state.
- **Primary Soft** (`{colors.primary-soft}` — `#eaf1fb`): Subtle blue tint used as callout-band background (e.g. "Life enthusiast" scenario row).
- **Primary Tint** (`{colors.primary-tint}` — `#d4e2f2`): Slightly deeper blue tint for spec-highlight backgrounds.
- **Accent Horizon** (`{colors.accent-horizon}` — `#4a7ec7`): Mid-blue used only in gradient meshes and VR-glow layer. Never a text or button color.
- **Tag New** (`{colors.tag-new}` — `#e63946`): The rare "NEW" launch badge. Used at most 2 per page.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f7f8fb`): Cool-neutral secondary — used for 4-product parallel banner strips and card grids.
- **Canvas Blue** (`{colors.canvas-blue}` — `#eaf1fb`): Blue-tinted atmospheric band — used for the "Life enthusiast" scenario row and the PanoX APP block.
- **Canvas Story** (`{colors.canvas-story}` — `#0f2540`): The deep-blue-navy background for the brand-story timeline block. This is the ONE dark-band moment on the page.
- **Canvas Story Lift** (`{colors.canvas-story-lift}` — `#173254`): Elevated timeline cards on the story block.
- **Hairline** (`{colors.hairline}` — `#e5e9ef`): 1px card border, cool-tinted.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c9d1dc`): Emphasized divider.

### Text
- **Ink** (`{colors.ink}` — `#111111`): Default body color.
- **Ink Secondary** (`{colors.ink-secondary}` — `#2c2c2c`): Sub-heading.
- **Ink Mute** (`{colors.ink-mute}` — `#5a5a5a`): Helper copy, poetic subhead body.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#8a8a8a`): Fine metadata.
- **On Ink / On Primary**: `#ffffff` on all dark backgrounds.

### Semantic
- **Status OK** (`{colors.status-ok}` — `#0a7a3b`): Rare "in stock" / VR-connection-ready indicator in the buy flow.
- **Tag New** (`{colors.tag-new}` — `#e63946`): NEW / 新品 launch badges.

## Typography

### Font Family

PanoX ships a dual-register type system: **sans for product and UI, serif for brand narrative**.

- Sans: **PingFang SC / Noto Sans SC** at weight 500 for display, 400 for body. Latin fallback: **Inter / Inter Display / SF Pro Display**. This carries the everyday commerce and product surface.
- Serif: **Noto Serif SC / Source Han Serif SC** for Chinese literary headings; **PT Serif / Georgia italic** for English poetic subheads. This is used ONLY in the brand-story timeline block and in the mission-statement callout — the two moments the brand explicitly leans into narrative rather than product.

The signature typographic move is the **Chinese-literary + English-italic-poetic pairing** in the brand-story timeline:

> **破局重生**  
> *Break through thorns and grow towards the sun*

The Chinese heading uses `display-literary` (Noto Serif SC 44px weight 400, letter-spacing 2px). The English subhead uses `display-eng-serif` (PT Serif italic 36px weight 400, letter-spacing 0.4px). The 2px Chinese tracking evokes classical vertical-scroll typography; the English italic evokes editorial pull-quote.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 72px | 500 | 1.1 | -1.4px | Hero headline "5.7K vlog 360° camera" |
| `{typography.display-xl}` | 56px | 500 | 1.15 | -1.0px | Section opener |
| `{typography.display-lg}` | 40px | 500 | 1.2 | -0.6px | Card title, feature-block title |
| `{typography.display-literary}` | 44px | 400 | 1.4 | 2px | Chinese literary heading in brand-story timeline (Noto Serif SC) |
| `{typography.display-eng-serif}` | 36px | 400 italic | 1.35 | 0.4px | English poetic subhead pairing (PT Serif italic) |
| `{typography.heading-lg}` | 28px | 500 | 1.25 | -0.2px | Card title, section sub-heading |
| `{typography.heading-md}` | 20px | 500 | 1.3 | 0 | Sub-heading, product spec-list title |
| `{typography.heading-sm}` | 15px | 500 | 1.35 | 1.0px | ALL-CAPS section eyebrow |
| `{typography.body-lg}` | 18px | 400 | 1.7 | 0 | Marketing body lead — deliberately loose line-height for literary breathing room |
| `{typography.body-md}` | 15px | 400 | 1.7 | 0 | Default body |
| `{typography.body-narrative}` | 17px | 400 | 1.85 | 0.4px | Serif-body narrative paragraphs in the brand-story block (Noto Serif SC / PingFang SC blend) |
| `{typography.spec-num-lg}` | 64px | 300 | 1.0 | -1.5px | Product spec number ("5.7K", "8K", "6-DoF") |
| `{typography.spec-num-md}` | 32px | 400 | 1.0 | -0.4px | Compact spec number |
| `{typography.eyebrow}` | 12px | 500 | 1.2 | 1.4px | ALL-CAPS eyebrow |
| `{typography.button-md}` | 14px | 500 | 1.0 | 0.4px | Button label — a hair looser tracking than tight sans |
| `{typography.timeline-date}` | 44px | 300 | 1.0 | -0.6px | Timeline year ("2020", "2022") — thin weight, precision |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | Photo credit, spec caption |
| `{typography.micro}` | 11px | 400 | 1.4 | 0 | Legal fine print |

### Principles
- **Serif for narrative, sans for product.** Never mix registers within a single block. The brand-story timeline is exclusively serif; the product surface is exclusively sans.
- **Chinese-literary + English-italic pairing is inviolate.** In the brand-story block, every Chinese heading must have an English italic subhead directly below it, and vice versa.
- **Loose line-height on body copy (1.7–1.85).** PanoX's copy voice needs breathing room — a print-magazine literary rhythm.
- **`tnum` on all spec numbers.** 5.7K / 8K / 6-DoF / 200MB — tabular figures.
- **Chinese tracking at 2px on literary display.** Classic scroll typography rhythm.

### Note on Font Substitutes
Open-source substitution stack:
- Sans display + UI → **Inter Display** (Latin) + **Noto Sans SC** (Chinese) at weight 500.
- Body → **Inter** + **Noto Sans SC** at weight 400.
- Serif brand-story → **Noto Serif SC** (free, Google Fonts) at weight 400 with 2px letter-spacing. English serif italic: **PT Serif Italic** or **Source Serif Pro Italic** at 400.
- Spec numbers → **Inter Display** at weight 300 with `font-variant-numeric: tabular-nums`.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px · `{spacing.huge}` 80px · `{spacing.giant}` 128px.
- **Section padding**: 80–128px vertical. Story block gets 128px top and bottom padding.
- **Card internal padding**: 32px on product-hero cards; 40px on timeline-story cards.

### Grid & Container
- 12-column grid, **1360px content max-width** on wide, 1200px default, 24–32px gutters.
- Four-product parallel banner stack: 4 vertical strips at 100% width, each 480–560px tall (or full-viewport 100vh on desktop wide).
- Timeline block: 4-up on desktop, 2-up on tablet, 1-up on mobile.
- Life-enthusiast scenario row: 3-up on desktop, horizontal-swipe on mobile.

### Whitespace Philosophy
PanoX's whitespace is **literary-generous** — closer to a print-magazine spread than to a commerce site. Body-copy line-height defaults to 1.7 (higher than most peers at 1.5–1.6), and section padding stays in the 80–128px band. Density is a sin in the brand-story block; product-page density can tighten.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface |
| 1 | `{elevation.1}` (0 1px 3px, blue-tinted) | Card resting state — the shadow itself is blue-tinted for atmospheric consistency |
| 2 | `{elevation.2}` (0 8px 24px, blue-tinted) | Card-hover lift |
| 3 | `{elevation.3}` (0 24px 60px, story-navy tinted) | Modal / overlay |
| vr-glow | `{elevation.vr-glow}` (0 0 60px rgba(30,90,168,0.24)) | Radial glow behind PilotEra/PilotOne product renders — signals 360°/VR affordance |

### Decorative Depth
PanoX's depth medium is **blue-tinted glow around product renders**. When a product photograph is a 360-camera (PilotEra, PilotOne, PanoX V2), the render sits on `{colors.canvas-soft}` with a radial-gradient behind at `{colors.primary}` 24% opacity blurred 60px — a subtle "this is a panoramic device" visual cue. Traditional box-shadow is otherwise quiet.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero photography, banner-strip photo edges |
| `{rounded.xs}` | 2px | Spec chip |
| `{rounded.sm}` | 6px | **All buttons.** Slightly softer than DJI's 4px — PanoX's approachability |
| `{rounded.md}` | 10px | Product-hero cards, timeline-story cards |
| `{rounded.lg}` | 16px | Rare feature-showcase card |
| `{rounded.pill}` | 9999px | Scenario-tag chips ("Life vlog", "Dogs Kids & Family") |

### Photography Geometry
PanoX's photography is **panoramic + narrative-scene** dual-mode. Consumer product shots (PanoX V2) are lifestyle stills — family-with-camera, dog-vlogging POV. Professional product shots (PilotEra, PilotOne) are technical isolates with the blue VR-glow behind. Brand-story timeline photography is documentary — deep-sea diver, aerospace-mission-control, hospital-construction-site — reproduced with a subtle blue color-grading that unifies the four different documentary sources into a single atmospheric family.

## Components

### Buttons

**`button-primary`** — the dominant "Buy now" / "Learn more" CTA.
- Background `{colors.primary}` (`#1E5AA8`), text `{colors.on-primary}`, type `{typography.button-md}` (14px weight 500, letter-spacing 0.4px), padding `12px 24px`, rounded `{rounded.sm}` 6px.
- Hover: background `{colors.primary-hover}`.
- Pressed: `{colors.primary-press}`.

**`button-secondary`** — outline alternative.
- Background transparent, text `{colors.primary}` (blue), 1px solid `{colors.primary}` border, same geometry.
- Hover: fill inverts to `{colors.primary}` background + white text.

**`button-on-story`** — CTA on `{colors.canvas-story}` (dark navy) background.
- Background `{colors.canvas}` (white), text `{colors.primary}` (blue), same 6px radius. Hover: shift to `{colors.primary}` bg with white text.

**`text-link-arrow`** — inline "了解更多 →" link.
- Text `{colors.primary}` (blue) at `{typography.body-md}`, arrow inline. Hover: darker blue + arrow shifts 4px right.

### Cards & Containers

**`card-product-hero`** — the 4-product parallel banner tile (PanoX V2 / PilotPano / PilotEra / PilotOne).
- Background `{colors.canvas-soft}`, padding 32px, rounded `{rounded.md}` 10px.
- Layout: 50/50 split (product hero shot on one side with VR-glow behind, text stack on the other).
- Text stack: eyebrow (product line — "PANOX V2" ALL-CAPS) → product name in `{typography.display-lg}` → spec highlight in `{typography.spec-num-lg}` ("5.7K", "8K") → one-line poetic tagline → dual CTA (`text-link-arrow` "Learn more" + `button-primary` "Buy now").

**`card-scenario-tag`** — the "Life enthusiast" scenario tile.
- Background transparent (on `{colors.canvas-blue}` band), 1px `{colors.primary}` border, padding `16px 24px`, rounded `{rounded.pill}` (fully pill).
- Contains an icon (dog / family / motorbike) + scenario label + "Explore →" text.
- Hover: fill switches to `{colors.primary}` background with white content.

**`card-timeline-story`** — the brand-story timeline milestone card (2020 破局 / 2022 万米深潜 / 嫦娥 VR / 火神山医院).
- Background `{colors.canvas-story-lift}` (`#173254`), text `{colors.on-ink}`, padding 40px, rounded `{rounded.md}` 10px.
- Structure: timeline year in `{typography.timeline-date}` (44px thin weight, blue accent color) → Chinese literary heading in `{typography.display-literary}` → English italic subhead in `{typography.display-eng-serif}` → 2-paragraph body narrative in `{typography.body-narrative}` → documentary photograph at bottom (16:9, blue color-graded).

**`card-app-showcase`** — the PanoX APP cloud-editing feature block.
- Background `{colors.canvas-blue}`, padding 48px, rounded `{rounded.lg}` 16px.
- 2-column layout: phone-frame mockup with app UI on one side + text stack + dual store-download buttons on the other.

### Inputs & Forms

**`text-input`** — standard form field.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `12px 14px`, rounded `{rounded.sm}` 6px, 1px `{colors.hairline-strong}` border.
- Focus: border swaps to `{colors.primary}`.

### Navigation

**`nav-bar`** — top nav.
- Background `{colors.canvas}` with 1px `{colors.hairline}` bottom border. Height 64px desktop, 56px mobile.
- Left: PanoX wordmark + "全景时光" Chinese sub-mark. Middle: nav (Products / Solutions / APP / Stories / Support). Right: language toggle (EN / 中) + shopping-cart icon.

**`product-mega-menu`** — dropdown from Products nav.
- Reveals a 4-column mini-grid of the four product-line thumbnails (PanoX V2 / PilotPano / PilotEra / PilotOne) with mini product renders and one-line specs.

### Pills, Tags, and Chips

**`chip-eyebrow`** — section eyebrow.
- Background transparent, text `{colors.ink-mute}`, type `{typography.eyebrow}` (12px all-caps 1.4px tracking).

**`chip-scenario`** — the "Life enthusiast" horizontal scenario chips.
- Background transparent, 1px `{colors.primary}` border, text `{colors.primary}`, type `{typography.body-md}`, padding `10px 20px`, rounded `{rounded.pill}`.

**`chip-spec-vr`** — the "6-DoF VR" / "180° 3D" spec-highlight chip on pro product cards.
- Background `{colors.primary-soft}`, text `{colors.primary}`, type `{typography.caption}` weight 500, padding `4px 12px`, rounded `{rounded.pill}`.

**`chip-tag-new`** — the "NEW" launch badge.
- Background `{colors.tag-new}`, text white, type `{typography.micro}` all-caps weight 500, padding `2px 6px`, rounded `{rounded.xs}`.

### Signature Components

**Four-Product Parallel Banner Stack** — the primary product-portfolio surface.
- Immediately below the top nav, four vertical banner strips in canonical order: **PanoX V2** (consumer 5.7K vlog) → **PilotPano** (consumer 360) → **PilotEra** (pro 8K) → **PilotOne** (outdoor / industrial).
- Each strip: 100% width, 480–560px tall (or 100vh full-viewport on desktop wide), 50/50 split with product hero + text stack. Alternating photo-left/photo-right for reading rhythm.
- Between strips: no divider — just background contrast (canvas-soft vs canvas) provides separation.
- The four-product-parallel arrangement is the brand's most-important product-navigation pattern. Never collapse to three or expand to five without redesign.

**Life-Enthusiast Scenario-Tag Row** — the content-marketing bridge between products and use cases.
- Full-width band on `{colors.canvas-blue}`. Section title: "Life enthusiast" (`{typography.display-lg}`) + subhead: "Discover moments worth capturing."
- 3-up row of `card-scenario-tag` pill chips: **Life vlog** / **Dogs Kids & Family** / **Speed and passion**. Each chip clicks through to a curated content-example gallery (samples + user submissions).
- On mobile, horizontal-swipe with peek of the next chip.

**PanoX APP Cloud-Editing Feature Block** — the first-party software ecosystem push.
- Full-bleed band on `{colors.canvas-blue}`. Left half: phone-frame mockup with the PanoX APP interface showing a 360°-to-flat transition preview + cloud-sync progress bar; right half: `{typography.display-lg}` "PanoX APP" title + 3-bullet feature list (Auto stitching / Cloud storage / One-tap share) + dual App Store / Google Play download buttons.

**Brand Born From Stories 4-Milestone Timeline** — the brand's most distinctive structural element.
- Full-bleed band on `{colors.canvas-story}` (`#0f2540` deep-navy), 128px vertical padding. This is the ONE dark-band moment on the site.
- Section title: "Brand born from stories" (`{typography.display-xl}` in `{colors.on-ink}`) + subhead: "四个里程碑 · 一份技术信念" in `{typography.body-narrative}` at 60% opacity.
- 4-up grid of `card-timeline-story` cards in chronological order:
  - **2020 · 破局** — *Born at dawn, walking on the waves* — the founding-year documentary of technical breakthrough.
  - **2022 · 万米深潜** — *Break through thorns and grow towards the sun* — deep-sea imaging expedition.
  - **嫦娥 VR** — *A view from the moon* — Chinese lunar-mission VR content collaboration.
  - **火神山医院** — *When speed is a promise* — pandemic-response 24/7 hospital-construction documentation.
- Each card: timeline year (44px thin blue) + Chinese literary heading (44px serif) + English italic subhead (36px PT Serif italic) + 2-paragraph body narrative + documentary photograph (16:9, blue color-graded).
- On mobile, timeline cards collapse to 1-up and become vertically scrollable with a left-side chronological rail indicator.

**PilotEra Product Hero with VR-Glow** — the professional-camera showcase.
- Full-bleed band on `{colors.canvas-soft}`. Centered PilotEra product render (transparent PNG) with a radial-gradient behind at `{colors.primary}` 24% opacity, blurred 60px — the `{elevation.vr-glow}` treatment.
- The glow signals "this device sees in 360°" without needing a diagram.

**PiPlay VR / Digital-Twin Ecosystem Gateway** — the pro/industrial buyer entry point.
- Positioned near the bottom of the page, before the footer. A 2-card row:
  - **PiPlay VR** (consumer VR playback ecosystem) → links to /piplay
  - **数字孪生 Digital Twin** (industrial solutions) → links to /solutions or labpano.com
- Each card: `{colors.canvas-blue}` background, 40px padding, rounded 10px, product/software mockup + heading + one-paragraph pitch + `button-primary` CTA.

**Language Toggle (EN / 中)** — the bilingual site infrastructure.
- Nav-right chip toggles between `panox.com/en/` and `panox.com/`. Copy differs — the Chinese site emphasizes brand-story and China-technology-narrative more heavily; the English site emphasizes product spec and international ecommerce more heavily.

**Dual-Serif Pairing Block** — the typographic signature for narrative moments.
- Any block that uses `display-literary` MUST directly pair it with `display-eng-serif` (or vice versa). Chinese and English serif appear as a single typographic unit. Never render one without the other in narrative blocks.

## Do's and Don'ts

### Do
- Use PanoX Blue `{colors.primary}` (`#1E5AA8`) as the single voltage. Never introduce a secondary chromatic accent.
- Show four products in parallel banner order (consumer → consumer → pro → outdoor). Never three, never five.
- Pair Chinese literary display with English italic-serif subhead in the brand-story block. Never one without the other.
- Include the 4-milestone brand-story timeline (2020 破局 / 2022 万米深潜 / 嫦娥 VR / 火神山医院) as the site's central narrative section.
- Apply the VR-glow (`{elevation.vr-glow}`) behind PilotEra and PilotOne product renders — the visual affordance for 360°/VR.
- Use serif type ONLY in the brand-story block and mission callout. Product surface stays sans.
- Use loose line-height (1.7–1.85) for body copy. Literary breathing room.
- Include EN/中 language toggle. Bilingual is a brand signal.

### Don't
- Don't use serif type on the product surface (product-hero cards, spec pages, buy-flow). Serif is reserved for narrative.
- Don't add a chromatic accent beyond blue. If you need warmth, add photography — not color.
- Don't collapse the 4-milestone timeline to 2 or 3 milestones. The four-story arc is the brand's differentiation from Insta360.
- Don't remove the VR-glow behind pro product renders. It is the visual proof of the panoramic technology.
- Don't shorten the loose line-height. The literary rhythm is core.
- Don't render the brand story on a white background — the deep-navy `{colors.canvas-story}` band is what elevates the block from marketing to narrative.
- Don't skip the English italic subhead in the timeline. Chinese-only reads regional; the pairing signals international scientific ambition.
- Don't use pill buttons for CTAs. Pill is reserved for scenario-tag chips.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | 1360px container, 72px display hero, 4-product banners at 100vh, 4-up timeline |
| Desktop | 1024–1440px | 1200px container, banners at 560px tall, 4-up timeline |
| Tablet | 768–1023px | Display drops to 56px, banners collapse to stacked, timeline 2-up |
| Mobile | < 768px | Display drops to 36–40px, banners fully stacked with photo top / text bottom, timeline 1-up with left rail chronology |

### Touch Targets
- Buttons hit ≥ 44×44px on mobile.
- Scenario pill chips ≥ 44px height.
- Language toggle chip ≥ 40×40px.

### Collapsing Strategy
- Display stair-steps 72 → 56 → 44 → 36px through breakpoints.
- 4-product banner stack always stacks vertically at all breakpoints — the vertical order is the message. Only the internal 50/50 split collapses to stacked on tablet.
- Timeline 4-up → 2-up → 1-up with chronological left-rail on mobile.
- Scenario-tag row 3-up → horizontal-swipe on mobile with peek.

### Image Behavior
Documentary timeline photographs use consistent blue color-grading LUT to unify the four different documentary sources visually. Product renders use transparent-background PNGs with baked-in floor shadow so they can be recolored/re-backgrounded. Life-enthusiast scenario tags use compressed WebP for the icon glyphs at 24×24.

## Iteration Guide

1. Focus on ONE component at a time; the **4-milestone brand-story timeline** and the **four-product parallel banner stack** are the two highest-signal signature elements — get them right first.
2. Reference tokens directly (`{colors.primary}`, `{typography.display-literary}`, `{rounded.sm}`).
3. When adding a new milestone to the brand-story timeline, first draft the Chinese literary heading (4–6 characters), then the English italic subhead (5–10 words). Never publish a milestone with only one of the two.
4. Keep blue as the single accent. If you need a second voltage, use documentary photography color-grading — never introduce a second brand color.
5. Body copy defaults to `{typography.body-md}` 15px with 1.7 line-height. Narrative body upgrades to `{typography.body-narrative}` 17px with 1.85 line-height.
6. When in doubt about tone, ask: "does this feel like a technology company that publishes its own scientific-narrative annual report, or does it feel like a Kickstarter panoramic camera?" PanoX is the annual-report. If it drifts toward Kickstarter, add literary weight.
7. The brand-story timeline is inviolate. Even if internal marketing pushes for a "product-first" home page, keep the 4-milestone block — it is the primary brand differentiation vs Insta360.
8. Serif type is a scarce resource. Never use it for buttons, spec sheets, or product-page copy. Only in narrative and mission moments.
