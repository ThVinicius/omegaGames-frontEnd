import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function NavBarCart() {
  const { user, setUser, navbarCart, setNavbarCart } = useAuth();
  const [cart, setCart] = useState(user.cart);
  const [loading] = useState({ value: false });

  const navigate = useNavigate();

  function renderCart() {
    return cart.map(({ url, name, price }, index) => (
      <Items key={index}>
        <img src={url} />
        <div>
          <p>{name}</p>
          <p>R$ {price.toFixed(2).replace(".", ",")}</p>
          <Button onClick={() => removeCart(index)}>Remover</Button>
        </div>
      </Items>
    ));
  }

  function removeCart(index) {
    if (loading.value === true) return;
    loading.value = true;

    const URL = `${process.env.REACT_APP_API_URL}/remove/${user.cart[index]._id}`;
    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = axios.post(URL, {}, config);

    promise.then(() => {
      loading.value = false;
      cart.splice(index, 1);
      setUser({ ...user });
    });

    promise.catch(err => {
      loading.value = false;
      console.log(err);
    });
  }

  function finalPurchase() {
    if (loading.value === true) return;
    loading.value = true;

    const aux = user.cart;
    user.cart = [];
    navbarCart.value = false;

    const URL = `${process.env.REACT_APP_API_URL}/purchase`;
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const body = aux;
    const promise = axios.post(URL, body, config);
    promise.then(() => {
      loading.value = false;
      setUser({ ...user });
      navigate("/sucess", { state: aux });
    });
    promise.catch(err => {
      loading.value = false;
      console.log(err);
    });
  }

  function loadingBackground() {
    if (loading.value === true) return;

    return setNavbarCart({ ...navbarCart, value: false });
  }

  return (
    (user === undefined || user !== undefined) && (
      <Container>
        <Background onClick={loadingBackground} />
        <Content>
          <Top>
            <ion-icon name="cart-outline"></ion-icon>
            <Text>Seus Produtos</Text>
          </Top>
          <Cart>{renderCart()}</Cart>
          {user.token !== undefined ? (
            <Final>
              <button onClick={finalPurchase}>Finalizar Compra</button>
            </Final>
          ) : (
            <Final>
              <Link
                to="/login"
                onClick={() => setNavbarCart({ ...navbarCart, value: false })}
              >
                <button>Finalizar Compra</button>
              </Link>
            </Final>
          )}
        </Content>
      </Container>
    )
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
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
  right: 0;
  z-index: 10;
`;

const Background = styled.div`
  width: 35vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.75);
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Top = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  ion-icon {
    width: 40px;
    height: 40px;
  }
`;

const Text = styled.p`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 39px;
  text-align: center;
  color: #ffffff;
`;

const Cart = styled.div`
  width: 100%;
  height: 550px;
  overflow-y: scroll;
`;

const Items = styled.div`
  width: 100%;
  height: 151px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  img {
    width: 90px;
    height: 133px;
  }
  div {
    width: 80%;
    height: 133px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      width: 100%;
      height: 30px;
      margin-bottom: 5px;
      text-align: center;
    }
    .amount {
      width: 70%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      input {
        width: 30px;
        height: 30px;
        text-align: center;
        background: #ffffff;
        border: 1px solid #000000;
        margin-left: 5px;
        margin-right: 5px;
      }
      button {
        width: 30px;
        height: 30px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
    }
  }
`;

const Button = styled.button`
  width: 81px;
  height: 21px;
  padding: 4px;
  border: none;
  background: #ff1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
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
    background: #1a6e05;
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

export default NavBarCart;
