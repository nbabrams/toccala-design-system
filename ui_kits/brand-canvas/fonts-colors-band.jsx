const LABEL = { fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 13, lineHeight: "100%", letterSpacing: "3px", color: "var(--text-on-dark-soft)", whiteSpace: "nowrap" };
const ROW1 = ["var(--pine)", "var(--brick)", "var(--clay)", "var(--sun)", "var(--gold)", "var(--stone)", "var(--sage)", "var(--blueprint)"];
const ROW2 = ["var(--parchment)", "var(--paper)", "var(--white)"];

function FontsColorsBand() {
  const { AccentCircle } = window.TOCCALA_NS;
  return (
    <div style={{ height: 405, overflow: "hidden", background: "var(--surface-ink)", display: "flex", flexDirection: "row",
      gap: 140, padding: "90px 96px 110px", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", flexShrink: 0 }}>
        <span style={LABEL}>FONTS</span>
        <span style={LABEL}>Optima Nova</span>
        <span style={LABEL}>Wix Madefor Text</span>
        <span style={LABEL}>seaweed script</span>
      </div>
      <div style={{ width: 632, display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", flexShrink: 0 }}>
        <span style={LABEL}>COLORS</span>
        <div style={{ width: 632, height: 56, display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
          {ROW1.map((c, i) => <AccentCircle key={i} size={56} fill={c} />)}
          <AccentCircle size={56} fill="var(--ink)" ring />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
          {ROW2.map((c, i) => <AccentCircle key={i} size={56} fill={c} />)}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { FontsColorsBand });
