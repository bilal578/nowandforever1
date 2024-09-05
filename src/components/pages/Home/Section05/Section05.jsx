import React from 'react'
import handshake from "../../../../assets/Home/handshake.svg"
import "./Section05.css"
import { Link } from 'react-router-dom'

const Section05 = () => {
  return (
    <>
    <div className='location-bg'>
      <div className='m-auto h-100 d-flex flex-column align-items-center align-items-lg-start justify-content-center'>
        <div className='banner-second'>
        <img className='handshakeimg' src={handshake} alt="" draggable='false' />
        <h1 className='text-white my-3 mx-4'>Secure Your Space Now</h1>
         <p> Take advantage of our vacant locations and unlock the potential of your business’ success with Now & Forever!</p>
        <button to='/contact' className='btn btn-sm btn-outline-light rounded-5 mx-4' style={{padding:"10px"}}> <a className='anchor' href="tel+2817431975" style={{textDecoration : "none", color : "white",   }}  >Call Us : 281-743-1975 </a> </button>
        </div>

        {/* <Link to='/contact' className='btn btn-sm btn-outline-light rounded-5 mx-4'>Learn More</Link> */}
      </div>
    </div>
    </>
  )
}

export default Section05