import { useState } from 'react'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Employee from './components/Employee'
import Team from './components/Team'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import './App.css'

function App() {
  
  return (
    <>

    <Navbar/>
    <Aboutus/>
    <Employee/>
    <Team/>
    <Clients/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
