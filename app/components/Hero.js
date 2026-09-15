import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='min-w-screen min-h-[50vh] flex items-center'>
      <div className="flex flex-col p-4 w-1/2">
        <div className="pt-5 montez text-9xl font-bold text-[#005ee5]" >Alfaz</div>
        <div className="pt-5 text-2xl"><h1 className=' heading font-black text-6xl'>Full Stack Developer</h1></div>
        <div className="pt-5 text-xl text-gray-500"><p className='para'>Turning ideas into modern, scalable web experiences.</p></div>
        <div className="pt-2 text-xl text-gray-500 "><p className='para'> I build professional websites and web applications with a focus on clean design, usability, and real-world requirements.</p></div>
      </div>
      <div className=" w-1/2 flex justify-center">
        <div className="">
            <Image className='rounded-full' src="/alfaz1.jpeg" alt="alfaz-img" width={300} height={300}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
