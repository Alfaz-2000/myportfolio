import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Projects = () => {
    return (
        <section className='w-full min-h-screen mt-5 p-5'>
            <div className="">
                <h1 className='text-center text-4xl'>Projects</h1>
            </div>
            <div className="rnelevators flex w-full min-h-[80vh]">
                <div className="left flex flex-col w-1/2 p-7 px-7 space-y-4">
                    <h2 className=''>R&N Elevators</h2>
                    <p>Designed and developed the official website for R N Elevators to strengthen their online presence and enhance business credibility. The website was structured to present their project portfolio, reinforce brand credibility through industry partnerships, and support lead generation.</p>
                    <h4>Project Focus:</h4>
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
                </div>
                <div className="right w-1/2">
                    <div className="p-10 min-h-[20%]">
                        <img className='w-full min-h-[20%]' src="/rnpc.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="veebrite flex w-full min-h-[80vh]">
                <div className="left flex flex-col w-1/2 p-7 px-7 space-y-4">
                    <h2 className=''>veebrite</h2>
                    <p>Designed and developed the official website for Veebrite to establish a strong and modern digital presence. The website focuses on showcasing architectural and design expertise through a clean, visually structured layout that reflects the agency’s brand identity and professional standards.</p>
                    <h4>Project Focus:</h4>
                    <div className=" flex gap-2 items-center">
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
                </div>
                <div className="right w-1/2">
                    <div className="p-10 min-h-[20%]">
                        <img className='w-full min-h-[20%]' src="/vbpc.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
