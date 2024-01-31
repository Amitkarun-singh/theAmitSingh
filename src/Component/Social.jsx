import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Social = () => {
    return (
        <div className=' flex flex-col  items-center justify-around mt-0 lg:mt-[-40px] ml-2'>

            <NavLink to='https://github.com/Amitkarun-singh' target='_blank' className='text-[1.25rem] text-[#972ef9] hover:text-[#7221be]'>
                <LuGithub />
            </NavLink>

            <NavLink to='https://www.linkedin.com/in/amitkumar-singh17/' target='_blank' className='text-[1.25rem] text-[#972ef9] hover:text-[#7221be]'>
                <FiLinkedin />
            </NavLink>

            <NavLink to='https://twitter.com/amitkarun4559' target='_blank' className='text-[1.25rem] text-[#972ef9] hover:text-[#7221be]'>
                <FiTwitter />
            </NavLink>
        </div>
    )
}

export default Social
