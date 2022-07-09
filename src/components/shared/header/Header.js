import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <ion-icon name="menu-sharp"></ion-icon>
      <h1>OMEGA</h1>
      <Link to="/lib">
        <ion-icon name="cart-outline"></ion-icon>
      </Link>
    </Container>
  );
}
