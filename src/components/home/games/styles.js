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
  cursor: pointer;

  img {
    width: 120px;
    height: 148px;
    border-radius: 10px;
  }

  span {
    font: normal 400 18px "Raleway", sans-serif;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font: normal 700 20px "Raleway", sans-serif;
  }

  @media (max-width: 420px) {
    & {
      width: 106px;
      height: 180px;
    }

    span {
      font: normal 400 15px "Raleway", sans-serif;
    }
    img {
      width: 90px;
      height: 117px;
    }
    p {
      font: normal 700 13px "Raleway", sans-serif;
    }
  }
`;

export { Container };
