import React from 'react'
import mainLogo from '../../../assets/main-logo.svg'
import fbFooter from '../../../assets/fb-footer.svg'
import instaFooter from '../../../assets/insta-footer.svg'
import FooterMapLocator from './FooterMapLocator'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FooterResponsive = () => {
  return (
    <>
      <div className='text-white bg-lower-footer'>
      <FooterMapLocator />
        <div className='d-flex flex-column align-items-center text-center w-100 pt-5 px-4 widthFooterResponsive'>
          <div className='w-100'>
            <img className='mb-4' src={mainLogo} width={60} alt="footer logo" draggable='false' />
            <h6 className='mb-3 font-size-17px font-size-14px'>FOLLOW US</h6>
            <div className='d-flex justify-content-center mb-4'>
              <Link className='me-2 footerLogo' to="https://www.facebook.com/nowandforevertx/" target={'_blank'}>
                <img width={20} height={20} src={fbFooter} alt="" draggable='false' />
              </Link>
              <Link className='footerLogo' to="https://www.instagram.com/nowandforevertx/?hl=en" target={'_blank'}>
                <img width={20} height={20} src={instaFooter} alt="" draggable='false' />
              </Link>
            </div>
          </div>

          <div className='w-100 mb-4 pb-4 border-bottom border-1'>
            <h6 className='mb-3 font-size-17px font-size-14px'>MENU</h6>
            <ul className='navbar-nav'>
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to='/careers'>Careers</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to='/locations'>Locations</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to='/contact'>Contact Us</NavLink></li>
            </ul>
          </div>

          <div className='w-100 mb-4 pb-4 border-bottom border-1'>
            <h6 className='mb-3 font-size-17px font-size-14px'>INFORMATION</h6>
            <ul className='navbar-nav'>
              {/* <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to=''>Our Services</NavLink></li> */}
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to='/aboutus'>About Us</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to='/privacy-policy'>Privacy Policy</NavLink></li>
            </ul>
          </div>

          <div className='w-100 pb-4 border-bottom border-1'>
            <h6 className='mb-3 font-size-17px font-size-14px'>CONTACT INFO</h6>
            <ul className='navbar-nav'>
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to='' style={{ wordBreak: 'break-all', lineHeight: "1em" }}>Customerservice@nowandforever.com</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link py-1 line-height-1 fw-lighter font-size-15px font-size-12px' to=''>24 Hours 7 Days a week</NavLink></li>
            </ul>
          </div>

          <div className='w-100 pb-4'>
            <p className='fw-lighter font-size-15px font-size-12px m-3 text-center'>© 2024 - NowAndForever. All Rights Reserved. Designed & Developed by <a className='text-decoration-none text-white' href="https://mean3.com/">Mean3 Pvt Ltd</a>.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterResponsive