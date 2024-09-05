import React from 'react'
import "./Section01.css"
import article1banner from "../../../../assets/Articles/Article-6-roundbanner-img.png"
const Section01 = () => {
    return (
        <> 
            <div className='newsMainBannerArticle6'>
                <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between p-4 mx-lg-auto h-100'>
                    <div className='ms-0 ms-lg-5 mt-5 mt-lg-0 newsBannerLeftArticle6'>
                        <h1 className='text-white'><span className=' bg-white'>Now and Forever </span> Expand in <br/>Huston: New store <br/>Openings for 2024 </h1>
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