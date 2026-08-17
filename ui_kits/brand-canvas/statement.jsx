function Statement() {
  const { TextLink } = window.TOCCALA_NS;
  return (
    <div style={{ height: 612, overflow: "hidden", background: "var(--surface-dark)", display: "flex", flexDirection: "row",
      gap: 96, alignItems: "center", flexShrink: 0, alignSelf: "stretch" }}>
      <div style={{ width: 656, height: 612, overflow: "hidden", background: "var(--surface-dark)", display: "flex",
        flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flexShrink: 0 }}>
        <div style={{ width: 606.532, height: 616.895, flexShrink: 0,
          background: "url(../../assets/img/lifestyle-fridge.png) center / cover no-repeat" }} />
      </div>
      <div style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: 36, alignItems: "flex-start", flexGrow: 1 }}>
        <h2 style={{ width: 582.646, fontFamily: "var(--font-display-cond)", fontWeight: 500, fontSize: 56, lineHeight: 1.1, color: "var(--text-on-dark)" }}>
          A secondary headline would look like this
        </h2>
        <p style={{ width: 514.082, fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: 1.4,
          color: "var(--text-muted-on-dark)", whiteSpace: "pre-wrap" }}>
          {"Medium body copy lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore .\n\nCommodo consequat! Duis aute irure dolor reprehenderit voluptate velit esse lorem ipsum dolor sit amet."}
        </p>
        <TextLink tone="dark" href="#">Text Button On Dark</TextLink>
      </div>
    </div>
  );
}
Object.assign(window, { Statement });
