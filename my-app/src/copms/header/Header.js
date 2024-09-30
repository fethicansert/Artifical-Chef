import React, { useState, useRef, useEffect } from 'react'
import { RiRobot2Line } from "react-icons/ri";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import { FaRegUserCircle } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";

import HeaderNavbar from './HeaderNavbar';

import { FaUser } from "react-icons/fa6";

import logo from '../../images/Unknown.jpeg'
import useAuth from '../../hooks/useAuth';

const Header = ({ isPrepered }) => {

    const [isActiveNav, setIsActiveNav] = useState(false);

    const navigate = useNavigate();

    const { auth } = useAuth();

    const headerRef = useRef(null);

    useEffect(() => {

        //set listener when comp mounted
        document.addEventListener('click', closeHeader);

        //cleanr listeners when comp unmount
        return cleanUp;

        //funcs
        function cleanUp() {
            document.removeEventListener('click', closeHeader)
        }

        function closeHeader(event) {
            if (!headerRef.current.contains(event.target)) {
                setIsActiveNav(false);
            }
        }
    }, [])

    return (
        <header ref={headerRef}>

            <RiRobot2Line size={30} color='#D4212F' />

            <h1 className={'header-title'} >Artificial Chef</h1>

            <RxHamburgerMenu
                onClick={() => setIsActiveNav(!isActiveNav)}
                size={27}
                className='header-menu-icon'
            />

            <HeaderNavbar
                isActiveNav={isActiveNav}
                setIsActiveNav={setIsActiveNav}
                isPrepered={isPrepered}
            />
            {auth.username &&
                <FaUser
                    color='#339c6e'
                    size={21}
                    className='header-user-icon'
                    onClick={() => auth?.username ? console.log(`Hello ${auth.username}`) : navigate('/login')}
                />
            }
        </header>
    )
}

export default Header
