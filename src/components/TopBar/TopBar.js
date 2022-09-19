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

import { logoutService } from "../../services/requests";

export default function TopBar() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("userLocal"));
  let userEmail = "userEmail";

  if (auth) {
    userEmail = auth.userEmail;
  }

  function logout() {
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
      logoutService()
        .then(() => {
          localStorage.removeItem("userLocal");
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <Bar>
        <ContainerLogo onClick={() => navigate("/home")}>
          <TittleLogo>META SHOES </TittleLogo>
          {auth ? (
            <SubTittleLogo>Bem vindo {auth.userName}</SubTittleLogo>
          ) : (
            <SubTittleLogo>E-commerce edition</SubTittleLogo>
          )}
        </ContainerLogo>
        <ContainerRoutes>
          <TextRoutes onClick={() => navigate("/home")}>Home</TextRoutes>
          <TextRoutes onClick={() => navigate("/sobre")}>Sobre</TextRoutes>
          {auth ? (
            <Icon onClick={() => logout()}>
              <ion-icon name="log-out-outline"></ion-icon>
            </Icon>
          ) : (
            <Icon onClick={() => navigate("/login")}>
              <ion-icon name="person-circle-sharp"></ion-icon>
            </Icon>
          )}
          ;
          {userEmail === "admin@metashoes.com" ? (
            <Icon onClick={() => navigate("/admin")}>
              <ion-icon name="construct-outline"></ion-icon>
            </Icon>
          ) : (
            <IconMarket onClick={() => navigate("/carrinho")}>
              <ion-icon name="cart-sharp"></ion-icon>
            </IconMarket>
          )}
        </ContainerRoutes>
      </Bar>
    </>
  );
}
