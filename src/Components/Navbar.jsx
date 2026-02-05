import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open, setopen] = useState(false)
  return (
    <>
    
    <nav className='sm:hidden flex min-h-[10vh] bg-white justify-between items-center md:m-4 p-2 sticky top-0'>
        <div className=" logo font-bold justify-center text-2xl mx-2 text-[#34C759]">HasAlfaz</div>
        <div className="text-2xl px-2">
            <button onClick={()=>setopen(!open)}><GiHamburgerMenu /></button>
        </div>
    </nav>
    {open &&(
        <div className=" flex flex-col my-10 p-4 gap-16 items-center h-[80vh] bg-white sticky top-0">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
      </div>
    )}

    <nav className='hidden sm:flex justify-around bg-white items-center h-16 sticky top-0'>
      <div className="logo text-[#111111] font-medium">HasAlfaz</div>
      <div className=" flex gap-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar
