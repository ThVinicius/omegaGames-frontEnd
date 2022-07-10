import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/auth";
import Logo from "../logo/Logo";

function NavBarMenu() {
  const navigate = useNavigate();

  const { user, setNavbarMenu } = useAuth();

  function exitApp() {
    setNavbarMenu(false);
    navigate("/");
    window.location.reload();
  }

  return (
    (user !== null || user === null) && (
      <Container>
        {user.token !== undefined ? (
          <Content>
            <Top>
              <img src={user.picture} />
              <Text>{user.name}</Text>
              <p>{user.email}</p>
            </Top>
            <Options>
              <Button>Home</Button>
              <Button>Minhas compras</Button>
              <Button>Biblioteca</Button>
            </Options>
            <Final>
              <button onClick={exitApp}>Logout</button>
            </Final>
          </Content>
        ) : (
          <Content>
            <Top>
              <Link to="/login" onClick={() => setNavbarMenu(false)}>
                <Text className="login">Faça Login</Text>
              </Link>
            </Top>
            <Link to="/register" onClick={() => setNavbarMenu(false)}>
              <Text className="register">ou Cadastre-se</Text>
            </Link>
          </Content>
        )}
        <Background onClick={() => setNavbarMenu(false)} />
      </Container>
    )
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
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

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Background = styled.div`
  width: 35vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.75);
  opacity: 0.5;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
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
