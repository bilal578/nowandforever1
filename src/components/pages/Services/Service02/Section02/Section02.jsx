import React from 'react'
import "./Section02.css"
import { fuel_service } from '../../../../data/fuel_service'

const Section02 = () => {
  // return (
  //   <>
  //     <div className='mx-auto px-4 position-relative fuel_main_div newclass'>
  //       {/* <span className='position-absolute top-0 bottom-0 m-auto for_border'></span> */}
  //       {fuel_service.map((data) => (
  //         <>
  //           <div className='d-flex flex-column flex-lg-row align-items-center justify-content-start'>
  //             <div className='me-0 me-lg-5 my-4'><img src={data.src} alt="" /></div>
  //             <div className='text-center text-lg-start bg-white mb-4'>
  //               <h3>{data.head}</h3>
  //               <p className='m-0'>{data.text1}</p>
  //               <p className='m-0'>{data.text2}</p>
  //               <p className='m-0'>{data.text3}</p>
  //               <p className='m-0'>{data.text4}</p>
  //               <p className='m-0'>{data.text5}</p>
  //               <p className='m-0'>{data.text6}</p>
  //             </div>
  //           </div>
  //           <div className='w-100 d-flex justify-content-center'>
  //             {data.dashed.length === 0 ? null : <div className='for_border_in'></div>}              
  //           </div>
  //         </>
  //       ))}
  //     </div>

    



  //   </>
  // )


  return (
    <>
      <div className='mx-auto px-8 position-relative fuel_main_div newclass'>
      
        {fuel_service.map((data) => (
          <>
           
           {/* <div className='d-flex flex-column flex-lg-row align-items-center justify-content-start'>
           <div className="hover01 column">
           <div className='text-center text-lg-start bg-white mb-4'>
          <figure><img src={data.src} alt="" /></figure> */}
    {/* <span>{data.head}<br/>{data.text1}<br/>{data.text2}<br/>{data.text3}<br/>{data.text4}<br/>{data.text5}<br/> {data.text6}</span> */}
    {/* <span className='text-lg-start bg-white mb-4'>
              <h3 style={{textAlign:'center'}}>{data.head}</h3>
              <p className='m-0'>{data.text1}</p>
              <p className='m-0'>{data.text2}</p>
              <p className='m-0'>{data.text3}</p>
              <p className='m-0'>{data.text4}</p>
              <p className='m-0'>{data.text5}</p>
              <p className='m-0'>{data.text6}</p>
    </span>
     */}
  {/* </div>
</div>
        </div>         */}

        <div className="outterDiv" >

<div className="innerDiv">

    <div className="contentDiv">

        <img className="img1" src={data.src} alt="" />

        <div className="textDiv1" >

            <h3 className="heading3">
            {data.head}
            </h3>

            <div className="paraDiv">
              <ul className='dashed'>
                <li>{data.text1}</li>
                <li>{data.text2}</li>
                <li>{data.text3}</li>
                <li>{data.text4}</li>
                <li>{data.text5}</li>
              </ul>
            {/* <p >{data.text1}</p>
               <p >{data.text2}</p>
               <p >{data.text3}</p>
               <p >{data.text4}</p>
                <p >{data.text5}</p> */}
  
            </div>

        </div>

    </div>

   
           </div>

</div>

             
                {/* <h3>{data.head}</h3> */}
                
          
              
            {/* <div className='w-100 d-flex justify-content-center'>
              {data.dashed.length === 0 ? null : <div className='for_border_in'></div>}              
            </div> */}
          </>
        ))}
      </div>





      







      
      
    </>
  )
}

export default Section02