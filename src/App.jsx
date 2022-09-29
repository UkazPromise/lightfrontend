import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Home from "./Home"
import Projects from './Projects'
import Team from './Team'

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Team/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App