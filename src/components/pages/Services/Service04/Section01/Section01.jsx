import React from 'react'
import "./Section01.css"
import servicesbanner from "../../../../../assets/Services/money-service-banner-img.png"

const Section01 = () => {
  return (
    <>
    <div className='servicesMainBanner4'>
        <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
          <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 servicesBannerLeft'>
            <h1 className='text-white'>Money <br /><span className=' bg-white'>Services</span></h1>
            <p className='text-white mb-3'>Simplify your financial transactions with our range of services safe access to our 24 hour ATM, reliable Western Union transfers, and efficient KIRV ATM solutions.</p>
            {/* <button className="btn btn-sm btn-outline-light rounded-5 ">Nearest Store</button> */}
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