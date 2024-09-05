import React from 'react'
import { life } from '../../../data/life@N&F'
import careersimage from "../../../../assets/Careers/career-page-img2.png"
import "./Section03.css"

const Section03 = () => {

    return (
        <>
            <div className='mx-auto px-2 px-lg-4 d-flex flex-column flex-lg-row align-items-center justify-content-between careersLifeNaF'>
                <div className='careersimgSec'>
                    <img className='img-fluid' src={careersimage} alt="" draggable='false' />
                </div>
                <div className='careersinfoSec p-3'>
                    <h2>Life At <span>Now & Forever</span></h2>
                    <div class="accordion accordion-flush overflow-auto" id="accordionFlushExample">
                        {life.map((data, index) => (
                            <div >

                                <ul className= "ul-career">
                                   <li> 
                                      <h2 >
                                        {data.heading}
                                     </h2>
                                    </li>
                                 </ul>

                                <div id={data.id} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Diversity, Equality & Inclusion
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Now & Forever is the global leader in convenience, with a rich history and even brighter future. We understand that our people drive our success, —</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    College Graduates
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Now & Forever is the global leader in convenience, with a rich history and even brighter future. We understand that our people drive our success, —</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Military Veterans
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Now & Forever is the global leader in convenience, with a rich history and even brighter future. We understand that our people drive our success, —</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Section03