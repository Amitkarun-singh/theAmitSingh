import React from 'react'
import { HashLink } from '@xzar90/react-router-hash-link';
import { FiTwitter } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="footer pt-[2rem]">
            <div className="footer_bg md:pt-[3rem] md:px-0 md:pb-[5rem] dark:bg-[#000000] bg-[#9234ea] pt-[2rem] px-0 pb-[3rem]">
                <div className="footer_container lg:p-0 md:py-0 md:px-[1rem] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] max-w-[768px] mx-[1.5rem] grid gap-y-[3.5rem] gap-[1.5rem] lg:mx-auto lg:max-w-5xl">
                    <div className='lg:flex lg:flex-col lg:gap-3'>
                        <h1 className="footer_title text-white text-[1.5rem] mb-[0.25rem]">AmitKumar</h1>
                        <h1 className="footer_title text-white text-[1.5rem] mb-[0.25rem]">Singh</h1>
                        <span className="footer_subtitle text-white text-[.813rem]">Full Stack Developer</span>
                    </div>

                    <div className='footer_links flex flex-col md:flex-row md:gap-x-[2rem] gap-y-[1.5rem]'>
                        <HashLink to="#About" smooth>
                            <p className='hover:text-[#ce9dfb] text-white'>About</p>
                        </HashLink>

                        <HashLink to="#Projects" smooth>
                            <p className='hover:text-[#ce9dfb] text-white'>Projects</p>
                        </HashLink>

                        <HashLink to="#ContactMe" smooth>
                            <p className='hover:text-[#ce9dfb] text-white'>Contact Me</p>
                        </HashLink>
                    </div> 

                    <div className='footer_socials flex items-center md:items-start md:justify-end'>
                        <NavLink to='https://github.com/Amitkarun-singh' target='_blank' className='text-[1.25rem] mr-[1.5rem] text-white hover:text-[#ce9dfb]'>
                            <LuGithub />
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/amitkumar-singh17/' target='_blank' className='text-[1.25rem] mr-[1.5rem] text-white hover:text-[#ce9dfb]'>
                            <FiLinkedin />
                        </NavLink>
                        <NavLink to='https://twitter.com/amitkarun4559' target='_blank' className='text-[1.25rem] mr-[1.5rem] text-white hover:text-[#ce9dfb]'>
                            <FiTwitter />
                        </NavLink>
                    </div>
                </div>

                <p className="footer_copy md:mt-[4.5rem] text-[.75rem] text-center text-[#a19fad] mt-[3rem] lg:mt-[6rem]">&#169; Amit Singh. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
