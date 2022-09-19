import React from "react";

import { Link } from "react-router-dom";

import { getAllProducts } from "../../services/requests";

import TopBar from "../../components/TopBar/TopBar";

import {
  ContainerProducts,
  ContainerShoes,
  DescriptionShoes,
  ImageShoes,
  TittleProduct,
  View,
} from "./styles";

export default function HomePage() {
  const [listProducts, setListProducts] = React.useState([]);

  async function getProducts() {
    try {
      const response = await getAllProducts();
      setListProducts(response.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <TopBar />
      <View>
        <ContainerProducts>
          {listProducts.length > 0 ? (
            listProducts.map((item) => (
              <Link to={`/produto/${item._id}`} key={item._id}>
                <ContainerShoes>
                  <ImageShoes src={item.img} />
                  <TittleProduct>{item.name}</TittleProduct>
                  <DescriptionShoes>R$ {item.price}</DescriptionShoes>
                </ContainerShoes>
              </Link>
            ))
          ) : (
            <h1>Estamos sem nenhum produto no momento</h1>
          )}
        </ContainerProducts>
      </View>
    </>
  );
}
