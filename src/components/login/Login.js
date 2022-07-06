import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { InputBox } from "../register/form/styles";
import {
  spinnerLoading,
  disableInput,
  showOrHideIcon,
  showOrHidePassword,
} from "../register/form/functions";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  if (user !== null) {
    navigate("/login");
  }

  const URL = `${process.env.REACT_APP_API_URL}/login`;

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(URL, {
      ...userLogin,
    });

    promise.then((response) => {
      setUser(response.data);
      setLoading(true);
      navigate("/home");
    });

    promise.catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  function ChangeInput(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
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
          onChange={ChangeInput}
        />
        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={userLogin.password}
          name="password"
          onChange={ChangeInput}
        />

        {loading === false ? (
          <Button type={"submit"} text={"Entrar"} destiny={""} action={login} />
        ) : (
          <div>{spinnerLoading()}</div>
        )}
      </Form>

      <Link to="/register">
        <p>Não possui conta? Cadastre-se!</p>
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
    width: 80%;
    height: 58px;
    background: #a328d6;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
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
    padding-left: 10px;
  }

  .button {
    width: 80%;
    heigth: 45px;
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
    font-size: 15px;
    line-height: 18px;

    color: #ffffff;
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
