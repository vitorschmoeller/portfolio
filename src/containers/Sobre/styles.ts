import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: flex;
  height: 100%;
  margin-top: 32px;
  margin-bottom: 64px;
  img {
    max-width: 100%;
    width: 100%;
  }
  img:nth-child(1) {
    height: 212px;
  }
  @media (max-width: 768px) {
    display: block;
    height: 100%;
    width: 100%;

    img:nth-child(1) {
      height: auto;
      width: 100%;
    }
  }
`
