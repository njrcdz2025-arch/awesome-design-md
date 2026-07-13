---
brand: RadioMaster
brand_key: radiomaster
url: https://www.radiomasterrc.com
category: FPV / Radio Controllers & ExpressLRS RX
platform: Shopify (storefront)
positioning: Mature FPV radio-controller vendor with 5-tier product ladder & branded community events
primary_color: "#E60023"
secondary_color: "#111111"
background_color: "#FFFFFF"
accent_color: "#F5F5F5"
typography_stack: [Inter, "Poppins", "Helvetica Neue", system-ui, sans-serif]
grid: 12-col storefront
personality: [confident, product-forward, community-driven, high-contrast, mature-e-commerce]
signature_moves:
  - All-caps red-accent section headers (NEW ARRIVALS / SPECIALS / WHY CHOOSE US)
  - 5-tier product-ladder grid (flagship → mid → entry, TX16S MK3 MAX → T8L)
  - Gap Challenge branded community campaign banner
  - Dual-protocol tag chip (ELRS / M2)
  - 6-panel service-icon reassurance bar
  - "Customized" sub-line for TX16S MAX personalization SKUs
---

> Source: raw observation `experiments/drone-camera-brands-study/raw/radiomaster.json` (1896 bytes) + category inference (2026-07-13). Product / typography / structural details are drawn directly from the crawl payload (headline, palette hex, product roster, six service icons, ELRS/M2 protocol tags). Micro-tokens (exact px, rem, weights, radii) are extrapolated from typical Shopify-native mature-radio-vendor design patterns for the FPV controller vertical.

---

## 0. Overview

RadioMaster 是 FPV 圈里最标准的“成熟老牌控发商”视觉气质：**大红 + 黑 + 白，全大写章节头，产品档次清楚地摊在网格里给你挑**。它不是新兴 D2C 潮牌，也不是极客工作坊，而是一个已经跑了很多年的 Shopify 品牌店：你进来知道它卖什么（TX 系列遥控器 + ExpressLRS 接收机），你知道旗舰是哪只（TX16S MK3 MAX），你也知道预算不够可以往下选到哪只（T8L）。

设计语言的三根支柱：

1. **RadioMaster Red `#E60023`**：不是玩具红，是接近 Coca-Cola 那档的高饱和警戒红，用作 CTA / logo mark / 全大写章节头下划线 / 促销 badge。红色出现频率**克制**——不做大面积色块背景，只做 accent，这一克制让它看起来专业而不是杂货铺。
2. **All-caps 章节头**：`NEW ARRIVALS`、`SPECIALS`、`WHY CHOOSE US`。字间距放大到 `letter-spacing: 0.08em ~ 0.12em`，字号 `28px ~ 40px`，字重 700，下方跟一条 `4px` 红色短横。这是 RadioMaster 视觉的**唯一记忆点**，其他都可以被平替。
3. **Product-Tier Grid**：产品线不是"所有型号并列"，而是**明显的档次感**——旗舰卡片更大、有 badge、有 lifestyle 图；入门卡片更小、纯产品图 + 价格。挑选路径视觉化。

其他辨识元素：右上角小小的 **Gap Challenge** banner（自家赞助的 FPV 竞速活动，社区归属感）、产品名后跟的协议 chip（`ELRS` / `M2`）、页脚附近的 6 图标服务保证条（Expedited Shipping / Secure Payment / 7 Days Return / Lifetime Customer Support / 1-Year Warranty / Reward Points）。

它不做"叙事"，不讲 CEO 故事，不做黑白纪录片。它做**"我这里所有型号都在，你挑"**。这是一个功能主义的、老练的、Shopify-mature 的设计系统。

---

## 1. Color Tokens

### 1.1 Core palette

