import React from "react";

import TopBar from "../../components/TopBar/TopBar";

import {
  ButtonBuyView,
  Container,
  ContainerEmpty,
  ContainerIcon,
  ContainerShoes,
  DescriptionShoes,
  IconButon,
  ImageShoes,
  InfosPayment,
  ScrollViewHorizontal,
  TitleEmpty,
  TittleProduct,
  View,
  ViewProducts,
} from "./styles";

import {
  removeProductFromCar,
  getProductFromCar,
} from "../../services/requests";

import { ThreeDots } from "react-loader-spinner";

export default function MarketPage() {
  const [listOfProducts, setListOfProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  async function getItemsCar(token) {
    try {
      let response = await getProductFromCar(
        "cc6b1d17-4a32-4544-ad18-aa4493bc1219"
      );
      setListOfProducts(response.data);
      let priceTotal = 0;
      response.data.forEach((element) => {
        priceTotal = priceTotal + element.price * element.quantity;
      });
      setTotalPrice(priceTotal);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeItemsCar(id, token) {
    setLoading(true);
    try {
      await removeProductFromCar(id, "cc6b1d17-4a32-4544-ad18-aa4493bc1219");
      getItemsCar();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getItemsCar();
  }, []);

  return (
    <Container>
      <TopBar />
      <ScrollViewHorizontal>
        <ViewProducts>
          {listOfProducts.length > 0 ? (
            listOfProducts.map((item, index) => (
              <ContainerShoes key={index}>
                <ContainerIcon onClick={() => removeItemsCar(item.idProduct)}>
                  {loading ? (
                    <ThreeDots color="white" height={40} width={40} />
                  ) : (
                    <>
                      <ion-icon name="trash-outline"></ion-icon>
                    </>
                  )}
                </ContainerIcon>
                <ImageShoes src={item.img} />
                <TittleProduct>{item.name}</TittleProduct>
                <DescriptionShoes>Cor: {item.color}</DescriptionShoes>
                <DescriptionShoes>Tamanho: {item.size}</DescriptionShoes>
                <DescriptionShoes>Quantidade: {item.quantity}</DescriptionShoes>
                <DescriptionShoes>
                  Valor unitário: R$: {item.price}
                </DescriptionShoes>
                <DescriptionShoes>
                  Valor total: R$: {item.price * item.quantity}
                </DescriptionShoes>
              </ContainerShoes>
            ))
          ) : (
            <ContainerEmpty>
              <TitleEmpty>Seu carrinho está vazio</TitleEmpty>
            </ContainerEmpty>
          )}
        </ViewProducts>
      </ScrollViewHorizontal>

      <View>
        {listOfProducts.length > 0 ? (
          <>
            <InfosPayment>Valor dos produtos: R$ {totalPrice}</InfosPayment>
            <InfosPayment>Desconto padrão: R$ 200.00</InfosPayment>
            <InfosPayment>Frete: R$ 00.00</InfosPayment>
            <InfosPayment>
              Valor total: R$ {Number(totalPrice) - 200}
            </InfosPayment>
            <ButtonBuyView>
              Finalizar compra
              <IconButon>
                <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
              </IconButon>
            </ButtonBuyView>
            <ButtonBuyView>
              Continue comprando
              <IconButon>
                <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
              </IconButon>
            </ButtonBuyView>
          </>
        ) : (
          <ButtonBuyView>
            Continue comprando
            <IconButon>
              <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
            </IconButon>
          </ButtonBuyView>
        )}
      </View>
    </Container>
  );
}
