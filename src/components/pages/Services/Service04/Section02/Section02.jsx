import React, { useRef, useState } from 'react';
import "./Section02.css"
import polygon_desktop from "../../../../../assets/Services/polygon_Set_desktop.png"
import polygon from "../../../../../assets/Services/polygon_slider.svg"
import polygonS from "../../../../../assets/Services/polygonset.png"
import polygonL from "../../../../../assets/Services/poly_left.png"
import polygonC from "../../../../../assets/Services/poly_center.png"
import polygonR from "../../../../../assets/Services/poly_right.png"
import polygonKIRV from "../../../../../assets/Services/polygon_kirv.png"
import polygonATM from "../../../../../assets/Services/polygon_atm.png"
import polygonWU from "../../../../../assets/Services/polygon_wu.png"
import polygonCENTER from "../../../../../assets/Services/polygon_center.png"

const images = [

  {
    src: `${polygonATM}`,
    text: 'Check balances, withdraw, or deposit money effortlessly.'
  },
  {
    src: `${polygonKIRV}`,
    text: 'Our SMART ATM offers Crypto, Bill Pay, and more. Enjoy credit and debit card banking functionalities for tasks like cashing checks and paying bills.'
  },
  {
    src: `${polygonWU}`,
    text: 'Send or receive money worldwide with ease.'
  },
];

const Section02 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }

    if (touchEndX.current - touchStartX.current > 50) {
      prevImage();
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    setRotation(rotation + 270 / images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    setRotation(rotation - 270 / images.length);
  };

  const diskStyle = {
    // width: '450px',
    height: '275px',
    overflow: 'hidden',
    position: 'relative',
    transform: `rotate(${rotation}deg)`,
    // transformOrigin: '100% 100%',
    transition: 'transform 1s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = (index) => ({
    // position: 'absolute',
    // width: '100%',
    // height: '100%',
    top: 0,
    left: 0,
    opacity: currentImageIndex === index ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  });







  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlide = (direction) => {
    const totalImages = images.length;
    const nextIndex = direction === 'next' ? (currentIndex + 1) % totalImages : (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      {/* <div className="mx-auto polygon-grid">        
        <div
          className="d-flex d-md-none justify-content-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div style={diskStyle}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                style={imageStyle(index)}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
        </div>
        <div className='d-flex d-md-none justify-content-center position-relative' style={{ marginTop: "-120px" }}>
          <label className='MS_label bg-white' htmlFor="">MONEY <br /> SERVICES</label>
        </div>
      </div> */}

       {/* // this section is important ! */}
       
      {/* <div className='d-none d-lg-flex justify-content-center overflow-hidden w-100 polygon_desktop'>
        <img src={polygon_desktop} alt="" draggable='false' style={{maxWidth: "900px"}} />
      </div> */}

      <div className='container my-5'>
        <div id="polygon_slider" className="carousel slide slide_mobile">
          <div className="carousel-inner">
            {images.map((data, index) => (
              <div key={index} className={`${index === 0 ? "active" : ""} carousel-item`}>
                <div className='d-flex flex-column justify-content-end' style={{ height: "500px" }}>
                  <p className='text-center text-slider mx-5 mb-0'>{data.text}</p>
                  <div className='d-flex justify-content-center'>
                    <img onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      key={index} src={data.src} className="d-block" alt="..." draggable='false' style={{height: "275px"}} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators position-static m-0">
            <button type="button" data-bs-target="#polygon_slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#polygon_slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#polygon_slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className='d-flex justify-content-center'>
            <img className="d-block" src={polygonCENTER} alt="" style={{ marginLeft: "15px", marginTop: "-5px", height: "275px" }} />
          </div>
        </div>

       {/* // this section is important ! */}

        {/* <div id="polygon_slider" className="carousel slide slide_mobile">
          <div className="carousel-inner">
            {images.map((data, index) => (
              <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                <div className='d-flex flex-column justify-content-end' style={{ height: "500px" }}>
                  <p className='text-center text-slider mx-5 mb-0'>{data.text}</p>
                  <div className='d-flex justify-content-center'>
                    <img
                      key={index}
                      src={data.src}
                      className="d-block"
                      alt="..."
                      draggable='false'
                      style={{ height: "275px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators position-static m-0">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#polygon_slider"
                data-bs-slide-to={index}
                className={index === currentIndex ? 'active' : ''}
                aria-current={index === currentIndex ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
          <div className='d-flex justify-content-center'>
            <img className="d-block" src={polygonCENTER} alt="" style={{ marginLeft: "15px", marginTop: "-5px", height: "275px" }} />
          </div>
        </div> */}

        
      </div>
    </>
  )
}

export default Section02