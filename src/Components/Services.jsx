import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div id='Services' className='main w-full min-h-screen'>
      <h1 className='text-center text-2xl md:text-3xl font-bold mt-10'>Services</h1>
      <div className="small-info flex w-full justify-center mt-10 gap-10">
        <span className='text-sm'>Free Hosting suggestion</span>
        <span className='text-sm'>Free conceltancy</span>
      </div>
      <div className="services-cards flex flex-col lg:flex-row justify-center items-center w-full mt-5 p-5 gap-4">
        <div className="card-wordpress w-full lg:w-[25%] h-fit p-1 lg:min-h-[60vh] bg-[#FFFFFF] rounded-3xl border border-[#1A1A1A]">
        <div className="main-head flex flex-col">
            <h2 className='text-2xl font-bold mt-4 p-4'>Wordpress websites</h2>
            <span className='text-md p-2 px-4'>Great choice For starting it out </span>
            <p className='text-sm mt-2 text-gray-500 p-2 px-4'>A fully customized WordPress website designed for small businesses and personal brands, focusing on clean design and responsive performance.</p>
        </div>
        <div className="sub-head mt-2" >
            <h3 className='p-2 px-5 font-bold'>What you get:</h3>
            <div className="lists flex flex-col p-2 px-4">
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Professional looking Website</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                 <span className='text-sm'>Fully Responsive</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>WhatsApp Integration</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Basic SEO</span>
              </div>
              
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Essential Plugins & Security</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Google Map Embeding</span>
              </div>  
            </div>
        </div>


        </div>

          <div className="card-wordpress w-full lg:w-[25%] h-fit p-1 lg:min-h-[60vh] bg-[#FFFFFF] rounded-3xl border border-[#1A1A1A] scroll-mt-20">
        <div className="main-head flex flex-col">
            <h2 className='text-2xl font-bold mt-4 p-4'>Coding websites</h2>
            <span className='text-md p-2 px-4'>Perfect for fully customized solutions </span>
            <p className='text-sm mt-2 text-gray-500 p-2 px-4'>A fully custom-designed and custom-coded website built for performance, scalability, and responsive design.</p>
        </div>
        <div className="sub-head mt-2" >
            <h3 className='p-2 px-5 font-bold'>What you get:</h3>
            <div className="lists flex flex-col p-2 px-4">
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Fully custom design</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                 <span className='text-sm'>Responsive across all devices</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Clean and maintainable code</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>SEO-friendly structure</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Secure and scalable setup</span>
              </div>
              <div className=" flex gap-2 items-center">
                 <IoArrowForwardCircleOutline className='text-[#0f0]'/>
                <span className='text-sm'>Custom features based on project needs</span>
              </div> 
            </div>
        </div>



        </div>
      </div>
    </div>
  )
}

export default Services
