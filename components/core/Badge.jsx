import React from "react";

const TONES = {
  accent: { background: "var(--accent)", color: "var(--accent-ink)" },
  dark:   { background: "var(--surface-dark)", color: "var(--text-on-dark)" },
  sun:    { background: "var(--sun)", color: "var(--pine)" },
};

export function Badge({ tone = "accent", children, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "8px 16px", borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 13, lineHeight: "100%",
        whiteSpace: "nowrap", boxSizing: "border-box",
        ...(TONES[tone] || TONES.accent), ...style,
      }}
      {...rest}
    >{children}</span>
  );
}
export default Badge;
