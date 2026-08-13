import React from "react";

export function Divider({ tone = "light", width = 280, style, ...rest }) {
  return (
    <div
      role="separator"
      style={{
        width, height: "var(--rule-weight)", flexShrink: 0,
        background: tone === "dark" ? "var(--hairline-on-dark)" : "var(--hairline)", ...style,
      }}
      {...rest}
    />
  );
}
export default Divider;
