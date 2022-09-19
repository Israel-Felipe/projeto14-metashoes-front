import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../../services/requests.js";
import wallpaper from "../../assets/image/wallpaper.png";
import {
  Corpo,
  Titulo,
  Login,
  Cadastro,
  Wallpaper,
  TittleLogo,
  SubTittleLogo,
  ContainerLogo,
} from "./styles";

export default function SignUpPage() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("userLocal"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function fazerCadastro(e) {
    e.preventDefault();
    setIsDisabled(true);

    if (password !== confpassword) {
      alert("Você digitou algo diferente na confirmação da senha.");
      setIsDisabled(false);
      return;
    }

    const cadastroAPI = {
      name,
      email,
      password,
    };

    postSignUp(cadastroAPI)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setIsDisabled(false);
      });
  }

  if (auth) {
    return <Navigate to="/home" />;
  } else {
    return (
      <Corpo>
        <Wallpaper src={wallpaper}></Wallpaper>
        <ContainerLogo onClick={() => navigate("/home")}>
          <TittleLogo>META SHOES </TittleLogo>
          <SubTittleLogo>E-commerce edition</SubTittleLogo>
        </ContainerLogo>

        <Login onSubmit={fazerCadastro}>
          <Titulo>Cadastrar</Titulo>
          <input
            placeholder="Qual o seu lindo name?"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="E o seu email?"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="Crie uma senha boa aí :)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="E pra finalizar, confirme a senha"
            type="password"
            value={confpassword}
            onChange={(e) => setConfpassword(e.target.value)}
            required
            disabled={isDisabled}
          />
          <button type="submit" disabled={isDisabled}>
            <div>Cadastrar</div>
          </button>

          <Link to={`/login`}>
            <Cadastro disabled={isDisabled}>
              Já tem uma conta? <h2>Faça o login.</h2>
            </Cadastro>
          </Link>
        </Login>
      </Corpo>
    );
  }
}
