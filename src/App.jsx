import { useState } from 'react'
import Navbar from './Components/Navbar'
import Myskill from './Components/Myskill';
import Services from './Components/Services';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";




function App() {


  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse sm:flex sm:flex-row bg-black">
        <div className="left flex sm:flex flex-col w-full sm:w-1/2 justify-center  items-center text-white mt-5 h-[30vh] sm:h-[80vh]">
          <h1 className='text-7xl font-bold'>ALFAZ</h1>
          <div className="socials flex justify-center mt-5 mb-5 gap-4">
            <FaGithub size={24} />
            <FaLinkedin size={24} />
            <FaInstagram size={24} />
            <FaWhatsapp size={24} />
          </div>
          <button className='text-xs sm:text-xl font-bold rounded-full bg-blue-400 px-5 py-2'>Download Resume</button>
        </div>
        <div className="right flex justify-center sm:w-1/2 h-[60vh]   mt-5">
        <div className="mt-5">
          <img className='w-full h-[60vh]' src="/me.png" alt="" />
        </div>
        </div>
      </div>

      <Services/>

<Myskill/>
     
    </>
  )
}

export default App
