import { BroadcastChannel } from "broadcast-channel";
import {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import {
  useNavigate as useReactRouterNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { PRESENTATION_ROUTE } from "../constants";

type LocationSyncContextProps = {
  forward: () => Promise<void>;
  backward: () => Promise<void>;
};

export type SlideState = {
  currentSlide: number;
  currentSubSlide: number;
  slideCount: number;
  subSlideCount: number;
};

const LocationSyncContext = createContext<LocationSyncContextProps>({
  forward: () => Promise.resolve(),
  backward: () => Promise.resolve(),
});

type LocationSyncProps = { children: React.ReactElement<any, any> };

const LocationSync: React.FC<LocationSyncProps> = ({ children }) => {
  const slideUrlParams = useSlideUrlParams();
  const [slideState, updateSlideState] = useState<SlideState>(slideUrlParams);
  const baseNavigate = useReactRouterNavigate();
  const isPresenterMode = usePresenterMode();
  const channelRef = useRef<BroadcastChannel<SlideState>>(
    new BroadcastChannel<SlideState>("uriell", {
      type: "native",
      webWorkerSupport: false,
    })
  );

  // handling subslide redirects
  useEffect(() => {
    updateSlideState((currentState) => ({
      ...currentState,
      currentSubSlide: slideUrlParams.currentSubSlide,
      subSlideCount: slideUrlParams.subSlideCount,
    }));
  }, [slideUrlParams.currentSubSlide, slideUrlParams.subSlideCount]);

  const bothSubSlides =
    slideUrlParams.suffix === "w" && slideState.currentSubSlide !== 1;

  // internal navigate logic, updates state and redirects
  const navigate = useCallback(
    (
      currentSlide: number,
      currentSubSlide: number = 0,
      subSlideCount: number = 0,
      slideCount: number = slideState.slideCount
    ) => {
      const isForwards =
        currentSlide > slideState.currentSlide ||
        (currentSubSlide > slideState.currentSubSlide && !!subSlideCount);
      const newSlideState = {
        currentSlide,
        currentSubSlide,
        subSlideCount,
        slideCount,
      };
      const route = PRESENTATION_ROUTE({
        ...newSlideState,
        suffix: isForwards
          ? slideState.subSlideCount &&
            (slideState.currentSubSlide === slideState.subSlideCount ||
              slideUrlParams.suffix === "w")
            ? "w"
            : subSlideCount
            ? "s"
            : ""
          : "",
      });

      updateSlideState(newSlideState);
      baseNavigate(route + window.location.search);
      return isPresenterMode
        ? channelRef.current.postMessage(
            isForwards
              ? slideState
              : {
                  ...newSlideState,
                  currentSubSlide: bothSubSlides
                    ? currentSubSlide - 1
                    : currentSubSlide,
                  currentSlide: bothSubSlides ? currentSlide : currentSlide - 1,
                }
          )
        : Promise.resolve(void 0);
    },
    [
      slideState,
      baseNavigate,
      isPresenterMode,
      bothSubSlides,
      channelRef,
      slideUrlParams.suffix,
    ]
  );

  const isFinalSubSlide =
    slideState.currentSubSlide >= slideState.subSlideCount;

  const getNextSlideState = useCallback(
    () =>
      [
        Math.min(
          isFinalSubSlide
            ? slideState.currentSlide + 1
            : slideState.currentSlide,
          slideState.slideCount
        ),
        Math.min(
          !isFinalSubSlide ? slideState.currentSubSlide + 1 : 0,
          slideState.subSlideCount
        ),
        !isFinalSubSlide ? slideState.subSlideCount : 0,
      ] as [number, number, number],
    [
      isFinalSubSlide,
      slideState.currentSlide,
      slideState.currentSubSlide,
      slideState.slideCount,
      slideState.subSlideCount,
    ]
  );

  // forward navigation helper
  const forward = useCallback(
    () => navigate(...getNextSlideState()),
    [navigate, getNextSlideState]
  );

  // backwards navigation helper
  const backward = useCallback(() => {
    return navigate(
      Math.min(
        Math.max(
          slideState.currentSlide -
            (isPresenterMode && !bothSubSlides && slideState.currentSubSlide > 1
              ? 0
              : 1),
          1
        ),
        slideState.slideCount
      ),
      bothSubSlides ? 2 : 0
    );
  }, [
    navigate,
    slideState.currentSlide,
    slideState.slideCount,
    slideState.currentSubSlide,
    isPresenterMode,
    bothSubSlides,
  ]);
  // navigation reset helper
  // TODO: remove reset if it's only used once
  const reset = useCallback(
    (currentSlide?: number, subSlideCount?: number) =>
      navigate(currentSlide ?? 1, currentSlide ? 1 : 0, subSlideCount),
    [navigate]
  );

  // resetting invalid current slide or subSlide
  useEffect(() => {
    if (
      !slideState.currentSlide ||
      slideState.currentSlide > slideState.slideCount ||
      (slideState.subSlideCount &&
        slideState.currentSubSlide > slideState.subSlideCount)
    )
      reset();
  }, [slideState, reset]);

  // <- && -> keybindings
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") forward();
      else if (event.key === "ArrowLeft") backward();
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [forward, backward]);

  // upon presenterMode message, navigate
  useEffect(() => {
    const channel = channelRef.current;

    function onChannelMessage(message: SlideState) {
      navigate(
        message.currentSlide,
        message.currentSubSlide,
        message.subSlideCount
      );
    }

    channel.addEventListener("message", onChannelMessage);

    return () => channel.removeEventListener("message", onChannelMessage);
  }, [channelRef, navigate]);

  // (alt || option) + p to open presenter mode
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "π" && event.altKey) {
        const [nextSlide, nextSubSlide, subSlideCount] = getNextSlideState();

        window.open(
          PRESENTATION_ROUTE({
            currentSlide: nextSlide,
            currentSubSlide: nextSubSlide,
            subSlideCount,
            slideCount: slideState.slideCount,
            suffix:
              slideState.subSlideCount &&
              slideState.currentSubSlide === slideState.subSlideCount
                ? "w"
                : slideState.subSlideCount
                ? "s"
                : "",
          }) + "?presenterMode=true"
        );
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [
    getNextSlideState,
    slideState.slideCount,
    slideState.currentSubSlide,
    slideState.subSlideCount,
  ]);

  return (
    <LocationSyncContext.Provider value={{ forward, backward }}>
      {children}
    </LocationSyncContext.Provider>
  );
};

export function usePresenterMode() {
  const [searchParams] = useSearchParams();

  return !!searchParams.get("presenterMode");
}

function useLocationSyncContext() {
  return useContext(LocationSyncContext);
}

export function useSlideNavigation() {
  const { forward, backward } = useLocationSyncContext();

  return { forward, backward };
}

export function useSlideUrlParams() {
  const params = useParams();
  const slideCount = parseInt(params.slideCount ?? "0", 10);
  const currentSlide = parseInt(params.slide ?? "0", 10);
  const subSlideCount = parseInt(params.subSlideCount ?? "0", 10);
  const currentSubSlide = parseInt(params.subSlide ?? "0", 10);
  const suffix = params["*"] || "";

  return { slideCount, subSlideCount, currentSlide, currentSubSlide, suffix };
}

export function useCurrentSlides() {
  const params = useParams();
  const currentSlide = parseInt(params.slide ?? "0", 10);
  const currentSubSlide = parseInt(params.subSlide ?? "0", 10);

  return {
    currentSlide,
    currentSubSlide,
  };
}

export default LocationSync;
