import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Myskill from './Components/Myskill';
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
      {/* <div className="flex flex-col-reverse min-h-screen sm:flex sm:flex-row bg-black">
        <div className="left flex sm:flex flex-col w-full sm:w-1/2 justify-center items-center text-white mt-5 h-[40vh] sm:h-[80vh]">
          <h1 className=' text-4xl sm:text-7xl font-bold mb-5'>ALFAZ</h1>
          <p className='text-2xl text-center p-3' >Web Developer focused on clean UI, performance, and real-world solutions.</p>
          <div className="socials flex justify-center mt-5 mb-5 gap-4">
            <FaGithub size={24} />
            <FaLinkedin size={24} />
            <FaInstagram size={24} />
            <FaWhatsapp size={24} />
          </div>
          <button className='text-xs sm:text-xl font-bold rounded-full bg-blue-400 px-5 py-2'>Download Resume</button>
        </div>
        <div className="right flex justify-center sm:w-1/2 sm:min-h-[60vh] mt-5">
        <div className="mt-5">
          <img className='w-92 h-102 sm:w-66 sm:h-66 md:w-92 md:h-92 rounded-full object-cover shadow-lg' src="/me.jpg" alt="" />
        </div>
        </div>
      </div> */}
      <Hero/>

<Myskill/>
      <Services/>

<About/>
{/* <Projects/> */}

     
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
