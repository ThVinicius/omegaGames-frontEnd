import { useEffect, useState } from 'react'
import { get } from 'axios'
import Games from '../games/Games'
import { Container, Content, Header, App } from './styles'

export default function HomeScreen() {
  const [games, setGames] = useState(undefined)

  useEffect(() => {
    const URL = process.env.REACT_APP_API_URL

    const promise = get(`${URL}/games`)

    promise.then(({ data }) => {
      setGames(data)
    })
  }, [])

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
            : games.map(({ url, price, name }, index) => (
                <Games name={name} image={url} price={price} key={index} />
              ))}
        </Content>
      </App>
    </Container>
  )
}
