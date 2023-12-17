import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contacts from './components/contacts/contacts'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
      <Nav />
      <br/>
      <br/>
      <br/>
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contacts />


    </>
  )
}

export default App