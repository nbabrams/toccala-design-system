import React from "react";

const TONES = { cream: "cream", green: "green", ink: "ink" };

export function Wordmark({ width = 184, tone = "cream", plate = false, basePath = "", style, ...rest }) {
  const mark = (
    <img
      src={basePath + "assets/marks/toccala-wordmark-" + (TONES[tone] || "cream") + ".svg"}
      alt="Toccala"
      width={width}
      height={width * (45 / 184)}
      style={{ display: "block", width, height: width * (45 / 184), ...(plate ? null : style) }}
    />
  );
  if (!plate) return mark;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
      padding: 24, borderRadius: "var(--radius-xs)", background: "var(--surface-dark)", ...style }} {...rest}>
      {mark}
    </div>
  );
}
export default Wordmark;
