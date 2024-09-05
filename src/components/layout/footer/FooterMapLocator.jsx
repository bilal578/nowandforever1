import React, { useState, useEffect, useRef } from 'react';
import locationIcon from '../../../assets/location-icon.svg'
import arrowRight from '../../../assets/arrow-right.svg'
import { branches } from '../../map/branchesData';
import { Link } from 'react-router-dom';

const FooterMapLocator = () => {
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
    
    const handleSearchInputFocus = (event) => {
        const searchInput = event.target;
        searchInput.addEventListener('drop', (e) => {
            e.preventDefault();
        });
    };


    return (
        <>
            <div className='d-flex align-items-center justify-content-center position-relative bg-footer'>
                <div className='d-flex align-items-center justify-content-center px-2'>
                    <img width={18} className='locationIcon' src={locationIcon} alt="" />
                    <input ref={inputRef} onFocus={handleSearchInputFocus} onChange={handleFocus} className='px-5 py-2 bg-transparent' type="text" placeholder='Store Locator' />
                    <img width={18} className='arrowRight' src={arrowRight} alt="" />
                </div>
                {isDivVisible && (
                    <div ref={divRef} className={`position-absolute map-div-footer ${isClosing ? 'fade-in' : 'fade-out'}`}>
                        <div className="branch-list bg-white overflow-y-auto">
                            {filteredLocations.map(branch => (
                                <div className='branch-item mx-2 border-bottom'>
                                    <div
                                        key={branch.id}
                                        className="my-2 p-2"
                                        onClick={() => setSelectedBranchId(branch.id)}
                                        style={{ backgroundColor: branch.id === selectedBranchId ? '#cec3c3e7' : 'transparent' }}
                                    >
                                        <h3>{branch.name}</h3>
                                        <p className='m-0 text-dark'><i class="bi bi-geo-alt-fill me-1"></i>{branch.address}</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <Link to={branch.loc} target='_blank' className='nav-link px-3 py-2 mt-2 rounded-2'>GET DIRECTIONS</Link>
                                            <img width={50} src={branch.src} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {filteredLocations.length === 0 && (
                                <div className='mx-2 border-bottom my-2 p-2 branch-item'>
                                    <p className='m-0 text-dark'>No Result Found</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default FooterMapLocator