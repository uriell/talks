import styled from "styled-components";
import { CodeSurfer as BaseCodeSurfer } from "@code-surfer/standalone";
import { dracula as draculaTheme } from "@code-surfer/themes";
import {
  Navigate,
  Route,
  Routes,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useSpring } from "use-spring";

(draculaTheme as any).colors.background = "#223154";
(draculaTheme as any).styles.CodeSurfer.code.background = "#223154";
(draculaTheme as any).styles.CodeSurfer.pre.background = "#223154";
(draculaTheme as any).styles.CodeSurfer.title.background = "#223154";

const CodeSurferStyleWrapper = styled.div`
  max-height: calc(100vh - 10vmax - 78px);

  code {
    margin: 0 !important;

    & > div:first-child,
    & > div:last-child {
      display: none;
    }
  }
`;

type Step = {
  code: string;
  focus?: string;
  lang?: string;
  title?: string;
  subtitle?: string;
  showNumbers?: boolean;
};

type CodeSurferProps = {
  index: number;
  steps: Step[];
};

const InnerCodeSurfer: React.FC<CodeSurferProps> = ({ index, steps }) => {
  const params = useParams();
  const navigate = useNavigate();
  const currentSubSlide = parseInt(params.subSlide ?? "0", 10);

  useEffect(() => {
    const isFirstStep = currentSubSlide === 1;
    const isLastStep = currentSubSlide === steps.length;

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
  }, [currentSubSlide, index, steps.length, navigate]);

  const [easedProgress] = useSpring(currentSubSlide - 1, {
    decimals: 3,
    stiffness: 75,
    damping: 30,
    mass: 4,
  });

  return (
    <CodeSurferStyleWrapper>
      <BaseCodeSurfer
        progress={easedProgress}
        steps={steps}
        theme={draculaTheme}
      />
    </CodeSurferStyleWrapper>
  );
};

const CodeSurfer: React.FC<CodeSurferProps> = ({ index, steps }) => {
  const match = useMatch(`/${index + 1}/*`);

  if (!match) return null;

  return (
    <Routes>
      <Route
        path="/step/:subSlide"
        element={<InnerCodeSurfer index={index} steps={steps} />}
      />
      <Route path="/*" element={<Navigate to={`/${index + 1}/step/1`} />} />
    </Routes>
  );
};

export default CodeSurfer;
