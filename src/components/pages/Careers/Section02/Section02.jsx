import React, { useEffect, useRef, useState } from 'react'
import "./Section02.css"
import { NavLink } from 'react-router-dom'
import { new_jobs } from '../../../data/job_new_opportunities'
import dropdownArrow from '../../../../assets/dropdown-arrow.svg'

const Section02 = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredJobs = new_jobs.filter((job) =>
        job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const inputRef = useRef(null);
    useEffect(() => {
        const searchInput = inputRef.current;
        if (searchInput) {
          const handleDrop = (e) => {
            e.preventDefault();
          };
          const handleDragOver = (e) => {
            e.preventDefault();
          };
    
          searchInput.addEventListener('drop', handleDrop);
          searchInput.addEventListener('dragover', handleDragOver);
    
          // Cleanup event listeners on component unmount
          return () => {
            searchInput.removeEventListener('drop', handleDrop);
            searchInput.removeEventListener('dragover', handleDragOver);
          };
        }
    
      }, []);
    return (
        <>
            <div className='mx-auto px-2 px-lg-4 featuredJobsSec'>
                <h1 className='mb-4 text-center'>Explore <span>Your </span>Path</h1>
                <p className='mb-2 mx-auto text-center px-3'>Are you ready to take the bull by the horns and steer your career to the next level? Join the Now and Forever family, where we're bullish about community, growth, and excellence. We offer competitive pay, paid time off, health insurance, 401k plans, and more. Enjoy benefits like mental health days, overtime pay, and bonuses twice a year, all while working in a secure environment with bulletproof cashier's cabins</p>
                <div className='d-flex flex-column flex-lg-row mx-auto mb-5' style={{width: "fit-content"}}>
                    <input ref={inputRef} value={searchTerm} onChange={handleSearch} className='rounded-5 border border-1 mb-3 pe-3 py-2 mx-0 mx-lg-3' placeholder='Search Jobs' type="search" name="" id="" />
                    <div className="dropdown">
                        <button className="btn rounded-5 border border-1 px-3 py-2 mx-0 mx-lg-3 d-flex align-items-center justify-content-between dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Categories
                            <img className='ms-2' src={dropdownArrow} alt="dropdown" draggable='false' />
                        </button>
                        <ul className="dropdown-menu rounded-5 overflow-hidden z-1">
                            <li><NavLink className="dropdown-item bg-white text-black" to="">Job Category</NavLink></li>
                            <li><NavLink className="dropdown-item bg-white text-black" to="">Job Type</NavLink></li>
                            <li><NavLink className="dropdown-item bg-white text-black" to="">Job Location</NavLink></li>
                        </ul>
                    </div>
                </div>
                <h3>Featured Jobs</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">New Opportunities</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Be the first</button>
                    </li>
                </ul>
                <div className="tab-content mt-5" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                        <ul className='nav'>
                            {filteredJobs.map((job, index) => (
                                <li key={index} className='nav-item py-1 border-top border-bottom w-100'>
                                    <NavLink target='_blank' to={`${job.url}`} className="nav-link"><b>{job.job_title} </b>{job.job_description}<img className='float-end' src={job.src} alt="" draggable='false' /></NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"></div>
                </div>
            </div>

        </>
    )
}

export default Section02