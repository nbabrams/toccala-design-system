function Hero() {
  const { Button, Kicker, ScriptAccent, AccentCircle, SketchRing, UnderlineSwoosh } = window.TOCCALA_NS;
  return (
    <div style={{ position: "relative", height: 873, overflow: "hidden", display: "flex", flexDirection: "column", gap: 64,
      padding: "24px 64px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>

      {/* decor cluster — terracotta disc, multiply-blended stamp, sketch ring */}
      <div style={{ position: "absolute", left: 1201.343, top: 443.724 - 276.919, width: 349.315, height: 358.49, overflow: "hidden" }}>
        <AccentCircle size={349.315} fill="clay" style={{ position: "absolute", left: 0, top: 0 }} />
        <div style={{ position: "absolute", left: 60.704, top: 185.552, width: 179.907, height: 172.938, mixBlendMode: "multiply",
          background: "url(../../assets/img/hero-stamp.jpg) 50% 100% / 100% 156.045% no-repeat" }} />
        <SketchRing variant="a" width={276.639} basePath="../../" style={{ position: "absolute", left: 46.81, top: 25.106 }} />
      </div>

      <div style={{ height: 849, display: "flex", flexDirection: "column", gap: 64, padding: "56px 24px",
        justifyContent: "center", alignItems: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "center", flexGrow: 1, alignSelf: "stretch" }}>

          <div style={{ display: "flex", flexDirection: "row", gap: 11, justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
            <Kicker tone="hero" style={{ lineHeight: 1.2 }}>A top kicker with</Kicker>
            <div style={{ height: 89, display: "flex", gap: 10, padding: "0 0 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ScriptAccent size={34} style={{ lineHeight: "99px" }}>a handwritten accent.</ScriptAccent>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexShrink: 0, alignSelf: "stretch" }}>
            <div style={{ width: 582, overflow: "hidden", display: "flex", flexDirection: "column", gap: 53, alignItems: "flex-start", flexShrink: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", alignSelf: "stretch" }}>
                <Kicker tone="label">Kicker label here</Kicker>
                <h1 style={{ fontFamily: "var(--font-display-cond)", fontWeight: 500, fontSize: 112, lineHeight: "112px",
                  color: "var(--text-primary)", textWrap: "balance", alignSelf: "stretch" }}>Headline Text Here</h1>
                <p style={{ width: 520, fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 24, lineHeight: 1.2, color: "var(--text-primary)" }}>
                  A subhead sentence supporting the headline could look like this. A subhead sentence supporting the headline could look like this.
                </p>
                <UnderlineSwoosh width={140.871} basePath="../../" style={{ marginLeft: 126.128, marginTop: -12 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
                <Button variant="primary" size="md">Primary Button</Button>
                <Button variant="secondary" size="md">Secondary Button</Button>
              </div>
            </div>
            <div style={{ width: 664, height: 503, overflow: "hidden", borderRadius: "var(--radius-lg)", flexShrink: 0,
              background: "url(../../assets/img/print-kit.png) 20.742% 50% / 135% 100% no-repeat" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Hero });
