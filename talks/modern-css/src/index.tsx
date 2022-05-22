import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigate } from "./hooks/useNavigate";
import Presentation from "./Presentation";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/:slide/*" element={<Presentation />} />
      <Route path="*" element={<Navigate to="/1" />} />
    </Routes>
  </BrowserRouter>
);
