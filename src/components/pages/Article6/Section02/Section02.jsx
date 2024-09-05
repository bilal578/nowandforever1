import React from 'react'
import "./Section02.css"
import whoweImage from "../../../../assets/Articles/Aricle-6-img-1.png"


const Section02 = () => {
  return (
    <>
      <div className='d-flex flex-column flex-lg-row align-items-center px-2 px-lg-4 mx-auto aboutsecondBannerArticle6'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mb-lg-0'>
          <div>
            <h1>Now & Forever </h1>
            <p className='pb-3'>Houston, TX - The esteemed chain of gas stations and travel centers, Now & Forever, is gearing up for an exciting 2024 with several new store openings. As the company expands its footprint, Houston residents can look forward to enhanced convenience and top-tier services at these newly constructed and renovated locations. <br/> <b> Located : </b> Now & Forever Synnot The intersection of Synott Rd and West Belfort  </p>
            
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100' src={whoweImage} alt="" draggable='false' />
        </div>
      </div>
     <div class="containerA">
        <h1 className='h1-1'> Now & Forever Synnot</h1>
        <p className='pera'>In just 30 days, Now & Forever Synnot will welcome customers for the first time. This new store is located at Synott Road and West Belfort, serving numerous Eldridge area neighborhoods, including Barrington Place, Eldridge Park Village, and Hunting Village. Developed from the ground up by Now & Forever's affiliate, Chap the Builder Construction (CTB), this location underscores the company’s commitment to quality. CTB specializes in building gas stations, ensuring that the new facility meets the highest standards of construction and service.</p>

        {/* <h1 className='h1-2'>Address:</h1>
        <p >Now & Forever Synnot <br/>The intersection of Synott Rd and West Belfort
</p> */}
    </div>
      
   </>
  )
}

export default Section02