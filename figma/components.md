# Building Toccala components in Figma

Read this after running the setup plugin. It maps every component family in this design system to the frame you'd draw in Figma — auto-layout direction, exact padding, which variable binds where. Values are verbatim from the source file; **do not round them.**

Naming convention: slash-namespaced, matching the source file's own layer names (`Button / Primary`, `Card / Plan`).

---

## Button
Component set, one variant property `Variant = Primary | Secondary | Accent` and one `Size = md | lg | card`.

- Frame, **horizontal** auto-layout, `Center` / `Center`, gap `Gap/12`.
- Corner radius → `Radius/Pill` (999). **Never** a squared button.
- Padding: `md` and `lg` = `18` top/bottom, `38` left/right. `card` = `16` / `34`.
- Label text style: **`Body/L Mobile` (18) on all three sizes.** Buttons never drop to 16.
- Fills / strokes:
  - **Primary** — fill `Semantic/Action Solid` (Pine), label `Semantic/Action Solid Ink` (Sand).
  - **Secondary** — no fill, **inside stroke** `Stroke/Rule` (1.5) in `Semantic/Action Outline`, label same. A real stroke, not an inner shadow.
  - **Accent** — fill `Semantic/Accent` (**Brick** `#B24B20`, not Clay — Clay fails contrast behind Parchment labels), label `Semantic/Text On Dark` (Parchment).
- Hover/press are extrapolated, not in the source: 8% darken, `0.985` scale. Build them as interactive-component states only if you need the prototype.

## TextLink
Two variants, `Tone = Light | Dark`. Text node, underlined, with a trailing `→` separated by two en-spaces.
- **Light** — `17px` Wix Madefor Medium, `Semantic/Link On Light` (Brick).
- **Dark** — `18px`, `Semantic/Link On Dark` (Sun).

## Kicker
Four variants, `Tone = Label | Plan | Dark | Hero`. Text node only.
- **Label** — `Heading/H6 Eyebrow` (**18** Demi, 3px track, uppercase), `Semantic/Text Kicker`.
- **Plan** — `Label/Plan` (13 Wix Madefor, 2.5px track, uppercase), `Semantic/Text Plan Label`.
- **Dark** — `Label/Micro` (13, 3px track), `Semantic/Text On Dark Soft`.
- **Hero** — `24px` Optima Demi, uppercase, `Semantic/Text Primary`.

Never sentence-case a kicker, never drop the tracking.

## Divider
Rectangle, height `Stroke/Rule` (1.5), fill `Semantic/Hairline` (Pine 25%) or `Semantic/Hairline On Dark`. Source width in the plan card is `280`.

## ScriptAccent
Text node, `Accent/Script` (Seaweed Script 34/44) or `Accent/Script Small` (29/24). Lowercase, three to five words, often rotated `-3°` to `-4°`. `Semantic/Text Primary` on light, `Palette/Stone` for margin asides.

## Wordmark
Not a drawn component — **place `assets/marks/toccala-wordmark.svg`**, native `184 × 45`. Three tinted files ship (`-cream`, `-green`, `-ink`); in Figma you can instead place the base SVG once and recolour the vector fill to a variable.
- `Plate` variant: wrap in a frame, `24` padding all round, radius `Radius/XS` (4), fill `Semantic/Surface Dark`, mark in Parchment.

There is **no symbol or icon lockup** in the source. Where a mark is needed and this wordmark won't do, set the name in the display face.

## PlanCard
Frame, **vertical** auto-layout, gap `Gap/16`, padding `8` / `8` / `40` / `8`. Width `361.511`. Radius `Radius/LG` (16). Fill `Semantic/Surface Card`. Effect style `Elevation/Card`. **No stroke** — elevation is the shadow alone.
1. Media cap: `345.511 × 295.018`, radius `12 / 12 / 0 / 0`, image fill `Cover`.
2. Body frame, vertical, gap `Gap/16`, horizontal padding `16`:
   - `Kicker / Plan`
   - Price row: horizontal, gap `Gap/8`, align `Bottom` — `Numeral/Price` (54) + `15px` Wix Madefor cadence, both `Semantic/Text Primary`.
   - `Divider` at `280`.
   - Three × `FeatureItem`.
   - `Button / Primary` at `Size = card`.

## FeatureItem
Horizontal auto-layout, gap `Gap/10`, align `Center`. Ellipse `Size/Bullet` (8) filled `Semantic/Bullet` (Clay) + `Body/S` text. **A dot, never a checkmark or icon.**

## AccentCircle
Ellipse, fill from the palette. Sizes in the source: `56` (swatch), `349.315` and `404.635` (background discs). The Clay disc is **92% opacity** so photography multiplies through it. Flat colour only — no gradients.

## SketchRing
Place `assets/marks/sketch-ring.svg` (hero) or `sketch-ring-2.svg` (rotated, over the dark wedge). Native `276.639 × 299.102`. Loop it around a photo or disc so it **breaks the edge** — never centre it neatly.

## UnderlineSwoosh
Place `assets/marks/underline-swoosh.svg`, native `140.871 × 5.272`, fill `Palette/Sun`. Sits under one emphasised word, slightly wider than the word.

## TexturePanel
Frame with an image fill of `assets/img/texture-tile.png`, set to **Tile** at `440 × 440`. Never scale or tint it.

---

## Section recipes

The source defines five section types. Build these as top-level frames at `Layout/Container Max` (1440) wide.

| Section | Height | Ground | Padding | Layout |
| --- | --- | --- | --- | --- |
| Header | `280.919` | `Semantic/Surface Page` | `81 / 0 / 64 / 0` | vertical, centred: plated wordmark + 18px Optima Bold caps line |
| Hero | `873` | none (canvas shows) | `24 / 64` | vertical, gap `Gap/64`; inner copy column `582` wide, gap `Gap/53`; `Display/Desktop` (112) headline; image `664 × 503` radius 16 |
| Statement | `612` | `Semantic/Surface Dark` | none | horizontal, gap `Gap/96`; photo frame `656 × 612` with the image overflowing to `606.532 × 616.895`; copy column gap `Gap/36` |
| Offer band | `1085` | texture tile | `112 / 0` | horizontal, gap `Gap/153`, align `Top`; plan card + step column `391.862` |
| Footer | `405` | `Semantic/Surface Ink` | `90 / 96 / 110 / 96` | horizontal, gap `Gap/140`; font list `280` wide + swatch rows `632` wide, gap `Gap/18` / `Gap/16` |

**Leave ~106px of bare `Semantic/Surface Canvas` between the offer band and the footer.** The portrait cluster's Pine wedge deliberately overhangs its section and must land on cream, not on the ink footer.

## Rules that are easy to break

- Decorative discs and drawn marks **overflow section boundaries on purpose.** Turn clipping off on those frames.
- Section gaps are large and irregular — `153`, `239`. There is **no grid**. Fractional sizes (`361.511`, `606.532`) are correct.
- One shadow (`Elevation/Card`), one rule weight (`1.5`), one outline. No inner shadows, no glows, no gradients.
- Body copy on Pine is `Semantic/Text Muted On Dark` (Sage), **not** white.
- Photography is warm daylight. Either `Radius/LG` rounded or full-bleed with no radius. One `Multiply` blend, on the Clay disc only.
