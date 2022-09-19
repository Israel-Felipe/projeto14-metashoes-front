import { GlobalStyle } from "../assets/GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./ProductPage/ProductPage";
import MarketPage from "./MarketPage/MarketPage";
import PaymentPage from "./PaymentPage/PaymentPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/produto/:idProduct" element={<ProductPage />} />
          <Route path="/carrinho" element={<MarketPage />} />
          <Route path="/pagamento" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
