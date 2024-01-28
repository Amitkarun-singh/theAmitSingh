import React from 'react'
import Social from './Social';
import Data from './Data';
import './Home.css'

const Home = () => {
    return (
        <div id="#" className='w-screen md:pr-[2rem] pt-24 py-0'>
            <div className='flex justify-center items-center mx-auto max-w-[968px] w-full '>
                <div className='home_content max-w-[968px] grid gap-[1.5rem]'>
                    <Social/>

                    <div className='home_img'></div>

                    <Data/>
                </div>
            </div>
        </div>
    )
}

export default Home
