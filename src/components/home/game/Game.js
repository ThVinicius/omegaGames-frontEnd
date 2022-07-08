import { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import { post } from 'axios';
import { priceBRL } from '../../../shared/functions';
import { Container, Content } from './styles';

export default function Game({ game, setGame }) {
  const { name, url, price, _id } = game;
  const { user } = useContext(UserContext);

  function addCart() {
    user.cart.push({ name, url, price, _id });

    const URL = process.env.REACT_APP_API_URL;

    const body = game;

    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = post(`${URL}/cart/${_id}`, body, config);

    promise
      .then(() => {
        console.log('deu certo');
      })
      .catch(() => {
        console.log('deu errado');
      });

    setGame(undefined);
  }

  return (
    <Container id="destaque game">
      <Content>
        <div>
          <h1>{name}</h1>
          <img src={url} alt="game" />
          <h2>R$ {priceBRL(price)}</h2>
        </div>
        <div>
          <button onClick={() => setGame(undefined)}>Cancelar</button>
          <button onClick={addCart}>Adicionar ao carrinho</button>
        </div>
      </Content>
    </Container>
  );
}
