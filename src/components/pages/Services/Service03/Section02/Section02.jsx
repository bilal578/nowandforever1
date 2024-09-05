import React from 'react'
import "./Section02.css"
import DesPic from "../../../../../assets/Services/fresh-food-des-pic.png"
import DesPicMob from "../../../../../assets/Services/fresh-food-des-pic_mob.png"

const Section02 = () => {
  return (
    <>
      <div className='d-flex flex-column-reverse flex-lg-row align-items-center px-lg-2 service03-Sec02'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mt-5 mt-lg-0 mb-lg-0 service04-Sec03_text'>
          <div className='w-100 '  >
            <h1 className='d-none d-lg-block'>Texas Forever<br />Bar and Grill</h1>
            <h1 className='d-block d-lg-none mb-3'>Texas <span>Forever </span>Bar and Grill</h1>
            <p className='mb-1 p-add'>Address</p>
            <p className='m-0'>Located next to Now and Forever </p>
            <p className='m-0'>Channelview  17124 E Freeway Service Rd</p>
            <p className='mb-5'>Suite A, Channelview, TX 77530</p>
            <button className="btn btn-sm btn-outline-dark rounded-5">Order</button>
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100 d-none d-lg-block' src={DesPic} alt="" draggable='false' />
          <img className='img-fluid w-100 h-100 d-block d-lg-none' src={DesPicMob} alt="" draggable='false' />
        </div>
      </div>
    </>
  )
}

export default Section02