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

export default function MarketPage() {
  const [listOfProducts, setListOfProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  async function getItemsCar(token) {
    try {
      let response = await getProductFromCar("123");
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
    try {
      await removeProductFromCar(id, "123");
      getItemsCar();
    } catch (error) {
      console.log(error);
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
                  <ion-icon name="trash-outline"></ion-icon>
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
