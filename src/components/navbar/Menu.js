import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/auth";

function NavBarMenu() {
  const { setNavBar } = useContext(UserContext);

  return (
    <Container>
      <Content>
        <Top>
          <img src="https://image.api.playstation.com/vulcan/img/rnd/202009/2923/jAT7HjpL49A62bU7hLKXJ96b.png" />
          <Text>username</Text>
          <p>Email do user</p>
        </Top>
        <Options>
          <Button>Home</Button>
          <Button>Minhas compras</Button>
          <Button>Biblioteca</Button>
        </Options>
        <Final>
          <button>Logout</button>
        </Final>
      </Content>
      <Background onClick={() => setNavBar(false)} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 65vw;
  height: 100vh;
  padding: 20px 8px;
  background: #1156be;
  box-shadow: 0 0 1em #666666;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  width: 35vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.75);
  opacity: 0.5;
`;

const Options = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 20px;
`;

const Top = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 80px;
    height: 80px;

    border-radius: 50px;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;

const Text = styled.span`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 39px;
  text-align: center;

  color: #ffffff;
`;

const Button = styled.button`
  width: 100%;
  height: 54px;
  border: none;

  margin-top: 20px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  text-align: center;

  color: #000000;
`;

const Final = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 232px;
    height: 54px;

    border: none;

    background: #c50000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default NavBarMenu;
