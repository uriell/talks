import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import { useParams, useSearchParams } from "react-router-dom";

import customAwsSldCssModule from "./react-awesome-slider.module.scss";
import Slide from "./components/Slide";

import slides from "./slides/sections";
import { useNavigate } from "./hooks/useNavigate";
import styled from "styled-components";

const SLIDES_COUNT = slides.length;

const Presentation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentSlide = parseInt(params.slide ?? "0", 10);
  const isInvalidSlide = currentSlide < 1 || currentSlide > SLIDES_COUNT;

  useEffect(() => {
    if (isInvalidSlide) return navigate("/1");

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        navigate(`/${currentSlide + 1}`);
      } else if (event.key === "ArrowLeft") {
        navigate(`/${currentSlide - 1}`);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [currentSlide, isInvalidSlide, navigate]);

  if (isInvalidSlide) {
    navigate("/1");
    return null;
  }

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

  return searchParams.get("presenterMode") ? (
    <PresenterModeWrapper>{content}</PresenterModeWrapper>
  ) : (
    content
  );
};

const PresenterModeWrapper = styled.div`
  transform: scale(0.5);
  width: 100%;
  height: 100%;
  border: 0.5rem solid orange;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
`;

export default Presentation;
