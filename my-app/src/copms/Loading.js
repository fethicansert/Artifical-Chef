import React from 'react'
import { Hourglass } from 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner';

const LoadingSpinner = () => {
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
                Yemek Tarifleriniz Hazırlanıyor...
            </p>
        </div>
    )
}

export default LoadingSpinner
