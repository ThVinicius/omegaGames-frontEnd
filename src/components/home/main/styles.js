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
  overflow-y: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  background-color: #f2f3f4;
`;

export { Container, App, Content };
