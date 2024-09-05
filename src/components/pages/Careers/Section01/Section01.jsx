import React from 'react'
import "./Section01.css"
import careersbanner from "../../../../assets/Careers/career-ban-new-img.png"

const Section01 = () => {
    return (
        <>
            <div className='careersMainBanner'>
                <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
                    <div className='ms-0 ms-lg-5 mt-5 careersBannerLeft'>
                        <h1 className='text-white'>Careers  <span className='bg-white'>Now! </span>  
                        </h1>
                        <p className='text-white mb-3'>Join the Now and Forever Family!. 
                        </p>
                        {/* <button className="btn btn-sm btn-outline-light rounded-5">Nearest Store</button> */}
                    </div>
                    <div className='me-0 me-lg-5'>
                        <img width={400} height={300} className='img-fluid' src={careersbanner} alt="" draggable='false' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section01