import React from "react";
import Wordmark from "../core/Wordmark.jsx";
import Kicker from "../core/Kicker.jsx";
import Button from "../core/Button.jsx";

const DEFAULT_COLUMNS = [
  { title: "Site", links: [
    { label: "Products & Pricing", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ] },
  { title: "Support", links: [
    { label: "FAQ", href: "#" },
    { label: "Request a sample", href: "#" },
    { label: "Privacy Policy & Terms", href: "#" },
  ] },
];

export function FooterMobile({
  columns = DEFAULT_COLUMNS,
  blurb = "Monthly print marketing for real estate agents. Something they can hold.",
  contact = "(760) 407-4783  \u00b7  hello@toccala.com",
  signupTitle = "Stay in touch",
  copyright = "\u00a9 2026 Toccala. All rights reserved.",
  ground,
  basePath = "",
  style, ...rest
}) {
  return (
    <footer
      style={{
        display: "flex", flexDirection: "column", gap: 40, alignItems: "flex-start",
        padding: "56px 24px 32px", boxSizing: "border-box", overflow: "hidden",
        background: `url(${ground ?? basePath + "assets/img/footer-ground.jpg"}) center / cover no-repeat, var(--surface-dark)`,
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
        <Wordmark tone="cream" width={129} basePath={basePath} />
        <p style={{ margin: 0, fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "var(--lh-body)", color: "var(--text-on-dark-soft)", textWrap: "pretty" }}>{blurb}</p>
        <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--link-on-dark)" }}>{contact}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", alignSelf: "stretch" }}>
        <Kicker tone="dark">{signupTitle}</Kicker>
        <form style={{ display: "flex", flexDirection: "column", gap: 12, alignSelf: "stretch" }} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            style={{
              height: 57, padding: "12px 24px", boxSizing: "border-box",
              borderRadius: "var(--radius-pill)", background: "var(--surface-dark)",
              border: "1.5px solid var(--hairline-on-dark)", outline: "none",
              fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, color: "var(--text-on-dark-soft)",
            }}
          />
          <Button variant="accent" size="card" as="button" style={{ height: 57 }}>Sign up</Button>
        </form>
      </div>
      {columns.map((col) => (
        <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
          <Kicker tone="dark">{col.title}</Kicker>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            {col.links.map((l) => (
              <a key={l.label} href={l.href} style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--text-on-dark)", textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </div>
      ))}
      <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 14, lineHeight: "100%", color: "var(--text-muted-on-dark)" }}>{copyright}</span>
    </footer>
  );
}
export default FooterMobile;
