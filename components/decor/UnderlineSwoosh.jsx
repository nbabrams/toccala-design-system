import React from "react";

const TONES = { gold: "gold", sienna: "sienna", green: "green" };

export function UnderlineSwoosh({ width = 140.871, tone = "gold", basePath = "", style, ...rest }) {
  return (
    <img
      aria-hidden="true"
      alt=""
      src={basePath + "assets/marks/underline-swoosh-" + (TONES[tone] || "gold") + ".svg"}
      style={{ display: "block", width, height: width * (5.272 / 140.871), ...style }}
      {...rest}
    />
  );
}
export default UnderlineSwoosh;
