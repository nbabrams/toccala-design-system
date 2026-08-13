import * as React from "react";

/**
 * Pill button — the only button shape in the Toccala system.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = deep green solid · secondary = 1.5px green outline · accent = terracotta solid */
  variant?: "primary" | "secondary" | "accent";
  /** md 18/38 @16px (hero pair) · lg 18/38 @18px (accent CTA) · card 16/34 @18px (plan card CTA) */
  size?: "md" | "lg" | "card";
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
