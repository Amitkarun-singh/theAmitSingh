import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    let ProjectsData = props.ProjectsData;

    return (
        <div className='flex justify-between w-full items-center gap-32'>
            <div className='flex justify-center items-center h-[210px] overflow-hidden object-cover'>
                <img src={ProjectsData.image} alt="" className='w-[354px] h-[211px] border-r-[2px] rounded-md'/>
            </div>
            <div className='w-[304px]'>
                <h1 className='text-2xl mb-2 font-semibold'>{ProjectsData.name}</h1>
                <p className='mb-3'>{ProjectsData.description}</p>
                <div className='flex items-center justify-center gap-3'>
                    {
                        ProjectsData.TechStacks.map(
                            (stack, index) => (
                                <div key={index} className='border p-2 rounded-md px-3 cursor-pointer shadow-xl font-semibold'>{stack}</div>
                        ))
                    }
                </div>
                <NavLink to={ProjectsData.link}>
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
