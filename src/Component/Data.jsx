import React from 'react'
import { HashLink } from '@xzar90/react-router-hash-link'
import { VscSend } from "react-icons/vsc";
import './Home.css'

const Data = () => {
    return (
        <div className='home_data w-full ml-10'>
            <h1 className='text-[2rem] mb-[1rem]'>Hi, I'm Amit Singh</h1>

            <h3 className='text-[1.125rem] font-normal mb-[1rem]'>I'm a Full Stack Web Developer</h3>

            <p className="max-w-[400px] mb-[3rem]">Building Application to solve real life problems</p>

            <HashLink to="#ContactMe" smooth>
                <button className='flex justify-center items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md font-medium'>
                    Contact Me
                    <VscSend className='mt-1'/>
                </button>
            </HashLink>
        </div>
    )
}

export default Data
