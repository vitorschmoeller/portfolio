import { useState } from 'react'
import { ThemeProvider } from 'styled-components' //importamos para utilizarmos o tema

import EstiloGlobal, { HeaderContainer } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import { Container } from './styles'
import Header from './containers/Header'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, SetEstaUsuandoTemaDark] = useState(false)

  function trocaTema() {
    SetEstaUsuandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal></EstiloGlobal>
      <HeaderContainer>
        <Header></Header>
      </HeaderContainer>
      <Container>
        <Sidebar trocaTema={trocaTema}></Sidebar>
        <main>
          <Sobre />
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
