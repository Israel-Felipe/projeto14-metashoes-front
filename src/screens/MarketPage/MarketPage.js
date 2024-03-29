import React from "react";

import { useNavigate, Navigate } from "react-router-dom";

import TopBar from "../../components/TopBar/TopBar";

import {
  ButtonBuyView,
  Container,
  ContainerEmpty,
  ContainerIcon,
  ContainerShoes,
  DescriptionShoes,
  IconButon,
  ImageLoading,
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

import loadingGif from "../../assets/image/loading-gif.gif";

import Swal from "sweetalert2";

export default function MarketPage() {
  const [listOfProducts, setListOfProducts] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [delayDeploy, setDelayDeploy] = React.useState(false);
  let tokenLocal = "";
  if (JSON.parse(localStorage.getItem("userLocal"))) {
    const auth = JSON.parse(localStorage.getItem("userLocal"));
    tokenLocal = auth.token.token;
  }

  const navigate = useNavigate();

  async function getItemsCar(token) {
    try {
      let response = await getProductFromCar(token);
      setListOfProducts(response.data);
      let priceTotal = 0;
      response.data.forEach((element) => {
        priceTotal = priceTotal + element.price * element.quantity;
      });
      setTotalPrice(priceTotal);
      setDelayDeploy(true);
    } catch (error) {
      Swal.fire(`${error.response.data.message}`, "erro!", "error");
    }
  }

  async function removeItemsCar(id, token) {
    setLoading(true);
    try {
      await removeProductFromCar(id, tokenLocal);
      getItemsCar(tokenLocal);
      setLoading(false);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Item deletado com sucesso",
      });
    } catch (error) {
      Swal.fire(`${error.response.data.message}`, "erro!", "error");
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getItemsCar(tokenLocal);
  }, [tokenLocal]);

  if (tokenLocal.length === 0) {
    Swal.fire("Você precisa estar logado para comprar", "erro!", "error");
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <Container>
        <TopBar />
        {delayDeploy ? (
          <>
            <ScrollViewHorizontal>
              <ViewProducts>
                {listOfProducts.length > 0 ? (
                  listOfProducts.map((item, index) => (
                    <ContainerShoes key={index}>
                      <ContainerIcon
                        onClick={() =>
                          removeItemsCar(item.idProduct, tokenLocal)
                        }
                      >
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
                      <DescriptionShoes>
                        Quantidade: {item.quantity}
                      </DescriptionShoes>
                      <DescriptionShoes>
                        Valor unitário: R$: {item.price}
                      </DescriptionShoes>
                      <DescriptionShoes>
                        Valor total: R$:{" "}
                        {(item.price * item.quantity).toFixed(2)}
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
                  <InfosPayment>
                    Valor dos produtos: R$ {totalPrice.toFixed(2)}
                  </InfosPayment>
                  <InfosPayment>Desconto padrão: R$ 200.00</InfosPayment>
                  <InfosPayment>Frete: R$ 00.00</InfosPayment>
                  <InfosPayment>
                    Valor total: R$ {(Number(totalPrice) - 200).toFixed(2)}
                  </InfosPayment>
                  <ButtonBuyView onClick={() => navigate("/pagamento")}>
                    Finalizar compra
                    <IconButon>
                      <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                    </IconButon>
                  </ButtonBuyView>
                  <ButtonBuyView onClick={() => navigate("/home")}>
                    Continue comprando
                    <IconButon>
                      <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                    </IconButon>
                  </ButtonBuyView>
                </>
              ) : (
                <ButtonBuyView onClick={() => navigate("/home")}>
                  Continue comprando
                  <IconButon>
                    <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                  </IconButon>
                </ButtonBuyView>
              )}
            </View>
          </>
        ) : (
          <ImageLoading src={loadingGif} />
        )}
      </Container>
    );
  }
}
