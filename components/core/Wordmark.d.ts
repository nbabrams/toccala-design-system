import * as React from "react";

/** The Toccala wordmark, extracted verbatim from the source file's vector outlines. */
export interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  /** rendered width in px; native artwork is 184×45 */
  width?: number;
  /** pre-tinted files: cream on dark grounds, green or ink on light */
  tone?: "cream" | "green" | "ink";
  /** wrap in the 24px-padded deep-green 4px-radius plate used in the style-tile header */
  plate?: boolean;
  /** prefix to reach the project root, e.g. "../../" from a nested page */
  basePath?: string;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
export default Wordmark;
