import React from 'react'
import "./Section01.css"
import newsbanner from "../../../../assets/Articles/Article-14-roundbanner-img.png"
const Section01 = () => {
  return (
    <>
    <div className='newsMainBanner-art14-sec1'>
                <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
                    <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 newsBannerLeft-art14-sec1'>
                        <h1 className='text-white'>Explore <br />Now and Forever's<span className=' bg-white'>Exclusive Merch!</span></h1>
                        <p className='text-white mb-3'>Now and Forever is a premier chain of gas stations located across Houston. Now and Forever is a premier chain of gas stations located across Houston.</p>
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