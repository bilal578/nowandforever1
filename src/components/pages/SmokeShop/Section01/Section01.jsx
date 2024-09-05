import React from 'react'
import "./Section01.css"
import { merchandise_data } from "../../../data/merchandise_data";

const Section01 = () => {
    const merchandisedata = merchandise_data;
    return (
        <>
            <div className='m-auto mb-5 d-flex flex-column align-items-center merch-sec01'>
                <h1 className='text-center'>Smoke Shop</h1>
                <div id="" className=' w-100 g-0 smoke-shop-row '>
                    {merchandisedata.map((data) => (
                        <>
                            <div className='col-md-4 mx-auto mobile-res'>
                                <div className=' m-3 m-md-4'>

                                    <div className='product-box'>
                                        <div className='product-img'>
                                            <img className='w-100 img-fluid' src={data.img} alt="" draggable='false' />
                                        </div>
                                        <div className='text-center product-info-smokshop'>
                                            <h3 className='mx-3 mt-5 mb-5'>{data.title}</h3>

                                            {/* <button className="btn btn-sm mx-3 btn-pink border-dark border-2 rounded-5">Explore More</button> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section01