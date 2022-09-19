import styled from "styled-components";

export const View = styled.div`
  background-color: #000000;
  height: 50vh;
`;

export const Container = styled.div`
  width: 45%;
  position: absolute;
  left: 100px;
  bottom: 0px;

  div {
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px;
    width: 100%;
    bottom: 80px;
    left: 0;
  }
`;

export const ViewWhite = styled.div`
  background-color: white;
  height: 65vh;
  width: 100%;
  border-radius: 100px 100px 0px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 1200px) {
    width: 100vw;
    border-radius: 50px 50px 0px 0px;
  }
`;

export const CreditCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 10vh;

  img {
      width: 400px;
      height: 400px;
  }

  @media only screen and (max-width: 935px) {
    top: 20%;

    img {
        width: 250px;
        height: 250px;
    }
  }

  @media only screen and (max-height: 760px) {
    top: 17%;

    img {
      width: 200px;
      height: 200px;
    }

  }
`;

export const Form = styled.form`

  input {
    background-color: #D9D9D9;
    height: 92px;
    margin: 0 50px 40px 0;
    padding: 20px;
    border: none;
    border-radius: 50px;
  }

  span {
    display: flex;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 20px;
    font-weight: 500;
    padding: 0 0 10px 25px;
  }

  @media only screen and (max-width: 1200px) {
    width: 85%;

    input {
      width: 100%;
      height: 48px;
    }    
  }

  @media only screen and (max-height: 760px) {
    bottom: 300px;
  }

  @media only screen and (max-width: 400px) {
    label {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  background-color: #74E6E9;
  font-size: 40px;
  font-weight: 800;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 427px;
  height: 172px;
  border: none;
  border-radius: 50px;
  padding: 20px;
  position: absolute;
  bottom: 200px;
  right: 200px;
  cursor: pointer;

  ion-icon {
    font-size: 60px;
  }

  @media only screen and (max-width: 1300px) {
    width: 327px;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    width: 287px;
    height: 63px;
    bottom: 30px;
    left: 55px;

    ion-icon {
      font-size: 30px;
    }
  }
`;