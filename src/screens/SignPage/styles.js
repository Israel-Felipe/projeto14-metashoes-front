import styled from "styled-components";

export const Wallpaper = styled.img`
  position: fixed;
  width: auto;
  min-width: 100%;
  height: 100%;
  z-index: -1;
`;
export const Corpo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Titulo = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 40px;
  @media only screen and (max-width: 935px) {
    font-size: 35px;
  }
`;

export const Login = styled.form`
  width: 500px;
  height: 650px;
  border-radius: 20px;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (max-width: 935px) {
    width: 100%;
    max-height: 90%;
    padding: 40px 15px;
  }

  input,
  button {
    height: 58px;
    border: none;
    border-radius: 20px;
    color: #000000;
    font-size: 20px;
    padding: 15px 25px;
  }
  input::placeholder {
    color: #868686;
  }
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    height: 60px;
    margin-top: 30px;
    background-color: #74e6e9;
    color: #000000;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Cadastro = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  color: #737373;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;

  h2 {
    color: #ffffff;
    margin-left: 6px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 8%;
  left: 10%;
  cursor: pointer;
  position: fixed;
  @media only screen and (max-width: 935px) {
    position: unset;
    margin-bottom: 30px;
  }
`;

export const TittleLogo = styled.h1`
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  margin-right: 3px;
  color: #ffffff;
  text-shadow: 0px 4px 4px #74e6e9;
  -webkit-text-stroke: 0.5px #b543b9;
  @media only screen and (max-width: 935px) {
    font-size: 35px;
  }
`;

export const SubTittleLogo = styled.h2`
  margin-top: 10px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #fe5fff;
  -webkit-text-stroke: 0.5px #b543b9;
  text-shadow: 0px 4px 4px #000000;
  @media only screen and (max-width: 935px) {
    font-size: 13px;
  }
`;
