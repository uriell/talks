import styled from "styled-components";

const MacWindow = styled.div`
  border-radius: 0 0 0.25rem 0.25rem;
  background: white;
  color: black;
  width: 20rem;
  height: 10rem;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.55);

  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: 2;
    border-radius: 50%;
    background: #f85955;
    box-shadow: 0 0 0 0.1rem #f85955, 0.6rem 0 0 0.1rem #fbbe3f,
      1.2rem 0 0 0.1rem #45cc4b;

    top: -0.6rem;
    left: 0.4rem;
  }

  &:before {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 0.025rem solid #ccc;
    background: #e6e6e6;
    color: #444;

    content: "";
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    z-index: 1;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    background-clip: padding-box;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif,
      "Apple Color Emoji";
    text-align: center;
  }
`;

export default MacWindow;
