import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";

const Qualifications = () => {
    return (
        <div id='Qualifications' className='qualification md:pt-[6rem] md:pb-[2rem] pb-[4rem] pt-[2rem] py-0 overflow-x-hidden'>
            <h2 className="text-2xl text-center dark:text-white">Qualifications</h2>
            <span className="block text-sm mb-[3rem] md:mb-[4rem] text-center dark:text-[#bcbac4]">My Educational Qualification</span>

            <div className="qualification_container max-w-[768px] md:mx-auto mx-[1.5rem]">
                <div className="qualification_tabs md:justify-center flex justify-evenly mb-[2rem]">
                    <div className="text-[1.125rem] font-medium cursor-pointer text-[#9234ea] button--flex flex justify-center items-center">
                        <LuGraduationCap className='qualification_icon text-[1.8rem] mr-[0.25rem]'/>
                        Education
                    </div>
                </div>

                <div className="qualification_sections sm:grid sm:grid-cols-[.6fr] md:grid-cols-[.fr] sm:justify-center">
                    <div className="qualification_content">
                        {/* Qualification 1 */}
                        <div className="qualification_data grid grid-cols-[1fr,max-content,1fr] gap-x-[1.5rem]">
                            <div>
                                <h3 className="qualification_title text-[0.938rem] font-medium] dark:text-white">B.Tech Computer</h3>
                                <span className="qualification_subtitle inline-block text-[.813rem] mb-[1rem] dark:text-[#bcbac4]">Thakur College Of Engineering and Technology</span>
                                <div className="qualification_calender flex items-center text-[.75rem] text-[#a19fad] gap-1">
                                    <LuCalendarDays />
                                    2021 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder inline-block w-[13px] h-[13px] bg-[#9234ea] rounded-full"></span>
                                <span className="qualification_line block w-[1px] h-full bg-[#9234ea] transform translate-x-[6px] translate-y-[-7px]"></span>
                            </div>
                        </div>
                        {/* Qualification 2 */}
                        <div className="qualification_data grid grid-cols-[1fr,max-content,1fr] gap-x-[1.5rem]">
                            <div></div>

                            <div>
                                <span className="qualification_rounder inline-block w-[13px] h-[13px] bg-[#9234ea] rounded-full"></span>
                                <span className="qualification_line block w-[1px] h-full bg-[#9234ea] transform translate-x-[6px] translate-y-[-7px]"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title text-[0.938rem] font-medium] dark:text-white">Senior Secondary School</h3>
                                <span className="qualification_subtitle inline-block text-[.813rem] mb-[1rem] dark:text-[#bcbac4]">Tarapur Vidya Mandir & Jr. College</span>
                                <div className="qualification_calender flex items-center text-[.75rem] text-[#a19fad] gap-1">
                                    <LuCalendarDays />
                                    2019 - 2021
                                </div>
                            </div>
                        </div>
                        {/* Qualification 3 */}
                        <div className="qualification_data grid grid-cols-[1fr,max-content,1fr] gap-x-[1.5rem]">
                            <div>
                                <h3 className="qualification_title text-[0.938rem] font-medium] dark:text-white">Secondary School</h3>
                                <span className="qualification_subtitle inline-block text-[.813rem] mb-[1rem] dark:text-[#bcbac4]">Tarapur Vidya Mandir & Jr. College</span>
                                <div className="qualification_calender flex items-center text-[.75rem] text-[#a19fad] gap-1">
                                    <LuCalendarDays />
                                    2009 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder inline-block w-[13px] h-[13px] bg-[#9234ea] rounded-full"></span>
                                <span className="qualification_line "></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualifications
