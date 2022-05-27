import styled, { createGlobalStyle } from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import customAwsSldCssModule from "./react-awesome-slider.module.scss";
import { usePresenterMode, useSlideUrlParams } from "./components/LocationSync";
import Slide, { SlideProps } from "./components/Slide";
import { H1 } from "./components/Typography";
import { COLORS } from "@ditointernet/uai-foundation";

const Presentation: React.FC<{ slides: SlideProps[] }> = ({ slides }) => {
  const isPresenterMode = usePresenterMode();
  const { currentSlide, currentSubSlide, subSlideCount } = useSlideUrlParams();

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

  const hasSubSlides = !!subSlideCount;
  const isPastFirstSubSlide = hasSubSlides && currentSubSlide > 1;

  return isPresenterMode ? (
    <>
      <Notes color={COLORS.WHITE}>
        {parseNotes(slides[currentSlide - (isPastFirstSubSlide ? 1 : 2)].notes)}
      </Notes>
      <PresenterModeWrapper>
        <PresenterModeGlobalStyle />
        {content}
      </PresenterModeWrapper>
    </>
  ) : (
    content
  );
};

function parseNotes(notes?: string) {
  if (!notes) return null;

  return [<br />]
    .concat(...notes.split("\n").map((e) => [<br />, <>{e}</>]))
    .slice(2);
}

const PresenterModeGlobalStyle = createGlobalStyle`
  html, body {
    font-size: 10px;
  }
  
  #root {
    background-color: ${COLORS.GRAY_7};
  }
`;

const PresenterModeWrapper = styled.div`
  position: absolute;
  right: 5vw;
  bottom: 5vh;
  width: 50vw;
  height: 50vh;
  box-sizing: border-box;
  border: 0.5rem solid orange;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
`;

const Notes = styled(H1)`
  padding: 1rem;
`;

export default Presentation;
