import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open, setopen] = useState(false)

    const handleClick=()=>{
        setopen(false)
    }
  return (
    <>
    
    <nav className='sm:hidden flex min-h-[10vh] bg-white justify-between items-center md:m-4 p-2 sticky top-0  z-[9999]'>
        <div className=" logo font-bold justify-center text-lg mx-10 text-[#34C759]">HAS</div>
        <div className="text-2xl px-2">
            <button onClick={()=>setopen(!open)}><GiHamburgerMenu /></button>
        </div>
    </nav>
    {open &&(
        <div className=" flex flex-col my-5 p-4 space-y-5 items-center min-h-screen bg-white sticky top-0 z-[9999]">
        <a onClick={handleClick} href="#Home">Home</a>
        <a onClick={handleClick} href="#About">About</a>
        <a onClick={handleClick} href="#Skills">Skills</a>
        <a onClick={handleClick} href="#Projects">Projects</a>
        <a onClick={handleClick} href="#Services">Services</a>
        <a onClick={handleClick} href="#Contact">Contact</a>
        <a onClick={handleClick} href='/Alfaz_resume.pdf' className='bg-[#34C759] rounded-full px-5 py-2'>Download Resume</a>
      </div>
    )}

    <nav className='hidden sm:flex justify-around bg-white items-center h-16 sticky top-0'>
      <div className="logo text-[#34C759] font-bold text-2xl">HAS</div>
      <div className=" flex gap-5">
        <a onClick={handleClick} href="#Home">Home</a>
        <a onClick={handleClick} href="#About">About</a>
         <a onClick={handleClick} href="#Skills">Skills</a>
        <a onClick={handleClick} href="#Projects">Projects</a>
        <a onClick={handleClick} href="#Services">Services</a>
        <a onClick={handleClick} href="#Contact">Contact</a>
      </div>
      <div className="">
        <a onClick={handleClick} href='/Alfaz_resume.pdf' className='border border-[#34C759] rounded-full px-5 py-2'>Download Resume</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar
