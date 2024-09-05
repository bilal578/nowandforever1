import React from 'react'
import "./Section01.css"
import { merchandise_data } from "../../../data/merchandise_data";

const Section01 = () => {
    const merchandisedata = merchandise_data;
    return (
        <>
            <div className='m-auto mb-5 d-flex flex-column align-items-center merch-sec01'>
                <h1 className='text-center'>Spirits</h1>
                <div id="" className='row w-100 g-0'>
                    {merchandisedata.map((data) => (
                        <>
                            <div className='col-md-4 mobile-res'>
                                <div className=' m-3 m-md-4'>
                                    {/* <Link className='link' target='_blank' to={`${data.url}`}>
                                        <img className='w-100 img-fluid' src={data.img} alt="" draggable='false' />
                                    </Link>
                                    <h2 className='text-center mt-3'>{data.title}</h2>
                                    <h3 className='text-center'>{data.price}</h3> */}
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