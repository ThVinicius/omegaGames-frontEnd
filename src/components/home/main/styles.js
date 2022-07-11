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
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  gap: 20px;

  select {
    border: none;
    border-radius: 5px;
    width: 25%;
    height: 35px;
    text-align: center;
    font: normal 700 18px "Raleway", sans-serif;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px,
      rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
  }

  option {
    font: normal 700 18px "Raleway", sans-serif;
    text-align: center;
  }

  span {
    font: normal 700 18px "Raleway", sans-serif;
  }

  @media (max-width: 420px) {
    padding-right: 10px;
    gap: 20px;

    select {
      width: 50%;

      font: normal 700 14px "Raleway", sans-serif;
    }

    option {
      font: normal 700 14px "Raleway", sans-serif;
    }

    span {
      font: normal 700 14px "Raleway", sans-serif;
    }
  }
`;

export { Container, App, Content, BoxGames, SelectBox };
