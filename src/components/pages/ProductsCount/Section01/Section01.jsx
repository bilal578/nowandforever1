import React from 'react'
import "./Section01.css"
import { useLocation } from 'react-router-dom'
import { ProductsCountList } from "../../../data/ProductsCountList";

const Section01 = () => {
    const productsCountList = ProductsCountList;
    let { state } = useLocation();

    return (
        <>
            <div className='m-auto mb-5 d-flex flex-column align-items-center productsCount-sec01'>
                <h1 className='text-center'>{state.heading}</h1>
                <p className='text-center mx-2'>{state.para}</p>
                <div id="" className='row w-100 g-0'>
                    {productsCountList[state.index].items.map((data) => (
                        <>
                            <div className='col-lg-4 mx-auto'>
                                <div className='d-flex align-items-center justify-content-center mx-auto my-3 imgBrand'>
                                    <img className='p-3 img-fluid' src={data.img} alt="" draggable='false' />
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