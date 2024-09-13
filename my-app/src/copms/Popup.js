import React from 'react';
import { RiRobot2Line } from "react-icons/ri";

const Popup = ({ message, setShowPopup, setErrorMessage }) => {
    return (
        <div className='popup'>
            <p className='popup-message'>{message}</p>
            <button
                onClick={() => {
                    setErrorMessage('');
                }}
                className='popup-button'>
                Kapat
            </button>

            {/* <RiRobot2Line className='popup-icon' size={60} /> */}
        </div>
    )
}

export default Popup
