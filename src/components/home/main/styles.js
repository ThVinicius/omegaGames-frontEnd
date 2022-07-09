import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
`;
const Header = styled.header`
  width: 100%;
  height: 15vh;
  padding: 0 10px;
  background-color: #1156be;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 40px;
  }

  h1 {
    font: normal 400 32px "Saira Stencil One", cursive;
  }
  button {
    border: none;
    background: #1156be;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 85vh;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  background-color: #f2f3f4;
`;

export { Container, App, Header, Content };
