import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 36px;
  gap: 13px;

  input {
    background-color: ${props => props.color};
    width: 326px;
    height: 58px;
    padding: 0 15px;
    font: normal 400 20px 'Raleway', sans-serif;
  }

  input::placeholder {
    font: normal 400 20px 'Raleway', sans-serif;
    color: #000000;
    line-height: 23px;
  }

  button {
    opacity: ${props => props.opacity};
    cursor: pointer;
    width: 326px;
    height: 46px;
    background-color: #c1d3ee;
    font: normal 700 20px 'Raleway', sans-serif;
    color: #000000;
    line-height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button,
  input {
    border: none;
    border-radius: 5px;
  }

  @media (max-width: 420px) {
    input {
      width: 87.6vw;
    }

    button {
      width: 87.6vw;
    }
  }
`;

const InputBox = styled.div`
  width: 326px;
  height: 58px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: #ffffff;

  ion-icon {
    font-size: 36px;
  }

  input {
    width: 281px;
    border: none;
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &:focus-within {
    outline: 2px solid #5294e2;
  }

  @media (max-width: 420px) {
    & {
      width: 87.6vw;
    }
    input {
      width: 75.6vw;
    }
  }
`;

export { Container, InputBox };
