import React from "react";

const TONES = {
  label: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, letterSpacing: "3px", color: "var(--text-kicker)", textTransform: "uppercase" },
  plan:  { fontFamily: "var(--font-text)",    fontWeight: 500, fontSize: 13, letterSpacing: "2.5px", color: "var(--text-plan-label)", textTransform: "uppercase" },
  dark:  { fontFamily: "var(--font-text)",    fontWeight: 500, fontSize: 13, letterSpacing: "3px",   color: "var(--text-on-dark-soft)", textTransform: "uppercase" },
  hero:  { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, letterSpacing: "normal", color: "var(--text-primary)", textTransform: "uppercase" },
};

export function Kicker({ tone = "label", as = "span", children, style, ...rest }) {
  const Tag = as;
  return <Tag style={{ display: "block", lineHeight: "100%", ...TONES[tone], ...style }} {...rest}>{children}</Tag>;
}
export default Kicker;
