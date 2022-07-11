import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import PurchasedGames from "../purchasedGames/PurchasedGames";
import { Container, Content, ButtonContainer, GamesContainer } from "./styles";

export default function SucessScreen() {
  const { state } = useLocation();
  const { user } = useAuth()

  return (
    <Container>
      <header>
        <h1>OMEGA</h1>
      </header>
      <Content>
        <h1>Compra realizada com sucesso!</h1>
        <GamesContainer>
          {user.cart.map(({ url, price }) => (
            <PurchasedGames url={url} price={price} />
          ))}
        </GamesContainer>
      </Content>
      <ButtonContainer>
        <Link to="/">
          <button>
            <span>Voltar pra home</span>
            <ion-icon name="home"></ion-icon>
          </button>
        </Link>
      </ButtonContainer>
    </Container>
  );
}
