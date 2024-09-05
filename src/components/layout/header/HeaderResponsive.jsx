import React from 'react';
import facebookLogo from '../../../assets/facebook-logo.svg'
import instagramLogo from '../../../assets/instagram-logo.svg'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import mainLogo from '../../../assets/main-logo.svg'
import dropdownArrow from '../../../assets/dropdown-arrow.svg'
import mobToggler from '../../../assets/mobile-toggler.svg'
import $ from 'jquery'

const HeaderResponsive = () => {
  window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1) {
        // $("#header_mobile").addClass("headerScroll")
        $("#header_mobile").removeClass("border-bottom")
    } else {
        // $("#header_mobile").removeClass("headerScroll")
        $("#header_mobile").addClass("border-bottom")
    }
}
  return (
    <>
      <nav className="navbar bg-white position-fixed w-100 top-0 z-2 p-0">
        <div className="container-fluid py-2 px-0 mx-4 customHeader" id='header_mobile'>
          <button id='navbar-toggler' className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <img src={mobToggler} width={35} alt="" draggable='false' />
          </button>
          <Link>
            <img className='mainLogo' src={mainLogo} alt="Now And Forever" draggable='false' />
          </Link>
            <div className="offcanvas-header">
              <div>
                <Link className='me-4' to="https://www.facebook.com/nowandforevertx/" target={'_blank'}>
                  <img src={facebookLogo} alt="" draggable='false' />
                </Link>
                <Link to="https://www.instagram.com/nowandforevertx/?hl=en" target={'_blank'}>
                  <img src={instagramLogo} alt="" draggable='false' />
                </Link>
              </div>
            </div>
          <div className="offcanvas offcanvas-start" tabIndex={"-1"} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <button type="button" id='btncloseNav' className="btn-close position-absolute end-0 mt-3 me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <div className="offcanvas-body">
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/">Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/products">Our Products</NavLink>
                </li>
                {/* <li className='nav-item dropdown'>
                  <NavLink className='nav-link' to="/services" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Our Services <img className='ms-1' src={dropdownArrow} alt="dropdown" /></NavLink>
                  <ul className="dropdown-menu px-2 py-1">
                    <li><NavLink className="nav-link py-1" to="/services">Action</NavLink></li>
                    <li><NavLink className="nav-link py-1" to="/services">Action</NavLink></li>
                  </ul>
                </li> */}
                <li className='nav-item dropdown'>
                  <NavLink id='nav-toggler' className="nav-link collapsed" to="" type="button" data-bs-toggle="collapse" data-bs-target="#nav-drop-menu" aria-expanded="false" aria-controls="nav-drop-menu">
                    Our Services <img id='image-toggler' className='ms-1' src={dropdownArrow} alt="dropdown" draggable='false' />
                  </NavLink>
                  <ul id="nav-drop-menu" className="navbar-nav collapse">
                    <li><NavLink className="nav-link navLink py-1 px-2" to="/services/money-services">Money Services</NavLink></li>
                    <li><NavLink className="nav-link navLink py-1 px-2" to="/services/fuel-fill-up">Fuel Fill-up</NavLink></li>
                    <li><NavLink className="nav-link navLink py-1 px-2" to="/services/car-wash">Car Wash</NavLink></li>
                    <li><NavLink className="nav-link navLink py-1 px-2" to="/services/fresh-food">Fresh Food</NavLink></li>
                  </ul>
                </li>


                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/merch">Merch</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/moos-news">Moo's News</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/aboutus">About Us</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/careers">Careers</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link navLink' to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>



    </>

  )
}

export default HeaderResponsive