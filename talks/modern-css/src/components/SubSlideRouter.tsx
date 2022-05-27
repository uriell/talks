import { useEffect } from "react";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

import { useSlideNavigation, useSlideUrlParams } from "./LocationSync";
import { PRESENTATION_ROUTE } from "../constants";

type SubSlideRouterProps = {
  subSlideCount: number;
  children: (currentSubSlide: number) => React.ReactElement<any, any> | null;
};

const InnerSubSlide: React.FC<SubSlideRouterProps> = ({
  subSlideCount,
  children,
}) => {
  const { forward, backward } = useSlideNavigation();
  const { currentSubSlide } = useSlideUrlParams();

  useEffect(() => {
    const isFirstStep = currentSubSlide === 1;
    const isLastStep = currentSubSlide === subSlideCount;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" && !isLastStep) {
        event.stopImmediatePropagation();
        forward();
      } else if (event.key === "ArrowLeft" && !isFirstStep) {
        event.stopImmediatePropagation();
        backward();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [currentSubSlide, subSlideCount, forward, backward]);

  return children(currentSubSlide);
};

const SubSlideRouter: React.FC<SubSlideRouterProps & { index: number }> = ({
  index,
  ...props
}) => {
  const { slideCount, currentSubSlide, suffix } = useSlideUrlParams();
  const didAnyMatch = useMatch(
    PRESENTATION_ROUTE({ currentSlide: index + 1 }) + "*"
  );
  const didEmptyWMatch = useMatch(
    PRESENTATION_ROUTE({
      currentSlide: index + 1,
      subSlideCount: 0,
      suffix: "w",
    })
  );

  if (!didAnyMatch) return null;

  if (didEmptyWMatch) {
    return (
      <Navigate
        to={
          PRESENTATION_ROUTE({
            currentSlide: index + 1,
            currentSubSlide: currentSubSlide || 1,
            subSlideCount: props.subSlideCount,
            slideCount,
            suffix: "w",
          }) + window.location.search
        }
      />
    );
  }

  return (
    <Routes>
      <Route path="/s" element={<InnerSubSlide {...props} />} />
      <Route path="/w" element={<InnerSubSlide {...props} />} />
      <Route
        path="*"
        element={
          <Navigate
            to={
              PRESENTATION_ROUTE({
                currentSlide: index + 1,
                currentSubSlide: currentSubSlide || 1,
                subSlideCount: props.subSlideCount,
                slideCount,
                suffix: suffix || "s",
              }) + window.location.search
            }
          />
        }
      />
    </Routes>
  );
};

export default SubSlideRouter;
