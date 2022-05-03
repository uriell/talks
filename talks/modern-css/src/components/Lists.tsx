import styled from "styled-components";

import { Text, TypographyProps } from "./Typography";
import { COLORS } from "@ditointernet/uai-foundation";
import { prop } from "../utils/functional";

export const ItemDesc = (props: TypographyProps) => (
  <Text {...props} size="small" weight="medium" color={COLORS.GRAY_7} />
);

type ListItemProps = TypographyProps;

export const Item = styled(Text).attrs({
  size: "normal",
  weight: "semibold",
  as: "li",
})<ListItemProps>`
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

type ListProps = {
  textSize?: string;
  bulletSize?: string;
  bulletColor?: string;
};

export const Unordered = styled.ul<ListProps>`
  list-style: none;
  margin: 0;

  ${Item} {
    &::before {
      margin-left: -1rem;
      color: ${(props) => props.bulletColor || COLORS.GREEN_MAIN};
    }
  }
`;

export const Ordered = styled.ol<ListProps>`
  list-style: none;
  margin: 0;

  counter-reset: dito-ol-counter;

  ${Item} {
    counter-increment: dito-ol-counter;

    &::before {
      margin-left: -1.5rem;
      content: counter(dito-ol-counter) ". ";
      color: ${(props) => props.bulletColor || COLORS.GREEN_MAIN};
    }
  }
`;
