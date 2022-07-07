import { useState } from 'react'
import { priceBRL } from '../../../shared/functions'
import { Container } from './styles'
import Game from '../game/Game'

export default function Games({ image, price, name }) {
  const [game, setGame] = useState(undefined)

  function gameContrast() {
    if (game === undefined) return
    return <Game game={game} setGame={setGame} />
  }

  return (
    <>
      {gameContrast()}
      <Container onClick={() => setGame({ image, price, name })}>
        <img src={image} alt="game" />
        <p>R$ {priceBRL(price)}</p>
      </Container>
    </>
  )
}
