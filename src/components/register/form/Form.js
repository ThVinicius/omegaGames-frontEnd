import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, InputBox } from "./styles";
import {
  spinnerLoading,
  disableInput,
  inputColorLoading,
  opacityButton,
  showOrHideIcon,
  showOrHidePassword
} from "./functions";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    picture: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const hanleChangeInputName = e => {
    setInput({ ...input, name: e });
  };

  const hanleChangeInputEmail = e => {
    setInput({ ...input, email: e });
  };

  const hanleChangeInputPicture = e => {
    setInput({ ...input, picture: e });
  };

  const hanleChangeInputPassword = e => {
    setInput({ ...input, password: e });
  };

  const hanleChangeInputConfirmPassword = e => {
    setInput({ ...input, confirmPassword: e });
  };

  const toSend = event => {
    event.preventDefault();
    if (loading === true) return;
    setLoading(true);
    const { name, email, picture, password, confirmPassword } = input;

    if (password !== confirmPassword) {
      setLoading(false);

      alert("As senhas são diferentes!");
      return;
    }

    const URL = `${process.env.REACT_APP_API_URL}/register`;

    const toSend = { name, email, picture, password, confirmPassword };

    const promise = axios.post(URL, toSend);

    promise
      .then(() => {
        alert("Cadastro realizado com sucesso!");

        navigate("/login");
      })
      .catch(res => {
        setLoading(false);
        switch (true) {
          case res.response.status === 409:
            alert("Esse e-mail já está cadastrado!");
            return;

          case res.response.status === 400:
            alert(
              "Os dados digitados estão fora do padrão aceito, por favor digite um email válido"
            );
            return;

          case res.response.status === 500:
            alert(res.message);
            return;

          default:
            break;
        }
      });
  };

  return (
    <Container
      color={inputColorLoading(loading)}
      opacity={opacityButton(loading)}
      onSubmit={toSend}
    >
      <input
        type="text"
        placeholder="Digite seu primeiro nome"
        required
        maxLength={17}
        disabled={disableInput(loading)}
        value={input.name}
        onChange={e => hanleChangeInputName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        disabled={disableInput(loading)}
        value={input.email}
        onChange={e => hanleChangeInputEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Foto"
        required
        disabled={disableInput(loading)}
        value={input.picture}
        onChange={e => hanleChangeInputPicture(e.target.value)}
      />
      <InputBox>
        <input
          type={showOrHidePassword(showPassword)}
          placeholder="Senha"
          required
          disabled={disableInput(loading)}
          value={input.password}
          onChange={e => hanleChangeInputPassword(e.target.value)}
        />
        {showOrHideIcon(showPassword, setShowPassword)}
      </InputBox>
      <InputBox>
        <input
          type={showOrHidePassword(showPassword)}
          placeholder="Confirme a senha"
          required
          disabled={disableInput(loading)}
          value={input.confirmPassword}
          onChange={e => hanleChangeInputConfirmPassword(e.target.value)}
        />
        {showOrHideIcon(showPassword, setShowPassword)}
      </InputBox>
      <button type="submit">{spinnerLoading(loading)}</button>
    </Container>
  );
}
