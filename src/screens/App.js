import { GlobalStyle } from "../assets/GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./ProductPage/ProductPage";
import MarketPage from "./MarketPage/MarketPage";
import HomePage from "./HomePage/HomePage";
import ConstructionPage from "./ConstructionPage/ConstructionPage";
import SignUpPage from "./SignPage/SignUp";
import SignInPage from "./SignPage/SignIn";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:idProduct" element={<ProductPage />} />
          <Route path="/carrinho" element={<MarketPage />} />
          <Route path="/sobre" element={<ConstructionPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