```yaml
--rm-red:              "#E60023"   # Primary accent — CTAs, section underlines, sale badges, logo mark
--rm-red-hover:        "#C4001C"   # -8% L, for :hover on primary buttons
--rm-red-pressed:      "#A30017"   # -14% L, for :active

--rm-ink:              "#111111"   # Secondary — all body copy, headers, product titles
--rm-ink-soft:         "#333333"   # Muted body, subheads
--rm-ink-quiet:        "#666666"   # Meta text (SKU, protocol tags, "from" price prefix)

--rm-paper:            "#FFFFFF"   # Page background — never off-white, RadioMaster refuses cream
--rm-paper-tint:       "#F5F5F5"   # Section band background (WHY CHOOSE US strip, footer top)
--rm-hairline:         "#E5E5E5"   # 1px card borders, grid dividers

--rm-sale:             "#E60023"   # Reuse red for SALE / -20% badge fill
--rm-badge-new:        "#111111"   # NEW chip is black-on-white, not red — reserve red for sale
--rm-badge-new-text:   "#FFFFFF"
```

### 1.2 Semantic mapping

```yaml
button.primary.bg:     var(--rm-red)
button.primary.text:   #FFFFFF
button.secondary.bg:   #FFFFFF
button.secondary.text: var(--rm-ink)
button.secondary.border: 1px solid var(--rm-ink)

link.default:          var(--rm-ink)         # Inline body links are ink, not red
link.hover:            var(--rm-red)         # Only on hover does red appear
link.nav:              var(--rm-ink)

price.regular:         var(--rm-ink)
price.compare-at:      var(--rm-ink-quiet)   # struck-through original price
price.sale:            var(--rm-red)

badge.new.bg:          #111111
badge.sale.bg:         var(--rm-red)
badge.customized.bg:   #FFFFFF
badge.customized.border: 1px solid #111
```

### 1.3 Do & Don't

- **DO** 用 `#E60023` 只做 accent（CTA / underline / sale badge / logo）。红色屏占比 **≤ 8%**。
- **DO** 章节 band 用 `#F5F5F5` 而不是纯白，制造节奏。WHY CHOOSE US 那条服务图标条就是浅灰底。
- **DON'T** 把整个 hero 铺红。RadioMaster 从不做红色 hero，即使 SPECIALS 促销区也仅仅是红色 badge + 白底产品图。
- **DON'T** 用 `#FF0000`。RadioMaster Red 略偏胭脂（-2 hue），换成正红会显得廉价。

---

## 2. Typography

### 2.1 Family

RadioMaster 用的是 Shopify-friendly 的现代 geometric-humanist sans。参考实现：

```yaml
--font-sans: "Inter", "Poppins", "Helvetica Neue", system-ui, sans-serif
--font-mono: "SF Mono", "JetBrains Mono", ui-monospace   # 用于 SKU / spec sheet 数字
```

**没有 serif**。RadioMaster 是一个"我卖硬件、不写小说"的品牌，通篇一个 sans 家族。

### 2.2 Type scale

```yaml
# Section headers — ALL CAPS 是 RadioMaster 的核心记忆点
section-title-xl:      { size: 48px, weight: 800, tracking: 0.10em, transform: uppercase, leading: 1.1 }
section-title-lg:      { size: 40px, weight: 700, tracking: 0.10em, transform: uppercase, leading: 1.15 }
section-title-md:      { size: 32px, weight: 700, tracking: 0.08em, transform: uppercase, leading: 1.2 }
section-title-sm:      { size: 24px, weight: 700, tracking: 0.08em, transform: uppercase, leading: 1.25 }
section-underline:     { thickness: 4px, width: 64px, color: var(--rm-red), margin-top: 12px }

# Product card
product-title:         { size: 18px, weight: 600, tracking: 0em, transform: none, leading: 1.35 }
product-subtitle:      { size: 14px, weight: 500, tracking: 0em, color: var(--rm-ink-soft) }
product-price:         { size: 20px, weight: 700, tracking: 0em }
product-price-compare: { size: 14px, weight: 500, decoration: line-through, color: var(--rm-ink-quiet) }

# Body
body-lg:               { size: 18px, weight: 400, leading: 1.6 }
body:                  { size: 16px, weight: 400, leading: 1.65 }
body-sm:               { size: 14px, weight: 400, leading: 1.55 }
meta:                  { size: 12px, weight: 500, tracking: 0.04em, transform: uppercase, color: var(--rm-ink-quiet) }

# Hero
hero-headline:         { size: 72px, weight: 800, tracking: -0.01em, transform: none, leading: 1.05 }
hero-headline-mobile:  { size: 44px, weight: 800, tracking: -0.01em, leading: 1.1 }
hero-eyebrow:          { size: 14px, weight: 600, tracking: 0.14em, transform: uppercase, color: var(--rm-red) }

# Spec / mono
spec-number:           { family: var(--font-mono), size: 14px, weight: 500 }
protocol-tag:          { family: var(--font-mono), size: 11px, weight: 600, tracking: 0.06em, transform: uppercase }
```

### 2.3 Rules

- **`ALL CAPS` 强制搭配 tracking ≥ 0.08em**。任何时候写全大写，必须放字距，否则读起来会挤成一坨。
- **Hero headline 走 tight tracking (-0.01em)**：因为 hero 是 mixed-case 产品名（"TX16S MK3 MAX"），不需要拉字距。
- **Product title 不做 uppercase**：产品名的型号本身带大写字母（TX16S、MK3、MAX），再全大写会让阅读疲劳。
- **协议 tag（`ELRS` / `M2`）必须用 mono**：这是 RC 圈的行业习惯，mono 字体一出来老玩家就知道这是技术参数标签而不是营销文案。

---

## 3. Layout & Grid

### 3.1 Container

```yaml
--container-max:       1440px
--container-comfort:   1280px   # 大部分内容页
--container-narrow:    960px    # about / policy 页
--gutter-desktop:      24px
--gutter-tablet:       20px
--gutter-mobile:       16px
--section-py-lg:       96px     # 大区块（NEW ARRIVALS / SPECIALS）
--section-py-md:       64px     # 中区块（WHY CHOOSE US）
--section-py-sm:       48px     # 页脚上方 service band
```

### 3.2 Grid

```yaml
columns-desktop:       12
columns-tablet:        8
columns-mobile:        4
gap:                   24px
```

### 3.3 Homepage sequence（严格顺序）

```
1. Sticky top nav                          — 72px 高，白底 + 底部 1px hairline
2. Hero carousel                           — 5 张，1440×540，产品 hero shot + 大产品名 + 红 CTA
3. Promo tile row                          — 5 张 1:1 大方卡（240×240），间距 24px
4. NEW ARRIVALS section                    — 4 列 × 2 行网格，每卡 300×400
5. SPECIALS section                        — 同 4×2 网格，但每卡右上角 red SALE badge
6. WHY CHOOSE US band                      — 浅灰底 (#F5F5F5)，6 图标横排
7. Gap Challenge community banner          — 全宽 1440×280 lifestyle 图 + 红 CTA
8. Footer                                  — 5 列链接 + 订阅框 + 支付方式 logos
```

**关键节奏**：每个 section 之间用 `96px` 大垂直间距；section 内部 title→grid 之间用 `48px`。不做视差、不做长时间动画，纯电商流。

### 3.4 Product-card grid

```yaml
card-min-width:        280px
card-aspect:           3/4        # 300×400 竖版，符合遥控器纵向气质
image-container:       300×260, bg #FFFFFF, padding 20px (breathing space around product cutout)
content-padding:       16px 20px 20px 20px
gap:                   24px
```

---

## 4. Elevation & Depth

RadioMaster 是一个**扁平的**电商系统，几乎不用阴影。仅有的深度层级：

```yaml
--elev-0: none                                      # 大部分 section
--elev-1: 0 1px 0 0 rgba(0,0,0,0.06)                # 卡片 hairline 效果（用于 :hover）
--elev-2: 0 8px 24px -8px rgba(0,0,0,0.12)          # sticky nav 下沉时的下划阴影
--elev-3: 0 16px 40px -12px rgba(230,0,35,0.15)     # 促销卡 :hover 时的红色 tinted lift
```

**Elevation 规则**：

- 首屏静态状态：**0 阴影**。所有卡片靠 1px `#E5E5E5` hairline 分隔。
- Hover 时才升起：卡片位移 `translateY(-4px)` + `--elev-3`。
- Modal / drawer：`box-shadow: 0 24px 60px -20px rgba(0,0,0,0.25)`。

