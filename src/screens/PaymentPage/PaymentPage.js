import React from "react";

import { useNavigate, Navigate } from "react-router-dom";

import { getProductFromCar } from "../../services/requests";

import TopBar from "../../components/TopBar/TopBar";
import creditCard from "../../assets/img/credit-card.svg";

import { Button, Container, CreditCard, Form, View, ViewWhite } from "./styles";

import Swal from "sweetalert2";

export default function PaymentPage() {
  const [numberCard, setNumberCard] = React.useState("");
  const [dataValid, setDataValid] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [name, setName] = React.useState("");
  const [listOfProducts, setListOfProducts] = React.useState([]);
  let tokenLocal = "";
  if (JSON.parse(localStorage.getItem("userLocal"))) {
    const auth = JSON.parse(localStorage.getItem("userLocal"));
    tokenLocal = auth.token.token;
  }

  const navigate = useNavigate();

  async function getItemsCar(token) {
    try {
      let response = await getProductFromCar(tokenLocal);
      setListOfProducts(response.data);
    } catch (error) {
      Swal.fire(`${error.response.data.message}`, "erro!", "error");
    }
  }

  function handleSubmit() {
    if (
      numberCard.length === 0 ||
      dataValid.length === 0 ||
      cvv.length === 0 ||
      name.length === 0 ||
      listOfProducts.length === 0
    ) {
      Swal.fire("Preencha todas informações", "erro!", "error");
      return;
    }
    let produtos = [];
    produtos = listOfProducts.map((value) => value.name);

    Swal.fire(
      `Parabéns ${name}!! Você comprou na Meta Shoes! Suas compras foram: ${produtos}`,
      "sucesso!",
      "success"
    );
    navigate("/home");
  }

  React.useEffect(() => {
    getItemsCar();
  });

  if (tokenLocal.length === 0) {
    Swal.fire("Você precisa estar logado para comprar", "erro!", "error");

    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <View>
        <TopBar />
        <ViewWhite onClick={() => console.log(listOfProducts)}>
          <Form>
            <Container>
              <label htmlFor="cardNumber">Número do cartão:</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                required
                value={numberCard}
                onChange={(e) => setNumberCard(e.target.value)}
              />
              <span>
                <div>
                  <label htmlFor="validThru">Data de validade:</label>
                  <input
                    type="text"
                    name="validThru"
                    id="validThru"
                    required
                    value={dataValid}
                    onChange={(e) => setDataValid(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="cvv">CVV:</label>
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    required
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </span>
              <label htmlFor="name">Nome do titular do cartão:</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Container>
            <div>
              <Button
                onClick={() => {
                  if (
                    window.confirm(
                      "Você realmente deseja comprar na Meta Shoes?"
                    )
                  ) {
                    handleSubmit();
                  }
                }}
              >
                Comprar Agora <ion-icon name="arrow-forward-circle"></ion-icon>
              </Button>
            </div>
          </Form>
        </ViewWhite>

        <CreditCard>
          <img src={creditCard} alt="credit-card" />
        </CreditCard>
      </View>
    );
  }
}
