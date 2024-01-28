import React, { useState } from 'react'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import Card from './Card';

const Projects = (props) => {

    let ProjectsData = props.ProjectsData;
    const [index, setIndex] = useState(0)

    function leftShiftHandler() {
        if(index - 1 < 0){
            setIndex(ProjectsData.length - 1);
        }else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= ProjectsData.length){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    return (
        <div id="Projects" className='pt-20 max-w-5xl mx-auto mt-5 flex justify-center items-center flex-col px-[2.5rem]'>
            <div className='flex w-full flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold text-black dark:text-white'>Projects</h1>
                <p className='text-xs mb-[4rem] mt-1'>Most recent work</p>
            </div>
            <div className="flex justify-center gap-5 items-center mx-auto w-full">
                <div className="text-6xl text-purple-600 font-bold mx-auto">
                    <button onClick={leftShiftHandler} className="cursor-pointer hover:text-purple-700">
                        <FiChevronLeft/>
                    </button>
                </div>
                <div>
                    <Card ProjectsData={ProjectsData[index]}/>
                </div>
                <div className="text-6xl text-purple-600 font-bold mx-auto">
                    <button onClick={rightShiftHandler} className="cursor-pointer hover:text-purple-700">
                        <FiChevronRight/>
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 mt-4'>
                {
                    ProjectsData.map(
                        (projects, id) => (
                            <div
                                key={projects.id}
                                className={`border-r-[50%] rounded-full w-[6px] h-[6px] cursor-pointer ${id === index ? "bg-purple-600" : "bg-slate-400"}`}
                                onClick={() => (setIndex(id))}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
