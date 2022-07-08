import styled from "styled-components";

const Container = styled.div`
  width: 106px;
  height: 180px;
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
    width: 90px;
    height: 133px;
    border-radius: 10px;
  }
`;

export { Container };
