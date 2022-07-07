import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #ffffff;
`
const Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 10px;
  background-color: #1156be;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 40px;
  }

  h1 {
    font: normal 400 32px 'Saira Stencil One', cursive;
  }
`

export { Container, Content, Header }
