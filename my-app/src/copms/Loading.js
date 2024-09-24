import React from 'react'
import { Hourglass } from 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner';

const LoadingSpinner = ({ text }) => {
    return (
        <div className='loading-spinner'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                color='#D4212F'

            />
            <p className='loading-spinner-text'>
                {text}
            </p>
        </div>
    )
}

export default LoadingSpinner
