import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className='text-white bg-black p-5 mt-5'>
            <div className="main flex flex-col w-full min-h-[20vh] justify-center items-center">
                    <div className="socials flex  mb-5 gap-10">
                        <a href="https://github.com/Alfaz-2000" target="_blank" rel="noopener noreferrer"><FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
                        <a href="https://www.linkedin.com/in/has-alfaz-9929b3240/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
                        <a href="https://www.instagram.com/hasalfaz/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
                        <a href="https://wa.me/917406825154" target="_blank" rel="noopener noreferrer"> <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></a>
                </div>
            <div className="copyright text-gray-600 text-xs sm:text-base"> © 2026 HasAlfaz. All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer
