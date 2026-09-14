import React from 'react'
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  PhoneIcon,
  InstagramIcon,
  Linkedin01Icon,
  GithubIcon,
  File01Icon,
} from "@hugeicons/core-free-icons";

const footer = () => {
  return (
    <div className='min-w-screen min-h-[20vh] bg-[#005ee5] text-[#ffffff] flex gap-3 justify-around pt-5 p-4 '>

        <div className="">CodewithAlfaz</div>
        <div className=""> &copy; {new Date().getFullYear()} Alfaz. All rights reserved.</div>
        <div className="">Socials
            <div className="flex gap-4">

            <HugeiconsIcon icon={WhatsappIcon} size={24} />
<HugeiconsIcon icon={PhoneIcon} size={24} />
<HugeiconsIcon icon={InstagramIcon} size={24} />
<HugeiconsIcon icon={Linkedin01Icon} size={24} />
<HugeiconsIcon icon={GithubIcon} size={24} />
<HugeiconsIcon icon={File01Icon} size={24} />
            </div>
        </div>
    </div>
  )
}

export default footer
