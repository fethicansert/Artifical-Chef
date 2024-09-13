import React from 'react'
import { RiRobot2Line } from "react-icons/ri";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ isPrepered }) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <header>

            <RiRobot2Line size={30} color='rgb(227, 87, 37)' />
            <h1 className={'header-title'} >Yapay Bi Şef</h1>

            {
                location.pathname !== '/' &&
                <FaRegArrowAltCircleLeft
                    onClick={() => navigate('/')}
                    size={27}
                    className='header-route-left-arrow'
                />
            }

            {
                (location.pathname === '/' && isPrepered) &&
                <FaRegArrowAltCircleRight
                    onClick={() => navigate('/recipes')}
                    size={27}
                    className='header-route-right-arrow'
                />
            }
        </header>
    )
}

export default Header
