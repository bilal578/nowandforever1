import React from 'react'
import "./Section01.css"
import aboutbanner from "../../../../assets/About/AboutBAnner2.png"

const Section01 = () => {
  return (
    <>
    <div className='aboutMainBanner'>
                <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
                    <div className='ms-0 ms-lg-5 mt-5  aboutBannerLeft'>
                        <h1 className='text-white'>About <br /> <span className='bg-white'>Now & Forever!</span></h1>
                        <p className='text-white mb-3'>Welcome to Now and Forever: Your one-stop shop for fuel, snacks, wine, and more at 22 Houston locations!</p>
                        {/* <button className="btn btn-sm btn-outline-light rounded-5 my-4">Nearest Store</button> */}
                    </div>
                    <div className='me-0 me-lg-5'>
                        <img width={400} height={300} className='img-fluid' src={aboutbanner} alt="" draggable='false' />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Section01