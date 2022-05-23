import styled, { createGlobalStyle } from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import customAwsSldCssModule from "./react-awesome-slider.module.scss";
import { useCurrentSlides, usePresenterMode } from "./components/LocationSync";
import Slide, { SlideProps } from "./components/Slide";

const Presentation: React.FC<{ slides: SlideProps[] }> = ({ slides }) => {
  const isPresenterMode = usePresenterMode();
  const { currentSlide } = useCurrentSlides();

  const content = (
    <AwesomeSlider
      fillParent
      bullets={false}
      organicArrows={false}
      selected={currentSlide - 1}
      // onLoadStart -- look into this fn
      // media -- look into this prop
      cssModule={customAwsSldCssModule}
    >
      {slides.map((slide, index) => (
        <div key={index} className={customAwsSldCssModule.slide}>
          <Slide {...slide} index={index} />
        </div>
      ))}
    </AwesomeSlider>
  );

  return isPresenterMode ? (
    <PresenterModeWrapper>
      <PresenterModeGlobalStyle />
      {content}
    </PresenterModeWrapper>
  ) : (
    content
  );
};

const PresenterModeGlobalStyle = createGlobalStyle`
  html, body {
    font-size: 16px;
  }
`;

const PresenterModeWrapper = styled.div`
  /* transform: scale(0.5); */
  width: 50vw;
  height: 50vh;
  box-sizing: border-box;
  border: 0.5rem solid orange;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
`;

export default Presentation;
