---
brand: Flywoo
brand_key: flywoo
url: https://www.flywoo.net
category: FPV / Tinywhoop & Micro Drones
platform: Shopline (storefront, CNY-first)
positioning: Warm-orange lifestyle-tech micro-FPV maker with poetic English + Shopline CNY pricing
primary_color: "#F5A623"
secondary_color: "#0A0A0A"
background_color: "#FFFFFF"
accent_color: "#FFF5E6"
typography_stack: [Inter, "Helvetica Neue", "PingFang SC", system-ui, sans-serif]
grid: 12-col storefront (Shopline theme)
personality: [warm, lifestyle-tech, small-and-poetic, CNY-first, community-adjacent]
signature_moves:
  - Warm-orange (#F5A623) accent on clean white — no dark-mode
  - Firefly product family clustering (Firefly 16 / 18 / 20Pro / 25Mini)
  - "One Digital VTX. Two flight experiences." poetic-tech copy voice
  - Rating stars + review count social-proof on every product card
  - Naked GoPro GP13 sub-line chip (partnership acknowledgment)
  - CNY-first pricing display (¥1,699.23 CNY explicit currency)
  - Shopline platform native chrome (cart drawer / wishlist / trust badges)
---

> Source: raw observation `experiments/drone-camera-brands-study/raw/flywoo.json` (1609 bytes) + category inference (2026-07-13). Palette (#F5A623 orange / #FFFFFF), primary product line (Firefly 20PRO 4S / 25MINI 3S / 16 / 18 1S V3 O4 Wide, Flywoo Action Camera V2 Pro, DJI O4 Wide Air Unit, Explorer LR 4 V2), taglines ("Firefly 20PRO 4S & 25MINI 3S" / "One Digital VTX. Two flight experiences." / "Beyond O4 Lite's Vision Limits"), product tags ("New Release" / "Naked Gopro GP13" / "4K/60fps tiny drone"), and CNY pricing (¥1,699.23 CNY) are drawn from the crawl payload. Micro-tokens (exact px / radius / weight) extrapolated from Shopline theme conventions in the FPV micro-drone vertical.

---

## 0. Overview

Flywoo 是 tinywhoop / 微型 FPV 圈里最"生活感"的品牌。它与同价位竞争者最大的差别不是 spec，而是**情绪**：

- **iFlight** 是工程实验室的青-on-暗；
- **RadioMaster** 是老练卖场的红-on-白；
- **Flywoo** 是**温橙-on-白**——一种"周末带出门" 的轻消费气质。

三个核心视觉决策：

1. **Warm Orange `#F5A623`**：不是 iFlight 的电击青，不是 RadioMaster 的警戒红，而是**日落 / 篝火 / 蜂蜜**那档的温橙。它承担一切 accent 任务，但从不喧宾夺主。
2. **Firefly Product Family**：Flywoo 主打的不是单品，而是一个**产品家族**——`Firefly 16 / 18 / 20Pro / 25Mini`。四款尺寸+电池规格的微型穿越机共用一个命名 spine（"Firefly"），像 iPhone SE / mini / Pro / Pro Max 那样构建家族记忆。这是 Flywoo 与"随便命名一堆型号"的白牌工厂的分界线。
3. **Shopline 平台 + CNY-first pricing**：底层是 Shopline（东南亚+中国出海主流电商 SaaS，不是 Shopify），价格默认以 CNY 显示（`¥1,699.23 CNY`），可切换 USD / EUR / GBP。这暗示 Flywoo 的**主战场是中国跨境电商 + 亚太 FPV 玩家**，不是欧美 Amazon 卖家。

标语系统由两组构成：

- **产品级**：`One Digital VTX. Two flight experiences.` — 技术事实的诗性表达
- **情绪级**：`Beyond O4 Lite's Vision Limits` — 突破限制的鼓动感

Flywoo 用**"技术准确 + 语感抒情"** 的组合突围。

---

## 1. Color Tokens

### 1.1 Core palette

```yaml
--fw-orange:            "#F5A623"   # Primary accent — CTA, price highlight, tag chip, new-release badge
--fw-orange-warm:       "#FBB040"   # +8% L, for :hover
--fw-orange-deep:       "#D48916"   # -14% L, for :active
--fw-orange-tint:       "#FFF5E6"   # Section band background, tag chip fill

--fw-ink:               "#0A0A0A"   # Body text, product titles, headers
--fw-ink-soft:          "#333333"   # Subheads, spec labels
--fw-ink-quiet:         "#7A7A7A"   # Meta text (review count, SKU, price prefix "from")

--fw-paper:             "#FFFFFF"   # Page background
--fw-paper-warm:        "#FDFBF7"   # Body / hero background — 略暖白，避免纯白冷感
--fw-hairline:          "#EEEEEE"   # 1px card borders, dividers

--fw-rating-gold:       "#FBB040"   # 评价星星色，与 orange-warm 同调
--fw-rating-empty:      "#E5E5E5"

--fw-sale:              "#E63946"   # 促销价（罕用，Flywoo 不做大规模 sale）
--fw-cny-badge:         "#F5A623"   # CNY 价格标签背景
```

### 1.2 Semantic mapping

```yaml
button.primary.bg:      var(--fw-orange)
button.primary.text:    var(--fw-ink)             # 黑字橙底，高对比但不刺眼
button.secondary.bg:    transparent
button.secondary.text:  var(--fw-ink)
button.secondary.border: 1px solid var(--fw-ink)

price.regular:          var(--fw-ink)
price.currency-suffix:  var(--fw-ink-quiet)       # "CNY" 后缀灰
price.from-prefix:      var(--fw-ink-quiet)       # "from" 前缀灰

tag.newRelease:         var(--fw-orange)          # 橙底黑字
tag.nakedGopro:         var(--fw-ink)             # 黑底白字
tag.tinyDrone:          var(--fw-orange-tint)     # 极浅橙底 + 橙字
tag.digitalVtx:         "#4A90E2"                 # 蓝色，与橙分离

rating.filled:          var(--fw-rating-gold)
rating.empty:           var(--fw-rating-empty)
review-count:           var(--fw-ink-quiet)
```

### 1.3 Do & Don't

- **DO** 用 `#F5A623` 只做 accent，屏占比 ≤ 12%（比 iFlight 允许的 5% 高，因为 Flywoo 是"温暖品牌"，橙需要更多在场）
- **DO** section band 用 `#FFF5E6`（极浅橙底），做温度节奏
- **DO** 用 `#FDFBF7`（暖白）而不是纯白 `#FFFFFF` 作为 body 背景——暖白是 Flywoo 的呼吸底色
- **DON'T** 用 `#FF6600` 或更饱和的橙——那是 Home Depot 工具箱的感觉，不是 Flywoo lifestyle
- **DON'T** 引入 dark-mode——Flywoo 没有 dark 版本，永远白+橙
- **DON'T** 让橙色覆盖 body 段落（除了 accent 文本高亮）

---

## 2. Typography

### 2.1 Family

```yaml
--font-sans:            "Inter", "Helvetica Neue", "PingFang SC", system-ui, sans-serif
--font-serif:           "Playfair Display", "Noto Serif SC", Georgia, serif   # 极少使用，仅 hero tagline
--font-mono:            "JetBrains Mono", "SF Mono", ui-monospace              # 价格与 SKU
```

**Shopline 默认 Inter**：Flywoo 沿用平台默认 Inter，未做字体替换。这是 lifestyle-tech 微品牌的常见选择——干净、免版权、中文回退到 PingFang SC 时无缝。

**极偶尔用 Playfair Display**：只在 hero 大标语的少数场景（约 3-5 处）用来突出情绪。日常章节头和产品名都是 Inter。

### 2.2 Type scale

```yaml
# Hero
hero-headline:          { size: 64px, weight: 700, tracking: -0.02em, leading: 1.08 }
hero-headline-mobile:   { size: 36px, weight: 700, tracking: -0.01em, leading: 1.12 }
hero-subheadline:       { size: 24px, weight: 400, leading: 1.4, color: var(--fw-ink-soft) }
hero-eyebrow:           { size: 12px, weight: 600, tracking: 0.14em, transform: uppercase, color: var(--fw-orange) }
hero-poetic:            { family: serif, size: 32px, weight: 400, tracking: 0, leading: 1.35, italic: true, color: var(--fw-ink) }

# Section
section-title:          { size: 36px, weight: 700, tracking: -0.01em, leading: 1.2 }
section-eyebrow:        { size: 12px, weight: 600, tracking: 0.14em, transform: uppercase, color: var(--fw-orange) }

# Product card
product-title:          { size: 18px, weight: 600, tracking: 0, leading: 1.35 }
product-subtitle:       { size: 14px, weight: 500, color: var(--fw-ink-soft) }
product-price:          { family: mono, size: 20px, weight: 600 }
product-price-currency: { family: mono, size: 12px, weight: 500, color: var(--fw-ink-quiet) }
product-price-from:     { size: 12px, weight: 500, color: var(--fw-ink-quiet), transform: lowercase }

# Rating
rating-star-size:       14px
rating-count:           { family: sans, size: 12px, weight: 500, color: var(--fw-ink-quiet) }

# Body
body-lg:                { size: 18px, weight: 400, leading: 1.6 }
body:                   { size: 16px, weight: 400, leading: 1.65 }
body-sm:                { size: 14px, weight: 400, leading: 1.55 }

# Tag / chip
tag:                    { size: 11px, weight: 600, tracking: 0.06em, transform: uppercase }
```

### 2.3 Rules

- **Hero headline 64px 而不是 iFlight 的 84px 或 GoPro 的 128px**——Flywoo 的气质是"轻盈"不是"震撼"，字号要克制。
- **产品价格必用 mono**：`¥1,699.23 CNY` — 数字用 mono，货币后缀 "CNY" 也用 mono 但小一号。
- **"from" 前缀**：低配 SKU 起价前加 `from ¥1,699.23 CNY`，"from" 是 lowercase 12px muted——这是 Shopline 电商的价格阶梯表达。
- **Rating star + count**：产品卡永远显示 5 星 + 数字 review 计数（如 `★★★★★ (24)`）——这是 Flywoo 与 iFlight 最大的信息呈现差别（iFlight 不显示 rating，纯 spec；Flywoo 显示 rating，重社交证明）。
- **中英混排**：中文用 PingFang SC，字重与英文相同，不做 heavy 中文加粗。
- **Serif 使用禁忌**：Playfair Display 仅出现在**hero-poetic** slot，禁止用于任何 body / meta。

---

## 3. Layout & Grid

### 3.1 Container

```yaml
--container-max:        1440px
--container-comfort:    1200px       # 比 iFlight 窄，更聚焦
--container-narrow:     880px
--gutter-desktop:       24px
--gutter-tablet:        20px
--gutter-mobile:        16px
--section-py-lg:        96px
--section-py-md:        72px
--section-py-sm:        48px
```

### 3.2 Grid

```yaml
columns-desktop:        12
columns-tablet:         8
columns-mobile:         4
gap:                    24px
```

### 3.3 Homepage sequence

```
1. Sticky top nav                    — 64px, 白底 + 底部 1px hairline
2. Hero carousel                     — 3-5 张 slide，1440×540，产品 lifestyle + hero-poetic tagline
3. Featured Products                 — 3-4 列产品网格，每卡带 rating + review count
4. What's New                        — 4-6 张最新产品卡，带 "NEW RELEASE" orange chip
5. Product Family: Firefly           — 横排 4 张卡（Firefly 16 / 18 / 20Pro / 25Mini）
6. Video / lifestyle band            — 全宽 lifestyle 视频，poetic tagline 覆盖
7. Trust icons row                   — 4 图标（Free Shipping / Secure Payment / Support / Warranty）
8. Newsletter subscribe              — 白底暖底 orange CTA
9. Footer                            — 4 列 + 社交 icon + Shopline "Powered by" 小字
```

### 3.4 Hero grid

```yaml
hero-height:            540px desktop / 480px mobile
hero-media:             right 55%, product lifestyle photo or short video loop
hero-content:           left 45%, padded var(--gutter-desktop)
hero-content-vertical:  center-aligned
```

---

## 4. Elevation & Depth

Flywoo 是**轻阴影**系统——不像 iFlight 用 cyan glow，也不像 RadioMaster 用零阴影。它用**微暖阴影**表达"这个东西是实体的、但很轻"。

```yaml
--elev-0: none
--elev-1: 0 2px 8px rgba(245,166,35,0.06), 0 1px 3px rgba(0,0,0,0.04)     # 卡片默认微微浮起
--elev-2: 0 12px 32px -8px rgba(245,166,35,0.12), 0 4px 12px rgba(0,0,0,0.06)   # hover 提升
--elev-3: 0 24px 48px -16px rgba(0,0,0,0.15)                              # drawer / modal
--elev-4: 0 32px 80px -24px rgba(0,0,0,0.2)                               # 全屏 modal
```

**关键细节**：`--elev-1` 里带一层 6% 橙色阴影 tint——这是 Flywoo 卡片"发光"的秘密，让白底不冷。任何静态卡片都应用 `--elev-1`，hover 时升级 `--elev-2` + `translateY(-4px)`。

---

## 5. Shape & Radius

```yaml
--radius-none:   0px      # 极少使用
--radius-xs:     4px      # tag chip
--radius-sm:     8px      # 输入框、副 CTA
--radius-md:     12px     # 主 CTA、产品卡
--radius-lg:     20px     # hero card、feature banner
--radius-xl:     32px     # oversized CTA (newsletter subscribe box)
--radius-full:   999px    # pill button, avatar
```

**核心倾向**：Flywoo 是**大圆角**派——从 `12px` 起步，比 iFlight 的 `8px` 更软，比 DJI Neo 的 `24px` 略克制。这是 lifestyle-tech 消费品的标准圆角语汇：**够软、够可爱、但不 Barbie**。

Tag chip 用 `4px` 相对小圆角——是全站唯一"有点硬"的形状，用于强调"这是分类标签，不是按钮"。

---

## 6. Iconography

```yaml
icon-set:               Feather Icons + custom outlined
icon-stroke:            1.5px
icon-color-default:     var(--fw-ink-soft)
icon-color-active:      var(--fw-orange)
icon-size-nav:          20px
icon-size-inline:       16px
icon-size-trust:        40px
icon-size-social:       20px
```

### 6.1 Trust-icon row

4 图标（比 RadioMaster 少 2 个 / 比 iFlight 多 1 个），Flywoo 的信任表达节奏：

1. **Free Shipping** — 快递箱线条 icon + `FREE SHIPPING WORLDWIDE` (Shopline 常见承诺)
2. **Secure Payment** — 盾牌 icon + `SECURE CHECKOUT`
3. **24/7 Support** — 头戴耳机 + `24/7 CUSTOMER SUPPORT`
4. **1-Year Warranty** — 徽章 + `1-YEAR WARRANTY`

**Grid**：4 列平均，desktop 每列 `1fr`，图标居中，图标下方标签 `12px letter-spacing 0.06em uppercase`。图标 stroke 用 `--fw-orange` 而不是黑——温度感的来源。

### 6.2 Rating stars

自定义 SVG 5 星，`14px` × 5，颜色 `--fw-rating-gold`。半星支持（用 CSS clip-path 表达）。星星右侧 `4px` 间距后跟 review count `(24)`。

---

## 7. Components

### 7.1 Buttons

```yaml
button.primary:
  bg:            var(--fw-orange)
  text:          var(--fw-ink)
  padding:       14px 32px
  radius:        12px
  font:          14px / 600 / uppercase / tracking 0.06em
  hover:         bg var(--fw-orange-warm), transform translateY(-2px)
  active:        bg var(--fw-orange-deep)
  disabled:      bg #E5E5E5, text var(--fw-ink-quiet)

button.secondary:
  bg:            transparent
  text:          var(--fw-ink)
  border:        1.5px solid var(--fw-ink)
  padding:       12.5px 30.5px
  radius:        12px
  hover:         bg var(--fw-ink), text #FFFFFF

button.ghost:
  bg:            transparent
  text:          var(--fw-ink-soft)
  padding:       10px 16px
  hover:         text var(--fw-orange)

button.pill:
  bg:            var(--fw-orange-tint)
  text:          var(--fw-orange-deep)
  padding:       8px 20px
  radius:        999px
  font:          13px / 600
```

### 7.2 Product Card

**Flywoo 的产品卡是全站视觉核心**——它比其他 FPV 品牌多两个东西：**rating stars + review count**，还有 **CNY 价格 + from 前缀**。

```
┌─────────────────────────────────────┐
│  [NEW RELEASE]                      │  ← 左上角橙色 chip
│                                     │
│         [产品渲染图]                 │
│                                     │
├─────────────────────────────────────┤
│  Firefly 20Pro 4S                   │  ← 产品名 18/600
│  Digital VTX Tinywhoop              │  ← 副标题 14/500
│                                     │
│  ★★★★★ (24)                          │  ← rating stars + review count
│                                     │
│  from ¥1,699.23 CNY                 │  ← from 12px muted + 20px mono price + CNY 12px mono
│                                     │
│  [ADD TO CART]                      │  ← primary button, full-width
└─────────────────────────────────────┘
```

尺寸：`300×480`，图片区 `300×280`，内容区 `200px`。卡片带 `--elev-1`。Hover 时 `--elev-2` + 4px lift。

### 7.3 Hero slide

```yaml
size:                   1440×540 / 375×480 mobile
layout:                 45% content left | 55% media right
content-eyebrow:        `NEW RELEASE` orange uppercase 12/600
content-headline:       64/700 tight tracking
content-poetic:         serif Playfair Display 32/400 italic (optional slot)
content-sub:            22/400 muted
content-cta:            primary orange button `SHOP NOW` + secondary `LEARN MORE`
media:                  product lifestyle photo (outdoor / hand-held / flight in nature)
```

### 7.4 Firefly Product Family Grid

**这是 Flywoo 独有的信息组件**——四款 Firefly 系列横排：

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │  │          │
│  [16]    │  │  [18]    │  │  [20Pro] │  │  [25Mini]│  ← 产品渲染图
│          │  │          │  │          │  │          │
│  Firefly │  │  Firefly │  │  Firefly │  │  Firefly │
│  16      │  │  18      │  │  20Pro   │  │  25Mini  │
│          │  │          │  │          │  │          │
│  1S · 65g│  │  1S · 75g│  │  4S · 145g│ │  3S · 115g│  ← 电池 + 重量 spec
│          │  │          │  │          │  │          │
│  from    │  │  from    │  │  from    │  │  from    │
│  ¥899    │  │  ¥1,099  │  │  ¥1,699  │  │  ¥1,499  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

**规则**：

1. 4 张卡横排（tablet 2×2，mobile 单列滑动）
2. 每张卡尺寸 `280×420`
3. 产品名保持 `Firefly` + 型号数字组合（不是 `FIREFLY 20 PRO 4S`）
4. Spec 是极简两项：**电池 S 数 + 起飞重量**（这两个是 tinywhoop 玩家最关心的）
5. 价格用 `from ¥XXX` 起价表达（各版本 VTX / camera 差异导致价格档次）
6. 卡片顶部有极窄的 orange band（4px 高）作为家族标识

### 7.5 What's New Grid

```yaml
grid:                   4 cols × 2 rows (desktop) / 2 cols (tablet) / 1 col (mobile)
card:                   300×420, same as ProductCard
sort:                   最新 released_at desc
badge:                  `NEW RELEASE` orange chip on top-left
```

### 7.6 Poetic Tagline Overlay

在 hero 或 lifestyle video band 上覆盖的诗性文案层：

```
Background: full-bleed lifestyle image or looping video
Overlay: bottom 40% linear-gradient(rgba(0,0,0,0)→rgba(0,0,0,0.6))
Content:
  eyebrow (orange uppercase 12/600)
  poetic (serif Playfair Display 32/400 italic white)
  sub (16/400 muted white)
  CTA (primary orange button)
```

诗性文案示例：

- `"One Digital VTX. Two flight experiences."`
- `"Beyond O4 Lite's Vision Limits."`
- `"Small drone. Big sky."`

**规则**：poetic 文本必须 serif italic，必须 32px（不是 hero-headline 的 64px），必须**独占一行不换行**（超出则用 `...` 截断而不是换行）。

### 7.7 Tag Chips

```yaml
chip.new-release:
  bg: var(--fw-orange)
  text: var(--fw-ink)
  padding: 4px 10px
  radius: 4px
  font: 11px / 600 / uppercase / tracking 0.06em

chip.naked-gopro:
  bg: var(--fw-ink)
  text: #FFFFFF
  padding: 4px 10px
  radius: 4px
  font: 11px / 600 / uppercase / tracking 0.06em

chip.tiny-drone:
  bg: var(--fw-orange-tint)
  text: var(--fw-orange-deep)
  padding: 4px 10px
  radius: 4px
  font: 11px / 600 / uppercase / tracking 0.06em

chip.digital-vtx:
  bg: rgba(74,144,226,0.12)
  text: #4A90E2
  padding: 4px 10px
  radius: 4px
  font: 11px / 600 / uppercase / tracking 0.06em
```

一个产品卡最多 2 个 chip，chip 之间 4px 间距。

### 7.8 CNY Price Row

Flywoo 独有的价格显示样式：

```html
<span class="price-row">
  <span class="price-from">from</span>
  <span class="price-value">¥1,699.23</span>
  <span class="price-currency">CNY</span>
</span>
```

```yaml
price-row:
  display:       inline-flex
  align-items:   baseline
  gap:           4px
  font-family:   var(--font-mono)

price-from:      { size: 12px, weight: 500, color: var(--fw-ink-quiet), transform: lowercase }
price-value:     { size: 20px, weight: 600, color: var(--fw-ink) }
price-currency:  { size: 12px, weight: 500, color: var(--fw-ink-quiet) }
```

**规则**：CNY 后缀必须显示，即使切换到 USD 也保留货币符号 + 后缀（如 `$249.99 USD`）——Flywoo 强调"我知道我卖到哪个国家的哪种货币"，是跨境电商的自我意识。

---

## 8. Signature Components（Flywoo-only）

### 8.1 Warm-Orange Lifestyle Accent

**Anatomy**：`#F5A623` on `#FFFFFF` 或 `#FDFBF7`，做 CTA / chip / eyebrow / rating star / footer social icon。屏占比 8-12%。这是 Flywoo 与所有其他 FPV 品牌无法混淆的第一记忆点——它不是"技术橙"（那会是荧光），是"生活橙"（日落色）。

### 8.2 Firefly Product Family Grid

见 7.4。**这是 Flywoo 的品牌资产**——把四款尺寸的 tinywhoop 用同一个命名 spine 组织起来（Firefly 16 / 18 / 20Pro / 25Mini），让消费者一眼看出"这是一个家族，不是一堆型号"。**任何新加入产品线的 Firefly 型号必须遵守命名 + 卡片模板**。

### 8.3 Rating Stars + Review Count Social Proof

见 7.2。**这是 Flywoo 与 iFlight 最大的信息呈现差别**。iFlight 从不显示 rating（工程气质拒绝众包评价），Flywoo 每张产品卡必显示 `★★★★★ (24)`——因为 Flywoo 的用户是消费级 tinywhoop 玩家，rating 是决策依据。**没有 review 的新产品显示 "New — No reviews yet"，不隐藏 rating row**。

### 8.4 "One Digital VTX. Two Flight Experiences." Poetic-Tech Copy Voice

见 7.6。**这是 Flywoo 的语音签名**。诗性文案永远用**技术事实作骨、抒情作皮**的组合：

- ✅ `"One Digital VTX. Two flight experiences."` — VTX 数量是事实，"flight experiences" 是抒情
- ✅ `"Beyond O4 Lite's Vision Limits."` — O4 Lite 是产品事实，"Vision Limits" 是抒情
- ✅ `"Small drone. Big sky."` — 尺寸对比 + 空间抒情

**禁止**纯抒情（`"Feel the wind."`）或纯技术（`"5.8GHz analog VTX with pit mode."`）。

### 8.5 Naked GoPro GP13 Sub-Line Chip

Flywoo 的一款产品线是**"Naked GoPro"**——把 GoPro Hero 相机拆掉外壳（Naked = 去壳），塞到微型穿越机机架上。这是 FPV 圈的特色改装。视觉上：

- 产品卡右上角 chip `NAKED GOPRO GP13`（黑底白字，与 orange NEW RELEASE 区分）
- 详情页第一屏必有一张"GoPro 裸机 + 支架"的爆炸图
- SKU 里带 `-GP13` 后缀（如 `FW-25MINI-GP13-3S`）

**规则**：这个 chip 只用于 Naked GoPro 系列产品，禁止误用。GP13 是 GoPro Hero 13 的简写，未来 GP14 / GP15 会依次替换。

### 8.6 CNY-First Pricing with Currency Suffix

见 7.8。**Flywoo 显式声明货币是跨境电商的自我意识**。RadioMaster 隐去货币（`$299.99` 让读者自己算），Flywoo 明写 `¥1,699.23 CNY` — 因为它主战场是中国 + 亚太出海买家，"人民币" 就是主场货币，写清楚反而更专业。

### 8.7 What's New Grid + New Release Badge

Flywoo 主页有一个专属的 **What's New** section，展示最近 30 天 released 的产品，每卡带 orange `NEW RELEASE` chip。这是 tinywhoop 圈快速迭代的特点——新品几乎每月都在出，站点必须有一个专属陈列位。

### 8.8 Shopline Native Chrome (Cart Drawer / Wishlist)

Flywoo 底层是 Shopline，某些 chrome 元素来自平台默认：

- **加购动画**：Shopline 默认的右侧 slide-in cart drawer，宽 `400px`，drawer 内部有 mini cart list + subtotal + `CHECKOUT` orange button
- **Wishlist**：产品卡右下角有一个小 heart icon（`16px`），点击加入 wishlist，需登录
- **Trust badges**：footer 上方 Shopline 提供的支付方式 logos (Visa / Mastercard / PayPal / Alipay)

**规则**：这些 Shopline 平台 chrome 元素**允许保留但不视为品牌资产**——如果未来 Flywoo 迁移到 Shopify 或独立系统，可以整体替换。它们与品牌 orange accent 保持视觉一致即可（drawer 里的 CTA 用 orange 而不是 Shopline 蓝）。

---

## 9. Motion

Flywoo 是**中等动效**站点——比 RadioMaster 活泼，比 iFlight 克制。

```yaml
--dur-fast:      160ms
--dur-base:      240ms
--dur-slow:      400ms
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1)
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1)
```

允许的动效：

- **卡片 hover lift**：`translateY(-4px)` + `--elev-2`，`240ms ease-out`
- **产品图 zoom on hover**：图片 `scale(1.05)`，`400ms ease-out`
- **CTA button hover**：`translateY(-2px)`，`160ms`
- **Hero carousel auto-advance**：5s interval，600ms crossfade
- **Cart drawer slide-in**：`translateX(100% → 0)`，`320ms ease-out`
- **Rating star fill on load**：加载时星星从左到右依次 fill，40ms stagger

禁止：

- 光标跟随特效
- 视差滚动
- Hero video 上叠视差
- 长时间加载动画（Shopline 图片必须 lazy-load 但显示 blur-up 而不是骨架屏）

---

## 10. Responsive

### 10.1 Breakpoints

```yaml
--bp-sm:  480px
--bp-md:  768px
--bp-lg:  1024px
--bp-xl:  1280px
--bp-xxl: 1440px
```

### 10.2 Section adjustments

| Section | ≥1280 | 768-1279 | ＜768 |
|---|---|---|---|
| Hero | 1440×540 | 1024×480 | 375×480 stacked |
| Featured Products | 4 cols | 3 cols | 2 cols |
| What's New | 4 cols × 2 rows | 3 cols × 3 rows | 2 cols × 4 rows |
| Firefly Family | 4 horizontal | 2×2 | horizontal scroll 1.5 peek |
| Video band | 1440×420 | 1024×360 | 375×280 stacked |
| Trust icons | 4 cols | 2×2 | 2×2 |
| Newsletter | inline | inline | stacked |

### 10.3 Typography

Hero headline `64 → 44 → 36`。Poetic 保持 `32px` 到 tablet，mobile 降到 `24px`（否则会截断）。Body 保持 `16px`。

### 10.4 Language switcher

Shopline 支持中英双语，右上角有 `EN / CN` 切换按钮。切换后：

- 产品名保留 `Firefly 20Pro 4S`（英文型号名不译）
- 描述文案切换
- 价格货币可切换（CNY / USD / EUR）
- Rating count 数字不变

---

## 11. Voice & Tone

### 11.1 Voice

**Poetic-Tech**——技术准确 + 抒情语感的并置。

### 11.2 Do

- 短句：`Small drone. Big sky.`
- 数字 + 抒情：`One Digital VTX. Two flight experiences.`
- 描述文案里出现"experience" / "vision" / "adventure" 等 lifestyle 词，但**必须**与具体产品参数并列出现
- CTA：`SHOP NOW` / `LEARN MORE` / `ADD TO CART` — 命令式 + 直白

### 11.3 Don't

- 不做 CEO 故事型开场（RadioMaster / iFlight 都不做，Flywoo 也不做）
- 不做长段抒情文案（Flywoo 的诗性永远在一行内完成）
- 不用感叹号
- 不用 "Revolutionary" / "Game-changing" / "Unleash" 这类夸张词
- 中文文案不做"炫酷"、"神器"这类互联网黑话

### 11.4 Multilingual

英语是主语言（欧美市场），中文简体是次要（中国大陆 + 东南亚华人）。中文文案的调性略比英文更平实（去掉一部分抒情），因为中文抒情容易滑向 kitsch。

---

## 12. Do / Don't (Quick Reference)

### DO

- Warm orange `#F5A623` on white 是唯一主色对
- 产品卡必须显示 rating stars + review count
- Firefly 系列必须共用命名 spine
- 价格必须显式货币后缀（`¥ CNY` / `$ USD`）
- Poetic tagline 必须 serif italic 32px，独占一行
- Trust icon row 4 个（Free Shipping / Secure Payment / 24-7 Support / 1-Year Warranty）
- Naked GoPro 系列必须挂 `NAKED GOPRO GP13` 黑底 chip
- 使用 Inter + PingFang SC 双语 fallback
- 卡片默认 `--elev-1` 微暖阴影

### DON'T

- 不用 dark-mode
- 不用饱和亮橙（`#FF6600`）— 保持温橙 `#F5A623`
- 不做无 rating 的产品卡（新品显示 "No reviews yet"）
- 不做长段落抒情
- 不引入第二种 accent 色（除了 tag 分类色，那是受控例外）
- 不去掉 CNY 货币后缀（哪怕切换到 USD 也要写 `USD`）
- 不做视差滚动 / 光标特效
- 不用 emoji（社交 icon 除外）

---

## 13. Iteration Guide

### 13.1 新增产品时

1. 判定是否属于 Firefly 家族：如是，遵循 `Firefly <size>` 命名 + Firefly Family Grid 卡片模板
2. 判定是否有 Naked GoPro 版本：如是，SKU 加 `-GP13` 后缀 + 挂对应 chip
3. 拍产品图：白底 300×280 或 lifestyle outdoor，产品居中
4. 写价格：CNY 主力 + 显式货币后缀
5. 添加 rating placeholder（`No reviews yet`）
6. 决定 hero 是否需要 poetic tagline：新品建议加，家族更新版可省略

### 13.2 新增 section 时

模板：
```
[section-eyebrow: orange uppercase 12/600 tracking 0.14em]
[section-title: 36/700 tight tracking]
[optional: section-lead 20/400 muted]
[48px 空气]
[content: grid / band / carousel]
[48px 空气]
[optional: VIEW ALL secondary button, centered]
```

### 13.3 促销活动时

Flywoo 不做频繁 sale。促销规则：

- **允许**：新品 launch discount (15% off) 首月
- **允许**：Bundle 优惠（"Buy Firefly 20Pro + Naked GoPro GP13 → Save ¥300"）
- **不允许**：全站折扣、闪购、限时倒计时
- 促销 badge：橙色 `-15%` chip，位置卡片左上角（覆盖 NEW RELEASE chip 位置）

### 13.4 品牌联名（如与 DJI O4 联名）

- Flywoo 主力产品线深度集成 DJI O4 系列 (O4 Lite / O4 Wide / O4 Air Unit)
- 联名产品页可显示 `Powered by DJI O4` 小 badge
- **但**主视觉仍保持 Flywoo orange + white，不采用 DJI 灰

### 13.5 AI 生成建议

- **务必**保持 warm orange + white 双色
- **务必**在产品卡显示 rating + review count（新品用 "No reviews yet"）
- **务必**在价格显示货币后缀（`CNY` / `USD`）
- **务必**保持 Firefly 命名 spine 一致
- **禁止**做 dark-mode 变体
- **禁止**引入第二种主色
- **禁止**去掉 Poetic-Tech 语音签名（Flywoo 没有诗性就退化成杂牌 tinywhoop 厂）

---

## 14. Appendix: Component Library Snapshot

```
Components (v1)
├── Layout
│   ├── TopNav (sticky, 64px, white + hairline)
│   ├── Footer (4-col + social + Shopline "Powered by")
│   ├── LanguageSwitcher (EN / CN)
│   ├── CurrencySwitcher (CNY / USD / EUR / GBP)
│   └── Container (max 1440 / 1200 / 880)
├── Sections
│   ├── HeroCarousel (3-5 slides, product lifestyle)
│   ├── FeaturedProductsGrid (4 cols)
│   ├── WhatsNewGrid (4×2 with NEW RELEASE badge)
│   ├── FireflyProductFamily (4 horizontal cards, family spine)
│   ├── PoeticVideoBand (full-bleed video + poetic overlay)
│   ├── TrustIconRow (4 icons: Free Shipping / Secure Payment / 24-7 Support / Warranty)
│   └── NewsletterSubscribe (email input + orange CTA)
├── Cards
│   ├── ProductCard (300×480, image + tags + rating + price + CTA)
│   ├── FireflyFamilyCard (280×420, family band + spec + from-price)
│   ├── FeatureCard (400×320, lifestyle image + eyebrow + headline)
│   └── HeroSlide (1440×540, 45% content + 55% media)
├── Chips & Tags
│   ├── NewReleaseChip (orange bg + ink text)
│   ├── NakedGoproChip (black bg + white text, GP13 sub-line)
│   ├── TinyDroneChip (orange-tint bg + orange-deep text)
│   └── DigitalVtxChip (blue-tint bg + blue text)
├── Buttons
│   ├── PrimaryButton (orange bg, black text, 12px radius)
│   ├── SecondaryButton (outlined ink, 12px radius)
│   ├── PillButton (orange-tint bg, orange text, 999 radius)
│   └── AddToCartFullWidth (product-card full-width CTA)
├── Rating
│   ├── RatingStars (5 SVG stars, 14px, gold fill)
│   ├── ReviewCount (12px muted "(24)")
│   └── NoReviewsPlaceholder ("No reviews yet" text)
├── Pricing
│   ├── PriceRow (from + value + currency, mono)
│   ├── FromPrefix (12px lowercase muted)
│   └── CurrencySuffix (12px muted "CNY" / "USD")
└── Utilities
    ├── WarmShadow (--elev-1, 6% orange tint)
    ├── PoeticTagline (serif italic 32px, single-line)
    ├── SectionEyebrow (orange uppercase 12/600 tracking 0.14em)
    └── FamilyBand (4px orange strip on card top, family identifier)
```

---

## 15. Closing Notes

Flywoo 的设计哲学可以浓缩成一句话：**"技术准确 + 生活温度"**。

它不是 RadioMaster 那种"我卖硬件、你要就下单"的老练卖场；也不是 iFlight 那种"我是工程实验室、买家读者分开"的工业分工；它是 tinywhoop 圈里唯一敢在产品页写 `"One Digital VTX. Two flight experiences."` 的品牌——这句话技术上完全准确（一台 VTX 支持切换两种飞行模式），但语感上抒情。这种**"事实是抒情的骨架"**的写作方式，正是 Flywoo 能在低价白牌工厂之海中被记住的原因。

对 AI 与后续设计师：**保住那份"温度"**。任何一个决策——去掉 rating、砍掉 poetic tagline、把橙换成红——都会让 Flywoo 迅速滑向"另一个 Shopline 白牌 FPV 店"。保住 warm orange，保住 Firefly 家族命名，保住"技术数字 + 抒情短句"的语音签名，保住那颗 Naked GoPro 的黑色 chip，Flywoo 就还是 Flywoo。
