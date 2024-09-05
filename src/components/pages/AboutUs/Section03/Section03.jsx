import React from 'react'
import "./Section03.css"
import aboutwelcomeimg from "../../../../assets/About/aboutwelcomeimg.svg"

const Section03 = () => {
    return (
        <>
            <div className='bd-sec-3'>
                <div className='d-flex flex-column flex-lg-row align-items-center px-2 px-lg-4 py-2 py-lg-5 mx-auto aboutthirdBanner'>
                    <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mb-lg-0'>
                        <div className='text-white'>
                            <h1>Welcome to <br /> <span className='px-1 bg-white'>Now & Forever!</span></h1>
                            <p className='pb-3'>We love making memories with our community! Explore our Instagram page to see all the fun and exciting moments at Now and Forever. From our 22 locations across Houston to special events and promotions, join us on our journey and be part of the Now and Forever family!</p>
                            <button className="btn btn-sm btn-outline-light rounded-5">Learn More</button>
                        </div>
                    </div>
                    <div>
                        <img className='img-fluid w-100 h-100' src={aboutwelcomeimg} alt="" draggable='false' />
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Section03