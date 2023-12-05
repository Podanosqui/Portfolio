import './SectionThree.css'
import IconCheck from '../../assets/logo/icon-check.png'

function SectionThree() {
  return (
    <div className="containerS3" id='MinhasLinguagens'>
        <div className="titleSkills">
            <h4>Minhas linguagens</h4>
        </div>

        <div className="separaDev">
        <div className="containerSkills">
          <h5>Desenvolvimento Frontend</h5>
          <div className="separaSkill">
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>HTML</span>
                <p>Intermediário</p>
              </div>
            </div>
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>CSS</span>
                <p>Intermediário</p>
              </div>
            </div>
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>JavaScript</span>
                <p>Básico</p>
              </div>
            </div>
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>React</span>
                <p>Básico</p>
              </div>
            </div>
          </div>
        </div>

        <div className="containerSkills">
          <h5>Desenvolvimento BackEnd</h5>
          <div className="separaSkill">
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>JavaScript</span>
                <p>Básico</p>
              </div>
            </div>
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>C e C++</span>
                <p>Básico</p>
              </div>
            </div>
            <div className="componentSkills">
              <img src={IconCheck} alt="Icon Check" />
              <div className="skillDescription">
                <span>Git</span>
                <p>Básico</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SectionThree;