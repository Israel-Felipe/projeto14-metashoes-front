import { GlobalStyle } from "../assets/GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConstructionPage from "./ConstructionPage/ConstructionPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConstructionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
