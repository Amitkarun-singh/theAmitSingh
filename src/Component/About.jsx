import React from 'react'
import { GrNotes } from "react-icons/gr";
import myPhoto from "../AboutMe/Myphoto.jpg"
import Resume from '../AboutMe/NewResume.pdf'

const About = () => {
    return (
        <div id="About" className='md:pt-[6rem] md:pb-[2rem]  pb-[4rem] pt-[2rem] py-0 about'>
            <h2 className="text-2xl text-center dark:text-white">About Me</h2>
            <span className="block text-sm mb-[3rem] md:mb-[4rem] text-center dark:text-[#bcbac4]">My introduction</span>

            <div className="about_container md:mx-auto sm:grid-cols-[repeat(2,1fr)] max-w-[768px] mx-[1.5rem] grid gap-[1.5rem] md:gap-x-[5rem]">
                <img src={myPhoto} alt='' className='w-[200px] justify-self-center self-center rounded-lg md:w-[350px]'/>

                <div className="about_data">
                    <p className='about_description text-center md:text-start mb-[2rem] dark:text-[#bcbac4]'>
                    Hello! 👋 I'm Amitkumar Singh, a dynamic 19+ year-old computer engineering student in my third year, specializing in full-stack web development and UI/UX design. Recently graduated, I bring fresh perspectives, a solid engineering foundation, and a commitment to mastering the latest technologies. Eager to contribute my skills and creativity to a dynamic workplace, I am actively seeking opportunities for a rewarding career.🌟
                    </p>

                    <a href={Resume} download={Resume}>
                        <button className='flex justify-center items-center mt-4 bg-p bg-[#8f34ea] hover:bg-[#7a26cf] text-white p-3 rounded-md font-medium w-[120px] gap-2 mx-auto md:mx-0'>
                            Resume
                            <GrNotes />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
