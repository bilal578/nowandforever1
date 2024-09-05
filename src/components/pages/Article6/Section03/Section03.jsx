import React from 'react'
import "./Section03.css"
import whoweImage from "../../../../assets/Articles/Article-6-img-new-2.jpg"


const Section03 = () => {
  return (
    <>
      <div className='d-flex flex-column flex-lg-row align-items-center px-2 px-lg-4 mx-auto aboutsecondBanner-Art6-sec2'>
        <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-5 mb-lg-0'>
          <div>
            <h1>Now & Forever Windchase </h1>
            <p className='pb-3'>Following closely, Now & Forever Windchase is set to open its doors within the next 40 days. This brand-new, large-sized gas station will cater to the West Oaks and Eldridge neighborhoods. Situated at the intersection of Westheimer Road and Eldridge Parkway, this station is another ground-up construction project developed by Chap the Builder Construction. The expertise of CTB in building gas stations guarantees a top-tier facility for the community.
            <br/>  <b> Located :</b> Now & Forever Windchase 13450 Westheimer Rd Houston, Texas 77077.        </p>
            
          </div>
        </div>
        <div>
          <img className='img-fluid w-100 h-100 article-6-img2' src={whoweImage} alt="" draggable='false' />
        </div>
      </div>
     {/* <div class="container-b">
          <h1 className='h1-b'>Address:</h1>
        <p className='pera-b'>Now & Forever Windchase <br/>13450 Westheimer Rd<br/>Houston, Texas 77077
</p>
    </div> */}
      
   </>
  )
}

export default Section03