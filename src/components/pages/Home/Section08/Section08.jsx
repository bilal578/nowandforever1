import React from 'react'
import "./Section08.css"
import { NavLink } from 'react-router-dom'
import { socialLinks } from "../../../data/socialLinks"
import { socialLinksMobile } from '../../../data/socialLinksMobile'
const Section08 = () => {
  return (
    <>
      <div className='mx-auto get-con-sec'>
        <h1 className='mb-4 mx-3 mx-lg-4'><span>#</span>Get Connected</h1>
        <div className='d-none d-lg-flex flex-column flex-lg-row justify-content-center justify-content-lg-between mx-3'>
          {socialLinks.map((data) => (
            <div className='d-flex align-items-end justify-content-center mb-5 mb-lg-2 mx-lg-2 get-con-item' style={{ backgroundImage: `url(${(data.bg_image)})` }}>
              <NavLink to={data.page_url} target='_blank' className="d-flex align-items-center justify-content-center text-decoration-none text-white text-center bg-1b mx-5 mx-lg-3 py-2 mb-4"><img className='me-2' src={data.src} alt="" draggable='false' />{data.link}</NavLink>
            </div>
          ))}
        </div>

        <div id="carouselExampleCaptions2" className="carousel slide slide_mobile">
          <div className="carousel-inner">
            {socialLinksMobile.map((data, index) => (
              <div key={index} className={`${index === 0 ? "active" : ""} carousel-item`}>
                <div className='d-flex w-100 justify-content-center'>
                  <div className='d-flex align-items-end justify-content-center me-2 ms-3 get-con-item' style={{ backgroundImage: `url(${(data.bg_image1)})` }}>
                    <NavLink to={data.page_url1} target='_blank' className="d-flex align-items-center text-decoration-none text-white text-center bg-1b p-2  mb-4"><img className='me-2' src={data.src1} alt="" draggable='false' />{data.link1}</NavLink>
                  </div>
                  <div className='d-flex align-items-end justify-content-center me-3 ms-2 get-con-item' style={{ backgroundImage: `url(${(data.bg_image2)})` }}>
                    {data.bg_image2 && <NavLink to={data.page_url2} target='_blank' className="d-flex align-items-center text-decoration-none text-white text-center bg-1b p-2  mb-4"><img className='me-2' src={data.src2} alt="" draggable='false' />{data.link2}</NavLink>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-indicators position-static mt-3">
            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>

      </div>






    </>
  )
}

export default Section08