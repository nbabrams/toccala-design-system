import * as React from "react";

/**
 * Pill button — the only button shape in the Toccala system.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = pine solid · secondary = 1.5px pine outline · accent = brick solid */
  variant?: "primary" | "secondary" | "accent";
  /** all label at 18px (Body L) · md 18/38 (hero pair) · lg 18/38 (accent CTA) · card 16/34 (plan card CTA) */
  size?: "md" | "lg" | "card";
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
