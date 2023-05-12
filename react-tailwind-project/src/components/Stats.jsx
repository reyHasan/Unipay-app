import React from 'react'
import {stats} from '../constants'
import styles from '../styles'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const Stats = () => {
    return (
        <section className={` ${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`} data-aos='fade-in' data-aos-duration="2000">
            {stats.map ((stat)=> (
                <div key={stat.id} className='flex-1 flex-row items-center m-3 justify-start'>
                   <h4 
                       className='font-poppins font-semibold xs:text-[40px] font-[30px] xs:leading-[53px] leading-[43px] text-white'>
                       {stat.value}
                    </h4>
                   
                   <p  
                      className='font-poppins font-normal xs:text-[20px] font-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase l-3'> 
                      {stat.title}
                    </p>
               
                </div>
            ))}
        </section>
    )
}

export default Stats
