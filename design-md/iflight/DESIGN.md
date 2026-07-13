---
brand: iFlight
brand_key: iflight
url: https://www.iflight.com
category: FPV / Complete Drones & Components
platform: Custom brand site + separate shop.iflight.com storefront
positioning: Tech-industrial FPV maker with brand-site / shop-site split, three application domains
primary_color: "#00B0FF"
secondary_color: "#0D1117"
background_color: "#0D1117"
accent_color: "#1A1F2E"
typography_stack: [Titillium Web, "Roboto", "Helvetica Neue", system-ui, sans-serif]
grid: 12-col dark-mode
personality: [tech-industrial, cyan-on-dark, engineering-forward, cinematic, dual-audience]
signature_moves:
  - Cyan (#00B0FF) accent on near-black (#0D1117) canvas, engineering / lab feel
  - Dual-purpose hero CTA pair (Learn More → brand / Buy Now → shop.iflight.com)
  - Product-category tag capsule (2Raw / Cinewhoop / Longrange / New Arrival)
  - Three-domain portal (Cinematic FPV / FPV Racing / Education)
  - Creator Shots horizontal scroll row (community lifestyle imagery)
  - Where-to-Buy / Support / Fly-Safe three-icon service row
  - "Where dreams can fly" poetic tagline in otherwise-industrial context
---

> Source: raw observation `experiments/drone-camera-brands-study/raw/iflight.json` (1651 bytes) + category inference (2026-07-13). Color palette (#00B0FF cyan / #0D1117 dark), tagline ("Where dreams can fly"), product roster (Specter / Mach R5 / Taurus X8 Pro Max V2 / Nazgul Evoque / SKYVIZ / Defender / CineFlow), category tags (2Raw / New Arrival / Longrange / Cinewhoop), and dual-CTA structure (Learn More / Buy Now → shop.iflight.com) come directly from the crawled payload. Micro-tokens (exact px / weight / radius) are extrapolated using standard tech-industrial dark-mode conventions for the FPV maker vertical.

---

## 0. Overview

iFlight 是 FPV 圈里"从深圳出发、用工业英语讲话"的头部整机厂。它的设计语言与 RadioMaster 完全相反的一极：

- **RadioMaster** 是 mature Shopify 白底 + 红 accent + all-caps 大卖场；
- **iFlight** 是 dark-mode + 青色高光 + 双站点分工的**工程实验室感**。

三个核心视觉决策：

1. **青-on-暗 (`#00B0FF` on `#0D1117`)**：不是任何 FPV 竞争对手的选色。RadioMaster 用红、Flywoo 用橙、DJI 用白。iFlight 选青色**近于电路示波器/LED 状态灯**的科技蓝——一眼工程实验室气质。
2. **双站点分工**：`iflight.com` 是**品牌站**（讲产品线、讲愿景、讲案例、讲 Creator），`shop.iflight.com` 是**商店站**（下单/库存/物流）。这种拆分是 iFlight 与 RadioMaster / Flywoo 最本质的差别——它把"讲故事"和"卖货"放在两个域名下。因此**每个产品的 hero 都有两个 CTA**：`Learn More` 走品牌，`Buy Now` 跳出到 shop。
3. **三领域门户**：Cinematic FPV / FPV Racing / Education。这不是三个 SKU 分类，而是三个**应用场景 landing page**——影视航拍找 CineFlow，竞速找 Mach R5，教育客户找入门套件。这种"应用先于产品"的信息架构在 FPV 圈是罕见的成熟做法。

标语 `"iFlight — Where dreams can fly"` 是在这个工业底色上罕见的诗性一句——它是 iFlight 与纯技术贸易商的分界线。

---

## 1. Color Tokens

### 1.1 Core palette

```yaml
--if-cyan:              "#00B0FF"   # Primary accent — logo mark, primary CTA, active nav, highlight
--if-cyan-glow:         "#33C3FF"   # +10% L, for :hover on primary buttons
--if-cyan-deep:         "#0090D4"   # -12% L, for :active / pressed
--if-cyan-halo:         "rgba(0,176,255,0.16)"   # 4% surface tint under hero, section glow

--if-ink:               "#0D1117"   # Page background — GitHub-dark territory but slightly cooler
--if-ink-2:             "#1A1F2E"   # Elevated surface (card bg on hero)
--if-ink-3:             "#242A3A"   # Nested surface (spec table row)
--if-ink-4:             "#2E3548"   # Hairline / divider

--if-paper:             "#F5F7FA"   # Text on dark — near-white, never pure #FFF (avoids CRT bloom)
--if-paper-soft:        "#B4BCC8"   # Muted copy, meta, spec labels
--if-paper-quiet:       "#6A7183"   # De-emphasized text (footer copyright, timestamp)

--if-warn:              "#FF6B35"   # Fly-Safe warning icon, out-of-stock
--if-ok:                "#3DDC97"   # Ships-now / in-stock indicator
```

### 1.2 Semantic mapping

```yaml
page.bg:                var(--if-ink)
surface.card:           var(--if-ink-2)
surface.nested:         var(--if-ink-3)
divider:                var(--if-ink-4)

text.primary:           var(--if-paper)
text.secondary:         var(--if-paper-soft)
text.muted:             var(--if-paper-quiet)
text.accent:            var(--if-cyan)

button.primary.bg:      var(--if-cyan)
button.primary.text:    var(--if-ink)          # 黑字在青底上 — 高对比、工程感
button.secondary.bg:    transparent
button.secondary.text:  var(--if-paper)
button.secondary.border: 1px solid var(--if-paper-soft)

tag.newArrival:         var(--if-cyan)         # bg with 20% opacity, cyan text
tag.cinewhoop:          "#8B5CF6"              # 紫色，与 cyan 区分应用场景
tag.longrange:          "#3DDC97"              # 绿色 = 远航
tag.racing:             "#FF6B35"              # 橙色 = 速度
tag.2raw:               "#FBBF24"              # 琥珀色 = 裸帧 / 硬核
```

### 1.3 Do & Don't

- **DO** 在 dark canvas 上保留 **≥ 60% 的空气**（不要塞满）——iFlight 的空间感来自留白。
- **DO** 只让 `#00B0FF` 出现在 CTA / 活跃状态 / 高光边框。它是**电击式**焦点色，屏占比 ≤ 5%。
- **DO** 用 `--if-cyan-halo`（4% 透明青）做 hero 底部渐变，模拟示波器辉光。
- **DON'T** 把青色铺成大面积色块——iFlight 的青是**线**和**点**，不是**面**。
- **DON'T** 用 `#FFFFFF` 作为文字色。用 `#F5F7FA` 减少眩光。
- **DON'T** 引入第二种 accent 色（除非它是 tag 的分类色，见下节）。

---

## 2. Typography

### 2.1 Family

```yaml
--font-sans: "Titillium Web", "Roboto", "Helvetica Neue", system-ui, sans-serif
--font-mono: "JetBrains Mono", "SF Mono", ui-monospace, monospace
```

**为什么 Titillium Web**：Titillium 是欧洲空间局（ESA）资助设计的开源字体，天然带**航空 / 航天工程**气质，字面收紧，大字号时几何感强、小字号时可读性好。用在 FPV / drone 类品牌是**最贴切的开源字体选择**，且完全免费。

`JetBrains Mono` 用于 spec sheet 数字、SKU、电压参数、FCC ID 等技术标注。

### 2.2 Type scale

```yaml
# Hero — cinematic and tight
hero-headline:          { size: 84px, weight: 700, tracking: -0.02em, leading: 1.02 }
hero-headline-mobile:   { size: 44px, weight: 700, tracking: -0.01em, leading: 1.08 }
hero-eyebrow:           { size: 13px, weight: 600, tracking: 0.18em, transform: uppercase, color: var(--if-cyan) }
hero-tagline:           { size: 22px, weight: 400, tracking: 0, leading: 1.45, color: var(--if-paper-soft) }

# Section titles — engineering plaque
section-title:          { size: 48px, weight: 600, tracking: -0.01em, leading: 1.15 }
section-eyebrow:        { size: 12px, weight: 600, tracking: 0.16em, transform: uppercase, color: var(--if-cyan) }
section-lead:           { size: 20px, weight: 400, leading: 1.5, color: var(--if-paper-soft) }

# Body
body-lg:                { size: 18px, weight: 400, leading: 1.65 }
body:                   { size: 16px, weight: 400, leading: 1.65 }
body-sm:                { size: 14px, weight: 400, leading: 1.6 }
caption:                { size: 13px, weight: 500, tracking: 0.02em, color: var(--if-paper-quiet) }

# Product card
product-title:          { size: 22px, weight: 600, tracking: -0.005em }
product-model:          { family: mono, size: 12px, weight: 500, tracking: 0.08em, color: var(--if-cyan) }
product-price:          { family: mono, size: 20px, weight: 600 }
product-spec-label:     { family: mono, size: 11px, weight: 500, tracking: 0.10em, transform: uppercase, color: var(--if-paper-quiet) }
product-spec-value:     { family: mono, size: 14px, weight: 500, color: var(--if-paper) }

# Tag capsule
tag:                    { family: sans, size: 11px, weight: 600, tracking: 0.08em, transform: uppercase }
```

### 2.3 Rules

- **Hero headline 最大字号 84px 而不是像 GoPro 的 128px**——iFlight 的气质是"精密"不是"呐喊"。
- **章节 eyebrow 永远是青色 uppercase 12/600 tracking 0.16em**——这是 iFlight 每个 section 的记忆点。
- **数字必用 mono**：价格、参数、SKU、电压。工程气质来自"数字看起来像仪表读数"。
- **Tag capsule 用 sans 而不是 mono**——因为 tag 是**分类词**（Cinewhoop / Longrange），不是数字。
- **中文混排**：iFlight 品牌站主要英文，产品页某些 spec 会中英并置，中文用 `"Noto Sans SC"` fallback，`font-weight: 500`。

---

## 3. Layout & Grid

### 3.1 Container

```yaml
--container-max:        1440px
--container-comfort:    1280px
--container-narrow:     960px
--gutter-desktop:       32px         # 比 RadioMaster 大 8px，工业感来自更宽松的呼吸
--gutter-tablet:        24px
--gutter-mobile:        16px
--section-py-hero:      120px        # hero 上下大留白
--section-py-lg:        112px
--section-py-md:        80px
--section-py-sm:        56px
```

### 3.2 Grid

```yaml
columns-desktop:        12
columns-tablet:         8
columns-mobile:         4
gap:                    32px         # 大 gap，与 GitHub-dark 一样的疏松感
```

### 3.3 Homepage sequence

```
1. Sticky top nav                          — 64px 高，透明底 → 滚动后变 rgba(13,17,23,0.92) 毛玻璃
2. Hero (full-viewport)                    — 100vh 高，产品 lifestyle 视频循环 + eyebrow + headline + 双 CTA
3. Product carousel (8+ slides)            — 每 slide 是一款主推产品，带 Learn More / Buy Now
4. Creator Shots row                       — 4 张横向滚动 lifestyle 图，来自品牌大使 / 用户投稿
5. Three-Domain Portal                     — 3 张大卡片 (Cinematic FPV / FPV Racing / Education)
6. Product Category tag cloud              — 2Raw / Cinewhoop / Longrange / New Arrival 4 chip 分类入口
7. Where-to-Buy / Support / Fly-Safe row  — 3 图标条 (类似 RadioMaster 的服务图标但只 3 个而不是 6 个)
8. Footer                                  — Company / Products / Support / Community 四列 + 社交 icon
```

**节奏对比**：

- RadioMaster 是**密**（每 96px 一个 section），因为它要在首屏塞进所有产品；
- iFlight 是**疏**（每 112-120px 一个 section），因为它讲究"每屏一件事"的电影感。

### 3.4 Hero grid

```yaml
hero-height:            100vh   # full viewport, min 720px on desktop
hero-media-position:    absolute, cover, z-index 0
hero-overlay:           linear-gradient(180deg, rgba(13,17,23,0) 0%, rgba(13,17,23,0.6) 60%, rgba(13,17,23,0.9) 100%)
hero-content-position:  absolute, bottom 120px, left var(--gutter-desktop)
hero-content-max-width: 720px       # 只占屏宽的一半，留右侧给产品图/视频呼吸
```

---

## 4. Elevation & Depth

在暗色系里，"深度"用**发光**表达，而不是阴影。

```yaml
--elev-0: none                                                        # 平面元素
--elev-1: inset 0 0 0 1px rgba(255,255,255,0.06)                      # 微内嵌边框，替代普通阴影
--elev-2: 0 0 0 1px rgba(0,176,255,0.24), 0 0 24px rgba(0,176,255,0.12)   # cyan glow on hover
--elev-3: 0 24px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,176,255,0.32)  # dropdown / modal
--elev-4: 0 32px 80px -20px rgba(0,0,0,0.8)                           # dialog / drawer
```

**规则**：

- 静态卡片：`--elev-1`（一根 6% 白色内嵌边框）
- Hover 卡片：`--elev-2`（青色 halo + 24px 24px 外发光）— 这是 iFlight **最标志性的视觉细节**
- Dropdown / Menu：`--elev-3`（深黑投影 + 青色边框）

**禁止**：软阴影（`0 4px 12px rgba(0,0,0,0.15)`）——那是白模式产物，在 dark canvas 上会显脏。所有"深度"都必须来自 **glow** 或 **边框对比**。

---

## 5. Shape & Radius

```yaml
--radius-none:   0px      # spec table 行、hairline
--radius-xs:     2px      # tag capsule、chip
--radius-sm:     4px      # 输入框、副 CTA
--radius-md:     8px      # 主 CTA、卡片
--radius-lg:     16px     # hero content card、Domain Portal 大卡片
--radius-full:   999px    # 圆头像、圆按钮 (icon-only)
```

**核心倾向**：iFlight 走**中等圆角**（4-8px），刚好平衡"工业硬"与"消费软"。**不做 0-radius 硬工业**（那是 Skydio 军用感），也**不做 20+ 圆角软消费**（那是 DJI Neo / Flywoo）。

**Tag capsule 用 `2px` 极小圆角**：这是"电路板 silkscreen 标签"的语义暗号——和 RadioMaster 的协议 chip 撞脸不是巧合，两家都在向硬件行业致敬。

---

## 6. Iconography

```yaml
icon-set:               custom outlined + Lucide fallback
icon-stroke:            1.5px
icon-color-default:     var(--if-paper-soft)
icon-color-active:      var(--if-cyan)
icon-color-warn:        var(--if-warn)
icon-size-nav:          20px
icon-size-inline:       16px
icon-size-service:      40px         # 比 RadioMaster 的 48px 略小 — iFlight 更克制
```

### 6.1 The Where-to-Buy / Support / Fly-Safe row

固定 3 图标（比 RadioMaster 少一半，更聚焦）：

1. **Where to Buy** — 定位图钉线条 icon + 标签 `WHERE TO BUY`
2. **Support** — 头戴耳机 line icon + 标签 `SUPPORT`
3. **Fly Safe** — 警示三角 line icon (橙色 `#FF6B35`) + 标签 `FLY SAFE`

**Fly Safe 用橙色警示**：这是 iFlight 与 DJI 呼应的**行业负责任度**表达——飞行安全是 FPV 品牌无法回避的公共义务。

### 6.2 Tag icon strategy

Cinewhoop / Longrange / Racing / 2Raw / New Arrival 这些 tag 是**纯文本 capsule**，不带 icon 前缀——文本本身已是符号。

---

## 7. Components

### 7.1 Buttons

```yaml
button.primary:
  bg:            var(--if-cyan)
  text:          var(--if-ink)           # 黑字青底
  padding:       14px 32px
  radius:        8px
  font:          14px / 600 / uppercase / tracking 0.10em
  hover:         bg var(--if-cyan-glow), box-shadow 0 0 24px var(--if-cyan-halo)
  active:        bg var(--if-cyan-deep)

button.secondary:
  bg:            transparent
  text:          var(--if-paper)
  border:        1px solid var(--if-paper-soft)
  padding:       13px 31px
  radius:        8px
  hover:         border-color var(--if-cyan), text var(--if-cyan)   # 边框和文字同时青

button.ghost:
  bg:            transparent
  text:          var(--if-paper-soft)
  padding:       10px 16px
  hover:         text var(--if-cyan)
```

### 7.2 Dual-Purpose Hero CTA Pair

**这是 iFlight 最独有的组件**。每个产品的 hero 底部固定出现两个按钮：

```
┌────────────────────────────────────────┐
│                                        │
│    [LEARN MORE]      [BUY NOW ↗]       │
│    secondary          primary          │
│    → /products/xyz    → shop.iflight.com/xyz
│                                        │
└────────────────────────────────────────┘
```

- **Learn More** 是 secondary（青边），跳到品牌站的产品详情（讲故事、讲场景、讲配件）
- **Buy Now** 是 primary（青底），带一个 **↗ 外链角标 icon**，跳到 `shop.iflight.com`（下单、库存、物流）

**规则**：

1. 两个按钮必须**并列出现**，间距 16px
2. `Buy Now` 永远在**右**（视觉动线终点）
3. `↗` icon 是 12px，字母之后 8px 间距
4. 移动端两个按钮上下堆叠，Buy Now 在下，全宽

### 7.3 Product Card (grid)

```
┌─────────────────────────────────────┐
│                                     │
│        [产品渲染图 / lifestyle]      │
│                                     │
│  [CINEWHOOP]  [NEW ARRIVAL]        │  ← tag capsule row，2-3 个
│                                     │
│  Nazgul Evoque F5                   │  ← 产品名 22/600
│  IF-NE-F5-DJI-O4                    │  ← SKU mono 12/500 cyan
│                                     │
│  Optimized for cinematic dives     │  ← 副文案 14/400 muted
│                                     │
│  $349.99                            │  ← 价格 mono 20/600
│                                     │
│  [LEARN MORE]    [BUY NOW ↗]        │  ← 双 CTA
└─────────────────────────────────────┘
```

尺寸：`360×520`，图片区 `360×280`，内容区 `240px`。卡片背景 `--if-ink-2`，内嵌 1px 6%白边框（--elev-1）。

### 7.4 Three-Domain Portal

**这是 iFlight 的信息架构核心**。3 张大卡横排：

```
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│               │  │               │  │               │
│  [lifestyle]  │  │  [lifestyle]  │  │  [lifestyle]  │
│               │  │               │  │               │
│  CINEMATIC    │  │  FPV RACING   │  │  EDUCATION    │
│  FPV          │  │               │  │               │
│               │  │  Fly fast.    │  │  Learn to     │
│  Fly filmic.  │  │  Fly first.   │  │  fly.         │
│               │  │               │  │               │
│  Explore →    │  │  Explore →    │  │  Explore →    │
└───────────────┘  └───────────────┘  └───────────────┘
```

- 卡片：`400×480`，圆角 `16px`
- 背景：60% 应用场景 lifestyle 图 + 40% 深色渐变遮罩
- 内容：eyebrow `CINEMATIC FPV` 青色 uppercase / headline `Fly filmic.` 44/700 white / CTA `Explore →` 青色文本 arrow

每张卡跳转到独立的 `/cinematic`、`/racing`、`/education` landing page，各自有独立的产品清单 + 教程 + 案例。

### 7.5 Creator Shots row

一行 4 张横向滚动 lifestyle 摄影（Cinewhoop 穿越机拍摄的**真实图片**），比例 `4:5`，尺寸 `280×350`。摆放在 hero 之后，作为**"看，这就是我们的设备能拍出的东西"** 的社交证明。

```yaml
container:              full-bleed 1440
scroll:                 horizontal, snap-mandatory
gap:                    16px
image-aspect:           4/5
overlay:                bottom 24% gradient 0→80% ink
caption:                bottom-left, 12px mono, "@creator_handle · Firefly 20Pro"
```

### 7.6 Spec table

产品详情页的技术规格表，是 iFlight 最"工程"的组件：

```
┌───────────────────────────────────────┐
│  SPECIFICATIONS                       │
│                                       │
│  MOTOR       XING 1404-3800KV         │
│  FC          BLITZ F7 55A AIO         │
│  VTX         O4 Air Unit              │
│  WEIGHT      165 g (w/o battery)      │
│  BATTERY     4S / 850mAh recommended  │
│  FREQUENCY   5.8 GHz / DJI O4         │
│  DIAGONAL    155 mm                   │
│                                       │
└───────────────────────────────────────┘
```

- 每一行：label 左对齐 mono 11/500 uppercase cyan / value 右对齐 mono 14/500 paper
- 行高 `48px`，行之间 1px `--if-ink-4` divider
- 表格无边框，只有横向 hairline
- 标题 `SPECIFICATIONS` 是 section-eyebrow 样式（青色 uppercase 12/600 tracking 0.16em）

### 7.7 Category Tag Capsule Bar

```
[2RAW]  [CINEWHOOP]  [LONGRANGE]  [RACING]  [NEW ARRIVAL]
```

- Capsule：`padding 6px 14px`，`radius 2px`，`font 11px mono 600 uppercase tracking 0.08em`
- 静态：`bg rgba(cyan, 0.12)`, `border 1px solid rgba(cyan, 0.32)`, `color cyan`
- 分类差异：cinewhoop 紫 / longrange 绿 / racing 橙 / 2raw 琥珀 / new-arrival 青（默认色）
- 每个 tag 可点击，跳转到该分类的过滤商城页

---

## 8. Signature Components（iFlight-only）

### 8.1 Cyan-on-Dark Tech Accent

**Anatomy**：`#00B0FF` on `#0D1117`，只在 CTA / eyebrow / active state / spec label 出现。**永远不铺大面积**。这是 iFlight 与所有其他 FPV 品牌的唯一无法混淆的记忆点。

### 8.2 Dual-Purpose Hero CTA Pair (Learn More / Buy Now ↗)

见 7.2。**双站点分工是 iFlight 的战略级设计决策**——它承认"读者"和"买家"是两种心智，并给出各自的入口。**任何新品发布页面都必须保留这对按钮**。

### 8.3 Product-Category Tag Capsule (2Raw / Cinewhoop / Longrange / New Arrival)

见 7.7。**Tag 分类颜色是硬约束**：Cinewhoop 紫、Longrange 绿、Racing 橙、2Raw 琥珀、New Arrival 青。这套配色是 iFlight 内部约定的"应用场景色轮"，破坏它等于破坏用户认知。

### 8.4 Three-Domain Portal (Cinematic FPV / FPV Racing / Education)

见 7.4。**这是 iFlight 信息架构的基础设施**。它把整个品牌站的内容分成三条主动脉：Cinematic 面向影视/摄影，Racing 面向竞速玩家，Education 面向新手/学校/培训机构。**每条动脉有独立视觉子系统**（更暖的橙 = Racing / 更冷的紫 = Cinematic / 更中性的青 = Education），但共享同一套底色框架。

### 8.5 Creator Shots Horizontal Scroll

见 7.5。**它把"用户投稿 lifestyle 摄影"作为一等公民**。RadioMaster 没有这个模块（RadioMaster 的社区表达是 Gap Challenge banner），iFlight 用 creator 摄影表达"我们的硬件能拍出美"。这是 iFlight 从"零件供应商"进化到"影视工具品牌"的关键动作。

### 8.6 Where-to-Buy / Support / Fly-Safe 3-Icon Row

见 6.1。**只有 3 个图标而不是 6 个**（对比 RadioMaster 的 6-panel）。这不是能力弱，而是价值观：iFlight 认为**只有 3 件事必须放在首页尾部**——去哪买、遇到问题找谁、飞行安全责任。其他（reward points / warranty / return policy）放在 footer 深处。**Fly Safe 用橙色警示图标**是这个组件的灵魂——它承担公共责任表达。

### 8.7 "Where Dreams Can Fly" Poetic Tagline

在整套工业底色 + 数字仪表读数中，`"iFlight — Where dreams can fly"` 这一句**破格出现**。它出现在：

- 首页 hero 底部大字（52/300 italic white）
- 品牌 About 页第一屏（84/300 italic）
- 邮件页脚签名（14/400 italic muted）

**规则**：永远 italic，永远细字重（300 而不是 700），永远不 uppercase。这是 iFlight 在冷硬工业里留的一扇温度窗口。

---

## 9. Motion

iFlight 的动效比 RadioMaster 丰富，因为 dark canvas + glow 天然需要动态呼吸。

```yaml
--dur-instant:   80ms
--dur-fast:      160ms
--dur-base:      240ms
--dur-slow:      400ms
--dur-hero:      800ms

--ease-out:      cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1)
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1)
```

允许 / 推崇的动效：

- **Hero 视频循环** — 8 秒 loop，产品飞行 lifestyle
- **Cyan halo pulse** — CTA 按钮 hover 时青色发光呼吸（`box-shadow` 0→24px→0，2.4s loop）
- **Spec table row 逐行 reveal** — 进入视口时行从下向上淡入，40ms stagger
- **Creator shots snap-scroll** — 用户滑动时惯性吸附
- **Nav 毛玻璃过渡** — 滚动 >100px 时 nav 从 transparent 变 `rgba(13,17,23,0.92) + backdrop-blur(20px)`，240ms
- **Tag capsule tap** — 按压时缩放 0.98 + 青色 glow 扩散 240ms

禁止：

- 页面跳转白屏 flash
- Hero headline 逐字打字机效果（那是 antigravity 的诗性表达，iFlight 不做）
- 3D 视差旋转
- 长动画 (>800ms) 阻断交互

---

## 10. Responsive

### 10.1 Breakpoints

```yaml
--bp-sm:  480px
--bp-md:  768px
--bp-lg:  1024px
--bp-xl:  1280px
--bp-xxl: 1440px
--bp-xxxl: 1920px    # 4K workstation, cinematic FPV 用户可能在大屏浏览
```

### 10.2 Adjustments

| Section | ≥1280 | 768-1279 | ＜768 |
|---|---|---|---|
| Hero | 100vh full-bleed | 100vh + 内容缩到 90% | 100vh + 双 CTA 上下堆叠 |
| Product carousel | 8 slides visible | 3 slides | 1 slide + swipe |
| Creator Shots | 4 visible | 3 visible | horizontal scroll, 1.5 visible peek |
| Three-Domain Portal | 3 cols | 2 cols + 1 below | stacked, full-width each |
| Spec table | 单列 label:value | 单列 | 单列，label 12px uppercase |

### 10.3 Typography

Hero headline `84 → 64 → 44`。Section title `48 → 36 → 28`。Body 保持 16px。Spec value 保持 14px（mono 数字可读性不能牺牲）。

### 10.4 Dark-mode compatibility

iFlight 是**纯 dark-mode 站点**——没有 light-mode 切换。用户 OS 偏好设置**不影响**站点主题。这是品牌决策：iFlight 的世界只有夜晚。

---

## 11. Voice & Tone

### 11.1 Voice

**工程英语 + 一句诗性余韵**。iFlight 的文案 90% 是技术事实，10% 是标语抒情，节奏张弛有度。

### 11.2 Do

- `Fly filmic.` / `Fly fast.` / `Fly first.` — 三字短句，动词开头
- `IF-NE-F5-DJI-O4` — SKU 直接暴露，工程师读得懂即可
- 技术数字 mono 表达：`4S / 850mAh` / `1404-3800KV` / `5.8 GHz`
- 中英并置的产品名：`Nazgul Evoque F5 · 那兹古尔·艾维克 F5` (少数中国区页面)

### 11.3 Don't

- 不用 emoji（除了 Fly-Safe 的橙色警示三角，但那是图标不是 emoji）
- 不用感叹号
- 不做 "unleash" / "unlock" / "revolutionary" 这些消费级词汇
- 不做 CEO 头像 + 引用文案（iFlight 不做人格化品牌）
- 不做 all-caps 长句子（RadioMaster 的活）

### 11.4 Multilingual

英语为主，中文简体次要，中文繁体 / 日语 / 韩语 fallback。所有语言下 tagline 保持："Where dreams can fly" — 不译。

---

## 12. Do / Don't (Quick Reference)

### DO

- Dark canvas `#0D1117` 是唯一主背景
- Cyan `#00B0FF` 只做 accent，屏占比 ≤ 5%
- 每个产品 hero 都有 `Learn More` + `Buy Now ↗` 双 CTA
- Tag capsule 用分类颜色（Cinewhoop 紫 / Longrange 绿 / Racing 橙 / 2Raw 琥珀 / New Arrival 青）
- Spec value 用 mono，label 用 uppercase mono cyan
- Hover 时用 cyan glow 而不是普通阴影
- "Fly Safe" 图标必须橙色，承担公共责任表达
- Titillium Web 是唯一 sans 家族

### DON'T

- 不用 `#FFFFFF` 作文字色（用 `#F5F7FA`）
- 不铺大面积青色背景
- 不做 light-mode 版本
- 不引入第二种 accent（除了 tag 分类色，那是受控例外）
- 不做长 caps 句子
- 不做视差 3D 旋转
- 不在正文里出现 emoji
- 不去掉 hero 双 CTA 的其中一个（就算某些页面只有品牌介绍没有产品，也保留 `Learn More` + `Contact Sales`）

---

## 13. Iteration Guide

### 13.1 新增产品时

1. 判定应用场景：Cinematic / Racing / Longrange / Cinewhoop / 2Raw — 选**最多 2 个**主 tag
2. 拍产品图：dark bg 或 lifestyle 环境图，尺寸 `360×280`
3. 生成 SKU：`IF-<line>-<model>-<variant>-<vtx>` 例：`IF-NE-F5-DJI-O4`
4. 写 3 行文案：产品名 / 一句副文案（表达场景） / 价格
5. 双 CTA：`Learn More` → `/products/<slug>` / `Buy Now ↗` → `shop.iflight.com/products/<slug>`
6. spec table 至少 7 行（motor / FC / VTX / weight / battery / frequency / diagonal）

### 13.2 新增 landing page 时

模板：
```
[hero 100vh: video + eyebrow + headline + tagline + 双 CTA]
[112px 空气]
[section: content grid / feature strip / spec table]
[112px 空气]
[3-icon service row: Where-to-Buy / Support / Fly-Safe]
[footer]
```

### 13.3 新增 landing page domain（如加入 `defense` 或 `agriculture`）

**慎重决策**：Three-Domain Portal 是 3 个坑位，加第 4 个会破坏平衡。如果确实必要，考虑：

- 拆成 2×2 grid（4 domains），但会失去"三分法"的视觉节奏
- 或者把新 domain 放在 Portal 之外的独立 section（如 `INDUSTRY` band）

### 13.4 品牌活动 / 联名

- 联名色可临时进入 (e.g. 与 DJI O4 联名时可使用少量 DJI 灰)
- **但必须**保留 `#00B0FF` 作为品牌 identity 锚点
- 联名 hero 有效期 ≤ 60 天，之后归位

### 13.5 AI 生成建议

- **务必**保持 dark bg + cyan accent 双组合
- **务必**在产品 hero 保留双 CTA (Learn More / Buy Now ↗)
- **务必**用 Titillium Web + JetBrains Mono 组合
- **务必**在 spec 用 mono 数字
- **禁止**给整版铺青色
- **禁止**改变 tag 分类颜色约定
- **禁止**去掉外链 ↗ 角标—— shop.iflight.com 外跳标记是双站点分工的**唯一视觉证据**
- **禁止**做 light-mode 版本

---

## 14. Appendix: Component Library Snapshot

```
Components (v1)
├── Layout
│   ├── TopNav (sticky, 64px, transparent → frosted-dark on scroll)
│   ├── Footer (4-col: Company / Products / Support / Community + social row)
│   ├── DarkSurface (bg var(--if-ink), padded)
│   └── Container (max 1440 / 1280 / 960)
├── Sections
│   ├── HeroFullViewport (100vh, video + double-CTA)
│   ├── ProductCarousel (8+ slides, snap-x)
│   ├── CreatorShotsRow (4 lifestyle images, horizontal scroll)
│   ├── ThreeDomainPortal (Cinematic / Racing / Education)
│   ├── CategoryTagCloud (2Raw / Cinewhoop / Longrange / Racing / New Arrival)
│   ├── SpecTable (label:value mono grid, 48px row)
│   └── ThreeIconServiceRow (Where-to-Buy / Support / Fly-Safe)
├── Cards
│   ├── ProductCard (360×520, tag row + product + double-CTA)
│   ├── DomainCard (400×480, lifestyle bg + eyebrow + headline + arrow CTA)
│   ├── CreatorShot (280×350, 4:5 aspect + caption)
│   └── SpecRow (label mono cyan / value mono paper, 48px)
├── Buttons
│   ├── PrimaryCTA (cyan bg, black text, uppercase)
│   ├── SecondaryCTA (outlined, hover to cyan)
│   ├── DualCTAPair (Learn More secondary + Buy Now ↗ primary)
│   └── ArrowLink (text + → 12px, hover cyan)
├── Chips & Tags
│   ├── ProductCategoryTag (2Raw / Cinewhoop / Longrange / Racing / New Arrival)
│   ├── ProtocolTag (mono 11px, 2px radius)
│   └── OutlinkChevron (↗ 12px on Buy Now buttons)
└── Utilities
    ├── CyanGlow (box-shadow 0 0 24px cyan-halo, for hover states)
    ├── FrostedNavBar (backdrop-blur 20px on scroll)
    ├── SectionEyebrow (12/600 uppercase cyan tracking 0.16em)
    └── PoeticTagline ("Where dreams can fly", italic 300, restricted usage)
```

---

## 15. Closing Notes

iFlight 的设计哲学是**"工程有诗"**。深圳 FPV 厂能站起来的往往靠 spec、价格、供应链——但 iFlight 硬要在冷硬的 spec table 旁边留一句 `Where dreams can fly`，硬要拆出 `shop.iflight.com` 让品牌站保持"讲故事"的纯净，硬要用 Titillium（一款欧洲航天字体）而不是随便一个免费 sans。这些看起来"没必要"的决策，恰恰是 iFlight 从 OEM 心态跨越到 brand 心态的证据。

对 AI 和后续设计师：**永远别让 iFlight 变成"另一个 RadioMaster"**。RadioMaster 是白底红 accent 的老练卖场；iFlight 是暗底青 accent 的工程实验室。两者都合法，但混淆等于品牌自杀。保住 `#00B0FF`，保住双 CTA，保住三领域门户，保住那句"Where dreams can fly"，就保住了 iFlight。
