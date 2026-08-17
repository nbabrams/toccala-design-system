// Toccala Design System — Figma setup plugin.
// Creates every Variable collection, Text Style and Effect Style in one run.
// Idempotent: re-running updates existing entries instead of duplicating them.
// See ../README.md for how to load this.

const VARIABLES = {
  "$schema": "toccala-figma-variables/1",
  "note": "Import with a Variables-import plugin, or create programmatically via the Plugin API (see figma/README.md). Values are RGB 0-255 and raw px.",
  "collections": [
    {
      "name": "Toccala/Color",
      "modes": [
        "Default"
      ],
      "variables": [
        {
          "name": "Palette/Pine",
          "type": "COLOR",
          "value": "#1E3D34",
          "description": "Primary. Dark grounds, button fill, body text on light, wordmark plate."
        },
        {
          "name": "Palette/Brick",
          "type": "COLOR",
          "value": "#B24B20",
          "description": "Plan labels, links on light."
        },
        {
          "name": "Palette/Clay",
          "type": "COLOR",
          "value": "#D76B45",
          "description": "Feature bullets, large background disc. NOT accent buttons — see Semantic/Accent."
        },
        {
          "name": "Palette/Sun",
          "type": "COLOR",
          "value": "#C6A14B",
          "description": "Links on dark, hand-drawn underline."
        },
        {
          "name": "Palette/Gold",
          "type": "COLOR",
          "value": "#BE8D50",
          "description": "Secondary metallic."
        },
        {
          "name": "Palette/Stone",
          "type": "COLOR",
          "value": "#7D6A4D",
          "description": "Kicker eyebrows, script asides."
        },
        {
          "name": "Palette/Sage",
          "type": "COLOR",
          "value": "#A9BEB3",
          "description": "Cool shapes; body copy on Pine."
        },
        {
          "name": "Palette/Blueprint",
          "type": "COLOR",
          "value": "#6377AE",
          "description": "Rare cool accent."
        },
        {
          "name": "Palette/Ink",
          "type": "COLOR",
          "value": "#201B17",
          "description": "Near-black footer ground. Warmer than black; never #000."
        },
        {
          "name": "Palette/Parchment",
          "type": "COLOR",
          "value": "#F7F0E6",
          "description": "Page ground; text on dark."
        },
        {
          "name": "Palette/Paper",
          "type": "COLOR",
          "value": "#FFFDF8",
          "description": "Header ground, lighter near-white."
        },
        {
          "name": "Palette/White",
          "type": "COLOR",
          "value": "#FFFFFF",
          "description": "True white."
        },
        {
          "name": "Literal/Rust",
          "type": "COLOR",
          "value": "#A93F2B",
          "description": "OFF-PALETTE. Source one-off."
        },
        {
          "name": "Literal/Salmon",
          "type": "COLOR",
          "value": "#EA9F84",
          "description": "OFF-PALETTE. Hero sketch ring."
        },
        {
          "name": "Literal/Sand",
          "type": "COLOR",
          "value": "#F5EDE0",
          "description": "OFF-PALETTE. Solid-button label colour."
        },
        {
          "name": "Literal/Cream",
          "type": "COLOR",
          "value": "#FFFDF8",
          "description": "OFF-PALETTE. Card ground."
        },
        {
          "name": "Literal/ParchmentDeep",
          "type": "COLOR",
          "value": "#E7DCC6",
          "description": "OFF-PALETTE."
        },
        {
          "name": "Literal/StoneMid",
          "type": "COLOR",
          "value": "#6E675E",
          "description": "OFF-PALETTE. Specimen annotation grey."
        },
        {
          "name": "Literal/StoneDark",
          "type": "COLOR",
          "value": "#3A362F",
          "description": "OFF-PALETTE."
        },
        {
          "name": "Literal/Mint",
          "type": "COLOR",
          "value": "#ABD1CC",
          "description": "OFF-PALETTE. The one large disc in the source tile only."
        },
        {
          "name": "Literal/GoldRing",
          "type": "COLOR",
          "value": "#D8AB43",
          "description": "OFF-PALETTE. Sketch-ring stroke on the hero; brighter than Palette/Sun."
        },
        {
          "name": "Semantic/Surface Canvas",
          "type": "COLOR",
          "alias": "Palette/Parchment"
        },
        {
          "name": "Semantic/Surface Page",
          "type": "COLOR",
          "alias": "Palette/Paper"
        },
        {
          "name": "Semantic/Surface Card",
          "type": "COLOR",
          "alias": "Literal/Cream"
        },
        {
          "name": "Semantic/Surface Dark",
          "type": "COLOR",
          "alias": "Palette/Pine"
        },
        {
          "name": "Semantic/Surface Ink",
          "type": "COLOR",
          "alias": "Palette/Ink"
        },
        {
          "name": "Semantic/Text Primary",
          "type": "COLOR",
          "alias": "Palette/Pine"
        },
        {
          "name": "Semantic/Text On Dark",
          "type": "COLOR",
          "alias": "Palette/Parchment"
        },
        {
          "name": "Semantic/Text On Dark Soft",
          "type": "COLOR",
          "alias": "Literal/Sand"
        },
        {
          "name": "Semantic/Text Muted On Dark",
          "type": "COLOR",
          "alias": "Palette/Sage"
        },
        {
          "name": "Semantic/Text Kicker",
          "type": "COLOR",
          "alias": "Palette/Stone"
        },
        {
          "name": "Semantic/Text Plan Label",
          "type": "COLOR",
          "alias": "Palette/Brick"
        },
        {
          "name": "Semantic/Accent",
          "type": "COLOR",
          "alias": "Palette/Brick",
          "description": "Brick, not Clay — Parchment labels on Clay fail AA (3.05:1). On Brick: 4.73:1."
        },
        {
          "name": "Semantic/Action Solid",
          "type": "COLOR",
          "alias": "Palette/Pine"
        },
        {
          "name": "Semantic/Action Solid Ink",
          "type": "COLOR",
          "alias": "Literal/Sand"
        },
        {
          "name": "Semantic/Action Outline",
          "type": "COLOR",
          "alias": "Palette/Pine"
        },
        {
          "name": "Semantic/Link On Light",
          "type": "COLOR",
          "alias": "Palette/Brick"
        },
        {
          "name": "Semantic/Link On Dark",
          "type": "COLOR",
          "alias": "Palette/Sun"
        },
        {
          "name": "Semantic/Bullet",
          "type": "COLOR",
          "alias": "Palette/Clay"
        },
        {
          "name": "Semantic/Hairline",
          "type": "COLOR",
          "value": "#1E3D34",
          "opacity": 0.25,
          "description": "Pine at 25%."
        },
        {
          "name": "Semantic/Hairline On Dark",
          "type": "COLOR",
          "value": "#F5EDE0",
          "opacity": 0.25,
          "description": "Sand at 25%."
        }
      ]
    },
    {
      "name": "Toccala/Spacing",
      "modes": [
        "Default"
      ],
      "variables": [
        {
          "name": "Gap/2",
          "type": "FLOAT",
          "value": 2
        },
        {
          "name": "Gap/8",
          "type": "FLOAT",
          "value": 8
        },
        {
          "name": "Gap/10",
          "type": "FLOAT",
          "value": 10
        },
        {
          "name": "Gap/11",
          "type": "FLOAT",
          "value": 11
        },
        {
          "name": "Gap/12",
          "type": "FLOAT",
          "value": 12
        },
        {
          "name": "Gap/16",
          "type": "FLOAT",
          "value": 16,
          "description": "Kicker → headline → subhead."
        },
        {
          "name": "Gap/18",
          "type": "FLOAT",
          "value": 18
        },
        {
          "name": "Gap/20",
          "type": "FLOAT",
          "value": 20
        },
        {
          "name": "Gap/24",
          "type": "FLOAT",
          "value": 24
        },
        {
          "name": "Gap/32",
          "type": "FLOAT",
          "value": 32,
          "description": "Before a CTA."
        },
        {
          "name": "Gap/34",
          "type": "FLOAT",
          "value": 34
        },
        {
          "name": "Gap/36",
          "type": "FLOAT",
          "value": 36,
          "description": "Dark statement block."
        },
        {
          "name": "Gap/38",
          "type": "FLOAT",
          "value": 38
        },
        {
          "name": "Gap/40",
          "type": "FLOAT",
          "value": 40
        },
        {
          "name": "Gap/53",
          "type": "FLOAT",
          "value": 53,
          "description": "Copy stack → CTA row."
        },
        {
          "name": "Gap/56",
          "type": "FLOAT",
          "value": 56,
          "description": "Type specimen rows."
        },
        {
          "name": "Gap/64",
          "type": "FLOAT",
          "value": 64
        },
        {
          "name": "Gap/72",
          "type": "FLOAT",
          "value": 72
        },
        {
          "name": "Gap/90",
          "type": "FLOAT",
          "value": 90
        },
        {
          "name": "Gap/96",
          "type": "FLOAT",
          "value": 96,
          "description": "Dark-band gutter."
        },
        {
          "name": "Gap/112",
          "type": "FLOAT",
          "value": 112,
          "description": "Textured band vertical padding."
        },
        {
          "name": "Gap/140",
          "type": "FLOAT",
          "value": 140
        },
        {
          "name": "Gap/153",
          "type": "FLOAT",
          "value": 153
        },
        {
          "name": "Gap/239",
          "type": "FLOAT",
          "value": 239
        },
        {
          "name": "Layout/Gutter Page",
          "type": "FLOAT",
          "value": 64,
          "description": "Hero horizontal padding."
        },
        {
          "name": "Layout/Gutter Dark",
          "type": "FLOAT",
          "value": 96
        },
        {
          "name": "Layout/Container Max",
          "type": "FLOAT",
          "value": 1440
        }
      ]
    },
    {
      "name": "Toccala/Radius",
      "modes": [
        "Default"
      ],
      "variables": [
        {
          "name": "Radius/XS",
          "type": "FLOAT",
          "value": 4,
          "description": "Wordmark plate only."
        },
        {
          "name": "Radius/MD",
          "type": "FLOAT",
          "value": 12,
          "description": "Top corners of a card's photo cap."
        },
        {
          "name": "Radius/LG",
          "type": "FLOAT",
          "value": 16,
          "description": "Cards and hero imagery."
        },
        {
          "name": "Radius/Pill",
          "type": "FLOAT",
          "value": 999,
          "description": "EVERY button. There are no squared buttons."
        },
        {
          "name": "Stroke/Rule",
          "type": "FLOAT",
          "value": 1.5,
          "description": "The only rule + outline weight."
        },
        {
          "name": "Size/Swatch",
          "type": "FLOAT",
          "value": 56
        },
        {
          "name": "Size/Bullet",
          "type": "FLOAT",
          "value": 8
        }
      ]
    },
    {
      "name": "Toccala/Type",
      "modes": [
        "Default"
      ],
      "variables": [
        {
          "name": "Family/Display",
          "type": "STRING",
          "value": "Optima nova LT Pro"
        },
        {
          "name": "Family/Display Condensed",
          "type": "STRING",
          "value": "Optima nova LT Pro",
          "description": "Style: Medium Condensed / Demi Condensed."
        },
        {
          "name": "Family/Text",
          "type": "STRING",
          "value": "Wix Madefor Text"
        },
        {
          "name": "Family/Script",
          "type": "STRING",
          "value": "Seaweed Script"
        },
        {
          "name": "Family/Numeric",
          "type": "STRING",
          "value": "Wix Madefor Text"
        }
      ]
    }
  ]
};

const STYLES = {
  "$schema": "toccala-figma-text-styles/1",
  "note": "All 20 rows of the source Typography System frame. lineHeight is {unit:'PERCENT'|'PIXELS'}. Create via the Plugin API (figma.createTextStyle) — see figma/README.md.",
  "styles": [
    {
      "name": "Display/Desktop",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 112,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H1 Desktop",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 72,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H1 Mobile",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 48,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H2 Desktop",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 56,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 110
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H2 Mobile",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 42,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 110
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H3 Desktop",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 48,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H3 Mobile",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 36,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H4 Desktop",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 40,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H4 Mobile",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 32,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Heading/H5",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 32,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      },
      "note": "Joins the condensed ladder. Was 22 regular-width before the rescale."
    },
    {
      "name": "Heading/H6 Eyebrow",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Demi",
      "fontSize": 18,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 3
      },
      "textCase": "UPPER",
      "note": "Kicker label. Colour: Semantic/Text Kicker. Raised from 14 for legibility."
    },
    {
      "name": "Lead/Desktop",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 24,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 120
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Lead/Mobile",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 20,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Body/L Desktop",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 20,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Body/L Mobile",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 18,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Body/M Desktop",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 18,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Body/M Mobile",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 18,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Body/S",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 16,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      },
      "note": "Buttons, feature lines."
    },
    {
      "name": "Body/XS",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 14,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Body/Caption",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 12,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 140
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    },
    {
      "name": "Accent/Script",
      "fontFamily": "Seaweed Script",
      "fontStyle": "Regular",
      "fontSize": 34,
      "lineHeight": {
        "unit": "PIXELS",
        "value": 44
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      },
      "note": "Handwritten aside. Lowercase, one per view."
    }
  ],
  "extraStyles": [
    {
      "name": "Numeral/Step",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 120,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PERCENT",
        "value": -2
      },
      "note": "The '01' step numerals."
    },
    {
      "name": "Numeral/Price",
      "fontFamily": "Optima nova LT Pro",
      "fontStyle": "Medium Condensed",
      "fontSize": 54,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      },
      "note": "e.g. $55."
    },
    {
      "name": "Label/Plan",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 13,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 2.5
      },
      "textCase": "UPPER",
      "note": "Card plan name. Colour: Semantic/Text Plan Label."
    },
    {
      "name": "Label/Micro",
      "fontFamily": "Wix Madefor Text",
      "fontStyle": "Medium",
      "fontSize": 13,
      "lineHeight": {
        "unit": "PERCENT",
        "value": 100
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 3
      },
      "textCase": "UPPER",
      "note": "FONTS / COLORS footer labels."
    },
    {
      "name": "Accent/Script Small",
      "fontFamily": "Seaweed Script",
      "fontStyle": "Regular",
      "fontSize": 29,
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      }
    }
  ],
  "effectStyles": [
    {
      "name": "Elevation/Card",
      "type": "DROP_SHADOW",
      "color": "#524229",
      "opacity": 0.18,
      "offset": {
        "x": 0,
        "y": 10
      },
      "radius": 30,
      "spread": 0,
      "note": "The ONLY shadow in the system. Warm brown, not grey."
    }
  ]
};

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0,2),16)/255, g: parseInt(h.slice(2,4),16)/255, b: parseInt(h.slice(4,6),16)/255 };
}

