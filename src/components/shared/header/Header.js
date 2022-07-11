import { useAuth } from "../../../context/auth";
import { Container } from "./styles";

export default function Header() {
  const { navbarMenu, setNavbarMenu, navbarCart, setNavbarCart } = useAuth();
  return (
    <Container>
      <ion-icon
        onClick={() => setNavbarMenu({ ...navbarMenu, value: true })}
        name="menu-sharp"
      ></ion-icon>
      <h1>OMEGA</h1>
      <ion-icon
        onClick={() => setNavbarCart({ ...navbarCart, value: true })}
        name="cart-outline"
      ></ion-icon>
    </Container>
  );
}
