import React from 'react'
import "./Section04.css"
import whoweImage from "../../../../assets/Articles/Article-6-img-3.png"


const Section04 = () => {
  return (
    <>
      <div className='d-flex flex-column flex-lg-row align-items-center px-2 px-lg-4 mx-auto aboutsecondBanner-art6-sec4'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mb-lg-0'>
          <div>
            <h1>Now & Forever MLK</h1>
            <p className='pb-3'>In just 60 days, Now & Forever MLK will reopen after extensive renovations. Originally a modest two-pump gas station known as Sunmart, this location has undergone a complete transformation. The new and improved store on Martin Luther King Boulevard in South Houston now exemplifies the high standards and exceptional experience that Now & Forever is known for. This renovation marks a significant upgrade for the local community, offering more comprehensive services and a modernized facility. 
              <br/><b> Located :  </b> Now & Forever MLK 6333 Martin Luther King Blvd Houston, TX 77021.
            </p>
            
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100' src={whoweImage} alt="" draggable='false' />
        </div>
      </div>
     <div class="container-c">
       <h1 className='h1-c2' >Commitment to Excellence</h1>
        <p className='pera-c'>Each of these new and renovated locations reflects Now & Forever's dedication to providing quality services and facilities. The company's ongoing expansion in Houston demonstrates its commitment to enhancing the customer experience, offering more convenience, and supporting the local communities.
Stay tuned for the grand openings and join Now & Forever in celebrating these milestones as they continue to set the standard for gas stations and travel centers across Houston.

</p>
    </div>
      
   </>
  )
}

export default Section04