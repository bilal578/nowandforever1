import React from 'react'
import "./Section03.css"
import FuelPartnerImage from "../../../../../assets/Services/fuel_partner.png"
import FuelPartnerImageMob from "../../../../../assets/Services/fuel_partner_mob.png"

const Section03 = () => {
  return (
    <>
      <div className='d-flex flex-column-reverse flex-lg-row align-items-center px-lg-2 service02-Sec03'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mt-2 mt-lg-0 mb-lg-0 service02-Sec03_text'>
          <div className='w-100'>
            <h1 className='d-none d-lg-block'>Third-<span>Party <br />Fuel</span>Partner</h1>
            <h1 className='d-block d-lg-none mb-3'>Third-<span>Party Fuel </span>Partner</h1>
            <p className='pt-3'>Shell is a global energy and petrochemical leader in over 70 countries.</p>
            <p className='pb-3'>In addition to our own Now and Forever branded fuel, we proudly offer Shell branded fuel at select locations, bringing you trusted quality and reliability. Experience the excellence of Shell's renowned fuels, handpicked to elevate your driving experience. Wherever you go, count on Now and Forever for top-tier fuel options, including Shell.</p>
            <button class="btn btn-sm btn-outline-dark rounded-5">Learn More</button>
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100 d-none d-lg-block' src={FuelPartnerImage} alt="" draggable='false' />
          <img className='img-fluid w-100 h-100 d-block d-lg-none' src={FuelPartnerImageMob} alt="" draggable='false' />
        </div>
      </div>
    </>
  )
}

export default Section03