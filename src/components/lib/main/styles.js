import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: #fafafb;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: auto;
`;

export { Container, Content };
