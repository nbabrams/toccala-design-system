# Toccala — Design System

*Italian Warmth.*

Toccala Design is a small, warm, print-forward brand identity. The system it ships is not an app: it is a **brand canvas** — long-scroll marketing surfaces built out of deep-green and cream grounds, terracotta accents, humanist display type, a handwritten script accent, real photography of printed collateral and kitchen life, and a repeating paper texture. Think a family trattoria's stationery translated into a website: confident, unhurried, hand-touched.

---

## Sources

Everything here is transcribed from one source, supplied by the user:

| Source | Detail |
| --- | --- |
| **`Toccala For Claude.fig`** | Figma file, mounted read-only. One page, `01-Style-Tile`, with two frames: **Style-Tile-01** (node `1:12`, 1440×3354) and **Typography System** (node `4:899`, 853.802×1869). |

No GitHub repo, no codebase, no decks, and no live product URL were provided. There is no public Toccala reference used anywhere in this system — every value is read out of the file.

**What the file does *not* contain**, and therefore what this system does not invent:
- **No Figma component sets** (0 component families) — the "components" below are derived from the source's own explicitly-named layers (`Button / Primary`, `Button / Secondary`, `Button / Accent`, `Card / Plan`, `Hero-CTAs`, `Feature Line`, `KICKER LABEL HERE`, the wordmark lockup, the accent ellipses and the drawn vectors). Nothing else was added.
- **No Figma Variables** (0 token collections) and **no saved text/effect styles** (0 styles). The token files here are a faithful reading of the literal values in use; naming is ours.
- **No app UI, forms, navigation, tables, modals, toasts or icon set.** Those are absent from the source and absent here.
- **No logo symbol** — only the `Toccala.` wordmark, which *is* in the file as vector outlines and has been extracted verbatim to `assets/marks/toccala-wordmark.svg`.

---

## Content fundamentals

The source is a style tile, so its copy is deliberately placeholder — but the *shape* of the voice is legible and consistent, and one real sentence survives in the file:

> **"Stay top of mind. Stay connected. Earn more referrals."**

That line is the whole voice in miniature. Rules read out of it and the surrounding copy:

- **Short declaratives, stacked.** Three clauses, three full stops. Not one long sentence with commas. Rhythm over completeness.
- **Second person, implied.** The reader is addressed by verb ("Stay…", "Earn…", "Get Started"), almost never named. "You" appears rarely; "we"/"I" not at all.
- **Sentence case for headlines** ("A secondary headline would look like this", "Headline Text Here", "A Third Headline"). Never all-caps headlines.
- **ALL CAPS is reserved for eyebrows and micro-labels only** — `KICKER LABEL HERE`, `PLAN NAME HERE`, `FONTS`, `COLORS`, `ITALIAN WARMTH` — and always with wide letter-spacing (2.5–3px). Caps are a texture, not emphasis.
- **The handwritten line is lowercase, always.** "a handwritten accent.", "and another for good measure…", "a handwritten accent here". It is an aside — a margin note, a human interruption in the middle of tidy type. One per view, three to five words, often trailing into an ellipsis.
- **CTA copy is plain and verb-first**: "Get Started", "Primary Button", "Accent Button". No "Let's go!", no "Start your journey".
- **Links carry a trailing arrow** with generous space before it: `Text Link On Light  →`. The arrow does the pointing so the copy doesn't have to.
- **Numerals are content.** Prices ("$55") and step numbers ("01") are set enormous and treated as display elements, not as data.
- **No emoji anywhere.** Not in the source, not appropriate here.
- **Punctuation is warm but restrained** — one exclamation appears in the body sample ("Commodo consequat!"), the ellipsis appears in script. Em dashes are not a feature of this voice; full stops are.

**Vibe in three words:** grounded, generous, hand-touched. It should read like it was written by someone who owns the business, not by a growth team.

---

## Visual foundations

### Colour
A single warm palette, no light/dark theming. Twelve named Color styles — these names are the API:

| Token | Hex | Role |
| --- | --- | --- |
| `--pine` | `#1E3D34` | the primary. Page ground for statement bands, button fill, body text on light, the wordmark plate |
| `--brick` | `#B24B20` | plan labels, links on light, **accent button fill** |
| `--clay` | `#D76B45` | feature bullets, the large background disc. Darkened from the source `#D96F4A` to clear 3:1 against Paper |
| `--sun` | `#C6A14B` | links on dark, the hand-drawn underline |
| `--gold` | `#BE8D50` | secondary metallic |
| `--stone` | `#7D6A4D` | kicker eyebrows, script asides |
| `--sage` | `#A9BEB3` | cool shapes, and body copy on Pine |
| `--blueprint` | `#6377AE` | rare cool accent |
| `--ink` | `#201B17` | the near-black footer ground. Warmer than pure black; never `#000` |
| `--parchment` | `#F7F0E6` | page ground, and text on dark |
| `--paper` | `#FFF9F0` | header ground, the lighter near-white |
| `--white` | `#FFFFFF` | true white |

