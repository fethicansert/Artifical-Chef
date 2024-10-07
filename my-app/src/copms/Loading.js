import React from 'react'
import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner = ({ text, color = '#D4212F' }) => {
    return (
        <div className='loading-spinner'>

            <RotatingLines
                visible={true}
                height="105"
                width="105"
                strokeWidth='3.5'
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                strokeColor={color}
            />

            {text && <p className='loading-spinner-text'>{text}</p>}

        </div>
    )
}

export default LoadingSpinner
