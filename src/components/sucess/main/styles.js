import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 15vh;
    padding: 0 10px;
    background-color: #1156be;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font: normal 400 52px "Saira Stencil One", cursive;
    }

    @media (max-width: 420px) {
      h1 {
        font: normal 400 32px "Saira Stencil One", cursive;
      }
    }
  }
`;

const Content = styled.div`
  width: 100vw;
  height: calc(85vh - 75px);
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  h1 {
    font: normal 700 24px "Raleway", sans-serif;
    color: #247a6b;
    text-align: center;
    letter-spacing: 0.04em;
  }
`;

const GamesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #1156be;
    height: 60px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 0 8px;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px,
      rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
    cursor: pointer;

    ion-icon {
      font-size: 25px;
      color: #ffffff;
    }

    span {
      font: normal 700 17px "Raleway", sans-serif;
      color: #ffffff;
    }
  }
`;

export { Container, Content, ButtonContainer, GamesContainer };
