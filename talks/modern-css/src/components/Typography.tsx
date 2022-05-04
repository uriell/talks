import styled, { css } from "styled-components";
import { COLORS } from "@ditointernet/uai-foundation";

import { margin, MarginProps } from "../utils/styling";

export type TypographyProps = {
  size?: "large" | "normal" | "small";
  weight?: FontWeights;
  color?: string;
  align?: string;
  transform?: string;
  suffix?: string;
  suffixColor?: string;
  suffixBlinking?: boolean;
} & MarginProps;

function getTextProps(props: TypographyProps & { as?: "h1" | "h2" | "h3" }) {
  const suffix = props.suffix || "";
  const suffixColor = props.suffixColor || COLORS.GREEN_MAIN;
  const weight = FONT_WEIGHTS[props.weight ?? "medium"];
  const size = props.as
    ? FONT_SIZES[props.as] ?? FONT_SIZES[props.size ?? "normal"]
    : FONT_SIZES[props.size ?? "normal"];

  return css`
    font-weight: ${weight};
    font-size: ${size};
    line-height: ${size};
    ${props.color ? `color: ${props.color};` : ""}
    ${props.align ? `text-align: ${props.align};` : ""}
    ${props.transform ? `text-transform: ${props.transform};` : ""}

    i {
      font-weight: 700;
      font-style: normal;
      color: ${COLORS.GREEN_MAIN};
    }

    &:after {
      content: "${suffix}";
      color: ${suffixColor};
      animation: ${(props: TypographyProps) =>
          props.suffixBlinking ? "blinking" : "none"}
        1.5s linear infinite;
      margin-left: ${(props: TypographyProps) =>
        props.suffixBlinking ? "0.125rem" : "auto"};
    }

    @keyframes blinking {
      from {
        content: "";
      }

      to {
        content: "${suffix}";
      }
    }
  `;
}

type FontSizes = "large" | "normal" | "small" | "overline" | "h3" | "h2" | "h1";

const FONT_SIZES: Record<FontSizes, string> = {
  large: "1.5rem",
  normal: "1.25rem",
  small: "1rem",
  overline: "1rem",
  h3: "2rem",
  h2: "2.5rem",
  h1: "3rem",
};

type FontWeights = "black" | "bold" | "semibold" | "medium" | "regular";

const FONT_WEIGHTS: Record<FontWeights, number> = {
  black: 900,
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

export const Text = styled.span<TypographyProps>`
  ${margin}
  ${getTextProps}
`;

export const H1 = styled(Text).attrs<TypographyProps>((props) => ({
  ...props,
  as: "h1",
}))``;

export const H2 = styled(Text).attrs<TypographyProps>((props) => ({
  ...props,
  as: "h2",
}))``;

export const H3 = styled(Text).attrs<TypographyProps>((props) => ({
  ...props,
  as: "h3",
}))``;

export const Overline = styled(Text).attrs<TypographyProps>((props) => ({
  ...props,
  size: "overline",
  transform: "uppercase",
}))``;

export const Link = styled.a`
  color: ${COLORS.GREEN_MAIN};
  text-decoration: underline;
  font-size: ${FONT_SIZES.small};
  line-height: ${FONT_SIZES.small};
`;
