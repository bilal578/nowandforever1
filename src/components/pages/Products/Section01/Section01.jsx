import React from 'react'
import "./Section01.css"
import { Link } from 'react-router-dom'
import { ProductsList } from "../../../data/ProductsList";

const Section01 = () => {
    const productsList = ProductsList;
    return (
        <>
            <div className='m-auto mb-5 d-flex flex-column align-items-center products-sec01'>
                <h1 className='text-center'>Everthing <span>From</span> Fuel To Fresh</h1>
                <div id="" className=' w-100 g-0 product-row-2 '>
                    {productsList.map((data) => (
                        <>
                            <div className='col-md-4 mx-auto mobile-res'>
                                <div className=' m-3 m-md-4'>
                                    < Link className='link'  to={`${data.url}`} state={{ heading: data.head, para: data.paragraph, index: data.index }} >
                                        <div className='product-box'>
                                            <div className='product-img'>
                                                <img className='w-100 img-fluid' src={data.img} alt="" draggable='false' />
                                            </div>
                                            <div className='text-center product-info-p-page'>
                                                <h3 className='mx-3 mt-5 mb-2'>{data.head}</h3>
                                                {/* <p className='mx-lg-5 mx-3'>{data.para}</p> */}
                                                {/* <button className="btn btn-sm mx-3 btn-pink border-dark border-2 rounded-5 mb-4">Explore More</button> */}
                                            </div>
                                        </div>
                                    </Link>
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