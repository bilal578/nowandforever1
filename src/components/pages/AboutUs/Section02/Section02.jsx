import React from 'react'
import "./Section02.css"
import whoweImage from "../../../../assets/About/about-page-img1.png"
import whoweImage2 from "../../../../assets/About/about-page-img2.png"

const Section02 = () => {
  return (
    <>
      <div className='d-flex flex-column flex-lg-row align-items-center px-2 px-lg-4 mx-auto aboutsecondBanner'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mb-lg-0'>
          <div>
            <h1>Who <span>We </span>Are</h1>
            <p className='pb-3'>Now and Forever is a family-owned and operated chain of travel centers and convenience stores located throughout Houston, Texas. Our mission is to deliver fast, convenient services and provide affordable, quality fuel to the communities we serve. Founded by brothers Zain and Shayan Farooqi, the journey began in 2005 amidst the devastation of Hurricane Katrina. During this time, Zain and Shayan were committed to helping their community, offering gas at the low price of $2 at their first flagship store to ensure safe evacuations. This spirit of service continues to drive us today as we strive to offer the best products and services to our customers. </p>
            <button className="btn btn-sm btn-outline-dark rounded-5">Learn More</button>
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100' src={whoweImage} alt="" draggable='false' />
        </div>
      </div>

      <div className='d-flex flex-column-reverse flex-lg-row align-items-center px-2 px-lg-4 mx-auto aboutsecondBanner'>
        <div>
          <img className='img-fluid w-100 h-100' src={whoweImage2} alt="" draggable='false' />
        </div>
        <div className='d-flex flex-column align-items-center align-items-lg-end justify-content-center mb-5 mb-lg-0'>
          <div>
            <h1>How <span>We </span>Work</h1>
            <p className='pb-3'>At Now and Forever, our operations are centered around providing top-notch convenience and service to our customers. With 22 strategically located stores across Houston, we ensure that a Now and Forever store is always just around the corner. Our travel centers are equipped with a wide variety of products, including fuel, snacks, meals, wine, and self-care items. We pride ourselves on our commitment to quality and affordability, ensuring that our customers receive the best value for their money. 

Our recent initiative of bringing back $2 gas amidst economic challenges is a testament to our dedication to serving our community. This initiative, reminiscent of our efforts during Hurricane Katrina, highlights our continuous commitment to providing essential services during critical times. As we continue to grow and expand, our goal remains the same: to be the best place for all your needs, now and forever.
</p>
            <button className="btn btn-sm btn-outline-dark rounded-5 ">Learn More</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Section02