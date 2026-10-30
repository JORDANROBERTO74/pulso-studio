# Pulso Studio — Provenance & Compliance Ledger

This ledger records the origin, brand transformation and asset provenance for **Pulso Studio**.

## 1. Project Background & Transformation

- **Original Working Directory:** `E:\Projects\landing\next\overtake`
- **Rebuilt Project Name:** `pulso-studio`
- **Final Repository:** `https://github.com/JORDANROBERTO74/pulso-studio`
- **Live Production URL:** `https://pulsostudio-madrid.vercel.app`
- **Mode:** Change pass over the existing layout, raised to production standard.

The original template used the brand "NORTE Studio". It was discarded because `JORDANROBERTO74/norte-studio` already exists as a separate fictional studio project; reusing the name would create two indistinguishable repositories.

## 2. Brand & Identity

- **Brand:** Pulso
- **Sector:** Independent creative and strategic studio — strategy, identity, digital, content and experiences.
- **Visual system:** Warm cream (`#f2f0eb`), near-black ink (`#0b0b0c`), acid lime (`#d6ee54`), deep lime for small accents on cream (`#8daf20`), sage section background (`#dfe7c9`).
- **Typography:** Space Grotesk for display and body, Instrument Serif italic for accent words, both self-hosted via `next/font/google`.
- **Locale strategy:** Typed bilingual copy (`en`, `es`) on `/[locale]` routes, negotiated from `Accept-Language` and persisted in the `pulso.locale` cookie.

## 3. Asset & Visual Provenance

- **Photography:** Four images generated for this project with a text-to-image model and stored in `public/images`:
  - `hero.jpg` — folded lime and cream paper forms.
  - `work-01.jpg` — lime fabric folds under hard light.
  - `work-02.jpg` — overhead still life with black ceramic and lime paper.
  - `work-03.jpg` — abstract lime, cream and ink light field.
- **People and marks:** No faces, no identifiable individuals, no logos, no trademarked products appear in any asset.
- **Brand mark:** Custom SVG (`src/app/icon.svg`) — a lime waveform in a rounded ink square.
- **Runtime dependencies:** Zero remote font networks, image hosts or CDNs. All media is served from the repository; fonts are emitted at build time.

### Discarded reference assets

The template shipped four stock photographs under `public/overtake/`. They were removed before the first commit:

- `hero.jpg` showed a person's hand holding a branded coffee cup — an identifiable individual plus third-party packaging.
- `card-1.jpg` carried two visible third-party marks ("BY NINANATHIS" and "AZI MOCKUPS").
- `card-2.jpg` and `card-3.jpg` were generic stock studio photography.

None of them appears in this repository or its history.

## 4. Copy & Localisation

- All English copy was written for this project; the Spanish version is an original adaptation, not machine output pasted verbatim.
- Project titles, tags and years are fictional and do not reference real commissions or clients.
- The contact address uses the reserved `.example` TLD so no real mailbox is implied.

## 5. Architectural Verification

- Next.js 16.4.3 App Router with Turbopack; React 19.2.4; strict TypeScript.
- `/en` and `/es` are statically generated; `/` returns `307` to the negotiated locale.
- A `[locale]/[...rest]` catch-all renders the styled 404 for unknown paths instead of the framework default.
- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete without errors or warnings.
- `robots.txt`, multilingual `sitemap.xml`, `hreflang` alternates and a generated 1200x630 OpenGraph card are in place.
- Motion (hero entrance, service marquee) is CSS-only and is disabled under `prefers-reduced-motion`, so the page renders complete without JavaScript.

## License note

This repository contains derivative work. The license covers only the original
contributions of the copyright holder. See [LICENSE](../LICENSE).