async function run() {
  const log = [];

  // ---- Variables ----
  const created = {}; // "Collection::Name" -> Variable
  for (const col of VARIABLES.collections) {
    let collection = (await figma.variables.getLocalVariableCollectionsAsync())
      .find(c => c.name === col.name);
    if (!collection) collection = figma.variables.createVariableCollection(col.name);
    const modeId = collection.modes[0].modeId;

    // pass 1: literals
    for (const v of col.variables) {
      if (v.alias) continue;
      const type = v.type === 'COLOR' ? 'COLOR' : v.type === 'FLOAT' ? 'FLOAT' : 'STRING';
      const existing = (await figma.variables.getLocalVariablesAsync(type))
        .find(x => x.name === v.name && x.variableCollectionId === collection.id);
      const variable = existing || figma.variables.createVariable(v.name, collection, type);
      let value;
      if (type === 'COLOR') { const c = hexToRgb(v.value); value = v.opacity != null ? { ...c, a: v.opacity } : { ...c, a: 1 }; }
      else value = v.value;
      variable.setValueForMode(modeId, value);
      if (v.description) variable.description = v.description;
      created[col.name + '::' + v.name] = variable;
    }
    // pass 2: aliases
    for (const v of col.variables) {
      if (!v.alias) continue;
      const target = created[col.name + '::' + v.alias];
      if (!target) { log.push('MISSING ALIAS TARGET ' + v.alias); continue; }
      const existing = (await figma.variables.getLocalVariablesAsync('COLOR'))
        .find(x => x.name === v.name && x.variableCollectionId === collection.id);
      const variable = existing || figma.variables.createVariable(v.name, collection, 'COLOR');
      variable.setValueForMode(modeId, figma.variables.createVariableAlias(target));
      if (v.description) variable.description = v.description;
    }
    log.push(col.name + ': ' + col.variables.length + ' variables');
  }

  // ---- Text styles ----
  const all = [].concat(STYLES.styles, STYLES.extraStyles || []);
  const localText = await figma.getLocalTextStylesAsync();
  let made = 0, skipped = [];
  for (const s of all) {
    const font = { family: s.fontFamily, style: s.fontStyle };
    try { await figma.loadFontAsync(font); }
    catch (e) { skipped.push(s.name + ' (' + s.fontFamily + ' ' + s.fontStyle + ' not available)'); continue; }
    const style = localText.find(x => x.name === s.name) || figma.createTextStyle();
    style.name = s.name;
    style.fontName = font;
    style.fontSize = s.fontSize;
    style.lineHeight = s.lineHeight;
    style.letterSpacing = s.letterSpacing;
    if (s.textCase) style.textCase = s.textCase;
    if (s.note) style.description = s.note;
    made++;
  }
  log.push('text styles: ' + made + ' of ' + all.length);
  if (skipped.length) log.push('SKIPPED (font missing): ' + skipped.join('; '));

  // ---- Effect style ----
  const localFx = await figma.getLocalEffectStylesAsync();
  for (const fx of STYLES.effectStyles || []) {
    const style = localFx.find(x => x.name === fx.name) || figma.createEffectStyle();
    style.name = fx.name;
    style.effects = [{
      type: 'DROP_SHADOW', visible: true, blendMode: 'NORMAL',
      color: { ...hexToRgb(fx.color), a: fx.opacity },
      offset: fx.offset, radius: fx.radius, spread: fx.spread || 0
    }];
    if (fx.note) style.description = fx.note;
  }
  log.push('effect styles: ' + (STYLES.effectStyles || []).length);

  figma.notify('Toccala: setup complete — see console', { timeout: 4000 });
  console.log(log.join('\n'));
  figma.closePlugin(log.join(' · '));
}

// Only run inside Figma. This file also gets swept into the design system's compiled
// bundle, where the `figma` global does not exist — without this guard every card in
// the Design System tab logs "Can't find variable: figma".
if (typeof figma !== 'undefined') run();
