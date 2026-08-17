import * as React from "react";

/* Matches the kit family "Header-Nav-Wireframe-Mobile" by name — the matcher needs the
 * "Wireframe" token carried literally, which is why this one name keeps it. */

/** Mobile site header. NOTE: "Header-Nav-Wireframe-Mobile" is declared in the Figma
 *  kit but has zero placed instances, so its geometry is inferred from the desktop
 *  header and the system's 44px minimum hit target: 72px tall, 24px gutters, 120px
 *  wordmark, 1.5px rule weight on the menu bars. Confirm against Figma. */
export interface HeaderNavWireframeMobileProps extends React.HTMLAttributes<HTMLElement> {
  basePath?: string;
  onMenu?: () => void;
}
export declare function HeaderNavWireframeMobile(props: HeaderNavWireframeMobileProps): JSX.Element;
export default HeaderNavWireframeMobile;
