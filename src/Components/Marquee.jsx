import React from 'react'
import { motion } from "motion/react"
import {
    SiC,
    SiPython,
    SiR,
    SiJavascript,
    SiPhp,
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiEjs,
    SiMysql,
    SiMongodb,
    SiWordpress,
    SiElementor,
    SiPostman,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAutodesk,
    SiUbuntu,
    SiXampp
} from "react-icons/si";


const Marquee = () => {
    const upper = [
        // Programming Languages
        SiC,
        SiPython,
        SiR,
        SiJavascript,
        SiPhp,

        // Frontend
        SiHtml5,
        SiCss3,
        SiReact,
        SiTailwindcss,


        // Backend
        SiNodedotjs,
        SiExpress,
        SiEjs,

        // Database
        SiMysql,
        SiMongodb,


    ];
    const Lower = [
        // CMS & Tools
        SiXampp,
            SiBootstrap,
            SiWordpress,
            SiElementor,
            SiPostman,
            SiFigma,
            SiAdobephotoshop,
            SiAdobeillustrator,
            SiAutodesk,
            SiUbuntu
    ]

    return (
        <div id='Skills' className='container mx-auto mt-5 mb-5 overflow-x-hidden'>
            <h1 className='text-center md:text-4xl mb-5'>My Skill's</h1>
            <div className="text-gray-600 md:text-ls text-center mb-5 p-5">
            <span>The Programming Languages, FramWorks and tools Which Used and Learned so far!</span>
            </div>
                
            <div className="flex mb-5 mt-5">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shirnk-0">
                    {upper.map((Icon, index) => {
                        return <Icon key={index} className=" h-10 w-36 pr-1 md:h-40 md:w-56 md:pr-20" />
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear" }}
                    className="flex flex-shirnk-0">
                    {upper.map((Icon, index) => {
                        return <Icon key={index} className=" h-10 w-36 pr-1 md:h-40 md:w-56 md:pr-20" />
                    })}
                </motion.div>
            </div>
            <div className="flex mb-5 mt-5">
                <motion.div
                    initial={{ x: "-100%"}}
                    animate={{ x:  0 }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shirnk-0">
                    {Lower.map((Icon, index) => {
                        return <Icon key={index} className=" h-10 w-36 pr-1 md:h-40 md:w-56 md:pr-20" />
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: "-100%"}}
                    animate={{ x:  0 }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear" }}
                    className="flex flex-shirnk-0">
                    {Lower.map((Icon, index) => {
                        return <Icon key={index} className=" h-10 w-36 pr-1 md:h-40 md:w-56 md:pr-20" />
                    })}
                </motion.div>
            </div>

        </div>
    )
}

export default Marquee
