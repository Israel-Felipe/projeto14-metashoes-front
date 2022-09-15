import { GlobalStyle } from "../assets/GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./ProductPage/ProductPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
