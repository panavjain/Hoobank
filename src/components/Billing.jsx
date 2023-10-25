import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 rounded-full w-[50%] h-[50%] white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 rounded-full w-[50%] h-[50%] pink__gradient' />
    </div>
    <div className={layout.sectionInfo} >
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.
      </p>
      <div className='flex-row flex-wrap flex sm:mt-10 mt-6'>
        <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)


export default Billing