---

## 5. Shape & Radius

```yaml
--radius-none:   0px      # 章节 band / 分割线
--radius-xs:     2px      # 协议 chip (ELRS / M2)
--radius-sm:     4px      # 输入框、副 CTA
--radius-md:     6px      # 主 CTA button、product card
--radius-lg:     12px     # promo tile、hero slide
--radius-full:   999px    # 圆形头像 / 服务图标底衬圆
```

**核心倾向**：RadioMaster 是**微圆角**派——不做 0-radius 硬工业感（那是 iFlight 的活），也不做 24px 大圆角软消费感（那是 Flywoo / DJI Consumer 的活）。它选择 `4-6px` 这档"专业但不冷硬"的中间值。

**协议 chip 用 `2px` 极小圆角**：模拟 PCB silkscreen / 电子元件标签的方形感，与产品硬件语汇一致。

---

## 6. Iconography

```yaml
icon-set:              custom outlined + Feather-style fallbacks
icon-stroke:           1.5px
icon-size-nav:         20px
icon-size-inline:      16px
icon-size-service:     48px    # WHY CHOOSE US 6 图标条
icon-color-default:    var(--rm-ink)
icon-color-active:     var(--rm-red)
```

### 6.1 Service-icon set（WHY CHOOSE US）

固定 6 个，出现顺序不变（这是 RadioMaster 品牌承诺的可视化）：

1. **Expedited Shipping** — 飞机 / 快递箱线条图标
2. **Secure Payment** — 盾牌 + 锁
3. **7 Days Return** — 环形箭头 + 数字 7
4. **Lifetime Customer Support** — 耳机 / 客服头像
5. **1-Year Warranty** — 徽章 + 勾
6. **Reward Points** — 星形 + 硬币

**Grid**：6 列平均分布，desktop 每列 `1fr`，图标居中 + 图标下方标签 `12px letter-spacing 0.06em uppercase`。

### 6.2 Protocol tag icons

产品标题旁的 `[ELRS]` / `[M2]` chip：`11px mono`，`2px radius`，`padding 3px 6px`，`border 1px solid var(--rm-ink)`，纯文本，无图标。这是 RC 圈的行业惯例——协议名本身就是 icon。

---

## 7. Components

### 7.1 Buttons

```yaml
button.primary:
  bg:            var(--rm-red)
  text:          #FFFFFF
  padding:       14px 32px
  radius:        6px
  font:          14px / 600 / uppercase / tracking 0.08em
  hover:         bg var(--rm-red-hover), translateY(-1px)
  active:        bg var(--rm-red-pressed), translateY(0)

button.secondary:
  bg:            transparent
  text:          var(--rm-ink)
  border:        1px solid var(--rm-ink)
  padding:       13px 31px    # -1px to compensate border
  radius:        6px
  hover:         bg var(--rm-ink), text #FFFFFF

button.ghost:
  bg:            transparent
  text:          var(--rm-ink-soft)
  padding:       10px 16px
  hover:         text var(--rm-red)
```

**Button label 规则**：主 CTA 是 `SHOP NOW` / `BUY NOW` / `LEARN MORE`——**永远大写、永远 tracking 0.08em**。不写"点击这里"、"查看详情"这类软表达。

### 7.2 Product card

```
┌─────────────────────────────┐
│  [NEW]            [-15%]    │  ← 左上角 NEW badge (black-on-white) / 右上角 SALE badge (red)
│                             │
│         [产品图]             │  ← 白底 20px padding，产品居中
│                             │
├─────────────────────────────┤
│  TX16S MK3 MAX  [ELRS][M2]  │  ← 产品名 18/600 + 协议 chip
│  Radio Controller           │  ← 副标题 14/500 muted
│                             │
│  $299.99  $349.99           │  ← 现价 20/700 + 原价 14/line-through
└─────────────────────────────┘
```

尺寸：`300×400`，内部图片区 `260px` 高，文案区 `140px`。

### 7.3 Hero slide

- 尺寸：`1440×540` desktop / `375×480` mobile
- 结构：产品 hero shot 靠右占 55%，文案靠左占 45%
- Eyebrow：`FLAGSHIP` / `NEW RELEASE` — red uppercase 14/600
- Headline：产品名 72/800 tight tracking
- Sub：一句 sub-slogan 20/400 muted
- CTA：一个 primary（`SHOP NOW`）+ 一个 secondary（`LEARN MORE`）
- 底部圆点分页器：5 dots，active 是 red 8px，inactive 是 gray 6px

### 7.4 Promo tile（首屏之后 5 大方卡）

```yaml
size:                  240×240
bg:                    #F5F5F5 或产品实景 lifestyle 图
content:
  eyebrow:             red uppercase 12/600, top-left
  title:               22/700 mixed-case, 2 lines max
  cta-arrow:           bottom-right, → 16px red arrow only, no button chrome
hover:                 lift 4px + red border ring 2px
```

### 7.5 NEW ARRIVALS / SPECIALS section header

```
┌────────────────────────────────────────────┐
│                                            │
│  NEW ARRIVALS                              │  ← 40/700/uppercase/tracking 0.10em
│  ────                                      │  ← 4px × 64px 红色下划线
│                                            │
│  [product grid 4×2]                        │
│                                            │
│              [VIEW ALL →]                  │  ← 底部居中 secondary button
│                                            │
└────────────────────────────────────────────┘
```

### 7.6 WHY CHOOSE US band

```
Background: #F5F5F5, py 64px
┌──────┬──────┬──────┬──────┬──────┬──────┐
│ ✈️   │ 🛡️   │ 🔄7  │ 🎧   │ 🏅1Y │ ⭐$  │
│      │      │      │      │      │      │
│ EXPEDITED │ SECURE │ 7 DAYS │ LIFETIME │ 1-YEAR │ REWARD │
│ SHIPPING │ PAYMENT │ RETURN │ SUPPORT │ WARRANTY │ POINTS │
└──────┴──────┴──────┴──────┴──────┴──────┘
```

图标 48px，标签 12/500 uppercase tracking 0.06em，图标与标签间距 12px。

### 7.7 Gap Challenge community banner

```yaml
size:                  1440×280 full-bleed
bg:                    lifestyle image (drone-race scene, dark overlay 40%)
eyebrow:               COMMUNITY EVENT — red uppercase 14/600
headline:              "RADIOMASTER GAP CHALLENGE" — 56/800 uppercase white
sub:                   "Fly. Compete. Win." 20/500 white
cta:                   primary red button "JOIN THE CHALLENGE"
```

这是 RadioMaster 视觉里**唯一允许出现大面积图片 hero + 红色 CTA 组合**的场景——因为是活动 banner，不是产品陈列。

---

## 8. Signature Components（RadioMaster-only）

### 8.1 Red-Accent All-Caps Section Header

**Anatomy**：`ALL CAPS 40px/700/tracking 0.10em` + 下方 `4px × 64px` 红横 + 上方 `24px` 空气。这是 RadioMaster 每一个 section 的起手式，出现频率极高，**必须严格一致**。任何变体（换颜色、去下划线、mixed-case）都会破坏品牌感。

### 8.2 Product-Tier Tile Grid

产品档次视觉化：

```
Tier 1 — FLAGSHIP     TX16S MK3 MAX (Customized)   卡片 480×400, 双列宽, 有 lifestyle bg
Tier 2 — PROFESSIONAL TX15 Max                     卡片 300×400, 单列
Tier 3 — MID          Boxer                        卡片 300×400, 单列
Tier 4 — COMPACT      Pocket                       卡片 300×400, 单列
Tier 5 — ENTRY        T8L                          卡片 300×400, 单列
```

**规则**：Tier 1 卡片**必须**占两列，其他 Tier 单列。Tier 1 卡片背景可以是浅灰渐变 lifestyle，其他 Tier 保持纯白底。这是 RadioMaster 让用户一眼看出"谁是老大"的方式。

### 8.3 ELRS / M2 Dual-Protocol Chip

```html
<span class="protocol-chip">ELRS</span>
<span class="protocol-chip">M2</span>
```

