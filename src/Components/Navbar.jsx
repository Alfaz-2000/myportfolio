import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open, setopen] = useState(false)
  return (
    <>
    
    <nav className='sm:hidden flex min-h-[10vh] bg-white justify-between items-center md:m-4 p-2 sticky top-0'>
        <div className=" logo font-bold justify-center text-lg mx-10 text-[#34C759]">HAS</div>
        <div className="text-2xl px-2">
            <button onClick={()=>setopen(!open)}><GiHamburgerMenu /></button>
        </div>
    </nav>
    {open &&(
        <div className=" flex flex-col my-5 p-4 space-y-5 items-center min-h-screen bg-white sticky top-0">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
        <a href='/Alfaz_resume.pdf' className='bg-[#34C759] rounded-full px-5 py-2'>Download Resume</a>
      </div>
    )}

    <nav className='hidden sm:flex justify-around bg-white items-center h-16 sticky top-0'>
      <div className="logo text-[#34C759] font-bold text-2xl">HAS</div>
      <div className=" flex gap-5">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
         <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="">
        <a href='/Alfaz_resume.pdf' className='border border-[#34C759] rounded-full px-5 py-2'>Download Resume</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar
