import { P } from './styles'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

//Usando o children utilizamos ele como tipagem para pegar o conteudo filho de Titulo
const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
