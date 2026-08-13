import * as React from "react";

/** Section ground that repeats the brand paper/plaster texture at its native 440×440 tile. */
export interface TexturePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  basePath?: string;
  children?: React.ReactNode;
}
export declare function TexturePanel(props: TexturePanelProps): JSX.Element;
export default TexturePanel;
