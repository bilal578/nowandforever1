import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'
import { Slider } from '../../../data/Slider'
import img1 from "../../../../assets/Home/home-page-banner-1.png"
import img2 from "../../../../assets/Home/home-page-banner-2.jpg"
import img3 from "../../../../assets/Home/home-page-banner-3.jpg"
import img4 from "../../../../assets/Home/home-page-banner-4.png"
import img5 from "../../../../assets/Home/home-page-banner-5.png"
import sliderarrowleft from "../../../../assets/Home/sliderarrowleft.svg"
import sliderarrowright from "../../../../assets/Home/sliderarrowright.svg"

import './Section02.css'
// import { Link } from 'react-router-dom'

const Section02 = () => {
  
  return (
  <>      
  {/* <Carousel data-bs-theme="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
       <div><button style={{position:"absolute" , top:"68%",bottom:"0%",right:"0%",left: "70%", transform: "translate(-50% , -50%) "  }}>Hello</button></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

        <div id="homeMainSlider" className="carousel slide position-relative slide_desktop  new-banner " style={{position:"realtive",margin:"auto" }} >
        <div className="carousel-inner" >
          {Slider.map((data, index) => (
            <div key={index} className={`${ index === 0 ? "active" : ""} carousel-item`} >
              <img src={data.src} className="d-block w-100" alt="..." draggable='false' />
             <div style={{position:"absolute" , top:"68%",bottom:"0%",right:"0%",left: "70%", transform: "translate(-50% , -50%) "  }} >< button className=" ban-btn " ><b> FIND A NOW AND FOREVER NEAR YOU </b> </button> </div>
              </div>
          ))}
           </div>
         <button className="carousel-control-prev z-0" type="button" data-bs-target="#homeMainSlider" data-bs-slide="prev">
          <img className='' src={sliderarrowleft} alt="" draggable='false' />
        </button>
        <button className="carousel-control-next z-0" type="button" data-bs-target="#homeMainSlider" data-bs-slide="next">
          <img src={sliderarrowright} alt="" draggable='false' />
        </button>
        <div className="carousel-indicators position-static mt-3">
          <button type="button" data-bs-target="#homeMainSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#homeMainSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#homeMainSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#homeMainSlider" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#homeMainSlider" data-bs-slide-to="4" aria-label="Slide 5"></button>

        </div>
      </div>

      {/* Mobile Header */}

      <div id="carouselExampleCaptions" className="carousel slide slide_mobile">

        <div className="carousel-inner">
          {Slider.map((data, index) => (
            <div key={index} className={`${index === 0 ? "active" : ""} carousel-item`}>
              <img src={data.src} className="d-block w-100" alt="..." draggable='false' />
              <div style={{position:"absolute" , top:"68%",bottom:"0%",right:"0%",left: "70%", transform: "translate(-50% , -50%) "  }} >< button className=" ban-btn " ><b> FIND A NOW AND FOREVER NEAR YOU </b> </button> </div>
                           
              {/* <div className="carousel-caption p-0 d-block w-100 carousalCaption">
                <div className='h-100 bg-solid-pink'>
                  <div className='text-white mx-3 box-des-slider d-flex flex-column align-items-center justify-content-center text-center h-100'>
                    <h2>{data.heading}</h2>
                    <p>{data.text}</p>
                    <button className='btn btn-sm btn-outline-light rounded-5 px-3 py-2'>{data.btn_text}</button>
                    
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <img width={40} src={sliderarrowleft} alt="" draggable='false' />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <img width={40} src={sliderarrowright} alt="" draggable='false' />
        </button> */}

        <div className="carousel-indicators position-static mt-3">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
              
        </div>
      </div>
    </>
  )
}

export default Section02