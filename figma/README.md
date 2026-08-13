# Toccala → Figma

This folder is what lets Claude **build in your Figma file** rather than just describe the brand. The rest of the design system teaches judgement; this teaches Figma-native structure — Variables, Text Styles, and the exact frame recipes.

Run the setup once per Figma file. After that, Claude binds to real variables instead of pasting hexes.

---

## What's in here

| File | What it is |
| --- | --- |
| `variables.json` | Four Variable collections — `Toccala/Color` (12 palette + 8 off-palette literals + 20 semantic aliases), `Toccala/Spacing`, `Toccala/Radius`, `Toccala/Type` |
| `text-styles.json` | The type ladder (21 rows after the H3 insertion), plus 5 extra named styles (step numeral, price, plan label, micro label, small script) and the one Effect Style |
| `setup-plugin/` | A Figma plugin that creates everything above in one run. Idempotent — re-run to update |
| `components.md` | Per-component build recipe: auto-layout direction, exact padding, which variable binds where. Plus the five section recipes |

---

## Step 1 — Fonts (do this first)

The setup plugin **skips any text style whose font isn't available** and lists what it skipped. So get the fonts in before you run it.

| Family | Where |
| --- | --- |
| **Optima nova LT Pro** | Adobe Fonts kit `tcs2wbu`. Activate it in Creative Cloud desktop so Figma sees it locally. Needs Medium, Demi, Bold, **Medium Condensed** and **Demi Condensed** |
| **Wix Madefor Text** | Google Fonts — available in Figma by default |
| **Seaweed Script** | Google Fonts — available in Figma by default |
| **Inter** | Available in Figma by default |

Optima Condensed carries the whole heading scale (Display → H5), so if it's missing, everything looks wrong rather than slightly off.

## Step 2 — Run the setup plugin

1. In the Figma **desktop app**, open your file.
2. Menu → **Plugins → Development → Import plugin from manifest…**
3. Choose `figma/setup-plugin/manifest.json`.
4. Menu → **Plugins → Development → Toccala DS Setup**.

It creates the four Variable collections, 26 Text Styles and the `Elevation/Card` Effect Style, then reports what it made in the console. Takes a few seconds.

> Web-only? The plugin needs the desktop app to load from a manifest. Alternatively hand `variables.json` and `text-styles.json` to any Variables-import plugin, or paste `setup-plugin/code.js` into a scratch plugin.

## Step 3 — Bring in the assets

Figma can't reach your filesystem, so **drag these in manually** and keep them somewhere findable (an `Assets` page works):

- `assets/marks/toccala-wordmark.svg` — the wordmark, `184 × 45`. The only brand mark in the source
- `assets/marks/sketch-ring.svg`, `sketch-ring-2.svg` — the hand-drawn open rings
- `assets/marks/underline-swoosh.svg` — the gold underline
- `assets/img/texture-tile.png` — the seamless `440 × 440` paper tile
- `assets/img/` photography — `print-kit.png`, `lifestyle-fridge.png`, `portrait-tall.png`, `band-bottom.png`, `card-photo.jpg`, `hero-stamp.jpg`

Never redraw any of these. There is no logo symbol in the source — where a mark won't work, set the name in the display face.

## Step 4 — Build the components (optional but worth it)

Follow `components.md` to draw the twelve component families once as real Figma components. From then on Claude places instances instead of rebuilding frames, and your file stays editable by hand.

---

## Using it: Claude Code vs Claude CoWork

Both need the **Figma MCP server** connected — that's the bridge that lets Claude read and write your file. Neither can touch Figma without it.

### Claude Code — best for building the system, and for bulk work

Use this when you want components authored, a design system published, or fifty screens generated from a spec.

1. Download this project (**Export / Download** on the project) and unzip it.
2. Move the folder to `~/.claude/skills/toccala-design/`. `SKILL.md` is already at its root, so Claude Code picks it up automatically.
3. Connect Figma's MCP server (Figma → Preferences → **Enable local MCP server**, then add it to your Claude Code MCP config).
4. Open your Figma file so the MCP server can see it, then in Claude Code:

   > Use the toccala-design skill. Read `figma/components.md`, then build the Button component set in the current Figma file, bound to the Toccala variables.

Claude Code is the stronger choice here because it can read every file in the skill, run the setup plugin logic, and iterate over many nodes in one session.

### Claude CoWork — best for a designer working alongside Claude

Use this when you're iterating on a specific screen and want to stay in the conversation.

1. Attach this project as a **design system** (it's already registered as one — no export needed).
2. Connect the Figma MCP server in CoWork's connector settings.
3. Then, with a wireframe attached:

   > Here's a wireframe. Build it in Figma using the Toccala design system — bind colours to the `Toccala/Color` variables and apply the `Heading/*` and `Body/*` text styles.

CoWork already has the design system's components, cards and templates in context, so you don't need to point it at files. It's better at judgement calls ("is this on-brand?") and worse at long mechanical runs.

**Rule of thumb:** wireframe → screen, use CoWork. Spec → many screens, or authoring the Figma library itself, use Claude Code.

### The prompt pattern that works

Vague prompts produce off-brand output even with the system loaded. Be explicit about binding:

> Build this as a 1440-wide frame. Sections from `figma/components.md`. Every colour bound to a `Toccala/Color` variable — no raw hexes. Headings use `Heading/*` text styles, body uses `Body/*`. Buttons are instances of `Button / Primary`. Radii from `Toccala/Radius`.

---

## Sharing with other designers

Two ways, depending on what they need.

**They just want Claude to know the brand.** Send them the downloaded project folder and tell them to drop it at `~/.claude/skills/toccala-design/`. Done — that's a valid Agent Skill.

**They want to build in Figma too.** Same folder, plus:
- they need the Adobe Fonts kit `tcs2wbu` shared with them (or their own Optima nova LT Pro licence), and
- if you've already run the setup in a shared Figma library file, tell them to **enable that library** rather than re-running the plugin — otherwise you'll end up with two sets of variables that look identical and don't match.

**Recommended:** run the setup plugin **once** in a dedicated `Toccala — Library` Figma file, build the components there, and **publish it as a team library.** Everyone else enables the library and never runs the plugin. That keeps one source of truth on the Figma side, matching this project on the code side.

---

## Known gaps

- **Hover, press and motion are extrapolated.** The source file is a static style tile with zero interaction states. Anything interactive here is a proposal, not a spec.
- **No icon set exists.** No font, no sprite, no icon components. The only glyph-like marks are an 8px Clay bullet and a `→` character. If you need functional icons, that's a decision still to make — don't let Claude substitute a library silently.
- **Eight off-palette `Literal/*` colours** are included so the source recreation stays exact. They're marked `OFF-PALETTE` in their descriptions. New work should use the twelve.
- **Condensed weights.** The source uses both Medium Condensed and Demi Condensed. Confirm both are active in the kit, or Demi Condensed will silently fall back.
