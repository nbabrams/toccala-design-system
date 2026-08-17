import * as React from "react";

/** Outlined pill for filters and taxonomy. NOTE: "Chip component" is declared in the
 *  Figma kit but has zero placed instances, so it carries no geometry of its own —
 *  this is built from the system's pill vocabulary (Badge padding, 1.5px hairline
 *  stroke, 13px Text). Confirm against Figma before relying on it in production. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "light" | "dark" | "solid";
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
export default Chip;
