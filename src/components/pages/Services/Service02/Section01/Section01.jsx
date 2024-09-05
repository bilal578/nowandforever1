import React from 'react'
import "./Section01.css"
import servicesbanner from "../../../../../assets/Services/Service-fulepage-ban-img.png"

const Section01 = () => {
  return (
    <>
    <div className='servicesMainBanner1'>
        <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
          <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 servicesBannerLeft'>
            <h1 className='text-white'>Introducing <br /> <span className=' bg-white' >Now and Forever Fuel!</span></h1>
            <p className='text-white mb-3'>Now and Forever's latest venture into the realm of automotive excellence comes from our very own fuel brand. With an unwavering commitment to quality and affordability, our fuel brand promises to revolutionize how you power your vehicle</p>
            {/* <button className="btn btn-sm btn-outline-light rounded-5">Nearest Store</button> */}
          </div>
          <div className='me-0 me-lg-5'>
            <img width={400} height={300} className='img-fluid' src={servicesbanner} alt="" draggable='false' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section01