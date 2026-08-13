import * as React from "react";

/**
 * Pricing / plan card — photo cap, plan kicker, big display price, hairline, bulleted features, pill CTA.
 */
export interface PlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
  plan?: string;
  /** display-face price, e.g. "$55" */
  price?: string;
  /** small text beside the price, e.g. "/ per month" */
  cadence?: string;
  features?: string[];
  cta?: string;
  /** url for the 345.511×295.018 media cap; falls back to a parchment fill */
  image?: string;
  onCta?: () => void;
}
export declare function PlanCard(props: PlanCardProps): JSX.Element;
export default PlanCard;
