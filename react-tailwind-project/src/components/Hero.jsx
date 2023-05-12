import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const Hero = () => {
    return (
        
          <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-6 sm:px-16 `} data-aos='fade-right' data-aos-duration="2000">
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-graident rounded-[10px] mb-2'>
                   <img src={discount} alt='discount' className='h-[32px] w-[32px]' />
                   
                   <p className={`${styles.paragraph} ml-2`}>
                   <span className='text-white'> 20% </span>   Discount For {''}
                   <span className='text-white'> 1 Month </span>
                   Account         
                   </p>

                </div>


                <div className='flex flex-row justify-between items-center w-full'>
                     <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px ]'>
                       The Next <br className='sm:block hidden'/> {""} 
                       <span className='text-gradient'>Generation</span>
                       <br className='sm:block hidden'/> {""} 
                       {""}
                     </h1>

                     <div className='ss:flex hidden md:mr-4 mr-0' data-aos='fade-in' data-aos-duration="2000"> 
                       <GetStarted/>
                     </div>


                </div>
                 
                <h1 className='w-full font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px ]'>
                       Payment Method
                </h1>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  we are comitted to providing the next generation with suitable banking options that will aide the results of their Testimonials.
                </p>
 
            </div>

            <div className= {`flex flex-1 relative my-10 md:my-0 ${styles.flexcenter}`} data-aos='fade-left' data-aos-duration="2000">
               <img src={robot} alt='billing' className='w-[100%] h-[100%] z-[5] relative'/>
               <div className='absolute top-0 pink__gradient z-[0] w-[40%] h-[35%] '/>
               <div className='absolute bottom-40 rounded-full white__gradient z-[1] w-[80%] h-[80%] '/>
               <div className='absolute bottom-20 right-20 blue__gradient z-[0] w-[80%] h-[50%] '/>
            </div>

            <div className='ss:hidden flex m-auto'> 
                       <GetStarted/>
            </div>
                
          </section>  

    )
}

export default Hero
