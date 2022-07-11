import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import { Container } from "./styles";

export default function Header() {
  const { user, navbarMenu, setNavbarMenu, navbarCart, setNavbarCart } =
    useAuth();
  const [count, setCount] = useState({ value: user.cart.length });

  useEffect(() => {
    setCount({ ...count, value: user.cart.length });
  }, [user]);

  function cartCount() {
    if (user.cart.length <= 0) return;

    return <div>{count.value}</div>;
  }
  return (
    <Container>
      <ion-icon
        onClick={() => setNavbarMenu({ ...navbarMenu, value: true })}
        name="menu-sharp"
      ></ion-icon>
      <h1>OMEGA</h1>
      <span>
        <ion-icon
          onClick={() => setNavbarCart({ ...navbarCart, value: true })}
          name="cart-outline"
        ></ion-icon>
        {cartCount()}
      </span>
    </Container>
  );
}
