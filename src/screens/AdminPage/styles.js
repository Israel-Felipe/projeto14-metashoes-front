import styled from "styled-components";

export const View = styled.div`
  background-color: #000000;
  padding-top: 80px;
  min-height: 100vh;
  height: 100%;
  padding: 140px 15% 0;
`;

export const ContainerProducts = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 100px;
  gap: 20px;
  @media only screen and (max-width: 935px) {
    justify-content: center;
  }
`;

export const ContainerShoes = styled.div`
  background: white;
  border-radius: 20px;
  padding: 5%;
  width: 48%;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100px;
  position: relative;
  gap: 20px;
  @media only screen and (max-width: 935px) {
    width: 100%;
  }
`;

export const ImageShoes = styled.img`
  width: 20%;
`;

export const TittleProduct = styled.h1`
  font-family: "Roboto";
  font-weight: 600;
  font-size: 20px;
  color: black;
  width: 90%;
  margin: 10% 0;
  line-height: 30px;
  @media only screen and (max-width: 935px) {
    font-size: 14px;
    line-height: 15px;
  }
`;

export const DescriptionShoes = styled.h2`
  width: 40%;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 20px;
  color: black;
  bottom: 30px;
  @media only screen and (max-width: 935px) {
    font-size: 14px;
    line-height: 15px;
    margin-top: -30px;
  }
`;

export const ImageLoading = styled.img`
  z-index: 1;
  height: 30%;
  position: fixed;
  top: 40%;
  left: 40%;
  @media only screen and (max-width: 935px) {
    left: 20%;
  }
`;

export const ContainerLoading = styled.div`
  height: 100vh;
  background-color: #000000;
  padding-top: 80px;
`;

export const Formulario = styled.div`
  font-family: "Roboto";
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 80px;
  margin-top: 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
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

export const Deletar = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
  font-size: 30px;
`;
