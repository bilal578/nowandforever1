import React from 'react'
import mainLogo from '../../../assets/main-logo.svg'
import facebookLogo from '../../../assets/facebook-logo.svg'
import instagramLogo from '../../../assets/instagram-logo.svg'
import dropdownArrow from '../../../assets/dropdown-arrow.svg'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import $ from 'jquery'

const HeaderDesktop = () => {
    
    // window.onscroll = function () { scrollFunction() };
    window.onscroll = function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1) {
            // $("#header-desktop").addClass("headerScroll")
            $("#header-desktop").removeClass("border-bottom")
        } else {
            // $("#header-desktop").removeClass("headerScroll")
            $("#header-desktop").addClass("border-bottom")
        }
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg p-0 position-fixed w-100 top-0 bg-white'>
                <div className='container customHeader' id='header-desktop'>
                    <div className='d-flex justify-content-center mainLogoDiv'>
                        <Link to="/">
                            <img className='mainLogo' src={mainLogo} alt="Now And Forever" id='mainLogo' draggable="false" />
                        </Link>
                    </div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/products">Our Products</NavLink>
                        </li>
                        <li className= 'nav-item dropdown'>
                            <NavLink className='nav-link mx-2 font-size-13px nav-img ' to="">Our Services <img className='ms-1' src={dropdownArrow} alt="dropdown" draggable='false'   /></NavLink>
                            <ul className= "dropdown-menu">
                               
                                <li><NavLink className="nav-link font-size-13px navLink" to="/services/fuel-fill-up">Fuel</NavLink></li>
                                <li><NavLink className="nav-link font-size-13px navLink" to="/services/money-services">Money Services</NavLink></li>
                                <li><NavLink className="nav-link font-size-13px navLink" to="/services/car-wash">Car Wash</NavLink></li>
                                <li><NavLink className="nav-link font-size-13px navLink" to="/services/fresh-food">Fresh Food</NavLink></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/merch">Merch</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/moos-news">Moo's News</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/aboutus">About Us</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/careers">Careers</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link navLink mx-2 font-size-13px' to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <Link className='me-4' to="https://www.facebook.com/nowandforevertx/" target={'_blank'}>
                            <img className='header-social fb ' src={facebookLogo} alt="" draggable='false' />
                        </Link>
                        <Link to="https://www.instagram.com/nowandforevertx/?hl=en" target={'_blank'}>
                            <img className='header-social' src={instagramLogo} alt="" draggable='false' />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderDesktop