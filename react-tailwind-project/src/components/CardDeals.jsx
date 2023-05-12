import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../styles'
import Button from './Button'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const CardDeals = () => {
    return (

     <section id='features' className={layout.section}>
            <div className={layout.sectionInfo} data-aos='fade-right'>
               <h2 className={styles.heading2}>
                   Find the better card deal, <br className='sm:block hidden'/> in a few easy steps
               </h2>
               <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                   With the right credit card you can improve your finances significantly building, 
                   buying and earning card rewards and saving money through powerful credit cards.
               </p>

               <Button styles='mt-10 rounded' text='get deals'/>
            </div>

            <div className={`${layout.sectionImg} flex-col`} data-aos='fade-left'>
                <img src={card} alt='bill' className='w-[100%] h-[100%] relative z-[5]' />
                <div className='z-[3] absolute top-0 h-[50%] w-[50%] rounded-full white_gradient -left-1/2 '/>
                <div className='z-[0] absolute bottom-0 h-[50%] w-[50%] rounded-full pink_gradient -left-1/2 '/>

            </div>
        </section>
    )
}

export default CardDeals
