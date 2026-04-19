# Handoff: DogMetrics Marketing Website

## Overview
Marketing website for **DogMetrics** — a Swedish company that sells *Insight*, a breed-data platform for kennel & breed clubs. First live installation is Svenska Vorstehklubben at `insight.vorsteh.se`.

The site has five pages (Home, Product, For breed clubs, Journal, About) and a bilingual **Swedish / English** language toggle persisted in `localStorage`.

## About the Design Files
The files in `design/` are **design references created in HTML** — static prototypes showing the intended look, layout, copy and behavior. They are not meant to be shipped as-is. The task is to **recreate these designs in the production codebase** — e.g. a Next.js or Astro app with a proper i18n library (next-intl / next-i18next / astro-i18n) and a CMS-backed blog — using the project's established patterns.

## Fidelity
**High-fidelity.** Exact colors, typography scales, spacing, copy, and component geometry are all final. Pixel-perfect recreation is expected.

## Tech recommendation
- **Framework**: Next.js (App Router) or Astro. Both give you static HTML, per-route metadata, and easy deploys.
- **Styling**: Tailwind or vanilla CSS with tokens. All values are already captured as CSS variables in `design/styles/tokens.css`.
- **i18n**: next-intl (Next.js) or astro-i18next (Astro). Swedish is the primary market; default to `sv` with English fallback.
- **Blog**: MDX or a headless CMS (Sanity, Contentlayer, Keystatic).
- **Hosting**: Vercel / Netlify. Domain: `dogmetrics.se` (recommended) with `/sv` and `/en` locale routes.
- **Forms**: The demo-request form in `index.html#contact` is a placeholder; wire it to e.g. Plunk, Formspree, or a Resend-backed API route.

## Design tokens

### Colors (see `styles/tokens.css`)
```
--bone:       #F5F1E8   /* page background */
--paper:      #FBF8F0   /* cards */
--ink:        #1B1A17   /* body text, dark sections */
--ink-soft:   #4A4842   /* secondary text */
--stone:      #8A867C   /* meta, eyebrows */

--rust:       #8C3A1F   /* primary accent */
--rust-deep:  #6B2B15
--rust-soft:  #B05636
--tan:        #D9C3A0   /* warm neutral */
--tan-soft:   #E8D7B8
--tan-pale:   #F0E4CC   /* tinted section background */

--sage:       #4A5240   /* secondary data color */
--line:       #E4DFD2   /* borders */
--line-soft:  #EFEADD
```
Tweaks panel exposes three alternate palettes (`forest`, `indigo`, `clay`) and a dark mode — these are nice-to-haves, not required for v1. Default palette is `rust`.

### Typography
- **Display**: Instrument Serif (400, italic) — hero, h1–h4 on marketing sections.
- **Body**: Inter (400/500/600/700) — lede, paragraphs, buttons.
- **Mono**: JetBrains Mono (400/500) — eyebrows, meta, data labels, stat labels.
- Display type uses `text-wrap: balance` for headlines.

**Scale** (see `tokens.css` for the source of truth):
- h1/`.display`: `clamp(56px, 7vw, 112px)`, line-height 0.98, letter-spacing −0.02em
- h2/`.h2`: `clamp(36px, 4.5vw, 64px)`
- h3/`.h3`: `clamp(28px, 3vw, 40px)`
- `.lede`: 19px, line-height 1.55, color `--ink-soft`, max-width 58ch
- `.eyebrow`: 12px mono, letter-spacing 0.14em, uppercase, color `--stone`

### Spacing & geometry
- Container: `max-width: 1280px`, gutter `clamp(20px, 4vw, 48px)`
- Section padding: `clamp(80px, 10vw, 140px) 0`
- Radii: `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 14px`, pill buttons `999px`
- Shadow (card hover): `0 2px 8px rgba(27,26,23,0.04), 0 10px 30px -10px rgba(27,26,23,0.08)`

## Screens

### 1. Home (`index.html`)
Sections, top to bottom:
1. **Nav** — sticky, blurred, 72px tall. Logo + 5 links + lang toggle (SV/EN pill) + "Live at SVK" ghost button + "Book a demo" primary.
2. **Hero strip** — mono caps: "EST. 2024 · Burträsk / Göteborg" | "Breed data infrastructure" | "For kennel & breed clubs".
3. **Hero** — 2-col: left headline "Where dogs / and data *meet.*" (serif, italic accent in rust), right lede + CTA row.
4. **Product mock** — browser-chrome card with URL `insight.vorsteh.se/sv` showing breed snapshot stats + a matching ranking table with AI score chips.
5. **Clients band** — "Used by" + 4 slots (SVK filled, two pilot placeholders, one "next in line").
6. **Intro block** — 2-col eyebrow/headline + 3 paragraphs.
7. **KPI strip** — 4 columns: 2,471 dogs indexed / 14 years of data / <80ms queries / 1 of 1 live installs.
8. **Features grid** — 3×2 cards (Pedigree, Matching, Statistics, Mating lists, Trial results, Health registry), each with `NN / topic` mono label, headline, paragraph, viz footer.
9. **SVK case (dark section)** — `--ink` background, `--tan` accents. Quote + 4 stats (7 sections replaced / 2.4k dogs / 14y data / 6wk migration).
10. **Team teaser + Journal teaser** — 2-col.
11. **Contact band** — `--tan-pale` background, email + club fields + submit.
12. **Footer** — 4 columns + meta line.

