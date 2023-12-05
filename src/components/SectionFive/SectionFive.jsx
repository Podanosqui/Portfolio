import './SectionFive.css'
import IconEmail from '../../assets/logo/icon-email.png'

function SectionFive() {
  return (
    <div className="containerS5" id='Contato'>
        <p>Quer saber mais?</p>
        <h5>Entre em contato comigo</h5>

        <div className="S5Buttons">
            <button>
                <a href="mailto:rodrigohenrique2210@gmail.com" target='_blank'><img className='iconS5' src={IconEmail} alt="Meu email" />Email</a>
        
                
                <a href="https://www.linkedin.com/in/rodrigo-podanosqui-939706230/" target='_blank'><img className='iconS5' src={IconEmail} alt="Meu linkedin" />Linkedin</a>
            </button>
        </div>

        <nav className='navS5'>
            <ul>
                <li><a href="#Sobre">Sobre</a></li>
                <li><a href="#MinhasLinguagens">Minhas Linguagens</a></li>
                {/* <li><a href="#">Projects</a></li> */}
                <li><a href="#Contato">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default SectionFive;