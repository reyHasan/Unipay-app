import React from 'react'
import {quotes} from '../assets'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const FeedbackCard = ({content, name, title, img}) => {
    return (
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5max-w-[370px] feedback-card' data-aos='fade-in' data-aos-duration="2000">
            <img src={quotes} alt='double quotes' className='object-contain w-[42px] h-[27px]'/>
            <p className='font-poppins font-normal text-white text-[18px] leading-[32px] my-10 max-w-[200px]'>
                {content}
            </p>
            <div className='flex flex-row'>
               <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
               <div className='flex flex-col ml-4'>
                   <h4 className='font-poppins font-semibold text-white text-[20px] leading-[32px]'>{name}</h4>
                   <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'> {title}</p>
               </div>
            </div>
        </div>
    )
}

export default FeedbackCard
