import React, { useState, useEffect, useRef } from 'react';
import locationIcon from '../../../../assets/Home/home-location-icon.svg';
import arrowRight from '../../../../assets/Home/home-direction-icon.svg';
import { branches } from '../../../map/branchesData';
import MapComponent from '../../../map/MapComponent';
// import BranchList from '../../../map/BranchList';
import { Link } from 'react-router-dom';
import "./Section01.css";

const Section01 = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [searchPlace, setsearchPlace] = useState('');
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const filteredLocations = branches.filter((search_place) =>
    search_place.name.toLowerCase().includes(searchPlace.toLowerCase()) ||
    search_place.address.toLowerCase().includes(searchPlace.toLowerCase())

  );

  const handleFocus = (event) => {
    setsearchPlace(event.target.value);
  };

  const handleSearch = () => {
    setIsDivVisible(true);
    setIsClosing(true)
  };

  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      setIsClosing(false)
      setTimeout(() => {
        setIsDivVisible(false);
      }, 350);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
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
        document.removeEventListener('mousedown', handleClickOutside);
        searchInput.removeEventListener('drop', handleDrop);
        searchInput.removeEventListener('dragover', handleDragOver);
      };
    }

  }, []);

  const [selectedBranchId, setSelectedBranchId] = useState(null);

  const handleCloseMap = () => {
    setIsClosing(false)
    setTimeout(() => {
      setIsDivVisible(false);
    }, 350);
  };
  
  
  return (
    <>
      <div className='d-flex align-items-center justify-content-center pb-2 pb-lg-3 pt-2 mx-2 home-section01'>
        <img width={18} className='locationIcon' src={locationIcon} alt="" draggable='false' />
        <input ref={inputRef} onClick={handleSearch} onChange={handleFocus} className='px-5 py-2 bg-transparent' id="location-input" type="text" placeholder='Find Us' />
        <img width={18} className='arrowRight' src={arrowRight} alt="" draggable='false' />
      </div>
      {isDivVisible && (        
        <div ref={divRef} className={`position-absolute w-100 z-1 map-div ${isClosing ? 'fade-in' : 'fade-out'}`}>
          <div className='d-flex flex-column flex-md-row w-100 mx-auto bg-white h-100 overflow-auto'>
            {/* <BranchList branches={branches} onSelectBranch={setSelectedBranchId} selectedBranchId={selectedBranchId} /> */}
            <div className="branch-list bg-white overflow-y-auto">
              {filteredLocations.map(branch => (
                <div className='mx-2 border-bottom'>
                  <div
                    key={branch.id}
                    className="my-2 p-2 branch-item"
                    onClick={() => setSelectedBranchId(branch.id)}
                    style={{ backgroundColor: branch.id === selectedBranchId ? '#cec3c3e7' : 'transparent' }}
                  >
                    <h3>{branch.name}</h3>
                    <p className='m-0'><i class="bi bi-geo-alt-fill me-1"></i>{branch.address}</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <Link to={branch.loc} target='_blank' className='nav-link px-3 py-2 mt-2 rounded-2'>GET DIRECTIONS</Link>
                      <img width={50} src={branch.src} alt="" draggable='false' />
                    </div>
                  </div>
                </div>
              ))}
              {filteredLocations.length === 0 && (
                <div className='mx-2 border-bottom my-2 p-2 branch-item'>
                  <p className='m-0'>No Result Found</p>
                </div>
              )}
            </div>
            <MapComponent branches={branches} selectedBranchId={selectedBranchId} onSelectBranch={setSelectedBranchId} onCloseMap={handleCloseMap} />
          </div>
        </div>
      )}
    </>
  )
}

export default Section01