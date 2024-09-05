import React from 'react'
import "./Section03.css"
import serban from "../../../../../assets/Services/moneyservice-kirv-img.png"
import serban_mob from "../../../../../assets/Services/moneyservice-kirv-img.png"

const Section03 = () => {
  return (
    <>
     <div className='d-flex flex-column-reverse flex-lg-row align-items-center px-lg-2 service04-Sec03'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mt-5 mt-lg-0 mb-lg-0 service04-Sec03_text'>
          <div className='w-100'>
            <h1 className='d-none d-lg-block'>Become an Authorized  <span>KIRV </span> Service Provider</h1>
            <h1 className='d-block d-lg-none mb-3'>Become A <span>KIRV </span>ATM</h1>
            <p className='m-0'> Elevate your business with KIRV services.</p>
        <ul className='money-serv-sec4-1' >
           <li> <p className='m-0'> Guaranteed commissions on smart ATM services.</p></li>
           <li> <p className='m-0'> One-stop for maintenance, hardware, cash services, and more.</p></li>
           <li> <p className='mb-3'> Round-the-clock support with wireless connectivity.</p></li>        
           <li>  <p className='text-black-c mb-5'>Experience financial ease at Now and Forever – where simplicity meets innovation.</p></li>        
        </ul>

            <button class="btn btn-sm btn-outline-dark rounded-5  "><a href='tel:+2817431975' style={{textDecoration : "none", color:"black",}}  >  Call Us: 832-496-3931</a></button>
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100 d-none d-lg-block' src={serban} alt="" draggable='false' />
          <img className='img-fluid w-100 h-100 d-block d-lg-none' src={serban_mob} alt="" draggable='false' />
        </div>
      </div>
    </>
  )
}

export default Section03