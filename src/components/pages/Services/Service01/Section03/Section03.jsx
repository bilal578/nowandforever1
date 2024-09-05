import React from 'react'
import "./Section03.css"
import servicesCar from "../../../../../assets/Services/sevicesCar.png"
import servicesMainImage from "../../../../../assets/Services/servicesmainimage.png"

const Section03 = () => {
    return (
        <>
            <div className='container-fluid text-white service01-Sec03'>
                <div className='mx-auto position-relative'>
                    <div className='d-flex flex-column align-items-center servicesCarInfo'>
                        <img width={480} className='servicesCar img-fluid' src={servicesCar} alt="" draggable='false' />
                        {/* <h2>Expert Car Wash Services:
                            Unleash Your Vehicle's Shine!</h2>
                        <p>Experience the Ultimate Pampering for Your Vehicle: Our Professional Car Wash Services Guarantee a Gleaming Finish and Immaculate Cleanliness. Treat Your Ride to the Care It Deserves, and Let Its True Shine Shine Through! Trust Our Expert Team to Revitalize Every Inch, Leaving Your Car Looking and Feeling Fresh and Renewed.</p> */}
                    </div>
                    <div className='d-flex justify-content-center p-lg-5 py-4'>
                        <img className='img-fluid servicesMainImage' src={servicesMainImage} alt="" draggable='false' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section03