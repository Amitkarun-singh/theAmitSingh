import { HashLink } from '@xzar90/react-router-hash-link';
import React, { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SlPicture } from "react-icons/sl";
import { LuSendHorizonal } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const Navbar = ({modeHandler, theme}) => {

    const [toggle, setToggle] = useState(true);

    function changeToggleHandler() {
        setToggle(!toggle);
    }

    return (
        <div className='w-[100%] fixed bottom-0 left-0 z-999 bg-[#fdfbfe] md:py-0 md:px-[1rem] md:top-0 md:bottom-[initial]'>
            <nav className='max-w-[968px] h-[3rem] flex justify-between items-center ml-[1.5rem] mr-[1.5rem] md:h-[4.5rem] md:gap-x-[1rem] md:mx-auto md:text-center md:justify-between'>
                <div>
                    <HashLink to='# ' smooth>
                        <p className='text-[#242329] font-medium hover:text-[#9234ea]'>Amit</p>
                    </HashLink>
                </div>

                <div className='md:flex md:items-center md:gap-[0.8rem] md:justify-center'>
                    <div className={`fixed bottom-0 left-0 w-[100%] bg-[#fdfbfe] pt-[2rem] pr-[1.5rem] pl-[1.5rem] pb-[4rem] shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl transition-all duration-[.3s] md:block md:top-0 md:bottom-[initial] md:bg-transparent md:py-[1.5rem] md:h-[4.5rem] md:text-center md:shadow-none md:px-0 md:relative ${ toggle ? "hidden" : "block"}`}>
                        <ul className='grid grid-cols-3 grid-flow-row gap-[2rem] md:flex md:items-center md:gap-[2rem] md:flex-row'>
                            <li className="nav_item">
                                <HashLink to="#" smooth
                                className='flex flex-col items-center text-[0.875rem] text-[#242329] font-medium hover:text-[#9234ea] cursor-pointer' onClick={changeToggleHandler}>
                                    <LuHome className='text-[1.2rem] md:hidden'/>
                                    Home
                                </HashLink>
                            </li>

                            <li className="nav_item">
                                <HashLink to="#About" smooth
                                className='flex flex-col items-center text-[0.875rem] text-[#242329] font-medium hover:text-[#9234ea] cursor-pointer'  onClick={changeToggleHandler}>
                                    <FaRegUser className='text-[1.2rem] md:hidden'/>
                                    About
                                </HashLink>
                            </li>

                            <li className="nav_item">
                                <HashLink to="#Skills" smooth 
                                className='flex flex-col items-center text-[0.875rem] text-[#242329] font-medium hover:text-[#9234ea] cursor-pointer' onClick={changeToggleHandler}>
                                    <FaRegFileAlt className='text-[1.2rem] md:hidden'/>
                                    Skills
                                </HashLink>
                            </li>

                            <li className="nav_item">
                                <HashLink to="#Qualifications" smooth className='flex flex-col items-center text-[0.875rem] text-[#242329] font-medium hover:text-[#9234ea] cursor-pointer' onClick={changeToggleHandler}>
                                    <LuGraduationCap className='text-[1.2rem] md:hidden'/>
                                    Qualifications
                                </HashLink>
                            </li>

                            <li className="nav_item">
                                <HashLink to="#Projects" smooth 
                                className='flex flex-col items-center text-[0.875rem] text-[#242329] font-medium hover:text-[#9234ea] cursor-pointer' onClick={changeToggleHandler}>
                                    <SlPicture className='text-[1.2rem] md:hidden'/>
                                    Projects
                                </HashLink>
                            </li>

                            <li className="nav_item">
                                <HashLink to="#ContactMe" smooth 
                                className='flex flex-col items-center text-[0.875rem] text-[#242329] font-medium hover:text-[#9234ea] cursor-pointer' onClick={changeToggleHandler}>
                                    <LuSendHorizonal className='text-[1.2rem] md:hidden'/>
                                    Contact Me
                                </HashLink>
                            </li>
                        </ul>
                        <FaTimes className='absolute right-[1.3rem] bottom-[1.5rem] text-[1.5rem] cursor-pointer text-[#9234ea] hover:text-[#7d26cf] md:hidden' onClick={changeToggleHandler}/>
                    </div>

                    <div className="nav_btns flex justify-center items-center gap-2">
                        <button onClick={modeHandler} className='text-[#242329] font-medium text-xl hover:text-[#9234ea]'>
                            {
                                theme === "dark" ? (<MdOutlineLightMode />) : (<MdOutlineDarkMode/>)
                            }
                        </button>
                        <div className='text-[#242329] font-medium text-xl cursor-pointer hover:text-[#9234ea] md:hidden'>
                            <AiOutlineAppstore onClick={changeToggleHandler}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
