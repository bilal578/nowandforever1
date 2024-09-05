import React from 'react'
import "./Section01.css"
import { merchData } from '../../../data/merch'

const Section01 = () => {
    
    return (
        <>
            <div className='m-auto mb-5 d-flex flex-column align-items-center merch-sec01-NMERCH'>
                <h1 className='text-center '>Merchandise</h1>
                <div id="" className=' w-100 g-0  merch-row-q-1'>
                    {merchData.map((data) => (
                        <>
                            <div className='col-md-4 mx-auto mobile-res'>
                                <div className=' m-3 m-md-4'>

                                    <div className='product-box product-box-2'>
                                        <div className='product-img'>
                                            <img className='w-100 img-fluid' src={data.img} alt="" draggable='false' />
                                        </div>
                                        <div className='text-center product-info-NMERCH  '>
                                            <h3 className='mx-3 mt-5 mb-5 ' style={{color: "black" }} >{data.item}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            
        
            
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            {/* <div className='m-auto mb-5 d-flex flex-column align-items-center merch-sec01'>
                <h1 className='text-center'>Merchandise</h1>

                <h4>Coming Soon</h4>
                <div id="" className='row w-100 g-0'>
                    {merchandisedata.map((data) => (
                        <>
                            <div className='col-md-4 mobile-res'>
                                <div className=' m-3 m-md-4'>
                                    <Link className='link' target='_blank' to={`${data.url}`}>
                                        <img className='w-100 img-fluid' src={data.img} alt="" draggable='false' />
                                    </Link>
                                    <h2 className='text-center mt-3'>{data.title}</h2>
                                    <h3 className='text-center'>{data.price}</h3>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div> */}
        </>
    )
}

export default Section01