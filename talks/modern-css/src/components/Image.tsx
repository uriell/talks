import styled from "styled-components";

import { margin, MarginProps } from "../utils/styling";

const Image = styled.img<MarginProps>`
  box-shadow: 0 0 30px 8px rgba(0, 0, 0, 0.25);
  ${margin}
`;

export default Image;
