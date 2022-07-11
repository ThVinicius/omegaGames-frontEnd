import styled from "styled-components";

const Container = styled.div`
  width: 48%;
  height: 180px;
  padding: 7px;
  display: flex;
  background-color: #ffffff;
  box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px,
    rgba(96, 97, 112, 0.16) 0px 0.5px 2px;

  img {
    padding-right: 10px;
    height: 100%;
    width: 20%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }

  h1 {
    font: normal 700 20px "Raleway", sans-serif;
    color: #000000;
    text-align: center;
  }

  h3 {
    font: normal 700 15px "Raleway", sans-serif;

    span {
      color: green;
    }
  }
`;

const RatingBox = styled.div`
  width: 100%;
  display: flex;

  i {
    display: flex;
    align-items: center;
  }

  ion-icon {
    font-size: 24px;
    color: #006400;
  }

  h2 {
    font: normal 700 15px "Raleway", sans-serif;
  }
`;

export { Container, RatingBox };
