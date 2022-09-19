import { useNavigate } from "react-router-dom";

import {
  Bar,
  ContainerLogo,
  ContainerRoutes,
  Icon,
  IconMarket,
  SubTittleLogo,
  TextRoutes,
  TittleLogo,
} from "./styles";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <>
      <Bar>
        <ContainerLogo onClick={() => navigate("/home")}>
          <TittleLogo>Meta Shoes</TittleLogo>
          <SubTittleLogo>E-commerce edition</SubTittleLogo>
        </ContainerLogo>
        <ContainerRoutes>
          <TextRoutes onClick={() => navigate("/home")}>Home</TextRoutes>
          <TextRoutes onClick={() => navigate("/sobre")}>Sobre</TextRoutes>
          <Icon>
            <ion-icon name="person-circle-sharp"></ion-icon>
          </Icon>
          <IconMarket onClick={() => navigate("/carrinho")}>
            <ion-icon name="cart-sharp"></ion-icon>
          </IconMarket>
        </ContainerRoutes>
      </Bar>
    </>
  );
}
