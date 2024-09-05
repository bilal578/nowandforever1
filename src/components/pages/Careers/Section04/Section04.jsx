import React from 'react'
import "./Section04.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Section04 = () => {
    return (
        <>
         <section class="ezy__testimonial21 light">
          
  <div class="container position-relative">
   
    {/* <div class="row justify-content-center mb-md-4">
      <div class="col-8 col-lg-6 col-xl-5">
        <h2 class="ezy__testimonial21-heading mb-4">What Our Clients Say</h2>
        <p class="ezy__testimonial21-sub-heading mb-0">
          Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis
          eligendi qui.
        </p>
      </div>
    </div> */}

    <div class="row">
      <div class="col-12">
        <div id="ezy__testimonial21-controls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner overflow-visible">
            <div class="carousel-item active">
              <div class="row ">
                <div class="col-md-6 mt-4">
                  <div class="ezy__testimonial21-item px-4 py-4">
                    <div class="ezy__testimonial21-content mt-3">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="d-flex align-items-center">
                          <div class="me-2">
                            {/* <img
                              src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                              alt=""
                              class="img-fluid rounded-circle border"
                              width="47"
                            /> */}
                          </div>
                          <div>
                            <h5 class="mb-0"> Hamza J.
                            </h5>
                          </div>
                        </div>
                        <p class="mb-0 ezy__testimonial21-rating">
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star-half-alt active"></span>
                          <span class="fas fa-star"></span>
                        </p>
                      </div>
                      <p class="mb-4 ezy__testimonial21-text">
                      Working at Now and Forever has been a game-changer for my career
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="ezy__testimonial21-item px-4 py-4">
                    <div class="ezy__testimonial21-content mt-3">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="d-flex align-items-center">
                          <div class="me-2">
                            {/* <img
                              src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg"
                              alt=""
                              class="img-fluid rounded-circle border"
                              width="47"
                            /> */}
                          </div>
                          <div>
                            <h5 class="mb-0"> Josh D</h5>
                          </div>
                        </div>
                        <p class="mb-0 ezy__testimonial21-rating">
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star-half-alt active"></span>
                          <span class="fas fa-star"></span>
                        </p>
                      </div>
                      <p class="mb-4 ezy__testimonial21-text">
                      The benefits and support here make a huge difference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row mt-5">
                <div class="col-md-6 mt-4">
                  <div class="ezy__testimonial21-item px-4 py-4">
                    <div class="ezy__testimonial21-content mt-3">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="d-flex align-items-center">
                          <div class="me-2">
                            {/* <img
                              src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                              alt=""
                              class="img-fluid rounded-circle border"
                              width="47"
                            /> */}
                          </div>
                          <div>
                            <h5 class="mb-0"> Angel W</h5>
                          </div>
                        </div>
                        <p class="mb-0 ezy__testimonial21-rating">
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star active"></span>
                          <span class="fas fa-star-half-alt active"></span>
                          <span class="fas fa-star"></span>
                        </p>
                      </div>
                      <p class="mb-4 ezy__testimonial21-text">
                      I love being part of a company that truly cares about its employees
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    {/* <div class="position-relative d-flex justify-content-center align-items-center my-5">
      <button
        class="carousel-control-prev me-4"
        type="button"
        data-bs-target="#ezy__testimonial21-controls"
        data-bs-slide="prev"
         >
          <i class="fas fa-angle-left"></i> 
          <FontAwesomeIcon icon={faArrowLeft} /> 
         </button>


      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#ezy__testimonial21-controls"
        data-bs-slide="next"
      >
        <i class="fas fa-angle-right"></i>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div> */}
    <div className="container-careers-btn ">
      <button className="arrow-button"
       data-bs-target="#ezy__testimonial21-controls"
        data-bs-slide="prev"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="arrow-button"
       data-bs-target="#ezy__testimonial21-controls"
        data-bs-slide="next"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>  


  </div>
</section>



        </>
    )
}

export default Section04