import React from 'react'
import Page from "./components/Page.jsx"
// import Product from "./components/Product.jsx"
import Features from './components/Features.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div>
      <Hero />
      <Page />
      <Features />
      <Services />
      <Contact />
    </div>
  )
}

export default App