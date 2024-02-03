import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    let ProjectsData = props.ProjectsData;

    return (
        <div className='flex justify-center items-center flex-wrap sm:flex-nowrap gap-[1.5rem] lg:gap-[5rem] max-w-[768px] py-0'>
            <div className='flex justify-center items-center overflow-hidden object-cover'>
                <img src={ProjectsData.image} alt="" className='w-[265px] sm:w-[354px] h-[211px] rounded-md justify-center'/>
            </div>
            <div className='sm:w-[354px]'>
                <h3 className='text-[1.125rem] mb-[0.5rem] text-black font-semibold dark:text-white'>{ProjectsData.name}</h3>
                <p className='mb-[0.75rem] dark:text-[#bcbac4]'>{ProjectsData.description}</p>
                <div className='flex items-center justify-center gap-3'>
                    {
                        ProjectsData.TechStacks.map(
                            (stack, index) => (
                                <div key={index} className='border p-2 rounded-md px-3 cursor-pointer shadow-xl text-black dark:text-white font-semibold'>{stack}</div>
                        ))
                    }
                </div>
                <NavLink to={ProjectsData.link} target='_blank'>
                    <button className='flex justify-center items-center mt-4 bg-purple-600 text-white px-3 py-4 rounded-md font-medium w-[130px] gap-2'>
                        check out
                        <IoMdArrowRoundForward className=''/>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Card
