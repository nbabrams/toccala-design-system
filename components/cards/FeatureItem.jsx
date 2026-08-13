import React from "react";

export function FeatureItem({ children, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, ...style }} {...rest}>
      <span style={{ width: "var(--bullet-size)", height: "var(--bullet-size)", borderRadius: "var(--radius-round)", background: "var(--bullet)", flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 16, lineHeight: "100%", color: "var(--text-primary)" }}>{children}</span>
    </div>
  );
}
export default FeatureItem;
