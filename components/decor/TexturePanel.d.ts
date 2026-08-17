import * as React from "react";

/* INTENTIONAL ADDITION — not a Figma kit component. The source applies the paper tile
 * as a raw fill; wrapped so the 220px repeat cannot be set wrong. Do not rename. */

/** Section ground that repeats the brand paper/plaster texture at its native 440×440 tile. */
export interface TexturePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  basePath?: string;
  children?: React.ReactNode;
}
export declare function TexturePanel(props: TexturePanelProps): JSX.Element;
export default TexturePanel;
