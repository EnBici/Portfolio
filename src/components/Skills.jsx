import Reveal from './Reveal'
import expressIcon from '../assets/express.png'
import reactIcon from '../assets/react.png'
import jsIcon from '../assets/javascript.png'
import cssIcon from '../assets/css.png'
import cicon from '../assets/c++.png'

const SKILLS = [
  {
    name: 'Express',
    level: 90,
    icon: <img src={expressIcon} alt="Express" />,
  },
  {
    name: 'React Native',
    level: 85,
    icon: (
      <img src={reactIcon} alt="React Native" />
    ),
  },
  {
    name: 'React',
    level: 88,
    icon: (
      <img src={reactIcon} alt="React Native" />
    ),
  },
  {
    name: 'JavaScript',
    level: 92,
    icon: (
      <img src={jsIcon} alt="JavaScript" />
    ),
  },
  {
    name: 'HTML & CSS',
    level: 95,
    icon: (
      <img src={cssIcon} alt="HTML & CSS" />
    ),
  },
  {
    name: 'C++',
    level: 85,
    icon: (
      <img src={cicon} alt="C++" />
    ),
  },
]

function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="section-head">
        <Reveal>
          <span className="section-eyebrow">Tecnologías</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Habilidades <span className="gradient-text">técnicas</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-sub">
            Stack con el que diseño, desarrollo y pongo en producción soluciones
            completas de punta a punta.
          </p>
        </Reveal>
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 70} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <div className="skill-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <span
                  className="skill-fill"
                  style={{ '--level': `${skill.level}%` }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
