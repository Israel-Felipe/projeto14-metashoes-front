import React from "react";

import { Navigate } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../../services/requests";

import TopBar from "../../components/TopBar/TopBar";

import {
  ContainerLoading,
  ContainerProducts,
  ContainerShoes,
  DescriptionShoes,
  ImageLoading,
  ImageShoes,
  TittleProduct,
  View,
  Deletar,
} from "./styles";

import loadingGif from "../../assets/image/loading-gif.gif";
import CadastrarProduto from "./CadastrarProduto";
import DeletarProduto from "./DeletarProduto";

export default function HomePage() {
  const auth = JSON.parse(localStorage.getItem("userLocal"));
  const [listProducts, setListProducts] = React.useState([]);
  const [delayDeploy, setDelayDeploy] = React.useState(false);

  async function getProducts() {
    try {
      const response = await getAllProducts();
      setListProducts(response.data);
      setDelayDeploy(true);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  }

  async function deletar(name) {
    console.log(name);
    try {
      await deleteProduct(name);
      alert("Produto deletado");
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  if (auth.userEmail !== "admin@metashoes.com") {
    alert("Tu não é admin, não inventa moda");
    return <Navigate to="/home" />;
  } else {
    return (
      <>
        <TopBar />
        {delayDeploy ? (
          <View>
            <CadastrarProduto />
            <ContainerProducts>
              {listProducts.length > 0 ? (
                listProducts.map((item) => (
                  <ContainerShoes>
                    <ImageShoes src={item.img} />
                    <TittleProduct>{item.name}</TittleProduct>
                    <DescriptionShoes>R$ {item.price}</DescriptionShoes>
                    <Deletar>
                      <ion-icon
                        name="trash-outline"
                        onClick={() => deletar(item.name)}
                      ></ion-icon>
                    </Deletar>
                  </ContainerShoes>
                ))
              ) : (
                <h1>Estamos sem nenhum produto no momento</h1>
              )}
            </ContainerProducts>
          </View>
        ) : (
          <ContainerLoading>
            <ImageLoading src={loadingGif} />
          </ContainerLoading>
        )}
      </>
    );
  }
}
