import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogut from '../../hooks/useLogut';
const HeaderNavbar = ({ isActiveNav, setIsActiveNav, isPrepered }) => {

    const navigate = useNavigate();
    const { auth } = useAuth();
    const logout = useLogut();

    return (
        <nav className={`header-nav-bar ${isActiveNav ? 'active' : ''}`} >
            <ul className='header-nav-bar-list'>

                <li
                    onClick={() => navigateAndClose('/')}
                    className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                    Create Recipes
                </li>

                {
                    isPrepered &&
                    <li
                        onClick={() => navigateAndClose('recipes')}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        Recipes
                    </li>
                }


                {
                    !auth?.token &&
                    <li
                        onClick={() => navigateAndClose('login')}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        Login
                    </li>
                }

                {
                    !auth?.token &&
                    <li
                        onClick={() => navigateAndClose('register')}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        Register
                    </li>
                }

                {
                    auth?.token &&
                    <li
                        onClick={() => {
                            logout();
                            setIsActiveNav(false);
                        }}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        Logout
                    </li>
                }

            </ul>
        </nav>
    );

    function navigateAndClose(location) {
        navigate(location);
        setIsActiveNav(false);
    }
}

export default HeaderNavbar
