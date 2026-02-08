import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <div className='main w-full min-h-screen mt-5'>
      <h2 className='text-center text-xl font-bold sm:text-2xl md:text-4xl '>Contact Me</h2>
      <p className='text-center text-xs py-2 px-16 sm:text-xl mt-2 sm:mt-5 text-gray-500'>Contact me to discuss opportunities, projects, or collaborations.</p>
      <div className="myinfo flex flex-col sm:flex-row gap-5 justify-center items-center mt-5 min-h-[50vh]">
        <div className="mysocial sm:w-1/3 mt-3">
        <span className='flex justify-center text-3xl sm:text-6xl mb-3 sm:mb-10'><IoShareSocialOutline /></span>
          <h3 className='text-center mb-2 text-sm sm:text-lg'>Social-Meadia</h3>
          <div className="socials flex justify-center mb-5 gap-4">
            <a href="https://github.com/Alfaz-2000" target="_blank" rel="noopener noreferrer"><FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
            <a href="https://www.linkedin.com/in/has-alfaz-9929b3240/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
            <a href="https://www.instagram.com/hasalfaz/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
             <a href="https://wa.me/917406825154" target="_blank" rel="noopener noreferrer"> <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
          </div>
        </div>
        <div className="myphone sm:w-1/3 mt-3">
        <span className='flex justify-center text-2xl sm:text-5xl mb-3 sm:mb-10'><FiPhoneCall /></span>
          <h3 className='text-center mb-2 text-lg'>Phone</h3>
          <a href="tel:+917406825154" className=" flex justify-center sm:text-lg hover:underline">+91 74068 25154</a>
        </div>
        <div className="mymail sm:w-1/3 mt-3">
        <span className='flex justify-center text-3xl sm:text-6xl mb-3 sm:mb-10'><CiMail /></span>
        <h3 className='text-center mb-2 text-lg'>E-mail</h3>
          <a className='flex justify-center text-lg' href="mailto:alfazappu74@gmail.com" target="_blank" rel="noopener noreferrer">alfazappu74@gmail.com</a>
        </div>
      </div>

    </div>
  )
}

export default Contact
