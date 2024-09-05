import React from 'react'
import "./Section01.css"
import newsbanner from "../../../../assets/News/mooz-new-ban-img-new.png"
const Section01 = () => {
  return (
    <>
    <div className='newsMainBanner'>
                <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
                    <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 newsBannerLeft'>
                        <h1 className='text-white'>MOO's <span className=' bg-white'>News!</span></h1>
                        <p className='text-white mb-3'>Find out what happening NOW at Bull House!.</p>
                        {/* <button className="btn btn-sm btn-outline-light rounded-5 my-4">Nearest Store</button> */}
                    </div>
                    <div className='me-0 me-lg-5'>
                        <img width={400} height={300} className='img-fluid' src={newsbanner} alt="" draggable='false' />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Section01