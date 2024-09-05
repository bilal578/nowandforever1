import React from 'react'
import mainLogo from '../../../assets/main-logo.svg'
import fbFooter from '../../../assets/fb-footer.svg'
import instaFooter from '../../../assets/insta-footer.svg'
import FooterMapLocator from './FooterMapLocator'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FooterDesktop = () => {
  return (
    <>
      <div className='text-white bg-lower-footer'>
        <FooterMapLocator />
        <div className='d-flex justify-content-around p-lower-footer'>
          <img className='mainLogo' src={mainLogo} alt="footer logo" draggable='false' />
          <div>
            <h6 className='mb-3'>MENU</h6>
            <ul className='navbar-nav'>
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to='/careers'>Careers</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to='/locations'>Locations</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to='/contact'>Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h6 className='mb-3'>INFORMATION</h6>
            <ul className='navbar-nav'>
              {/* <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to=''>Our Services</NavLink></li> */}
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to='/aboutus'>About Us</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to='/privacy-policy'>Privacy Policy</NavLink></li>
            </ul>
          </div>
          <div>
            <h6 className='mb-3'>CONTACT INFO</h6>
            <ul className='navbar-nav'>
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to='mailto:Customerservice@nowandforever.com'>Customerservice@nowandforever.com</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link line-height-1 fw-lighter font-size-15px' to=''>24 Hours 7 Days a week</NavLink></li>
            </ul>
          </div>
          <div>
            <h6 className='mb-3'>FOLLOW US</h6>
            <div className='d-flex'>
              <Link className='me-3 footerLogo' to="https://www.facebook.com/nowandforevertx/" target={'_blank'}>
                <img width={20} height={20} src={fbFooter} alt="" draggable='false' />
              </Link>
              <Link className='footerLogo' to="https://www.instagram.com/nowandforevertx/?hl=en" target={'_blank'}>
                <img width={20} height={20} src={instaFooter} alt="" draggable='false' />
              </Link>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center py-2 border-top m-auto w-lower-footer'>
          <p className=' fw-lighter my-3'>© 2024 - NowAndForever. All Rights Reserved. Designed & Developed by <a className='text-decoration-none text-white' rel='noreferrer' target='_blank' href="https://mean3.com/">Mean3 Pvt Ltd</a>.</p>
        </div>
      </div>

    </>
  )
}

export default FooterDesktop