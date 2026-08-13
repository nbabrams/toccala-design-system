const PLANS = [
  { plan: "Plan Name Here", price: "$55", features: ["Feature line item here", "Another feature line here", "One more feature here"] },
  { plan: "Second Plan Here", price: "$95", features: ["Everything in the first plan", "Another feature line here", "One more feature here"] },
];

function OfferBand() {
  const { PlanCard, Button, TextLink, ScriptAccent, AccentCircle, SketchRing, TexturePanel } = window.TOCCALA_NS;
  const [i, setI] = React.useState(0);
  const p = PLANS[i];
  return (
    <TexturePanel basePath="../../" style={{ position: "relative", height: 1085, display: "flex", flexDirection: "row", gap: 153,
      padding: "112px 0", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>

      <PlanCard plan={p.plan} price={p.price} cadence="/ per month" features={p.features} cta="Get Started"
        image="../../assets/img/card-photo.jpg" onCta={() => setI((i + 1) % PLANS.length)} />

      <div style={{ width: 391.862, display: "flex", flexDirection: "column", gap: 239, alignItems: "flex-start", flexShrink: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start", alignSelf: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", alignSelf: "stretch" }}>
            <span className="t-numeral">{String(i + 1).padStart(2, "0")}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", alignSelf: "stretch" }}>
              <h3 style={{ fontFamily: "var(--font-display-cond)", fontWeight: 500, fontSize: 40, lineHeight: "46px", color: "var(--text-primary)", whiteSpace: "nowrap" }}>A Third Headline</h3>
              <p style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 18, lineHeight: 1.4, color: "var(--text-primary)", alignSelf: "stretch" }}>
                Large body copy ipsum dolor sit amet, duis aute irure dolor reprehenderit vol
              </p>
              <TextLink tone="light" href="#">Text Link On Light</TextLink>
            </div>
          </div>
          <Button variant="accent" size="lg">Accent Button</Button>
        </div>
      </div>

      {/* mint disc + full-bleed bottom band */}
      <div style={{ position: "absolute", left: 0, top: 605.518, width: 1440, height: 582.448, overflow: "hidden", pointerEvents: "none" }}>
        <AccentCircle size={404.635} fill="#ABD1CC" style={{ position: "absolute", left: 989.956, top: 0 }} />
        <div style={{ position: "absolute", left: 0, top: 371.09, width: 1440, height: 211.358,
          background: "url(../../assets/img/band-bottom.png) 50% 0% / 100% 191.966% no-repeat" }} />
      </div>

      {/* portrait cluster — dark wedge, rotated ring, two script accents */}
      <div style={{ position: "absolute", left: 685.877, top: 477.692, width: 753.748, height: 711.126, overflow: "hidden", pointerEvents: "none" }}>
        <svg width="753.748" height="408.39" viewBox="0 0 753.748 408.39" style={{ position: "absolute", left: 0, top: 302.737 }}>
          <path d="M 753.748 408.39 L 753.748 0 L 443.17 183.511 L 0 408.39 L 753.748 408.39 Z" fill="rgb(30,61,52)" fillRule="evenodd" />
        </svg>
        <SketchRing variant="b" width={339.242} tone="slate" basePath="../../"
          style={{ position: "absolute", left: 0, top: 0, height: 337.844,
            transform: "matrix(-0.810,0.586,-0.586,-0.810,742.840,395.548)", transformOrigin: "0 0" }} />
        <ScriptAccent size={29} tone="olive" style={{ position: "absolute", left: 0, top: 0, width: 133.946, lineHeight: "24px",
          transform: "matrix(0.999,-0.052,0.052,0.999,574.950,543.185)", transformOrigin: "0 0" }}>{"and another\n for good \n    measure..."}</ScriptAccent>
        <div style={{ position: "absolute", left: 267.849, top: 0, width: 363.235, height: 709.906,
          background: "url(../../assets/img/portrait-tall.png) 50% 0% / 100% 124.89% no-repeat" }} />
        <ScriptAccent size={34} style={{ position: "absolute", left: 0, top: 0, width: 233.578, lineHeight: "29px",
          transform: "matrix(0.998,-0.070,0.070,0.998,182.783,385.784)", transformOrigin: "0 0" }}>{"a handwritten \n       accent    \n  here"}</ScriptAccent>
      </div>
    </TexturePanel>
  );
}
Object.assign(window, { OfferBand });
