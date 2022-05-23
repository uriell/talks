import { SlideState } from "./components/LocationSync";

export const PRESENTATION_ROUTE = ({
  currentSlide,
  currentSubSlide,
  slideCount,
  subSlideCount,
  suffix = "",
}: Partial<SlideState> & { suffix?: string } = {}) =>
  `/:slide-:slideCount;:subSlide-:subSlideCount/*`
    .replace(":slide", `${currentSlide ?? ":slide"}`)
    .replace(":subSlide", `${currentSubSlide ?? ":subSlide"}`)
    .replace(":slideCount", `${slideCount ?? ":slideCount"}`)
    .replace(":subSlideCount", `${subSlideCount ?? ":subSlideCount"}`)
    .replace("*", suffix);
