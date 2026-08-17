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

const linkStyle = { fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--text-on-dark)", textDecoration: "none" };

export function Footer({
  columns = DEFAULT_COLUMNS,
  blurb = "Monthly print marketing for real estate agents. Something they can hold.",
  contact = "(760) 407-4783  \u00b7  hello@toccala.com",
  signupTitle = "Stay in touch",
  signupNote = "Unsubscribe anytime.",
  copyright = "\u00a9 2026 Toccala. All rights reserved.",
  socials = [{ href: "#", label: "Social" }, { href: "#", label: "Social" }, { href: "#", label: "Social" }],
  ground,
  basePath = "",
  style, ...rest
}) {
  return (
    <footer
      style={{
        display: "flex", flexDirection: "column", gap: 64, alignItems: "center",
        padding: "64px var(--gutter-page) 40px", boxSizing: "border-box", overflow: "hidden",
        background: `url(${ground ?? basePath + "assets/img/footer-ground.jpg"}) center / cover no-repeat, var(--surface-dark)`,
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", alignSelf: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", width: 329, flexShrink: 0 }}>
          <Wordmark tone="cream" width={129} basePath={basePath} />
          <p style={{ margin: 0, fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "var(--lh-body)", color: "var(--text-on-dark-soft)", textWrap: "pretty" }}>{blurb}</p>
          <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--link-on-dark)" }}>{contact}</span>
        </div>
        <span style={{ flexGrow: 1 }} />
        {columns.map((col, i) => (
          <React.Fragment key={col.title}>
            {i > 0 ? <span style={{ width: 72, flexShrink: 0 }} /> : null}
            <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", flexShrink: 0 }}>
              <Kicker tone="dark">{col.title}</Kicker>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href} style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--link-on-dark)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-on-dark)"; }}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
        <span style={{ width: 72, flexShrink: 0 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", width: 411, flexShrink: 0 }}>
          <Kicker tone="dark">{signupTitle}</Kicker>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", alignSelf: "stretch" }}>
            <form style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "center", alignSelf: "stretch" }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                style={{
                  width: 266, height: 57, padding: "12px 24px", boxSizing: "border-box",
                  borderRadius: "var(--radius-pill)", background: "var(--surface-dark)",
                  border: "1.5px solid var(--hairline-on-dark)", outline: "none",
                  fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, color: "var(--text-on-dark-soft)",
                }}
              />
              <Button variant="accent" size="card" as="button" style={{ height: 57 }}>Sign up</Button>
            </form>
            <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 14, lineHeight: "100%", color: "var(--text-muted-on-dark)" }}>{signupNote}</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "stretch" }}>
        <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 14, lineHeight: "100%", color: "var(--text-muted-on-dark)" }}>{copyright}</span>
        <span style={{ flexGrow: 1 }} />
        <div style={{ display: "flex", flexDirection: "row", gap: 24, alignItems: "center" }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href} aria-label={s.label} style={{ display: "block", width: 19.5, height: 19.5, color: "var(--text-muted-on-dark)" }}>
              <img src={basePath + "assets/icons/social-glyph.svg"} alt="" width={19.5} height={19.5} style={{ display: "block" }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
