import React from "react";

const TONES = { salmon: "salmon", slate: "slate", green: "green" };

export function SketchRing({ width = 276.639, variant = "a", tone = "salmon", basePath = "", style, ...rest }) {
  const file = (variant === "b" ? "sketch-ring-2" : "sketch-ring") + "-" + (TONES[tone] || "salmon");
  return (
    <img
      aria-hidden="true"
      alt=""
      src={basePath + "assets/marks/" + file + ".svg"}
      style={{ display: "block", width, height: width * (299.102 / 276.639), ...style }}
      {...rest}
    />
  );
}
export default SketchRing;
