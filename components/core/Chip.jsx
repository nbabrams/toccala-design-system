import React from "react";

const TONES = {
  light: { background: "transparent", color: "var(--text-primary)", border: "1.5px solid var(--hairline)" },
  dark:  { background: "transparent", color: "var(--text-on-dark)", border: "1.5px solid var(--hairline-on-dark)" },
  solid: { background: "var(--surface-card)", color: "var(--text-primary)", border: "1.5px solid transparent" },
};

export function Chip({ tone = "light", children, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "8px 16px", borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 13, lineHeight: "100%",
        whiteSpace: "nowrap", boxSizing: "border-box",
        ...(TONES[tone] || TONES.light), ...style,
      }}
      {...rest}
    >{children}</span>
  );
}
export default Chip;
