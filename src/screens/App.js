import { GlobalStyle } from "../assets/GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./ProductPage/ProductPage";
import MarketPage from "./MarketPage/MarketPage";
import PaymentPage from "./PaymentPage/PaymentPage";
import HomePage from "./HomePage/HomePage";
import ConstructionPage from "./ConstructionPage/ConstructionPage";
import SignUpPage from "./SignPage/SignUp";
import SignInPage from "./SignPage/SignIn";
import AdminPage from "./AdminPage/AdminPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:idProduct" element={<ProductPage />} />
          <Route path="/carrinho" element={<MarketPage />} />
          <Route path="/pagamento" element={<PaymentPage />} />
          <Route path="/sobre" element={<ConstructionPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
