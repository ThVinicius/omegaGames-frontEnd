import { useState } from 'react';
import { priceBRL } from '../../../shared/functions';
import { Container } from './styles';
import Game from '../game/Game';

export default function Games({ url, price, name, _id }) {
  const [game, setGame] = useState(undefined);

  function gameContrast() {
    if (game === undefined) return;
    return <Game game={game} setGame={setGame} />;
  }

  return (
    <>
      {gameContrast()}
      <Container onClick={() => setGame({ url, price, name, _id })}>
        <img src={url} alt="game" />
        <p>R$ {priceBRL(price)}</p>
      </Container>
    </>
  );
}
