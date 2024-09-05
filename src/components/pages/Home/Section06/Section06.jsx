import React from 'react'
import { Items } from '../../../data/Items'
import "./Section06.css"
import { Link } from 'react-router-dom'

const Section06 = () => {
  return (
    <>
      <div className='m-auto d-flex flex-column align-items-center home-cards explore-more-section'>
        <h1 className='text-center my-4'>Everthing <span>From</span> Fuel To Fresh</h1>
        <div className='w-100 text-center row home-cards'>
          {Items.map((data) => (
            <div className='col-6 col-md-4 d-flex aign-items-center justify-content-center produc-box '>
              <Link to={data.link} style={{textDecoration: "none"}}>
              <div className='d-flex flex-column align-items-center justify-content-center rounded-5 my-5 e-inner-sec home-cards2'>
               
                <img className='mb-4' src={data.src} alt="" draggable='false' />
                <h3 className='mx-1 mx-lg-5'>{data.heading}</h3>
                
              </div>
              </Link>
            </div>
          ))}

        </div>
        <button to='/products' className='btn btn-sm btn-solid-pink rounded-5 mt-4' style={{padding:"10px"}}>Explore More</button>

        {/* <Link to='/products' className='btn btn-sm btn-solid-pink rounded-5 mt-4'>Explore More</Link> */}
      </div>
    </>
  )
}

export default Section06