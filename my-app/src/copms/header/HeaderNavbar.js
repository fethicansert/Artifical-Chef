import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderNavbar = ({ isActiveNav, setIsActiveNav }) => {

    const navigate = useNavigate();

    return (
        <nav className={`header-nav-bar ${isActiveNav ? 'active' : ''}`} >
            <ul className='header-nav-bar-list'>
                <li
                    onClick={() => navigateAndClose('/')}
                    className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                    Home
                </li>
                <li
                    onClick={() => navigateAndClose('login')}
                    className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                    Login
                </li>
                <li
                    onClick={() => navigateAndClose('register')}
                    className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                    Register
                </li>
            </ul>
        </nav>
    );

    function navigateAndClose(location) {
        navigate(location);
        setIsActiveNav(false);
    }
}

export default HeaderNavbar
