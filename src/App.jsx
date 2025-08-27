import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Navbar />

      <section><Hero /></section>

      <section id='about'><About /></section>

      <section id='skills'><Skills /></section>

      <section id='projects'><Projects /></section>
    </>
  )
}

export default App