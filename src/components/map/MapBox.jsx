import React, { useState, useEffect, useRef } from 'react';
import locationIcon from '../../assets/Home/home-location-icon.svg';
import arrowRight from '../../assets/Home/home-direction-icon.svg';
import MapComponent from './MapComponent';
import { branches } from '../map/branchesData';
import Layout from '../layout/layout';
import { Link } from 'react-router-dom';

const MapBox = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchPlace, setsearchPlace] = useState('');

    const filteredLocations = branches.filter((search_place) =>
        search_place.name.toLowerCase().includes(searchPlace.toLowerCase()) ||
        search_place.address.toLowerCase().includes(searchPlace.toLowerCase())
    );

    const handleFocus = (event) => {
        setsearchPlace(event.target.value);
    };
    const [selectedBranchId, setSelectedBranchId] = useState(null);

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
        <Layout title="Locations">
            <div className='d-flex align-items-center justify-content-center pb-2 pb-lg-3 pt-2 mx-2 home-section01 noFooterSearch'>
                <img width={18} className='locationIcon' src={locationIcon} alt="" draggable='false' />
                <input ref={inputRef} onChange={handleFocus} className='px-5 py-2 bg-transparent' id="location-input" type="text" placeholder='Find Us' />
                <img width={18} className='arrowRight' src={arrowRight} alt="" draggable='false' />
            </div>
            <div className='d-flex flex-column flex-md-row mapbox-mobile'>
                <div className="branch-list bg-white overflow-y-auto map-div-page">
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
                <MapComponent branches={branches} selectedBranchId={selectedBranchId} onSelectBranch={setSelectedBranchId} />
            </div>
        </Layout>
    )
}

export default MapBox