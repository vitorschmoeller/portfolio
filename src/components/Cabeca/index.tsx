import styled from 'styled-components'

const Cabeca = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    letter-spacing: 2px;
    margin-left: 14px;
  }

  input {
    border: none;
    background-color: #eee;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    font-weight: bold;
  }

  a {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`

export default Cabeca
