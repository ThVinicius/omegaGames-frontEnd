import { useEffect, useState } from "react";
import { get } from "axios";
import Games from "../games/Games";
import { Container, Content, Header, App } from "./styles";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import { AuthContext, useAuth } from "../../../context/auth";

//Alterei o userContext para authcontext e não funcionou
//

export default function HomeScreen() {
  const [games, setGames] = useState(undefined);
  //const { setNavBar } = useContext(AuthContext);

  const { user, setNavbarMenu, setNavbarCart } = useAuth();

  useEffect(() => {
    const URL = process.env.REACT_APP_API_URL;

    const promise = get(`${URL}/games`);

    promise.then(({ data }) => {
      setGames(data);
    });
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
    )
  );
}
