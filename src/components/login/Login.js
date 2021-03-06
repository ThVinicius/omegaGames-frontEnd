import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext, useAuth, UserContext } from "../../context/auth";
import Button from "../button/ Button";
import Logo from "../logo/Logo";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const URL = `${process.env.REACT_APP_API_URL}/login`;

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  function login(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(URL, {
      ...userLogin
    });

    promise.then(response => {
      setLoading(true);
      user.token = response.data.token;
      navigate("/");
    });

    promise.catch(err => {
      if (err.response.status === 404) {
        alert("email ou senha incorreta");
      } else if (err.response.status === 422) {
        alert("os dados foram enviados de maneira incorreta!");
      }
      setLoading(false);
    });
  }

  function ChangeInputEmail(e) {
    setUserLogin({ ...userLogin, email: e });
  }

  function ChangeInputPassword(e) {
    setUserLogin({ ...userLogin, password: e });
  }

  return (
    <Container>
      <Logo />

      <Form>
        <input
          type="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={userLogin.email}
          name="email"
          onChange={e => ChangeInputEmail(e.target.value)}
        />
        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={userLogin.password}
          name="password"
          onChange={e => ChangeInputPassword(e.target.value)}
        />

        {loading === false ? (
          <Button type={"submit"} text={"Entrar"} destiny={""} action={login} />
        ) : (
          "carregando"
        )}
      </Form>

      <Link to="/register">
        <p>N??o possui conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1156be;
  img {
    width: 147px;
    height: 50px;
    margin-bottom: 32px;
  }
  input {
    width: 50vw;
    height: 58px;
    background: #a328d6;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 0 15px;
    margin-bottom: 13px;
    background: #ffffff;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  input::placeholder {
    font: normal 400 20px "Raleway", sans-serif;
    color: #000000;
    line-height: 23px;
  }
  .button {
    width: 50vw;
    height: 46px;
    padding: 10px;
    text-align: center;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
  p {
    margin-top: 20px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #ffffff;
  }

  @media (max-width: 420px) {
    input {
      width: 87.6vw;
    }

    p {
      font-size: 17px;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input::placeholder {
    font: normal 400 20px "Raleway", sans-serif;
    color: #000000;
    line-height: 23px;
  }
`;

export default Login;
