// src/components/MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./Map.css";
import { Link } from 'react-router-dom';

const MapComponent = ({ branches, selectedBranchId, onSelectBranch, onCloseMap }) => {
  const selectedBranch = branches.find(branch => branch.id === selectedBranchId);

  return (
    <>
      <button className="p-0 border-0 position-absolute map-close-button bg-transparent" onClick={onCloseMap} type='button'><i class="bi bi-x-square-fill icon"></i></button>
      <MapContainer
        className='w-100 mapbox-customClass'
        center={[40.712776, -74.005974]}
        zoom={13}
        maxBounds={[
          [-90, -180], // Southwest coordinates
          [90, 180]    // Northeast coordinates
        ]}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
        />
        {branches.map(branch => (
          <Marker
            key={branch.id}
            position={[branch.lat, branch.lng]}
            icon={L.divIcon({
              className: selectedBranchId === branch.id ? 'selected-branch' : 'unselected-branch',
              // html: `<div style="background-color:${selectedBranchId === branch.id ? 'red' : 'green'}; width: 10px; height: 10px; border-radius: 50%;"></div>`
              html: `<svg class='bi bi-geo-alt-fill ${selectedBranchId === branch.id ? "location-icon-map-selected" : "location-icon-map"}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>`
            })}
            eventHandlers={{ click: () => { onSelectBranch(branch.id); }, }}
          >
            <Popup> 
              <div className="py-2 branch-item">
              <h3>{branch.name}</h3>
              <p className='m-0'><i class="bi bi-geo-alt-fill me-1"></i>{branch.address}</p>
              <div className='d-flex justify-content-between align-items-end'>
                <Link to={branch.loc} target='_blank' className='nav-link px-3 py-2 mt-2 rounded-2'>GET DIRECTIONS</Link>
                <img width={50} src={branch.src} alt="" draggable='false'/>
              </div>
            </div>
            </Popup>
          </Marker>
        ))}
        {selectedBranch && <MapUpdater center={[selectedBranch.lat, selectedBranch.lng]} />}
      </MapContainer>
    </>
  );
};

// Component to update the map view
const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15); // Zoom level 15 for closer view
  }, [center, map]);
  return null;
};

export default MapComponent;
