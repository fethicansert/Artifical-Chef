import React from 'react'
import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner = ({ text }) => {
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
                strokeColor='#D4212F'
            />

            <p className='loading-spinner-text'>
                Recipes are Preparing
            </p>

        </div>
    )
}

export default LoadingSpinner
