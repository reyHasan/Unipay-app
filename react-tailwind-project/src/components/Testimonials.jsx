import React from 'react'
import { feedback } from '../constants'
import  FeedbackCard  from './FeedbackCard'
import styles from '../styles'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const Testimonials = () => {
    return (
        <section id='testimonials' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className='blue_ _gradient rounded-full -right-[50%] h-[60%] w-[60%] absolute z-[0]'/>

            <div className='flex relative justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]' data-aos='fade-in' data-aos-duration="1500">
              <h2 className={styles.heading2}>
                   What people are <br className='sm:block hidden'/> saying about us
               </h2>

               <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                   With the right credit card you can improve your finances significantly building, 
                   buying.
               </p>
            </div>

            <div className ='flex flex-wrap justify-center w-full feedback-container relative z-[1]' >
                {feedback.map((card)=> (
                    <FeedbackCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials
