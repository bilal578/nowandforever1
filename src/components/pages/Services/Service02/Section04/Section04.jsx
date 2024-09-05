import React from 'react'
import { NavLink } from 'react-router-dom'
import { promotions } from '../../../../data/promotions'
import "./Section04.css"

const Section04 = () => {
    return (
        <>
            <div className='service02-Sec04'>
                <h1 className='px-2 d-none d-lg-block'>Explore Promotions</h1>
                <h1 className='px-2 d-block d-lg-none'>Explore <span>Promotions</span></h1>
                <p className='mb-2 px-2'>Now and Forever is a premier chain of gas stations located across Houston.</p>
                <div className='row g-0 explorePromotions'>
                    {promotions.map((data) => (
                        <div className='col-lg-4 pb-2 px-2'>
                            <img className='img-fluid' src={data.src} alt="" draggable='false' />
                            <h3 className='mt-2'>{data.heading}</h3>
                            <p>{data.text}</p>
                            <NavLink className="nav-link bottom-pink" style={{width: "fit-content"}}>{data.btn_text}</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section04