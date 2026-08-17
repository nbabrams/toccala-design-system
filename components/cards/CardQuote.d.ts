import * as React from "react";

/** Testimonial card. 636x220 in the source, radius 16, Paper ground, card shadow,
 *  24px stack, 24/32/32 padding. Opens on a 64px Optima Clay quote glyph. */
export interface CardQuoteProps extends React.HTMLAttributes<HTMLElement> {
  quote?: React.ReactNode;
  attribution?: React.ReactNode;
  width?: number | string;
}
export declare function CardQuote(props: CardQuoteProps): JSX.Element;
export default CardQuote;
