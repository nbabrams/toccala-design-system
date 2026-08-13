import * as React from "react";

/** Hand-sketched open circle that loops around imagery and accent discs. Two variants ship in the source. */
export interface SketchRingProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  /** a = hero ring · b = the rotated ring over the dark wedge */
  variant?: "a" | "b";
  /** salmon (hero) · slate (dark wedge) · green — pre-tinted files, one per tone */
  tone?: "salmon" | "slate" | "green";
  /** prefix to reach the project root, e.g. "../../" from a nested page */
  basePath?: string;
}
export declare function SketchRing(props: SketchRingProps): JSX.Element;
export default SketchRing;
