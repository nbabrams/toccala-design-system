import * as React from "react";

/** Underlined text link with a trailing arrow. Gold on dark grounds, sienna on light. */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** light = sienna @17px on cream · dark = gold @18px on deep green */
  tone?: "light" | "dark";
  /** trailing "→" (default true) */
  arrow?: boolean;
  children?: React.ReactNode;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;
export default TextLink;
