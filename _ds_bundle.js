/* @ds-bundle: {"format":4,"namespace":"ToccalaDesignSystem_316ada","components":[{"name":"FeatureItem","sourcePath":"components/cards/FeatureItem.jsx"},{"name":"PlanCard","sourcePath":"components/cards/PlanCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"ScriptAccent","sourcePath":"components/core/ScriptAccent.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"AccentCircle","sourcePath":"components/decor/AccentCircle.jsx"},{"name":"SketchRing","sourcePath":"components/decor/SketchRing.jsx"},{"name":"TexturePanel","sourcePath":"components/decor/TexturePanel.jsx"},{"name":"UnderlineSwoosh","sourcePath":"components/decor/UnderlineSwoosh.jsx"}],"sourceHashes":{"components/cards/FeatureItem.jsx":"607d5e5b7212","components/cards/PlanCard.jsx":"bb5ca112803c","components/core/Button.jsx":"73188ad2fa0e","components/core/Divider.jsx":"5a010f781d1d","components/core/Kicker.jsx":"2e08a35aeafa","components/core/ScriptAccent.jsx":"35e59f2a73a0","components/core/TextLink.jsx":"2a7e516bc1b6","components/core/Wordmark.jsx":"9e7aad8efeb8","components/decor/AccentCircle.jsx":"0d81b7533e83","components/decor/SketchRing.jsx":"41d39ed67635","components/decor/TexturePanel.jsx":"22156f9b7dbd","components/decor/UnderlineSwoosh.jsx":"c0310f3c8256","figma/setup-plugin/code.js":"c18fefabb049","ui_kits/brand-canvas/fonts-colors-band.jsx":"c2407c2d206c","ui_kits/brand-canvas/header.jsx":"a4f1ad1c7bc0","ui_kits/brand-canvas/hero.jsx":"f25da65a8452","ui_kits/brand-canvas/offer-band.jsx":"418f95c54c80","ui_kits/brand-canvas/statement.jsx":"723b45e99a68"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ToccalaDesignSystem_316ada = window.ToccalaDesignSystem_316ada || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureItem({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "var(--bullet-size)",
      height: "var(--bullet-size)",
      borderRadius: "var(--radius-round)",
      background: "var(--bullet)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "100%",
      color: "var(--text-primary)"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureItem, __ds_default_components_cards_FeatureItem_1bw7w29: FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  md: {
    padding: "18px 38px",
    fontSize: 18
  },
  lg: {
    padding: "18px 38px",
    fontSize: 18
  },
  card: {
    padding: "16px 34px",
    fontSize: 18
  }
};
const VARIANTS = {
  primary: {
    background: "var(--action-solid)",
    color: "var(--action-solid-ink)",
    border: "1.5px solid transparent"
  },
  secondary: {
    background: "transparent",
    color: "var(--action-outline)",
    border: "var(--stroke-outline)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--accent-ink)",
    border: "1.5px solid transparent"
  }
};
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  children,
  style,
  ...rest
}) {
  const Tag = href ? "a" : as;
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      lineHeight: "100%",
      textDecoration: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      transition: "filter var(--dur-base) var(--ease-warm), transform var(--dur-fast) var(--ease-warm), background var(--dur-base) var(--ease-warm)",
      padding: s.padding,
      fontSize: s.fontSize,
      ...v,
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = variant === "secondary" ? "none" : "brightness(0.92)";
      if (variant === "secondary") e.currentTarget.style.background = "rgba(30,61,52,0.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
      if (variant === "secondary") e.currentTarget.style.background = "transparent";
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "scale(0.985)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button, __ds_default_components_core_Button_51d4zy: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = "light",
  width = 280,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      width,
      height: "var(--rule-weight)",
      flexShrink: 0,
      background: tone === "dark" ? "var(--hairline-on-dark)" : "var(--hairline)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider, __ds_default_components_core_Divider_1n6763d: Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  label: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: "3px",
    color: "var(--text-kicker)",
    textTransform: "uppercase"
  },
  plan: {
    fontFamily: "var(--font-text)",
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: "2.5px",
    color: "var(--text-plan-label)",
    textTransform: "uppercase"
  },
  dark: {
    fontFamily: "var(--font-text)",
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: "3px",
    color: "var(--text-on-dark-soft)",
    textTransform: "uppercase"
  },
  hero: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: "normal",
    color: "var(--text-primary)",
    textTransform: "uppercase"
  }
};
function Kicker({
  tone = "label",
  as = "span",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "block",
      lineHeight: "100%",
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker, __ds_default_components_core_Kicker_am82ln: Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/cards/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlanCard({
  plan = "Plan Name Here",
  price = "$55",
  cadence = "/ per month",
  features = [],
  cta = "Get Started",
  image,
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 361.511,
      boxSizing: "border-box",
      overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-card)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "8px 8px 40px 8px",
      alignItems: "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 345.511,
      height: 295.018,
      flexShrink: 0,
      borderRadius: "12px 12px 0px 0px",
      background: image ? `url(${image}) center / cover no-repeat` : "var(--raw-parchment-deep)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "0 16px",
      boxSizing: "border-box",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: "plan"
  }, plan), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display-cond)",
      fontWeight: 500,
      fontSize: 54,
      lineHeight: "100%",
      color: "var(--text-price)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: "100%",
      color: "var(--text-primary)"
    }
  }, cadence)), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    width: 280
  }), features.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.FeatureItem, {
    key: i
  }, t)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "card",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { PlanCard, __ds_default_components_cards_PlanCard_1dibjbv: PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ScriptAccent.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScriptAccent({
  size = 34,
  rotate = 0,
  tone = "primary",
  children,
  style,
  ...rest
}) {
  const colors = {
    primary: "var(--text-primary)",
    olive: "var(--stone)",
    dark: "var(--text-on-dark)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-script)",
      fontWeight: 400,
      fontSize: size,
      lineHeight: size >= 34 ? "44px" : "24px",
      color: colors[tone] || colors.primary,
      display: "inline-block",
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      whiteSpace: "pre-line",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ScriptAccent, __ds_default_components_core_ScriptAccent_1r2bb85: ScriptAccent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScriptAccent.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  tone = "light",
  children,
  arrow = true,
  style,
  ...rest
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("a", _extends({
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: onDark ? 18 : 17,
      lineHeight: 1.2,
      color: onDark ? "var(--link-on-dark)" : "var(--link-on-light)",
      textDecorationLine: "underline",
      textDecorationThickness: "1.5px",
      textDecorationColor: "currentColor",
      textUnderlineOffset: 3,
      whiteSpace: "nowrap",
      transition: "opacity var(--dur-fast) var(--ease-warm)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = "0.75";
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = "1";
    }
  }, rest), children, arrow ? "\u2002\u2002\u2192" : null);
}
Object.assign(__ds_scope, { TextLink, __ds_default_components_core_TextLink_5boy1x: TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  cream: "cream",
  green: "green",
  ink: "ink"
};
function Wordmark({
  width = 184,
  tone = "cream",
  plate = false,
  basePath = "",
  style,
  ...rest
}) {
  const mark = /*#__PURE__*/React.createElement("img", {
    src: basePath + "assets/marks/toccala-wordmark-" + (TONES[tone] || "cream") + ".svg",
    alt: "Toccala",
    width: width,
    height: width * (45 / 184),
    style: {
      display: "block",
      width,
      height: width * (45 / 184),
      ...(plate ? null : style)
    }
  });
  if (!plate) return mark;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      borderRadius: "var(--radius-xs)",
      background: "var(--surface-dark)",
      ...style
    }
  }, rest), mark);
}
Object.assign(__ds_scope, { Wordmark, __ds_default_components_core_Wordmark_1k8ipq1: Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/decor/AccentCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILLS = {
  clay: "rgba(215,107,69,0.92)",
  /* the source disc is 92% alpha so photography multiplies through */
  pine: "var(--pine)",
  sage: "var(--sage)",
  sun: "var(--sun)",
  gold: "var(--gold)",
  paper: "var(--paper)",
  ink: "var(--ink)"
};
function AccentCircle({
  size = 349.315,
  fill = "clay",
  ring = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-round)",
      background: FILLS[fill] || fill,
      border: ring ? "var(--stroke-swatch)" : undefined,
      boxSizing: "border-box",
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { AccentCircle, __ds_default_components_decor_AccentCircle_165vjqu: AccentCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/AccentCircle.jsx", error: String((e && e.message) || e) }); }

// components/decor/SketchRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  salmon: "salmon",
  slate: "slate",
  green: "green"
};
function SketchRing({
  width = 276.639,
  variant = "a",
  tone = "salmon",
  basePath = "",
  style,
  ...rest
}) {
  const file = (variant === "b" ? "sketch-ring-2" : "sketch-ring") + "-" + (TONES[tone] || "salmon");
  return /*#__PURE__*/React.createElement("img", _extends({
    "aria-hidden": "true",
    alt: "",
    src: basePath + "assets/marks/" + file + ".svg",
    style: {
      display: "block",
      width,
      height: width * (299.102 / 276.639),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SketchRing, __ds_default_components_decor_SketchRing_1ifd4ug: SketchRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/SketchRing.jsx", error: String((e && e.message) || e) }); }

// components/decor/TexturePanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TexturePanel({
  basePath = "",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: `url(${basePath}assets/img/texture-tile.png) top left / 440px 440px repeat`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TexturePanel, __ds_default_components_decor_TexturePanel_15ov85z: TexturePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/TexturePanel.jsx", error: String((e && e.message) || e) }); }

// components/decor/UnderlineSwoosh.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  gold: "gold",
  sienna: "sienna",
  green: "green"
};
function UnderlineSwoosh({
  width = 140.871,
  tone = "gold",
  basePath = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    "aria-hidden": "true",
    alt: "",
    src: basePath + "assets/marks/underline-swoosh-" + (TONES[tone] || "gold") + ".svg",
    style: {
      display: "block",
      width,
      height: width * (5.272 / 140.871),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { UnderlineSwoosh, __ds_default_components_decor_UnderlineSwoosh_ityaxr: UnderlineSwoosh });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/UnderlineSwoosh.jsx", error: String((e && e.message) || e) }); }

// figma/setup-plugin/code.js
try { (() => {
// Toccala Design System — Figma setup plugin.
// Creates every Variable collection, Text Style and Effect Style in one run.
// Idempotent: re-running updates existing entries instead of duplicating them.
// See ../README.md for how to load this.

const VARIABLES = {
  "$schema": "toccala-figma-variables/1",
  "note": "Import with a Variables-import plugin, or create programmatically via the Plugin API (see figma/README.md). Values are RGB 0-255 and raw px.",
  "collections": [{
    "name": "Toccala/Color",
    "modes": ["Default"],
    "variables": [{
      "name": "Palette/Pine",
      "type": "COLOR",
      "value": "#1E3D34",
      "description": "Primary. Dark grounds, button fill, body text on light, wordmark plate."
    }, {
      "name": "Palette/Brick",
      "type": "COLOR",
      "value": "#B24B20",
      "description": "Plan labels, links on light."
    }, {
      "name": "Palette/Clay",
      "type": "COLOR",
      "value": "#D76B45",
      "description": "Feature bullets, large background disc. NOT accent buttons — see Semantic/Accent."
    }, {
      "name": "Palette/Sun",
      "type": "COLOR",
      "value": "#C6A14B",
      "description": "Links on dark, hand-drawn underline."
    }, {
      "name": "Palette/Gold",
      "type": "COLOR",
      "value": "#BE8D50",
      "description": "Secondary metallic."
    }, {
      "name": "Palette/Stone",
      "type": "COLOR",
      "value": "#7D6A4D",
      "description": "Kicker eyebrows, script asides."
    }, {
      "name": "Palette/Sage",
      "type": "COLOR",
      "value": "#A9BEB3",
      "description": "Cool shapes; body copy on Pine."
    }, {
      "name": "Palette/Blueprint",
      "type": "COLOR",
      "value": "#6377AE",
      "description": "Rare cool accent."
    }, {
      "name": "Palette/Ink",
      "type": "COLOR",
      "value": "#201B17",
      "description": "Near-black footer ground. Warmer than black; never #000."
    }, {
      "name": "Palette/Parchment",
      "type": "COLOR",
      "value": "#F7F0E6",
      "description": "Page ground; text on dark."
    }, {
      "name": "Palette/Paper",
      "type": "COLOR",
      "value": "#FFF9F0",
      "description": "Header ground, lighter near-white."
    }, {
      "name": "Palette/White",
      "type": "COLOR",
      "value": "#FFFFFF",
      "description": "True white."
    }, {
      "name": "Literal/Rust",
      "type": "COLOR",
      "value": "#A93F2B",
      "description": "OFF-PALETTE. Source one-off."
    }, {
      "name": "Literal/Salmon",
      "type": "COLOR",
      "value": "#EA9F84",
      "description": "OFF-PALETTE. Hero sketch ring."
    }, {
      "name": "Literal/Sand",
      "type": "COLOR",
      "value": "#F5EDE0",
      "description": "OFF-PALETTE. Solid-button label colour."
    }, {
      "name": "Literal/Cream",
      "type": "COLOR",
      "value": "#FFFDF8",
      "description": "OFF-PALETTE. Card ground."
    }, {
      "name": "Literal/ParchmentDeep",
      "type": "COLOR",
      "value": "#E7DCC6",
      "description": "OFF-PALETTE."
    }, {
      "name": "Literal/StoneMid",
      "type": "COLOR",
      "value": "#6E675E",
      "description": "OFF-PALETTE. Specimen annotation grey."
    }, {
      "name": "Literal/StoneDark",
      "type": "COLOR",
      "value": "#3A362F",
      "description": "OFF-PALETTE."
    }, {
      "name": "Literal/Mint",
      "type": "COLOR",
      "value": "#ABD1CC",
      "description": "OFF-PALETTE. The one large disc in the source tile only."
    }, {
      "name": "Semantic/Surface Canvas",
      "type": "COLOR",
      "alias": "Palette/Parchment"
    }, {
      "name": "Semantic/Surface Page",
      "type": "COLOR",
      "alias": "Palette/Paper"
    }, {
      "name": "Semantic/Surface Card",
      "type": "COLOR",
      "alias": "Literal/Cream"
    }, {
      "name": "Semantic/Surface Dark",
      "type": "COLOR",
      "alias": "Palette/Pine"
    }, {
      "name": "Semantic/Surface Ink",
      "type": "COLOR",
      "alias": "Palette/Ink"
    }, {
      "name": "Semantic/Text Primary",
      "type": "COLOR",
      "alias": "Palette/Pine"
    }, {
      "name": "Semantic/Text On Dark",
      "type": "COLOR",
      "alias": "Palette/Parchment"
    }, {
      "name": "Semantic/Text On Dark Soft",
      "type": "COLOR",
      "alias": "Literal/Sand"
    }, {
      "name": "Semantic/Text Muted On Dark",
      "type": "COLOR",
      "alias": "Palette/Sage"
    }, {
      "name": "Semantic/Text Kicker",
      "type": "COLOR",
      "alias": "Palette/Stone"
    }, {
      "name": "Semantic/Text Plan Label",
      "type": "COLOR",
      "alias": "Palette/Brick"
    }, {
      "name": "Semantic/Accent",
      "type": "COLOR",
      "alias": "Palette/Brick",
      "description": "Brick, not Clay — Parchment labels on Clay fail AA (3.05:1). On Brick: 4.73:1."
    }, {
      "name": "Semantic/Action Solid",
      "type": "COLOR",
      "alias": "Palette/Pine"
    }, {
      "name": "Semantic/Action Solid Ink",
      "type": "COLOR",
      "alias": "Literal/Sand"
    }, {
      "name": "Semantic/Action Outline",
      "type": "COLOR",
      "alias": "Palette/Pine"
    }, {
      "name": "Semantic/Link On Light",
      "type": "COLOR",
      "alias": "Palette/Brick"
    }, {
      "name": "Semantic/Link On Dark",
      "type": "COLOR",
      "alias": "Palette/Sun"
    }, {
      "name": "Semantic/Bullet",
      "type": "COLOR",
      "alias": "Palette/Clay"
    }, {
      "name": "Semantic/Hairline",
      "type": "COLOR",
      "value": "#1E3D34",
      "opacity": 0.25,
      "description": "Pine at 25%."
    }, {
      "name": "Semantic/Hairline On Dark",
      "type": "COLOR",
      "value": "#F5EDE0",
      "opacity": 0.25,
      "description": "Sand at 25%."
    }]
  }, {
    "name": "Toccala/Spacing",
    "modes": ["Default"],
    "variables": [{
      "name": "Gap/2",
      "type": "FLOAT",
      "value": 2
    }, {
      "name": "Gap/8",
      "type": "FLOAT",
      "value": 8
    }, {
      "name": "Gap/10",
      "type": "FLOAT",
      "value": 10
    }, {
      "name": "Gap/11",
      "type": "FLOAT",
      "value": 11
    }, {
      "name": "Gap/12",
      "type": "FLOAT",
      "value": 12
    }, {
      "name": "Gap/16",
      "type": "FLOAT",
      "value": 16,
      "description": "Kicker → headline → subhead."
    }, {
      "name": "Gap/18",
      "type": "FLOAT",
      "value": 18
    }, {
      "name": "Gap/20",
      "type": "FLOAT",
      "value": 20
    }, {
      "name": "Gap/24",
      "type": "FLOAT",
      "value": 24
    }, {
      "name": "Gap/32",
      "type": "FLOAT",
      "value": 32,
      "description": "Before a CTA."
    }, {
      "name": "Gap/34",
      "type": "FLOAT",
      "value": 34
    }, {
      "name": "Gap/36",
      "type": "FLOAT",
      "value": 36,
      "description": "Dark statement block."
    }, {
      "name": "Gap/38",
      "type": "FLOAT",
      "value": 38
    }, {
      "name": "Gap/40",
      "type": "FLOAT",
      "value": 40
    }, {
      "name": "Gap/53",
      "type": "FLOAT",
      "value": 53,
      "description": "Copy stack → CTA row."
    }, {
      "name": "Gap/56",
      "type": "FLOAT",
      "value": 56,
      "description": "Type specimen rows."
    }, {
      "name": "Gap/64",
      "type": "FLOAT",
      "value": 64
    }, {
      "name": "Gap/72",
      "type": "FLOAT",
      "value": 72
    }, {
      "name": "Gap/90",
      "type": "FLOAT",
      "value": 90
    }, {
      "name": "Gap/96",
      "type": "FLOAT",
      "value": 96,
      "description": "Dark-band gutter."
    }, {
      "name": "Gap/112",
      "type": "FLOAT",
      "value": 112,
      "description": "Textured band vertical padding."
    }, {
      "name": "Gap/140",
      "type": "FLOAT",
      "value": 140
    }, {
      "name": "Gap/153",
      "type": "FLOAT",
      "value": 153
    }, {
      "name": "Gap/239",
      "type": "FLOAT",
      "value": 239
    }, {
      "name": "Layout/Gutter Page",
      "type": "FLOAT",
      "value": 64,
      "description": "Hero horizontal padding."
    }, {
      "name": "Layout/Gutter Dark",
      "type": "FLOAT",
      "value": 96
    }, {
      "name": "Layout/Container Max",
      "type": "FLOAT",
      "value": 1440
    }]
  }, {
    "name": "Toccala/Radius",
    "modes": ["Default"],
    "variables": [{
      "name": "Radius/XS",
      "type": "FLOAT",
      "value": 4,
      "description": "Wordmark plate only."
    }, {
      "name": "Radius/MD",
      "type": "FLOAT",
      "value": 12,
      "description": "Top corners of a card's photo cap."
    }, {
      "name": "Radius/LG",
      "type": "FLOAT",
      "value": 16,
      "description": "Cards and hero imagery."
    }, {
      "name": "Radius/Pill",
      "type": "FLOAT",
      "value": 999,
      "description": "EVERY button. There are no squared buttons."
    }, {
      "name": "Stroke/Rule",
      "type": "FLOAT",
      "value": 1.5,
      "description": "The only rule + outline weight."
    }, {
      "name": "Size/Swatch",
      "type": "FLOAT",
      "value": 56
    }, {
      "name": "Size/Bullet",
      "type": "FLOAT",
      "value": 8
    }]
  }, {
    "name": "Toccala/Type",
    "modes": ["Default"],
    "variables": [{
      "name": "Family/Display",
      "type": "STRING",
      "value": "Optima nova LT Pro"
    }, {
      "name": "Family/Display Condensed",
      "type": "STRING",
      "value": "Optima nova LT Pro",
      "description": "Style: Medium Condensed / Demi Condensed."
    }, {
      "name": "Family/Text",
      "type": "STRING",
      "value": "Wix Madefor Text"
    }, {
      "name": "Family/Script",
      "type": "STRING",
      "value": "Seaweed Script"
    }, {
      "name": "Family/Numeric",
      "type": "STRING",
      "value": "Inter"
    }]
  }]
};
const STYLES = {
  "$schema": "toccala-figma-text-styles/1",
  "note": "All 20 rows of the source Typography System frame. lineHeight is {unit:'PERCENT'|'PIXELS'}. Create via the Plugin API (figma.createTextStyle) — see figma/README.md.",
  "styles": [{
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
  }, {
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
  }, {
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
  }, {
    "name": "Heading/H2 Desktop",
    "fontFamily": "Optima nova LT Pro",
    "fontStyle": "Medium Condensed",
    "fontSize": 56,
    "lineHeight": {
      "unit": "PERCENT",
      "value": 100
    },
    "letterSpacing": {
      "unit": "PIXELS",
      "value": 0
    }
  }, {
    "name": "Heading/H2 Mobile",
    "fontFamily": "Optima nova LT Pro",
    "fontStyle": "Medium Condensed",
    "fontSize": 42,
    "lineHeight": {
      "unit": "PERCENT",
      "value": 100
    },
    "letterSpacing": {
      "unit": "PIXELS",
      "value": 0
    }
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }],
  "extraStyles": [{
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }],
  "effectStyles": [{
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
  }]
};
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255
  };
}
async function run() {
  const log = [];

  // ---- Variables ----
  const created = {}; // "Collection::Name" -> Variable
  for (const col of VARIABLES.collections) {
    let collection = (await figma.variables.getLocalVariableCollectionsAsync()).find(c => c.name === col.name);
    if (!collection) collection = figma.variables.createVariableCollection(col.name);
    const modeId = collection.modes[0].modeId;

    // pass 1: literals
    for (const v of col.variables) {
      if (v.alias) continue;
      const type = v.type === 'COLOR' ? 'COLOR' : v.type === 'FLOAT' ? 'FLOAT' : 'STRING';
      const existing = (await figma.variables.getLocalVariablesAsync(type)).find(x => x.name === v.name && x.variableCollectionId === collection.id);
      const variable = existing || figma.variables.createVariable(v.name, collection, type);
      let value;
      if (type === 'COLOR') {
        const c = hexToRgb(v.value);
        value = v.opacity != null ? {
          ...c,
          a: v.opacity
        } : {
          ...c,
          a: 1
        };
      } else value = v.value;
      variable.setValueForMode(modeId, value);
      if (v.description) variable.description = v.description;
      created[col.name + '::' + v.name] = variable;
    }
    // pass 2: aliases
    for (const v of col.variables) {
      if (!v.alias) continue;
      const target = created[col.name + '::' + v.alias];
      if (!target) {
        log.push('MISSING ALIAS TARGET ' + v.alias);
        continue;
      }
      const existing = (await figma.variables.getLocalVariablesAsync('COLOR')).find(x => x.name === v.name && x.variableCollectionId === collection.id);
      const variable = existing || figma.variables.createVariable(v.name, collection, 'COLOR');
      variable.setValueForMode(modeId, figma.variables.createVariableAlias(target));
      if (v.description) variable.description = v.description;
    }
    log.push(col.name + ': ' + col.variables.length + ' variables');
  }

  // ---- Text styles ----
  const all = [].concat(STYLES.styles, STYLES.extraStyles || []);
  const localText = await figma.getLocalTextStylesAsync();
  let made = 0,
    skipped = [];
  for (const s of all) {
    const font = {
      family: s.fontFamily,
      style: s.fontStyle
    };
    try {
      await figma.loadFontAsync(font);
    } catch (e) {
      skipped.push(s.name + ' (' + s.fontFamily + ' ' + s.fontStyle + ' not available)');
      continue;
    }
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
      type: 'DROP_SHADOW',
      visible: true,
      blendMode: 'NORMAL',
      color: {
        ...hexToRgb(fx.color),
        a: fx.opacity
      },
      offset: fx.offset,
      radius: fx.radius,
      spread: fx.spread || 0
    }];
    if (fx.note) style.description = fx.note;
  }
  log.push('effect styles: ' + (STYLES.effectStyles || []).length);
  figma.notify('Toccala: setup complete — see console', {
    timeout: 4000
  });
  console.log(log.join('\n'));
  figma.closePlugin(log.join(' · '));
}
run();
})(); } catch (e) { __ds_ns.__errors.push({ path: "figma/setup-plugin/code.js", error: String((e && e.message) || e) }); }

// ui_kits/brand-canvas/fonts-colors-band.jsx
try { (() => {
const LABEL = {
  fontFamily: "var(--font-text)",
  fontWeight: 500,
  fontSize: 13,
  lineHeight: "100%",
  letterSpacing: "3px",
  color: "var(--text-on-dark-soft)",
  whiteSpace: "nowrap"
};
const ROW1 = ["var(--pine)", "var(--brick)", "var(--clay)", "var(--sun)", "var(--gold)", "var(--stone)", "var(--sage)", "var(--blueprint)"];
const ROW2 = ["var(--parchment)", "var(--paper)", "var(--white)"];
function FontsColorsBand() {
  const {
    AccentCircle
  } = window.TOCCALA_NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 405,
      overflow: "hidden",
      background: "var(--surface-ink)",
      display: "flex",
      flexDirection: "row",
      gap: 140,
      padding: "90px 96px 110px",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: LABEL
  }, "FONTS"), /*#__PURE__*/React.createElement("span", {
    style: LABEL
  }, "Optima Nova"), /*#__PURE__*/React.createElement("span", {
    style: LABEL
  }, "Wix Madefor Text"), /*#__PURE__*/React.createElement("span", {
    style: LABEL
  }, "seaweed script")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 632,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: LABEL
  }, "COLORS"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 632,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start"
    }
  }, ROW1.map((c, i) => /*#__PURE__*/React.createElement(AccentCircle, {
    key: i,
    size: 56,
    fill: c
  })), /*#__PURE__*/React.createElement(AccentCircle, {
    size: 56,
    fill: "var(--ink)",
    ring: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start"
    }
  }, ROW2.map((c, i) => /*#__PURE__*/React.createElement(AccentCircle, {
    key: i,
    size: 56,
    fill: c
  })))));
}
Object.assign(window, {
  FontsColorsBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-canvas/fonts-colors-band.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-canvas/header.jsx
try { (() => {
function Header() {
  const {
    Wordmark
  } = window.TOCCALA_NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 280.919,
      overflow: "hidden",
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column",
      padding: "81px 0 64px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 232,
      height: 93,
      borderRadius: "var(--radius-xs)",
      background: "var(--surface-dark)",
      display: "flex",
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    width: 184,
    tone: "cream",
    basePath: "../../"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "99px",
      color: "var(--text-primary)",
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, "Italian Warmth"));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-canvas/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-canvas/hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Kicker,
    ScriptAccent,
    AccentCircle,
    SketchRing,
    UnderlineSwoosh
  } = window.TOCCALA_NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 873,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 64,
      padding: "24px 64px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1201.343,
      top: 443.724 - 276.919,
      width: 349.315,
      height: 358.49,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(AccentCircle, {
    size: 349.315,
    fill: "clay",
    style: {
      position: "absolute",
      left: 0,
      top: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60.704,
      top: 185.552,
      width: 179.907,
      height: 172.938,
      mixBlendMode: "multiply",
      background: "url(../../assets/img/hero-stamp.jpg) 50% 100% / 100% 156.045% no-repeat"
    }
  }), /*#__PURE__*/React.createElement(SketchRing, {
    variant: "a",
    width: 276.639,
    basePath: "../../",
    style: {
      position: "absolute",
      left: 46.81,
      top: 25.106
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 849,
      display: "flex",
      flexDirection: "column",
      gap: 64,
      padding: "56px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "center",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 11,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "hero",
    style: {
      lineHeight: 1.2
    }
  }, "A top kicker with"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 89,
      display: "flex",
      gap: 10,
      padding: "0 0 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(ScriptAccent, {
    size: 34,
    style: {
      lineHeight: "99px"
    }
  }, "a handwritten accent."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 582,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 53,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "label"
  }, "Kicker label here"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display-cond)",
      fontWeight: 500,
      fontSize: 112,
      lineHeight: "112px",
      color: "var(--text-primary)",
      textWrap: "balance",
      alignSelf: "stretch"
    }
  }, "Headline Text Here"), /*#__PURE__*/React.createElement("p", {
    style: {
      width: 520,
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.2,
      color: "var(--text-primary)"
    }
  }, "A subhead sentence supporting the headline could look like this. A subhead sentence supporting the headline could look like this."), /*#__PURE__*/React.createElement(UnderlineSwoosh, {
    width: 140.871,
    basePath: "../../",
    style: {
      marginLeft: 126.128,
      marginTop: -12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Primary Button"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md"
  }, "Secondary Button"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 664,
      height: 503,
      overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      flexShrink: 0,
      background: "url(../../assets/img/print-kit.png) 20.742% 50% / 135% 100% no-repeat"
    }
  })))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-canvas/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-canvas/offer-band.jsx
