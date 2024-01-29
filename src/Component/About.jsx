import React from 'react'
import { GrNotes } from "react-icons/gr";
import myPhoto from "../Image/Myphoto.jpg"
import Resume from 'D:/coding/FullStackProject/ReactFolio/portfolio/src/Image/NewResume.pdf'

const About = () => {
    return (
        <div id="About" className='pb-[4rem] pt-24 py-0 about'>
            <h2 className="text-2xl text-center">About Me</h2>
            <span className="block text-sm mb-[3rem] text-center">My introduction</span>

            <div className="about_container max-w-[768px] mx-[1.5rem] grid gap-[1.5rem]">
                <img src={myPhoto} alt='' className='w-[200px] justify-self-center self-center rounded-lg' />

                <div className="about_data">
                    <p className='about_description text-center mb-[2rem]'>
                        Hello! I'm Amitkumar Singh, a dynamic 19+ year-old computer engineering student in my third year, eagerly stepping into the professional arena. My focus lies in full-stack web development and UI/UX design, and I am thrilled to channel my enthusiasm into a rewarding career. As a recent graduate, I bring a fresh perspective, a solid foundation in computer engineering, and an unwavering commitment to mastering the latest technologies. I am excited to contribute my skills and creativity to a dynamic workplace, where I can learn, grow, and make a meaningful impact. Ready to embark on this journey, I am actively seeking opportunities to apply my knowledge and passion for crafting exceptional digital experiences.
                    </p>

                    <a href={Resume} download={Resume}>
                        <button className='flex justify-center items-center mt-4 bg-p bg-[#8f34ea] hover:bg-[#7a26cf] text-white p-3 rounded-md font-medium w-[120px] gap-2 mx-auto'>
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
