import React from 'react'
import "./Section01.css"
import { tobacooList } from "../../../data/TobacooItem";
// import { merchandise_data } from "../../../data/merchandise_data";

const Section01 = () => {
    const merchandisedata = tobacooList;

    return (
        <>
            <div className='m-auto mb-5 d-flex flex-column align-items-center merch-sec01-tobaco'>
                <h1 className='text-center '>Tobacco</h1>
                <div id="" className='row w-100 g-0 tobacoo-mobile'>
                    {merchandisedata.map((data) => (
                        <>
                            <div className='col-md-4 mx-auto mobile-res tobacoo-mob-card '>
                                <div className=' m-3 m-md-4'>

                                    <div className='product-box'>
                                        <div className='product-img'>
                                            <img className='w-100 img-fluid' src={data.img} alt="" draggable='false' />
                                        </div>
                                        <div className='text-center product-info-tobaco  product-info-2 '>
                                            <h3 className='mx-3 mt-5 mb-5 ' style={{color: "black" }} >{data.para}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section01



// const Section01 = () => {
//     const tItem = tobacooList;

//     return (
//         <>
//             <div className='m-auto mb-5 d-flex flex-column align-items-center merch-sec01'>
//                 <h1 className='text-center'>Tobacco</h1>
//                 <div id="" className='row w-100 g-0'>
//                     {tItem.map((data) => (
//                         <>
//                             <div className='col-md-4 mobile-res'>
//                                 <div className=' m-3 m-md-4'>
//                                     <div className="card">
//                                         <img src={data.img} alt="Card" className="card-image" />
//                                         <div className="card-text">{data.para}</div>
//                                     </div>
//                                </div>
//                             </div>
//                         </>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Section01