A handful of off-palette values appear in the source and are kept as `--raw-*` **source literals** (rust, salmon, sand, cream, deep parchment, two stones) purely so the Brand Canvas recreation stays exact. New work uses the palette.

Only four ground/ink pairings are legal — see the **Semantic pairings** card. Body copy on Pine is `--sage`, *not* white.

### Type
Three faces, three jobs, no exceptions.

- **Display: Optima nova LT Pro**. The whole heading ladder Display→H5 — **112 / 72 / 56 / 48 / 40 / 32** desktop, **48 / 42 / 36 / 32** mobile — is set in the **Medium Condensed** cut (`--font-display-cond`), which is what the source file uses. The price (54) and the 120px step numerals are condensed too. Only the **H6 eyebrow (18, Demi)** uses the regular width via `--font-display`. Flared humanist stems, and **flush `100%` leading** at every heading size — lines stack tight, with no extra air between them.
- **Text: Wix Madefor Text** (Medium 500 mostly, SemiBold 600 for micro-labels). All body copy, buttons, links, feature lines. Leading `1.4`. Scale: 24 / 20 / 18 / 16 / 14 / 12. **Every button label is 18** (Body L) at every size.
- **Script: Seaweed Script** (Regular 400, 24–34px). Accents only. Never a heading, never body.
- **Inter** appears in a supporting role only: the muted body block on the green statement band. (The 120px step numerals are Optima nova LT Pro Condensed — the source reconstruction read them as Inter, corrected here.)

Headlines are set flush left and allowed to be enormous relative to the column (112px headline over a 520px subhead). Letter-spacing is default everywhere *except* caps labels (`3px` / `2.5px`) and the big numerals (`-2%`).

### Spacing & layout
1440px fixed container. Hero gutter 64px; the dark bands use a 96px gutter and 90/110px vertical padding; the textured band uses 112px vertical. Section gaps are large and irregular by design — 153px between the plan card and the step column, 239px inside it. **Values are fractional and were kept fractional** (361.511, 606.532, 349.315, 391.862). Do not round them to a grid; the source has no grid.

Vertical rhythm inside a text block: `16px` kicker→headline→subhead, `20px` in the smaller step block, `32px` before a CTA, `36px` in the dark statement, `53px` between the copy stack and the CTA row.

