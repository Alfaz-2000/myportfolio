import React from 'react'

const About = () => {
  return (
    <div id='About' className='main w-full min-h-screen mt-5 mb-5 '>
      <h1 className='text-center text-lg font-bold'>About Me</h1>
      <div className="sub-main flex flex-col-reverse sm:flex-row w-full min-h-[60vh] gap-5 p-5 mt-5 sm:mt-10">
        <div className="left flex flex-col justify-center items-center sm:w-1/2 p-5 px-16">
            <h2 className='text-4xl sm:6xl md:7xl text-center mb-5 text-[#0f0]'>Alfaz</h2>
            <p className='text-[#6b6e74]'>I’m a web developer who enjoys building clean, responsive, and user-friendly websites. I work with modern technologies like React, Tailwind CSS, WordPress, and backend tools to create practical solutions for real-world needs. I’ve also delivered WordPress websites for real clients, focusing on clean design, performance, and reliability. Whether it’s a business website, a custom web application, or a personal project, I’m always learning, improving, and growing as a developer.</p>
        </div>
        <div className="right flex justify-center items-center sm:w-1/2">
        <img className='w-92 h-102 sm:w-66 sm:h-66 md:w-72 md:h-102 rounded-full object-cover shadow-lg border-4 border-white' src="/me.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About