try { (() => {
const PLANS = [{
  plan: "Plan Name Here",
  price: "$55",
  features: ["Feature line item here", "Another feature line here", "One more feature here"]
}, {
  plan: "Second Plan Here",
  price: "$95",
  features: ["Everything in the first plan", "Another feature line here", "One more feature here"]
}];
function OfferBand() {
  const {
    PlanCard,
    Button,
    TextLink,
    ScriptAccent,
    AccentCircle,
    SketchRing,
    TexturePanel
  } = window.TOCCALA_NS;
  const [i, setI] = React.useState(0);
  const p = PLANS[i];
  return /*#__PURE__*/React.createElement(TexturePanel, {
    basePath: "../../",
    style: {
      position: "relative",
      height: 1085,
      display: "flex",
      flexDirection: "row",
      gap: 153,
      padding: "112px 0",
      justifyContent: "center",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(PlanCard, {
    plan: p.plan,
    price: p.price,
    cadence: "/ per month",
    features: p.features,
    cta: "Get Started",
    image: "../../assets/img/card-photo.jpg",
    onCta: () => setI((i + 1) % PLANS.length)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 391.862,
      display: "flex",
      flexDirection: "column",
      gap: 239,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-numeral"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display-cond)",
      fontWeight: 500,
      fontSize: 40,
      lineHeight: "46px",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, "A Third Headline"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.4,
      color: "var(--text-primary)",
      alignSelf: "stretch"
    }
  }, "Large body copy ipsum dolor sit amet, duis aute irure dolor reprehenderit vol"), /*#__PURE__*/React.createElement(TextLink, {
    tone: "light",
    href: "#"
  }, "Text Link On Light"))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Accent Button"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 605.518,
      width: 1440,
      height: 582.448,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(AccentCircle, {
    size: 404.635,
    fill: "#ABD1CC",
    style: {
      position: "absolute",
      left: 989.956,
      top: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 371.09,
      width: 1440,
      height: 211.358,
      background: "url(../../assets/img/band-bottom.png) 50% 0% / 100% 191.966% no-repeat"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 685.877,
      top: 477.692,
      width: 753.748,
      height: 711.126,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "753.748",
    height: "408.39",
    viewBox: "0 0 753.748 408.39",
    style: {
      position: "absolute",
      left: 0,
      top: 302.737
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 753.748 408.39 L 753.748 0 L 443.17 183.511 L 0 408.39 L 753.748 408.39 Z",
    fill: "rgb(30,61,52)",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement(SketchRing, {
    variant: "b",
    width: 339.242,
    tone: "slate",
    basePath: "../../",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: 337.844,
      transform: "matrix(-0.810,0.586,-0.586,-0.810,742.840,395.548)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(ScriptAccent, {
    size: 29,
    tone: "olive",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 133.946,
      lineHeight: "24px",
      transform: "matrix(0.999,-0.052,0.052,0.999,574.950,543.185)",
      transformOrigin: "0 0"
    }
  }, "and another\n for good \n    measure..."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 267.849,
      top: 0,
      width: 363.235,
      height: 709.906,
      background: "url(../../assets/img/portrait-tall.png) 50% 0% / 100% 124.89% no-repeat"
    }
  }), /*#__PURE__*/React.createElement(ScriptAccent, {
    size: 34,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 233.578,
      lineHeight: "29px",
      transform: "matrix(0.998,-0.070,0.070,0.998,182.783,385.784)",
      transformOrigin: "0 0"
    }
  }, "a handwritten \n       accent    \n  here")));
}
Object.assign(window, {
  OfferBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-canvas/offer-band.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-canvas/statement.jsx
try { (() => {
function Statement() {
  const {
    TextLink
  } = window.TOCCALA_NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 612,
      overflow: "hidden",
      background: "var(--surface-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 96,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 656,
      height: 612,
      overflow: "hidden",
      background: "var(--surface-dark)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 606.532,
      height: 616.895,
      flexShrink: 0,
      background: "url(../../assets/img/lifestyle-fridge.png) center / cover no-repeat"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      width: 582.646,
      fontFamily: "var(--font-display-cond)",
      fontWeight: 500,
      fontSize: 56,
      lineHeight: 1,
      color: "var(--text-on-dark)"
    }
  }, "A secondary headline would look like this"), /*#__PURE__*/React.createElement("p", {
    style: {
      width: 514.082,
      fontFamily: "var(--font-numeric)",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.4,
      color: "var(--text-muted-on-dark)",
      whiteSpace: "pre-wrap"
    }
  }, "Medium body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore .\n\nCommodo consequat! Duis aute irure dolor reprehenderit voluptate velit esse lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement(TextLink, {
    tone: "dark",
    href: "#"
  }, "Text Button On Dark")));
}
Object.assign(window, {
  Statement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-canvas/statement.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.ScriptAccent = __ds_scope.ScriptAccent;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.AccentCircle = __ds_scope.AccentCircle;

__ds_ns.SketchRing = __ds_scope.SketchRing;

__ds_ns.TexturePanel = __ds_scope.TexturePanel;

__ds_ns.UnderlineSwoosh = __ds_scope.UnderlineSwoosh;

})();
