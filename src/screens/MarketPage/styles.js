import styled from "styled-components";

export const View = styled.div`
  background-color: #000000;
  display: flex;
  align-items: center;
  padding-top: 25px;
  flex-direction: column;
`;
export const ViewWhite = styled.div`
  background-color: #000000;
  height: 50vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-top: 25px;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: #000000;
  height: 100vh;
`;
export const InfosPayment = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ButtonBuyView = styled.div`
  background: #74e6e9;
  border-radius: 50px;
  width: 60%;
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
  justify-content: center;
  color: #ffffff;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  display: flex;
  align-items: center;

  color: #000000;
  cursor: pointer;
`;

export const IconButon = styled.div`
  margin-left: 5px;
`;

export const ScrollViewHorizontal = styled.div`
  background-color: white;
  display: flex;
  padding-top: 80px;
  justify-content: center;
`;

export const ContainerShoes = styled.div`
  background: #b543b9;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-bottom: 30px;
  margin-right: 20px;
  width: 180px;
`;

export const ViewProducts = styled.div`
  width: 80%;
  overflow-x: scroll;
  display: flex;
`;

export const ImageShoes = styled.img`
  width: 150px;
  height: 150px;
`;

export const TittleShoes = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  text-align: center;
  margin-top: -20px;
  color: #ffffff;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const TittleProduct = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const DescriptionShoes = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding-left: 10px;
  margin-top: 5px;
  color: #ffffff;
`;

export const ContainerIcon = styled.div`
  color: white;
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
`;

export const ContainerEmpty = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleEmpty = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const ImageLoading = styled.img`
  z-index: 1;
  height: 30%;
  position: fixed;
  top: 40%;
  left: 40%;
`;
