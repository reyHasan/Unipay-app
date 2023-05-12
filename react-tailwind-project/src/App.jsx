import React from 'react'
import styles from './styles.js'
import { Stats, Business, Billing, Hero, Navbar, CardDeals, Testimonials, Clients, CTAs, Footer} from './components'


const App = () => (
    
    <div className='bg-primary w-full overflow-hidden p-4 text-slate-400'>
        
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
             <div className={`${styles.boxWidth}`}> 
                
                <Navbar/>
             </div>    
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
             <div className={`${styles.boxWidth}`}> 
                  
              <Hero/>
             </div>    
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
             <div className={`${styles.boxWidth}`}>    
                <Stats/>
                <Business/>    
                <Billing/>
                <CardDeals/>
                <Testimonials/>
                <Clients/>
                <CTAs/>
                <Footer/>
             
             </div>    
        </div>
       
    </div> 
)

export default App