import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/auth";
import { useState } from "react";

function NavBarCart() {
  const { setNavBar } = useContext(UserContext);
  const [amount, setAmount] = useState(1);

  function addAmount() {
    setAmount(amount + 1);
  }
  function removeAmount() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  return (
    <Container>
      <Background onClick={() => setNavBar(false)} />
      <Content>
        <Top>
          <ion-icon name="cart-outline"></ion-icon>
          <Text>Seus Produtos</Text>
        </Top>
        <Cart>
          <Items>
            <img src="https://image.api.playstation.com/vulcan/img/rnd/202009/2923/jAT7HjpL49A62bU7hLKXJ96b.png" />
            <div>
              <p>Nome do jogo</p>
              <p>Preço</p>

              <p>Quantidade</p>
              <div className="amount">
                <button onClick={removeAmount}>-</button>
                <input disabled placeholder={amount} />
                <button onClick={addAmount}>+</button>
              </div>
              <Button>Remover</Button>
            </div>
          </Items>
        </Cart>
        <Final>
          <button>Finalizar Compra</button>
        </Final>
      </Content>
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
    width: 50%;
    height: 133px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      width: 100px;
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
