import * as React from "react";

/** Pill label. Brick ground with Parchment text in the source ("Postage included",
 *  209x29, 8x16 padding, 13px). Sits on a plan card or beside a price. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "accent" | "dark" | "sun";
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
export default Badge;
