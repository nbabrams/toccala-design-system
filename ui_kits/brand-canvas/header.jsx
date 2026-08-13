function Header() {
  const { Wordmark } = window.TOCCALA_NS;
  return (
    <div style={{ height: 280.919, overflow: "hidden", background: "var(--surface-page)", display: "flex", flexDirection: "column",
      padding: "81px 0 64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
      <div style={{ width: 232, height: 93, borderRadius: "var(--radius-xs)", background: "var(--surface-dark)",
        display: "flex", padding: 24, justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexShrink: 0 }}>
        <Wordmark width={184} tone="cream" basePath="../../" />
      </div>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, textAlign: "center",
        lineHeight: "99px", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.02em" }}>Italian Warmth</span>
    </div>
  );
}
Object.assign(window, { Header });
