# Brand Canvas (UI kit)

A faithful recreation of the only product surface in the source Figma file — the **Style-Tile-01** frame (1440×3354, node `1:12`). It is the brand's marketing canvas: header lockup, hero, dark statement band, textured offer band, and the fonts/colours footer.

Every measurement, colour and type value is transcribed from the source; fractional sizes (361.511, 606.532, 349.315…) are kept as-is.

| File | Source region |
| --- | --- |
| `header.jsx` | "Header" — plated wordmark + "Italian Warmth" |
| `hero.jsx` | "01-Hero" — kicker + script accent, 132px headline, CTA pair, print-kit photo, terracotta disc / sketch ring / gold swoosh |
| `statement.jsx` | "02-Guide-Authority" — full-bleed lifestyle photo on deep green, 56px headline, muted body, gold link |
| `offer-band.jsx` | textured band — plan card, "01" numeral step, accent button, mint disc, portrait cluster with dark wedge and two script accents |
| `fonts-colors-band.jsx` | "Fonts & Colors" — the ink footer listing the three faces and both swatch rows |

**One composition note.** The source tile leaves a ~106px band of bare canvas between the offer band and the "Fonts & Colors" footer (the flex column ends at y≈2846.9; the footer is absolutely placed at y 2949). That gap is reproduced as a spacer in `index.html` — without it the portrait cluster's pine wedge, which deliberately overhangs its section, lands on the ink footer instead of on cream.

**Interaction.** The plan card's *Get Started* button cycles the plan tier (and the step numeral with it); buttons and links carry the extrapolated hover/press states. Everything else is presentational — the source defines no navigation, forms or app surfaces.

Open `index.html`. Designed at 1440px wide.
