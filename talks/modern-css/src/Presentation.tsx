import AwesomeSlider from "react-awesome-slider";

import customAwsSldCssModule from "./react-awesome-slider.module.scss";
import Slide from "./components/Slide";

import slides from "./slides/sections";

const Presentation = () => (
  <AwesomeSlider
    fillParent
    bullets={false}
    organicArrows={false}
    // onLoadStart -- look into this fn
    // media -- look into this prop
    cssModule={customAwsSldCssModule}
  >
    {slides.map((slide, index) => (
      <div key={index} className={customAwsSldCssModule.slide}>
        {Array.isArray(slide) ? (
          <Slide.Group slides={slide} />
        ) : (
          <Slide {...slide} />
        )}
      </div>
    ))}
  </AwesomeSlider>
);

export default Presentation;
