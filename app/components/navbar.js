import Link from 'next/link'
import React from 'react'

const navbar = () => {
    const menu = ["Home","Projects","Services","AboutMe", "Contact"]

  return (
    <div className='bg-[#005ee5] text-[#ffffff] min-w-screen min-h-[7vh] flex justify-around pt-3'>
      <div className="">Codewithalfaz</div>
      <div className=" flex gap-10">
        {menu.map((item)=>(<Link key={item} id='#' href="/Home">{item}</Link>))}
      </div>
      <div className="">Resume</div>
    </div>
  )
}

export default navbar
