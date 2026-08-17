import * as React from "react";

/* INTENTIONAL ADDITION — not a Figma kit component. The source sets the handwritten
 * aside as loose text; wrapped to keep the one-per-view rule. Do not rename. */

/**
 * Handwritten Seaweed Script accent — one short phrase per view, often slightly rotated.
 */
export interface ScriptAccentProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 24 / 29 / 34px are the sizes used in the source */
  size?: number;
  /** small tilt in degrees; the source uses roughly -3 to -4 */
  rotate?: number;
  tone?: "primary" | "olive" | "dark";
  children?: React.ReactNode;
}
export declare function ScriptAccent(props: ScriptAccentProps): JSX.Element;
export default ScriptAccent;
