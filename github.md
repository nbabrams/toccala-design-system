repo: nbabrams/toccala-design-system
branch: main

## Last sync

date: 2026-08-13T18:45:22Z
direction: read-only comparison (the repo is populated by the user's manual export; Claude cannot push)

### Updated in this project
- Repo renamed `toccata-design-system` → `toccala-design-system`; `repo:` line updated to match the brand spelling.
- Confirmed Fable's report: the repo's `figma/variables.json` still aliases `Semantic/Accent` → `Palette/Clay`. Fixed locally to `Palette/Brick`, and the plugin payload rebuilt to match.
- Compared repo `tokens/` against local. The repo carries the palette rename, `--clay:#D76B45` and `--accent:var(--brick)`, but **not** the 100% display leading.
- Repo is one edit-round behind: `--lh-display` is still `1.1` there, and `.t-h2` / `.t-h5` / `.t-h6` still resolve to `--lh-heading`.

## Drift — repo is behind on these files

Everything below is current in this project and stale in `main` as of the sync above.

| File | What's missing upstream |
| --- | --- |
| `tokens/typography.css` | `--lh-display:1` (was 1.1); `.t-h2`/`.t-h5`/`.t-h6` moved onto `--lh-display` |
| `figma/variables.json` | `Semantic/Accent` → `Palette/Brick` (+ contrast note in its description) |
| `figma/setup-plugin/code.js` | payload regenerated from both manifests |
| `figma/text-styles.json` | all display/heading rows at `lineHeight` 100% |
| `ui_kits/brand-canvas/hero.jsx` | headline 112/112 |
| `ui_kits/brand-canvas/statement.jsx` | headline 56/56 |
| `ui_kits/typography-sheet/index.html` | flush leading, `· 100%` labels, `main{width:853.802px}` unit fix |
| `templates/brand-canvas/BrandCanvas.dc.html` | headline 112/112, statement 56/56, kicker 24/24 |
| `guidelines/type-display.card.html` | `gap:2px` unit fix, leading |
| `guidelines/type-mobile.card.html` | "100% leading" subtitle |
| `readme.md`, `README.md` | flush-leading rule in VISUAL FOUNDATIONS |

## Repo hygiene

- **`readme.md` and `README.md` both exist in this project** but only `README.md` is committed. Git is case-sensitive and macOS is not, so keeping both is a collision risk. They are byte-identical by construction — consider committing only `README.md`.
- **`uploads/` is committed** (two user screenshots and the original texture JPEG). Not referenced by any card or component; safe to gitignore.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated on every turn. Committed intentionally so Claude Fable and other file-reading agents see the compiled bundle without running the compiler; expect them in every diff.

## Screen map

| Project surface | Repo files it is built from |
| --- | --- |
| `ui_kits/brand-canvas/index.html` | `ui_kits/brand-canvas/*.jsx`, `components/**`, `tokens/**` |
| `ui_kits/typography-sheet/index.html` | `tokens/typography.css`, `tokens/fonts.css` |
| `templates/brand-canvas/BrandCanvas.dc.html` | `components/**`, `tokens/**`, `assets/**` |
| `guidelines/*.card.html` (22 cards) | `tokens/**`, `assets/marks/**`, `assets/img/**` |
| `components/{core,cards,decor}/` | self — 12 component families with `.d.ts` + `.prompt.md` + one card each |
| `figma/` | self — `variables.json`, `text-styles.json`, `setup-plugin/`, `components.md` |
| `thumbnail.html` | `tokens/colors.css`, `assets/marks/toccala-wordmark-cream.svg` |
