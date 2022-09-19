import { useState } from "react";
import { deleteProduct } from "../../services/requests.js";
import { Formulario } from "./styles";

export default function DeletarProduto() {
  const [name, setName] = useState("");

  function deletar(e) {
    e.preventDefault();

    const cadastroAPI = {
      name,
    };

    deleteProduct(cadastroAPI)
      .then(() => {
        alert("Produto Deletado!");
        window.location.reload();
      })
      .catch(() => {
        alert("Deu algo errado");
      });
  }

  return (
    <Formulario>
      <h1>Deletar Produto:</h1>
      <form onSubmit={deletar}>
        <input
          placeholder="Nome exato do produto"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">
          <div>Deletar</div>
        </button>
      </form>
    </Formulario>
  );
}
