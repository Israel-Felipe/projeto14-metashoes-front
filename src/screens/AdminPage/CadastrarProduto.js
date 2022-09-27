import { useState } from "react";
import { postProduct } from "../../services/requests.js";
import { Formulario } from "./styles";

import Swal from "sweetalert2";

export default function CadastrarProduto() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function fazerCadastro(e) {
    e.preventDefault();

    const cadastroAPI = {
      name,
      img,
      price,
      description,
    };

    postProduct(cadastroAPI)
      .then(() => {
        Swal.fire("Produto Cadastrado!", "sucesso!", "success");
        window.location.reload();
      })
      .catch(() => {
        Swal.fire("Deu algo errado", "erro!", "error");
      });
  }

  return (
    <Formulario>
      <h1>Cadastrar Produto:</h1>
      <form onSubmit={fazerCadastro}>
        <input
          placeholder="Nome do produto"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Imagem do produto"
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <input
          placeholder="Preço do produto"
          type="value"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          placeholder="Descrição do produto"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">
          <div>Cadastrar</div>
        </button>
      </form>
    </Formulario>
  );
}
