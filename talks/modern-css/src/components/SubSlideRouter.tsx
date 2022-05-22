import { Route, Routes, useMatch, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navigate, useNavigate } from "../hooks/useNavigate";

type InnerSubSlideProps = {
  index: number;
  stepsCount: number;
  children: (currentSubSlide: number) => React.ReactElement<any, any> | null;
};

const InnerSubSlide: React.FC<InnerSubSlideProps> = ({
  index,
  stepsCount,
  children,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const currentSubSlide = parseInt(params.subSlide ?? "0", 10);

  useEffect(() => {
    const isFirstStep = currentSubSlide === 1;
    const isLastStep = currentSubSlide === stepsCount;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" && !isLastStep) {
        event.stopImmediatePropagation();
        navigate(`/${index + 1}/step/${currentSubSlide + 1}`);
      } else if (event.key === "ArrowLeft" && !isFirstStep) {
        event.stopImmediatePropagation();
        navigate(`/${index + 1}/step/${currentSubSlide - 1}`);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [currentSubSlide, index, stepsCount, navigate]);

  return children(currentSubSlide);
};

const SubSlideRouter: React.FC<InnerSubSlideProps> = (props) => {
  const match = useMatch(`/${props.index + 1}/*`);

  if (!match) return null;

  return (
    <Routes>
      <Route path="/step/:subSlide" element={<InnerSubSlide {...props} />} />
      <Route
        path="/*"
        element={<Navigate to={`/${props.index + 1}/step/1`} />}
      />
    </Routes>
  );
};

export default SubSlideRouter;
