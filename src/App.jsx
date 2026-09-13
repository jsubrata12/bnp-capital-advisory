import { useMemo } from 'react'
import Nav from './components/Nav.jsx'
import Rail from './components/Rail.jsx'
import Hero from './components/Hero.jsx'
import Thesis from './components/Thesis.jsx'
import Edge from './components/Edge.jsx'
import Model from './components/Model.jsx'
import Pillars from './components/Pillars.jsx'
import About from './components/About.jsx'
import Leadership from './components/Leadership.jsx'
import Partner from './components/Partner.jsx'
import Derisk from './components/Derisk.jsx'
import Governance from './components/Governance.jsx'
import Vision from './components/Vision.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { sections } from './data/content.js'
import { useScrollSpy } from './hooks/useScrollSpy.js'

export default function App() {
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const { active, progress } = useScrollSpy(ids)

  return (
    <>
      <Nav active={active} progress={progress} />
      <Rail active={active} />
      <main>
        <Hero />
        <Thesis />
        <Edge />
        <Model />
        <Pillars />
        <About />
        <Leadership />
        <Partner />
        <Derisk />
        <Governance />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
