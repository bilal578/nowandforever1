import React, { useState } from 'react';
import { news } from '../../../data/news'
import "./Section02.css"
import { NavLink } from 'react-router-dom';


const Section02 = () => {
  const [showAll, setShowAll] = useState(false);
  const [objects, setObjects] = useState(news.slice(0, 6)); // Initially display only 6 objects

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setObjects(news); // Show all objects
    } else {
      setObjects(news.slice(0, 6)); // Show only 6 objects
    }
  };

  return (
    <>
      <div className='mx-auto newsMainSec'>
        <div className='row g-0'>
          {objects.map((obj) => (
            <div className='col-lg-4'>
              <NavLink className="nav-link m-2 hoverBox"   to={`${obj.url}`}  >
                <div className='p-2 borderImgNews'><img className='img-fluid w-100' src={obj.src} alt="" draggable='false' /></div>
                <h2 className='mt-4 mb-0'>{obj.heading}</h2>
                <p className='mb-5 mt-0'><b>{obj.text}</b></p>
              </NavLink>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center'>
          {news.length > 6 && (
            <button className="btn btn-sm btn-solid-pink rounded-5" type='button' onClick={toggleShowAll}>
              {showAll ? 'Show Less' : 'Explore More'}
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Section02