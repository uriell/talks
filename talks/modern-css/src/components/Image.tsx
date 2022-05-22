import styled from "styled-components";

import { margin, MarginProps } from "../utils/styling";

const Image = styled.img<MarginProps>`
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.5);
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  transition-property: width, height;
  ${margin}
`;

export default Image;
