import './Header.css'

function Header() {
  return (
    <div className="header">
        <div>
            <span>Rodrigo Podanosqui</span>
        </div>

        <div>
            <ul className="navegation">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Experiências</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;