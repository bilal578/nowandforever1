import React from 'react'
import "./Section04.css"
import totalstores from "../../../../assets/About/totalstores.svg"
import running from "../../../../assets/About/running.svg"
import upcoming from "../../../../assets/About/upcoming.svg"

const Section04 = () => {
  return (
    <>
    <div className='mx-auto text-center chainOutletsSec'>
        <h2 className='mb-5'>OUR <span>CHAIN</span> OF OUTLETS</h2>
        <div className='d-flex flex-column flex-lg-row justify-content-center'>
            <div className='mb-5 mb-lg-0 chainImg'>
                <img width={120} className='mb-2' src={totalstores} alt="" draggable='false' />
                <p className='m-0'>TOTAL STORES</p>
                <p className='m-0'><b>25</b></p>
            </div>

            <div className='sec-break mx-4 d-none d-lg-block'></div>
            
            <div className='mb-5 mb-lg-0 chainImg'>
                <img width={120} className='mb-2' src={running} alt="" draggable='false' />
                <p className='m-0'>RUNNING</p>
                <p className='m-0'><b>23</b></p>
            </div>

            <div className='sec-break mx-4 d-none d-lg-block'></div>
            
            <div className='mb-2 mb-lg-0 chainImg'>
                <img width={120} className='mb-2' src={upcoming} alt="" draggable='false' />
                <p className='m-0'>UPCOMING</p>
                <p className='m-0'><b>2</b></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section04