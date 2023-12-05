import './Header.css'

function Header() {
  return (
    <div className="header">
        <div>
            <span>Rodrigo Podanosqui</span>
        </div>

        <div>
            <ul className="navegation">
                <li><a href="#Sobre">Sobre</a></li>
                <li><a href="#MinhasLinguagens">Minhas Linguagens</a></li>
                {/* <li><a href="#">Projetos</a></li> */}
                <li><a href="#Contato">Contatos</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;