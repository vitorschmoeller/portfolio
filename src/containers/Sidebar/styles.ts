import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
export const Descricao = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 30px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

export const BotaoTema = styled.button`
  fontsize: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundo};
  border-radius: 12px;
  padding: 8px;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
