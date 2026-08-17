import * as React from "react";

/* INTENTIONAL NAME — this IS the kit family "09-Footer-Wireframe-Mobile". Do not rename. */
import { FooterColumn } from "./Footer";

/** Mobile site footer. NOTE: "09-Footer-Wireframe-Mobile" is declared in the Figma
 *  kit but has zero placed instances, so the stacking order and padding are inferred
 *  from the desktop footer: single column, 24px gutters, 40px stack, signup above the
 *  link columns. Confirm against Figma. */
export interface FooterMobileProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  blurb?: React.ReactNode;
  contact?: React.ReactNode;
  signupTitle?: React.ReactNode;
  copyright?: React.ReactNode;
  ground?: string;
  basePath?: string;
}
export declare function FooterMobile(props: FooterMobileProps): JSX.Element;
export default FooterMobile;
