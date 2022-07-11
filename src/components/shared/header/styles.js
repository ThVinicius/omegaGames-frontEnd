import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 15vh;
  padding: 0 10px;
  background-color: #1156be;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 60px;
    cursor: pointer;
  }

  h1 {
    font: normal 400 52px "Saira Stencil One", cursive;
  }

  span {
    position: relative;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background-color: red;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font: normal 400 15px "Raleway", sans-serif;
  }

  @media (max-width: 420px) {
    h1 {
      font: normal 400 32px "Saira Stencil One", cursive;
    }

    ion-icon {
      font-size: 40px;
    }
  }
`;

export { Container };
