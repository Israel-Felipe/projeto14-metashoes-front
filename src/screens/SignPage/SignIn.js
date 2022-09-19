import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { postSignIn } from "../../services/requests.js";
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

export default function SignInPage() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("userLocal"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function fazerLogin(e) {
    e.preventDefault();
    setIsDisabled(true);

    const loginAPI = {
      email,
      password,
    };

    postSignIn(loginAPI)
      .then((res) => {
        const token = res.data.token;
        const usuario = res.data.usuario;
        const infoJSON = JSON.stringify({ token, usuario });
        localStorage.setItem("userLocal", infoJSON);

        navigate("/home");
      })
      .catch(() => {
        alert("Login ou password incorretos");
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
        <Login onSubmit={fazerLogin}>
          <Titulo>Entrar</Titulo>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isDisabled}
          />
          <button type="submit" disabled={isDisabled}>
            <div>Entrar</div>
          </button>

          <Link to={`/cadastro`}>
            <Cadastro disabled={isDisabled}>
              Novo por aqui? <h2>Cadastre-se agora.</h2>
            </Cadastro>
          </Link>
        </Login>
      </Corpo>
    );
  }
}
