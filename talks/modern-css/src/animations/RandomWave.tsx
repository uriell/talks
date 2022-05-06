import styled, { keyframes } from "styled-components";

import meWavingSrc from "../images/me-waving.png";
import Image from "../components/Image";
import { prop } from "../utils/functional";

const archAndShadow = keyframes`
  0% {
    transform: translateX(
        calc(-1 * var(--scaleX) * (var(--translateX) + 70%))
      )
      translateY(var(--translateY)) rotate(calc(var(--scaleX) * 25deg))
      scaleX(var(--scaleX)) scale(var(--scale));
  }

  40% {
    transform: translateX(
        calc(
          -1 * var(--scaleX) * (var(--translateX) +
                var(--scalingOffsetTranslateX))
        )
      )
      translateY(var(--translateY)) rotate(calc(var(--scaleX) * 50deg))
      scaleX(var(--scaleX)) scale(var(--scale));
  }

  60% {
    transform: translateX(
        calc(
          -1 * var(--scaleX) * (var(--translateX) +
                var(--scalingOffsetTranslateX))
        )
      )
      translateY(var(--translateY)) rotate(calc(var(--scaleX) * 50deg))
      scaleX(var(--scaleX)) scale(var(--scale));
  }

  100% {
    transform: translateX(
        calc(-1 * var(--scaleX) * (var(--translateX) + 70%))
      )
      translateY(var(--translateY)) rotate(calc(var(--scaleX) * 25deg))
      scaleX(var(--scaleX)) scale(var(--scale));
  }
`;

const StyledWavingMemoji = styled(Image)<RandomWaveProps>`
  box-shadow: none;
  position: absolute;
  bottom: calc(50% - ((420px - 96px) / 2));
  left: calc(50% - ((420px - 128px) / 2));
  filter: drop-shadow(0.25rem 0.5rem 4px rgba(0, 0, 0, 0.5));

  --baseTranslateX: 182%;
  --translateX: calc(var(--baseTranslateX) + ${prop("offsetTranslateX", 0)}%);
  --translateY: ${prop("translateY")}%;
  --scaleX: ${prop("scaleX")};
  --scale: ${prop("scale")};
  --scalingOffsetTranslateX: ${prop("scalingOffsetTranslateX")}%;

  animation-name: ${archAndShadow};
  animation-duration: 1.25s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  backface-visibility: hidden;
`;

type RandomWaveProps = {
  scale: number;
  scaleX: number;
  offsetTranslateX?: number;
  scalingOffsetTranslateX: number;
  translateY: number;
};

const MIN_MAX_SCALE = [0.2, 1];
const SCALE_TRANSLATION_MULTIPLIER = 3.1;

const RandomWave = () => {
  const scale = floatRange(...MIN_MAX_SCALE);
  const scaleDecrement = (1 - scale) * 10;
  const isLeftSide = Math.random() > 0.5;

  const translateY = floatRange(
    (64 + scaleDecrement * 3.5625) * -1,
    75 + scaleDecrement * 4.6875
  );

  // exchange this for a smarter system
  // setTimeout(() => window.location.reload(), 1500);

  return (
    <StyledWavingMemoji
      src={meWavingSrc}
      width="420px"
      alt="a memoji of myself waving"
      scale={scale}
      scaleX={isLeftSide ? 1 : -1}
      offsetTranslateX={isLeftSide ? 30 : 0}
      scalingOffsetTranslateX={scaleDecrement * SCALE_TRANSLATION_MULTIPLIER}
      translateY={translateY}
    />
  );
};

const floatRange = (min: number = 0, max: number = 1): number =>
  min < 0
    ? floatRange(0, max + min * -1) - min * -1
    : parseFloat((Math.random() * (max - min) + min).toFixed(1));

export default RandomWave;
