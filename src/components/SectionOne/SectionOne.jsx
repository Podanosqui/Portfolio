import './SectionOne.css'
import RodrigoPoda from '../../assets/fotos/rodrigo-podanosqui.jpg'
import GithubLogo from '../../assets/logo/github-icon.png'
import LinkedinLogo from '../../assets/logo/linkedin-icon.png'

function SectionOne() {
  return (
    <div className="container">
      <div className="separate">
        <div className="photo1">
          <img src={RodrigoPoda}/>
        </div>
        <div className="contentPhoto">
          <div className="contentText">
            <p>Olá, eu sou</p>
            <h1>Rodrigo Podanosqui</h1>
            <h2>Desenvolvedor Front End</h2>
          </div>
          
          <div className="buttonSocial">
            <button className="DownCurriculum" id="curriculum"><a href="#" target="_blank">Baixar CV</a></button>

            <button className="InfoContact" id="faleBtn"><a href="#Contact">Fale comigo</a></button>
          </div>

          <div className="buttonSocialIcon">
            <button className="linkedinBtn" id="linkedin"><a href="https://www.linkedin.com/in/rodrigo-podanosqui-939706230/" target="_blank"><img src={LinkedinLogo} alt="Logo LinkedIn"/></a></button>

            <button className="githubBtn" id="github"><a href="https://github.com/Podanosqui" target="_blank"><img src={GithubLogo} alt="Logo GitHub" /></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne;