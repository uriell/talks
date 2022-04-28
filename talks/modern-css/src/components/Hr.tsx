import { COLORS } from "@ditointernet/uai-foundation";
import styled from "styled-components";

import { prop } from "../utils/functional";

type HrProps = {
  width?: string;
};

const Hr = styled.hr<HrProps>`
  margin: 0;
  height: 0.25rem;
  border: none;
  border-radius: 999999px;
  background-color: ${COLORS.GREEN_MAIN};
  width: ${prop("width", "100%")};
`;

export default Hr;
