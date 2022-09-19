import React from "react";

import { addProductToCar } from "../../services/requests";

import TopBar from "../../components/TopBar/TopBar";

import {
  ButtonBuyView,
  ContainerBottom,
  ContainerButtons,
  ContainerButtonsResponsive,
  ContainerTextDescription,
  ContainerTittleProduct,
  ContainerTop,
  IconButon,
  ImageShoe,
  PriceProduct,
  SelectDropDown,
  TextDescription,
  TittleDescription,
  TittleProduct,
  View,
  ViewWhite,
} from "./styles";

import { ThreeDots } from "react-loader-spinner";

const response = {
  idProduct: "63252eb595acc5a7ff5e777d",
  img: "https://images2.imgbox.com/91/42/BhGbC610_o.png",
  name: "Tênis Nike Air Max Excee Masculino",
  price: "400,00",
  description:
    "A revolucionária tecnologia Air apareceu pela primeira vez nos calçados Nike em 1978. Em 1987, o Air Max 1 estreou com a tecnologia Air visível no seu calcanhar, permitindo que os fãs não só sentissem o amortecimento do Air, mas pudessem vê-lo.",
};

export default function ProductPage() {
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [img, setImg] = React.useState("");
  const [idProduct, setIdProduct] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function addToCar(size, color, quantity, idProduct) {
    if (!size || !color || !quantity) {
      alert("Selecione a cor, quantidade e cor do tênis");
      return;
    }

    setLoading(true);

    const body = {
      idProduct,
      size,
      color,
      quantity,
    };

    try {
      let response = await addProductToCar(
        body,
        "c9989776-9949-40fe-8962-52bda1f4bded"
      );
      alert(`${response.data.message}`);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    setName(response.name);
    setIdProduct(response.idProduct);
    setPrice(response.price);
    setImg(response.img);
    setDescription(response.description);
  }, []);

  return (
    <>
      <View>
        <TopBar />
        <ImageShoe src={img} />
        <ContainerTop>
          <ContainerTittleProduct>
            <TittleProduct>{name}</TittleProduct>
            <PriceProduct>R$ {price}</PriceProduct>
          </ContainerTittleProduct>
          <ContainerButtons>
            <SelectDropDown
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option disabled={size ? true : false}>
                Selecione o tamanho
              </option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </SelectDropDown>
            <SelectDropDown
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option disabled={color ? true : false}>Selecione a cor</option>
              <option value="Rosa">Rosa</option>
              <option value="Vermelho">Vermelho</option>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
            </SelectDropDown>
            <SelectDropDown
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option disabled={quantity ? true : false}>
                Selecione a quantidade
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </SelectDropDown>
          </ContainerButtons>
        </ContainerTop>
        <ViewWhite>
          <ContainerBottom>
            <ContainerTextDescription>
              <TittleDescription>Descrição</TittleDescription>
              <TextDescription>{description}</TextDescription>
            </ContainerTextDescription>
            <ContainerButtonsResponsive>
              <SelectDropDown
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option disabled={size ? true : false}>
                  Selecione o tamanho
                </option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
              </SelectDropDown>
              <SelectDropDown
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option disabled={color ? true : false}>Selecione a cor</option>
                <option value="Rosa">Rosa</option>
                <option value="Vermelho">Vermelho</option>
                <option value="Preto">Preto</option>
                <option value="Branco">Branco</option>
              </SelectDropDown>
              <SelectDropDown
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option disabled={quantity ? true : false}>
                  Selecione a quantidade
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </SelectDropDown>
              <ButtonBuyView
                onClick={() => addToCar(size, color, quantity, idProduct)}
              >
                {loading ? (
                  <ThreeDots color="white" height={40} width={40} />
                ) : (
                  <>
                    Adicione ao carrinho
                    <IconButon>
                      <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                    </IconButon>
                  </>
                )}
              </ButtonBuyView>
            </ContainerButtonsResponsive>
            <ContainerButtons>
              <ButtonBuyView
                onClick={() => addToCar(size, color, quantity, idProduct)}
              >
                {loading ? (
                  <ThreeDots color="white" height={40} width={40} />
                ) : (
                  <>
                    Adicione ao carrinho
                    <IconButon>
                      <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                    </IconButon>
                  </>
                )}
              </ButtonBuyView>
            </ContainerButtons>
          </ContainerBottom>
        </ViewWhite>
      </View>
    </>
  );
}
