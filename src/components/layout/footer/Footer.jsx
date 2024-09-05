import React, { useState, useEffect } from 'react';
import FooterDesktop from './FooterDesktop';
import FooterResponsive from './FooterResponsive';
import './Footer.css'

const Footer = () => {
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
            {isResponsiveMode ? <FooterResponsive /> : <FooterDesktop />}
        </>
    );
}

export default Footer