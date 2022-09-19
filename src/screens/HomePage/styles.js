import styled from "styled-components";

export const View = styled.div`
  background-color: #000000;
  padding-top: 80px;
`;

export const ContainerProducts = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
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
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  height: 300px;
`;

export const ImageShoes = styled.img`
  width: 150px;
  height: 150px;
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
  margin-top: 15px;
  color: #ffffff;
`;
