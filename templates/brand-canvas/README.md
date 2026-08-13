# Brand Canvas (template)

Toccala's long-scroll marketing page, ready to fill with real copy: plated wordmark header + "Italian Warmth" line, oversized hero (kicker + script accent, 132px headline, CTA pair, print-kit photo, terracotta disc and sketch ring), the dark statement band with a full-bleed lifestyle photo, a textured offer band with a plan card and numbered step, and the ink fonts/colours footer.

Composes `Wordmark`, `Button`, `TextLink`, `SketchRing` and `PlanCard` from the design system. Every heading, paragraph and label is plain markup — click and type over it.

**Tweaks:** `showDecor` (the disc / stamp / sketch-ring cluster in the hero) and `showPricing` (the whole offer band).

Designed at 1440px wide. `ds-base.js` loads `styles.css` and the compiled bundle from `../..` — in a consuming project, edit its one `base` line to point at the bound `_ds/<folder>`.
