import React from 'react'
import Social from './Social';
import Data from './Data';
import './Home.css'

const Home = () => {
    return (
        <div id="#" className='pr-[2rem] lg:pr-0 pt-24'>
            <div className='flex justify-center items-center mx-auto max-w-[968px]  '>
                
                <div className=' flex gap-[1.5rem] pt-[5.5rem]'>
                    
                    <Social/>

                    <div className='home_img hidden lg:block'></div>

                    <Data/>
                </div>
            </div>
        </div>
    )
}

export default Home
