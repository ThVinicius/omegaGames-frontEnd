import styled from "styled-components";

function Logo() {
  return <Container>ÔMEGA GAMES</Container>;
}

const Container = styled.h1`
  margin-bottom: 40px;
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
`;

export default Logo;
