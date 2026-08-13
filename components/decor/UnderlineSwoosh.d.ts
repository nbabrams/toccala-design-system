import * as React from "react";

/** Hand-drawn underline stroke placed under a word to emphasise it. */
export interface UnderlineSwooshProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  tone?: "gold" | "sienna" | "green";
  basePath?: string;
}
export declare function UnderlineSwoosh(props: UnderlineSwooshProps): JSX.Element;
export default UnderlineSwoosh;
