import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [open, setopen] = useState(false)
  return (
    <>
    
    <nav className='sm:hidden flex bg-white justify-between items-center m-4 p-2'>
        <div className=" logo text-[#111111] font-medium justify-center mx-2">HasAlfaz</div>
        <div className="">
            <button onClick={()=>setopen(!open)}><RxHamburgerMenu /></button>
        </div>
    </nav>
    {open &&(
        <div className=" flex flex-col my-10 p-4 gap-16 items-center h-[80vh] bg-white">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
      </div>
    )}

    <nav className='hidden sm:flex justify-around bg-white items-center h-16'>
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