```yaml
protocol-chip:
  display:       inline-flex
  padding:       3px 6px
  border:        1px solid var(--rm-ink)
  radius:        2px
  font:          11px / mono / 600 / tracking 0.06em / uppercase
  color:         var(--rm-ink)
  bg:            transparent
  gap-between:   4px
```

**规则**：出现在产品卡标题旁 / hero eyebrow 附近 / spec sheet 表头。永远**纯文本**，永远**方形微圆角**，永远**mono 字体**。它是硬件圈的"技术凭证"符号——一眼告诉玩家"这个遥控器支持哪些协议"。

### 8.4 Gap Challenge Community Promo Band

见 7.7。**它是 RadioMaster 除了"卖货"之外唯一的品牌情感表达**。DJI 用创作者视频、Skydio 用防务案例，RadioMaster 用赛事 banner——这是 FPV 圈最本能的品牌—社区语言。

### 8.5 6-Panel Service-Icon Reassurance Bar

见 7.6。**必须是 6 个，不多不少**。这是 mature Shopify 电商成熟度的信号：新品牌通常只放 3-4 个（"免运费"、"7 天退货"），RadioMaster 放 6 个是在说"我们所有该覆盖的信任点全都覆盖了"。**Reward Points** 那一格尤其关键——它暗示会员积分体系存在，是长期客户运营的信号。

### 8.6 TX16S MAX "Customized" Sub-Line

RadioMaster 有一条特殊的 SKU：**TX16S MK3 MAX Customized**。这是允许用户在下单时选择摇杆颜色 / 面板贴纸 / 天线颜色的定制版。视觉表达：

- 产品卡右上角 badge：`CUSTOMIZED`（黑框白底，`1px solid #111`，`4px radius`）
- 卡片下方多一行 "Personalize your radio →" 文案 `14/500 italic`
- 详情页有一个 5-step configurator（Color / Sticks / Gimbals / Plate / Antenna），每步 4-6 个选项

这个 sub-line 的存在告诉市场："RadioMaster 不只是批量卖硬件的贸易商，我们支持个性化"。这是从"贸易感"往"品牌感"进化的关键动作。

### 8.7 Sticky Cart Preview Drawer

Shopify 惯例的加购动画：加入购物车后从右侧滑出 `380px` 宽的 drawer，显示购物车缩略图 + subtotal + `CHECKOUT` 红 CTA。RadioMaster 版本的差异：drawer 顶部固定显示"Free shipping over $300"进度条（当前购物车金额与 $300 的比例，红色 fill 条）。

---

## 9. Motion

RadioMaster 是**低动效**站点——它是电商，不是艺术项目。

```yaml
--dur-fast:      120ms
--dur-base:      200ms
--dur-slow:      320ms
--ease-out:      cubic-bezier(0.2, 0.8, 0.2, 1)
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1)
```

允许的动效：

- Card hover lift（`translateY(-4px)`, 200ms）
- Nav dropdown fade (`opacity 0→1`, 120ms)
- Cart drawer slide-in (`translateX(100% → 0)`, 320ms ease-out)
- Hero carousel auto-advance (5s interval, 400ms crossfade)

**禁止的动效**：

- 首屏 hero 上的视差滚动
- 长时间的加载序列（product image 应立即出现）
- 装饰性 SVG 动画
- 光标跟随特效

RadioMaster 的动效哲学：**服务转化，不服务体验**。

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
| Promo tile row | 5 tiles / row | 3 tiles / row | 2 tiles horizontal scroll |
| NEW ARRIVALS grid | 4 cols × 2 rows | 3 cols × 3 rows | 2 cols × 4 rows |
| SPECIALS grid | 4 cols × 2 rows | 3 cols × 3 rows | 2 cols × 4 rows |
| WHY CHOOSE US | 6 cols | 3 cols × 2 rows | 2 cols × 3 rows |
| Gap Challenge banner | 1440×280 | 1024×240 | 375×360 stacked |

### 10.3 Typography scaling

Hero headline `72px → 56px → 44px`。Section title `40px → 32px → 28px`。Body 保持 `16px`。

