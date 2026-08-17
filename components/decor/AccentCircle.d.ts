import * as React from "react";

/* INTENTIONAL ADDITION — not a Figma kit component. The source has flat discs as raw
 * ellipse fills; wrapped so a disc can be placed by size and tone. Do not rename. */

/**
 * Flat colour disc used as a large background shape and as the 56px swatch dot.
 */
export interface AccentCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 56 for a swatch; 349.315 and 404.635 are the two background disc sizes in the source */
  size?: number;
  fill?: "clay" | "pine" | "sage" | "sun" | "gold" | "paper" | "ink" | string;
  /** 1px grey hairline, used only for the near-black swatch */
  ring?: boolean;
}
export declare function AccentCircle(props: AccentCircleProps): JSX.Element;
export default AccentCircle;
