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
  }

  h1 {
    font: normal 400 52px "Saira Stencil One", cursive;
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
