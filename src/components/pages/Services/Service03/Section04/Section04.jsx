import React from 'react'
import "./Section04.css"
import food_partner from "../../../../../assets/Services/food_partner.png"
import food_partner_mob from "../../../../../assets/Services/food_partner_mob.png"

const Section04 = () => {
  return (
    <>
    <h1 className='mx-3 text-center sec_main_h'>Our <span>Food Partners</span></h1>
      <div className='d-flex flex-column-reverse flex-lg-row align-items-center px-lg-2 service03-Sec04'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mt-5 mt-lg-0 mb-lg-0 service04-Sec03_text'>
          <div className='w-100'>
            <h1>Hunt Bros Pizza</h1>
            <p className='mb-1 p-add'>Available at</p>
            <p className='mb-0 p-bold'>Now & Forever Parker</p>
            <p className='mb-1'>- 251 W Parker Rd, Houston, TX 77076</p>
            <p className='mb-0 p-bold'>Now & Forever Channelview</p>
            <p className='mb-5'>- 17124 E Freeway Service Rd Suite B, Channelview, TX 77530</p>
            <button className="btn btn-sm btn-outline-dark rounded-5 ">Order</button>
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100 d-none d-lg-block' src={food_partner} alt="" draggable='false' />
          <img className='img-fluid w-100 h-100 d-block d-lg-none' src={food_partner_mob} alt="" draggable='false' />
        </div>
      </div>
    </>
  )
}

export default Section04