import * as React from "react";

/** Uppercase, wide-tracked eyebrow label that sits above headlines and inside cards. */
export interface KickerProps extends React.HTMLAttributes<HTMLElement> {
  /** label = 18px display Demi, 3px track, stone (the H6 eyebrow) · plan = 13px text, 2.5px track, brick · dark = 13px sand on pine/ink · hero = 24px display caps */
  tone?: "label" | "plan" | "dark" | "hero";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export declare function Kicker(props: KickerProps): JSX.Element;
export default Kicker;
