import { P } from './styles'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

//Usando o children utilizamos ele como tipagem para pegar o conteudo filho de Titulo
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
