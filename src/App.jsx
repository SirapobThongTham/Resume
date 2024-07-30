import { useState } from 'react'
import './App.css'

//Components
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Proflie/Profile'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Profile />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </>
  )
}

export default App
