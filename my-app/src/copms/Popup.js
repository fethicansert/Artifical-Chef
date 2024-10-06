import React, { useEffect, useRef, useState } from 'react';
import { RiRobot2Line } from "react-icons/ri";

const Popup = ({ popupOptions, setPopupOptions }) => {

    const popupRef = useRef(null);
    console.log(popupOptions);

    useEffect(() => {
        //set listener when comp mounted
        document.addEventListener('mousedown', closeHeader);

        //funcs
        function cleanUp() {
            document.removeEventListener('mousedown', closeHeader)
        }

        function closeHeader(event) {
            if (!popupRef.current.contains(event.target)) {
                setPopupOptions(prev => ({ ...prev, show: false }));
            }
        }

        //cleanr listeners when comp unmount
        return cleanUp;
    }, []);

    return (
        <div ref={popupRef} className='popup'>

            <p className='popup-message'>{popupOptions.message}</p>

            <button
                className='popup-button'
                style={{ backgroundColor: popupOptions.btnColor }}
                onClick={popupOptions.onClick}>
                {popupOptions.btnName}
            </button>

        </div>
    )
}

export default Popup
