import React, { useState, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderResponsive from './HeaderResponsive';
import './Header.css'

const Header = () => {
    const [isResponsiveMode, setisResponsiveMode] = useState(false);

    useEffect(() => {
        const responsiveness = () => {
            setisResponsiveMode(window.innerWidth < 992);
        };
        responsiveness();
        window.addEventListener('resize', responsiveness);

        return () => {
            window.removeEventListener('resize', responsiveness);
        };
    }, []);

   


    return (
        <>
            {isResponsiveMode ? <HeaderResponsive /> : <HeaderDesktop />}
        </>
    );
}

export default Header