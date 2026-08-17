import React from "react";

export function CardQuote({ quote, attribution, width = 636, style, ...rest }) {
  return (
    <figure
      style={{
        display: "flex", flexDirection: "column", gap: 24, margin: 0,
        width, padding: "24px 32px 32px", boxSizing: "border-box",
        borderRadius: "var(--radius-lg)", background: "var(--surface-card)",
        boxShadow: "var(--shadow-card)", ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 64, lineHeight: 1, color: "var(--clay)", height: 44 }}>&ldquo;</span>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 20, lineHeight: "var(--lh-body)", color: "var(--text-primary)", textWrap: "pretty" }}>{quote}</blockquote>
      <figcaption style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--text-kicker)" }}>{attribution}</figcaption>
    </figure>
  );
}
export default CardQuote;
