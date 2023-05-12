import React from 'react'
import styles, {layout} from '../styles'
import { apple, bill, google } from '../assets'
import Button from './Button'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const Billing = () => (
     (
        <section id='billing' className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse} data-aos='fade-right'>
                <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]' />
                <div className='z-[3] absolute top-0 h-[50%] w-[50%] rounded-full white_gradient -left-1/2 '/>
                <div className='z-[0] absolute bottom-0 h-[50%] w-[50%] rounded-full pink_gradient -left-1/2 '/>
            </div>

            <div className={layout.sectionInfo}  data-aos='fade-left'>
               <h2 className={styles.heading2}>
                   Easily control your <br className='sm:block hidden'/> billing and invoicing.
               </h2>
               <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                   With the right credit card you can improve your finances significantly building, 
                   buying and earning card rewards and saving money through powerful credit cards.
               </p>

               <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={google} alt='google_play' className= 'object-contain mr-5 w-[128px] h-[42px] cursor-pointer'/>
                <img src={apple} alt='apple_store' className= ' object-contain w-[128px] h-[42px] cursor-pointer'/>
               </div>

            </div>

           

        </section>
    )
)

export default Billing
