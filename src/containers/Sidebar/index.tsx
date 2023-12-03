import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import styled from 'styled-components'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Aside = styled.aside`
  display: block;
  text-align: center;
`

const Sidebar = (props: Props) => (
  <Aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Vitor Schmoeller</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        vitorschmoeller
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </Aside>
)

export default Sidebar
