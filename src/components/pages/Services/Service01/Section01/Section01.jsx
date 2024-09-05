import React from 'react'
import "./Section01.css"
import servicesbanner from "../../../../../assets/Services/car-wash-bannerimg.png"

const Section01 = () => {
  return (
    <>
      <div className='servicesMainBanner2'>
        <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
          <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 servicesBannerLeft'>
            <h1 className='text-white'> Now and Forever Clean<br /> <span className=' bg-white'>Car Wash On-the-Go!</span></h1>
            <p className='text-white mb-3'>Arrive dirty, leave clean with our quick and efficient drive-thru Car Wash!</p>
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