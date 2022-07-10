import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
`;

const Content = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f4;
`;

const BoxGames = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
`;

const SelectBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  gap: 20px;

  span {
    font: normal 700 15px "Raleway", sans-serif;
  }
`;

export { Container, App, Content, BoxGames, SelectBox };
