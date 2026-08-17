repo: nbabrams/toccala-design-system
branch: main

## Pending push

date: 2026-08-14T00:00:00Z
change: H2 leading 100% → 110% (`--lh-h2:1.1`). Touched: `tokens/typography.css`, `tokens/base.css`, `figma/text-styles.json`, `figma/setup-plugin/code.js`, `ui_kits/typography-sheet/index.html`, `ui_kits/brand-canvas/statement.jsx`, `guidelines/type-mobile.card.html`. Not yet on `main` — export the project and push (Claude has read access only).

## Last sync

date: 2026-08-13T19:19:24Z
commit: 060f0d267f56
direction: user exports from this project and pushes manually (Claude reads the repo to detect drift; it cannot push)

### Updated in this project
- Verified the manual push: `main` is level with this project. No drift in tokens, components, cards, templates or the Figma layer.
- `uploads/` removed upstream and a `.gitignore` added — repo hygiene items closed.
- `tokens/typography.css` upstream carries `--lh-display:1` and `.t-h2` / `.t-h5` / `.t-h6` on `--lh-display`.
- `figma/variables.json` upstream aliases `Semantic/Accent` → `Palette/Brick`; `Semantic/Bullet` correctly stays on `Palette/Clay`.

## Verified at this commit

| Check | State |
| --- | --- |
| Display / heading leading | `--lh-display:1` — all 11 heading rows flush |
| Type ladder | 112 / 72 / 56 / 48 / 40 / 32 / 18 desktop · 48 / 42 / 36 / 32 mobile |
| Clay | `#D76B45` (3.30:1 on Paper) |
| Accent button | `--accent:var(--brick)` and `Semantic/Accent` → `Palette/Brick` (4.73:1) |
| Figma plugin payload | regenerated from both manifests, agrees with `variables.json` |
| File count | 120 (`uploads/` removed, `.gitignore` added) |

## Repo hygiene

- `uploads/` deleted and gitignored (2026-08-13). The seamless tile actually used is `assets/img/texture-tile.png`.
- `readme.md` is not committed — only `README.md`, which is what we want. The two are byte-identical by construction; this project keeps both, the repo keeps one.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated every turn and committed intentionally, so file-reading agents (e.g. Claude Fable) see the compiled bundle without running the compiler. Expect them in every diff.
- `github.md` is written by Claude after each sync, so it is always one revision behind upstream by design. It rides along with the next push.

## Sync workflow

Claude has read access only. To sync: ask "what's stale on GitHub?" — Claude diffs `main` against this project and reports the file list. Then export the project, replace the repo contents wholesale (never cherry-pick — partial uploads are what caused the `variables.json` / `colors.css` disagreement), and push.

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

## Sync history

- **2026-08-13T18:51:29Z** — verified push at `7e529905842f`. Brought the 11 stale files level; `uploads/` and `.gitignore` still open.
- **2026-08-13T18:45:22Z** — read-only comparison at `922bb6e4d295`. Repo was one edit-round behind: 11 files stale, including `--lh-display:1.1` and `Semantic/Accent` → `Palette/Clay`. Resolved by the push above.
