import React from 'react'
import './App.css'
import { Brand, Cta, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './container'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
