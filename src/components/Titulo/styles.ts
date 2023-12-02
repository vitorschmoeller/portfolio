import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tituloh1 = styled.h2`
  font-size: 16px;
  font-weight: bold;
`
