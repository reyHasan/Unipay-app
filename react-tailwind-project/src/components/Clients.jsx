import React from 'react'
import {clients} from '../constants'
import styles from '../styles'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`} data-aos='fade-in' data-aos-duration="1500">
            <div className= {`${styles.flexCenter} flex-wrap w-full `}>
               {clients.map((client)=>(
                   <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}> 
                      <img src={client.logo} alt='client' className='object-contain sm:w-[192px] w-[100px]'/>
                   </div>
               ))}
            </div>                                   
        </section>
    )
}

export default Clients
