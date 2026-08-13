import * as React from "react";

/** Uppercase, wide-tracked eyebrow label that sits above headlines and inside cards. */
export interface KickerProps extends React.HTMLAttributes<HTMLElement> {
  /** label = 14px display, 3px track, olive · plan = 13px text, 2.5px track, sienna · dark = 13px sand on green/ink · hero = 24px display caps */
  tone?: "label" | "plan" | "dark" | "hero";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export declare function Kicker(props: KickerProps): JSX.Element;
export default Kicker;
