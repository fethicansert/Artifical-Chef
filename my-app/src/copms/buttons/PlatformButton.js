import React from 'react'

const PlatformButton = ({ children, icon, onClick }) => {
    console.log(onClick);
    return (
        <button onClick={onClick} type='button' className='login-submit-button platform-button'>
            <img src={icon} width={30} />
            <span>{children}</span>
        </button>
    )
}

export default PlatformButton
