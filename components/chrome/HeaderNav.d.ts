import * as React from "react";

export interface HeaderNavLink { label: string; href?: string }

/** Site header, transcribed from 00-Header on the approved homepage: 104px tall,
 *  64px gutters, Paper ground, 150px green wordmark, nav row at 36px gap with 16px
 *  Text links, md primary button (173x61) at the end. */
export interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {
  links?: HeaderNavLink[];
  cta?: React.ReactNode;
  ctaHref?: string;
  /** prefix for the wordmark asset path, e.g. "../../" from a nested page */
  basePath?: string;
}
export declare function HeaderNav(props: HeaderNavProps): JSX.Element;
export default HeaderNav;
