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
  padding-bottom: 100px;
  gap: 10px;
  justify-content: center;
  @media only screen and (max-width: 935px) {
    justify-content: center;
  }
`;

export const ContainerShoes = styled.div`
  background: #b543b9;
  border-radius: 20px;
  padding: 5%;
  width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  height: 340px;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.2s;
  @media only screen and (max-width: 935px) {
    &:hover {
      transform: none;
    }
  }
`;

export const ImageShoes = styled.img`
  width: 90%;
`;

export const TittleProduct = styled.h1`
  font-family: "Roboto";
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #74e6e9;
  width: 90%;
  margin: 5% 0;
  line-height: 30px;
`;

export const DescriptionShoes = styled.h2`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
  position: absolute;
  bottom: 30px;
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
