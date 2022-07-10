import { priceBRL } from "../../../shared/functions";
import { Container } from "./styles";

export default function PurchasedGames({ url, price }) {
  return (
    <Container>
      <img src={url} alt="game" />
      <p>R$ {priceBRL(price)}</p>
    </Container>
  );
}