### 10.4 Touch targets

`min-height: 44px`（Apple HIG 最小）。CTA button mobile 版本 padding 加高到 `16px 32px`。协议 chip 保持 `11px`——它不是交互元素，不需要放大。

---

## 11. Voice & Tone

### 11.1 Copy voice

- **产品导向 + 事实陈述**。不写故事，不写情怀，也不刻意写幽默。
- Slogan 短句：`RadioMaster Gap Challenge` / `TX16S MK3 MAX` — 型号即文案。
- 描述文案：`Long-range ExpressLRS transmitter with hall-effect gimbals and customizable RGB.` — 关键词密集，SEO 友好。

### 11.2 Do

- `SHOP NOW` / `BUY NOW` / `LEARN MORE` — 命令式 CTA
- `IN STOCK` / `PRE-ORDER` / `SOLD OUT` — 状态标签
- 数字前不加"仅"、"只需"这类软化词——`$299.99` 就是 `$299.99`

### 11.3 Don't

- 不写"改变游戏规则"、"重新定义 FPV"这种夸张宣言
- 不用 emoji（除非在客服回复里）
- 不做故事化的产品页开头（"1998 年，一个热爱飞行的男孩..."）— RadioMaster 直接进入 spec

### 11.4 Multilingual

Shopify 后台开了英语 / 德语 / 法语 / 西班牙语，但视觉上不做语言 badge。切换语言由 URL 完成 (`/en` / `/de`)，切换后所有 all-caps 章节头保持结构（`NEW ARRIVALS` → `NEUHEITEN` → `NUEVOS PRODUCTOS`），tracking 和字重不变。

---

## 12. Do / Don't (Quick Reference)

### DO

- 所有章节头**全大写 + 红色下划线**，无例外
- 红色 `#E60023` 只用作 accent（CTA / underline / sale badge），屏占比 ≤ 8%
- 协议 chip 用 mono 字体 + 2px 微圆角
- 产品线视觉分档次（Tier 1 双列 / Tier 2-5 单列）
- WHY CHOOSE US 固定 6 图标，顺序不变
- Hover 才升起卡片阴影，静态状态零阴影
- 产品名保持 mixed-case（`TX16S MK3 MAX`，不是 `TX16S MK3 MAX`）—— 因为型号本身已含大写

### DON'T

- 不要用 `#FF0000` 正红——太廉价
- 不要给 hero 铺红色背景——RadioMaster 不做红 hero
- 不要在章节头去掉下划线或换颜色
- 不要用 serif 字体——RadioMaster 通篇 sans
- 不要在产品卡上写情感文案（"Fall in love with the sky"）——留给 Flywoo
- 不要做视差滚动 / 光标特效
- 不要让红色出现在 body 段落里（除了 `:hover` 状态）
- 不要用 emoji 作为服务图标——用 outlined line icons

---

## 13. Iteration Guide

### 13.1 新增产品时

1. 判定 Tier：flagship（Tier 1 双列）/ pro (Tier 2) / mid (Tier 3) / compact (Tier 4) / entry (Tier 5)
2. 拍产品图：白底 + 300×260 尺寸 + 20px padding 内边距，产品居中，无阴影
3. 写协议 tag：ELRS / M2 / CRSF / D8 — 选最多 2 个最重要的
4. 决定是否有 `Customized` sub-line：仅旗舰级允许
5. NEW badge 保持 30 天，30 天后自动移除

### 13.2 新增 section 时

模板：
```
[80px 空气]
ALL CAPS SECTION TITLE  (40/700/tracking 0.10em)
──── (4px × 64px red)
[48px 空气]
[content: grid / band / banner]
[48px 空气]
[VIEW ALL →]  (optional, secondary button, centered)
[80px 空气]
```

任何新 section 违反这个模板都必须过审。

### 13.3 促销活动时

- **允许**：SALE badge (red)、compare-at 划线价、限时倒计时数字
- **不允许**：整版红色 promo hero、闪烁 GIF、多种颜色同时出现（不要蓝 badge / 绿 badge / 橙 badge 混用）
- 促销 banner 语言：`WINTER SALE` / `SUMMER SPECIALS` / `BLACK FRIDAY` — 全大写 + 简短季节名 + SALE/SPECIALS

