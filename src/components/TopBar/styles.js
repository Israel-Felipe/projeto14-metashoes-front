import styled from "styled-components";

export const Bar = styled.div`
  background-color: #171717;
  height: 100px;
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  cursor: pointer;
  @media only screen and (max-width: 935px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TittleLogo = styled.h1`
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  margin-right: 3px;
  color: #ffffff;
  text-shadow: 0px 4px 4px #74e6e9;
  -webkit-text-stroke: 0.5px #b543b9;
`;

export const SubTittleLogo = styled.h2`
  margin-top: 10px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #fe5fff;
  -webkit-text-stroke: 0.5px #b543b9;
  text-shadow: 0px 4px 4px #000000;
`;

export const ContainerRoutes = styled.div`
  margin-right: 5%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 935px) {
    margin-right: 0;
  }
`;

export const TextRoutes = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;
  color: #ffffff;
  -webkit-text-stroke: 0.5px #b543b9;
  text-shadow: 0px 4px 4px #171717;
  margin-right: 40px;
  cursor: pointer;

  @media only screen and (max-width: 935px) {
    display: none;
  }
`;

export const Icon = styled.div`
  color: white;
  font-size: 50px;
  margin-right: 30px;
  cursor: pointer;
  @media only screen and (max-width: 935px) {
    display: none;
  }
`;

export const IconMarket = styled.div`
  color: white;
  font-size: 50px;
  margin-right: 20px;
  cursor: pointer;
`;
