import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const ContactMe = () => {
    return (
        <div id='ContactMe' className='pt-20'>
            <div className='max-w-5xl mx-auto mt-5 flex justify-center items-center flex-col px-[2.5rem]'>
                <div className='flex w-full flex-col justify-center items-center'>
                    <h1 className='text-4xl font-semibold text-black dark:text-white'>Contact Me</h1>
                    <p className='text-xs mb-[4rem] mt-1'>Want to connect? My inbox is always open!</p>
                </div>
                <div className='grid gap-8 row-gap-5 md:grid-cols-2 lg:grid-cols-3 w-full'>
                    <div className='relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl'>
                        <NavLink to='mailto:amitkarun4559@gmail.com'>
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-purple-700 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-purple-700 group-hover:scale-y-100"></div>
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-purple-700 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-purple-700 group-hover:scale-y-100"></div>
                            <div className='relative p-5 bg-white rounded-sm'>
                                <div className='flex flex-col items-center  mb-2 lg:flex-row'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0 text-purple-700 text-4xl'>
                                        <IoIosMail/>
                                    </div>
                                    <h6 className = 'font-semibold leading-5'>Email</h6>
                                </div>
                                <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">Let's get in touch.</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl'>
                    <NavLink to='mailto:amitkarun4559@gmail.com'>
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-purple-700 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-purple-700 group-hover:scale-y-100"></div>
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-purple-700 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-purple-700 group-hover:scale-y-100"></div>
                            <div className='relative p-5 bg-white rounded-sm'>
                                <div className='flex flex-col items-center  mb-2 lg:flex-row'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0 text-purple-700 text-4xl'>
                                        <FaGithub />
                                    </div>
                                    <h6 className = 'font-semibold leading-5'>GitHub</h6>
                                </div>
                                <p class="mb-2 text-sm text-gray-900 text-center lg:text-start">Check out my repos.</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl'>
                    <NavLink to='mailto:amitkarun4559@gmail.com'>
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-purple-700 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-purple-700 group-hover:scale-y-100"></div>
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-purple-700 group-hover:scale-x-100"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-purple-700 group-hover:scale-y-100"></div>
                            <div className='relative p-5 bg-white rounded-sm'>
                                <div className='flex flex-col items-center  mb-2 lg:flex-row'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0 text-purple-700 text-4xl'>
                                        <FaLinkedin />
                                    </div>
                                    <h6 className = 'font-semibold leading-5'>LinkedIn</h6>
                                </div>
                                <p class="mb-2 text-sm text-gray-900 text-center lg:text-start">Let's connect.</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe

