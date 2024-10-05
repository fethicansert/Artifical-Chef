import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogut from '../../hooks/useLogut';
import { ThreeDots } from 'react-loader-spinner';
const HeaderNavbar = ({ isActiveNav, setIsActiveNav }) => {

    const { auth } = useAuth();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const logout = useLogut();


    return (

        <nav className={`header-nav-bar ${isActiveNav ? 'active' : ''}`} >
            <ul className='header-nav-bar-list'>

                <li
                    onClick={() => navigateAndClose('/')}
                    className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                    Prepare Recipes
                </li>

                <li
                    onClick={() => navigateAndClose('recipes')}
                    className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                    Recipes
                </li>


                {
                    !auth?.username &&
                    <li
                        onClick={() => navigateAndClose('login')}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        Login
                    </li>
                }

                {
                    !auth?.username &&
                    <li
                        onClick={() => navigateAndClose('register')}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        Register
                    </li>
                }

                {
                    auth?.username &&
                    <li
                        onClick={() => navigateAndClose(`user/${auth.id}`)}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        {auth?.username}
                    </li>
                }

                {
                    auth?.username &&
                    <li
                        onClick={async () => {
                            setIsLoading(true);
                            await logout();
                            setIsLoading(false);

                            navigateAndClose('/');
                        }}
                        className={`header-nav-bar-list-item ${isActiveNav ? 'active' : ''}`}>
                        {!isLoading ? 'Logout'
                            : <ThreeDots color='#D4212F' height={21.8} width={30} wrapperClass='login-submit-loading' />}
                    </li>
                }

            </ul>
        </nav>
    );

    function navigateAndClose(location) {
        navigate(location, { state: pathname });
        setIsActiveNav(false);
    }
}

export default HeaderNavbar
