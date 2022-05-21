import styled, { keyframes } from "styled-components";

import meWavingSrc from "../images/me-waving.png";
import Image from "../components/Image";
import { prop } from "../utils/functional";
import { useEffect, useState } from "react";

const archAndShadow = keyframes`
  // neat trick to make the infinite animation sleep for 5s (80% of 6.25s)
  0%, 20%, 100% {
    transform: translateX(
        calc(-1 * var(--scaleX) * (var(--translateX) + 70%))
      )
      translateY(var(--translateY))
      rotate(calc(var(--scaleX) * 25deg))
      scaleX(var(--scaleX))
      scale(var(--scale));
  }

  5%, 15% {
    transform: translateX(
        calc(
          -1 * var(--scaleX) * (var(--translateX) +
                var(--scalingOffsetTranslateX))
        )
      )
      translateY(var(--translateY))
      rotate(calc(var(--scaleX) * 50deg))
      scaleX(var(--scaleX))
      scale(var(--scale));
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
  animation-duration: 6250ms;
  animation-iteration-count: infinite;
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
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const timeout = setInterval(() => setPosition(getRandomPosition()), 6250);

    return () => clearInterval(timeout);
  }, []);

  return (
    <StyledWavingMemoji
      src={meWavingSrc}
      width="420px"
      alt="a memoji of myself waving"
      scale={position.scale}
      scaleX={position.isLeftSide ? 1 : -1}
      offsetTranslateX={position.isLeftSide ? 30 : 0}
      scalingOffsetTranslateX={
        position.scaleDecrement * SCALE_TRANSLATION_MULTIPLIER
      }
      translateY={position.translateY}
    />
  );
};

function getRandomPosition() {
  const scale = floatRange(...MIN_MAX_SCALE);
  const scaleDecrement = (1 - scale) * 10;
  const isLeftSide = Math.random() > 0.5;

  const translateY = floatRange(
    (64 + scaleDecrement * 3.5625) * -1,
    75 + scaleDecrement * 4.6875
  );

  return { scale, isLeftSide, scaleDecrement, translateY };
}

const floatRange = (min: number = 0, max: number = 1): number =>
  min < 0
    ? floatRange(0, max + min * -1) - min * -1
    : parseFloat((Math.random() * (max - min) + min).toFixed(1));

export default RandomWave;
