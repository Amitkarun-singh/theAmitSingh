import React from 'react'
import { HashLink } from '@xzar90/react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='relative bottom-0 bg-purple-600 w-full h-[290px]'>
            <div className='flex items-center justify-between max-w-5xl mx-auto h-16 pt-16'>
                <div className='text-white pt-20'>
                    <p className='text-5xl font-bold'>AmitKumar</p>
                    <p className='text-5xl font-bold'>Singh</p>
                    <p className='text-md mt-5'>Full Stack Developer</p>
                </div>
                <div className='flex gap-x-[1rem] text-md font-medium'>
                    <HashLink to="#About" smooth>
                        <p className='hover:text-purple-300 text-white'>About</p>
                    </HashLink>

                    <HashLink to="#Projects" smooth>
                        <p className='hover:text-purple-300 text-white'>Projects</p>
                    </HashLink>

                    <HashLink to="#ContactMe" smooth>
                        <p className='hover:text-purple-300 text-white'>Contact Me</p>
                    </HashLink>
                </div> 
                <div className='flex gap-3 text-white text-2xl '>
                    <NavLink to='https://github.com/Amitkarun-singh'>
                        <LuGithub />
                    </NavLink>
                    <NavLink to='https://www.linkedin.com/in/amitkumar-singh17/'>
                        <FiLinkedin />
                    </NavLink>
                </div>   
            </div>
            <div className='text-sm text-gray-400 text-center absolute bottom-10 left-[45%]'>
                © Amit Singh. All rights reserved
            </div>
        </div>
    )
}

export default Footer
