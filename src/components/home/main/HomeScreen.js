import { useContext, useEffect, useState } from "react";
import { get } from "axios";
import { UserContext } from "../../../context/userContext";
import Games from "../games/Games";
import { Container, Content, Header, App } from "./styles";

export default function HomeScreen() {
  const [games, setGames] = useState(undefined);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const URL = process.env.REACT_APP_API_URL;

      const { data } = await get(`${URL}/games`);

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

    fetchData().catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <App>
        <Header>
          <ion-icon name="menu-sharp"></ion-icon>
          <h1>OMEGA</h1>
          <ion-icon name="cart-outline"></ion-icon>
        </Header>
        <Content>
          {games === undefined
            ? "loading"
            : games.map(({ url, price, name, _id }, index) => (
                <Games
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
  );
}
