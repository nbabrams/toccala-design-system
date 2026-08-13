import React from "react";

const SIZES = {
  md:   { padding: "18px 38px", fontSize: 18 },
  lg:   { padding: "18px 38px", fontSize: 18 },
  card: { padding: "16px 34px", fontSize: 18 },
};

const VARIANTS = {
  primary:   { background: "var(--action-solid)", color: "var(--action-solid-ink)", border: "1.5px solid transparent" },
  secondary: { background: "transparent", color: "var(--action-outline)", border: "var(--stroke-outline)" },
  accent:    { background: "var(--accent)", color: "var(--accent-ink)", border: "1.5px solid transparent" },
};

export function Button({ variant = "primary", size = "md", as = "button", href, children, style, ...rest }) {
  const Tag = href ? "a" : as;
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <Tag
      href={href}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12,
        borderRadius: "var(--radius-pill)", overflow: "hidden",
        fontFamily: "var(--font-text)", fontWeight: 500, lineHeight: "100%",
        textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap", boxSizing: "border-box",
        transition: "filter var(--dur-base) var(--ease-warm), transform var(--dur-fast) var(--ease-warm), background var(--dur-base) var(--ease-warm)",
        padding: s.padding, fontSize: s.fontSize, ...v, ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.filter = variant === "secondary" ? "none" : "brightness(0.92)"; if (variant === "secondary") e.currentTarget.style.background = "rgba(30,61,52,0.06)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; if (variant === "secondary") e.currentTarget.style.background = "transparent"; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.985)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "none"; }}
      {...rest}
    >{children}</Tag>
  );
}
export default Button;
