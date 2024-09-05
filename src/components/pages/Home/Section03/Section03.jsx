import React from 'react'
import { info } from '../../../data/info' 
import "./Section03.css"
const Section03 = () => {
  return (
    <>
      <div className='d-flex justify-content-around flex-wrap procedure'>
        {info.map((data) => (
          <div className='d-flex flex-column align-items-center text-center mx-2 my-4 procedure_inner'>
            <img className='mb-3 pro-img' src={data.src} alt="" draggable='false' />
            <h5>{data.heading}</h5>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Section03