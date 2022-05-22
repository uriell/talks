import styled, { keyframes } from "styled-components";

import { Text, TypographyProps } from "./Typography";
import { COLORS } from "@ditointernet/uai-foundation";
import { prop } from "../utils/functional";

export const ItemDesc = styled(Text).attrs({
  as: "p",
  size: "small",
  color: COLORS.GRAY_5,
})<TypographyProps>``;

const slideFromRight = keyframes`
  0% {
    transform: translateX(150%);
  }

  100% {
    transform: translateX(0);
  }
`;

type ListItemProps = TypographyProps & { empty?: boolean };

export const Item = styled(Text).attrs((props) => ({
  size: "normal",
  weight: "semibold",
  as: "li",
  ...props,
}))<ListItemProps>`
  animation: ${slideFromRight} 200ms ease-in-out;

  &:before,
  &:after {
    color: ${COLORS.GREEN_MAIN};
    font-weight: 800;
  }

  &:before {
    content: "${(props) => (props.empty ? "" : "\\2022")}";
    position: absolute;
  }

  &:after {
    content: "${prop("suffix", "")}";
  }
`;

export const Unordered = styled.ul`
  list-style: none;
  margin: 0;

  ${Item} {
    &::before {
      margin-left: -1rem;
      color: ${COLORS.GREEN_MAIN};
    }
  }

  > * ~ * {
    margin-top: 2rem;
  }
`;

export const Ordered = styled.ol`
  list-style: none;
  margin: 0;

  counter-reset: dito-ol-counter;

  ${Item} {
    counter-increment: dito-ol-counter;

    &::before {
      margin-left: -1.5rem;
      color: ${COLORS.GREEN_MAIN};
      content: counter(dito-ol-counter) ". ";
    }
  }

  > * ~ * {
    margin-top: 2rem;
  }
`;

const Lists = {
  Unordered,
  Ordered,
  ItemDesc,
  Item,
};

export default Lists;
