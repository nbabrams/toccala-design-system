import React from "react";

export function ScriptAccent({ size = 34, rotate = 0, tone = "primary", children, style, ...rest }) {
  const colors = { primary: "var(--text-primary)", olive: "var(--stone)", dark: "var(--text-on-dark)" };
  return (
    <span
      style={{
        fontFamily: "var(--font-script)", fontWeight: 400, fontSize: size,
        lineHeight: size >= 34 ? "44px" : "24px", color: colors[tone] || colors.primary,
        display: "inline-block", transform: rotate ? `rotate(${rotate}deg)` : undefined,
        whiteSpace: "pre-line", ...style,
      }}
      {...rest}
    >{children}</span>
  );
}
export default ScriptAccent;
