import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LocationSync from "./components/LocationSync";
import Presentation from "./Presentation";
import slides from "./slides/sections";
import "./index.scss";
import { PRESENTATION_ROUTE } from "./constants";

const SLIDES_COUNT = slides.length;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route
        path={PRESENTATION_ROUTE({ suffix: "*" })}
        element={
          <LocationSync>
            <Presentation slides={slides} />
          </LocationSync>
        }
      />
      <Route
        path="*"
        element={
          <Navigate
            to={PRESENTATION_ROUTE({
              currentSlide: 1,
              currentSubSlide: 0,
              slideCount: SLIDES_COUNT,
              subSlideCount: 0,
            })}
          />
        }
      />
    </Routes>
  </BrowserRouter>
);
