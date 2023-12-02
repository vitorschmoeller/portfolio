import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    padding-top: 80px
    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }

  img {
    width: 100%;
  }



`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
    nav {
      display: none;
    }
    input {
      display: none;
    }
  }
`
