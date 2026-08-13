import React from "react";

const FILLS = {
  clay: "rgba(215,107,69,0.92)",  /* the source disc is 92% alpha so photography multiplies through */
  pine: "var(--pine)",
  sage: "var(--sage)",
  sun: "var(--sun)",
  gold: "var(--gold)",
  paper: "var(--paper)",
  ink: "var(--ink)",
};

export function AccentCircle({ size = 349.315, fill = "clay", ring = false, style, ...rest }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size, height: size, borderRadius: "var(--radius-round)",
        background: FILLS[fill] || fill,
        border: ring ? "var(--stroke-swatch)" : undefined, boxSizing: "border-box",
        flexShrink: 0, ...style,
      }}
      {...rest}
    />
  );
}
export default AccentCircle;
