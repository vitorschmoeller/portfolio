import EstiloGlobal, { HeaderContainer } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import { Container } from './styles'
import Header from './containers/Header'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <HeaderContainer>
        <Header></Header>
      </HeaderContainer>
      <Container>
        <Sidebar></Sidebar>
        <main>
          <Sobre />
          <Projetos></Projetos>
        </main>
      </Container>
    </>
  )
}

export default App
