import * as React from "react";

/* INTENTIONAL NAME — this IS the kit family "09-Footer-Wireframe". A component name
 * cannot begin with a digit, so this family is unmatchable by name; the clean name is
 * kept deliberately. Do not rename. */

export interface FooterColumn { title: string; links: { label: string; href?: string }[] }

/** Site footer, transcribed from 09-Footer on the approved homepage: 426px tall,
 *  64/64/40 padding, 64px stack. Ground is a Pine paper texture (assets/img/footer-ground.jpg,
 *  2048x793, cover) over --surface-dark as the fallback fill. 329px brand column,
 *  link columns at 18px title gap and 12px between links with 72px between columns,
 *  411px signup column (266x57 pill input on Pine with a 1.5px hairline, accent
 *  card button), bottom row with 19.5px social glyphs at 24px gap.
 *  NOTE: the .fig collapsed three distinct social glyphs into one shape — pass
 *  per-network icons once you have them. */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  blurb?: React.ReactNode;
  contact?: React.ReactNode;
  signupTitle?: React.ReactNode;
  signupNote?: React.ReactNode;
  copyright?: React.ReactNode;
  socials?: { href?: string; label?: string }[];
  /** override the ground image URL */
  ground?: string;
  basePath?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
export default Footer;
