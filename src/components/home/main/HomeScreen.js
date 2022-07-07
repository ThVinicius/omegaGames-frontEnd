import { Container, Content, Header } from './styles'

export default function HomeScreen() {
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
