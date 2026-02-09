import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Marquee from './Components/Marquee';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";




function App() {


  return (
    <>
      <Navbar />
     
      <Hero/>

      <Marquee/>


      <Services/>

      <About/>
      
     <Projects/>

     
      <Contact/>
      
      <Footer/>
    </>
  )
}

export default App
