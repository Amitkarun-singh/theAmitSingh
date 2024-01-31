import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { HashLink } from '@xzar90/react-router-hash-link'
import { VscSend } from "react-icons/vsc";
import { LuMouse } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";
import './Home.css'

const Home = () => {
    return (
        <div id="#" className='pr-[2rem] lg:pr-0 pt-24'>
            <div className='flex justify-center items-center mx-auto max-w-[968px]  '>
                
                <div className=' flex gap-[1.5rem] pt-[5.5rem]'>
                    
                    <Social/>

                    <div className='home_img hidden lg:block'></div>

                    <div className="home_data col-span-2">
                        <h1 className="home_title text-[2rem] mb-[.75rem]">Hi, I'm Amit Singh</h1>

                        <h3 className="home_subtitle text-[1.125rem] text-[#242329] font-medium mb-[.75rem]">I'm a Full Stack Web Developer</h3>

                        <p className="home_description mb-[2rem]">Building Application to solve real life problems</p>

                        <HashLink to="#ContactMe" smooth>
                            <button className='flex justify-center items-center bg-[#8f34ea] hover:bg-[#7a26cf] text-white p-4 rounded-md font-medium'>
                                Contact Me
                                <VscSend className='text-[1.25rem] ml-[.5rem] transition-all duration-300'/>
                            </button>
                        </HashLink>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <HashLink to="#About" className="flex items-center transition-all duration-300 hover:translate-y-1 text-[#8f34ea] button--flex" smooth>
                        <LuMouse className='text-[2rem]'/>
                        <span className="text-[.813rem] text-[#242329] font-medium mr-[0.25rem]">Scroll down</span>
                        <FaArrowDown className='text-[.813rem]'/>
                    </HashLink>
                </div>
            </div>
        </div>
    )
}

export default Home
