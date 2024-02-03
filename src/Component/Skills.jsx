import React from 'react'
import SkillsCard from './SkillsCard.jsx';

const Skills = (props) => {

    let SkillsData = props.SkillsData;

    return (
        <div id='Skills' className='skills md:pt-[6rem] md:pb-[2rem] pb-[4rem] pt-[2rem] py-0'>
            <h2 className="text-2xl text-center dark:text-white">Skills</h2>
            <span className="block text-sm mb-[3rem] md:mb-[4rem] text-center dark:text-[#bcbac4]">My technical level</span>
            <div className='max-w-[768px] md:mx-auto mx-[1.5rem] sm:grid-cols-[repeat(2,1fr)] grid gap-[1.5rem]'>
                {
                    SkillsData.map((SkillData) => (
                        <SkillsCard key={SkillData.id} SkillData={SkillData} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Skills
