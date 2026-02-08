import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
    return (
        <section className='w-full min-h-screen mt-5 p-2 md:p-5 mb-5'>
            <div className="">
                <h1 className='text-center text-4xl'>Projects</h1>
            </div>
            <div className="rnelevators flex flex-col-reverse md:flex-row w-full min-h-[80vh] justify-center items-center p-2 md:p-10 border border-amber-300">
                <div className="left flex flex-col w-full md:w-1/2  p-5 md:px-10 space-y-1 md:space-y-4">
                    <h2 className='md:text-6xl'>R&N Elevators</h2>
                    <p className='text-gray-500'>Designed and developed the official website for R N Elevators to strengthen their online presence and enhance business credibility. The website was structured to present their project portfolio, reinforce brand credibility through industry partnerships, and support lead generation.</p>
                    <div className="sub-main text-xs md:text-base space-y-4">
                    <h4 className='text-lg'>Project Focus:</h4>
                    <div className=" flex gap-2 items-center">
                        <IoArrowForwardCircleOutline className='text-[#0f0]' />
                        <span>Strengthening digital presence and brand credibility</span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <IoArrowForwardCircleOutline className='text-[#0f0]' />
                        <span>Showcasing executed projects in a structured format</span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <IoArrowForwardCircleOutline className='text-[#0f0]' />
                        <span>Reinforcing trust through industry partnerships</span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <IoArrowForwardCircleOutline className='text-[#0f0]' />
                        <span>Optimizing inquiry flow to support lead generation</span>
                    </div>
                    <div className="visitlink ">
                        <a href="https://rnelevators.com/" className=" flex gap-3 mt-4 px-4 items-center text-gray-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer"><span>Visit Website</span><GoLinkExternal /></a>
                    </div>
                    </div>
                </div>
                <div className="right w-full md:w-1/2">
                    <div className="p-10">
                        <img className='w-full' src="/rnlogo.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className="veebrite flex flex-col-reverse md:flex-row-reverse w-full min-h-[80vh] justify-center items-center p-2 md:p-10 border border-amber-950">
                <div className="left flex flex-col w-full md:w-1/2 p-5 md:px-10 space-y-1 md:space-y-4">
                    <h2 className='text-xl md:text-6xl'>Veebrite</h2>
                    <p className='text-gray-500 text-sm md:text-base'>Designed and developed the official website for Veebrite to establish a strong and modern digital presence. The website focuses on showcasing architectural and design expertise through a clean, visually structured layout that reflects the agency’s brand identity and professional standards.</p>
                    <div className="sub-main text-xs md:text-base space-y-4">
                        <h4 className='text-sm md:text-lg'>Project Focus:</h4>
                        <div className=" flex gap-2 items-center ">
                            <IoArrowForwardCircleOutline className='text-[#0f0]' />
                            <span>Showcasing architectural and design expertise</span>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <IoArrowForwardCircleOutline className='text-[#0f0]' />
                            <span>Structuring content for clear service communication</span>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <IoArrowForwardCircleOutline className='text-[#0f0]' />
                            <span>Designing a visually engaging user interface</span>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <IoArrowForwardCircleOutline className='text-[#0f0]' />
                            <span>Supporting client engagement through intuitive navigation</span>
                        </div>
                        <div className="visitlink ">
                            <a href="https://veebrite.com/" className=" flex gap-3 mt-4 px-4 items-center text-gray-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer"><span>Visit Website</span><GoLinkExternal /></a>
                        </div>
                    </div>
                </div>
                <div className="right w-full md:w-1/2 mb-5">
                    <div className="md:p-10 min-h-[20%]">
                        <img className='w-full md:min-h-[20%]' src="/vblogo.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
