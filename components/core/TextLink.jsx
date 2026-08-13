import React from "react";

export function TextLink({ tone = "light", children, arrow = true, style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <a
      style={{
        fontFamily: "var(--font-text)", fontWeight: 500,
        fontSize: onDark ? 18 : 17, lineHeight: 1.2,
        color: onDark ? "var(--link-on-dark)" : "var(--link-on-light)",
        textDecorationLine: "underline", textDecorationThickness: "1.5px", textDecorationColor: "currentColor",
        textUnderlineOffset: 3, whiteSpace: "nowrap",
        transition: "opacity var(--dur-fast) var(--ease-warm)", ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      {...rest}
    >{children}{arrow ? "\u2002\u2002\u2192" : null}</a>
  );
}
export default TextLink;
