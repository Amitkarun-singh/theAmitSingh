import React, { useEffect } from 'react'
import { useState } from 'react';

const SkillsCard = (props) => {

    let SkillData = props.SkillData;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(SkillData.id === 1){
            setIsVisible(true);
        }
    }, [])

    function changeHandler() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <div className='flex items-center mb-[2.5rem] gap-4 cursor-pointer'>
                <img src={SkillData.image} alt="" className='w-[32.02px] h-[32px] mr-[.75rem] font-medium'/>
                <div>
                    <h1 className='text-[1.125rem] dark:text-white'>{SkillData.name}</h1>
                    <p className='text-[.813rem] text-[#6d6a7c] dark:text-[#bcbac4]'>{SkillData.description}</p>
                </div>
                <img src={SkillData.image1} alt="" className={`w-[17px] h-[32px] ml-auto transition duration-500 ease-in-out font-medium ${isVisible ? "-rotate-180" : ""}`} onClick={changeHandler}/>
            </div>
            <div className={`grid gap-[1.5rem] pl-[2.7rem] ${isVisible ? "block mb-[.5rem]" : "hidden"}`}>
                {
                    SkillData.TechStacks.map((techStack) => (
                        <div key={techStack.id}>
                            <div className='flex justify-between items-center mb-[.5rem] border-b-[5px] rounded border-[#972ef9] pb-2'>
                                <img src={techStack.techimage} alt="" className='w-[30px] h-[37px] font-medium'/>
                                <h3 className='text-[.938rem] font-medium dark:text-white'>{techStack.techstack}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsCard
