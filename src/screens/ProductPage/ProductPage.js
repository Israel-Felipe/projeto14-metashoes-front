import TopBar from "../../components/TopBar/TopBar";

import {
  ButtonBuyView,
  ButtonView,
  ContainerBottom,
  ContainerButtons,
  ContainerTextDescription,
  ContainerTittleProduct,
  ContainerTop,
  IconButon,
  ImageShoe,
  PriceProduct,
  TextDescription,
  TittleDescription,
  TittleProduct,
  View,
  ViewWhite,
} from "./styles";

const response = [{ img: "https://images2.imgbox.com/91/42/BhGbC610_o.png" }];

export default function ProductPage() {
  return (
    <>
      <View>
        <TopBar />
        <ImageShoe src={response[0].img} />
        <ContainerTop>
          <ContainerTittleProduct>
            <TittleProduct>Tênis Nike Air Max Excee Masculino</TittleProduct>
            <PriceProduct>R$ 400.00</PriceProduct>
          </ContainerTittleProduct>
          <ContainerButtons>
            <ButtonView>Selecione o tamanho</ButtonView>
            <ButtonView>Selecione a cor</ButtonView>
            <ButtonView>Selecione a quantidade</ButtonView>
          </ContainerButtons>
        </ContainerTop>
        <ViewWhite>
          <ContainerBottom>
            <ContainerTextDescription>
              <TittleDescription>Descrição</TittleDescription>
              <TextDescription>
                A revolucionária tecnologia Air apareceu pela primeira vez nos
                calçados Nike em 1978. Em 1987, o Air Max 1 estreou com a
                tecnologia Air visível no seu calcanhar, permitindo que os fãs
                não só sentissem o amortecimento do Air, mas pudessem vê-lo.
              </TextDescription>
            </ContainerTextDescription>
            <ContainerButtons>
              <ButtonBuyView>
                Adicione ao carrinho
                <IconButon>
                  <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                </IconButon>
              </ButtonBuyView>
            </ContainerButtons>
          </ContainerBottom>
        </ViewWhite>
      </View>
    </>
  );
}
