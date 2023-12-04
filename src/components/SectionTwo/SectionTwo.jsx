import './SectionTwo.css'
import RodrigoPoda2 from '../../assets/fotos/rodrigo-podanosqui2.jpg'
import EducacaoLogo from '../../assets/logo/logo-educacao.png'
import ConquistaLogo from '../../assets/logo/logo-conquista.png'


function SectionTwo() {
  return (
    <div className="containerS2">
        <div className="aboutMeText">
            <h3>Sobre mim:</h3>
        </div>
        <div className="aboutMeContent">
            <img className="fotoPoda" src={RodrigoPoda2} alt="Foto Poda" />
            <div className="myDescryption">
                <div className="cardsExperience">
                    <div className="cardsContentAM">
                        <img src={ConquistaLogo} alt="Logo Conquista" />
                        <h4>Experiência</h4>
                        <p>Scrum Master / Agile Coach</p>
                        <p>Na empresa Undefined</p>
                    </div>
                    <div className="cardsContentAM">
                        <img src={EducacaoLogo} alt="Logo Educação" />
                        <h4>Educação</h4>
                        <p>Cursando Engenharia de Software</p>
                        <p>Na instituição Unicesumar</p>
                    </div>
                </div>
                <p className="AMDescription">Atualmente estou me preparando para assumir uma vaga como Engenheiro de Software Front End. Para isso, estou aprofundando meus estudos em JavaScript e React. Mas meu principal objetivo é me tornar um Desenvolvedor Full Stack.</p>
            </div>
            
        </div>
    </div>
  )
}

export default SectionTwo;