import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () =>  (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}> 
          <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain'
          style={{ filter: "brightness(1)" }} 
          onMouseOver={(e) => e.currentTarget.style.filter = "brightness(4)"} 
          onMouseOut={(e) => e.currentTarget.style.filter = "brightness(1)"} />
        </div>
      ))}
    </div>
  </section>
)


export default Clients