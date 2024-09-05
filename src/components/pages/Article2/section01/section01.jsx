import React from 'react'
import "./Section01.css"
import article1banner from "../../../../assets/Articles/Article-2-roundbanner-img.png"
const Section01 = () => {
    return (
        <>
            <div className='newsMainBanner-art2-sec1'>
                <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
                    <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 newsBannerLeft'>
                        <h1 className='text-white'> <span className=' bg-white'>Smoke Shop Finds</span><br /> at Now and Forever </h1>
                        <p className='text-white mb-3'>Discover the best smoke shop finds at Now and Forever! We have an extensive selection to meet all your smoking need</p>
                        {/* <button className="btn btn-sm btn-outline-light rounded-5 my-4">Nearest Store</button> */}
                    </div>
                    <div className='me-0 me-lg-5'>
                        <img width={400} height={300} className='img-fluid' src={article1banner} alt="" draggable='false' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section01;