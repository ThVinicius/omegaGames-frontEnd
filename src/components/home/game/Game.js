import { useContext } from 'react'
import { UserContext } from '../../../context/userContext'
import { priceBRL } from '../../../shared/functions'
import { Container, Content } from './styles'

export default function Game({ game, setGame }) {
  const { name, image, price } = game
  const { user } = useContext(UserContext)

  function addCart() {
    user.cart.push({ name, image, price })

    setGame(undefined)
  }

  return (
    <Container id="destaque game">
      <Content>
        <div>
          <h1>{name}</h1>
          <img src={image} alt="game" />
          <h2>R$ {priceBRL(price)}</h2>
        </div>
        <div>
          <button onClick={() => setGame(undefined)}>Cancelar</button>
          <button onClick={addCart}>Adicionar ao carrinho</button>
        </div>
      </Content>
    </Container>
  )
}
