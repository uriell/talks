import { css } from "styled-components";
import { prop } from "./functional";

type FlexPropertyNames = "flex" | "flow" | "justify" | "align";

export type FlexProps = {
  [K in FlexPropertyNames]?: string;
};

export const flex = css<FlexProps>`
  display: flex;
  flex: ${prop("flex", "0 1 auto")};
  flex-flow: ${prop("flow", "row nowrap")};
  align-items: ${prop("align", "normal")};
  justify-content: ${prop("justify", "normal")};
`;

type PaddingPropertyNames = "padding";
// | "paddingTop"
// | "paddingBottom"
// | "paddingLeft"
// | "paddingRight";

export type PaddingProps = {
  [K in PaddingPropertyNames]?: string;
};

export const padding = css<PaddingProps>`
  padding: ${prop("padding", "unset")};
`;

type MarginPropertyNames = "margin";
// | "MarginTop"
// | "MarginBottom"
// | "MarginLeft"
// | "MarginRight";

export type MarginProps = {
  [K in MarginPropertyNames]?: string;
};

export const margin = css<MarginProps>`
  margin: ${prop("margin", "unset")};
`;
