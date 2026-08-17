import React from "react";
import Wordmark from "../core/Wordmark.jsx";
import Button from "../core/Button.jsx";

const DEFAULT_LINKS = [
  { label: "Products & Pricing", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "(760) 407-4783", href: "tel:+17604074783" },
  { label: "Log in", href: "#" },
];

export function HeaderNav({ links = DEFAULT_LINKS, cta = "Get started", ctaHref = "#", basePath = "", style, ...rest }) {
  return (
    <header
      style={{
        display: "flex", flexDirection: "row", alignItems: "center",
        height: "var(--header-h)", padding: "0 var(--gutter-page)",
        background: "var(--surface-page)", boxSizing: "border-box", overflow: "hidden", ...style,
      }}
      {...rest}
    >
      <Wordmark tone="green" width={150} basePath={basePath} />
      <span style={{ flexGrow: 1 }} />
      <nav style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 36 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--text-primary)", textDecoration: "none", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--link-on-light)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
          >{l.label}</a>
        ))}
        <Button size="md" href={ctaHref}>{cta}</Button>
      </nav>
    </header>
  );
}
export default HeaderNav;
