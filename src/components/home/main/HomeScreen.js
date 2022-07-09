import { useEffect, useState } from "react";
import { get } from "axios";
import Games from "../games/Games";
import { Container, Content, Header, App } from "./styles";
import { useAuth } from "../../../context/auth";

export default function HomeScreen() {
  const [games, setGames] = useState(undefined);

  const { user, setUser, setNavbarMenu, setNavbarCart } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const URL = process.env.REACT_APP_API_URL;

      const { data } = await get(`${URL}/games`);

      user.games = data;

      setGames(data);

      const getToken = localStorage.getItem("token");

      if (getToken !== null && user.token === undefined) {
        const token = JSON.parse(getToken);

        user.token = token;
      }

      if (user.token !== undefined) {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        const { data: res } = await get(`${URL}/user`, config);
        const { email, name, picture, cart, purchases } = res;

        if (user.cart.length > 0) {
          setUser({ ...user, email, name, picture, purchases });
        } else {
          setUser({ ...user, email, name, picture, cart, purchases });
        }
      }
    }

    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    (user === null || user !== null) && (
      <Container>
        <App>
          <Header>
            <button onClick={() => setNavbarMenu(true)}>
              <ion-icon name="menu-sharp"></ion-icon>
            </button>

            <h1>OMEGA</h1>
            <button onClick={() => setNavbarCart(true)}>
              <ion-icon name="cart-outline"></ion-icon>
            </button>
          </Header>
          <Content>
            {games === undefined
              ? "loading"
              : games.map(({ rating, url, price, name, _id }, index) => (
                  <Games
                    rating={rating}
                    name={name}
                    url={url}
                    price={price}
                    _id={_id}
                    key={index}
                  />
                ))}
          </Content>
        </App>
      </Container>
    )
  );
}
