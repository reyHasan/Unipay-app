import React from 'react'
import styles, {layout} from '../styles'
import {features} from '../constants'
import Button from './Button'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();


 const FeatureCard = ({icon, title, content, index}) => (
   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1? "mb-6" : "mb-0"} feature-card`}>
       <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
           <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
       </div>

       <div className='flex-1 flex flex-col ml-3' >
           <h4 className='font-poppis font-semibold text-[18px] text-white leading-[23px] mb-1'>{title}</h4>
           <p className='font-poppis font-normal text-[18px] text-dimWhite leading-[24px] mb-1'>{content}</p>
       </div>
   </div>

 )


const Business = () => {
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}  data-aos='fade-right'>
               <h2 className={styles.heading2}>
                   You do the Business, <br className='sm:block hidden'/> we'll handle the money.
               </h2>
               <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                   With the right credit card you can improve your finances significantly building, 
                   buying and earning card rewards and saving money through powerful credit cards.
               </p>

               <Button styles='mt-10' text='get started'/>
            </div>

            <div className={`${layout.sectionImg} flex-col`} data-aos='fade-left'>
                {features.map((feature, index)=> (
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}   

            </div>
        </section>
    )
}

export default Business