### Corners, borders, elevation
Radii: `4px` (wordmark plate only), `12px` (top corners of a card's photo cap), `16px` (cards and hero imagery), `999px` (**every** button — there are no squared buttons), `50%` (discs and swatches).

Exactly **one shadow** in the whole system: `0 10px 30px rgba(82,66,41,0.18)` — a warm brown, not a grey. Cards get the shadow and *no border*. Exactly **one rule weight**, `1.5px`, at 25% opacity of the ground colour. Exactly **one outline**, `--stroke-outline` (`1.5px solid` deep green), on secondary buttons — a real stroke, never an inset shadow faking one. There are no inner shadows, no double borders, no glows.

### Backgrounds & imagery
Three background treatments, in ascending warmth:
1. **Flat cream / green / ink** fills.
2. **The paper texture** — a 440×440px tile repeating at native size (`assets/img/texture-tile.png`). The supplied tile carried a faint left-to-right luminance gradient that read as a 1px seam when repeated; the shipped file has that low-frequency lighting flattened and its edges wrap-blended, so only the paper grain remains. `texture-tile.jpg` is the untouched original. Never scaled, never tinted.
3. **Full-bleed photography** — a lifestyle photo overflowing its 656×612 frame on the green band; a tall portrait cutting across a section boundary.

Photography is warm daylight: cream paper, terracotta, wood, kitchen surfaces. Nothing cool, nothing high-contrast, no black-and-white, no visible grain filter. Images are either `16px`-rounded rectangles or full-bleed with no radius. One photo blends **multiply** into a terracotta disc — that is the only blend mode used.

Decorative shapes: large flat **discs** (349.315 and 404.635) bleeding off a section edge, and **hand-drawn vectors** — an open sketched ring looped around imagery, and a gold underline stroke beneath an emphasised word. There is a **dark green diagonal wedge** behind the portrait cluster. No gradients anywhere. No transparency or blur except the terracotta disc at 92% alpha and the 25% hairlines.

### Motion, hover and press — extrapolated
**The source is a static style tile and defines no interaction states.** What ships here is a deliberately minimal reading of the brand, and it is the part most in need of your review:

- **Hover:** solid buttons darken 8% (`filter: brightness(0.92)`); the secondary button fills with `rgba(30,61,52,0.06)`; text links drop to 75% opacity. No colour *changes*, no shadows appearing, no lift.
- **Press:** `scale(0.985)` — a small settle, not a bounce.
- **Timing:** `220ms` default, `140ms` for hovers, on `cubic-bezier(0.22,0.61,0.36,1)` — an unhurried ease-out. No spring, no bounce, no overshoot.
- **Transitions:** opacity and colour fades only. The brand's energy comes from scale and texture, not from movement.

### Layout rules
Nothing in the source is fixed or sticky — no sticky header, no floating CTA. Decorative discs and drawn marks are absolutely positioned against a section and allowed to **overflow section boundaries** (the portrait cluster spans two bands). Content itself stays inside the gutters.

---

## Iconography

**The source file contains no icon set** — no icon font, no sprite, no SVG icon library, no Figma icon components. This is not an omission in the extraction; the file genuinely has none. Accordingly:

- The only glyph-like UI marks are an **8px terracotta dot** (feature-line bullet) and a **`→` arrow character** appended to text links. Both are reproduced as-is: the dot is a `<div>`, the arrow is the Unicode character, not an SVG.
- **No emoji.** None in the source; do not introduce them.
- The **vector assets that do exist are illustrative, not iconographic**: the `Toccala.` wordmark outlines, a hand-sketched open ring (two variants) and a hand-drawn gold underline. All three are copied out verbatim to `assets/marks/`, with one pre-tinted file per palette colour they appear in.
- **If a design needs functional icons** (chevrons, close, arrows in buttons), no set is authorised. Ask the user for one. Do not substitute Lucide/Heroicons silently and do not hand-draw glyphs — a drawn icon would read as brand vocabulary that Toccala has not defined.

---

## Fonts

All four faces are the real thing — no substitutions.

- **Optima nova LT Pro** (display) is served from the user's **Adobe Fonts kit `tcs2wbu`** (`https://use.typekit.net/tcs2wbu.css`). `tokens/fonts.css` aliases Adobe's `optima-nova-lt-pro` family to the source file's own family name so `--font-display` resolves directly. Ships Medium 500, Demi 600, Bold 700 and all three italics, plus `--font-display-cond` for the condensed cut.
  - **Two caveats.** The kit is **domain-locked** — if display type falls back to Georgia on a new host, add that domain to kit `tcs2wbu` in Adobe Fonts. And the kit carries only **one condensed weight (500)**, so the source's *Demi Condensed* renders as Medium Condensed; add it to the kit if you need it.
- **Wix Madefor Text**, **Seaweed Script** and **Inter** load from Google Fonts.

---

## Index

**Root**
- `styles.css` — the single entry point; `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills wrapper so this system can be used from Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (Adobe Fonts kit + `@font-face` aliases), `colors.css`, `typography.css` (incl. `.t-*` utility classes for all 20 type rows), `spacing.css`, `effects.css`, `base.css`.

**`assets/`**
- `marks/toccala-wordmark.svg` — the wordmark, extracted from the source outlines, plus `-cream` / `-green` / `-ink` tinted copies.
- `marks/sketch-ring.svg`, `marks/sketch-ring-2.svg`, `marks/underline-swoosh.svg` — the hand-drawn vectors, each with `-salmon` / `-slate` / `-green` (rings) and `-gold` / `-sienna` / `-green` (swoosh) tinted copies.
- **Why tinted copies?** The marks are rendered as plain `<img>`, not as CSS `mask-image` — masking an external SVG paints nothing in some engines. Adding a new tone means adding a file.
- `img/` — `texture-tile.png` (440×440 seamless repeat) plus `texture-tile.jpg` (the original), `print-kit.png`, `lifestyle-fridge.png`, `portrait-tall.png`, `band-bottom.png`, `card-photo.jpg`, `card-mid.png`, `card-overlay.png`, `hero-stamp.jpg`.

**Components** (12, grouped by concern — each with `.d.ts` and `.prompt.md`)
- `components/core/` — **Button**, **TextLink**, **Kicker**, **Divider**, **ScriptAccent**, **Wordmark**
- `components/cards/` — **PlanCard**, **FeatureItem**
- `components/decor/` — **AccentCircle**, **SketchRing**, **UnderlineSwoosh**, **TexturePanel**

*Intentional additions:* `SketchRing`, `UnderlineSwoosh` and `TexturePanel` are thin wrappers around assets that exist in the source as raw vectors/fills rather than named components — wrapped so the marks can be recoloured and reused instead of pasted. `Divider` likewise wraps the source's bare 1.5px rectangle rule.

**`figma/`** — the Figma-native layer, for building *in* Figma rather than in HTML.
- `variables.json` — four Variable collections (Color, Spacing, Radius, Type).
- `text-styles.json` — all 20 type rows + 5 extra named styles + the one Effect Style.
- `setup-plugin/` — a Figma plugin that creates all of the above in one idempotent run.
- `components.md` — per-component build recipes (auto-layout, exact padding, variable bindings) and the five section recipes.
- `README.md` — setup order, Claude Code vs Claude CoWork, and how to share with other designers.

**`guidelines/`** — 21 specimen cards across the *Colors*, *Type*, *Spacing* and *Brand* groups.

**`templates/`**
- `brand-canvas/BrandCanvas.dc.html` — the long-scroll marketing page as a reusable template (+ `ds-base.js`, `README.md`).

**`ui_kits/`**
- `brand-canvas/` — full recreation of the Style-Tile-01 surface (`index.html`, five section files, `README.md`).
- `typography-sheet/` — the 20-row type specimen frame (`index.html`, `README.md`).

No slide template exists in the source, so no sample slides were authored.
