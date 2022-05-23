import styled from "styled-components";
import { CodeSurfer as BaseCodeSurfer } from "@code-surfer/standalone";
import { dracula as draculaTheme } from "@code-surfer/themes";
import { useSpring } from "use-spring";

import SubSlideRouter from "./SubSlideRouter";

type Step = {
  code: string;
  focus?: string;
  lang?: string;
  title?: string;
  subtitle?: string;
  showNumbers?: boolean;
};

type InnerCodeSurferProps = {
  steps: Step[];
  currentSubSlide: number;
};

const InnerCodeSurfer: React.FC<InnerCodeSurferProps> = ({
  steps,
  currentSubSlide,
}) => {
  const [easedProgress] = useSpring(currentSubSlide - 1, {
    decimals: 3,
    stiffness: 75,
    damping: 30,
    mass: 4,
  });

  return (
    <BaseCodeSurfer
      progress={easedProgress}
      steps={steps}
      theme={draculaTheme}
    />
  );
};

type CodeSurferWrapperProps = {
  fontSize?: string;
};

const CodeSurferStyleWrapper = styled.div<CodeSurferWrapperProps>`
  max-height: calc(100vh - 6rem - 2.4375rem);
  font-size: ${(props) => props.fontSize ?? "1.75rem"};

  code {
    margin: 0 !important;

    & > div:first-child,
    & > div:last-child {
      display: none;
    }
  }
`;

type CodeSurferProps = Omit<InnerCodeSurferProps, "currentSubSlide"> & {
  index: number;
  backgroundColor?: string;
  fontSize?: string;
};

const CodeSurfer: React.FC<CodeSurferProps> = ({
  index,
  backgroundColor,
  fontSize,
  ...props
}) => {
  overrideTheme(draculaTheme as any, backgroundColor);

  return (
    <SubSlideRouter index={index} subSlideCount={props.steps.length}>
      {(currentSubSlide) => (
        <CodeSurferStyleWrapper fontSize={fontSize}>
          <InnerCodeSurfer currentSubSlide={currentSubSlide} {...props} />
        </CodeSurferStyleWrapper>
      )}
    </SubSlideRouter>
  );
};

function overrideTheme(theme: any, backgroundColor: string = "#223154") {
  theme.colors.background =
    theme.styles.CodeSurfer.code.background =
    theme.styles.CodeSurfer.pre.background =
    theme.styles.CodeSurfer.title.background =
      backgroundColor;
}

export default CodeSurfer;
