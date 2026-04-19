# DogMetrics — Marketing site

Next.js 16 app rendering the DogMetrics marketing site in Swedish (default) and English.

## Stack

- Next.js 16 App Router, static export (`output: 'export'`)
- TypeScript, React 19
- Handwritten CSS with design tokens in `styles/globals.css`
- i18n dictionaries in `messages/sv.json` and `messages/en.json` (260 keys)

## Development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000> — redirects to `/sv`.

## Production build

```bash
npm run build
```

Generates static HTML in `out/`. With `GITHUB_PAGES=true`, the build applies the `/dogmetrics-web` base path for Pages deployment.

## Project layout

```
app/                      Routes (App Router)
  layout.tsx              Root <html>/<body>
  page.tsx                / → /sv redirect
  [locale]/               /sv, /en
    layout.tsx            Locale passthrough + lang sync script
    page.tsx              Home
    product/
    for-breed-clubs/
    journal/
    about/
components/
  ui/                     Primitives (Button, Container, Section, Eyebrow, Heading, Lede, Tag, PageHeader, KpiStrip)
  site/                   Nav, Footer, Logo, LangToggle
  home/                   Hero, HeroStrip, ProductMock, ClientsBand, IntroBlock, FeaturesGrid, FeatureCard, SvkCase, TeasersRow, ContactBand
  product/                AnchorsBar, ProductBlock, FeatList, Illustration + 6 illustration variants, IntegrationsGrid
  clubs/                  WhoCard, Timeline, SvkCaseBlock
  journal/                FeaturedPost, PostRow, FilterBar
  about/                  TeamCard, Value
lib/
  i18n.ts                 Locale helpers + createT()
  paths.ts                BASE_PATH / asset() helper for static asset URLs
messages/                 Flat SV + EN dictionaries
styles/globals.css        Tokens + site + per-page styles
public/                   Logo assets
handoff/                  Original design brief + HTML references
```

## Deployment (GitHub Pages)

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `next build` with `GITHUB_PAGES=true` and deploys `out/` to Pages.

**First-time setup:** in repo Settings → Pages, set **Source** to **GitHub Actions**.

Live URL: <https://jupeterson.github.io/dogmetrics-web/>

## Known gaps

Carried over from the handoff README:

- Blog posts are hard-coded (move to MDX or a CMS).
- Contact form in `components/home/ContactBand.tsx` still stubs with `alert()`.
- Journal filter pills don't actually filter yet.
- Team bios on the About page are placeholders — replace when real copy is ready.
