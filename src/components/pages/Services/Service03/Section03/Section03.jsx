import React from 'react'
import "./Section03.css"
import { Restaurant_Partners } from "../../../../data/restaurants_partners";

const Section03 = () => {
    const RestaurantPartners = Restaurant_Partners
    return (
        <>
            <div className='mx-auto w-100 mb-5 overflow-hidden res_partners_div '>
                <h1 className='' style={{margin:'1rem'}}>Our <span>Restaurant </span>Partners</h1>
                <div className='row'>
                    {RestaurantPartners.map((data) => (
                        <div className='col-lg-3 col-md-4'>
                            <div className='text-center d-flex flex-column justify-content-start align-items-center px-5 px-lg-0 py-4 h-100'>
                                <div className="d-flex align-items-end box"><img className='mb-2 img-fluid' src={data.src} alt="" /></div>
                                <h3>{data.head}</h3>
                                <p className='mb-0'>{data.para1}</p>
                                <p className='mb-0'>{data.para2}</p>
                            </div>
                        </div>
                    ))

                    }

                </div>
            </div>
        </>
    )
}

export default Section03