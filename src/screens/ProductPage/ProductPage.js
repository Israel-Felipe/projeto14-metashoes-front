import React from "react";

import { useParams, Navigate } from "react-router-dom";

import { addProductToCar, especifyProduct } from "../../services/requests";

import TopBar from "../../components/TopBar/TopBar";

import loadingGif from "../../assets/image/loading-gif.gif";

import {
  ButtonBuyView,
  ContainerBottom,
  ContainerButtons,
  ContainerButtonsResponsive,
  ContainerTextDescription,
  ContainerTittleProduct,
  ContainerTop,
  IconButon,
  ImageLoading,
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

export default function ProductPage() {
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [img, setImg] = React.useState("");
  const [id_Product, setId_Product] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  let tokenLocal = "";
  if (JSON.parse(localStorage.getItem("userLocal"))) {
    const auth = JSON.parse(localStorage.getItem("userLocal"));
    tokenLocal = auth.token;
  }

  const { idProduct } = useParams();

  async function addToCar(size, color, quantity, id_Product) {
    if (!size || !color || !quantity) {
      alert("Selecione a cor, quantidade e cor do tênis");
      return;
    }

    setLoading(true);

    const body = {
      idProduct: id_Product,
      size,
      color,
      quantity,
    };
    try {
      let response = await addProductToCar(body, tokenLocal);
      alert(`${response.data.message}`);
      setLoading(false);
    } catch (error) {
      alert(`${error.response.data.message}`);
      setLoading(false);
    }
  }

  async function getInfosProduct(id) {
    try {
      const promise = await especifyProduct(id);
      setName(promise.data.name);
      setId_Product(promise.data._id);
      setPrice(promise.data.price);
      setImg(promise.data.img);
      setDescription(promise.data.description);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  }

  React.useEffect(() => {
    getInfosProduct(idProduct);
  }, [idProduct]);

  if (tokenLocal.length === 0) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <>
        <View>
          <TopBar />
          {id_Product ? (
            <>
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
                    <option disabled={color ? true : false}>
                      Selecione a cor
                    </option>
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
                      <option disabled={color ? true : false}>
                        Selecione a cor
                      </option>
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
                      onClick={() =>
                        addToCar(size, color, quantity, id_Product)
                      }
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
                      onClick={() =>
                        addToCar(size, color, quantity, id_Product)
                      }
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
            </>
          ) : (
            <ImageLoading src={loadingGif} />
          )}
        </View>
      </>
    );
  }
}