### 2. Product (`product.html`)
- Page header with eyebrow + h1 + lede.
- Sticky anchors bar (blurred) with 7 pill links.
- 7 feature blocks alternating image-left / image-right, each with eyebrow, h2, lede, bulleted feat-list, and a bespoke SVG/HTML illustration (pedigree tree, ranked matches with progress bars, stat tiles with line chart, mating list rows, results timeline, health donut tiles, integrations grid).
- Final CTA section on `--tan-pale`.

### 3. For breed clubs (`for-breed-clubs.html`)
- Page header.
- "Who inside the club" — 3 cards (Board / Breeding committee / Members).
- "How we work" — 5-week timeline on `--tan-pale` (W01–W05).
- SVK case study dark block (ink bg) — challenge / approach / outcome 3-col.
- Pricing CTA panel centered.

### 4. Journal (`blog.html`)
- Page header.
- Featured post — 2-col hero with decorative patterned tile on right.
- Filter pills (All / Product / Data / Field / Company) — visual only in mock, wire to real filters.
- Post list — date | title | category | reading-time rows, 1px dividers.

### 5. About (`about.html`)
- Page header with lede.
- Story block — 2-col, 3 paragraphs of company origin (Burträsk + Göteborg founders).
- Team grid — 4 cards with gradient-circle avatar, name, role, bio.
- Values — 3 columns, top-bordered in `--rust`.
- Contact strip on `--tan-pale`.

## Shared chrome

### Nav (`scripts/site.js` → `renderNav`)
Links: Home / Product / For breed clubs / Journal / About. Active link uses `--ink` text + underline. Lang toggle is a pill group; active side has `--ink` background, `--bone` text.

### Footer (`scripts/site.js` → `renderFooter`)
4 columns: About/tagline · Product · Customers · Company. Meta row: `© {year} DogMetrics AB · Burträsk & Göteborg` left, `Est. 2024 · SKK-friendly` right. **HQ is always rendered as "Burträsk & Göteborg"** — never Stockholm.

## Interactions & behavior
- **Language toggle**: click SV/EN → writes `localStorage.dogmetrics_lang`, re-renders nav/footer, re-applies all `data-i18n` bindings. Document `lang` attr updates too.
- **Contact form**: currently stubs with `alert()`. Must POST to a real endpoint + show success/error inline.
- **Anchors bar** (Product page): sticky, offset by nav height. Scroll behavior should be smooth.
- **Filter pills** (Journal): wire to real filtering (client-side is fine — posts volume is low).
- **Hover states**:
  - Nav links: color → `--ink`
  - Buttons: `translateY(-1px)` and bg-deep shade
  - Feature cards: border → `--rust`, `translateY(-2px)`
  - Article rows: title color → `--rust`
- **Animations**: no heavy motion. Keep everything under 200ms ease.

## i18n structure
All user-facing copy lives in `scripts/i18n.js` under `window.I18N.en` and `window.I18N.sv`. The HTML uses `data-i18n="key"` on text nodes and `data-i18n-attr="placeholder:key,title:key"` for attributes. **When porting to a proper framework, move this dictionary into your i18n library's locale files** (e.g. `messages/sv.json`, `messages/en.json`) and replace the `data-i18n` scaffolding with the framework's `<Trans>` / `t()` helpers.

## Assets
- **Logo**: `assets/dogmetrics-logo.png` (full wordmark on transparent bg) and `assets/dogmetrics-mark.png` (circular tan mark only, used in nav). Cleaned from a source provided by the client — checkerboard background removed.
- **No other raster imagery** — everything else is CSS/SVG.
- Fonts loaded from Google Fonts in the page `<head>`.

## Files in this bundle
```
design/
├── index.html              Home
├── product.html            Product
├── for-breed-clubs.html    For breed clubs
├── blog.html               Journal
├── about.html              About
├── styles/
│   ├── tokens.css          Colors, type, spacing, base elements, buttons
│   └── site.css            Nav, footer, cards, kpi strip, page header, tweaks panel
├── scripts/
│   ├── i18n.js             SV + EN dictionaries (single source of truth for copy)
│   └── site.js             Nav + footer render, i18n apply, tweaks panel, language toggle
└── assets/
    ├── dogmetrics-logo.png
    └── dogmetrics-mark.png
```

## Open the references
Serve the `design/` folder with any static server (`npx serve design` or `python -m http.server`) and open `index.html`. The language toggle in the top-right nav flips the whole site.

## Known gaps to resolve in production
- Blog content is hard-coded dummy posts — needs CMS or MDX.
- Contact form is a stub.
- Tweaks panel (palette/font/mode switcher) is a design exploration tool, not a production feature — drop it from the shipped site.
- SEO: add proper `<meta>`, OpenGraph, sitemap, `robots.txt`, `lang`-aware canonical URLs.
- Legal: footer needs links to GDPR/integritetspolicy and company info (org.nr).
