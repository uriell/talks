import styled from "styled-components";

import { Text, TypographyProps } from "./Typography";
import { COLORS } from "@ditointernet/uai-foundation";
import { prop } from "../utils/functional";

export const ItemDesc = styled(Text).attrs({
  as: "p",
  size: "small",
  color: COLORS.GRAY_5,
})<TypographyProps>``;

type ListItemProps = TypographyProps;

export const Item = styled(Text).attrs((props) => ({
  size: "normal",
  weight: "semibold",
  as: "li",
  ...props,
}))<ListItemProps>`
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:before,
  &:after {
    color: ${COLORS.GREEN_MAIN};
    font-weight: 800;
  }

  &:before {
    content: "\\2022";
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
`;

const Lists = {
  Unordered,
  Ordered,
  ItemDesc,
  Item,
};

export default Lists;
