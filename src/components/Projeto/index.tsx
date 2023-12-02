// import styled from 'styled-components'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'
//componente estilizado podemos utilizar
// const Card = styled.div`
//   border: 1px solid #c1c1c1;
//   padding: 16px;
// `

const Projeto = () => (
  //Isso acaba com o rendimento; tem que ser feito fora

  //   const Card = styled.div`
  //   border: 1px solid #c1c1c1;
  //   padding: 16px;
  // `
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
