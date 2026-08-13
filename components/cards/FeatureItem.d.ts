import * as React from "react";

/** One feature line: an 8px terracotta dot, 10px gap, 16px text. */
export interface FeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export declare function FeatureItem(props: FeatureItemProps): JSX.Element;
export default FeatureItem;
