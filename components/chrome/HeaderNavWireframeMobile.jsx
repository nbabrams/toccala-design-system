import React from "react";
import Wordmark from "../core/Wordmark.jsx";

export function HeaderNavWireframeMobile({ basePath = "", onMenu, style, ...rest }) {
  return (
    <header
      style={{
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",
        height: 72, padding: "0 24px", background: "var(--surface-page)",
        boxSizing: "border-box", overflow: "hidden", ...style,
      }}
      {...rest}
    >
      <Wordmark tone="green" width={120} basePath={basePath} />
      <button
        type="button"
        aria-label="Open menu"
        onClick={onMenu}
        style={{ width: 44, height: 44, display: "flex", flexDirection: "column", justifyContent: "center", gap: 5, padding: 0, background: "none", border: 0, cursor: "pointer" }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "var(--text-primary)" }} />
        ))}
      </button>
    </header>
  );
}
export default HeaderNavWireframeMobile;
