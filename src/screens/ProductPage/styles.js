import styled from "styled-components";

export const View = styled.div`
  background-color: #000000;
  height: 50vh;
  padding: 0 10%;
`;

export const ViewWhite = styled.div`
  background-color: white;
  height: 40vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 10%;
`;

export const ContainerTittleProduct = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10vh;
  margin-left: 8vh;
  @media only screen and (max-width: 935px) {
    margin-top: 4vh;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const TittleProduct = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 150%;
  display: flex;
  align-items: center;
  color: #ffffff;
  width: 170%;
  -webkit-text-stroke: 0.5px #b543b9;
  text-shadow: 0px 4px 4px #b543b9;
  justify-content: center;
  @media only screen and (max-width: 935px) {
    text-align: center;
    margin-top: 10%;
  }
`;

export const PriceProduct = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 150%;
  text-align: center;
  margin-top: 15px;
  color: #74e6e9;
  -webkit-text-stroke: 0.5px #000000;
  text-shadow: 0px 4px 4px #74e6e9;
`;

export const TittleDescription = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 180%;
  text-align: center;
  margin-bottom: 5px;
  color: #000000;
`;

export const ContainerTextDescription = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 7vh;
  margin-left: 8vh;
  @media only screen and (max-width: 935px) {
    display: none;
  }
`;

export const TextDescription = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 100%;
  text-align: justify;
  color: #000000;
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerButtons = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10vh;
  margin-right: 10vh;
  @media only screen and (max-width: 935px) {
    display: none;
  }
`;

export const ContainerButtonsResponsive = styled.div`
  display: none;
  @media only screen and (max-width: 935px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10vh;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ButtonView = styled.div`
  background: #b543b9;
  border-radius: 50px;
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  cursor: pointer;
  color: #ffffff;
  @media only screen and (max-width: 935px) {
    height: 40px;
  }
`;

export const ButtonBuyView = styled.div`
  background: #74e6e9;
  border-radius: 50px;
  width: 125%;
  height: 70px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  justify-content: center;
  color: #ffffff;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  color: #000000;
  cursor: pointer;
  @media only screen and (max-width: 935px) {
    height: 50px;
    width: 100%;
  }
`;

export const IconButon = styled.div`
  margin-left: 5px;
  font-size: 15px;
`;

export const ImageShoe = styled.img`
  z-index: 1;
  height: 30%;
  position: fixed;
  top: 55%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 935px) {
    height: 20%;
    top: 60%;
  }
`;

export const SelectDropDown = styled.select`
  background: #b543b9;
  border-radius: 50px;
  width: 125%;
  height: 60px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  cursor: pointer;
  color: white;
  padding-left: 10px;
  &::placeholder {
    color: red;
  }
  @media only screen and (max-width: 935px) {
    height: 40px;
    z-index: 1;
    width: 100%;
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
