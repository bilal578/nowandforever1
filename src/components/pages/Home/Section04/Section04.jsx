import React from 'react'
import "./Section04.css"
import map from "../../../../assets/Home/map.svg"
// import { Link } from 'react-router-dom'

const Section04 = () => {
  return (
    <>
      <div className='map-location m-auto'>
        <div className='d-flex flex-column flex-lg-row  rounded-1 p-lg-3 mx-lg-3'>
          <div className='w-custom d-flex align-items-center'>
            <img className='img-fluid w-100' src={map} alt="" draggable='false' />
          </div>
          <div className='w-custom px-lg-5 mx-4 mx-lg-0 py-3 d-flex flex-column align-items-start justify-content-center location-info'>
            <h5 className='fw-bold'>Locations</h5>
            <h4>Find a <span>Now and Forever </span>near you!</h4>
            <p className='mb-4'>Discover a world of unbeatable fuel prices and endless perks at Now and Forever Gas Station in Houston. Your journey begins with wallet-friendly fill-ups and extends to exclusive rewards through our loyalty program. Embrace the joy of driving with us – now and forever</p>
            <button className='btn btn-sm btn-outline-dark rounded-5' style={{padding:"10px"}}>Nearest Store</button>

            {/* <Link to='/locations' target='_blank' className='btn btn-sm btn-outline-dark rounded-5'>Nearest Store</Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Section04