### 13.4 品牌活动（Gap Challenge 类）时

- 独立 hero band（1440×280），不占用主商品陈列位置
- 使用 lifestyle 图 + 40% 深色 overlay 保证白字可读
- 只允许一个红 CTA `JOIN THE CHALLENGE`
- 活动结束后 band 需在 7 天内替换或撤下

### 13.5 AI 生成建议

当 AI 需要为 RadioMaster 生成新 landing page / promo email / product-launch section 时：

- **务必**保留 all-caps 章节头 + 4px 红下划线
- **务必**使用 `#E60023` 作为唯一 accent 色
- **务必**在产品卡右上角保留 badge 位（NEW / SALE / CUSTOMIZED 三选一）
- **务必**在页尾附近保留 6-panel 服务图标条
- **禁止**引入第二种字体家族（如加 serif 或 display font）
- **禁止**引入第二种 accent 色（如加蓝色 highlight）
- **禁止**改变章节头字距（0.10em 是硬性）
- **禁止**去掉协议 tag chip——这是 RC 圈的行业方言，去掉等于砸招牌

---

## 14. Appendix: Component Library Snapshot

```
Components (v1)
├── Layout
│   ├── TopNav (sticky, 72px)
│   ├── Footer (5-col + subscribe + payment logos)
│   ├── SectionBand (bg #F5F5F5)
│   └── Container (max 1440 / 1280 / 960)
├── Sections
│   ├── HeroCarousel (5 slides, 400ms crossfade)
│   ├── PromoTileRow (5 tiles, 240×240)
│   ├── NewArrivalsGrid (4×2 / 3×3 / 2×4)
│   ├── SpecialsGrid (same as NewArrivals + SALE badge)
│   ├── WhyChooseUsBand (6 icons)
│   ├── GapChallengeBanner (1440×280 lifestyle)
│   └── ProductTierLadder (Tier1 double-col + Tier 2-5 single-col)
├── Cards
│   ├── ProductCard (300×400, image + title + protocol chips + price)
│   ├── PromoTile (240×240, eyebrow + title + arrow)
│   ├── ServiceIconCell (48px icon + uppercase label)
│   └── HeroSlide (1440×540, product + CTA pair)
├── Chips & Badges
│   ├── ProtocolChip (ELRS / M2, mono, 2px radius)
│   ├── SaleBadge (red fill, top-right)
│   ├── NewBadge (black fill, top-left)
│   └── CustomizedBadge (outlined black, bottom-left)
├── Buttons
│   ├── PrimaryButton (red bg + white text + uppercase)
│   ├── SecondaryButton (outlined ink + hover-invert)
│   ├── GhostButton (text-only, hover to red)
│   └── ArrowCTA (→ icon only, inside PromoTile)
└── Utilities
    ├── SectionTitleAllCaps (40/700/uppercase + 4px red rule)
    ├── PriceRow (regular + strikethrough compare-at)
    ├── ShippingProgressBar (cart drawer only)
    └── ProtocolChipRow (inline flex, 4px gap)
```

---

## 15. Closing Notes

RadioMaster 的设计价值观可以用一句话总结：**"我是这个圈子里最不需要证明自己的品牌。"**

它不用做 CEO 访谈视频（那是新品牌的手法），不用讲创业故事（那是消费级的手法），也不用做工业级 case study（那是防务级的手法）。它是 FPV 遥控器圈的**"就这样，你要就下单"** 品牌——product-ladder 摆好、协议 tag 标清、服务承诺列全、Gap Challenge 表明社区在场，一切都直白得像一份产品目录。

这份直白**恰恰是设计的胜利**。所有大 caps + 红 accent 的组合是为了压制"我要卖东西"这件事的焦虑感——因为章节头本身就已经足够响亮，产品自会说话。**AI / 设计师在为 RadioMaster 迭代任何新页面时，永远问一句：这个改动会让 TX16S MK3 MAX 卖得更多吗？如果不会，就不加**。
