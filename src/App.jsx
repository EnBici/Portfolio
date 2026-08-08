import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
{/*import Projects from './components/Projects'*/}
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
