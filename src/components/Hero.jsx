import { useEffect, useState } from 'react'
import avatar from '../assets/me.jpg'
import Reveal from './Reveal'

const ROLES = [
  'Desarrollador Fullstack',
  'Creador de APIs con Express',
  'Especialista en React Native',
  'Dev en JavaScript / TypeScript',
  'Dev en C++ con Crow',
]

function useTypewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index % ROLES.length]
    const speed = deleting ? 40 : 90

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return text
}

const STATS = [
  { value: '1+', label: 'Años de experiencia' },
  { value: '3+', label: 'Proyectos entregados' },
  { value: '1', label: 'Aplicacion en producción' },
]

function Hero() {
  const typed = useTypewriter()

  return (
    <section id="inicio" className="hero">
      <div className="hero-grid">
        <Reveal direction="up" className="hero-copy">
          <span className="badge">
            <span className="badge-dot" />
            Disponible para proyectos
          </span>

          <h1 className="hero-title">
            Hola, soy <span className="gradient-text">Jeremias Orosco</span>
          </h1>

          <h2 className="hero-role">
            <span className="typed">{typed}</span>
            <span className="typed-cursor" />
          </h2>

          <p className="hero-desc">
            Construyo APIs robustas con <strong>Express</strong> y aplicaciones
            móviles con <strong>React Native</strong>. Combino frontend y
            backend para crear productos rápidos, seguros y con una experiencia
            cuidada.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Contáctame
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={120} className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-glow" />
            <img src={avatar} alt="Retrato de Jeremias Orosco" className="avatar" />
            <div className="floating-chip chip-code">
              <span className="chip-icon">&lt;/&gt;</span>
              Express + Node
            </div>

             <div className="floating-chip chip-code2">
              <span className="chip-icon">&lt;/&gt;</span>
              C++ + Crow
            </div>

            <div className="floating-chip chip-mobile">
              <span className="chip-icon">📱</span>
              React Native
            </div>

          </div>
        </Reveal>
      </div>

      <a href="#habilidades" className="scroll-hint" aria-label="Bajar a habilidades">
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
      </a>
    </section>
  )
}

export default Hero
