import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 15vh;
  left: 0;
  width: 375px;
  height: 85vh;
  background-color: rgba(217, 217, 217, 0.75);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 291px;
  height: 66.01vh;
  padding: 3vh 0;
  background-color: #1156be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }

  h1 {
    font: normal 400 22px 'Saira Stencil One', cursive;
    color: #ffffff;
    text-align: center;
  }

  img {
    width: 173px;
    height: 34.48vh;
    border: 1px solid #000000;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  h2 {
    font: normal 700 15px 'Raleway', sans-serif;
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
    font: normal 700 15px 'Raleway', sans-serif;
  }

  button:nth-child(2) {
    padding: 10px;
    border-radius: 5px;
    font: normal 700 15px 'Raleway', sans-serif;
    background-color: #1a6e05;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }
`

export { Container, Content }
