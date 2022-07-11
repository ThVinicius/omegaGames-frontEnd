import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 220px;
  padding: 10px 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px,
    rgba(96, 97, 112, 0.16) 0px 0.5px 2px;

  img {
    width: 120px;
    height: 175px;
    border-radius: 10px;
  }

  p {
    font: normal 700 20px "Raleway", sans-serif;
  }

  @media (max-width: 420px) {
    & {
      width: 106px;
      height: 180px;
    }
    img {
      width: 90px;
      height: 133px;
    }
    p {
      font: normal 700 15px "Raleway", sans-serif;
    }
  }
`;

export { Container };
