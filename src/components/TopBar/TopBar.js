import {
  Bar,
  ContainerLogo,
  ContainerRoutes,
  Icon,
  SubTittleLogo,
  TextRoutes,
  TittleLogo,
} from "./styles";

export default function TopBar() {
  return (
    <>
      <Bar>
        <ContainerLogo>
          <TittleLogo>Meta Shoes</TittleLogo>
          <SubTittleLogo>E-commerce edition</SubTittleLogo>
        </ContainerLogo>
        <ContainerRoutes>
          <TextRoutes>Home</TextRoutes>
          <TextRoutes>Sobre</TextRoutes>
          <Icon>
            <ion-icon name="person-circle-sharp"></ion-icon>
          </Icon>
          <Icon>
            <ion-icon name="cart-sharp"></ion-icon>
          </Icon>
        </ContainerRoutes>
      </Bar>
    </>
  );
}
