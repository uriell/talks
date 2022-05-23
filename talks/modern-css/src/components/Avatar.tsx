import styled from "styled-components";

import { margin, MarginProps } from "../utils/styling";

const Avatar = styled.img<MarginProps>`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.25);
  ${margin}
`;

export default Avatar;
