import React from 'react'
import { color, motion } from "motion/react"
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
        { icon: SiC, color: "#A8B9CC" },
  { icon: SiPython, color: "#3776AB" },
  { icon: SiR, color: "#276DC3" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiPhp, color: "#777BB4" },
  { icon: SiHtml5, color: "#E34F26" },
  { icon: SiCss3, color: "#1572B6" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiTailwindcss, color: "#06B6D4" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiExpress, color: "#000000" },
  { icon: SiEjs, color: "#B4CA65" },
  { icon: SiMysql, color: "#4479A1" },
  { icon: SiMongodb, color: "#47A248" },

    ];
    const Lower = [
        // CMS & Tools
        { icon: SiXampp, color: "#FB7A24" },
  { icon: SiBootstrap, color: "#7952B3" },
  { icon: SiWordpress, color: "#21759B" },
  { icon: SiElementor, color: "#92003B" },
  { icon: SiPostman, color: "#FF6C37" },
  { icon: SiFigma, color: "#F24E1E" },
  { icon: SiAdobephotoshop, color: "#31A8FF" },
  { icon: SiAdobeillustrator, color: "#FF9A00" },
  { icon: SiAutodesk, color: "#0696D7" },
  { icon: SiUbuntu, color: "#E95420" }
    ]

    return (
        <div id='Skills' className='relative -z-10 mx-auto mt-5 mb-5 overflow-hidden scroll-mt-20'>
            <h1 className='text-center text-2xl font-bold md:text-3xl md:mb-5'>My Skill's</h1>
            <div className="text-gray-600 text-xs md:text-xl font-bold text-center mb-5 p-5">
            <span>The Programming Languages, FramWorks and tools Which Used and Learned so far!</span>
            </div>
                
            <div className="flex overflow-hidden mb-5 mt-5">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear"}}
                    className="flex shrink-0">
                    {upper.map(({ icon: Icon, color }, index) => {
                        return <Icon key={index} style={{color}} className=" h-10 w-20 pr-1 md:h-40 md:w-30 md:pr-20" />
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear" }}
                    className="flex shrink-0">
                    {upper.map(({ icon: Icon, color }, index) => {
                        return <Icon key={index} style={{color}} className=" h-10 w-20 pr-1 md:h-40 md:w-30 md:pr-20" />
                    })}
                </motion.div>
            </div>
            <div className="flex overflow-hidden mb-5 mt-5">
                <motion.div
                    initial={{ x: "-100%"}}
                    animate={{ x:  0 }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear"}}
                    className="flex shrink-0">
                    {Lower.map(({ icon: Icon, color }, index) =>  {
                        return <Icon key={index} style={{color}} className=" h-10 w-20 pr-1 md:h-20 md:w-30 md:pr-20" />
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: "-100%"}}
                    animate={{ x:  0 }}
                    transition={{ duration: 30, repeat: Infinity, ease:"linear" }}
                    className="flex shrink-0">
                    {Lower.map(({ icon: Icon, color }, index) => {
                        return <Icon key={index} style={{color}} className=" h-10 w-20 pr-1 md:h-20 md:w-30 md:pr-20" />
                    })}
                </motion.div>
            </div>

        </div>
    )
}

export default Marquee
