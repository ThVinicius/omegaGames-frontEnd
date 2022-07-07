import { useEffect, useState } from 'react'
import { get } from 'axios'
import { Container, Content, Header } from './styles'

export default function HomeScreen() {
  const [games, setGames] = useState()

  useEffect(() => {
    const URL = process.env.REACT_APP_API_URL

    const promise = get(`${URL}/games`)

    promise.then(({ data }) => {
      setGames(data)
    })
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <ion-icon name="menu-sharp"></ion-icon>
          <h1>OMEGA</h1>
          <ion-icon name="cart-outline"></ion-icon>
        </Header>
      </Content>
    </Container>
  )
}
