import React from 'react'
import "./Section02.css"
import { NavLink } from 'react-router-dom'
import { car_wash } from '../../../../data/car_wash_service'
 
const Section02 = () => {
    return (
        <>
            <div className='mx-auto service01-Sec02'>
                <div className='row g-0 px-4'>
                    {car_wash.map((data) => (
                        <div className='col-lg-3 p-0'>
                            <div className='text-center p-5'>
                                <h4>{data.heading}</h4>
                                <p>{data.des}</p>
                                <NavLink className="nav-link mx-auto bottom-pink" style={{width: "fit-content"}}>{data.btn_text}</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section02