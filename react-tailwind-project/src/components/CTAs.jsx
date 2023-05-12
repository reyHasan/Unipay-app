import React from 'react'
import Button from './Button'
import styles, {layout} from '../styles'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const CTAs = () => {
    return (
        <section id='features' className={` ${layout.section} ${styles.paddingX} ${styles.marginY} bg-black-gradient mt-6 rounded-[20px]`}>
            <div className={layout.sectionInfo} data-aos='fade-right' >
               <h2 className='font-poppins font-semibold xs:text-[36px] text-[30px] text-white xs:leading-[48px] leading-[40px] w-full'>
                   You do the Business, <br className='sm:block hidden'/> we'll handle the money.
               </h2>
               <p className={`font-poppins font-normal text-dimWhite text-[14px] leading-[25.8px] mt-5 max-w-[470px]`}>
                   With the right credit card you can improve your finances significantly building, 
                   buying and earning card rewards and saving money through powerful credit cards.
               </p>
            </div>

            <div className={layout.sectionImg} data-aos='fade-left' >
               <Button styles='rounded-[20px] px-[40px] py-4' text='get started'/>
            </div>

            </section>
    )
}

export default CTAs
