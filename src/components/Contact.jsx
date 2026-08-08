import Reveal from './Reveal'

function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="contact-wrap">
        <Reveal direction="up">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">
            ¿Tienes un proyecto en mente?
            <br />
            <span className="gradient-text">Hablemos.</span>
          </h2>
          <p className="section-sub">
            Estoy abierto a colaboraciones, proyectos freelance y oportunidades
            laborales. Respondo en menos de 24 horas.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:jerejere660@gmail.com">jerejere660@gmail.com</a>
            </li>
            <li>
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                github.com/EnBici
              </a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                /in/JeremiasOrosco
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
