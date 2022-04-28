import styled from "styled-components";

import { flex, FlexProps, padding, PaddingProps } from "../utils/styling";

const Flex = styled.div<FlexProps & PaddingProps>`
  ${flex}
  ${padding}
`;

export default Flex;
