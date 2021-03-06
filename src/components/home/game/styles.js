import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 15vh;
  left: 0;
  width: 100vw;
  height: 85vh;
  background-color: rgba(217, 217, 217, 0.75);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 46.97vw;
  height: 76.01vh;
  padding: 5px 0;
  background-color: #1156be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  z-index: 2;

  i {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  p {
    font: normal 700 20px "Raleway", sans-serif;
    color: #ffffff;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }

  h1 {
    font: normal 400 23px "Saira Stencil One", cursive;
    color: #ffffff;
    text-align: center;
  }

  img {
    width: 27.49vw;
    height: 44.48vh;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  h2 {
    font: normal 700 21px "Raleway", sans-serif;
    color: #ffffff;
  }

  div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    border: none;
    cursor: pointer;
  }

  button:first-child {
    background-color: #1156be;
    color: #ffffff;
    font: normal 700 18px "Raleway", sans-serif;
  }

  button:nth-child(2) {
    padding: 10px;
    border-radius: 5px;
    font: normal 700 18px "Raleway", sans-serif;
    background-color: #1a6e05;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }

  h5 {
    font: normal 700 18px "Raleway", sans-serif;
    padding: 10px;
    border-radius: 5px;
    background-color: #ff0000;
    color: #ffffff;
  }

  h6 {
    font: normal 700 18px "Raleway", sans-serif;
    padding: 10px;
    border-radius: 5px;
    background-color: #9400d3;
    color: #ffffff;
  }

  @media (max-width: 420px) {
    & {
      width: 291px;
      height: 66.01vh;
    }

    h1 {
      font: normal 400 22px "Saira Stencil One", cursive;
    }

    img {
      width: 173px;
      height: 34.48vh;
    }

    h2 {
      font: normal 700 15px "Raleway", sans-serif;
    }

    button:first-child {
      font: normal 700 15px "Raleway", sans-serif;
    }

    button:nth-child(2) {
      font: normal 700 15px "Raleway", sans-serif;
    }

    h5 {
      font: normal 700 15px "Raleway", sans-serif;
    }

    h6 {
      font: normal 700 15px "Raleway", sans-serif;
    }
  }
`;

export { Container, Content };
