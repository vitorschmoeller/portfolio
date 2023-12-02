import Cabeca from '../../components/Cabeca'

const Header = () => (
  <div>
    <Cabeca>
      <div className="titulo">
        <h1>Perfil</h1>
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">Projetos</a>
        <a href="">Formulario</a>
        <a href="">GitHub</a>
      </nav>
      <input type="text" placeholder="| Search" />
    </Cabeca>
  </div>
)

export default Header
