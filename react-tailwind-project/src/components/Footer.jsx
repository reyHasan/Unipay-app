import React from 'react'
import {logo} from '../assets'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const Footer = () => {
    return (
        <div data-aos='fade-in' data-aos-duration="1500">
            <h2 className='flex flex-row items-center justify-center w-full bg-black-gradient'>
            &copy; 2023 <img src={logo} alt='logo' className='w-[100px] h-[100px] inline ml-3' /> 
            </h2>
        </div>
    )
}

export default Footer

