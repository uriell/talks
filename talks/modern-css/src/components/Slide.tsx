import React from "react";
import styled, { css, StyledComponent } from "styled-components";
import { COLORS } from "@ditointernet/uai-foundation";

import { prop, transparentize } from "../utils/functional";

type palettes = "dark" | "navy" | "green" | "white";

const BACKGROUND_COLORS: Record<palettes, string> = {
  dark: COLORS.NAVY_DARK,
  navy: COLORS.NAVY_MAIN,
  green: COLORS.GREEN_MAIN,
  white: COLORS.WHITE,
};

function getSlideBackgroundColor({ palette, backgroundColor }: SlideProps) {
  return palette
    ? BACKGROUND_COLORS[palette]
    : backgroundColor || COLORS.NAVY_DARK;
}

function getSlideTextColor({ palette, textColor }: SlideProps) {
  if (palette === "white") return COLORS.NAVY_DARK;
  if (palette) return COLORS.WHITE;
  return textColor || COLORS.WHITE;
}

function slideBackgroundImage({ backgroundUrl }: SlideProps) {
  if (!backgroundUrl) return "";

  return css`
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("${backgroundUrl}");
  `;
}

function slideBoxShadow({ shadow, ...props }: SlideProps) {
  if (!shadow) return "";

  const slideBackgroundColor = getSlideBackgroundColor(props);
  const slideShadowColor = transparentize(slideBackgroundColor, 0.5);

  return css`
    &,
    &:after {
      box-shadow: 0 0 30px 8px ${slideShadowColor};
    }
  `;
}

type Directions = "right" | "bottom" | "top" | "left";

function slideArrow({ arrow, arrowDistance, ...props }: SlideProps) {
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
    [`margin-${arrowOppositeDirection}`]: "-1.75vmin",
  });

  return css`
    &:after {
      border: solid rgba(0, 0, 0, 0);
      content: " ";
      width: 2.5vmin;
      height: 2.5vmin;
      position: absolute;
      border-radius: 3px;
      pointer-events: none;
      transform: rotate(45deg);
      background-color: ${slideBackgroundColor};
      ${slideArrowPosition}
    }
  `;
}

export type SlideProps = {
  backgroundUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  flexFlow?: string;
  zIndex?: number;
  shadow?: boolean;
  padding?: string;
  palette?: palettes;
  arrow?: Directions;
  arrowDistance?: string;
  children?: React.ReactNode;
};

type SlideComponent = StyledComponent<"div", any, SlideProps, never> & {
  Group: React.FC<SlideGroupProps>;
};

const Slide = styled.div<SlideProps>`
  display: flex;
  flex-flow: column;
  flex: 1;
  position: relative;

  flex-flow: ${prop<SlideProps>("flexFlow", "row nowrap")};
  z-index: ${prop<SlideProps>("zIndex", "auto")};
  padding: ${prop<SlideProps>("padding", "5vmax")};

  color: ${getSlideTextColor};
  background-color: ${getSlideBackgroundColor};

  ${slideBoxShadow}
  ${slideArrow}
  ${slideBackgroundImage}
`;

type SlideGroupProps = { slides: SlideProps[] };

const SlideGroup: React.FC<SlideGroupProps> = ({ slides }) => (
  <>
    {slides.map((subSlide, subIndex, subArr) => (
      <Slide key={subIndex} {...subSlide} zIndex={subArr.length - subIndex} />
    ))}
  </>
);

(Slide as SlideComponent).Group = SlideGroup;

export default Slide as SlideComponent;
