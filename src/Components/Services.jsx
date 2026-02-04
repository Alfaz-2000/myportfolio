import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className='main w-full min-h-screen'>
      <h1 className='text-center text-3xl font-bold mt-10'>Services</h1>
      <div className="small-info flex w-full justify-center mt-10 gap-10">
        <span>Free Hosting suggestion</span>
        <span>Free conceltancy</span>
      </div>
      <div className="services-cards flex flex-col sm:flex-row justify-center items-center w-full mt-5 gap-4">
        <div className="card-wordpress w-[95%] sm:w-[25%] h-fit p-1 sm:h-[60vh] bg-[#FFFFFF] rounded-3xl border border-[#1A1A1A]">
        <div className="main-head flex flex-col">
            <h2 className='text-2xl font-bold mt-4 p-2'>Wordpress websites</h2>
            <span className='text-md p-2'>Great choice For starting it out </span>
            <p className='text-sm mt-2 text-gray-500 p-2'>This plan provides a fully customized WordPress website built for small businesses, startups, freelancers, and personal brands. The focus is on clean design, responsive layouts, essential integrations, and a smooth browsing experience.</p>
            <span className='mt-2 mx-4 p-2'>₹20,000</span>
        </div>
        <div className="sub-head mt-2" >
            <h3 className='p-2'>What you get:</h3>
            <div className="lists flex flex-col p-2">
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Professional looking Website</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                 <span>Fully Responsive</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>WhatsApp Integration</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Basic SEO</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Basic SEO</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Essential Plugins & Security</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Google Map Embeding</span>
              </div>  
            </div>
        </div>


        </div>

          <div className="card-wordpress w-[95%] sm:w-[25%] h-fit p-1 sm:h-[60vh] bg-[#FFFFFF] rounded-3xl border border-[#1A1A1A]">
        <div className="main-head flex flex-col">
            <h2 className='text-2xl font-bold mt-4 p-2'>Coding websites</h2>
            <span className='text-md p-2'>Great choice For Customized </span>
            <p className='text-sm mt-2 text-gray-500 p-2'>This plan provides a fully customized WordPress website built for small businesses, startups, freelancers, and personal brands. The focus is on clean design, responsive layouts, essential integrations, and a smooth browsing experience.</p>
            <span className='mt-2 mx-4 p-2'>₹20,000</span>
        </div>
        <div className="sub-head mt-2" >
            <h3 className='p-2'>What you get:</h3>
            <div className="lists flex flex-col p-2">
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Professional looking Website</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                 <span>Fully Responsive</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>WhatsApp Integration</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Basic SEO</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Basic SEO</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Essential Plugins & Security</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline />
                <span>Google Map Embeding</span>
              </div>  
            </div>
        </div>



        </div>
      </div>
    </div>
  )
}

export default Services
