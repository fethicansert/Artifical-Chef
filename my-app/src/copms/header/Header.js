import React, { useState } from 'react'
import { RiRobot2Line } from "react-icons/ri";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import { FaRegUserCircle } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import HeaderNavbar from './HeaderNavbar';

import logo from '../../images/Unknown.jpeg'

const Header = ({ isPrepered }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [isActiveNav, setIsActiveNav] = useState();

    return (
        <header>

            <RiRobot2Line size={30} color='#D4212F' />
            {/* <img src={logo} width={40}></img> */}

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

            {/* {
                location.pathname !== '/' &&
                <FaRegArrowAltCircleLeft
                    onClick={() => navigate('/')}
                    size={27}
                    className='header-route-arrow-icon'
                />
            }

            {
                (location.pathname === '/' && isPrepered) &&
                <FaRegArrowAltCircleRight
                    name='button'
                    type='button'
                    onClick={() => navigate('/recipes')}
                    size={27}
                    className='header-route-arrow-icon'
                />
            } */}
        </header>
    )
}

export default Header
