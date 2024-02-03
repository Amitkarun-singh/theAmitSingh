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
        <div id="Projects" className='portfolio md:pt-[6rem] md:pb-[2rem] pb-[4rem] pt-[2rem] py-0'>
            <h2 className="text-2xl text-center dark:text-white">Projects</h2>
            <span className="block text-sm mb-[3rem] md:mb-[4rem] text-center dark:text-[#bcbac4]">Most recent work</span>
            
            <div className="portfolio_container max-w-[968px] flex justify-center items-center mx-[1rem] gap-2 lg:-gap-6 md:gap-5 md:mx-auto">
                <div className="text-4xl md:text-5xl lg:text-6xl text-purple-600 font-bold mx-auto">
                    <button onClick={leftShiftHandler} className="cursor-pointer hover:text-purple-700">
                        <FiChevronLeft/>
                    </button>
                </div>
                <div className='transition duration-500 ease-in-out'>
                    <Card ProjectsData={ProjectsData[index]}/>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl text-purple-600 font-bold mx-auto">
                    <button onClick={rightShiftHandler} className="cursor-pointer hover:text-purple-700">
                        <FiChevronRight/>
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 mt-6 lg:mt-10'>
                {
                    ProjectsData.map(
                        (projects, id) => (
                            <div
                                key={projects.id}
                                className={`border-r-[50%] rounded-full w-[7.5px] h-[7.5px] cursor-pointer ${id === index ? "bg-purple-600" : "bg-slate-400 dark:bg-slate-600"}`}
                                onClick={() => (setIndex(id))}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
