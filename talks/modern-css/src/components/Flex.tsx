import styled from "styled-components";

import {
  flex,
  FlexProps as FlexUtilProps,
  padding,
  PaddingProps,
} from "../utils/styling";

export type FlexProps = FlexUtilProps & PaddingProps;

const Flex = styled.div<FlexProps>`
  ${flex}
  ${padding}
`;

export default Flex;
