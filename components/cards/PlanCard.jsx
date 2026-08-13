import React from "react";
import { Kicker } from "../core/Kicker.jsx";
import { Divider } from "../core/Divider.jsx";
import { Button } from "../core/Button.jsx";
import { FeatureItem } from "./FeatureItem.jsx";

export function PlanCard({
  plan = "Plan Name Here",
  price = "$55",
  cadence = "/ per month",
  features = [],
  cta = "Get Started",
  image,
  onCta,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        width: 361.511, boxSizing: "border-box", overflow: "hidden",
        borderRadius: "var(--radius-lg)", background: "var(--surface-card)",
        boxShadow: "var(--shadow-card)",
        display: "flex", flexDirection: "column", gap: 16, padding: "8px 8px 40px 8px",
        alignItems: "flex-start", ...style,
      }}
      {...rest}
    >
      <div style={{
        width: 345.511, height: 295.018, flexShrink: 0,
        borderRadius: "12px 12px 0px 0px",
        background: image ? `url(${image}) center / cover no-repeat` : "var(--raw-parchment-deep)",
      }} />
      <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: 16, padding: "0 16px", boxSizing: "border-box", alignItems: "flex-start" }}>
        <Kicker tone="plan">{plan}</Kicker>
        <div style={{ display: "flex", flexDirection: "row", gap: 8, alignItems: "flex-end" }}>
          <span style={{ fontFamily: "var(--font-display-cond)", fontWeight: 500, fontSize: 54, lineHeight: "100%", color: "var(--text-price)" }}>{price}</span>
          <span style={{ fontFamily: "var(--font-text)", fontWeight: 500, fontSize: 15, lineHeight: "100%", color: "var(--text-primary)" }}>{cadence}</span>
        </div>
        <Divider width={280} />
        {features.map((t, i) => <FeatureItem key={i}>{t}</FeatureItem>)}
        <Button size="card" onClick={onCta}>{cta}</Button>
      </div>
    </div>
  );
}
export default PlanCard;
