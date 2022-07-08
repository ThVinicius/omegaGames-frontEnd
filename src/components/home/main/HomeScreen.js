import { useContext, useEffect, useState } from 'react';
import { get } from 'axios';
import { UserContext } from '../../../context/userContext';
import Games from '../games/Games';
import { Container, Content, Header, App } from './styles';

export default function HomeScreen() {
  const [games, setGames] = useState(undefined);
  const { user, setUser } = useContext(UserContext);

  useEffect(async () => {
    const URL = process.env.REACT_APP_API_URL;

    const { data } = await get(`${URL}/games`);

    setGames(data);

    const token = localStorage.getItem('token');

    if (token !== null && user.token === undefined) {
      user.token = token;
    }

    if (user.token !== undefined) {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        const { data: res } = await get(`${URL}/user`, config);
        const { email, name, picture, cart, purchases } = res;

        setUser({ ...user, email, name, picture, cart, purchases });
      } catch (error) {
        console.log(error);
      }
    }
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
            ? 'loading'
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
