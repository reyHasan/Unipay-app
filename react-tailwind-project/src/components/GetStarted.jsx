import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'


const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} rounded-full h-[140px] w-[140px] bg-blue-gradient p-[2px]`}>
           <div className={`${styles.flexCenter} bg-primary h-[100%] w-[100%] rounded-full flex-col get-started `}>
              <div className={`${styles.flexStart} flex-row`}>
                  <p className ='font-poppins font-medium text-[18px] leading-[23px] text-gradient'> Get </p>
                  <img src={arrowUp} alt='arrowUp' className='h-[23px] w-[23px] object-contain'/>
              </div>

              <div className={`${styles.flexStart} flex-row`}>
                  <p className ='font-poppins font-medium text-[18px] leading-[23px] text-gradient'> Started </p>
              </div>

           </div> 
        </div>
    )
}

export default GetStarted
