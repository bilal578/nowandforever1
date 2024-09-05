import React, { useState } from 'react'
import "./Map.css";
import { Link } from 'react-router-dom';
import { branches } from './branchesData';

const BranchList = ({ onSelectBranch, selectedBranchId }) => {
  const [searchPlace, setsearchPlace] = useState('');
  const handlePlaces = (event) => {
    setsearchPlace(event.target.value);
  };
  const filteredLocations = branches.filter((job) =>
    job.name.toLowerCase().includes(searchPlace.toLowerCase())
  );
  return (
    <>
      <div className="branch-list bg-white overflow-y-auto">
        <input onChange={handlePlaces}/>
        {filteredLocations.map(branch => (
          <div className='mx-2 border-bottom'>
            <div
              key={branch.id}
              className="my-2 p-2 branch-item"
              onClick={() => onSelectBranch(branch.id)}
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
      </div>
    </>
  );
};

export default BranchList;
