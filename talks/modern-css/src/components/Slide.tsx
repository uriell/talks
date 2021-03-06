import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "@ditointernet/uai-foundation";

import { prop, transparentize } from "../utils/functional";
import Flex, { FlexProps } from "./Flex";

type palettes = "dark" | "navy" | "green" | "white";

const BACKGROUND_COLORS: Record<palettes, string> = {
  dark: COLORS.NAVY_DARK,
  navy: COLORS.NAVY_MAIN,
  green: COLORS.GREEN_MAIN,
  white: COLORS.WHITE,
};

function getSlideBackgroundColor({ palette, backgroundColor }: BaseSlideProps) {
  return palette
    ? BACKGROUND_COLORS[palette]
    : backgroundColor || COLORS.NAVY_DARK;
}

function getSlideTextColor({ palette, textColor }: BaseSlideProps) {
  if (palette === "white") return COLORS.NAVY_DARK;
  if (palette) return COLORS.WHITE;
  return textColor || COLORS.WHITE;
}

function slideBackgroundImage({ backgroundUrl }: BaseSlideProps) {
  if (!backgroundUrl) return "";

  return css`
    background-size: cover;
    background-position: center;
    background-image: url("${backgroundUrl}");
    transition: background-image 200ms ease-in-out;
  `;
}

function slideBoxShadow({ shadow, ...props }: BaseSlideProps) {
  if (!shadow) return "";

  const slideBackgroundColor = getSlideBackgroundColor(props);
  const slideShadowColor = transparentize(slideBackgroundColor, 0.5);

  return css`
    &,
    &:after {
      box-shadow: 0 0 1.5rem 0.5rem ${slideShadowColor};
    }
  `;
}

type Directions = "right" | "bottom" | "top" | "left";

function slideArrow({ arrow, arrowDistance, ...props }: BaseSlideProps) {
  if (!arrow) return "";

  const arrowOppositeDirectionMap: Record<Directions, string> = {
    right: "left",
    bottom: "top",
    top: "bottom",
    left: "right",
  };

  const slideBackgroundColor = getSlideBackgroundColor(props);
  const arrowOppositeAxis = ["right", "left"].includes(arrow) ? "top" : "left";
  const arrowOppositeDirection = arrowOppositeDirectionMap[arrow];

  const slideArrowPosition = css({
    [arrowOppositeAxis]: `${arrowDistance || 50}%`,
    [arrowOppositeDirection]: "100%",
    [`margin-${arrowOppositeDirection}`]: "-1rem",
  });

  return css`
    &:after {
      border: solid rgba(0, 0, 0, 0);
      content: " ";
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      border-radius: 0.125rem;
      pointer-events: none;
      transform: rotate(45deg);
      background-color: ${slideBackgroundColor};
      ${slideArrowPosition}
    }
  `;
}

type BaseSlideProps = {
  backgroundUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  zIndex?: number;
  shadow?: boolean;
  padding?: string;
  palette?: palettes;
  arrow?: Directions;
  arrowDistance?: string;
  className?: string;
  notes?: string;
} & FlexProps;

const BaseSlide = styled(Flex).attrs((props) => ({
  flow: "column",
  flex: "1",
  ...props,
}))<BaseSlideProps>`
  position: relative;

  z-index: ${prop("zIndex", "auto")};
  padding: ${prop("padding", "3rem")};

  color: ${getSlideTextColor};
  background-color: ${getSlideBackgroundColor};

  ${slideBoxShadow}
  ${slideArrow}
  ${slideBackgroundImage}
`;

export type SlideProps = BaseSlideProps & {
  children?: (index: number, backgroundColor?: string) => React.ReactNode;
};

const Slide: React.FC<SlideProps & { index: number }> = ({
  index,
  children,
  ...props
}) => (
  <BaseSlide {...props}>
    {children
      ? children(index, BACKGROUND_COLORS[props.palette ?? "dark"])
      : null}
  </BaseSlide>
);

type SlideComponent = React.FC<SlideProps & { index: number }> & {
  Group: React.FC<SlideGroupProps>;
};

type SlideGroupProps = { slides: SlideProps[]; index: number };

const SlideGroup: React.FC<SlideGroupProps> = ({ slides, index }) => (
  <>
    {slides.map((subSlide, subIndex, subArr) => (
      <Slide
        key={subIndex}
        {...subSlide}
        index={index}
        zIndex={subArr.length - subIndex}
      />
    ))}
  </>
);

(Slide as SlideComponent).Group = SlideGroup;

export default Slide as SlideComponent;
