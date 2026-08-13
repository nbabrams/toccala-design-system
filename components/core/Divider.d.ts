import * as React from "react";

/** 1.5px hairline rule at 25% of the ground colour. */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark";
  /** px or any CSS length; 280 in the source plan card */
  width?: number | string;
}
export declare function Divider(props: DividerProps): JSX.Element;
export default Divider;
