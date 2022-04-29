import styled, { css } from "styled-components";
import { COLORS } from "@ditointernet/uai-foundation";
import { margin, MarginProps } from "../utils/styling";

export type TypographyProps = {
  color?: string;
  size?: "large" | "normal" | "small";
  weight?: "black" | "bold" | "medium" | "regular";
  height?: string;
  spacing?: string;
  align?: string;
  transform?: string;
  decoration?: string;
  suffix?: string;
  suffixColor?: string;
  suffixBlinking?: boolean;
} & MarginProps;

function getTextProps(props: TypographyProps) {
  const suffix = props.suffix || "";
  const suffixColor = props.suffixColor || COLORS.GREEN_MAIN;

  return css`
    ${props.color ? `color: ${props.color};` : ""}
    ${props.size ? `font-size: ${props.size};` : ""}
    ${props.weight ? `font-weight: ${props.weight};` : ""}
    ${props.height ? `line-height: ${props.height};` : ""}
    ${props.spacing ? `letter-spacing: ${props.spacing};` : ""}
    ${props.align ? `text-align: ${props.align};` : ""}
    ${props.transform ? `text-transform: ${props.transform};` : ""}
    ${props.decoration ? `text-decoration: ${props.decoration};` : ""}

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

const FONT_SIZES: Record<"large" | "normal" | "small", string> = {
  large: "1.5rem",
  normal: "1.25rem",
  small: "1rem",
};

const FONT_WEIGHTS: Record<"black" | "bold" | "medium" | "regular", number> = {
  black: 900,
  bold: 700,
  medium: 500,
  regular: 400,
};

export const BaseText = styled.span.attrs((props) => ({
  decoration: "none",
  ...props,
}))<TypographyProps>`
  ${margin}
  ${getTextProps}
`;

export const H1 = styled(BaseText).attrs<TypographyProps>(
  ({ weight, ...props }) => ({
    ...props,
    as: "h1",
    size: "3rem",
    height: "3rem",
    weight: FONT_WEIGHTS[weight || "medium"],
  })
)``;

export const H2 = styled(BaseText).attrs<TypographyProps>(
  ({ weight, ...props }) => ({
    ...props,
    as: "h2",
    size: "2.5rem",
    height: "2.5rem",
    weight: FONT_WEIGHTS[weight || "medium"],
  })
)``;

export const H3 = styled(BaseText).attrs<TypographyProps>(
  ({ weight, ...props }) => ({
    ...props,
    as: "h3",
    size: "2rem",
    height: "2rem",
    weight: FONT_WEIGHTS[weight || "medium"],
  })
)``;

export const Overline = styled(BaseText).attrs<TypographyProps>(
  ({ weight, ...props }) => ({
    ...props,
    as: "span",
    size: "1rem",
    height: "1rem",
    weight: FONT_WEIGHTS[weight || "medium"],
    transform: "uppercase",
  })
)``;

export const Text = styled(BaseText).attrs<TypographyProps>(
  ({ size, weight, ...props }) => ({
    ...props,
    weight: FONT_WEIGHTS[weight || "medium"],
    size: FONT_SIZES[size || "normal"],
    height: FONT_SIZES[size || "normal"],
  })
)``;
