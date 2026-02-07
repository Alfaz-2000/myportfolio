import React from 'react'

const Hero = () => {
    return (
        <div className='main flex flex-col w-full min-h-screen bg-black text-white justify-center items-center'>
            <div className="sub-main w-full flex-col p-5">
                <div className="name">
                    <h1 className='text-7xl text-center'>Has Alfaz</h1>
                </div>
            </div>
            <div className="brefme w-full text-center ">
                <p className='text-xs text-gray-500'>I'm a Web Developer focused on clean UI, performance, and real-world solutions.</p>
            </div>
        </div>
    )
}

export default Hero
