import { Container, Content, H2 } from './styles'
import Form from '../form/Form'

export default function Registercreen() {
  return (
    <Container>
      <Content>
        <h1>ÔMEGA GAMES</h1>
        <Form />
        <H2 to="/login">Já tem uma conta? Faça login!</H2>
      </Content>
    </Container>
  )
}
